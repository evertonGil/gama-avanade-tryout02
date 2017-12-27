import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentsService } from '../appointments.service';
import { SelectedDateService } from '../selected-date.service';
import { MomentPipe } from '../moment.pipe';
import * as moment  from 'moment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  
  @Input() dateSelected = moment(this.dateSelected);

  dateMoment;

  constructor(private appointmentService : AppointmentsService, private selectedDate: SelectedDateService) {
    console.log("teste", this.dateSelected);
    this.dateMoment = moment(this.dateSelected);
   }

  ngOnInit() {
    
  }

  getAppointments(): Appointment[]{
    let appoin;

    this.appointmentService.getAppointments().subscribe(appointments => appoin = appointments );
    
    return appoin;
  }



}
