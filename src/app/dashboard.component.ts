import { Component, OnInit, ElementRef  } from '@angular/core';
import { Info } from './info';
import {  LocalstorageService } from './localstorage.service';

import { Router } from '@angular/router';
import { Country } from './country';
import { HttpService } from './http.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./app.component.css']
})
export class DashboardComponent implements OnInit {
  infos: Info[] = [];
  savedImg: Info[] = [];
  img = '';
  storedImg: Info[] = [] ;
  selectedImage: Info;
  countries: Country[] = [];
  errorMessage: string;
  constructor(private element: ElementRef, private localstoraeService: LocalstorageService, private httpService: HttpService,
              private router: Router) {}
  PreviewImage(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.img = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  imgInfo(title: string , desc: string, date: any) {
    this.savedImg.push(
      new Info(this.img, title, desc, date));
    this.localstoraeService.setImage(this.savedImg);
    this.storedImg = this.localstoraeService.getImage();
  }
  delete(index) {
    this.storedImg.splice(index, 1);
    this.savedImg.splice(index, 1);
  }
  ngOnInit(): void {
    this.storedImg =  this.localstoraeService.getImage();
       // .then(storedImg => this.storedImg = storedImg.slice(1, 5));
    //this.getCountries();

  }
  getCountries(): void {
    this.httpService
      .getCountries()
      .subscribe(
        countries => this.countries = countries,
        error =>  this.errorMessage = <any>error);
  }
}
