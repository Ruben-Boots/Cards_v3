import {Component, Input, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {Kaart} from '../Kaart';
import {DataService} from '../data.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css'],
  providers:  []
})
export class HandComponent implements OnInit {
  cards: Kaart[];
  selected = 0 ;
  numPicks: number;
  selectedCards: Kaart[] = [];

  constructor(private cardService: CardService, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.drawNewCards();
    this.dataService.numPicksUpdated.subscribe(numPicks => this.numPicks = numPicks);
    this.dataService.cardsUpdated.subscribe(cards => this.cards = cards);
    this.dataService.selectedUpdated.subscribe(selected => this.selected = selected);
  }

  public selectKaart(kaart: Kaart) {
      // this.dataService.setNumPicks(12);
      // console.log(this.numPicks + 'inselectkaart');
      // for (const card in this.cards) {
      //   if (card.select === true) {
      //     console.log('en weer een');
      //   }
      // }


      if (kaart.select) {
        this.selected--;
      } else {
        this.selected++;
      }

      kaart.select = !kaart.select;
      if (kaart.select) {
        this.selectedCards.push(kaart);
      } else {
        this.selectedCards.splice(this.selectedCards.indexOf(kaart), 1);
      }


      this.dataService.setSelected(this.selected);
      this.dataService.setSelectedCards(this.selectedCards);
  }
}
