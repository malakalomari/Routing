import { Injectable } from '@angular/core';
import { Info } from './info';



@Injectable()
export class LocalstorageService {
  imgData= '';
  storedImg: Info[] = [] ;
  setImage(savedImage: any): void {
    localStorage.setItem('imgData', JSON.stringify(savedImage));
  }
  getImage() {
    return JSON.parse(localStorage.getItem('imgData'));
  }
  getImages(): Promise<Info[]> {
    this.storedImg = JSON.parse(localStorage.getItem('imgData'));
    return  Promise.resolve(this.storedImg);
  }
  remove(img: any) {
    localStorage.clear();
  }
  findImage(title: string): Promise<Info> {
    return this.getImages()
      .then(infos => infos.find( info => info.title === title));
  }
}
