import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from './Appointment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppointmentsService {

  private appointmentsUrl = 'api/appointments';

  constructor(private http: HttpClient) { }
  
  getAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.appointmentsUrl);
  }

}
