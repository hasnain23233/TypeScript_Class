//In this class we practices, classes, Inhertance and Access Modifires and how to use it in the programming;
type numberS = { input: string }
type numberS2 = { input: number }
type DataPassword = numberS & numberS2

class userLogin {
    protected name: string;
    protected email: string;
    private password: string
    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }
    loginDetails(): { userName: string, userEmail: string, userPassword: string }  {
            let userDatailsObject = {
                userName: this.name,
                userEmail: this.email,
                userPassword: this.password
            }
            return userDatailsObject
    }    
}
class useProductDetails extends userLogin{
    productName : string;
    productCatager: string;
    productPrice: number;
    constructor(name: string , catager: string , price: number) {
        super('Hasnain', "Hasnainkhushii@gmail.com", 'oasewerw')
        this.productName = name,
        this.productCatager = catager,
        this.productPrice = price
    }

    productDetails(): { name: string, catager: string, price: number }  {
        let productDatails = {
            name: this.productName,
            catager: this.productCatager,
            price: this.productPrice
        }
        return productDatails
    }

    buyerFullDetails(): {userName:string , userEmail: string , userProductName:string , userProductCatager: string , userProductPrice: number}{
        let UserFullDetails = {
            userName: this.name,
            userEmail: this.email,
            userProductName: this.productName,
            userProductCatager: this.productCatager,
            userProductPrice: this.productPrice
        }
        return UserFullDetails
    }

}
let userStudent1 = new userLogin('Hasnain', "Hasnainkhushii@gmail.com", 'oasewerw')
console.log(userStudent1.loginDetails())
let userStudent2 = new useProductDetails('T.V', 'Electronic', 493)
console.log(userStudent2.productDetails())
console.log(userStudent2.buyerFullDetails())
