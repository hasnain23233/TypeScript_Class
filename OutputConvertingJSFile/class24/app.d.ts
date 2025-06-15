declare class Login {
    guyak: string;
    email2: string;
    phone3: number;
    constructor(userName: string, userEmail: string, userPhone: number);
    userLoginDetails(): {
        userName: string;
        userEmail: string;
        userPhoneNumber: number;
    };
}
declare class fvtSports extends Login {
    youGame(gameName: string): string;
}
declare class otherGame extends Login {
    otherGame(otherGames: string): string;
}
declare let studentGamce: otherGame;
