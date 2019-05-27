import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  attendance: any;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.GetAttendance().subscribe((data: any ) => {
      this.attendance = data;
      console.log('data', data);
  });
  }
}
