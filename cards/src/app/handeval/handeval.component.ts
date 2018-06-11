import {Component, Input, OnInit} from '@angular/core';
import {Kaart} from '../Kaart';
import {DataService} from '../data.service';

@Component({
  selector: 'app-handeval',
  templateUrl: './handeval.component.html',
  styleUrls: ['./handeval.component.css'],
  providers:  []
})
export class HandevalComponent implements OnInit {
  cards: Kaart[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.cardsUpdated.subscribe(cards => this.cards = cards);
  }
}
