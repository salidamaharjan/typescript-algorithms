// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr: number[]): number[] => {
    return []
};

describe("reverseInPlace", () => {
  beforeEach(() => {
    vi.spyOn(Array.prototype, "reverse");
  });
  it("should reverse an array in place without using the built-in 'reverse' method", () => {
    const arr = [1, 2, 3, 4, 5];
    const reversed = JSON.parse(JSON.stringify(arr)).reverse();
    const result = reverseInPlace(arr);
    expect(result).to.equal(arr);
    expect(result).to.eql(reversed);
    // 1 here because test itself is calling the reversed to assert the result
    expect(Array.prototype.reverse).toBeCalledTimes(1);
  });
});
