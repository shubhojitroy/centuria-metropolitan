import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestorService } from '../../services/shared/investor.service';
@Component({
  selector: 'cmo-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.scss']
})
export class RegistrationDetailsComponent implements OnInit {

  pageTitle = 'Registration Details';
  investors: any[];
  constructor(private router: Router, private investorService: InvestorService) { }

  ngOnInit() {
    this.investors = this.investorService.getInvestors();
  }

  onAgree() {
    this.router.navigate(['/application']);
  }

}
