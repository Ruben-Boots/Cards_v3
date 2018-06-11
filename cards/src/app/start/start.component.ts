import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TodoServiceService} from '../todo-service.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(public fb: FormBuilder, @Inject(AppComponent) private parent: AppComponent) {
  }

  public startForm = this.fb.group({
    rondes: [10, Validators.required],
    naam: ['Sjaak', Validators.required]
  });

  public saveSettings(event) {
    this.parent.maxRondes = this.startForm.controls['rondes'].value;
    this.parent.naam = this.startForm.controls['naam'].value;
    this.parent.ronde++;
  }

  ngOnInit() {
  }

}
