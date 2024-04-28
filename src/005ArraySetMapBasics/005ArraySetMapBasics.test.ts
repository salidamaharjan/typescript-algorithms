import { expect, test, describe } from "@jest/globals";

describe("TwoSum Set", () => {
  function twoSum(arr: number[], target: number): number[] {
    const arrToSet = new Set();
    for (let i = 0; i < arr.length; i++) {
      arrToSet.add(arr[i]);
      if (arrToSet.has(target - arr[i])) {
        return [target - arr[i], arr[i]];
      }
    }
    return [];
  }
  test("test twoSum", () => {
    const nums: number[] = [2, 7, 11, 15];
    expect(twoSum(nums, 9)).toStrictEqual([2, 7]);
    expect(twoSum(nums, 17)).toStrictEqual([2, 15]);
    expect(twoSum(nums, 18)).toStrictEqual([7, 11]);
  });
});
