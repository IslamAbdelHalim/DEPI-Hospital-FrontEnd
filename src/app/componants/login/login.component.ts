import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ResponseModel } from '../../models/responseModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private user: UserService, private router: Router) {}

  submit() {
    const data = {
      email: this.email,
      password: this.password
    }

    this.user.login(data).subscribe((res: ResponseModel) => {
      console.log(res );
      const token = res.token;
      const id = res.data.user._id;
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);

      this.router.navigate([`user/${id}`])
    }, (err) => {
      console.log(err)
    })

  }

}
