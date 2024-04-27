// Write a function that takes a positive integer and returns true if the integer is an armstrong number,
// else return false. To find out if a number is an armstrong number,
// take each individual digit and raise it to the power of the length of the entire number and add the digits.
// If the sum equals the original number, the number is an armstrong number"

// TODO: Complete the function below:

var isArmstrong = function (num: number): boolean {
  return true;
};

describe("isArmstrong", function () {
  it(`should return true if given the number 153`, function () {
    var num = 153;

    var result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 371`, function () {
    var num = 371;

    var result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 1634`, function () {
    var num = 1634;

    var result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 0`, function () {
    var num = 0;

    var result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return true if given the number 1`, function () {
    var num = 1;

    var result = isArmstrong(num);

    expect(result).to.eql(true);
  });

  it(`should return false if given the number 11`, function () {
    var num = 11;

    var result = isArmstrong(num);

    expect(result).to.eql(false);
  });

  it(`should return false if given the number 1883`, function () {
    var num = 1883;

    var result = isArmstrong(num);

    expect(result).to.eql(false);
  });

  it(`should return false if given the number 443`, function () {
    var num = 443;

    var result = isArmstrong(num);

    expect(result).to.eql(false);
  });
});
