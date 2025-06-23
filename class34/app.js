///In this class we learn the the utility types and how to use it in the project
//using Partial
var sudent1 = {
    name: 'hasnain',
    email: 'hasnainkhushi@gmail.com'
};
console.log(sudent1);
//using Required
var sudent2 = {
    name: 'wasim',
    email: 'wasim@gmail.com',
    no: 3332392384
};
console.log(sudent2);
//using ReadOnly
var student3 = {
    name: 'Rahail',
    email: 'rohail@gmail.com',
    no: 3332392384
};
console.log(student3);
//using Pick
var student4 = {
    name: 'tofail',
    email: 'tofail@gmail.com'
};
console.log(student4);
//using omit
var student5 = {
    name: 'Ehtisham',
    no: 49
};
console.log(student5);
var student6 = 'active';
console.log(student6);
var student7 = 'Hasnain';
console.log(student7);
var student8 = {
    admin: 1,
    user: 0
};
console.log(student8.admin);
var student9 = 'web developer';
console.log(student9);
