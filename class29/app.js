///In this class we learn the static key word  and How to use this in classes. So let`s start
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.increment = function () {
        Counter.count++;
    };
    Counter.getCount = function () {
        return Counter.count;
    };
    Counter.count = 0;
    return Counter;
}());
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.getCount());
// let myFvt = new Company('meta')
// console.log(myFvt.myfvtCompany)
console.log(Company.myfvtCompany);
