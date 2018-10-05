import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './templates/home/home.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { EligibilityNoticeComponent } from './templates/eligibility-notice/eligibility-notice.component';
import { ImportantInformationComponent } from './templates/important-information/important-information.component';

import { HeaderComponent } from './childtemplates/header/header.component';
import { FooterComponent } from './childtemplates/footer/footer.component';

import { TabsModule } from 'ngx-bootstrap';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { ContactComponent } from './modals/contact/contact.component';
import { PrivacypolicyComponent } from './modals/privacypolicy/privacypolicy.component';

import { OverviewComponent } from './tabs/overview/overview.component';

import { DatesComponent } from './tabs/dates/dates.component';
import { CtcdetailsComponent } from './tabs/ctcdetails/ctcdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationComponent,
    EligibilityNoticeComponent,
    ImportantInformationComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PrivacypolicyComponent,
    OverviewComponent,    
    DatesComponent,
    CtcdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
