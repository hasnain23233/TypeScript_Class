///In this class we learn the the utility types and how to use it in the project

interface userData{
    name: string,
    email: string,
    no: number
}

let sudent1: Partial<userData> = {
    name: 'hasnain',
    email: 'hasnainkhushi@gmail.com'
}
console.log(sudent1)

let sudent2: Required<userData> = {
    name: 'wasim',
    email: 'wasim@gmail.com',
    no: 3332392384
}
console.log(sudent2)

let student3: Readonly<userData> = {
    name: 'Rahail',
    email: 'rohail@gmail.com',
    no: 3332392384
}
console.log(student3)

let student4: Pick<userData, 'name' | 'email'> = {
    name: 'tofail',
    email: 'tofail@gmail.com'
}
console.log(student4)