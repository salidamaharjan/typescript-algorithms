// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false
const validBrackets = function (str: string): boolean {
  return true;
};

describe("validBrackets", function () {
  it(`should return true if given the string "( )"`, function () {
    var str = "( )";

    var result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return true if given the string "[ ( ) ]"`, function () {
    var str = "[ ( ) ]";

    var result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return true if given the string "{ } [ ( [] ) ]"`, function () {
    var str = "{ } [ ( ) ]";

    var result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return true if given the string "( )[ ]{ }"`, function () {
    var str = "( )[ ]{ }";

    var result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return false if given the string "( ]"`, function () {
    var str = "( ]";

    var result = validBrackets(str);

    expect(result).to.eql(false);
  });

  it(`should return false if given the string "( [ ) ]"`, function () {
    var str = "( [ ) ]";

    var result = validBrackets(str);

    expect(result).to.eql(false);
  });
});
