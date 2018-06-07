import { Component, OnInit, AfterViewInit} from '@angular/core';
import {CardService} from '../card.service';
import {DataService} from '../data.service';
// import {HandComponent} from '../hand/hand.component';

import {Kaart} from '../Kaart';
// import {Todo} from '../Todo';

@Component({
  selector: 'app-cardplay',
  templateUrl: './cardplay.component.html',
  styleUrls: ['./cardplay.component.css'],
  providers: [CardService]
})
export class CardplayComponent implements OnInit {
  blackCard: Kaart = new Kaart( 0 , '');
  cards: Kaart[];
  selected = 0;

  constructor(private cardService: CardService, private dataService: DataService) { }

  ngOnInit() {
    this.drawOneBlack();
    this.dataService.cardsUpdated.subscribe(cards => this.cards = cards);
    this.dataService.selectedUpdated.subscribe(selected => this.selected = selected);
  }

  drawOneBlack() {
    this.cardService.drawBlack().subscribe(
      card => {
        this.blackCard = card;
        this.dataService.setNumPicks(this.blackCard.numPicks);
      },
      err => {
        console.log(err);
      }
    );
  }
}
