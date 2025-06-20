///In this file we practice the hacker rand typesc
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Question1 = Data Types - Use multiple data types for variables. One can ask the compiler to ignore the type to take advantage of dynamic types. TS has support for ‘any’ type, primitive data types like number, boolean, string, void, null, undefined, enum.
var StringData = 345;
console.log(StringData);
var useAny = 934;
console.log(useAny);
///Question2 = Variables Declaration - Use static type checking and TS has the same syntax as Javascript for defining variables.
var firstVar = "Hasnain";
console.log(firstVar);
var secondVar = 32;
console.log(secondVar);
var thirdVar = true;
console.log(thirdVar);
var fourthVar;
console.log(fourthVar);
//Question3 = Array and Tuples - Use arrays of either specific or generic types. Use tuples which are arrays in which we can define the data type of each element in the array.
var numberArray = [23, 43940, 4930];
console.log(numberArray);
var TupleArray2 = ['hasnain', 923, true];
console.log(TupleArray2);
// Function with default and rest parameters
function addDetails(name, number) {
    if (number === void 0) { number = 0; }
    return {
        name: name,
        numberData: number
    };
}
console.log(addDetails("Asifa"));
console.log(addDetails("Asifa", 33));
var sayHello = function (name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello, " + name);
};
sayHello();
sayHello("Hasnain");
//Question5 = Class - Use of object-oriented class-based approach to creating objects.
var AddingClass = /** @class */ (function () {
    function AddingClass(name, email) {
        this.email = email;
        this.studNAme = name;
    }
    AddingClass.prototype.adding = function () {
        console.log(this.studNAme, this.email);
    };
    return AddingClass;
}());
var sudent = new AddingClass('Rohail', 'RohailKhan@gmail.com');
sudent.adding();
//Question6 = Inheritance - Use of Inheritance to receive the features, interactions, and behaviors of a class by another class.
var studentInfo = /** @class */ (function () {
    function studentInfo(stu, fatherName) {
        this.stuName = stu;
        this.fName = fatherName;
    }
    return studentInfo;
}());
var moreDetail = /** @class */ (function (_super) {
    __extends(moreDetail, _super);
    function moreDetail(student, fatherName, address, city) {
        var _this = _super.call(this, student, fatherName) || this;
        _this.address = address;
        _this.city = city;
        return _this;
    }
    moreDetail.prototype.showingData = function () {
        console.log([this.stuName, this.fName, this.address, this.city]);
    };
    return moreDetail;
}(studentInfo));
var sudent32 = new moreDetail('wasim', 'M Ali', 'yasin', 'gilgit');
sudent32.showingData();
