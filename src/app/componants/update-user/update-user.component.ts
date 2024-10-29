import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
  providers: [DatePipe]
})
export class UpdateUserComponent {
  updateInfo: FormGroup = new FormGroup({})
  userDate: any = {};
  imageUrl: string = 'assets/profile.png'
  dialog: boolean = false;

  constructor(private userService: UserService,
              private router: Router,
              private spinner: NgxSpinnerService,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe) {}

  ngOnInit() {
    this.spinner.show();
    this.updateInfo = this.formBuilder.group({
      username: [this.userDate.username],
      email: [this.userDate.email, [Validators.email]],
      phone: [this.userDate.phone],
      birthday:[] ,
    });
    this.getUserData();
  }

  getUserData() {
    const id = this.router.url.split('/')[3];
    this.userService.getUser(id).subscribe((res) => {
      this.userDate = res.data.user;
      this.updateInfo.patchValue({
        username: this.userDate.username,
        email: this.userDate.email,
        phone: this.userDate.phone,
        birthday: this.datePipe.transform(this.userDate.birthday, 'yyyy-MM-dd'),
      });
      this.spinner.hide();
    }, (err) => {
      console.log(err);
      this.spinner.hide();
    })
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('ImageUpload') as HTMLInputElement;
    fileInput.click();
  }

  confirm(): void {
    this.dialog = true;
  }

  delete() {
    const id = this.router.url.split('/')[3];
    this.userService.deleteUser(id).subscribe((res) => {
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      this.spinner.hide();
      this.router.navigate([`auth/signup`])
    }, (err) => {
      console.log(err)
    })
  }

  update() {
    if (this.updateInfo.valid) {
      const id = this.router.url.split('/')[3];
      const updateData = this.updateInfo.value;
      this.spinner.show();
      this.userService.updateUser(id, updateData).subscribe((res) => {
        this.userDate = res.data.user
        this.spinner.hide();
        this.router.navigate(['/user/' + id]);
      }, (err) => {
        console.log(err)
      })
    } else {
      console.log('data is not valid')
    }
  }
}
