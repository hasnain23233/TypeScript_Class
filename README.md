# TypeScript Class Repository 🚀

Welcome to the **TypeScript_Class** repository!  
This project is a personal learning space where I explore and implement TypeScript concepts step-by-step.  
It covers TypeScript fundamentals including primitive types, arrays, tuples, objects, and dynamic types like `any` and `unknown`.

---

## 📚 Topics Covered So Far

- ✅ Primitive Data Types (`string`, `number`, `boolean`, etc.)
- ✅ Arrays
- ✅ Tuples
- ✅ Object Types
- ✅ Special Types: `any`, `unknown`
- ✅ Functions and Return Types

- Learned how to define functions in TypeScript with specific parameter and return types.
- Explored the `void` type for functions that don't return anything.
- Understood the `never` type for functions that never return (e.g., those that throw errors).
- Worked with function parameters including:
  - Required parameters
  - Optional parameters (`?`)
  - Default parameters

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

function logMessage(message: string): void {
  console.log(message);
}

function throwError(error: string): never {
  throw new Error(error);
}

function add(a: number, b: number = 5): number {
  return a + b;
}


More advanced concepts like `enums`, `interfaces`, `classes`, and `generics` will be added as I continue learning. 🚀

---

## ⚙️ How to Run
#install typescript
npm install typescript
## run the typescript file
npx tsc filename or file path
## coverting All typescript in javascript
tsc run this commond on your terminal
## running the Javascript file in your server side. So install nodemon 
npm i nodemon
### 1. Clone the Repository
git clone https://github.com/hasnain23233/TypeScript_Class.git
cd TypeScript_Class
