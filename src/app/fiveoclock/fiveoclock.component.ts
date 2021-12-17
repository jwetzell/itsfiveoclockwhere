import { Component, OnInit } from '@angular/core';
import { interval, startWith } from 'rxjs';
import { GetClosestTimezoneFrom, Timezone, TimezoneCompare, TimezoneList } from '../timezone/models/timezone.model';
import { TimezoneService } from '../timezone/services/timezone.service';

@Component({
  selector: 'app-fiveoclock',
  templateUrl: './fiveoclock.component.html',
  styleUrls: ['./fiveoclock.component.scss']
})
export class FiveoclockComponent implements OnInit {

  fiveOclocks: Timezone[] = [];
  fiveOclock: Timezone | undefined;

  justClosest: boolean = true;

  timezones: string[] =[]

  constructor(private timezoneService: TimezoneService){
    this.timezones = this.timezoneService.getTimezones()
    var second = interval(10000).pipe(startWith(0))

    second.subscribe(()=>{
      this.fiveOclocks = [];
      this.timezoneService.getCurrentTimeInTimezones(this.timezones).forEach((timezoneObj)=>{
        if(timezoneObj.time?.hour === 17){
          this.fiveOclocks.push(timezoneObj);
        }
      })
      this.fiveOclock = GetClosestTimezoneFrom(this.timezoneService.getCurrentTimezone(), this.fiveOclocks)
    })

  }

  ngOnInit(): void { }

  toggleView(){
    this.justClosest = !this.justClosest
  }

}
