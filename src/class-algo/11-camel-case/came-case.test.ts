// Write code to create a function that accepts a string and returns the string in camelCase
function camelCase(str: string): string {
  return "";
}

describe("camelCase", () => {
  it("should return 'helloWorld' when given 'Hello World'", () => {
    const str = "Hello World";
    const result = camelCase(str);
    expect(result).toEqual("helloWorld");
  });

  it("should return 'theRainInSpainFallsMainlyOnThePlain' when given 'The rain in spain falls mainly on the plain'", () => {
    const str = "The rain in spain falls mainly on the plain";
    const result = camelCase(str);
    expect(result).toEqual("theRainInSpainFallsMainlyOnThePlain");
  });
});
