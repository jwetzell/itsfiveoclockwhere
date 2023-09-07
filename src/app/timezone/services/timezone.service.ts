import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Timezone, TimezoneCompare, TimezoneList } from '../models/timezone.model';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor() { }

  public getCurrentTimezone() : string | null {
    return DateTime.now().zoneName
  }

  public getTimezones(): string[] {
    return TimezoneList()
  }

  public getCurrentTimeForTimezone(timezone: string): DateTime | null {

    var dateTime = DateTime.local().setZone(timezone)

    return dateTime.isValid ? dateTime : null;

  }

  public getCurrentTimeInTimezones(timezones: string[]): Timezone[] {
    var dates: Timezone[] = [];

    timezones.forEach(element => {
      var date = this.getCurrentTimeForTimezone(element);
      if (date != null) {
        const timezone = { name: element, time: date }
        dates.push(timezone)
      }
    });
    
    return dates.sort(TimezoneCompare);
  }
}
