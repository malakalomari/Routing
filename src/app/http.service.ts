import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Country } from './country';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  // URL to web api
  private countriesUrl = 'https://restcountries.eu/rest/v2/all?fields=name';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  getCountries(): Observable<Country[]> {
    return this.http.get(this.countriesUrl)
      .map(this.extractData)
      // .then(response => response.json().data as Country[])
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || [];
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
