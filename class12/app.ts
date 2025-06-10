// In this class we lean the any data type and unknow data type


// any datatype
let dataType: any = 'Ali'

dataType = 20
dataType = true
dataType = []
console.log(typeof dataType)

// unknow datatype 
let unknowDat: unknown = 'Hasnain'

if (typeof unknowDat == "string") {
    console.log( unknowDat.toUpperCase())
} else {
    console.log(unknowDat , "This is a not a string Sorry")
}


