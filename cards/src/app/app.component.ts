import {Component, OnInit} from '@angular/core';
import {CardService} from './card.service';
import {Observable} from '../../node_modules/rxjs';
import {AnonymousSubscription} from 'rxjs/Subscription';
import {DataService} from './data.service';
import {Kaart} from './Kaart';
import {TSMap} from 'typescript-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  blackCard: Kaart = new Kaart(0, '');

  speelronde = true;
  wacht = true;
  geklikt = false;
  czarview = false;

  playedCards: string[];

  bevestig = 0;
  spelers = 0;
  ronde = 0;
  maxRondes = 10;
  naam: string;
  first = false;
  id: number;

  private timerSubscription: AnonymousSubscription;

  constructor(private cardService: CardService, private dataService: DataService) {
  }

  private refreshData(): void {

    this.cardService.getPlayedCards().subscribe(played => {
      this.playedCards = played;
    });

    this.cardService.getStuff().subscribe(user => {
      this.bevestig = user[0];
      this.spelers = user[1];
      this.czarview = user[4] === 1;

      if (this.ronde < user[2] && this.ronde !== 0) {
        if (!this.wacht) {

          this.dataService.drawOneBlack();
          this.dataService.removeSelectedCards();
          this.dataService.drawNewCards();
        }
      }

      if (this.ronde !== 0 && user[2] === 0) {
        this.geklikt = false;
        this.wacht = false;
      }


      if (this.ronde === 0 && user[2] === 1 && !this.geklikt) {
        this.wacht = true;
      }

      if (this.ronde !== user[2]) {
        this.ronde = user[2];
        this.speelronde = true;
      }

      this.maxRondes = user[3];

      this.subscribeToData();
    });
  }

  private subscribeToData(): void {
    this.timerSubscription = Observable.timer(1000).first().subscribe(() => this.refreshData());
  }

  ngOnInit() {
    this.dataService.blackCardUpdated.subscribe(blackCard => this.blackCard = blackCard);
    this.cardService.getStuff().subscribe(
      user => {
        this.wacht = (user[2] !== 0);
      }
    );
    this.refreshData();
  }

  resetSpring() {
    this.cardService.resetSpring();
    this.first = false;
  }
}
