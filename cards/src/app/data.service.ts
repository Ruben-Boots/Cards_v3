import { Injectable, EventEmitter, Output } from '@angular/core';
import {CardService} from './card.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Kaart} from './Kaart';

@Injectable()
export class DataService {

  blackCard = new Kaart (0, '');
  numPicks = 0;
  cards: Kaart[] = [];
  selected = 0;
  private selectedCards: Kaart[];
  gespeeld: String;

  @Output() numPicksUpdated: EventEmitter<number> = new EventEmitter(true);
  @Output() cardsUpdated: EventEmitter<Kaart[]> = new EventEmitter(true);
  @Output() selectedUpdated: EventEmitter<number> = new EventEmitter(true);
  @Output() selectedCardsUpdated: EventEmitter<Kaart[]> = new EventEmitter(true);
  @Output() blackCardUpdated: EventEmitter<Kaart> = new EventEmitter<Kaart>(true);

  constructor(private cardService: CardService ) { }

  removeSelectedCards() {
    this.selectedCards.splice(0, this.selectedCards.length);
    console.log('Selectedcards:' + this.selectedCards.length);
    this.selectedCardsUpdated.emit(this.selectedCards);
    this.setSelected(0);
  }

  removeHandCards() {
    for (const kaart of this.selectedCards) {
      this.cards.splice(this.cards.indexOf(kaart), 1);
    }
    this.cardsUpdated.emit(this.cards);
  }

  drawNewCards() {
    this.cardService.findAll(10 - this.cards.length)
                    .subscribe(cards => {this.setCards(this.cards.concat(cards)); }
                                               );
  }

  kaartToString() {

  }

  newHand() {
    this.cards = [];
    this.drawNewCards();
    this.cardsUpdated.emit(this.cards);
  }


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

  getSelectedCards(): Kaart[] {
    return this.selectedCards;
  }

  setSelectedCards(value: Kaart[]) {
    this.selectedCards = value;
    this.selectedCardsUpdated.emit(value);
  }

  getBlackCard(): Kaart {
    return this.blackCard;
  }

  setBlackCard(value: Kaart) {
    this.blackCard = value;
    this.blackCardUpdated.emit(this.blackCard);
  }

  drawOneBlack() {
    this.cardService.drawBlack().subscribe(
      card => {
        this.setBlackCard(card);
        this.setNumPicks(this.blackCard.numPicks);
      },
      err => {
        console.log(err);
      }
    );
  }
}
