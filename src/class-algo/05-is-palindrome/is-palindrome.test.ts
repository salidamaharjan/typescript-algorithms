import { expect, describe, test } from "vitest";

// Write a function that takes a string and returns true if the string is a palindrome.
function isPalindrome(str: string): boolean {
  // TODO: Update your code here
  const mid: number = Math.floor(str.length/2);
  let comparing: number= str.length-1;
  let palindrome: boolean = true
  for(let i = 0; i < mid; i++){
      if(str[i] === str[comparing]){
        comparing -= 1;
        palindrome = true;
      } else {
        return palindrome = false;
      }
  }
  return palindrome;
}

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------RUN TEST BELOW TO CHECK YOUR ALGORITHM----------------
// ------------------------------------------------------------
// ------------------------------------------------------------
describe("isPalindrome", () => {
  test("takes a string and returns true if the string is a palindrome", () => {
    var str = "radar";
    var result = isPalindrome(str);
    expect(result).toEqual(true);
  });

  test("takes a string and returns false if the string is not a palindrome", () => {
    var str = "engage";
    var result = isPalindrome(str);
    expect(result).toEqual(false);
  });
});
