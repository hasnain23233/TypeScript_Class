// In this class we learn object in the tupescript and how to manage the object in large data
console.log('manage the object in typescript in large data')


// normal object in typescript
let userData: { name: string, email: string, number: number } = {
    name: 'hasnain',
    email: 'hasnainkhushii@gmail.com',
    number: 234323
}
console.log(userData)

// object using in large data in typescript

let largeData: { [key: string]: string | number | undefined | boolean } = {
    name: 'wasim',
    number: 332,
    emp: true,
    company: undefined
}
console.log(largeData)

// nusting object in typescript

let nustingData: { name: string, email: string, moreDetail: {} } = 
{
    name: 'Rohail',
    email: 'rohailrahmat@gamil.com',
    moreDetail: {
        city: 'Gilgit',
        country: 'pakistan',
        phone: +92932324,

    }
}

console.log(nustingData.moreDetail)
