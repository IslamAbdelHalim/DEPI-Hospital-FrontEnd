import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsDataService {
  constructor() {}

  departments = [
    {name: 'lab',arabicname: 'المعمل',img: '../../assets/departments/lab.jpg',alt: 'lab',link:"/lab"},
    {name: 'Radiology',arabicname: 'الأشعة',img: '../../assets/departments/Radiology.jpg',alt: 'Radiology',link:"/radiology"},
    {name: 'Blood Bank',arabicname: 'بنك الدم',img: '../../assets/departments/BloodBank.jpg',alt: 'Blood Bank',link:"/bloodbank"},
    {name: 'Pharmacy',arabicname: 'الصيدلية',img: '../../assets/departments/Pharmacy.jpg',alt: 'Pharmacy',link:"/pharmacy"},
    {name: 'Infection Control',arabicname: 'مكافحة العدوى',img: '../../assets/departments/InfectionControl.jpg',alt: 'Infection Control',link:"/infectioncontrol"},
    {name: 'Comprehensive Examination',arabicname: 'الفحص الشامل',img: '../../assets/departments/ComprehensiveExamination.jpg',alt: 'Comprehensive Examination',link:"/comprehensiveexamination"},
    {name: 'Outpatient Clinics',arabicname: 'العيادات الخارجية',img: '../../assets/departments/OutpatientClinics.jpg',alt: 'Outpatient Clinics',link:"/outpatientclinics"},
    {name: 'Training',arabicname: 'التدريب',img: '../../assets/departments/Training.jpg',alt: 'Training',link:"/training"},
    {name: 'Emergency',arabicname: 'الطوارئ',img: '../../assets/departments/Emergency.jpg',alt: 'Emergency',link:"/emergency"},
    {name: 'Operations',arabicname: 'العمليات',img: '../../assets/departments/Operations.jpg',alt: 'Operations',link:"/operations"}
 
  ];
  getDepartments() {
    return this.departments;
  }
}
