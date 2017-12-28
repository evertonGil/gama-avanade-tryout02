import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MessageService } from '../message.service';
import { AppointmentsService } from '../appointments.service';
import { Appointment } from '../Appointment';
import { AppComponent } from '../app.component';
import { MomentPipe } from '../moment.pipe';
import * as moment  from 'moment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  
  @Input() dateSelected;
  @Input() appAppointments: Array<any>;
  private appointments: Appointment[];


  constructor(private appointmentsService : AppointmentsService,private appComponent :AppComponent, private messageService: MessageService ) {   }

  ngOnInit() {  }

  ngOnChanges(changes){
    
    if(this.appAppointments){
      let clone = [].concat(this.appAppointments);

      this.appointments = clone.filter((value, index, Array) => {
        return moment(value.date).format("X") == this.dateSelected.format("X");
      });
    }
  }

  

  add(appointmentTitulo){
    if(!appointmentTitulo) return;

    this.appComponent.addOneAppointment(appointmentTitulo);
    this.messageService.add(`Appointment '${appointmentTitulo}' added`);
  }

}
