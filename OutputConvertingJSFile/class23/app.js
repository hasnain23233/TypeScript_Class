"use strict";
//In This class we lean the Access modifier in Typescript. how to use it with classes
class ProductEcom {
    userName;
    productName;
    productColor;
    productBudget;
    purchasingProduct;
    buyProduct = false;
    constructor(userName, productName, productColor, productBudget, productCount) {
        this.userName = userName;
        this.productName = productName;
        this.productColor = productColor;
        this.productBudget = productBudget;
        this.purchasingProduct = productCount;
    }
    productDatails() {
        let PvtAllDetails = {
            name: this.productName,
            productColor: this.productColor,
            productBuddget: this.productBudget,
            productCount: this.purchasingProduct
        };
        return PvtAllDetails;
    }
    addToCard() {
        this.buyProduct = true;
    }
    buyingProduct() {
        if (this.buyProduct === true) {
            return `Thanks ${this.userName} for purhasing the product thank you`;
        }
        else {
            return 'Oops!!!  sory you are not purchasing any product for here';
        }
    }
}
class addingNewData extends ProductEcom {
    address;
    city;
    phoneNumber;
    constructor(address, city, no) {
        super('Asif', 'Smart Phone', 'white', 3423, 3);
        this.address = address;
        this.city = city;
        this.phoneNumber = no;
    }
    getProtectedKey() {
        return {
            protectValue1: this.productName,
            protectValue2: this.productBudget
        };
    }
    getFullDetailsOFUser() {
        let userDatails = {
            name: this.userName,
            parchasingProduct: this.productName,
            phone: this.phoneNumber,
            city: this.city,
            address: this.address
        };
        return userDatails;
    }
}
let purchasingProductsds = new ProductEcom('Asif', 'Smart Phone', 'white', 3423, 3);
purchasingProductsds.addToCard();
console.log(purchasingProductsds.buyingProduct());
console.log(purchasingProductsds.buyingProduct());
let purchasingProductsds2 = new addingNewData('Gilgit Gilgit Baltitan', 'sultamabad', 3923);
purchasingProductsds2.addToCard();
console.log(purchasingProductsds2.getProtectedKey());
