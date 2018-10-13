import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cmo-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  pageTitle = 'Application for Entitlement Offer (CMA)';
  applicationform: FormGroup;
  application: FormControl;

  createFormControls() {
    this.application = new FormControl('', Validators.required);
  }

  createForm() {
    this.applicationform = new FormGroup ({
      application: this.application
    });
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    this.router.navigate(['/confirmation-payment']);
  }

}
