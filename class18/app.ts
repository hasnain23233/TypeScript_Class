///In this class we learn intersection type in typescript and how to use it and how to use interface and intersection type in typescript

// using the intersection type

type infor1 = { name: string }
type infor2 = { no: number }
type infor3 = { email: string }

type allInfor = infor1 & infor2 & infor3

let userStud: allInfor = {
    name: 'wasim',
    no: 343,
    email: 'wasim@gmail.com'
}
console.log(userStud)

//using the interface with intersection type in Typescript

interface value1{ name: string, no: number, email: string }
interface value2{ address: string, city: string, cnic: boolean }
type AllInfo = value1 & value2

let userAllInfor: AllInfo = {
    name: 'rohail',
    no: 4954,
    email: 'RohailRahmat@gmail.com',
    address: 'barkolti',
    city: 'yasin',
    cnic: true
}

console.log(userAllInfor)
