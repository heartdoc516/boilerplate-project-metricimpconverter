const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("convertHandler should correctly read a whole number input.", () => {
    assert.strictEqual(
      convertHandler.getNum("34mi"),
      34,
      "correctly read whole numbe from input"
    );
  });
});
