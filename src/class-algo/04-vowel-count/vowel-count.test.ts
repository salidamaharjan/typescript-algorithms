import { expect, test, describe } from "vitest";

// Write a function that takes a string and returns
// the number of vowels in the string.
function vowelCount(str: string): number {
  // TODO: Update your code here
  return 0;
}

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------RUN TEST BELOW TO CHECK YOUR ALGORITHM----------------
// ------------------------------------------------------------
// ------------------------------------------------------------
describe("vowelCount", function () {
  test('should return the number 3 when given the string "programmer"', function () {
    const str = "programmer";
    const result = vowelCount(str);
    expect(result).toEqual(3);
  });

  test('should return the number 8 when given the string "I think, therefore I am."', function () {
    const str = "I think, therefore I am.";

    const result = vowelCount(str);

    expect(result).toEqual(8);
  });

  test("should return the number 0 when given an empty string.", function () {
    const str = "";
    const result = vowelCount(str);
    expect(result).toEqual(0);
  });
});
