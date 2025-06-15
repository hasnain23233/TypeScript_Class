///In this class we learn the interface in classes. How to use interface in class. So let`s start

interface formsInputer {
    email: string,
    addingFullUserDetail(): userDAtailsInfo,
    birthDay: string
}
interface userDAtailsInfo {
    username: string,
    userEmail: string,
    bithday: string
}

class Form implements formsInputer{
    username: string
    email: string
    birthDay: string
    constructor(name:string , bithday:string, email:string) {
        this.username = name
        this.birthDay = bithday
        this.email = email

    }
    addingFullUserDetail(): userDAtailsInfo {
        let datails = {
            username: this.username,
            userEmail: this.email,
            bithday: this.birthDay
        }
        return datails
    }
}
let userDatails = new Form('hasnain', '23 april 2005', 'hasnainkhushii@gmail.com')
console.log(userDatails.birthDay)
console.log(userDatails.addingFullUserDetail())