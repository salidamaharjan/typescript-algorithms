// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

function reverse(str: string): string {
  return "";
}

describe("reverse", () => {
  it("should return '!dlroW olleH' when given 'Hello World!'", () => {
    const str = "Hello World!";

    const result = reverse(str);

    expect(result).to.eql("!dlroW olleH");
  });

  it("should return '!dlroW eybooG' when given 'Goodbye World!'", () => {
    const str = "Goodbye World!";

    const result = reverse(str);

    expect(result).to.eql("!dlroW eybdooG");
  });
});
