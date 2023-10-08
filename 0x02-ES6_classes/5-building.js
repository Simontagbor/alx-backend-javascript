export default class Building {
  constuctor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqrt must be a number');
    } else {
      this._sqft = sqft;
    }
  }
  //getter
  get sqft() {
    return this.sqft;
  }
  // abstract method
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
