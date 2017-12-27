import { Injectable } from '@angular/core';

@Injectable()
export class SelectedDateService {

  dateSelected: Date = new Date(2017,11,18);

  constructor() { }

}
