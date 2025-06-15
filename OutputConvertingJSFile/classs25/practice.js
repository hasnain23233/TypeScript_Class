"use strict";
class userLogin {
    name;
    email;
    password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    loginDetails() {
        let userDatailsObject = {
            userName: this.name,
            userEmail: this.email,
            userPassword: this.password
        };
        return userDatailsObject;
    }
}
class useProductDetails extends userLogin {
    productName;
    productCatager;
    productPrice;
    constructor(name, catager, price) {
        super('Hasnain', "Hasnainkhushii@gmail.com", 'oasewerw');
        this.productName = name,
            this.productCatager = catager,
            this.productPrice = price;
    }
    productDetails() {
        let productDatails = {
            name: this.productName,
            catager: this.productCatager,
            price: this.productPrice
        };
        return productDatails;
    }
    buyerFullDetails() {
        let UserFullDetails = {
            userName: this.name,
            userEmail: this.email,
            userProductName: this.productName,
            userProductCatager: this.productCatager,
            userProductPrice: this.productPrice
        };
        return UserFullDetails;
    }
}
let userStudent1 = new userLogin('Hasnain', "Hasnainkhushii@gmail.com", 'oasewerw');
console.log(userStudent1.loginDetails());
let userStudent2 = new useProductDetails('T.V', 'Electronic', 493);
console.log(userStudent2.productDetails());
console.log(userStudent2.buyerFullDetails());
