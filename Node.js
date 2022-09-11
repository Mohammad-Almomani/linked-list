'use strict';

module.exports = class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}
