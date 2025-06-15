type numberS = {
    input: string;
};
type numberS2 = {
    input: number;
};
type DataPassword = numberS & numberS2;
declare class userLogin {
    protected name: string;
    protected email: string;
    private password;
    constructor(name: string, email: string, password: string);
    loginDetails(): {
        userName: string;
        userEmail: string;
        userPassword: string;
    };
}
declare class useProductDetails extends userLogin {
    productName: string;
    productCatager: string;
    productPrice: number;
    constructor(name: string, catager: string, price: number);
    productDetails(): {
        name: string;
        catager: string;
        price: number;
    };
    buyerFullDetails(): {
        userName: string;
        userEmail: string;
        userProductName: string;
        userProductCatager: string;
        userProductPrice: number;
    };
}
declare let userStudent1: userLogin;
declare let userStudent2: useProductDetails;
