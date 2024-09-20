import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
    EachDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
