import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveoclockComponent } from './fiveoclock/fiveoclock.component';
import { TimezoneListComponent } from './timezone/components/timezone-list/timezone-list.component';

const routes: Routes = [
  { path: '', component: FiveoclockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
