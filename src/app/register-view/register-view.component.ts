import {
  Component
} from '@angular/core';
import {
  ApigttService
} from '../apigtt.service';
import {
  Router
} from '@angular/router'
@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent {
  username: string;
  email: string;
  password: string;
  role: string = 'user';
  valid: boolean = false;
  error: boolean;
  constructor(private api: ApigttService, private router: Router) {}
  register() {
    console.log('envio la solicitud');
    const {
      username,
      email,
      password,
      role
    } = this
    console.log(username, email, password, role);
    if (password !== undefined && username !== undefined && email!==undefined) {
      if (username.trim() !== '' && password.trim() !== '' && email !== '') {
        this.valid = true;
        this.api.registerUser(username.trim(), email.trim(), password.trim(), role)
          .then(() => {
            setTimeout(() => {
              this.router.navigate(['/login'])
            }, 3000)
          });
      } else {
        this.error=true
      }
    } else {
      this.error=true
    }
  }
}
