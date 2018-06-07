export class Kaart {

  text: String;
  id: Number = 0;
  select = false;
  numPicks = 0;

  constructor(id: Number, text: String) {
    this.text = text;
    this.id = id;
  }
}
