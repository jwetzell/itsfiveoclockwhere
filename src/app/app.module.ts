import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimezoneService } from './timezone/services/timezone.service';
import { AppRoutingModule } from './app-routing.module';
import { TimezoneListComponent } from './timezone/components/timezone-list/timezone-list.component';
import { FiveoclockComponent } from './fiveoclock/fiveoclock.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';
@NgModule({
  declarations: [
    AppComponent,
    TimezoneListComponent,
    FiveoclockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    TimezoneService,
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
