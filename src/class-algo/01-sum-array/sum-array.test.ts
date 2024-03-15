import { expect, test, describe } from "vitest";

// Write code to add all the numbers in `arr` and return the total
function sumArray(arr: number[]) {}

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------RUN TEST BELOW TO CHECK YOUR ALGORITHM----------------
// ------------------------------------------------------------
// ------------------------------------------------------------
describe("sumArray", () => {
  test("returns the total of all the numbers in `arr`", () => {
    const arr = [4, 8, 15, 16, 23, 42];
    const result = sumArray(arr);
    expect(result).toEqual(108);
  });
});
