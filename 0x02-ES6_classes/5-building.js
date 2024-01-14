export default class Building {
  constructor(sqft) {
    if (this.constructor === Building || !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // getter
  get sqft() {
    return this.sqft;
  }
}
