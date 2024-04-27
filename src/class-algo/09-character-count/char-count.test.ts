// Write code to create a  th =>at accepts a string and returns an object containing the number of times each character appears in the string
var characterCount = function characterCount(str: string): {
  [key: string]: number;
} {
  //TODO: Update your code here
  let obj: {} = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char in obj) {
      obj[char]++;
    }
  }
  return {};
};

// NOTE: { [key: string]: number; }
// This is a TypeScript feature. It means that the object will have keys of type string and values of type number

describe("characterCount", () => {
  test("should return an object containing the counts for each letter in a given string", () => {
    var str = "she sells sea shells by the sea shore";

    var result = characterCount(str);

    expect(result).toEqual({
      s: 8,
      h: 4,
      e: 7,
      " ": 7,
      l: 4,
      a: 2,
      b: 1,
      y: 1,
      t: 1,
      o: 1,
      r: 1,
    });

    str = "peter piper picked a pack of pickled peppers";

    result = characterCount(str);

    expect(result).toEqual({
      p: 9,
      e: 7,
      t: 1,
      r: 3,
      " ": 7,
      i: 3,
      c: 3,
      k: 3,
      d: 2,
      a: 2,
      o: 1,
      f: 1,
      l: 1,
      s: 1,
    });
  });
});
