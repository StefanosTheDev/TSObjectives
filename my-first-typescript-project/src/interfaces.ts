interface Student {
  name: string;
  age: number;
  sex: 'male' | 'female';
}

const personOne: Student = {
  name: 'Coner',
  age: 24,
  sex: 'male',
};

console.log(personOne.name); // Coner
// 👇 Property 'hobbies' does not exist on type 'Person'
// console.log(personOne.hobbies); // undefined

/*
In addition to defining the types of objects, we can also use interfaces to type functions, 
their return values, and their arguments. For example, we can do something like this.

*/
interface Args {
  name: string;
  age: number;
}

interface Return {
  name: string;
  age: number;
  doubledAge: number;
}

function ageDoubler({ name, age }: Args): Return {
  return {
    name,
    age,
    doubledAge: age * 2,
  };
}

/*
TypeScript has native support for the class keyword that was implemented in ES2015.
 You can define a class as well as its fields and methods like this.

*/
class Person3 {
  name: string = '';
  age: number = 0;
}

const me = new Person3();

// Optional Properties
// color?: string

// Read Only Properties
//In TypeScript, we can use the readonly keyword with interfaces to mark a property as readonly.
//This means that the target property can’t be written to during type-checking although its behavior doesn’t change during runtime.

// Example: readonly name: string;

// discriminating unions
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === 'circle') {
    // We know it's a Circle interface here
    return Math.PI * shape.radius ** 2;
  }

  // We know it's a Square interface here
  return shape.sideLength ** 2;
}

const circle: Shape = { kind: 'circle', radius: 5 };
const square: Shape = { kind: 'square', sideLength: 4 };

console.log(getArea(circle)); // Output: 78.53981633974483
console.log(getArea(square)); // Output: 16
