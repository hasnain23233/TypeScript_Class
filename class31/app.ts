///In this class we the Generic in typescript and how to use it. So let`s go.


//using generic in a funtion pramas and funtion
function AddingValue<T>(data: T): T{
    return data
}
console.log(AddingValue('Asifa'))
console.log(AddingValue(29))
console.log(AddingValue(true))
console.log(AddingValue(undefined))

//using the gereric with arrays
function AddingUser<T>(data: T[]): T{
    return data[2]
}
console.log(AddingUser(['Rohail', 'wasim', 'hasnain']))
