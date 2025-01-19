/**
 * Section 1
 */

function iterateNumbers(numbers: number[]): void {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

/**
 *
 * The for...in statement iterates over all enumerable string properties of an object
 *  (ignoring properties keyed by symbols),including inherited enumerable properties.
 */
function iterateStrings(strings: string[]): void {
  for (const x of strings) {
    console.log(x);
  }
}

function logBooleans(value: boolean[]): void {
  value.forEach((element, index) => {
    console.log(element, index);
  });
}
// iterateNumbers([10, 20, 30]);
// iterateStrings(['apple', 'banana', 'cherry']); // Output: apple, banana, cherry
// logBooleans([true, false, true]); // Output: true, false, true

//Write a function that takes an array of numbers, doubles each number using .map(), and
//returns the new array.
function doubleNumbers(numbers: number[]): number[] {
  return numbers.map((x) => x * 2);
}

console.log(doubleNumbers([4, 3, 3, 3]));

// Write a function that filters an array of strings to only include strings with a length greater than 3.
//The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function.

function filterStrings(strings: string[]): string[] {
  // Your code here
  return strings.filter((el) => el.length > 3);
}

console.log(filterStrings(['cat', 'tiger', 'lion'])); // Output: ["tiger", "lion"]

// function sumArray(numbers: number[]): number {
//     numbers.reduce(el => )
//   return numbers;
// }

// console.log(sumArray([10, 20, 30])); // Output: 60

function findStringStartingWithB(strings: string[]): string | undefined {
  return strings.find((el) => el.startsWith('b')); // Starts with B.
}

console.log(findStringStartingWithB(['apple', 'banana', 'cherry'])); // Output: "banana"

function hasNegative(numbers: number[]): boolean {
  return numbers.some((el) => el < -1);
}

function sortNumbers(numbers: number[]): number[] {
  return numbers.sort();
}

console.log(sortNumbers([5, 2, 8, 1])); // Output: [1, 2, 5, 8]
console.log(hasNegative([1, 2, -3])); // Output: true
console.log(hasNegative([1, 2, 3])); // Output: false

/**
 * Section 2: Objects
 */

//Write a function that logs each key-value pair in an object.
function logObject(obj: { [key: string]: number }): void {
  for (const x in obj) {
    console.log(`${x}: ${obj[x]}`);
  }
}

logObject({ a: 1, b: 2, c: 3 }); // Output: a: 1, b: 2, c: 3

//Write a function that logs all the keys of an object.
function logKeys(obj: { [key: string]: number }): void {
  console.log(Object.keys(obj));
}

logKeys({ d: 1, e: 2, f: 3 }); // Output: a, b, c

function getValues(obj: { [key: string]: number }): number[] {
  return Object.values(obj);
}

console.log(getValues({ a: 1, b: 2, c: 3 })); // Output: [1, 2, 3]

//Write a function that returns an array of key-value pairs from an object.
function getEntries(obj: { [key: string]: number }): [string, number][] {
  return Object.entries(obj);
}

console.log(getEntries({ ag: 1, v: 2, l: 3 })); // Output: [["a", 1], ["b", 2], ["c", 3]]

//Write a function that inverts the keys and values of an object.
function invertObject(obj: { [key: string]: number }): {
  [key: number]: string;
} {
  // Okay so to invert the obj. We need it iterate through this
  let obj1: { [key: number]: string } = {};
  for (const val in obj) {
    obj1[obj[val]] = val;
  }

  return obj1;
}

console.log(console.log('Inverted Object', invertObject({ x: 1, y: 2, z: 3 }))); // Output: { 1: "a", 2: "b", 3: "c" }
