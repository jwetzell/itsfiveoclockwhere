import { Component } from '@angular/core';
import { interval, startWith } from 'rxjs';
import { GetClosestTimezoneFrom, Timezone } from './timezone/models/timezone.model';
import { TimezoneService } from './timezone/services/timezone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  fiveOclocks: Timezone[] = [];
  fiveOclock: Timezone | undefined;

  showAll: boolean = false;

  timezones: string[] = [];

  constructor(
    private timezoneService: TimezoneService,
  ) {
    const currentTimezone = this.timezoneService.getCurrentTimezone();
    if (currentTimezone) {
      this.timezones = this.timezoneService.getTimezones();

      const second = interval(1000).pipe(startWith(0));

      second.subscribe(() => {
        this.fiveOclocks = [];
        this.timezoneService.getCurrentTimeInTimezones(this.timezones).forEach((timezoneObj) => {
          if (timezoneObj.time?.hour === 17) {
            this.fiveOclocks.push(timezoneObj);
          }
        });
        this.fiveOclock = GetClosestTimezoneFrom(currentTimezone, this.fiveOclocks);
      });
    }
  }

  toggleView() {
    this.showAll = !this.showAll;
  }
}
