/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // getter for size
  get size() {
    return this._size;
  }

  // getter for location
  get location() {
    return this._location;
  }

  // cast to Number
  valueOf() {
    return this._size;
  }

  // cast to String
  toString() {
    return this._location;
  }
}
