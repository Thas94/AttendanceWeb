import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../shared/services.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

import { ServiceService } from '../Services/service.service';
import { student } from '../Services/student.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  StuName: any;
  StuPass: any;

  AdmName: any;
  AdmPass: any;

  student: student;
  login: any;

  error = '';
  success = '';

  idFinger: any;
  FINGER_ID: any;


  constructor(private _router: Router,
    private toastr: ToastrService, private service: ServiceService) { }

  ngOnInit() {
    this.student = new student();

     this.resetForm();

  }

  Scan() {
    this.FINGER_ID = Math.floor(Math.random() * 100) + 0;
    this.idFinger = ((document.getElementById('scan') as HTMLInputElement).value);
    this.service.GetMode(this.FINGER_ID)
    .subscribe((data: any) => {
      console.log('count', data)
    }); 
  }


  StudentLogin() {
    this.service.GetStudentLogin(this.StuName, this.StuPass)
    .subscribe((data: any ) => {
      
      this.login = data
      var length = data.length

      if(length <= 0)
      {
        this.toastr.error('Student login failed'); 
      }
      else
      {
        localStorage.setItem("studentDetails", JSON.stringify(this.login));
        this.toastr.success('Student login successful');
        //window.location.reload();
        this._router.navigate(['/studentProf']); 
        
      }
    });
  }

  AdminLogin()
  {

    if(this.AdmName == 'admin' && this.AdmPass == '123')
    {
      window.open('/adminProf');
      this.toastr.success('Admin login successful');   
    }
    else
    {
      this.toastr.error('Admin login failed');
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
        this.student = {
          USERNAME: '',
          PASSWORD: null,
          STUDENT_NO: null,
          LANME: '',
          FNAME: '',
          ID : null,
          FINGER_ID : null
        }
     }
  }

  registerStudent(form:NgForm) {    
    this.service.Register(form.value)
    .subscribe((data: any) => {
      if (data.Succeeded === true) {
        this.toastr.error('Failed to add student details');
      } else {
        this.toastr.success('student details added.');
        this.resetForm(form);
        window.location.reload();
      }
    });
  }
}

