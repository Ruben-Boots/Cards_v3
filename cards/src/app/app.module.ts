import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {HandComponent} from './hand/hand.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CardplayComponent } from './cardplay/cardplay.component';
import {DataService} from './data.service';
import { CardevalComponent } from './cardeval/cardeval.component';
import {CardService} from './card.service';
import { HandevalComponent } from './handeval/handeval.component';
import { EndComponent } from './end/end.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    HandComponent,
    CardplayComponent,
    CardevalComponent,
    HandevalComponent,
    EndComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
