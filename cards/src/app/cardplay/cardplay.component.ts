import { Component, OnInit, Inject} from '@angular/core';
import {CardService} from '../card.service';
import {DataService} from '../data.service';



import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

import {Kaart} from '../Kaart';
import {AppComponent} from '../app.component';
// import {Todo} from '../Todo';

@Component({
  selector: 'app-cardplay',
  templateUrl: './cardplay.component.html',
  styleUrls: ['./cardplay.component.css'],
  providers: [],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateY(100%) scaleX(0.2)'}),
        animate(1000),
      ]),
      transition('* => void', [
        animate(50, style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class CardplayComponent implements OnInit {

  selectedCards: Kaart[];
  selected = 0;
  cards: Kaart[];


  constructor(private cardService: CardService, private dataService: DataService, @Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit() {
    this.dataService.drawOneBlack();
    this.dataService.cardsUpdated.subscribe(cards => this.cards = cards);
    this.dataService.selectedCardsUpdated.subscribe(selectedCards => this.selectedCards = selectedCards);
    this.dataService.selectedUpdated.subscribe(selected => this.selected = selected);
  }

  bevestig() {
    const teksten = [''];
    for (const kaart of this.selectedCards) {
      teksten.push(kaart.text);
    }
    teksten.splice(0, 1);
    console.log(teksten);
    this.cardService.setPlayedCards(teksten, this.parent.id);
    this.dataService.removeHandCards();
    this.cardService.setBevestig();
    this.parent.geklikt = false;
    this.parent.speelronde = false;
  }
}
