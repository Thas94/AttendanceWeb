import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../Services/service.service'
import { student } from '../Services/student.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from '../Services/course.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students : any
  cos : any
  studentID : any
  courseID : any

  constructor(private _router : Router,
    private toastr : ToastrService, private service : ServiceService) { }

  ngOnInit() {
    this.service.GetAllStudents().subscribe((data :any ) => {
      this.students = data; 
      console.log('data', data)
  });

  this.service.GetAllCourse().subscribe((data :any ) => {
    this.cos = data 
    console.log("cos",data)
  });
  }

  studID(stud: student) {
    this.studentID = stud.ID;
    console.log('student', stud);
    console.log('student id', this.studentID);
  }

  cosID(stud: Course) {
    this.courseID = stud.ID;
    console.log('course', stud);
    console.log('course id', this.courseID);
  }

  AddStudentCourse(form : NgForm)
  {
    const body = {
      STUDENT_ID : this.studentID,
      COURSE_ID : this.courseID
    }
    console.log('body', body);
    this.service.AddStudCourse(body)
    .subscribe((data: any) => {
      if (data.Succeeded == true) {
        this.toastr.error('Failed to add course & student');
      }
      else {
        this.toastr.success('course & student added.');     
        window.location.reload();
      }
    }); 
  }

  DeleteStudent(stud: student) {
    const id = stud.ID;
    console.log('ID', id);
    this.service.DeleteStudent(id).subscribe((data: any ) => {

      if (data.Succeeded == true) {
        this.toastr.error('Student delete failed');
      } 
      else
      {
        localStorage.setItem('studentDetails', JSON.stringify(data));
        this.toastr.success('Student deleted successful');
        window.location.reload();
      }
    });
  }
}
 