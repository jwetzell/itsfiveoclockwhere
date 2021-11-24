import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { TimezoneService } from './services/timezone.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dates: any[] = []

  fiveOclock: any;
  second: Observable<number>;

  constructor(private timezoneService: TimezoneService){
    this.second = interval(1000)

    this.second.subscribe(()=>{
      this.timezoneService.getCurrentTimeInTimezones(this.timezoneService.getTimezones()).forEach((dateObj)=>{
        if(dateObj.date.getHours() == 17){
          this.fiveOclock = dateObj;
        }
      })
    })

  }
}
