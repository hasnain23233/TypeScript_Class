"use strict";
let user_id = Symbol();
let user_no = Symbol();
console.log(user_id == user_no);
let objectUser = Symbol('id');
const user_Details = {
    [objectUser]: 200,
    name: 'hasnain',
    email: 'hasnainkhushii@gmail.com'
};
const employ_Detail = {
    [objectUser]: 400,
    name: 'Rohail',
    email: 'Rahmat@gmail.com'
};
console.log(user_Details.email);
console.log(user_Details);
console.log(user_Details[objectUser]);
console.log(user_Details[objectUser] === employ_Detail[objectUser]);
let Symbol1 = Symbol(1);
let Symbol2 = Symbol(1);
console.log(Symbol1 == Symbol2);
console.log(Symbol1);
console.log(Symbol2);
