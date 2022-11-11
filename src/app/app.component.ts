import { Component } from '@angular/core';
import { interval, startWith } from 'rxjs';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { Timezone, GetClosestTimezoneFrom } from './timezone/models/timezone.model';
import { TimezoneService } from './timezone/services/timezone.service';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fiveOclocks: Timezone[] = [];
  fiveOclock: Timezone | undefined;

  showAll: boolean = false;

  timezones: string[] =[]

  constructor(
    private timezoneService: TimezoneService,
    private googleAnalyticsService: GoogleAnalyticsService,
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

  ngOnInit(): void { 
    gtag('config', 'G-48B6CKS0V6',{
      'page_path': '/'
    });
  }

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
