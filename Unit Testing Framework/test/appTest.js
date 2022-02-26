const assert = require("chai").assert;
const Calculator = require("../app");

let add1 = new Calculator(5, 6);
let add2 = new Calculator(25, 44);
let add3 = new Calculator(-10, 21);

let mult1 = new Calculator(2, 3);
let mult2 = new Calculator(10, 6);
let mult3 = new Calculator(35, 0);

describe("Calculation", function () {
  describe("Addition", function () {
    it("5 + 6 should return 11.", function () {
      assert.equal(add1.add(), 11);
    });
    it("25 + 44 should return 69.", function () {
      assert.equal(add2.add(), 69);
    });
    it("-10 + 21 should return 11.", function () {
      assert.equal(add3.add(), 11);
    });
  });

  describe("Multiplication", function () {
    it("2 * 3 should return 6.", function () {
      assert.equal(mult1.multiply(), 6);
    });
    it("10 * 6 should return 60.", function () {
      assert.equal(mult2.multiply(), 60);
    });
    it("35 * 0 should return 0.", function () {
      assert.equal(mult3.multiply(), 0);
    });
  });
});
