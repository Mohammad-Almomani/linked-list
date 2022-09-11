"use strict";

const Node = require("../Node.js");

describe("Verify node", () => {
  test("Create a new node", () => {
    const node = new Node("data");
    expect(node.value).toBe("data");
    expect(node.next).toBeNull();
  });
});
