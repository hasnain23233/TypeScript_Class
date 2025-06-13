///In this class we learn the union datatype in the typescript and how to used it in funtion calling

//using the union datatype in single variable 
let singleName : string | number | string[] | number[] = ['hasnain ali' , 'wasim' , 'Rohail']
console.log(singleName)


//using the union datatype in funtion

function valueString():string | number {
    return 20
}
console.log(valueString())

//using the union datatype in a funtion params 
function fruitName(a: string | number , b: string | number ) {
    if (typeof a === 'boolean' || typeof b === 'boolean') {
        return String(a) + String(b); 
    }

    return a as number  * (b  as number)
}

console.log(fruitName(39, 1));         
