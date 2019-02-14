import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http'
import { Jira } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class ApigttService {
  loginEndpoint: string = 'api/auth';
  usersEndpoint: string = 'api/users';
  cetificatesEndponit: string = 'api/certificates';
  jiraEndpoint:string = 'api/jira';
  vaidateJiraUserEndpoint:string = 'rest/auth/1/session';
  userType: string;
  constructor(private http: HttpClient) {}

  loginUser(username, password): any {
    const body = {
      username,
      password
    }
    return this.http.post(this.loginEndpoint, body).toPromise();
  }
  registerUser(username: string, email: string, password: string, role: string): any {
    const body = {
      username,
      password,
      email,
      role
    }
    console.log(JSON.stringify(body));
    return this.http.post(this.usersEndpoint, body).toPromise();
  }
  sendCertificate(content,alias,repo,clientName,password,integrations,emailRenov,observations){
    const body = {content,alias,repo,clientName,password,integrations,emailRenov,observations}
    return this.http.post(this.cetificatesEndponit,body).toPromise();
  }

  getBackEndData(id,dataType): any{
    console.log(id);
    if(id!=='' && dataType!=true){
      return this.http.get(this.cetificatesEndponit+`/${id}`).toPromise();
    }else if(id!=='' && dataType!=false){
      return this.http.get(this.jiraEndpoint+`/${id}`).toPromise();
    }
    return this.http.get(this.cetificatesEndponit).toPromise();
  }

  validateUser(jiraData:Jira){
    const user = jiraData.user;
    const password = jiraData.password;
    const url = jiraData.url;
    const body = {'username':user, 'password':password};
    
    this.http.post(this.jiraEndpoint,body);
    return this.http.post(url+this.vaidateJiraUserEndpoint,body).toPromise();
  }
  addJiraTask(jiraData:Jira,jiraToken){
    const body={};
    const options = {'Bearer':jiraToken}
    return this.http.post('',body).toPromise();
  }
}
