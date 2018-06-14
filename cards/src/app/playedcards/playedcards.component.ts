import {Component, Inject, OnInit} from '@angular/core';
import {Kaart} from '../Kaart';
import {AppComponent} from '../app.component';
import {CardService} from '../card.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-playedcards',
  templateUrl: './playedcards.component.html',
  styleUrls: ['./playedcards.component.css']
})
export class PlayedcardsComponent implements OnInit {

  // spelers: string[] = [this.parent.spelers];
  playedCards: string[] ;
  spelers: string[] = new Array();
  cards: string[][] = new Array();

  constructor(private dataService: DataService, @Inject(AppComponent) private parent: AppComponent, private cardService: CardService) {}

  ngOnInit() {
    this.playedCards = this.parent.playedCards.slice(0);
    for (let i = 1; i <= this.parent.spelers; i++) {
      this.cardService.getUserNaam(i).subscribe(naam => this.spelers.push(naam));
      this.cards[i - 1] = this.playedCards.splice(0, 3).splice(0, this.parent.blackCard.numPicks);
    }
    console.log(this.cards);
  }

  bevestig() {
    this.cardService.volgendeRonde();
    this.cardService.resetBevestig();
    this.cardService.setCzarview();
  }

}
