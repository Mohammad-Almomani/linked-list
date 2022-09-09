"use strict";

const LinkedList = require("../LL.js");

describe("Verify creating linked list", () => {
  it("Testing create new linked list", () => {
    const LL = new LinkedList();
    expect(LL).toBeInstanceOf(LinkedList);
    expect(LL).toBeDefined();
    expect(LL.head).toBe(null);
  });

  describe("Verify insert node at beginning", () => {
    it("Test inserting node at the beginning", () => {
      const LL = new LinkedList();
      LL.insertAtBeginning(1);
      LL.insertAtBeginning(2);
      expect(LL.head.value).toEqual(2);
      expect(LL.head.next.value).toEqual(1);
      expect(LL.head.next.next).toBe(null);
    });
  });
});
