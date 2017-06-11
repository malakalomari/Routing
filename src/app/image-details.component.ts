import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { LocalstorageService } from './localstorage.service';
import { Info } from './info';
import 'rxjs/add/operator/switchMap';
import { HttpService } from './http.service';
import { Country } from './country';



@Component ( {
  selector: 'image-details',
  templateUrl: './image-details.component.html'
})

export class ImageDetailsComponent implements OnInit {
  info: Info;
  country: Country;
  constructor(
    private localstorageService: LocalstorageService,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.localstorageService.findImage(params['title']))
      .subscribe(info => this.info = info);
  }
  goBack(): void {
    this.location.back();
  }
 /* save(): void {
    this.httpService.update(this.country)
      .then(() => this.goBack());
  }*/
}
