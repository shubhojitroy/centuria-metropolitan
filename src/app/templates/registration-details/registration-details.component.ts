import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cmo-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.scss']
})
export class RegistrationDetailsComponent implements OnInit {

  pageTitle = 'Registration Details';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAgree() {
    this.router.navigate(['/application']);
  }

}
