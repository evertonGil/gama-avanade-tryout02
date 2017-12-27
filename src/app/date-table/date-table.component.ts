import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentsService } from '../appointments.service';
import { SelectedDateService } from '../selected-date.service';
import { AppComponent } from '../app.component';
import {  } from '@angular/formControl';

import * as moment  from 'moment';

@Component({
  selector: 'app-date-table',
  templateUrl: './date-table.component.html',
  styleUrls: ['./date-table.component.css']
})
export class DateTableComponent implements OnInit {
  
  @Input() dateSelected: Date;

  start = this._removeTime(moment().date(0));
  month;
  appointmentsDb: any[];
  teste = '2';
  _calendario;
  weeks = [];


  constructor(
    private appointmentService : AppointmentsService, 
    public appComponent: AppComponent
  ) {

    this.appointmentService.getAppointments()
    .subscribe(appointments => {

        this.month = moment().date(this.dateSelected.getDate());
        this.appointmentsDb = appointments.map(Appointment =>  moment(Appointment.date).format("X"));
        this._calendario = this._buildMonth(this.start.clone(), this.month.clone(), this.appointmentsDb);
    });
   }

  ngOnInit() {    
      console.log('date-table', this.dateSelected);

      
    
    
    
    

  }

 

  _buildMonth(start, month, appointments) {
     this.weeks = [];
      var done = false, 
      date = start.clone(), 
      monthIndex = date.month(), 
      count = 0;

      console.log(this.dateSelected , this.start.format("DD-MM-YYY"), this.month.month())

      while (!done) {
          this.weeks.push({ days: this._buildWeek(date, month, appointments), week: date.week(), monthIndex: monthIndex,  mes: date.month() });

          date.add(1, "w");
          
          done = count++ > 2 && monthIndex !== date.month();
          monthIndex = date.month();
      }

      console.log(this.weeks);
      return this.weeks;
  }

  _removeTime(date) {
      return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  _buildWeek(date, month, appointments: any[]) {
    var days = [];

    for (var i = 0; i < 7; i++) {
        days.push({
            name: date.format("dddd"),
            number: date.date(),
            isCurrentMonth: date.month() === month.month(),
            DaySelected: date.isSame(this.dateSelected, "day"),
            date: date.clone(),
            hasAppointment: appointments.includes(date.format("X"))
        });
        
        date = date.clone();
        date.add(1, "d");
    }
    return days;
      
  }

  next(){
    
    this._calendario = this._buildMonth(this.start.clone(), this.month.clone(), this.appointmentsDb);
  }
  selectDate(day){
    this.appComponent.date = new Date(day.date.format("YYYY, MM, DD"));
    this._calendario = this._buildMonth(this.start.clone(), this.month.clone(), this.appointmentsDb);
  }

}
