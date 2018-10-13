import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cmo-offer-overview',
  templateUrl: './offer-overview.component.html',
  styleUrls: ['./offer-overview.component.scss']
})
export class OfferOverviewComponent implements OnInit {

  pageTitle = 'Entitlement features';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.router.navigate(['/login']);
  }

}
