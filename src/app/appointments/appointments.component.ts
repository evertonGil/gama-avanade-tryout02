import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MessageService } from '../message.service';
import { AppointmentsService } from '../appointments.service';
import { Appointment } from '../Appointment';
import { AppComponent } from '../app.component';
import { MomentPipe } from '../moment.pipe';
import * as moment  from 'moment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
  animations: [
    trigger('appointmentState', [
      state('invalid', style({transform: 'translateX(0)'})),
      transition('* => invalid', [
        animate(50, style({transform: 'translateX(3%)'})),
        animate(50, style({transform: 'translateX(-3%)'})),        
        animate(50, style({transform: 'translateX(3%)'})),
        animate(50, style({transform: 'translateX(-3%)'}))
      ])
    ]
    )


  ]
})
export class AppointmentsComponent implements OnInit {
  
  @Input() dateSelected;
  @Input() appAppointments: Array<any>;
  private appointments: Appointment[];
  private state;


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
    if(!appointmentTitulo) {
      this.messageService.add(`Dont forget the text.`, 'warning');
      return this.state = 'invalid';
    };

    this.appComponent.addOneAppointment(appointmentTitulo);
    this.messageService.add(`Appointment '${appointmentTitulo}' added`, 'success');
  }
  resetState(event){
    return this.state = '';
  }

}
