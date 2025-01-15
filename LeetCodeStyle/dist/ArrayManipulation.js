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
    var total = 0;
    nums.forEach(function (element) {
        total += element;
    });
    return total;
}
console.log(sumNum(numbers));
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