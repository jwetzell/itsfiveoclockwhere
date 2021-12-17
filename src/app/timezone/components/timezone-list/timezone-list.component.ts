import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Timezone } from '../../models/timezone.model';
import { TimezoneService } from '../../services/timezone.service';

@Component({
  selector: 'app-timezone-list',
  templateUrl: './timezone-list.component.html',
  styleUrls: ['./timezone-list.component.scss']
})
export class TimezoneListComponent implements OnInit {

  @Input() timezones: Timezone[] = [];

  constructor(){}

  ngOnInit(): void {
  }

}

