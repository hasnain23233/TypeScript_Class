"use strict";
//In This class we learn the modules in typescript and how to use it in the projects
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
Object.defineProperty(exports, "__esModule", { value: true });
var modeuls_1 = require("./modeuls");
var userDetails = /** @class */ (function (_super) {
    __extends(userDetails, _super);
    function userDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    userDetails.prototype.userDtailsAllHere = function () {
        var details = {
            userName: this.name,
            userEmail: this.email,
            username: this.username
        };
        return details;
    };
    return userDetails;
}(modeuls_1.default));
var FullDetailWithProduct = /** @class */ (function (_super) {
    __extends(FullDetailWithProduct, _super);
    function FullDetailWithProduct(productname, userPrict, name, email, username) {
        var _this = _super.call(this, name, email, username) || this;
        _this.userProductName = productname;
        _this.userProductPrice = userPrict;
        return _this;
    }
    FullDetailWithProduct.prototype.FullDetails = function () {
        var fullDtailOfUser = {
            userName: this.name,
            userEmail: this.email,
            username: this.username,
            productName: this.userProductName,
            productPrice: this.userProductPrice
        };
        return fullDtailOfUser;
    };
    return FullDetailWithProduct;
}(userDetails));
var userDetailsAllInThisDiv = new FullDetailWithProduct('iPhone', 39, 'hasnain khushi', 'hasnainkhushi@gmail.com', 'hasnain2390239');
console.log(userDetailsAllInThisDiv.FullDetails());
console.log(userDetailsAllInThisDiv.userDtailsAllHere());
var userDetailsAllInThisDiv2 = new FullDetailWithProduct('Tv', 293, 'Rohail', 'Roahhil@gmail.com', 'Roahils9238');
console.log(userDetailsAllInThisDiv2.FullDetails());
console.log(userDetailsAllInThisDiv2.userDtailsAllHere());
