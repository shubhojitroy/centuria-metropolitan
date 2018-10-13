import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cmo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pageTitle = 'Entitlement Offer';
  loginform: FormGroup;
  login: FormControl;

  createFormControls() {
    this.login = new FormControl('', Validators.required);
  }

  createForm() {
    this.loginform = new FormGroup ({
      country: this.login
    });
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onLogin() {
    this.router.navigate(['/registration-details']);
  }

}
