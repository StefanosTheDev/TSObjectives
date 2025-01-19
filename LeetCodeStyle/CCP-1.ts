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
// If you want to accexwpt an object where the value property specifically contains an
// array of numbers, you can explicity type it like this.
function problem2(obj: { numbers: number[] }) {
  // Make sure that there is a new array with only unique values...
  let _newArr: number[] = []; // temp array
  for (let i = 0; i < obj.numbers.length; i++) {
    // Check to see if _newArr is in there
    for (let i = 0; i < obj.numbers.length; i++) {
      // if it is not in the array. (Reference Confluence If needed)
      if (!_newArr.includes(obj.numbers[i])) {
        _newArr.push(obj.numbers[i]); // Add unique numbers
      }
    }
    return _newArr;
  }
}
//console.log(problem2({ numbers: [4, 5, 4, 6, 7, 7] }));

// Why is this:

// Okay So i need to access the value and reverse the key value pair.

// Step 1) Loop through the object to access the values
// Step 2) I need to now decide what the best way t
function problem3(obj: { input: { [key: string]: number } }) {
  let _output: { output: { [key: number]: string } } = { output: {} }; // Initialize with proper typing

  for (const [key, value] of Object.entries(obj.input)) {
    // Swap key and value
    _output.output[value] = key;
  }
  console.log(_output);
  return _output;
}

function problem4() {}
// Review how to explain a constructor to someone.
class CRUD {
  name: string;
  age: number;
  _created: Date;
  // Develop an OOP Situation
  constructor(name: string, age: number, _created: Date) {
    this.name = name;
    this.age = age;
    this._created = _created;
  }

  LoadDB() {} // Load up a set of credentials. Everything is going to need to be objects.
  Create() {}
  Delete() {}
  Update() {}
  Read() {}
}

function problem7(str: string) {
  // Find Longest Charachter In The String.
  // Okay So I Am going to break this string down into charachters into an array.
  // Then I need to get thelenghts of each position and there index. make sense.
  const longest_word = str.split(' ').sort((a, b) => b.length - a.length)[0];
  return longest_word;
}
console.log(problem7('asd Is the greatessadasdadsdt person in the world, c'));

//10. Word Frequency Counter
function problem10(obj: { [key: string]: string }) {
  let _word_freq_counter: { [key: string]: number } = {};

  // Loop through the object's keys to count frequencies
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const words = obj[key].split(/\s+/); // Split the string into words
      for (const word of words) {
        if (_word_freq_counter.hasOwnProperty(word)) {
          _word_freq_counter[word] += 1; // Increment count if word exists
        } else {
          _word_freq_counter[word] = 1; // Initialize count if word doesn't exist
        }
      }
    }
  }

  return _word_freq_counter;
}
console.log(problem10({ text: 'Hello World Stefanos 10 10 ' }));
