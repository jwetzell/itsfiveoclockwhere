import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Timezone } from '../../models/timezone.model';
import { TimezoneService } from '../../services/timezone.service';

@Component({
  selector: 'app-timezone-list',
  templateUrl: './timezone-list.component.html',
  styleUrls: ['./timezone-list.component.scss']
})
export class TimezoneListComponent implements OnInit {

  fiveOclocks: Timezone[] = [];

  constructor(private timezoneService: TimezoneService){
    var second = interval(1000)

    second.subscribe(()=>{
      this.fiveOclocks = [];
      this.timezoneService.getCurrentTimeInTimezones(this.timezoneService.getTimezones()).forEach((timezoneObj)=>{
        if(timezoneObj.time?.hour === 17){
          this.fiveOclocks.push(timezoneObj);
        }
      })
    })

  }

  ngOnInit(): void {
  }

}
