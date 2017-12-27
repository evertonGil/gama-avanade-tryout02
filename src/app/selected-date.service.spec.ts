import { TestBed, inject } from '@angular/core/testing';

import { SelectedDateService } from './selected-date.service';

describe('SelectedDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedDateService]
    });
  });

  it('should be created', inject([SelectedDateService], (service: SelectedDateService) => {
    expect(service).toBeTruthy();
  }));
});
