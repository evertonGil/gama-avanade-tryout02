import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppointmentsSeed }  from './appointments.seed';
import { DateTableComponent } from './date-table/date-table.component';
import { AppointmentsService } from './appointments.service';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SelectedDateService } from './selected-date.service';
import { FormsModule} from '@angular/forms';
import { MomentPipe } from './moment.pipe';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTableComponent,
    AppointmentsComponent,
    MomentPipe,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      AppointmentsSeed, { dataEncapsulation: false }
    )
  ],
  providers: [AppointmentsService, SelectedDateService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
