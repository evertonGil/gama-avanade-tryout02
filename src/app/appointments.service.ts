import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from './Appointment';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class AppointmentsService {
  

  private appointmentsUrl = 'api/appointments';
  

  constructor(private http: HttpClient) { }
  
  getAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.appointmentsUrl);
  }

  addAppointment (appointment: Appointment): Observable<Appointment> {

    return this.http.post<Appointment>(this.appointmentsUrl, appointment, httpOptions).pipe(
      catchError(this.handleError<Appointment>('addHero'))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
