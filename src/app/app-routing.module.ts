import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './templates/home/home.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { EligibilityNoticeComponent } from './templates/eligibility-notice/eligibility-notice.component';
import { ImportantInformationComponent } from './templates/important-information/important-information.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'eligibility-notice', component: EligibilityNoticeComponent },
  { path: 'important-information', component: ImportantInformationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
