import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Kaart} from './Kaart';
import {TSMap} from 'typescript-map';

@Injectable()
export class CardService {

  origin = '10.2.22.105:8080';

  constructor(private http: HttpClient) { }

  getPlayedCards(): Observable<TSMap<number, string[]>> {
    return this.http.get('http://'  + this.origin + '/playedCards').map((response: Response) => <TSMap>(response));
  }

  clearPlayedCards() {
    this.http.get('http://'  + this.origin + '/playedCards/clear').subscribe();
  }

  setPlayedCards(playedCards: string[], id: number) {
    this.http.post('http://'  + this.origin + '/playedCards/' + id, playedCards).subscribe();
  }

  setSets(sets: string[]) {
    this.http.post('http://'  + this.origin + '/sets', sets).subscribe();
  }

  findAll(aantal: number): Observable<Kaart[]>  {
    return this.http.get('http://'  + this.origin + '/card/draw/' + aantal)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  drawBlack(): Observable<Kaart> {
    return this.http.get('http://'  + this.origin + '/blackcard')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addUser(): Observable<number> {
    return this.http.get('http://' + this.origin + '/add')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUser(id: number): Observable<boolean> {
    return this.http.get('http://' + this.origin + '/user/' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  setMaxRondes(max: number) {
    this.http.get('http://' + this.origin + '/rondes/' + max).subscribe();
  }

  getStuff(): Observable<number[]> {
    return this.http.get('http://' + this.origin + '/stuff')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  resetSpring() {
    this.http.get('http://' + this.origin + '/reset')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')).subscribe();
  }

  volgendeRonde() {
    this.http.get('http://' + this.origin + '/ronde').subscribe();
  }

  resetRonde() {
    this.http.get('http://' + this.origin + '/ronde/reset').subscribe();
  }

  setBevestig() {
    this.http.get('http://' + this.origin + '/bevestig').subscribe();
  }

  resetBevestig() {
    this.http.get('http://' + this.origin + '/bevestig/reset').subscribe();
  }

  resetBlack() {
    this.http.get('http://' + this.origin + '/blackcard/reset').subscribe();
  }
}
