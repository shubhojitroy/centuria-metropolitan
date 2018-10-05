import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cmo-eligibility-notice',
  templateUrl: './eligibility-notice.component.html',
  styleUrls: ['./eligibility-notice.component.scss']
})
export class EligibilityNoticeComponent implements OnInit {

  pageTitle = 'Legal Restriction';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack(): void {
    this.router.navigate(['/home']);
  }

}
