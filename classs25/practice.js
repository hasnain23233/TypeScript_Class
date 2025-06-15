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
var userLogin = /** @class */ (function () {
    function userLogin(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    userLogin.prototype.loginDetails = function () {
        var userDatailsObject = {
            userName: this.name,
            userEmail: this.email,
            userPassword: this.password
        };
        return userDatailsObject;
    };
    return userLogin;
}());
var useProductDetails = /** @class */ (function (_super) {
    __extends(useProductDetails, _super);
    function useProductDetails(name, catager, price) {
        var _this = _super.call(this, 'Hasnain', "Hasnainkhushii@gmail.com", 'oasewerw') || this;
        _this.productName = name,
            _this.productCatager = catager,
            _this.productPrice = price;
        return _this;
    }
    useProductDetails.prototype.productDetails = function () {
        var productDatails = {
            name: this.productName,
            catager: this.productCatager,
            price: this.productPrice
        };
        return productDatails;
    };
    useProductDetails.prototype.buyerFullDetails = function () {
        var UserFullDetails = {
            userName: this.name,
            userEmail: this.email,
            userProductName: this.productName,
            userProductCatager: this.productCatager,
            userProductPrice: this.productPrice
        };
        return UserFullDetails;
    };
    return useProductDetails;
}(userLogin));
var userStudent1 = new userLogin('Hasnain', "Hasnainkhushii@gmail.com", 'oasewerw');
console.log(userStudent1.loginDetails());
var userStudent2 = new useProductDetails('T.V', 'Electronic', 493);
console.log(userStudent2.productDetails());
console.log(userStudent2.buyerFullDetails());
