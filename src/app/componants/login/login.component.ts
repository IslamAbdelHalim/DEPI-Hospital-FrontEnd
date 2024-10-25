import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ResponseModel } from '../../models/responseModel';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;
  message: string = '';

  constructor(private user: UserService, private router: Router, private authService: AuthService) {}

  submit() {
    const data = {
      email: this.email,
      password: this.password
    }

    this.user.login(data).subscribe((res: ResponseModel) => {
      const id = res.data.user._id;
      localStorage.setItem('id', id);
      localStorage.setItem('token', res.token);
      this.authService.login();
      this.router.navigate([`user/${id}`])
    }, (err) => {
      this.message = err.error.message;
    })

  }

}
