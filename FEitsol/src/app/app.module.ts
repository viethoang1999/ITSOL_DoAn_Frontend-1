import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListJobComponent } from './components/list-job/list-job.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

import { JobService } from './services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    JobDetailComponent,
    RecruitmentComponent,
    ContactComponent,
    ListJobComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
