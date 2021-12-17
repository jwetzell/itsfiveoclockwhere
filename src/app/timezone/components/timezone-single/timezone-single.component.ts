import { Component, Input, OnInit } from '@angular/core';
import { Timezone } from '../../models/timezone.model';

@Component({
  selector: 'app-timezone-single',
  templateUrl: './timezone-single.component.html',
  styleUrls: ['./timezone-single.component.scss']
})
export class TimezoneSingleComponent implements OnInit {

  @Input() timezone: Timezone | undefined;

  constructor(){ }

  ngOnInit(): void {
  }

}
