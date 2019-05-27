// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

// Services
import { ServicesService } from './shared/services.service';
import { AuthGuardGuard } from './shared/auth-guard.guard';



import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentsComponent } from './students/students.component';
import { CourseComponent } from './course/course.component';
import { AttendanceComponent } from './attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

    AdminProfileComponent,
    StudentProfileComponent,
    StudentsComponent,
    CourseComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent
      }
      ,
      {
        path: 'adminProf',
        component: AdminProfileComponent
      },
      {
        path: 'studentProf',
        component: StudentProfileComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      }
      ,
      {
        path: 'attendance',
        component: AttendanceComponent
      }
      ,
      {
        path: 'course',
        component: CourseComponent
      },
      { path: '**',
        component: HomeComponent
      }
   ])
  ],
  providers: [ServicesService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
