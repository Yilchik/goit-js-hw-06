class StringBuilder {
  #value;
  constructor({ value }) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value.push(str);
  }

  padStart(str) {
    this.#value.unshift(str);
  }

  padBoth(str) {
    this.#value.push(str) && this.#value.unshift(str);
  }
}
