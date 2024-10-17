import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  bookingData = {
    fullName: '',
    phoneNumber: '',
    bookingType: '',
    email: '',
    notes: ''
  };

  // عند تقديم النموذج
  onSubmit() {
    alert('تم تأكيد الحجز بنجاح');
    console.log(this.bookingData);
  }

  // إعادة ضبط النموذج
  resetForm() {
    this.bookingData = {
      fullName: '',
      phoneNumber: '',
      bookingType: '',
      email: '',
      notes: ''
    };
  }
}
 
}
