import { Component, ElementRef , OnInit} from '@angular/core';
import { Info } from './info';
import { LocalstorageService } from './localstorage.service';

import { Router } from '@angular/router';


@Component({
  selector: 'my-images',
  templateUrl: './images.component.html',
  styleUrls: []
})
export class ImagesComponent implements OnInit {
  infos: Info[];
  selectedImage: Info;
  storedImg: Info[] = [] ;

  constructor(
    private router: Router,
    private localstorageService: LocalstorageService) { }

  getImages(): void {
    this.storedImg = this.localstorageService.getImage();
  }

  ngOnInit(): void {
    this.getImages();
  }

  onSelect(img: Info): void {
    this.selectedImage = img;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedImage.title]);
  }

}
