export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // getter
  get sqft() {
    return this.sqft;
  }

  // abstract method
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage(dummy = null) {
    if (dummy === null) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
