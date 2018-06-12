import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Kaart} from './Kaart';

@Injectable()
export class CardService {

  constructor(private http: HttpClient) { }

  findAll(aantal: number): Observable<Kaart[]>  {
    return this.http.get('http://localhost:8080/card/draw/' + aantal)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  drawBlack(): Observable<Kaart> {
    return this.http.get('http://localhost:8080/blackcard')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addUser(): Observable<number> {
    return this.http.get('http://localhost:8080/add')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeUser(id: number) {
    this.http.get('http://localhost:8080/remove/' + id).subscribe();
  }

  getUser(id: number): Observable<boolean> {
    return this.http.get('http://localhost:8080/user/' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  setMaxRondes(max: number) {
    this.http.get('http://localhost:8080/rondes/' + max)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  setSpel() {
    this.http.get('http://localhost:8080/spel')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getStuff(): Observable<number[]> {
    return this.http.get('http://localhost:8080/stuff')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
