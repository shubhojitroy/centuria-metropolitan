import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './templates/home/home.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { EligibilityNoticeComponent } from './templates/eligibility-notice/eligibility-notice.component';
import { ImportantInformationComponent } from './templates/important-information/important-information.component';
import { OfferOverviewComponent } from './templates/offer-overview/offer-overview.component';
import { LoginComponent } from './templates/login/login.component';
import { RegistrationDetailsComponent } from './templates/registration-details/registration-details.component';
import { ApplicationComponent } from './templates/application/application.component';
import { ConfirmationPaymentComponent } from './templates/confirmation-payment/confirmation-payment.component';
import { FinishComponent } from './templates/finish/finish.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'eligibility-notice', component: EligibilityNoticeComponent },
  { path: 'important-information', component: ImportantInformationComponent },
  { path: 'offer-overview', component: OfferOverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration-details', component: RegistrationDetailsComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'confirmation-payment', component: ConfirmationPaymentComponent },
  { path: 'finish', component: FinishComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
