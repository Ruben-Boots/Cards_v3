export class Kaart {

  text: String;
  id: Number = 0;
  select = false;
  numPicks = 0;

  constructor(id: Number, text: String, public state= 'inactive') {
    this.text = text;
    this.id = id;
  }

  toggleCardState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
