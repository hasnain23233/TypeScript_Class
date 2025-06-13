///In this class we lean the Interface in the typescript and how to use it
function studentInforFun(name, email, address, number, cardNo, busID) {
    var AllStudentFuntion = {
        name: name,
        email: email,
        address: address,
        no: number,
        cardNo: cardNo,
        busID: busID
    };
    return AllStudentFuntion;
}
function techerInforFun(name, email, address, number, subjectTech) {
    var AllStudentFuntion = {
        name: name,
        email: email,
        address: address,
        no: number,
        subjectTech: subjectTech,
    };
    return AllStudentFuntion;
}
console.log(studentInforFun('hasnain', 'hasnain#gmail.com', 'gilgit', 20, 303, 'yam'));
console.log(studentInforFun('Roahil', 'Roahil#gmail.com', 'gilgit', 20, 303, 'yam'));
console.log(studentInforFun('wasim', 'wasim#gmail.com', 'gilgit', 20, 303, 'yam'));
console.log(techerInforFun('khan', 'kha#gmail.com', 'gilgit', 20, 'math'));
