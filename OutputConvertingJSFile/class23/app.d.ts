declare class ProductEcom {
    protected userName: string;
    protected productName: string;
    productColor: string;
    protected productBudget: number;
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
declare class addingNewData extends ProductEcom {
    address: string;
    city: string;
    phoneNumber: number;
    constructor(address: string, city: string, no: number);
    getProtectedKey(): {
        protectValue1: string;
        protectValue2: number;
    };
    getFullDetailsOFUser(): {
        name: string;
        parchasingProduct: string;
        phone: number;
        city: string;
        address: string;
    };
}
declare let purchasingProductsds: ProductEcom;
declare let purchasingProductsds2: addingNewData;
