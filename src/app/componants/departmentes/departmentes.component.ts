import { Component, OnInit } from '@angular/core';
import { DepartmentsDataService } from '../../services/departments-data.service';

@Component({
  selector: 'app-departmentes',
  templateUrl: './departmentes.component.html',
  styleUrl: './departmentes.component.css',
})
export class DepartmentesComponent implements OnInit{
  departments: any[] = [];

  constructor(private ds: DepartmentsDataService) {}

  ngOnInit(): void {
    this.departments = this.ds.getDepartments();
  }


}
