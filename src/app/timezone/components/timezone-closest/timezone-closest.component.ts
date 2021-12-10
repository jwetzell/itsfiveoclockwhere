import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { GetClosestTimezoneFrom, Timezone } from '../../models/timezone.model';
import { TimezoneService } from '../../services/timezone.service';

@Component({
  selector: 'app-timezone-closest',
  templateUrl: './timezone-closest.component.html',
  styleUrls: ['./timezone-closest.component.scss']
})
export class TimezoneClosestComponent implements OnInit {

  fiveOclock: Timezone | undefined;

  constructor(private timezoneService: TimezoneService){
    var second = interval(1000)

    second.subscribe(()=>{
      var fiveOclocks: Timezone[] = [];
      this.timezoneService.getCurrentTimeInTimezones(this.timezoneService.getTimezones()).forEach((timezoneObj)=>{
        if(timezoneObj.time?.hour === 17){
          fiveOclocks.push(timezoneObj);
        }
      })
      this.fiveOclock = GetClosestTimezoneFrom(this.timezoneService.getCurrentTimezone(), fiveOclocks)
    })

  }

  ngOnInit(): void {
  }

}
