import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  app:Appointment;
  msg:string;
  isNew:boolean;

  constructor(
    private appService : AppointmentService,
    private actRoute : ActivatedRoute, //to read the params
    private router: Router
  ) { }

  ngOnInit() {
  }

}
