import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/shared/country.service';

@Component({
  selector: 'cmo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageTitle = 'Centuria Retail Entitlement Offer';
  cardLabel = 'Country of Primary Residence';

  countryform: FormGroup;
  country: FormControl;
  countries: any[];
  constructor(private router: Router, private countryService: CountryService) { }

  createFormControls() {
    this.country = new FormControl('', Validators.required);
  }

  createForm() {
    this.countryform = new FormGroup ({
      country: this.country
    });
  }

  ngOnInit() {
    this.countries = this.countryService.getCountries();
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.countryform.valid) {
      if (this.country.value === 'Australia') {
        console.log('Form Submitted!', this.countryform.value);
        this.router.navigate(['/confirmation']);
        this.countryform.reset();
      } else if (this.country.value === 'New Zealand') {
        this.router.navigate(['/confirmation']);
      } else {
        this.router.navigate(['/eligibility-notice']);
      }
    }
  }

}
