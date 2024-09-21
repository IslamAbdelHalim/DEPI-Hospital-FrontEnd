import { Component } from '@angular/core';
import { DepartmentsDataService } from '../../services/departments-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-each-department',
  templateUrl: './each-department.component.html',
  styleUrl: './each-department.component.css',
})
export class EachDepartmentComponent {
  departments: any[] = [];
  selectedDepartment: any;
  remainingDepartments: any[] = [];

  constructor(
    private ds: DepartmentsDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDepartments();
    this.selectDepartment();
    this.getRemainingDepartments();
  }

  getDepartments() {
    this.departments = this.ds.getDepartments();
  }

  selectDepartment() {
    this.route.paramMap.subscribe((params) => {
      const departmentLink = params.get('departmentLinke');
      if (departmentLink) {
        this.selectedDepartment = this.departments.find(
          (dept) =>
            dept.link.toLowerCase() ===
            ('/department/' + departmentLink).toLowerCase()
        );
      }
    });
  }

  getRemainingDepartments() {
    const allDepartments = this.ds.getDepartments();
    const filteredDepartments = allDepartments.filter(
      (dept) => dept.id !== this.selectedDepartment?.id
    );
    const shuffledDepartments = filteredDepartments.sort(() => 0.5 - Math.random());
    this.remainingDepartments = shuffledDepartments.slice(0, 4);
  }
  
}
