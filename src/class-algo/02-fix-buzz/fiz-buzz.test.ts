// Write a function such that for each element in the array,
// it prints "Fizz" for numbers evenly divisible by 3,
// "Buzz" for numbers evenly divisible by 5,
// "Fizz Buzz" for numbers evenly divisible by 3 AND 5.
// Otherwise it prints the number if not evenly divisible by 3 or 5.
import { expect, test, jest } from "@jest/globals";

function fizzBuzz(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (arr[i] % 3 === 0) {
      console.log("Fizz");
    } else if (arr[i] % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(arr[i]);
    }
  }
}

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------RUN TEST BELOW TO CHECK YOUR ALGORITHM----------------
// ------------------------------------------------------------
// ------------------------------------------------------------
describe("fizzBuzz", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });
  test('takes an array and for each element prints "Fizz" for numbers evenly divisible by 3, "Buzz" for numbers evenly divisible by 5, "Fizz Buzz" for numbers evenly divisible by 3 AND 5. Otherwise it prints the number if not evenly divisible by 3 or 5.', () => {
    var arr = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    fizzBuzz(arr);
    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenNthCalledWith(1, "Fizz");
    expect(console.log).toHaveBeenNthCalledWith(2, 7);
    expect(console.log).toHaveBeenNthCalledWith(3, 8);
    expect(console.log).toHaveBeenNthCalledWith(4, "Fizz");
    expect(console.log).toHaveBeenNthCalledWith(5, "Buzz");
    expect(console.log).toHaveBeenNthCalledWith(6, 11);
    expect(console.log).toHaveBeenNthCalledWith(7, "Fizz");
    expect(console.log).toHaveBeenNthCalledWith(8, 13);
    expect(console.log).toHaveBeenNthCalledWith(9, 14);
    expect(console.log).toHaveBeenNthCalledWith(10, "Fizz Buzz");
  });
});
