import { TestBed, inject } from '@angular/core/testing';

import { AppointmentsService } from './appointments.service';

describe('AppointmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentsService]
    });
  });

  it('should be created', inject([AppointmentsService], (service: AppointmentsService) => {
    expect(service).toBeTruthy();
  }));
});
