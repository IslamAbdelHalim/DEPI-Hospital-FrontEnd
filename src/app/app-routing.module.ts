import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentesComponent } from './componants/departmentes/departmentes.component';
import { EachDepartmentComponent } from './componants/each-department/each-department.component';
import { UserProfileComponent } from './componants/user-profile/user-profile.component';
import {HomeComponent} from "./componants/home/home.component";
import {LoginComponent} from "./componants/login/login.component";
import { AllclinicsComponent } from './componants/allclinics/allclinics.component';
import { DoctorsComponent } from './componants/doctors/doctors.component';
import { SignupComponent } from './componants/signup/signup.component';
import { EachClinicComponent } from './componants/each-clinic/each-clinic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'departments', component:DepartmentesComponent },
  { path: 'department/:departmentLinke', component: EachDepartmentComponent } ,
  { path: 'allclinics', component: AllclinicsComponent},
  { path: 'allclinics/:id', component: EachClinicComponent},
  { path: 'user/:name', component: UserProfileComponent },
  { path: 'doctors', component:DoctorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}