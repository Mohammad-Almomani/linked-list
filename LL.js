"use strict";

const Node = require("./Node");


class LinkedList {
  constructor() {
    this.head = null;
    this.linkedListLength=0
  }

  insertAtBeginning (item) {
    const newNode = new Node(item);
    this.head? (newNode.next=this.head , this.head=newNode): this.head=newNode;
    this.linkedListLength +=1;
  }

  
  appendAtEnd(item) {

    const newNode = new Node(item);
    if(!this.head) {
        this.head = newNode;
      } else {
      let node = this.head;
      while(node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
    this.linkedListLength +=1;
  }
};

// const LL = new LinkedList()
// // LL.insertAtBeginning(1)
// LL.appendAtEnd(2)
// // LL.insertAtBeginning(11)
// LL.appendAtEnd(22)

// // LL.insertAtBeginning(3)
// // LL.insertAtBeginning(4)
// // LL.insertAtBeginning(5)
// // LL.insertAtBeginning(6)


// console.log(LL.head)


module.exports = LinkedList