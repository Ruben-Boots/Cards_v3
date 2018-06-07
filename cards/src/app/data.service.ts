import { Injectable, EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Kaart} from './Kaart';

@Injectable()
export class DataService {

  numPicks = 0;
  cards: Kaart[];
  selected = 0;

  @Output() numPicksUpdated: EventEmitter<number> = new EventEmitter(true);
  @Output() cardsUpdated: EventEmitter<Kaart[]> = new EventEmitter(true);
  @Output() selectedUpdated: EventEmitter<number> = new EventEmitter(true);

  constructor( ) { }

  setNumPicks(numPicks: number) {
    this.numPicks = numPicks;
    this.numPicksUpdated.emit(numPicks);
  }

  getNumPicks(): number {
    return this.numPicks;
  }

  getCards(): Kaart[] {
    return this.cards;
  }

  setCards(cards: Kaart[]) {
    this.cards = cards;
    this.cardsUpdated.emit(cards);
  }

  getSelected(): number {
    return this.selected;
  }

  setSelected(selected: number) {
    this.selected = selected;
    this.selectedUpdated.emit(selected);
  }

}
