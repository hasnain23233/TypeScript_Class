"use strict";
//In This class we learn the modules in typescript and how to use it in the projects
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modeuls_1 = __importDefault(require("./modeuls"));
class userDetails extends modeuls_1.default {
    userDtailsAllHere() {
        let details = {
            userName: this.name,
            userEmail: this.email,
            username: this.username
        };
        return details;
    }
}
class FullDetailWithProduct extends userDetails {
    userProductName;
    userProductPrice;
    constructor(productname, userPrict, name, email, username) {
        super(name, email, username);
        this.userProductName = productname;
        this.userProductPrice = userPrict;
    }
    FullDetails() {
        let fullDtailOfUser = {
            userName: this.name,
            userEmail: this.email,
            username: this.username,
            productName: this.userProductName,
            productPrice: this.userProductPrice
        };
        return fullDtailOfUser;
    }
}
let userDetailsAllInThisDiv = new FullDetailWithProduct('iPhone', 39, 'hasnain khushi', 'hasnainkhushi@gmail.com', 'hasnain2390239');
console.log(userDetailsAllInThisDiv.FullDetails());
console.log(userDetailsAllInThisDiv.userDtailsAllHere());
let userDetailsAllInThisDiv2 = new FullDetailWithProduct('Tv', 293, 'Rohail', 'Roahhil@gmail.com', 'Roahils9238');
console.log(userDetailsAllInThisDiv2.FullDetails());
console.log(userDetailsAllInThisDiv2.userDtailsAllHere());
