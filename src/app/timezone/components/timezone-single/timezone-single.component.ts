import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Timezone } from '../../models/timezone.model';

@Component({
  selector: 'app-timezone-single',
  templateUrl: './timezone-single.component.html',
  styleUrls: ['./timezone-single.component.scss'],
  animations:[
    trigger('displayState',[
      state('show', style({
        opacity : 1
      })),
      state('hide', style({
        opacity : 0
      })),
      transition('show=>hide', animate('500ms ease-out')),
      transition('hide=>show', animate('500ms ease-in'))
    ])
  ]
})
export class TimezoneSingleComponent implements OnInit {

  @Input() timezone: Timezone | undefined;
  @Input() state: string = 'hide';

  constructor(){}

  ngOnInit(): void {
  }

}
