// In this class we lean the any data type and unknow data type
// any datatype
var dataType = 'Ali';
dataType = 20;
dataType = true;
dataType = [];
console.log(typeof dataType);
// unknow datatype 
var unknowDat = 'Hasnain';
if (typeof unknowDat == "string") {
    console.log(unknowDat.toUpperCase());
}
else {
    console.log(unknowDat, "This is a not a string Sorry");
}
