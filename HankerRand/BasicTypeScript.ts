///In this file we practice the hacker rand typesc

// Question1 = Data Types - Use multiple data types for variables. One can ask the compiler to ignore the type to take advantage of dynamic types. TS has support for ‘any’ type, primitive data types like number, boolean, string, void, null, undefined, enum.

let StringData: string | number = 345
console.log(StringData)

let useAny: any = 934
console.log(useAny)

///Question2 = Variables Declaration - Use static type checking and TS has the same syntax as Javascript for defining variables.

let firstVar: string = "Hasnain"
console.log(firstVar)

let secondVar: number = 32
console.log(secondVar)

let thirdVar: boolean = true
console.log(thirdVar)

let fourthVar: undefined;
console.log(fourthVar)

//Question3 = Array and Tuples - Use arrays of either specific or generic types. Use tuples which are arrays in which we can define the data type of each element in the array.
let numberArray: number[] = [23, 43940, 4930]
console.log(numberArray)
let TupleArray2: [string, number, boolean] = ['hasnain', 923, true]
console.log(TupleArray2)

//Queston4 = Functions - Use functions for performing a set of actions. Create functions with typed parameters, return type annotations, function overloads, default parameter values, rest parameters. Create named functions and anonymous functions.
type DataValues = {
    name: string;
    numberData: number;
}

// Function overloads
function addDetails(name: string): DataValues;
function addDetails(name: string, number: number): DataValues;

// Function with default and rest parameters
function addDetails(name: string, number: number = 0): DataValues {
    return {
        name: name,
        numberData: number
    };
}

console.log(addDetails("Asifa"));         
console.log(addDetails("Asifa", 33));     

const sayHello = function(name: string = "Guest") {
    console.log("Hello, " + name);
};

sayHello(); 
sayHello("Hasnain"); 

//Question5 = Class - Use of object-oriented class-based approach to creating objects.
class AddingClass{
    studNAme: string
    email: string
    constructor(name: string, email: string) {
        this.email = email
        this.studNAme = name
    }

    adding(): void{
        console.log(this.studNAme , this.email)
    }
}
let sudent = new AddingClass('Rohail', 'RohailKhan@gmail.com')
sudent.adding() 

//Question6 = Inheritance - Use of Inheritance to receive the features, interactions, and behaviors of a class by another class.

class studentInfo {
    stuName: string
    fName: string
    constructor(stu:string ,  fatherName:string) {
        this.stuName = stu
        this.fName = fatherName
    }
}
class moreDetail extends studentInfo {
    address: string
    city: string
    constructor(student:string, fatherName:string, address:string, city:string) {
        super(student, fatherName)
        this.address = address
        this.city = city
    }

    showingData ():void {
        console.log([this.stuName , this.fName , this.address , this.city])
    }
}

let sudent32 = new moreDetail('wasim', 'M Ali', 'yasin', 'gilgit')
sudent32.showingData()