// Problem 1:
//Write a function that takes an array of numbers and returns a new array with each element squared.
function squareNumbers(nums: number[]): number[] {
  return nums.map((element) => {
    return element ** 2;
  });
}
/*
const numbers = [1, 2, 3, 4];
const doubled = squareNumbers(numbers);
console.log(doubled);
*/

// Problem 2:
// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
function filterEven(nums: number[]) {
  return nums.filter((num) => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEven(numbers));

// Problem 3: Sum All Numbers in An Array

function sumNum(nums: number[]) {
  // how redu
  return nums.reduce((total, element) => total + element, 5);
}

console.log(sumNum(numbers));

interface testUser {
  name: string;
  age: number;
}

// Leverage Reduce to find the occurrence of the letter H in the object. provided.

const user1: testUser = { name: 'stefanos', age: 5 };
const user2: testUser = { name: 'George', age: 10 };
const user3: testUser = { name: 'Stefanos', age: 5 };

// STudy this and why it works.
function countOccurence(user: testUser): Record<string, number> {
  const counts: Record<string, number> = {};

  /// Iterate over each charachter in the user name
  for (const char of user.name) {
    // if we have seen this charachter before, increment it
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}
console.log(countOccurence(user1));

// MEDIUM LEVEL PROBLEMS
// Problem 4: Merge and Sort Two Arrays
// Problem 5: Safe Parsing Of String  Numbers
// Problem 6: Find Method ()

// Then Make a hardneing version of this .

// Problem 6:
// Tommorrow in the AM Focus On This. (Build Out Different Solutions)
// https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Filter:
// https://www.freecodecamp.org/news/javascript-filter-method/
