import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Timezone } from './timezone/models/timezone.model';
import { TimezoneService } from './timezone/services/timezone.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dates: any[] = []

  fiveOclock: Timezone | undefined;
  second: Observable<number>;

  fiveOclocks: Timezone[] = [];

  constructor(private timezoneService: TimezoneService){
    this.second = interval(1000)

    this.second.subscribe(()=>{
      this.fiveOclocks = [];
      this.timezoneService.getCurrentTimeInTimezones(this.timezoneService.getTimezones()).forEach((timezoneObj)=>{
        if(timezoneObj.time?.hour === 17){
          this.fiveOclock = timezoneObj;
          this.fiveOclocks.push(timezoneObj);
        }
      })
    })

  }
}
