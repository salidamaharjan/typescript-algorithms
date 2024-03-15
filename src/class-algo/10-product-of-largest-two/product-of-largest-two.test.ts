import { describe, expect, test } from "vitest";
// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two
function productOfLargestTwo(arr: number[]): number {
  return 0;
}

describe("productOfLargestTwo", () => {
  test("should return the number 966 when given [4, 8, 15, 16, 23, 42]", () => {
    const arr = [4, 8, 15, 16, 23, 42];
    const result = productOfLargestTwo(arr);
    expect(result).toEqual(966);
  });

  test("should return the number 2 when given [-10, -5, -2, -15, -1, -33, -88, -100]", () => {
    const arr = [-10, -5, -2, -15, -1, -33, -88, -100];
    const result = productOfLargestTwo(arr);
    expect(result).toEqual(2);
  });
});
