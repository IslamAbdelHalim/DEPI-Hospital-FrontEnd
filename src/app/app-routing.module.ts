import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentesComponent } from './componants/departmentes/departmentes.component';
import { EachDepartmentComponent } from './componants/each-department/each-department.component';
import { UserProfileComponent } from './componants/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: DepartmentesComponent },
  { path: 'departmentes', component:DepartmentesComponent },
  { path: 'department/:departmentLinke', component: EachDepartmentComponent } ,
  { path: 'userprofile', component: UserProfileComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
