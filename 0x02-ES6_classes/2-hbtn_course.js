export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = newLength;
    }
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw TypeError('Students must be an array');
    } else {
      this._students = newStudents;
    }
  }
}
