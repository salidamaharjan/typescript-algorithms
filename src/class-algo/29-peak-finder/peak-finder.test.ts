const peakFinder = function (nums: number[]): number {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
  return -10000;
};

describe("peakFinder", function () {
  it(`should return 3 if given the array [3, 2, 1]`, function () {
    let arr = [3, 2, 1];

    let result = peakFinder(arr);

    expect(result).to.eql(3);
  });

  it(`should return 10 if given the array [2, 4, 6, 8, 10]`, function () {
    let arr = [2, 4, 6, 8, 10];

    let result = peakFinder(arr);

    expect(result).to.eql(10);
  });

  it(`should return 4 if given the array [4]`, function () {
    let arr = [4];

    let result = peakFinder(arr);

    expect(result).to.eql(4);
  });

  it(`should return 13 if given the array [-3, 2, 4, 7, 9, 13, 11, 8, 7, 3, 1]`, function () {
    let arr = [-3, 2, 4, 7, 9, 13, 11, 8, 7, 3, 1];

    let result = peakFinder(arr);

    expect(result).to.eql(13);
  });

  it(`should return -2 if given the array [-3, -2, -4, -7]`, function () {
    let arr = [-3, -2, -4, -7];

    let result = peakFinder(arr);

    expect(result).to.eql(-2);
  });

  it(`should return 1 if given the array [-3, -2, -1, 0, 1, -9, -11, -18, -70]`, function () {
    let arr = [-3, -2, -1, 0, 1, -9, -11, -18, -70];

    let result = peakFinder(arr);

    expect(result).to.eql(1);
  });
});
