import { expect, describe, test } from "vitest";
// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
function titleCase(str: string): string {
  // TODO: Update your code here
  const strSplit: string[] = str.split(' ');
  let newStr: string[] = [];
  for (let i = 0; i < strSplit.length; i++){
    let word = strSplit[i].split('');
    word[0] = word[0].toUpperCase();
    newStr.push(word.join(''));
  }
  return newStr.join(' ');
}

describe("titleCase", () => {
  test("should return `The Quick Brown Fox Jumped Over The Lazy Dog` when given `the quick brown fox jumped over the lazy dog`", () => {
    const str = "the quick brown fox jumped over the lazy dog";
    const result = titleCase(str);
    expect(result).toEqual("The Quick Brown Fox Jumped Over The Lazy Dog");
  });

  test("should return `A Christmas Carol` when given `a christmas carol`", () => {
    const str = "a christmas carol";

    const result = titleCase(str);

    expect(result).toEqual("A Christmas Carol");
  });
});
