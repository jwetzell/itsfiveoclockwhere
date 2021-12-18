import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimezoneService } from './timezone/services/timezone.service';
import { AppRoutingModule } from './app-routing.module';
import { TimezoneListComponent } from './timezone/components/timezone-list/timezone-list.component';
import { FiveoclockComponent } from './fiveoclock/fiveoclock.component';
import { TimezoneSingleComponent } from './timezone/components/timezone-single/timezone-single.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { AdsenseModule } from 'ng2-adsense';
@NgModule({
  declarations: [
    AppComponent,
    TimezoneListComponent,
    TimezoneSingleComponent,
    FiveoclockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-2890427503516323',
    })
  ],
  providers: [
    TimezoneService,
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
