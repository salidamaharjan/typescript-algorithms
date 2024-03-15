import { describe, expect, test } from "vitest";
// Write a function to find the maximum number in an array
function maxNum(arr: number[]): number {
  // TODO: Update your code here
  return 0;
}

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------RUN TEST BELOW TO CHECK YOUR ALGORITHM----------------
// ------------------------------------------------------------
// ------------------------------------------------------------
describe("maxNum", () => {
  test("returns the largest number in a given array", () => {
    const arr = [2, 3, -2, 99, 100, 5000, 321];
    const result = maxNum(arr);
    expect(result).toEqual(5000);
  });
});
