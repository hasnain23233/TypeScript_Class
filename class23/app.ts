//In This class we lean the Access modifier in Typescript. how to use it with classes
class ProductEcom {
    protected userName: string;
    protected productName: string;
    productColor: string;
    protected productBudget: number;
    purchasingProduct: number
    buyProduct:boolean = false
    constructor(userName: string, productName: string, productColor: string, productBudget: number, productCount: number) {
        this.userName = userName
        this.productName = productName
        this.productColor = productColor
        this.productBudget = productBudget
        this.purchasingProduct = productCount
    }
    productDatails():{name:string , productColor: string , productBuddget: number , productCount: number} {
        let PvtAllDetails = {
            name: this.productName,
            productColor: this.productColor,
            productBuddget: this.productBudget,
            productCount : this.purchasingProduct

        }
        return PvtAllDetails
    }
    addToCard() {
        this.buyProduct = true
    }
    buyingProduct() :string{
        if (this.buyProduct === true) {
            return `Thanks ${this.userName} for purhasing the product thank you`
        } else {
            return 'Oops!!!  sory you are not purchasing any product for here'
        }
    }
}

class addingNewData extends ProductEcom {
    address: string;
    city: string;
    phoneNumber: number
    constructor(address:string , city:string , no:number) {
        super('Asif', 'Smart Phone', 'white', 3423, 3)
        this.address = address
        this.city = city
        this.phoneNumber = no
    }

    getProtectedKey():{protectValue1: string , protectValue2: number} {
        return {
            protectValue1: this.productName,
            protectValue2: this.productBudget
        }
    }
    getFullDetailsOFUser(): {name:string , parchasingProduct:string , phone: number , city:string , address: string } {
        let userDatails = {
            name: this.userName, 
            parchasingProduct: this.productName,
            phone: this.phoneNumber,
            city: this.city,
            address : this.address
        }
        return userDatails
    }
    
}

let purchasingProductsds = new ProductEcom('Asif', 'Smart Phone', 'white', 3423, 3)
purchasingProductsds.addToCard()
console.log(purchasingProductsds.buyingProduct())
console.log(purchasingProductsds.buyingProduct())

let purchasingProductsds2 = new addingNewData('Gilgit Gilgit Baltitan','sultamabad', 3923 )
purchasingProductsds2.addToCard()
console.log(purchasingProductsds2.getProtectedKey())
