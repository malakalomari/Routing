import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from './country';
import { HttpService } from './http.service';

@Component({
  selector: 'my-country',
  templateUrl: './countries.component.html',
  styleUrls: [ './countries.component.css' ]
})
export class CountryComponent  {
  countries: Country[];

  constructor(
    private httpService: HttpService,
    private router: Router) { }

/*  getCountries(): void {
    this.httpService
      .getCountries()
      .then(countries => {
        this.countries = countries;
        console.log('countries', countries);
      });
  }
  ngOnInit(): void {
    this.getCountries();
  }*/
}
