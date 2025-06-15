declare class Subject {
    studName: string;
    name: string;
    writtername: string;
    budget: number;
    bookId: number;
    AddToCard: boolean;
    bugITnow: boolean;
    constructor(studenName: string, name: string, wriitername: string, budget: number, bookId: number);
    AddingToCard(): void;
    purchacingTheBook(): string;
}
declare let userBook: Subject;
declare let user2Book: Subject;
declare let user3Book: Subject;
declare class Product {
    userName: string;
    productName: string;
    productColor: string;
    productBudget: number;
    purchasingProduct: number;
    buyProduct: boolean;
    constructor(userName: string, productName: string, productColor: string, productBudget: number, productCount: number);
    productDatails(): {
        name: string;
        productColor: string;
        productBuddget: number;
        productCount: number;
    };
    addToCard(): void;
    buyingProduct(): string;
}
declare let purchasingProducts: Product;
declare let purchasingProducts2: Product;
