"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.linkedListLength = 0;
  }

  insertAtBeginning(item) {
    const newNode = new Node(item);
    this.head
      ? ((newNode.next = this.head), (this.head = newNode))
      : (this.head = newNode);
    this.linkedListLength += 1;
  }

  appendAtEnd(item) {
    const newNode = new Node(item);
    if (this.head) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    } else {
      this.head = newNode;
    }
    this.linkedListLength += 1;
  }

  deleteMiddle() {
    let middleNode = Math.floor((this.linkedListLength - 1) / 2);
    let node = this.head;
    let prevNode;

    if (middleNode === 0) {
      // delete the first node
      this.head = node.next;
    } else {
      for (let i = 0; i < middleNode; i++) {
        prevNode = node;
        node = node.next;
      }
      prevNode.next = node.next;
    }
    this.linkedListLength--;
  }

  deleteByIndex(idx) {
    if (idx > this.linkedListLength) return "item dose not exist";

    let node = this.head;
    let prevNode;

    if (idx === 0) {
      // delete the first node
      this.head = node.next;
    } else {
      for (let i = 0; i < idx; i++) {
        prevNode = node;
        node = node.next;
      }
      prevNode.next = node.next;
    }
    this.linkedListLength--;
  }

  insertAtIdx(idx, item) {
    if (idx > this.linkedListLength) return "index out of range";
    const newNode = new Node(item);
    let node = this.head;
    let prevNode;

    if (idx === 0) {
      // insert at the first node
      newNode.next = this.head;
      this.head = newNode;
    } else {
      for (let i = 0; i < idx; i++) {
        prevNode = node;
        node = node.next;
      }
      newNode.next = node;
      prevNode.next = newNode;
    }
    this.linkedListLength++;
  }
}

// const LL = new LinkedList();
// LL.insertAtBeginning(1);
// LL.appendAtEnd(2);
// // LL.insertAtBeginning(11);
// // LL.appendAtEnd(22);
// // LL.deleteByIndex(50);
// // // LL.deleteMiddle();
// // // LL.insertAtIdx(150, 100);
// // // LL.insertAtBeginning(3);
// // // LL.insertAtBeginning(4);
// // // LL.insertAtBeginning(5);
// // // LL.insertAtBeginning(6);

// console.log(LL);

module.exports = LinkedList;
