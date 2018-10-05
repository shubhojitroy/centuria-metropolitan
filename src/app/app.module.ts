import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { EligibilityNoticeComponent } from './templates/eligibility-notice/eligibility-notice.component';

import { HeaderComponent } from './childtemplates/header/header.component';
import { FooterComponent } from './childtemplates/footer/footer.component';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ContactComponent } from './modals/contact/contact.component';
import { PrivacypolicyComponent } from './modals/privacypolicy/privacypolicy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationComponent,
    EligibilityNoticeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
