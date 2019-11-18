const { sum, subtract } = require("./math");

let result, expected;

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} in not equal to ${expected}`);
      }
    },
    toEqual(expected) {
      //
    },
    toBeGreatherThan(expected) {
      //
    },
  };
}
