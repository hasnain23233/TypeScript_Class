// In this class we learn the Getter and Setter in TypeScript and how to use it in classes.

class SportPlay {
    private _fvtSportName: string = 'football';

    get YouFvtGame(): string {
        return this._fvtSportName;
    }

    set changeTheFvt(changeV: string) {
        if (changeV.length > 3) {
            this._fvtSportName = changeV; 
        } else {
            console.log("Sport name should be longer than 3 characters.");
        }
    }
}

let WasimSport = new SportPlay();
WasimSport.changeTheFvt = 'ten'; 

console.log(WasimSport.YouFvtGame);
