import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  speelronde = true;
  ronde = 0;
  maxRondes = 10;
  naam: string;
}
