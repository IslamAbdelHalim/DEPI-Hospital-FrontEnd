import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentesComponent } from './componants/departmentes/departmentes.component';
import { EachDepartmentComponent } from './componants/each-department/each-department.component';
import { UserProfileComponent } from './componants/user-profile/user-profile.component';
import {HomeComponent} from "./componants/home/home.component";
import {LoginComponent} from "./componants/login/login.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'departments', component:DepartmentesComponent },
  { path: 'department/:departmentLinke', component: EachDepartmentComponent } ,
  { path: 'userprofile', component: UserProfileComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
