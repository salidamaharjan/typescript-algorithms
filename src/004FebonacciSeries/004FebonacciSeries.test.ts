function febonacci(position: number): number {
  var array: number[] = [0, 1];
  // if (position <= 1) {
  //   return array[position];
  // } else {
  //   for (let i = 1; i < array.length; i++) {
  //     var nextNum = array[i] + array[i - 1];
  //     array.push(nextNum);
  //     if (i === position) {
  //       return array[i];
  //     }
  //   }
  // }
  // return -1;

  if (position === 0) return position;
  if (position === 1) return position;
  else {
    for (let i = 1; i < array.length; i++) {
      var nextNum = array[i] + array[i - 1];
      array.push(nextNum);
      if (i === position) {
        return array[i];
      }
    }
  }
  return -1;
}

test("test febonacci", () => {
  // const nums: number [] = [0,1,1,2,3,5,8,13,21,34,55];
  expect(febonacci(7)).toBe(13);
  expect(febonacci(9)).toBe(34);
  expect(febonacci(4)).toBe(3);
  expect(febonacci(1)).toBe(1);
});
