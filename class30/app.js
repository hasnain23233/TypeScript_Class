// In this we the typegraud in typescript and how to use this. So let`s start
// using the typeOF
var nameUser = "Asif";
if (typeof nameUser === 'string') {
    console.log('the varriable you working is string data type');
}
else {
    console.log('The varriable you working is number type');
}
///using the instanceOf
var productOrder = /** @class */ (function () {
    function productOrder() {
    }
    return productOrder;
}());
var productDetails = /** @class */ (function () {
    function productDetails() {
    }
    return productDetails;
}());
var client = new productOrder();
var client2 = new productDetails();
function checkthePRoductOrder(data) {
    if (data instanceof productDetails) {
        console.log('this is a product details class I detected it');
    }
    else {
        console.log('this is a product order class I detected it');
    }
}
checkthePRoductOrder(client);
var hasnainStu = {
    name: 'hasnain',
    f_name: 'K.Muhammad'
};
var moreInformation = {
    email: 'hasnainkhushii@gmail.com',
    no: 3493239233
};
function checktheStuInformation(data) {
    if (data.name != undefined) {
        console.log(hasnainStu);
        console.log('this is a name and father name interface I detect it ');
    }
    else {
        console.log(moreInformation);
        console.log('this si a email and no interface I detect it');
    }
}
checktheStuInformation(hasnainStu);
