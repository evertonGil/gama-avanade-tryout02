import { Component, Input } from '@angular/core';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './Appointment';
import * as moment from 'moment';
import { Observable, Subscribable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  date =  moment([2017,11,18]);
  appointments;
  fakeAppointment: Array<any>;
  
  constructor(public appointmentsService: AppointmentsService){

    this.appointmentsService.getAppointments()
    .subscribe(appointments => this.appointments = appointments);
  }

  addOneAppointment(titulo){
    let appointment = new Appointment();

    appointment.date = this.date.format("YYYY-MM-DD");
    appointment.title = titulo;

    this.appointmentsService.addAppointment(appointment)
    .subscribe(appointment => {
       this.fakeAppointment = [].concat(this.appointments);
       this.fakeAppointment.push(appointment);

       this.appointments = this.fakeAppointment;
    });
    console.log("teste2", this.appointments);
  }

}