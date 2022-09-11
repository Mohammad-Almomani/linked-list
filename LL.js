"use strict";

const Node = require("./Node");

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning (item) {
    const newNode = new Node(item);
    this.head? (newNode.next=this.head , this.head=newNode): this.head=newNode;
  }
};
