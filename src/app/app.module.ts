import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimezoneService } from './timezone/services/timezone.service';
import { AppRoutingModule } from './app-routing.module';
import { TimezoneListComponent } from './timezone/components/timezone-list/timezone-list.component';
import { TimezoneClosestComponent } from './timezone/components/timezone-closest/timezone-closest.component';

@NgModule({
  declarations: [
    AppComponent,
    TimezoneListComponent,
    TimezoneClosestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [TimezoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
