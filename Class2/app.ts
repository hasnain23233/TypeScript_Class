// primitive data type

let nameData: string = "hasnain"
console.log(nameData)

let numberData: number = 48934;
console.log(numberData)

let booleanData: boolean = true
console.log(booleanData)

let nullData = null
console.log(nullData)

let undifineData = undefined
console.log(undifineData)


// let bigintData: bigint = 4434793443243248n;
// console.log(bigintData);

// let symbolData: symbol = Symbol(9);
// let symbolData2: symbol = Symbol('id');
// console.log(symbolData);
// console.log(symbolData2);
// console.log(symbolData === symbolData2);


// Object Datatype in typscript

// let num1: number[] = [1, 2, 3, 4, 5]
// for (let i = 0; i < num1.length; i++){
//     console.log(i != 2)
// }
// console.log(num1)

let stringData: Array<string> = ['hasnain', 'wasim', 'rohail']
for (let i = 0; i < stringData.length; i++){
    console.log(stringData[i])
}
console.log(stringData)

let tupleData: number | string | boolean = 12
console.log(tupleData)

let objectData: { name: string, no: number, email: string, address: string } = {
    name: 'hasnain' , no: 234 , email: 'hasnainkhushi@gmail.com' , address: 'gilgit'
}
console.log(objectData.email)

// special type

let dataAny: any = 20
console.log(dataAny)

let unknowData: unknown = 'wasim'
console.log(typeof (unknowData))

