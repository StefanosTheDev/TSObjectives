// what are generics
/*
Generics are a TypeScript feature that allows us to pass in various types of data and create reusable code to handle different inputs. 
They allow us to define placeholder types which are then replaced when the code is executed with the actual types passed in.
Generics are like a template that can be reused across the same piece of code multiple times but with the value being independent of each invocation of the function. 
Let’s look at an example to get a better understanding of this
*/
// 👇 We define a generic value called T with <T>
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['apple', 'banana', 'orange'];

// 👇 Note the generic values being passed in <number> & <string>
const firstNumber = getFirstElement<number>(numberArray);
const firstString = getFirstElement<string>(stringArray);

// Using Gneerics with interfaces
// we use generics with interfaces to define custom types for the properties of the object the interface describes. Basic example of using generics with interfaces below:
interface MetaData {
  sex: string;
  height: 'tall' | 'short';
  favouriteNumber: number;
}

// 👇 Defining our generic
interface Person5<T> {
  id: number;
  name: string;
  age: number;
  metadata: T;
}

// 👇 Using our generic
const personOne6: Person5<(number | string)[]> = {
  id: 1,
  name: 'Jeff',
  age: 31,
  metadata: ['male', 'tall', 22],
};

// 👇 Using our generic
const personTwo: Person5<MetaData> = {
  id: 1,
  name: 'Jeff',
  age: 31,
  metadata: {
    sex: 'female',
    height: 'tall',
    favouriteNumber: 45,
  },
};
