import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Kaart} from './Kaart';

@Injectable()
export class CardService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Kaart[]>  {
    return this.http.get('http://localhost:8080/card')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  drawBlack(): Observable<Kaart> {
    return this.http.get('http://localhost:8080/blackcard')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
