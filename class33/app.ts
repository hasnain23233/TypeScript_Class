//In this class we learn the index signature and how it use in typescript, so let`s go


type userData5 = {
    name: string,
    email: string,
    readonly [key:string]: number | string
}

let userDatails90:userData5 = {
    name: 'Hasnain',
    email: 'hasnainkhushii@gmail.com',
    id: 30,
    phone: 9323
}
console.log(userDatails90.name)