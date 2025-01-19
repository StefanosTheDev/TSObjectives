// All Types // Why is it const declroations may be initialized ?
let _name: string;
let _num: number;

``; // Typescript Arrays
let str_array: string[] = ['Apple', 'Banana'];
// You can also do this with generic Array type
let fruits: Array<string> = ['Apple', 'Orange'];
// Array containing element of different data types using a generic array type syyntax
let values: (string | number)[] = ['Apple', 3, 'Orange', 5];
// Generic Approach Element
let _values2: Array<string | number> = ['Apple', 9, 'Banana', 0];
``;

// We use Interfaces to add a layer of type safety by specifying what properties and types an object must have.
// Do All objects i develop should have the interface type

// ____________ Object Types _________________ //
/*
You can define an object with an interface right
*/
interface Person {
  name: string;
  age: number;
}
function greet(person: Person) {
  return 'Hello' + person.name;
}
// ^^^^^^ This is how you woudl initiate that

// OR You can do a Type Alias
type Person2 = {
  name: string;
};

let stefanos = 'Sam';

console.log(stefanos);
