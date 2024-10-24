import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrl: './sign-in-dialog.component.css'
})
export class SignInDialogComponent {

  constructor(public dialogRef: MatDialogRef<SignInDialogComponent>) {};

  closeDialog() {
    this.dialogRef.close();
  }

}
