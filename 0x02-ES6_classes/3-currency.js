export default class Currency {
  constructor(code, name) {
    /// test for string for code and name
    if (typeof code !== 'string' || typeof name !== 'string') {
      throw new Error('code and name must be string');
    } else {
      this._code = code;
      this._name = name;
    }
  }

  // setters
  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  // getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
