import { describe, it, expect } from "vitest";
// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function (arr: number[]): number[] {
  return [];
};

describe("sortedSquares", function () {
  it(`should return [0, 1, 9, 16, 100] when given [-4,-1,0,3,10]`, function () {
    var arr = [-4, -1, 0, 3, 10];

    var result = sortedSquares(arr);

    expect(result).to.eql([0, 1, 9, 16, 100]);
  });

  it(`should return [] when given []`, function () {
    var arr: number[] = [];

    var result = sortedSquares(arr);

    expect(result).to.eql([]);
  });

  it(`should return [4, 9, 9, 49, 121] when given [-7, -3, 2, 3, 11]`, function () {
    var arr = [-7, -3, 2, 3, 11];

    var result = sortedSquares(arr);

    expect(result).to.eql([4, 9, 9, 49, 121]);
  });
});
