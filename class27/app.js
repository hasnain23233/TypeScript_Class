// In this class we learn the Getter and Setter in TypeScript and how to use it in classes.
var SportPlay = /** @class */ (function () {
    function SportPlay() {
        this._fvtSportName = 'football';
    }
    Object.defineProperty(SportPlay.prototype, "YouFvtGame", {
        get: function () {
            return this._fvtSportName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SportPlay.prototype, "changeTheFvt", {
        set: function (changeV) {
            if (changeV.length > 3) {
                this._fvtSportName = changeV;
            }
            else {
                console.log("Sport name should be longer than 3 characters.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return SportPlay;
}());
var WasimSport = new SportPlay();
WasimSport.changeTheFvt = 'ten';
console.log(WasimSport.YouFvtGame);
