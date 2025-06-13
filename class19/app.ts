// In this class we learn the type in Typscript and difference between the type and interface. how to use these and how to combine these in object

// using the type in typescript

type information1 = { name: string, id: number }
type information2 = { address: string, city: string }

type AllInformation = information1 & information2

const studentUser: AllInformation = {
    name: 'hasnain khushi',
    id: 3934,
    address: 'sultanabad',
    city: 'gilgit'
}
console.log(studentUser)


// using the union in types

type information3 = { y: number }
type information4 = { x: number }
type AllInformationStud = information3 | information4 

let userData234: AllInformationStud = {
    y: 3049,
    x: 340
}
console.log(userData234)
