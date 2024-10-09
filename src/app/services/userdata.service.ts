import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}

  userdata = [    {
      name: 'حماده رمضان على محمد عاشور',
      email: 'hamada.ramadan.1996@gmail.com',
      dob: '20-4-1996',
      mobile: '01067592359',
    },];

  getUserData() {
    return this.userdata;
  }

  appointments = [
    {
      id: 1,
      name: 'حماده رمضان على محمد عاشور',
      email: 'hamada.ramadan.1996@gmail.com',
      dob: '20-4-1996',
      mobile: '01067592359',
      appointmentType: 'الاشعه',
      appointmentDate: '1-9-2024',
      status: 'اكتمل',
      Note: 'محتاج احجز الساعه 7 مساء بمركز الاشعه',
    },
    {
      id: 2,
      name: 'حماده رمضان على محمد عاشور',
      email: 'hamada.ramadan.1996@gmail.com',
      dob: '20-4-1996',
      mobile: '01067592359',
      appointmentType: 'المعمل',
      appointmentDate: '15-9-2024',
      status: 'اكتمل',
      Note: 'محتاج احجز فى المعمل لعمل تحاليل خاصه بى الساعه 8 مساء',
    },
    {
      id: 2,
      name: 'حماده رمضان على محمد عاشور',
      email: 'hamada.ramadan.1996@gmail.com',
      dob: '20-4-1996',
      mobile: '01067592359',
      appointmentType: 'عياده العظام',
      appointmentDate: '24-9-2024',
      status: 'جاريه',
      Note: 'أحتاج إلى حجز موعد في العيادة الخارجية الساعة 7 مساءً مع الدكتور أحمد، أخصائي جراحة العظام.',
    },
  ];
  getAppointments() {
    return this.appointments;
  }
}
