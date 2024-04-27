import { expect, test } from "@jest/globals";

function twoSum(arr: number[], num: number) {
  let newArr: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        newArr.push(arr[i], arr[j]);
        return newArr;
      }
    }
  }
}

test("returns the array two number which sum to equal given number", () => {
  const arr = [1, 2, 3, 5, 7];
  const num: number = 9;
  expect(twoSum(arr, num)).toEqual(num);
});
