import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cmo-confirmation-payment',
  templateUrl: './confirmation-payment.component.html',
  styleUrls: ['./confirmation-payment.component.scss']
})
export class ConfirmationPaymentComponent implements OnInit {

  pageTitle = 'Confirmation for Application Registration';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFinish() {
    this.router.navigate(['/finish']);
  }

}
