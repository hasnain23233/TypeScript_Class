//In this class we learn the inheritance in typescript and how to use it with the classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Login = /** @class */ (function () {
    function Login(userName, userEmail, userPhone) {
        this.guyak = userName;
        this.email2 = userEmail;
        this.phone3 = userPhone;
    }
    Login.prototype.userLoginDetails = function () {
        var userDetails = {
            userName: this.guyak,
            userEmail: this.email2,
            userPhoneNumber: this.phone3
        };
        return userDetails;
    };
    return Login;
}());
var fvtSports = /** @class */ (function (_super) {
    __extends(fvtSports, _super);
    function fvtSports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    fvtSports.prototype.youGame = function (gameName) {
        return gameName;
    };
    return fvtSports;
}(Login));
var otherGame = /** @class */ (function (_super) {
    __extends(otherGame, _super);
    function otherGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    otherGame.prototype.otherGame = function (otherGames) {
        return otherGames;
    };
    return otherGame;
}(Login));
var studentGamce = new otherGame('Hasnain', 'hasnainkhushii@gmail.com', 8394);
console.log(studentGamce.userLoginDetails());
console.log(studentGamce.otherGame('football'));
