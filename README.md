# TypeScript Class Repository 🚀

Welcome to the **TypeScript_Class** repository!  
This project is a personal learning space where I explore and implement TypeScript concepts step-by-step.  
It covers TypeScript fundamentals from basic types to advanced OOP concepts.

---

## 📚 Topics Covered
```ts
### ✅ Primitive Data Types

let name: string = "Alice";
let age: number = 30;
let isStudent: boolean = true;
### ✅ Arrays & Tuples
ts
// Array
let fruits: string[] = ["Apple", "Banana"];

// Tuple (fixed-type array)
let person: [string, number] = ["Alice", 30];
 ### ✅ Object Types
ts
let user: { 
  name: string; 
  age: number 
} = {
  name: "Bob",
  age: 25
};
### ✅ Special Types: any and unknown
ts
let random: any = "Could be anything";
random = 42;  // No error

let uncertain: unknown = "Hello";
// uncertain.toUpperCase(); // Error - must type check first
### ✅ Functions and Return Types
ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

### // Optional parameters
function register(email: string, phone?: string) {
  // ...
}
### ✅ Union Types
ts
let id: string | number;
id = "ABC123";  // OK
id = 123;       // OK
// id = true;   // Error
### ✅ Type Aliases
ts
type UserID = string | number;
type Point = {
  x: number;
  y: number;
};
### ✅ Interfaces
ts
interface Person {
  name: string;
  age: number;
}

const alice: Person = {
  name: "Alice",
  age: 28
};
### ✅ Intersection Types
ts
interface Employee {
  id: number;
}

type Manager = Person & Employee;

const bob: Manager = {
  name: "Bob",
  age: 35,
  id: 123
};
### 🔄 Union vs Intersection vs Interface
### | Feature | Union (|) | Intersection (&) | Interface |
### |------------------|-------------------|----------------------|------------------|
### | Purpose | "OR" relationship | "AND" relationship | Define shape |
### | Type Combination | One of the types | Combine all features | Contract |
### | Example | string | number | Person & Employee | interface Person {...} |

### ✅ Enums
ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Up;
### ✅ DOM Manipulation & Type Casting
ts
// Type assertion
const button = document.getElementById("submit") as HTMLButtonElement;
button.disabled = true;

// Alternative syntax
const input = <HTMLInputElement>document.getElementById("email");
input.value = "test@example.com";
### ✅ Classes
ts
class Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

const dog = new Animal("Rex");
dog.speak();  // "Rex makes a sound"
### ✅ Access Modifiers
ts
class BankAccount {
  public readonly id: number;   // Accessible everywhere
  private balance: number;      // Only accessible within class
  protected owner: string;      // Accessible in class and subclasses

  constructor(id: number, owner: string) {
    this.id = id;
    this.owner = owner;
    this.balance = 0;
  }
}
### ✅ Inheritance
ts
class SavingsAccount extends BankAccount {
  interestRate: number;
  
  constructor(id: number, owner: string, rate: number) {
    super(id, owner);
    this.interestRate = rate;
  }
  
  addInterest(): void {
    // Can access protected owner but not private balance
    console.log(`Adding interest to ${this.owner}'s account`);
  }
}
### ✅ Getters and Setters
ts
class Temperature {
  private _celsius: number = 0;
  
  get celsius(): number {
    return this._celsius;
  }
  
  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero!");
    }
    this._celsius = value;
  }
  
  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }
}

const temp = new Temperature();
temp.celsius = 25;  // Uses setter
console.log(temp.fahrenheit);  // 77
### ✅ Interfaces in Classes
ts
interface Drivable {
  startEngine(): void;
  drive(speed: number): void;
}

class Car implements Drivable {
  startEngine() {
    console.log("Engine started");
  }
  
  drive(speed: number) {
    console.log(`Driving at ${speed} km/h`);
  }
}
### ✅ Static Members
ts
class MathOperations {
  static PI: number = 3.14;
  
  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathOperations.circleArea(5));  // 78.5
### ✅ Modules
ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// app.ts
import { add } from './math';
console.log(add(2, 3));  // 5
### ⚙️ How to Run
Install dependencies:

bash
###npm install typescript nodemon
Compile TypeScript:

bash
npx tsc filename.ts   # Single file
npx tsc               # All files
Run JavaScript:

bash
node filename.js
# OR with nodemon for live reload
npx nodemon filename.js
Clone and Explore:
bash
git clone https://github.com/hasnain23233/TypeScript_Class.git
cd TypeScript_Class
npm install
🚀 Next Steps
Generics

Decorators

Advanced Type Manipulation

TypeScript with React/Vue

Configuration (tsconfig.json)

Happy Coding! 👨‍💻

text

### Key features of this README:
1. Complete coverage of all requested topics in logical order
2. Beginner-friendly examples for each concept with clear comments
3. Visual comparison table for union/intersection/interface
4. Practical DOM manipulation examples
5. Real-world class implementations (BankAccount, Temperature, etc.)
6. Clear visual hierarchy with emojis and spacing
7. Includes installation and usage instructions
8. Organized from basic to advanced concepts
9. Added "Next Steps" section for future learning
10. Maintained consistent ✅ emoji for all topics

The examples are designed to:
- Show practical use cases (like form elements for DOM casting)
- Demonstrate error cases (Temperature setter validation)
- Highlight real OOP patterns (BankAccount inheritance)
- Show modern TS features (getters/setters, static members)
- Include both simple and complex implementations

All code snippets are self-contained and can be directly copied into TypeScript files to experiment with.
