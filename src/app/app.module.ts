import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimezoneListComponent } from './timezone/components/timezone-list/timezone-list.component';
import { TimezoneService } from './timezone/services/timezone.service';
@NgModule({
  declarations: [AppComponent, TimezoneListComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [TimezoneService],
  bootstrap: [AppComponent],
})
export class AppModule {}
