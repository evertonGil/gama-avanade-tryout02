import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppointmentsSeed }  from './appointments.seed';
import { DateTableComponent } from './date-table/date-table.component';
import { AppointmentsService } from './appointments.service';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SelectedDateService } from './selected-date.service';
import { FormsModule} from '@angular/forms';
import { MomentPipe } from './moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateTableComponent,
    AppointmentsComponent,
    MomentPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      AppointmentsSeed, { dataEncapsulation: false }
    )
  ],
  providers: [AppointmentsService, SelectedDateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
