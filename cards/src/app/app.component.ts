import { Component, OnInit} from '@angular/core';
import {CardService} from './card.service';
import {Observable} from '../../node_modules/rxjs';
import {AnonymousSubscription} from 'rxjs/Subscription';
import {timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  spel = false;
  speelronde = true;

  spelers = 0;
  ronde = 0;
  maxRondes = 10;
  naam: string;
  first = false;
  id: number;

  private timerSubscription: AnonymousSubscription;

  constructor(private cardService: CardService) {}

  private refreshData(): void {
    this.cardService.getStuff().subscribe(user => {
      this.spelers = user[1];
      console.log(user);
      this.subscribeToData();
    });
  }

  private subscribeToData(): void {
    this.timerSubscription = Observable.timer(2000).first().subscribe(() => this.refreshData());
  }

  ngOnInit() {
    this.refreshData();
  }
}
