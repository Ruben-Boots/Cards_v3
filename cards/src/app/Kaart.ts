export class Kaart {

  text: string;
  id: Number = 0;
  select = false;
  numPicks = 0;

  constructor(id: Number, text: string, public state= 'inactive') {
    this.text = text;
    this.id = id;
  }
}
