// Write a function to find the maximum number in an array
function maxNum(arr: number[]): number {
  // TODO: Update your code here
  let maxNum: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > maxNum){
      maxNum = arr[i];
    }
  }
  return maxNum;
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
