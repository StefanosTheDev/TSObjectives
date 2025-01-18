// Problem 1:
//Write a function that takes an array of numbers and returns a new array with each element squared.
function squareNumbers(nums) {
    return nums.map(function (element) {
        return Math.pow(element, 2);
    });
}
/*
const numbers = [1, 2, 3, 4];
const doubled = squareNumbers(numbers);
console.log(doubled);
*/
// Problem 2:
// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
function filterEven(nums) {
    return nums.filter(function (num) { return num % 2 === 0; });
}
var numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEven(numbers));
// Problem 3: Sum All Numbers in An Array
function sumNum(nums) {
    // how redu
    return nums.reduce(function (total, element) { return total + element; }, 5);
}
console.log(sumNum(numbers));
// Leverage Reduce to find the occurrence of the letter H in the object. provided.
var user1 = { name: 'stefanos', age: 5 };
var user2 = { name: 'George', age: 10 };
var user3 = { name: 'Stefanos', age: 5 };
// STudy this and why it works. 
function countOccurence(user) {
    var counts = {};
    /// Iterate over each charachter in the user name
    for (var _i = 0, _a = user.name; _i < _a.length; _i++) {
        var char = _a[_i];
        // if we have seen this charachter before, increment it
        if (counts[char]) {
            counts[char]++;
        }
        else {
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
//# sourceMappingURL=ArrayManipulation.js.map