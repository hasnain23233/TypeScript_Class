///In this class we learn the interface in classes. How to use interface in class. So let`s start
var Form = /** @class */ (function () {
    function Form(name, bithday, email) {
        this.username = name;
        this.birthDay = bithday;
        this.email = email;
    }
    Form.prototype.addingFullUserDetail = function () {
        var datails = {
            username: this.username,
            userEmail: this.email,
            bithday: this.birthDay
        };
        return datails;
    };
    return Form;
}());
var userDatails = new Form('hasnain', '23 april 2005', 'hasnainkhushii@gmail.com');
console.log(userDatails.birthDay);
console.log(userDatails.addingFullUserDetail());
