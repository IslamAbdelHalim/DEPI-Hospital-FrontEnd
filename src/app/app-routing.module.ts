import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentesComponent } from './componants/departmentes/departmentes.component';
import { EachDepartmentComponent } from './componants/each-department/each-department.component';

const routes: Routes = [
  { path: '', component: DepartmentesComponent },
  { path: 'departmentes', component:DepartmentesComponent },
  { path: 'department/:departmentLinke', component: EachDepartmentComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
