function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet('World'));

let username: string = 'Stefanos';
let age: number = 25;
let isStudent: boolean = true;
let hobbies: string[] = ['reading', 'sports'];
let tupleExample: [number, string] = [1, 'admin'];
let mixed: (number | string)[] = ['Stefanos', 1, 5, 'four'];
console.log(mixed);

// A bit confused on this
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);

// Union Types: Union types allow a variable to be one of several types

let userId: string | number;
userId = 'abc123';
userId = 42;

console.log(userId);

// Type Alias
type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId('abc123');
console.log(42);

// Interfaces & Objects

interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // Question mark means its optional
}

function printUser(user: User) {
  console.log(`User ID: ${user.id}`);

  if (user.isAdmin) {
    console.log('User is an admin');
  }
}
const user1: User = { id: 1, name: 'Alice' };
printUser(user1);

/// Functions
// When defining functions, you can specify parameter types and the return type
function add(a: number, b: number): number {
  return a + b;
}

const result = add(2, 3);

// You can also have optional parameters and default values:

function multiply(a: number, b: number = 1): number {
  return a * b;
}

console.log(multiply(5)); // uses default value b = 1
console.log(multiply(5, 2)); // 10

// Classes:
//TypeScript extends JavaScript classes with type
// annotations and additional features like public,
// private, and protected modifiers.

class Person {
  private age: number;
  public name: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 30);
person1.greet();

/*
private: accessible only within the class.
public: accessible from anywhere (default if not specified).
protected: accessible within the class and its subclasses.
*/

/*
Generics Generics let you write reusable, type-safe code. They act like placeholders for types. */
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>('Hello')); // string
console.log(identity<number>(123)); // number

// Generic interfaces or classes
interface Box<T> {
  item: T;
}

const box: Box<string> = { item: 'Hello World' };
