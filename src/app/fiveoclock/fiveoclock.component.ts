import { Component, OnInit } from '@angular/core';
import { interval, startWith } from 'rxjs';
import { GoogleAnalyticsService } from '../services/google-analytics.service';
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

  showAll: boolean = false;

  timezones: string[] =[]

  constructor(
    private timezoneService: TimezoneService,
    private googleAnalyticsService: GoogleAnalyticsService
    ){
    this.timezones = this.timezoneService.getTimezones()
    var second = interval(1000).pipe(startWith(0))

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
    if(this.showAll){
      this.googleAnalyticsService.emitEvent('select_content', {
        'event_label' : 'timezone_closest',
      })
    }else{
      this.googleAnalyticsService.emitEvent('select_content', {
        'event_label' : 'timezone_list',
      })
    }
    this.showAll = !this.showAll

  }

}
