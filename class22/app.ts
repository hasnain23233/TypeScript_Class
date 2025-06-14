///In this class we learn the Class  in typescript and how to use it in object

class Subject{
    studName: string;
    name: string;
    writtername: string;
    budget: number;
    bookId: number
    AddToCard = false
    bugITnow = false
    constructor(studenName: string, name: string, wriitername: string, budget: number, bookId: number) {
        this.studName = studenName
        this.name = name
        this.writtername = wriitername
        this.budget = budget
        this.bookId = bookId
    }
    AddingToCard():void {
        this.AddToCard = true
    }
    purchacingTheBook():string {
        if (this.AddToCard === true) {
            return `Dear ${this.studName}. Your book name was ${this.name}. Written by ${this.writtername}. Your are buy it in ${this.budget}$ and book ID was ${this.bookId}, thanks for puschasing the book`
        } else {
            return `Oops Sorry ${this.studName} your book ${this.name} was not purchasing kindly add the book in card. Thank you. Have a nice day,`
        }
    }

}

let userBook = new Subject('Hasnain','Harry Potter', 'J. K. Rowling', 12500, 32)
let user2Book = new Subject('wasim','Animal Farm', 'George Orwell', 2500, 232)
let user3Book = new Subject('Rohail','A tale of two cities', 'Charles Dickens', 12500, 32)
userBook.AddingToCard()
console.log(userBook.purchacingTheBook())
console.log(user2Book.purchacingTheBook())
user3Book.AddingToCard()
console.log(user3Book.purchacingTheBook())


class Product {
    userName: string;
    productName: string;
    productColor: string;
    productBudget: number;
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
            return `Thanks for purhasing the product thank you`
        } else {
            return 'Oops!!! sory you are not purchasing any product for here'
        }
    }
}

let purchasingProducts = new Product('Asif', 'Smart Phone', 'white', 3423, 3)
console.log(purchasingProducts.productDatails())
console.log(purchasingProducts.buyingProduct())

let purchasingProducts2 = new Product('Hasnain', 'iPhone', 'dark blue', 493, 4)
console.log(purchasingProducts2.productDatails())
purchasingProducts2.addToCard()
console.log(purchasingProducts2.buyingProduct())