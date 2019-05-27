import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  Details : String

  constructor() { }

  ngOnInit() {

    this.Details = JSON.parse(localStorage.getItem("studentDetails"))
    console.log("data",this.Details)
  }

}
