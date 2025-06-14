//In this class we learn the inheritance in typescript and how to use it with the classes

class Login {
    guyak: string;
    email2: string;
    phone3: number;
  
    constructor(userName: string, userEmail: string, userPhone: number) {
      this.guyak = userName;
      this.email2 = userEmail;
      this.phone3 = userPhone;
    }
    userLoginDetails():{userName: string, userEmail: string, userPhoneNumber: number} {
        let userDetails = {
            userName: this.guyak,
            userEmail: this.email2,
            userPhoneNumber: this.phone3
        }
        return userDetails
    }
  }

class fvtSports{
    youGame(gameName:string):string {
        return gameName
    }
}

class otherGame extends Login {
    otherGame(otherGames:string):string {
        return otherGames
    }
}

let studentGamce = new otherGame('Hasnain', 'hasnainkhushii@gmail.com', 8394)
console.log(studentGamce.userLoginDetails())
console.log(studentGamce.otherGame('football'))