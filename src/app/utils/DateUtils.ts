import { DatePipe } from '@angular/common';

export class DateUtils {
  static getFormattedDate(date: Date, format: string) {
    let pipe: DatePipe = new DatePipe('en-US');
    return pipe.transform(date, format);
  }
}
