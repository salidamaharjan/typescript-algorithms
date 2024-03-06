import { test , expect } from 'vitest';

// function twoSum(nums: number[], target: number): number[] {
//     let index: number[] = [];
//     for(let i: number = 0; i < nums.length; i++){
//        for (let j: number = i + 1; j < nums.length; j++){
//         if(nums[i] + nums[j] === target){
//             index.push(i, j);
//         }
//        }
//     }
//     return index;
// }

// function twoSum(nums: number[], target: number): number[] {
//         let lookUpMap: {[key: number]: number} = {};
//         for (let i :number = 0; i < nums.length; i++) {
//             const currentNumber: number = nums[i];
//             lookUpMap[currentNumber] = i;
//             const diff: number = target - currentNumber;
//             if(lookUpMap[diff] !== null && lookUpMap[diff] !== undefined){
//                 return [lookUpMap[diff], i];
//             }
//         }
//         return[]
//     }

function twoSum(nums: number[], target: number): number[] {
    let index = new Map<number, number>();
    for (let i: number = 0; i < nums.length; i++){
        index.set(nums[i],i);
        const diff: number = target - nums[i];
        if(index.has(diff)){
            return [index.get(diff)!, i];
        }
    }
    return[]
}

test("test twoSum", () => {
    const nums: number[] = [2,7,11,15];
    expect(twoSum(nums, 9)).toStrictEqual([0,1]);
    expect(twoSum(nums, 17)).toStrictEqual([0,3]);
    expect(twoSum(nums, 18)).toStrictEqual([1,2]);
})