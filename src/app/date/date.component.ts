import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  
  id: number;
  date: Date;
  title: Text;

  constructor(id: number,date: Date, title: Text) {
    this.id = id;
    this.date = date;
    this.title = title;
  }

  ngOnInit() {
  }

}
