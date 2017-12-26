import { Component, OnInit } from '@angular/core';
import * as moment  from 'moment';

@Component({
  selector: 'app-date-table',
  templateUrl: './date-table.component.html',
  styleUrls: ['./date-table.component.css']
})
export class DateTableComponent implements OnInit {
  
  dateSelected = new Date(2017,11,18);
  _calendario;


  constructor() {
    
   }

  ngOnInit() {
    var dateSelected = this.dateSelected;

    console.log('hoje', dateSelected);
    this._calendario = this._buildMonth(this._removeTime(moment().date(0)), moment().date(dateSelected.getDate()));

    console.log(this._calendario);
  }


  _buildMonth(start, month) {
      let weeks = [];

      var done = false, 
      date = start, 
      monthIndex = date.month(), 
      count = 0;

      while (!done) {
          weeks.push({ days: this._buildWeek(date, month) });
          date.add(1, "w");
          done = count++ > 2 && monthIndex !== date.month();
          console.log(count);
          monthIndex = date.month();
      }

      return weeks;
  }

  _removeTime(date) {
      return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  _buildWeek(date, month) {
      var days = [];

      for (var i = 0; i < 7; i++) {
          days.push({
              name: date.format("dddd"),
              number: date.date(),
              isCurrentMonth: date.month() === month.month() ? {classe: '', return: true} : {classe: 'other-mount', return: false},
              DaySelected: date.isSame(this.dateSelected, "day") ? {classe: 'current', return: true} :  {classe: '', return: true},
              date: date
          });
          date = date.clone();
          date.add(1, "d");
      }
      return days;
  }

}
