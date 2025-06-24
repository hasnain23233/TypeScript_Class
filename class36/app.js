function updateSportData(target, descriptor) {
    descriptor.value = function asif(x, y) {
        var output = x + y;
        return "".concat(x, " + ").concat(y, " = ").concat(output);
    };
}
var sportData = /** @class */ (function () {
    function sportData() {
    }
    // @updateSportData
    sportData.prototype.asif = function (x, y) {
        return "".concat(x + y);
    };
    return sportData;
}());
var sportman = new sportData();
console.log(sportman.asif(3, 4));
