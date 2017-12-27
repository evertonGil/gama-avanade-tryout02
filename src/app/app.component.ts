import { Component, Input } from '@angular/core';
import { SelectedDateService } from './selected-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Input() date: Date =  new Date(2017,11,18);
  
  constructor(public selectedDateService: SelectedDateService){
    
  }

}