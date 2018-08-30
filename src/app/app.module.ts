import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ClassesComponent } from './components/pages/classes/classes.component';
import { StudentsComponent } from './components/pages/students/students.component';
import { TimetableComponent } from './components/pages/timetable/timetable.component';
import { TuitionfeeComponent } from './components/pages/tuitionfee/tuitionfee.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

import { HeaderComponent } from './components/common/header/header.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotificationComponent } from './components/common/notification/notification.component';

import { AuthAdminGuard } from './guards/auth.admin.guard';
import { NotificationService } from './services/notification/notification.service';
import { RequestProviders } from './middlewares/request/request.provider';
import { ErrorHandlerProviders } from './middlewares/error/error.provider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NotificationComponent,
    ClassesComponent,
    StudentsComponent,
    TimetableComponent,
    TuitionfeeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    AuthAdminGuard,
    RequestProviders,
    ErrorHandlerProviders,

    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
