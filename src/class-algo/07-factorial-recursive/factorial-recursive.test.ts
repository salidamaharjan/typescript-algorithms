// Write a function that takes a number and returns the factorial of that number.
// Solve using recursion
import { expect, test } from "@jest/globals";

function factorial(num: number): number {
  // TODO: Update your code here
    let factor = 1;
    let factor2 = factor+1;
    let factorial = factor * (factor2);
    if(factor2 === num){
      return factorial;
    }
  return factorial;
}

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------RUN TEST BELOW TO CHECK YOUR ALGORITHM----------------
// ------------------------------------------------------------
// ------------------------------------------------------------

describe("factorial", () => {
  test("should return 24 when given 4", () => {
    var num = 4;

    var result = factorial(num);

    expect(result).toEqual(24);
  });

  test("should return 6 when given 3", () => {
    var num = 3;

    var result = factorial(num);

    expect(result).toEqual(6);
  });

  test("should return 1 when given 0", () => {
    var num = 0;

    var result = factorial(num);

    expect(result).toEqual(1);
  });

  test("should return 1 when given 1", () => {
    var num = 1;

    var result = factorial(num);

    expect(result).toEqual(1);
  });
});
