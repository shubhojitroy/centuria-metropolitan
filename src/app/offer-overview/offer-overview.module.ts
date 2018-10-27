import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferOverviewRoutingModule } from './offer-overview-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { DatesComponent } from './dates/dates.component';
import { ProspectusComponent } from './prospectus/prospectus.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    OfferOverviewRoutingModule
  ],
  declarations: [
    OverviewComponent,
    DatesComponent,
    ProspectusComponent,
    ContactComponent
  ]
})
export class OfferOverviewModule { }
