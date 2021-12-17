import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimezoneService } from './timezone/services/timezone.service';
import { AppRoutingModule } from './app-routing.module';
import { TimezoneListComponent } from './timezone/components/timezone-list/timezone-list.component';
import { FiveoclockComponent } from './fiveoclock/fiveoclock.component';
import { TimezoneSingleComponent } from './timezone/components/timezone-single/timezone-single.component';
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
  ],
  providers: [TimezoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
