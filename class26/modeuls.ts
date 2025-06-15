///this is a module in the typescript
export interface loginDtails {
    userName: string,
    userEmail: string,
    username : string
}
export interface addingProductDetail extends loginDtails{
    productName: string,
    productPrice: number
}

export default class Loginforms {
    name: string;
    email: string;
    username: string;
    constructor(userName: string, userEmail: string, username: string) {
        this.name = userName
        this.email = userEmail
        this.username = username
    }
}