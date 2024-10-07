import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}

  userdata = [    {
      name: 'Hamada Ramadan Ali Mohamed Ashour',
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
      name: 'Hamada Ramadan Ali Mohamed Ashour',
      email: 'hamada.ramadan.1996@gmail.com',
      dob: '20-4-1996',
      mobile: '01067592359',
      appointmentType: 'Radiology',
      appointmentDate: '1-9-2024',
      status: 'Completed',
      Note: 'I need a reservation in the Radiology center at 7:00 PM to check my knee',
    },
    {
      id: 2,
      name: 'Hamada Ramadan Ali Mohamed Ashour',
      email: 'hamada.ramadan.1996@gmail.com',
      dob: '20-4-1996',
      mobile: '01067592359',
      appointmentType: 'Lab',
      appointmentDate: '15-9-2024',
      status: 'Completed',
      Note: 'I need a reservation in the Lab at 9:00 PM to make CBC test',
    },
    {
      id: 2,
      name: 'Hamada Ramadan Ali Mohamed Ashour',
      email: 'hamada.ramadan.1996@gmail.com',
      dob: '20-4-1996',
      mobile: '01067592359',
      appointmentType: 'orthopedic',
      appointmentDate: '24-9-2024',
      status: 'Open',
      Note: 'I need to book an appointment at the outpatient clinic at 7:00 PM with Dr. Ahmed, an orthopedic specialist.',
    },
  ];
  getAppointments() {
    return this.appointments;
  }
}
