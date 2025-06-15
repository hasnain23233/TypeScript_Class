export interface loginDtails {
    userName: string;
    userEmail: string;
    username: string;
}
export interface addingProductDetail extends loginDtails {
    productName: string;
    productPrice: number;
}
export default class Loginforms {
    name: string;
    email: string;
    username: string;
    constructor(userName: string, userEmail: string, username: string);
}
