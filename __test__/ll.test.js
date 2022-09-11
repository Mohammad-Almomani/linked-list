"use strict";

const LinkedList = require("../LL.js");

describe("Verify creating linked list", () => {
  it("Test creating new linked list", () => {
    const LL = new LinkedList();
    expect(LL).toBeInstanceOf(LinkedList);
    expect(LL).toBeDefined();
    expect(LL.head).toBeNull();
  });
});

describe("Verify insert node at the beginning", () => {
  it("Test inserting node at the beginning", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(1);
    expect(LL.head.value).toBe(1);
    expect(LL.head.next).toBeNull();
    LL.insertAtBeginning(2);
    expect(LL.head.value).toBe(2);
    expect(LL.head.next.value).toBe(1);
    expect(LL.head.next.next).toBeNull();
  });
});

describe("Verify append node at the end", () => {
  it("Test appending node at the end", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(2);
    LL.insertAtBeginning(1);
    LL.appendAtEnd(3);
    expect(LL.head.value).toEqual(1);
    expect(LL.head.next.value).toEqual(2);
    expect(LL.head.next.next.value).toEqual(3);
    expect(LL.head.next.next.next).toBeNull();
    expect(LL.linkedListLength).toEqual(3);
  });
  it("Test appending node to empty linked list", () => {
    const LL = new LinkedList();

    LL.appendAtEnd(3);
    expect(LL.head.value).toEqual(3);
    expect(LL.head.next).toBeNull();
  });
});

describe("Verify delete middle node", () => {
  it("Test deleting middle node", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(1);
    LL.insertAtBeginning(2);
    LL.insertAtBeginning(3);
    LL.deleteMiddle();
    expect(LL.head.value).toEqual(3);
    expect(LL.head.next.value).toEqual(1);
    expect(LL.head.next.next).toBeNull();
  });
  it("Test deleting middle node for one element linked list", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(1);
    LL.deleteMiddle();
    expect(LL.head).toBeNull();
  });
});

describe("Verify delete node by index", () => {
  it("Test deleting node by index in non empty linked list", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(1);
    LL.insertAtBeginning(2);
    LL.insertAtBeginning(3);
    LL.deleteByIndex(1);
    LL.deleteByIndex(0);

    expect(LL.head.value).toEqual(1);
    expect(LL.head.next).toBeNull();
  });

  it("Test deleting middle node for one element linked list", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(1);
    LL.deleteByIndex(5);
    expect(LL.head.value).toEqual(1);
    expect(LL.head.next).toBeNull();
  });
});

describe("Verify insert node by index", () => {
  it("Test inserting node by index in non empty linked list", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(1);
    LL.insertAtBeginning(2);
    LL.insertAtBeginning(3);
    LL.insertAtIdx(1, 4);
    expect(LL.head.value).toEqual(3);
    expect(LL.head.next.value).toEqual(4);
    expect(LL.head.next.next.value).toEqual(2);
    expect(LL.head.next.next.next.value).toEqual(1);
    expect(LL.head.next.next.next.next).toBeNull();
  });
  it("Test inserting node by index in empty linked list", () => {
    const LL = new LinkedList();
    LL.insertAtIdx(1, 1);
    expect(LL.head).toBeNull();
  });

  it("Test inserting node by index in linked list with one element", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(1);
    LL.insertAtIdx(0, 2);
    expect(LL.head.value).toEqual(2);
  });
});
