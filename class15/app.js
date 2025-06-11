//In this class class we learn the funtion params in typescript and how to use it
var addingValue = function (pram1, pram2, des) {
    var grad = pram1 + pram2;
    if (grad < 60) {
        return 'D' + des;
    }
    else if (grad < 80) {
        return 'B' + des;
    }
    else if (grad < 90) {
        return 'A+' + des;
    }
};
console.log(addingValue(39, 48, ' Grade'));
