import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http'
import { Jira, Certificates } from './data-model';
import { Base64 } from 'js-base64';

@Injectable({
  providedIn: 'root'
})
export class ApigttService {
  loginEndpoint: string = 'api/auth';
  usersEndpoint: string = 'api/users';
  cetificatesEndponit: string = 'api/certificates';
  jiraEndpoint:string = 'api/jira';
  vaidateJiraUserEndpoint:string = 'rest/auth/1/session';
  addTaskJiraEndpoint:string = 'rest/api/2/issue';
  userType: string;
  auBase64:string;
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
    const user = jiraData.username;
    const password = jiraData.password;
    const body = {'username':user, 'password':password};
    const options = {headers: {
      "X-Atlassian-Token": "nocheck",
      "Content-Type": "application/json",
      "User-Agent": "xx"
    }
  }
    return this.http.post(this.vaidateJiraUserEndpoint,body,options).toPromise();
  }
  addJiraTask(jiraData:Jira,auString,cert:Certificates){
    console.log(jiraData.issue);
    this.auBase64 = Base64.encode(auString);
    const body={
      
        "fields": {
           "project":
           {
              "key": jiraData.proyect
           },
           "summary": `El certificado con alias ${cert.alias} caducara el ${cert.expireDate}`,
           "description": jiraData.descripition,
           "issuetype": {
              "name": jiraData.issue
           }
       }
    }
    const options = {
      headers:{
        "X-Atlassian-Token": "nocheck",
        "Content-Type": "application/json",
        "User-Agent": "xx",
        "Authorization":"Basic "+this.auBase64
      }
    }
    return this.http.post(this.addTaskJiraEndpoint,body,options).toPromise();
  }
  manipulateDBJira(postRequest,jiraData:Jira){
    console.log(jiraData);
    const options = {
      headers:{
        "Content-Type":"application/json" 
      }
    }
    if(postRequest == true){
      return this.http.post(this.jiraEndpoint,jiraData).toPromise();
    }
    return this.http.put(this.jiraEndpoint+`/${jiraData.iduser}`,jiraData,options).toPromise();
  }
  updateCertDB(cert:Certificates){
    const body = { cert };
    return this.http.put(this.cetificatesEndponit+`/${cert.id}`,body).toPromise();
  }
}
