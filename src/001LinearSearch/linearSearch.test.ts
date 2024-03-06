import { expect, test } from "vitest";

function findIndex(arr: number[], target: number): number {
    for(let i: number = 0; i < arr.length; i++){
        if(arr[i] === target) {
            return i;
        }
    };
    return -1;
}
test("test linear search", () => {
    const nums = [1,2,3,4,5];
    expect(findIndex(nums, 5)).toBe(4);
    expect(findIndex(nums, 1)).toBe(0);
    expect(findIndex(nums, 10)).toBe(-1);
});

function includes(arr: number[], target: number): boolean {
    for(let i: number = 0 ; i < arr.length; i++){
        if(arr[i] === target) {
            return true;
        }
    }
    return false;
}

test("test includes number", () => {
    const arr = [1,2,3,4,5];
    expect(includes(arr, 5)).toBe(true);
    expect(includes(arr, 6)).toBe(false);
    expect(includes(arr, 1)).toBe(true);
})