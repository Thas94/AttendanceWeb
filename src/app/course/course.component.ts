import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../Services/service.service';
import { Course } from '../Services/course.model';
import { NgForm } from '@angular/forms';
import { Subject } from '../Services/subject.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course : Course
  subject : Subject
  cos : any
  C_ID : any
  C_ID2 : any
  sub : any

  subjects : any
  subID : any
 

  constructor(private _router : Router,
    private toastr : ToastrService, private service : ServiceService) { }

  ngOnInit() {
    this.course = new Course()
    this.subject = new Subject()

    this.service.GetAllCourse().subscribe((data :any ) => {
      this.cos = data 
  });
  }
  ID2(id : Course)
  {
    this.C_ID2 = id.ID
  }

  ID(id: Course)
  {
    this.C_ID = id.ID;
    console.log('mm', this.C_ID);
    this.service.GetSubjectByID(this.C_ID).subscribe((data: any ) => {
      this.sub = data ;
      console.log('mm', data);
  });
  }

  DeleteCos(id : Course)
  {
    var ident = id.ID
    this.service.DeleteCourse(ident).subscribe((data :any ) => {

      if (data.Succeeded == true) {
        this.toastr.error('Course delete failed');
        window.location.reload()
;      }
      else
      {
        this.toastr.success('Course deleted successful');
        window.location.reload()
      }
    }); 
  }

  DeleteSub(id : Subject)
  {
    console.log("id",id)
    var ident = id.ID
    this.service.DeleteSubject(ident).subscribe((data :any ) => {

      if (data.Succeeded == true) {
        this.toastr.error('Subject delete failed');
        window.location.reload()
      }
      else
      {
        window.location.reload()
        this.toastr.success('Subject deleted successful');
       
      }
    });
  }

  UpdateSubject(id : Subject)
  {
    
    var ident = id.ID
    this.subID = id.ID

    this.service.GetSubjectID(ident).subscribe((data :any ) => {
      this.subjects = data 
      console.log("ssss",this.subjects)
  });
  }

  UpSubject(form : NgForm)
  {
    console.log("form",form.value)
    this.service.UpdateSubject(form.value)
    .subscribe((data : any ) => {
      this.toastr.info('Update Successful',' Update ');
    }); 
  }
  
  AddCourse(form:NgForm) {
    this.service.AddCourse(form.value)
    .subscribe((data: any) => {
      if (data.Succeeded == true) {
        this.toastr.error('Failed to add course');
      }
      else {
        this.toastr.success('course added.');  
        window.location.reload();   
      }
    }); 
  }

  AddSubject(form:NgForm) {
    console.log("YYY",form.value)
    this.service.AddSubject(form.value)
    .subscribe((data: any) => {
      if (data.Succeeded == false) {
        this.toastr.error('Failed to add subject');
      }
      else {
        this.toastr.success('subject added.');     
        window.location.reload();    
      } 
    });
  }
}
