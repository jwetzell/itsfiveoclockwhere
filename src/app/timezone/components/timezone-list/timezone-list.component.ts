import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Timezone } from '../../models/timezone.model';

@Component({
  selector: 'app-timezone-list',
  templateUrl: './timezone-list.component.html',
  styleUrls: ['./timezone-list.component.scss'],
  animations:[
    trigger('displayState',[
      state('show', style({
        opacity : 1
      })),
      state('hide', style({
        opacity : 0
      })),
      transition('show=>hide', animate('450ms ease-out')),
      transition('hide=>show', animate('450ms ease-in'))
    ])
  ]
})
export class TimezoneListComponent implements OnInit, OnChanges {

  @Input() timezones: Timezone[] = [];
  @Input() closest?: Timezone;
  @Input() showAll: boolean = true;

  showAllItems = true;

  state: string = 'show'
  constructor(){}


  ngOnChanges(changes: SimpleChanges): void {
    if(!!changes['showAll']){
      if(changes['showAll'].previousValue != changes['showAll'].currentValue){
        this.state = 'hide'
      }else{
        this.state = 'show'
      }
    }
  }

  ngOnInit(): void {
  }

  animationEvent($event: any){
    // console.log(`${this.state} has entered ${$event.phaseName}`);
    if(this.state == 'hide' && $event.phaseName == 'done'){
      this.showAllItems = this.showAll;
      this.state = 'show'
    }else if(this.state == 'show' && $event.phaseName == 'done'){
    
    }
  }

}

