import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApigttService {
  loginEndpoint: string = 'api/auth';
  usersEndpoint: string = 'api/users';
  cetificatesEndponit: string = 'api/certificates';
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

  getBackEndData(): any{
    return this.http.get(this.cetificatesEndponit).toPromise();
  }
}
