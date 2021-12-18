import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public emitEvent(name: string, event: any) {
    
    gtag('event', name, event)
  }

}
