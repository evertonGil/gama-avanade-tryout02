import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentsService } from '../appointments.service';
import { SelectedDateService } from '../selected-date.service';
import { AppComponent } from '../app.component';
import {  } from '@angular/formControl';

import * as moment  from 'moment';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-date-table',
  templateUrl: './date-table.component.html',
  styleUrls: ['./date-table.component.css']
})
export class DateTableComponent implements OnInit, OnChanges {
  
  @Input() dateSelected;
  @Input() appAppointments: Array<any>;
  appAppointments2: Array<any>;
  private _start; 
  private _actualMonth;
  private _appointmentsDb: any[];
  protected _calendario;


  constructor(
    private appointmentService : AppointmentsService, 
    public appComponent: AppComponent,
  ) { }

  ngOnInit() {  
    
  }
  ngOnChanges(changes){

    if(this.appAppointments){
      this.appAppointments2 = [].concat(this.appAppointments.map(Appointment => moment(Appointment.date).format("X")));

      this.atualizaLista();
    }
  }

  atualizaLista(){
    
    this._start = this._removeTime(moment(this.dateSelected).date(0));
    this._actualMonth = this.dateSelected; 
    
    this._calendario = this._buildMonth(this._start, this._actualMonth.month(), this.appAppointments2);

  }

  _removeTime(date) {
      return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }
  
  _buildMonth(start, month, appointments) {
      let weeks = [];
      var done = false, 
      date = start.clone(), 
      monthIndex = date.month(), 
      count = 0;

      while (!done) {
          weeks.push({ days: this._buildWeek(date, month, appointments)});

          date.add(1, "w");
          
          done = count++ > 2 && monthIndex !== date.month();
          monthIndex = date.month();
      }
      return weeks;
  }

 

  _buildWeek(date, month, appointments: any[]) {
    var days = [];
    

    for (var i = 0; i < 7; i++) {

        days.push({
            name: date.format("dddd"),
            number: date.date(),
            isCurrentMonth: date.month() === month,
            DaySelected: date.isSame(this.dateSelected, "day"),
            date: date.clone(),
            hasAppointment: appointments.includes(date.format("X"))
        });
        
        date = date.clone();
        date.add(1, "d");
    }
    return days;  
  }

  prev(day){
    this.appComponent.date = day.subtract(1, 'M');
  }
  next(day){
    this.appComponent.date = day.add(1, 'M');
  }
  selectDate(day){
    this.appComponent.date = day.date;
  }
}
