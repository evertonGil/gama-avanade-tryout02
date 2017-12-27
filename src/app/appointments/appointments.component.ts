import { Component, OnInit, Input, OnChanges } from '@angular/core';
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


  constructor(private appointmentsService : AppointmentsService,private appComponent :AppComponent ) {   }

  ngOnInit() {  }

  ngOnChanges(changes){
    console.log('changes: ', changes);

    
    if(this.appAppointments){
      let clone = [].concat(this.appAppointments);
      
      //console.log('clone', clone);

      this.appointments = clone.filter((value, index, Array) => {
        return moment(value.date).format("X") == this.dateSelected.format("X");
      })
    }
  }

  

  add(appointmentTitulo){
    if(!appointmentTitulo) return;

    this.appComponent.addOneAppointment(appointmentTitulo);
  }

}
