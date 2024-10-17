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
import { BookingComponent } from './componants/booking/booking.component';
import { ArticleComponent } from './componants/article/article.component';
import { ArticleHairComponent } from './componants/article-hair/article-hair.component';
import { ArticleNoseComponent } from './componants/article-nose/article-nose.component';
import { ArticlePressureComponent } from './componants/article-pressure/article-pressure.component';
import { InquiriesComponent } from './componants/inquiries/inquiries.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'departments', component:DepartmentesComponent },
  { path: 'department/:departmentLinke', component: EachDepartmentComponent } ,
  { path: 'allclinics', component: AllclinicsComponent},
  { path: 'allclinics/:id', component: EachClinicComponent},
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'doctors', component:DoctorsComponent },
  { path: 'booking', component: BookingComponent},
  { path: 'article',  component: ArticleComponent},
  { path: 'article-hair', component: ArticleHairComponent},
  { path: 'article-nose', component: ArticleNoseComponent},
  { path: 'article-pressure', component: ArticlePressureComponent},
  { path: 'inquiries', component: InquiriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}