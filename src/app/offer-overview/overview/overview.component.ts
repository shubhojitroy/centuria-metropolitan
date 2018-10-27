import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmo-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  tabTitle = 'Overview of the Entitlement Offer';
  constructor() { }

  ngOnInit() {
  }

}
