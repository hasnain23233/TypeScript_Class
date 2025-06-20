///In this class we learn the keyOf and how to use it with objects

type person1 = {
    name: string, age: number , isEmp:boolean
}
let dataCollection: person1 = {
    name: 'Asifa' , age: 12 , isEmp: false
}

type PersonX = keyof person1

let useInfo: PersonX;
useInfo = 'name'
console.log(useInfo = 'isEmp')