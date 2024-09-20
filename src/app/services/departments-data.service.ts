import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsDataService {
  constructor() {}

  departments = [
    {name: 'lab',arabicname: 'المعمل',img: '../../assets/departments/lab.jpg',alt: 'lab',},
    {name: 'Radiology',arabicname: 'الأشعة',img: '../../assets/departments/Radiology.jpg',alt: 'Radiology',},
    {name: 'Blood Bank',arabicname: 'بنك الدم',img: '../../assets/departments/BloodBank.jpg',alt: 'Blood Bank',},
    {name: 'Pharmacy',arabicname: 'الصيدلية',img: '../../assets/departments/Pharmacy.jpg',alt: 'Pharmacy',},
    {name: 'Infection Control',arabicname: 'مكافحة العدوى',img: '../../assets/departments/InfectionControl.jpg',alt: 'Infection Control',},
    {name: 'Comprehensive Examination',arabicname: 'الفحص الشامل',img: '../../assets/departments/ComprehensiveExamination.jpg',alt: 'Comprehensive Examination',},
    {name: 'Outpatient Clinics',arabicname: 'العيادات الخارجية',img: '../../assets/departments/OutpatientClinics.jpg',alt: 'Outpatient Clinics',},
    {name: 'Training',arabicname: 'التدريب',img: '../../assets/departments/Training.jpg',alt: 'Training',},
    {name: 'Emergency',arabicname: 'الطوارئ',img: '../../assets/departments/Emergency.jpg',alt: 'Emergency',},
    {name: 'Operations',arabicname: 'العمليات',img: '../../assets/departments/Operations.jpg',alt: 'Operations',}
 
  ];
  getDepartments() {
    return this.departments;
  }
}
