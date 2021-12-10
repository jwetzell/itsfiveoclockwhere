import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimezoneClosestComponent } from './timezone/components/timezone-closest/timezone-closest.component';
import { TimezoneListComponent } from './timezone/components/timezone-list/timezone-list.component';

const routes: Routes = [
  { path: '', component: TimezoneListComponent },
  { path: 'closest', component: TimezoneClosestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
