import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { UserProfileComponent } from './componants/user-profile/user-profile.component';
import { DepartmentesComponent } from './componants/departmentes/departmentes.component';
import { DoctorsComponent } from './componants/doctors/doctors.component';
import { AppointmentsComponent } from './componants/appointments/appointments.component';
import { InquiriesComponent } from './componants/inquiries/inquiries.component';
import { NewsComponent } from './componants/news/news.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EachDepartmentComponent } from './componants/each-department/each-department.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule} from '@angular/router';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { SliderComponent  } from './componants/slider/slider.component';
import { AboutComponent } from './componants/about/about.component';
import { DoctorsPaginationComponent } from './componants/doctors-pagination/doctors-pagination.component';
import { ClinicsPaginationComponent } from './componants/clinics-pagination/clinics-pagination.component';
import { ClinicComponent } from './componants/clinic/clinic.component';
import { AllclinicsComponent } from './componants/allclinics/allclinics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserProfileComponent,
    DepartmentesComponent,
    DoctorsComponent,
    AppointmentsComponent,
    InquiriesComponent,
    NewsComponent,
    EachDepartmentComponent,
    SliderComponent,
    NavbarComponent,
    AboutComponent,
    DoctorsPaginationComponent,
    ClinicsPaginationComponent,
    ClinicComponent,
    AllclinicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
