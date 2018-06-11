import { Component, OnInit, AfterViewInit, Inject} from '@angular/core';
import {CardService} from '../card.service';
import {DataService} from '../data.service';
// import {HandComponent} from '../hand/hand.component';

import {Kaart} from '../Kaart';
import {AppComponent} from '../app.component';
// import {Todo} from '../Todo';

@Component({
  selector: 'app-cardplay',
  templateUrl: './cardplay.component.html',
  styleUrls: ['./cardplay.component.css'],
  providers: []
})
export class CardplayComponent implements OnInit {
  blackCard: Kaart = new Kaart( 0 , '');
  selectedCards: Kaart[];
  selected = 0;


  constructor(private cardService: CardService, private dataService: DataService, @Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit() {
    this.dataService.drawOneBlack();
    this.dataService.blackCardUpdated.subscribe(blackCard => this.blackCard = blackCard);
    this.dataService.selectedCardsUpdated.subscribe(selectedCards => this.selectedCards = selectedCards);
    this.dataService.selectedUpdated.subscribe(selected => this.selected = selected);
  }

  bevestig() {
    this.dataService.removeHandCards();
    this.parent.speelronde = false;
  }
}
