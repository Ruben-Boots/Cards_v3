import { Kaart } from './Kaart';

export class Hand {

  aantal: Number = 10;
  kaarten: Array<Kaart> = [];

  constructor() {
    for (let i = 0; i < this.aantal; i++) {
      // this.kaarten[i] = new Kaart(2, 'text');
    }
  }
}
