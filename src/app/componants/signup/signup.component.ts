import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ResponseModel } from '../../models/responseModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
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


  constructor(private userService: UserService, private router: Router) {}

  submit() {
    const body = {
      username: this.username,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      birthday: this.birthday,
    }

    this.userService.register(body).subscribe((res: ResponseModel) => {
      const slugName = res.data.user.nameSlugs;
      const token = res.token;
      localStorage.setItem('token', token)

      this.router.navigate(['/user', slugName])
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

