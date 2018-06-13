import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AppComponent} from '../app.component';
import {CardService} from '../card.service';


@Component({
  selector: 'app-keuzes',
  templateUrl: './keuzes.component.html',
  styleUrls: ['./keuzes.component.css']
})
export class KeuzesComponent implements OnInit {
  sets: string[] = ['Maindeck', '', '', '', '', '', ''];

  constructor(private fb: FormBuilder, @Inject(AppComponent) private parent: AppComponent, private cardService: CardService) { }

  public startForm = this.fb.group({
    rondes: [10, Validators.required],
    EXP1: [false],
    EXP2: [false],
    EXP3: [false],
    EXP4: [false],
    EXP5: [false],
    EXP6: [false],
  });


  public saveSettings() {
    for (let i = 1; i < 7; i++) {
      if (this.startForm.controls['EXP' + i].value) {
        this.sets[i] = 'EXP' + i;
      }
    }
    this.cardService.setSets(this.sets);
    this.parent.maxRondes = this.startForm.controls['rondes'].value;
    this.cardService.clearPlayedCards();
    this.cardService.setMaxRondes(this.parent.maxRondes);
    this.cardService.resetBlack();
    this.parent.ronde++;
    this.parent.speelronde = true;
    this.cardService.volgendeRonde();
  }

  ngOnInit() {
  }

}
