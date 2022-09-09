"use strict";

const LinkedList = require("../LL.js");

describe("Verify creating linked list", () => {
  it("Test creating new linked list", () => {
    const LL = new LinkedList();
    expect(LL).toBeInstanceOf(LinkedList);
    expect(LL).toBeDefined();
    expect(LL.head).toBe(null);
  });

  describe("Verify insert node at the beginning", () => {
    it("Test inserting node at the beginning", () => {
      const LL = new LinkedList();
      LL.insertAtBeginning(1);
      expect(LL.head.value).toEqual(1);
      LL.insertAtBeginning(2);
      expect(LL.head.value).toEqual(2);
      expect(LL.head.next.value).toEqual(1);
      expect(LL.head.next.next).toBe(null);
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
      expect(LL.head.next.next.next).toBe(null);
      expect(LL.linkedListLength).toEqual(3);
    });
    it("Test appending node to empty linked list", () => {
        const LL = new LinkedList();
       
        LL.appendAtEnd(3);
        expect(LL.head.value).toEqual(3);
        expect(LL.head.next).toBe(null);
    });
  });
});

