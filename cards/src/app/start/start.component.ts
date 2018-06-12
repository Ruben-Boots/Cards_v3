import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AppComponent} from '../app.component';
import {CardService} from '../card.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  geklikt = false;

  constructor(private cardService: CardService, public fb: FormBuilder, @Inject(AppComponent) private parent: AppComponent) {
  }

  public startForm = this.fb.group({
    naam: ['Sjaak', Validators.required]
  });

  public saveSettings(event) {
    this.parent.naam = this.startForm.controls['naam'].value;
    this.cardService.addUser().subscribe(id => {
      this.parent.id = id;
      this.cardService.getUser(this.parent.id).subscribe(first => this.parent.first = first);
    });
    this.geklikt = true;
  }

  ngOnInit() {
  }

}
