import {Component, Input, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {Kaart} from '../Kaart';
import {DataService} from '../data.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css'],
  providers:  [CardService]
})
export class HandComponent implements OnInit {
  cards: Kaart[];
  selected = 0 ;
  numPicks: number;

  constructor(private cardService: CardService, private dataService: DataService) {
  }

  ngOnInit() {
    this.getAllCards();
    this.dataService.numPicksUpdated.subscribe(numPicks => this.numPicks = numPicks);
    console.log(this.numPicks);
  }


  getAllCards() {
    this.cardService.findAll().subscribe(
      cards => {
        this.cards = cards;
        this.dataService.setCards(this.cards);
      },
      err => {
        console.log(err);
      }
    );
  }

  public selectKaart(kaart: Kaart) {
      // this.dataService.setNumPicks(12);
      console.log(this.numPicks + 'inselectkaart');
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
      this.dataService.setSelected(this.selected);
  }
}
