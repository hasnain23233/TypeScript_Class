var _a, _b;
var user_id = Symbol();
var user_no = Symbol();
console.log(user_id == user_no);
var objectUser = Symbol('id');
var user_Details = (_a = {},
    _a[objectUser] = 200,
    _a.name = 'hasnain',
    _a.email = 'hasnainkhushii@gmail.com',
    _a);
var employ_Detail = (_b = {},
    _b[objectUser] = 400,
    _b.name = 'Rohail',
    _b.email = 'Rahmat@gmail.com',
    _b);
console.log(user_Details.email);
console.log(user_Details);
console.log(user_Details[objectUser]);
console.log(user_Details[objectUser] === employ_Detail[objectUser]);
var Symbol1 = Symbol(1);
var Symbol2 = Symbol(1);
console.log(Symbol1 == Symbol2);
console.log(Symbol1);
console.log(Symbol2);
