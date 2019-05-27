import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Response, RequestMethod, RequestOptions, Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {student} from '../Services/student.model';
import {Course} from '../Services/course.model';
import { Subject } from '../Services/subject.model';
import { studCourse } from '../Services/studCourse.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://attedanco.000webhostapp.com';

  constructor(private http: HttpClient, private http1: Http) {

  }

// STUDENT

Register(emp) {
  const body = JSON.stringify(emp);
  const headerOptions = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions}); 
  return this.http1.post(this.url + '/Attendance/STUDENT/insert.php', body, requestOptions);
}

GetStudentLogin(username: string , password: string) {

  const emp = {'USERNAME' : username, 'PASSWORD': password};
  const body = JSON.stringify(emp);
  const headerOptions = new Headers({'Content-Type' : 'application/json'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http1.post(this.url + '/Attendance/STUDENT/Login.php/', body).map(res => res.json());  
}

GetAllStudents() {
  return this.http1.get(this.url + '/Attendance/STUDENT/GetAll.php')
  .map(res => res.json());
}

GetAttendance() {
  return this.http1.get(this.url + '/Attendance/ATTENDANCE/GetAll.php')
  .map(res => res.json());
}

GetMode(id) {
  console.log('uu', id)
  return this.http1.get(this.url + '/mode.php?mode=-2&id=' + id)
  .map(res => res.json());
}

DeleteStudent(id) {
  const emp = {
    'ID': id};
  const body = JSON.stringify(emp);
  const headerOptions = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
  return this.http1.post(this.url + '/Attendance/STUDENT/delete.php/', body);
}

// COURSE

AddCourse(info) {
  const body = JSON.stringify(info);
  const headerOptions = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
  return this.http1.post(this.url + '/Attendance/COURSE/insert.php/', body);
}

DeleteCourse(id) {
  const emp = {
    'ID': id};
  const body = JSON.stringify(emp);
  const headerOptions = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
  return this.http1.post(this.url + '/Attendance/COURSE/delete.php/', body);
}

GetAllCourse() {
  return this.http1.get(this.url + '/Attendance/COURSE/GetAll.php')
  .map(res => res.json());
}

// SUBJECTS

AddSubject(info) {
  const body = JSON.stringify(info);
  const headerOptions = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
  return this.http1.post(this.url + '/Attendance/SUBJECT/insert.php', body);
}

GetSubjectByID(COURSE_ID: any) {
  const emp = {
    'COURSE_ID': COURSE_ID};
  const body = JSON.stringify(emp);
  const headerOptions = new Headers({'Content-Type' : 'application/json'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http1.post(this.url + '/Attendance/SUBJECT/GetCourseID.php/', body).map(res => res.json());
}

GetSubjectID(id: any) {
  const emp = {
    'ID': id};
  const body = JSON.stringify(emp);
  const headerOptions = new Headers({'Content-Type' : 'application/json'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http1.post(this.url + '/Attendance/SUBJECT/GetSubjectID.php/', body).map(res => res.json());

}

DeleteSubject(id: any) {

  const emp = {
    'ID': id};
  const body = JSON.stringify(emp);
  const headerOptions = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
  return this.http1.post(this.url + '/Attendance/SUBJECT/delete.php/', body);
}

UpdateSubject(info) {

  const body = JSON.stringify(info);
  const headerOptions = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
  return this.http1.post(this.url + '/Attendance/SUBJECT/update.php/', body).map(() => '');

}

// STUDENT_COURSE

AddStudCourse(emp) {
  const body = JSON.stringify(emp);
  const headerOptions = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
  const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions}); 
  return this.http1.post(this.url + '/Attendance/STUDENT_COURSE/insert.php', body , requestOptions);
  }
}

