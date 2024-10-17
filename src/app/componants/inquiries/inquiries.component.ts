import { Component } from '@angular/core';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrl: './inquiries.component.css'
})
export class InquiriesComponent {
  inquiryData = {
    username: '',
    email: '',
    department: '',
    labPhone: '',
    radiologyPhone: '',
    otherInquiry: ''
  };

  onSubmit() {
    console.log(this.inquiryData);
    alert('تم إرسال استفسارك بنجاح');
  }


}
