import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppointmentsSeed }  from './appointments.seed';
import { DateComponent } from './date/date.component';
import { DateTableComponent } from './date-table/date-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    DateTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      AppointmentsSeed, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
