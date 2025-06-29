# 🌟 TypeScript Class Repository 🚀

Welcome to the **TypeScript_Class** repository!  
This project is a personal learning space where I explore and implement TypeScript concepts step-by-step.  
It covers TypeScript fundamentals from basic types to advanced OOP, type utilities, and real-world use cases.

---

## 📚 Topics Covered

```ts
// ✅ Primitive Data Types
let name: string = "Alice";
let age: number = 30;
let isStudent: boolean = true;

// ✅ Arrays & Tuples
let fruits: string[] = ["Apple", "Banana"];
let person: [string, number] = ["Alice", 30];

// ✅ Object Types
let user: { name: string; age: number } = { name: "Bob", age: 25 };

// ✅ Special Types: any and unknown
let random: any = "Could be anything";
random = 42;
let uncertain: unknown = "Hello";

// ✅ Functions and Return Types
function greet(name: string): string {
  return `Hello, ${name}`;
}
function register(email: string, phone?: string) {}

// ✅ Union Types
let id: string | number;
id = "ABC123";
id = 123;

// ✅ Type Aliases
type UserID = string | number;
type Point = { x: number; y: number };

// ✅ Interfaces
interface Person {
  name: string;
  age: number;
}
const alice: Person = { name: "Alice", age: 28 };

// ✅ Intersection Types
interface Employee {
  id: number;
}
type Manager = Person & Employee;
const bob: Manager = { name: "Bob", age: 35, id: 123 };

// ✅ Enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
let move: Direction = Direction.Up;

// ✅ DOM Manipulation & Type Casting
const button = document.getElementById("submit") as HTMLButtonElement;
const input = <HTMLInputElement>document.getElementById("email");

// ✅ Classes
class Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

// ✅ Access Modifiers & Inheritance
class BankAccount {
  public readonly id: number;
  private balance: number;
  protected owner: string;
  constructor(id: number, owner: string) {
    this.id = id;
    this.owner = owner;
    this.balance = 0;
  }
}
class SavingsAccount extends BankAccount {
  constructor(id: number, owner: string, public interestRate: number) {
    super(id, owner);
  }
  addInterest(): void {
    console.log(`Adding interest to ${this.owner}'s account`);
  }
}

// ✅ Getters and Setters
class Temperature {
  private _celsius: number = 0;
  get celsius(): number {
    return this._celsius;
  }
  set celsius(value: number) {
    if (value < -273.15) throw new Error("Below absolute zero!");
    this._celsius = value;
  }
  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }
}

// ✅ Interfaces in Classes
interface Drivable {
  startEngine(): void;
  drive(speed: number): void;
}
class Car implements Drivable {
  startEngine() { console.log("Engine started"); }
  drive(speed: number) { console.log(`Driving at ${speed} km/h`); }
}

// ✅ Static Members
class MathOperations {
  static PI = 3.14;
  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

// ✅ Modules
// math.ts
export function add(a: number, b: number): number { return a + b; }
// app.ts
import { add } from './math';
console.log(add(2, 3));

// ✅ Type Guards
function printId(id: number | string) {
  if (typeof id === "string") console.log(id.toUpperCase());
  else console.log(id);
}
class Dog { bark() {} }
class Cat { meow() {} }
function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

// ✅ Generics
function identity<T>(arg: T): T { return arg; }
let output = identity<string>("Hello");

// ✅ keyof and Index Signature
interface Person { name: string; age: number; }
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
interface DynamicObject {
  [key: string]: number;
}
let salaries: DynamicObject = { Alice: 1000, Bob: 1200 };

// ✅ Utility Types
interface Todo {
  title: string;
  description: string;
}
const todo1: Partial<Todo> = { title: "Clean room" };
const todo2: Required<Todo> = { title: "Code", description: "TS" };
const todo3: Readonly<Todo> = { title: "Sleep", description: "Zzz" };
type Omitted = Omit<Todo, "description">;
type Extracted = Extract<"a" | "b", "a">;
type Excluded = Exclude<"a" | "b", "b">;
type RecordMap = Record<string, number>;

// ✅ Namespaces
namespace Geometry {
  export function squareArea(side: number): number {
    return side * side;
  }
  export function rectangleArea(w: number, h: number): number {
    return w * h;
  }
}
```

---

## ⚙️ How to Run
```bash
npm install typescript nodemon
npx tsc filename.ts        # Compile single file
npx tsc                    # Compile all files
node filename.js           # Run compiled JS
npx nodemon filename.js    # Auto-reload on changes
```

---

## 📂 Clone and Explore
```bash
git clone https://github.com/hasnain23233/TypeScript_Class.git
cd TypeScript_Class
npm install
```

---

## 🚀 Next Steps
- Advanced Type Manipulation
- TypeScript with React / Vue
- Decorators
- TypeScript Configurations (tsconfig.json)
- Open Source Contributions

---

> 💙 **Built with passion by Hasnain Khushi** — Happy Coding! 👨‍💻
