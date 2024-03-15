import { expect, describe, it, beforeEach, vi } from "vitest";
// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

function linearSearch(arr: number[], target: number): number {
  return -2;
}

describe("linearSearch", () => {
  beforeEach(() => {
    vi.spyOn(Array.prototype, "indexOf");
  });

  it("should not call the 'indexOf' method", () => {
    const arr = [8, 22, 3, 0, -2];
    const target = 3;
    const result = linearSearch(arr, target);
    expect(Array.prototype.indexOf).not.toHaveBeenCalled();
  });

  it("should return 2 when given the array [8, 22, 3, 0, -2] and a target of 3", () => {
    const arr = [8, 22, 3, 0, -2];
    const target = 3;
    const result = linearSearch(arr, target);
    expect(result).toEqual(2);
  });

  it("should return -1 when given the array [13, 5, 6] and a target of 11", () => {
    const arr = [13, 5, 6];
    const target = 11;
    const result = linearSearch(arr, target);
    expect(result).toEqual(-1);
  });

  it("should return -1 when given the array [] and a target of 0", () => {
    const arr: number[] = [];
    const target = 0;
    const result = linearSearch(arr, target);
    expect(result).toEqual(-1);
  });
});
