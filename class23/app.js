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
//In This class we lean the Access modifier in Typescript. how to use it with classes
var ProductEcom = /** @class */ (function () {
    function ProductEcom(userName, productName, productColor, productBudget, productCount) {
        this.buyProduct = false;
        this.userName = userName;
        this.productName = productName;
        this.productColor = productColor;
        this.productBudget = productBudget;
        this.purchasingProduct = productCount;
    }
    ProductEcom.prototype.productDatails = function () {
        var PvtAllDetails = {
            name: this.productName,
            productColor: this.productColor,
            productBuddget: this.productBudget,
            productCount: this.purchasingProduct
        };
        return PvtAllDetails;
    };
    ProductEcom.prototype.addToCard = function () {
        this.buyProduct = true;
    };
    ProductEcom.prototype.buyingProduct = function () {
        if (this.buyProduct === true) {
            return "Thanks ".concat(this.userName, " for purhasing the product thank you");
        }
        else {
            return 'Oops!!!  sory you are not purchasing any product for here';
        }
    };
    return ProductEcom;
}());
var addingNewData = /** @class */ (function (_super) {
    __extends(addingNewData, _super);
    function addingNewData(address, city, no) {
        var _this = _super.call(this, 'Asif', 'Smart Phone', 'white', 3423, 3) || this;
        _this.address = address;
        _this.city = city;
        _this.phoneNumber = no;
        return _this;
    }
    addingNewData.prototype.getProtectedKey = function () {
        return {
            protectValue1: this.productName,
            protectValue2: this.productBudget
        };
    };
    addingNewData.prototype.getFullDetailsOFUser = function () {
        var userDatails = {
            name: this.userName,
            parchasingProduct: this.productName,
            phone: this.phoneNumber,
            city: this.city,
            address: this.address
        };
        return userDatails;
    };
    return addingNewData;
}(ProductEcom));
var purchasingProductsds = new ProductEcom('Asif', 'Smart Phone', 'white', 3423, 3);
purchasingProductsds.addToCard();
console.log(purchasingProductsds.buyingProduct());
console.log(purchasingProductsds.buyingProduct());
var purchasingProductsds2 = new addingNewData('Gilgit Gilgit Baltitan', 'sultamabad', 3923);
purchasingProductsds2.addToCard();
console.log(purchasingProductsds2.getProtectedKey());
