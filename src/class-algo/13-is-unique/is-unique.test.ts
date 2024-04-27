// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

function isUnique(arr: number[]): boolean {
  return false;
}

describe("isUnique", () => {
  it("should return true when given the array [2, 8, 7, 5, 4, 3]", () => {
    const arr = [2, 8, 7, 5, 4, 3];
    const result = isUnique(arr);
    expect(result).toEqual(true);
  });

  it("should return true when given the array []", () => {
    const arr: number[] = [];
    const result = isUnique(arr);
    expect(result).toEqual(true);
  });

  it("should return false when given the array [-2, 5, -2, 53, 22, 1]", () => {
    const arr = [-2, 5, -2, 53, 22, 1];
    const result = isUnique(arr);
    expect(result).toEqual(false);
  });

  it("should return false when given the array [4, 4, 2, 9, 2, 9, 3, 3, 7, 3]", () => {
    const arr = [4, 4, 2, 9, 2, 9, 3, 3, 7, 3];
    const result = isUnique(arr);
    expect(result).toEqual(false);
  });
});
