type information1 = {
    name: string;
    id: number;
};
type information2 = {
    address: string;
    city: string;
};
type AllInformation = information1 & information2;
declare const studentUser: AllInformation;
type information3 = {
    y: number;
};
type information4 = {
    x: number;
};
type AllInformationStud = information3 | information4;
declare let userData234: AllInformationStud;
