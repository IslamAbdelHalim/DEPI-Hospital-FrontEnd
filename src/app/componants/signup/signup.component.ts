import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ResponseModel } from '../../models/responseModel';
import {AuthService} from "../../services/auth.service";
import { DatePipe} from "@angular/common";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [DatePipe]
})
export class SignupComponent {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordConfirm: string | undefined;
  birthday: string | undefined;
  errMail: boolean = false;
  errPassConfirm: boolean = false;
  errPass: boolean = false;


  constructor(private userService: UserService, private router: Router, private authService: AuthService, private datePipe: DatePipe) {}

  submit() {
    const body = {
      username: this.username,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      birthday: this.datePipe.transform(this.birthday, "yyyy-MM-dd"),
    }

    this.userService.register(body).subscribe((res: ResponseModel) => {
      const id = res.data.user._id;
      localStorage.setItem('id', id);
      localStorage.setItem('token', res.token);
      this.authService.login();
      this.router.navigate(['/user', id])
    },
    err => {
      if(err.error.message.includes('duplicate')) {
        this.errMail = true;
      }
      if (err.error.message.includes('passwordConfirm')) {
        this.errPassConfirm = true;
      }
      if (this.password!.length < 6) {
        this.errPass = true;
      }
    }
    );
  }
}

