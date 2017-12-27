import { Pipe, PipeTransform } from '@angular/core';
import * as moment  from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(data: Date, tipo, format): any {
    var moments = moment(data);
    var comand = moments[tipo](format);
    console.log(comand);
    return comand;
  }

}
