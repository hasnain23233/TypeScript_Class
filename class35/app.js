//In this class we learn about namespace in typescript and how to use it
var userData2;
(function (userData2) {
    var addingData = /** @class */ (function () {
        function addingData(name, email) {
            this.name = name;
            this.email = email;
        }
        addingData.prototype.userData = function () {
            console.log("Your name is ".concat(this.name, " and Your email is ").concat(this.email, ". Thanks for contacting me"));
        };
        return addingData;
    }());
    userData2.addingData = addingData;
    function AdditionTwoNo(x, y) {
        return x + y;
    }
    userData2.AdditionTwoNo = AdditionTwoNo;
})(userData2 || (userData2 = {}));
// let useInformation = new userData2.addingData('Hasnain', 'hasnain@gmail.com')
// useInformation.userData()
// let AdditionTwoNo2 = userData2.AdditionTwoNo(20, 72)
// console.log(AdditionTwoNo2)
