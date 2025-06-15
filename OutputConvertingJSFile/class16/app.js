"use strict";
///In this class we learn the union datatype in the typescript and how to used it in funtion calling
//using the union datatype in single variable 
let singleName = ['hasnain ali', 'wasim', 'Rohail'];
console.log(singleName);
//using the union datatype in funtion
function valueString() {
    return 20;
}
console.log(valueString());
//using the union datatype in a funtion params 
function fruitName(a, b) {
    if (typeof a === 'boolean' || typeof b === 'boolean') {
        return String(a) + String(b);
    }
    return a * b;
}
console.log(fruitName(39, 1));
