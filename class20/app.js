///In This class we learn the enum in typescipt and how to use it.
var sport;
(function (sport) {
    sport["sport1"] = "Circket";
    sport["sport2"] = "football";
    sport["sport3"] = "tanis";
    sport["sport4"] = "basket ball";
})(sport || (sport = {}));
var fvtSport = sport.sport4;
console.log(fvtSport);
//using enum without asign the variable any value
var fruit;
(function (fruit) {
    fruit[fruit["fruit1"] = 0] = "fruit1";
    fruit[fruit["fruit2"] = 1] = "fruit2";
    fruit[fruit["fruit3"] = 2] = "fruit3";
    fruit[fruit["fruit4"] = 3] = "fruit4";
})(fruit || (fruit = {}));
var fvtFruit = fruit.fruit2;
console.log(fvtFruit);
