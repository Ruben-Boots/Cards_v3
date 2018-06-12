import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AppComponent} from '../app.component';
import {CardService} from '../card.service';
import {Observable} from 'rxjs';
import {AnonymousSubscription} from 'rxjs/Subscription';
import {timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-keuzes',
  templateUrl: './keuzes.component.html',
  styleUrls: ['./keuzes.component.css']
})
export class KeuzesComponent implements OnInit {

  private timerSubscription: AnonymousSubscription;
  private commentsSubscription: AnonymousSubscription;
  // const timer = timer(5000);

  constructor(private fb: FormBuilder, @Inject(AppComponent) private parent: AppComponent, private cardService: CardService) { }

  public startForm = this.fb.group({
    rondes: [10, Validators.required],
  });


  public saveSettings(event) {
    this.parent.maxRondes = this.startForm.controls['rondes'].value;
    this.cardService.setMaxRondes(this.parent.maxRondes);
    this.cardService.setSpel();
    this.parent.ronde++;
  }

  ngOnInit() {
  }

}
