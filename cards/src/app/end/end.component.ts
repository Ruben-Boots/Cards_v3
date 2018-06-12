import {Component, Inject, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {Data} from '@angular/router';
import {DataService} from '../data.service';
import {CardService} from '../card.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  constructor(private dataService: DataService, private cardService: CardService, @Inject(AppComponent) private parent: AppComponent) { }

  ngOnInit() {
  }

  nogEenKeer() {
    this.parent.ronde = 0;
    this.cardService.removeUser(this.parent.id);
    this.dataService.newHand();
  }

}
