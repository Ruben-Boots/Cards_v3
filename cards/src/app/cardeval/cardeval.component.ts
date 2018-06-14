import { Component, OnInit, AfterViewInit, Inject} from '@angular/core';
import {DataService} from '../data.service';

import {Kaart} from '../Kaart';
import {AppComponent} from '../app.component';
import {CardService} from '../card.service';



@Component({
  selector: 'app-cardeval',
  templateUrl: './cardeval.component.html',
  styleUrls: ['./cardeval.component.css']
})
export class CardevalComponent implements OnInit {
  cards: Kaart[];
  selected = 0;

  constructor(private dataService: DataService, @Inject(AppComponent) private parent: AppComponent, private cardService: CardService) { }

  ngOnInit() {
    this.dataService.selectedCardsUpdated.subscribe(cards => this.cards = cards);
    this.dataService.selectedUpdated.subscribe(selected => this.selected = selected);
  }

  bevestig() {
    this.cardService.setCzarview();
  }

}
