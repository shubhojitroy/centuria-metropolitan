import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { DatesComponent } from './dates/dates.component';
import { ProspectusComponent } from './prospectus/prospectus.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'prospectus', component: ProspectusComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferOverviewRoutingModule { }
