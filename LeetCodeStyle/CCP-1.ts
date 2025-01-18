/**
 *
 * @param str
 * @OUTPUT
 */
function problem1(str: string): boolean {
  let temp: string = '';

  if (str.length < 1) {
    console.log('Length is not greater than 1');
    return false;
  }

  // Remove All WhiteSpaces.
  let _str = str.split(' ').join('');

  // iterate from the reverse end.
  for (let i = _str.length - 1; i >= 0; i--) {
    temp += _str[i];
  }
  return _str === temp ? true : false;
}
// console.log(problem1('Togos'));
// console.log(problem1('SOS'));

/**
 *
 *
 */
// If you want to accept an object where the value property specifically contains an
// array of numbers, you can explicity type it like this.
function problem2(obj: { numbers: number[] }) {
  // Make sure that there is a new array with only unique values...
}

problem2({ numbers: [4, 5, 4, 6, 7, 7] });
