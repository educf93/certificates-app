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
  showError:boolean = false;
  jwt:string;
  constructor(private router: Router, private api:ApigttService) { }

  login(){
    const {user, password} = this;
    this.error = "Nombre de usuario o contraseña erronea"
    this.api.loginUser(user.trim(),password.trim()).then((result) =>{
      // if(result.status() === 401){
      //   this.error;
      //   console.log(this.error);
      // }
      this.error=undefined;
      console.log(result);
      
      this.jwt = JSON.parse(result).token;
      
      console.log(this.jwt);
      this.router.navigate(['/panel-view']);
    }).catch((error) =>{
      this.error;
      this.showError=true;
      console.log(error);
    });
  }

}