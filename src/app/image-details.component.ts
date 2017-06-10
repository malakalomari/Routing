import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { LocalstorageService } from './localstorage.service';
import { Info } from './info';
import 'rxjs/add/operator/switchMap';


@Component ( {
  selector: 'image-details',
  templateUrl: './image-details.component.html'
})

export class ImageDetailsComponent implements OnInit {
  info: Info;
  constructor(
    private localstorageService: LocalstorageService,
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
}
