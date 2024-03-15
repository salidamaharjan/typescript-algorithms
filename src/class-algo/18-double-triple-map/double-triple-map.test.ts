import { expect, describe, it } from "vitest";

// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element
function doubleTripleMap(arr: number[]): number[] {
  return [];
}

describe("doubleTripleMap", function () {
  it(`should return [3, 4, 9, 8] when given [1, 2, 3, 4]`, function () {
    var arr = [1, 2, 3, 4];
    var result = doubleTripleMap(arr);
    expect(result).to.eql([3, 4, 9, 8]);
  });

  it(`should return [8, 16, 45, 32, 69, 84] when given [4, 8, 15, 16, 23, 42]`, function () {
    var arr = [4, 8, 15, 16, 23, 42];

    var result = doubleTripleMap(arr);

    expect(result).to.eql([8, 16, 45, 32, 69, 84]);
  });

  it(`should return [-9, 9, -8, 0, -21, 27] when given the number
  [-3, 3, -4, 0, -7, 9]`, function () {
    var arr = [-3, 3, -4, 0, -7, 9];

    var result = doubleTripleMap(arr);

    expect(result).to.eql([-9, 9, -8, 0, -21, 27]);
  });

  it(`should return [] when given []`, function () {
    var arr: number[] = [];

    var result = doubleTripleMap(arr);

    expect(result).to.eql([]);
  });
});
