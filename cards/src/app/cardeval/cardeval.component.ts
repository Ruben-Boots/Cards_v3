import { Component, OnInit, AfterViewInit, Inject} from '@angular/core';
import {DataService} from '../data.service';

import {Kaart} from '../Kaart';
import {AppComponent} from '../app.component';



@Component({
  selector: 'app-cardeval',
  templateUrl: './cardeval.component.html',
  styleUrls: ['./cardeval.component.css']
})
export class CardevalComponent implements OnInit {
  blackCard: Kaart = new Kaart( 0 , '');
  cards: Kaart[];
  selected = 0;

  constructor(private dataService: DataService, @Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit() {
    this.dataService.selectedCardsUpdated.subscribe(cards => this.cards = cards);
    this.dataService.selectedUpdated.subscribe(selected => this.selected = selected);
    this.dataService.blackCardUpdated.subscribe(blackCard => this.blackCard = blackCard);
  }

  bevestig() {
    this.dataService.kaartToString();
    this.dataService.drawOneBlack();
    this.dataService.removeSelectedCards();
    this.dataService.drawNewCards();
    this.parent.ronde++;
    this.parent.speelronde = true;
  }

}
