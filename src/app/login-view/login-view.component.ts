import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApigttService } from '../apigtt.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  user:string;
  password:string;
  error:any;
  constructor(private router: Router, private api:ApigttService) { }

  login(){
    const {user, password} = this;
    this.api.loginUser(user.trim(),password.trim()).then(() =>{
      this.error = undefined;
      this.router.navigate(['/panel-view'])
    }).catch(error =>{
      this.error = error
    });
  }

}