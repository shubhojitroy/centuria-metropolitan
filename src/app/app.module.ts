import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './templates/home/home.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { EligibilityNoticeComponent } from './templates/eligibility-notice/eligibility-notice.component';
import { ImportantInformationComponent } from './templates/important-information/important-information.component';
import { OfferOverviewComponent } from './templates/offer-overview/offer-overview.component';

import { HeaderComponent } from './childtemplates/header/header.component';
import { FooterComponent } from './childtemplates/footer/footer.component';

import { TabsModule } from 'ngx-bootstrap';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { CountryService} from './services/shared/country.service';
import { InvestorService} from './services/shared/investor.service';

import { ContactComponent } from './modals/contact/contact.component';
import { PrivacypolicyComponent } from './modals/privacypolicy/privacypolicy.component';


import { LoginComponent } from './templates/login/login.component';
import { RegistrationDetailsComponent } from './templates/registration-details/registration-details.component';
import { ApplicationComponent } from './templates/application/application.component';
import { ConfirmationPaymentComponent } from './templates/confirmation-payment/confirmation-payment.component';
import { FinishComponent } from './templates/finish/finish.component';
import { OfferOverviewModule } from './offer-overview/offer-overview.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationComponent,
    EligibilityNoticeComponent,
    ImportantInformationComponent,
    OfferOverviewComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationDetailsComponent,
    ApplicationComponent,
    ConfirmationPaymentComponent,
    FinishComponent,
    ContactComponent,
    PrivacypolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    OfferOverviewModule,
  ],
  providers: [BsModalService, CountryService, InvestorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
