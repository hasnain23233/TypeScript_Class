//In This class we learn the modules in typescript and how to use it in the projects

import Loginforms , {loginDtails , addingProductDetail} from "./modeuls";

class userDetails extends Loginforms {
    userDtailsAllHere(): loginDtails {
        let details = {
            userName : this.name,
            userEmail : this.email,
            username : this.username
        }
        return details
    }
}
class FullDetailWithProduct extends userDetails {
    userProductName: string;
    userProductPrice: number;
    constructor(productname: string, userPrict: number, name: string, email: string, username: string) {
        super(name, email, username)
        this.userProductName = productname
        this.userProductPrice = userPrict
    }
    FullDetails(): addingProductDetail {
        let fullDtailOfUser = {
            userName: this.name,        
            userEmail: this.email,
            username: this.username,
            productName: this.userProductName,
            productPrice: this.userProductPrice
        }
        return fullDtailOfUser  
    }
}

let userDetailsAllInThisDiv = new FullDetailWithProduct('iPhone', 39,'hasnain khushi', 'hasnainkhushi@gmail.com', 'hasnain2390239')
console.log(userDetailsAllInThisDiv.FullDetails())
console.log(userDetailsAllInThisDiv.userDtailsAllHere())
let userDetailsAllInThisDiv2 = new FullDetailWithProduct('Tv', 293,'Rohail', 'Roahhil@gmail.com', 'Roahils9238')
console.log(userDetailsAllInThisDiv2.FullDetails())
console.log(userDetailsAllInThisDiv2.userDtailsAllHere())