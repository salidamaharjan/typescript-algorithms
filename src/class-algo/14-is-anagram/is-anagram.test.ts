import { expect, describe, it } from "vitest";
// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false
function isAnagram(strA: string, strB: string): boolean {
  return false;
}

describe("isAnagram", () => {
  it("should return true when given the strings 'abc` and `cba`", () => {
    const strA = "abc";
    const strB = "cba";
    const result = isAnagram(strA, strB);
    expect(result).toEqual(true);
  });

  it("should return true when given the strings 'octagonal` and `tganoalc`", () => {
    const strA = "octagonal";
    const strB = "tganoalco";
    const result = isAnagram(strA, strB);
    expect(result).toEqual(true);
  });

  it("should return false when false the strings 'obsidian` and `danisboba`", () => {
    const strA = "obsidian";
    const strB = "danisboba";

    const result = isAnagram(strA, strB);

    expect(result).toEqual(false);
  });

  it("should return false when false the strings 'targaryen` and `gratawyen`", () => {
    const strA = "targaryen";
    const strB = "gratawyen";
    const result = isAnagram(strA, strB);
    expect(result).toEqual(false);
  });
});
