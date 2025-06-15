type infor1 = {
    name: string;
};
type infor2 = {
    no: number;
};
type infor3 = {
    email: string;
};
type allInfor = infor1 & infor2 & infor3;
declare let userStud: allInfor;
interface value1 {
    name: string;
    no: number;
    email: string;
}
interface value2 {
    address: string;
    city: string;
    cnic: boolean;
}
type AllInfo = value1 & value2;
declare let userAllInfor: AllInfo;
