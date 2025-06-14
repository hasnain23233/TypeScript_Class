///In this class we learn the Class  in typescript and how to use it in object
var Subject = /** @class */ (function () {
    function Subject(studenName, name, wriitername, budget, bookId) {
        this.AddToCard = false;
        this.bugITnow = false;
        this.studName = studenName;
        this.name = name;
        this.writtername = wriitername;
        this.budget = budget;
        this.bookId = bookId;
    }
    Subject.prototype.AddingToCard = function () {
        this.AddToCard = true;
    };
    Subject.prototype.purchacingTheBook = function () {
        if (this.AddToCard === true) {
            return "Dear ".concat(this.studName, ". Your book name was ").concat(this.name, ". Written by ").concat(this.writtername, ". Your are buy it in ").concat(this.budget, "$ and book ID was ").concat(this.bookId, ", thanks for puschasing the book");
        }
        else {
            return "Oops Sorry ".concat(this.studName, " your book ").concat(this.name, " was not purchasing kindly add the book in card. Thank you. Have a nice day,");
        }
    };
    return Subject;
}());
var userBook = new Subject('Hasnain', 'Harry Potter', 'J. K. Rowling', 12500, 32);
var user2Book = new Subject('wasim', 'Animal Farm', 'George Orwell', 2500, 232);
var user3Book = new Subject('Rohail', 'A tale of two cities', 'Charles Dickens', 12500, 32);
userBook.AddingToCard();
console.log(userBook.purchacingTheBook());
console.log(user2Book.purchacingTheBook());
user3Book.AddingToCard();
console.log(user3Book.purchacingTheBook());
var Product = /** @class */ (function () {
    function Product(userName, productName, productColor, productBudget, productCount) {
        this.buyProduct = false;
        this.userName = userName;
        this.productName = productName;
        this.productColor = productColor;
        this.productBudget = productBudget;
        this.purchasingProduct = productCount;
    }
    Product.prototype.productDatails = function () {
        var PvtAllDetails = {
            name: this.productName,
            productColor: this.productColor,
            productBuddget: this.productBudget,
            productCount: this.purchasingProduct
        };
        return PvtAllDetails;
    };
    Product.prototype.addToCard = function () {
        this.buyProduct = true;
    };
    Product.prototype.buyingProduct = function () {
        if (this.buyProduct === true) {
            return "Thanks for purhasing the product thank you";
        }
        else {
            return 'Oops!!! sory you are not purchasing any product for here';
        }
    };
    return Product;
}());
var purchasingProducts = new Product('Asif', 'Smart Phone', 'white', 3423, 3);
console.log(purchasingProducts.productDatails());
console.log(purchasingProducts.buyingProduct());
var purchasingProducts2 = new Product('Hasnain', 'iPhone', 'dark blue', 493, 4);
console.log(purchasingProducts2.productDatails());
purchasingProducts2.addToCard();
console.log(purchasingProducts2.buyingProduct());
