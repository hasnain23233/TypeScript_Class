interface normalInfo {
    name: string;
    email: string;
    address: string;
    no: number;
}
interface studentInfo extends normalInfo {
    cardNo: number;
    busID: string;
}
interface techerInfo extends normalInfo {
    subjectTech: string;
}
declare function studentInforFun(name: string, email: string, address: string, number: number, cardNo: number, busID: string): studentInfo;
declare function techerInforFun(name: string, email: string, address: string, number: number, subjectTech: string): techerInfo;
