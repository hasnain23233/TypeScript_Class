///In this class we learn the the utility types and how to use it in the project

interface userData{
    name: string,
    email: string,
    no: number
}

//using Partial
let sudent1: Partial<userData> = {
    name: 'hasnain',
    email: 'hasnainkhushi@gmail.com'
}
console.log(sudent1)


//using Required
let sudent2: Required<userData> = {
    name: 'wasim',
    email: 'wasim@gmail.com',
    no: 3332392384
}
console.log(sudent2)

//using ReadOnly
let student3: Readonly<userData> = {
    name: 'Rahail',
    email: 'rohail@gmail.com',
    no: 3332392384
}
console.log(student3)

//using Pick
let student4: Pick<userData, 'name' | 'email'> = {
    name: 'tofail',
    email: 'tofail@gmail.com'
}
console.log(student4)

//using omit
let student5: Omit<userData, 'email'> = {
    name: 'Ehtisham',
    no : 49
}
console.log(student5)

//using exclude
type Status = 'active' | 'offline' | 'panding'
type checkStatus = Exclude<Status, 'offline' | 'panding'>
const student6: checkStatus = 'active'
console.log(student6)

//using nonNullable 
type userDataStud = string | null | undefined | number
let student7: NonNullable<userDataStud> = 'Hasnain'
console.log(student7)

//using Record 
type control = 'admin' | 'user'
const student8: Record<control, number> = {
    admin: 1, 
    user: 0
}
console.log(student8.admin)

//using Extract 
type job = 'software' | 'web developer' | 'cleaner'
const student9: Extract<job, 'software' | 'web developer'> = 'web developer'
console.log(student9)