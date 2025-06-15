"use strict";
//In this class we learn the inheritance in typescript and how to use it with the classes
class Login {
    guyak;
    email2;
    phone3;
    constructor(userName, userEmail, userPhone) {
        this.guyak = userName;
        this.email2 = userEmail;
        this.phone3 = userPhone;
    }
    userLoginDetails() {
        let userDetails = {
            userName: this.guyak,
            userEmail: this.email2,
            userPhoneNumber: this.phone3
        };
        return userDetails;
    }
}
class fvtSports extends Login {
    youGame(gameName) {
        return gameName;
    }
}
class otherGame extends Login {
    otherGame(otherGames) {
        return otherGames;
    }
}
let studentGamce = new otherGame('Hasnain', 'hasnainkhushii@gmail.com', 8394);
console.log(studentGamce.userLoginDetails());
console.log(studentGamce.otherGame('football'));
