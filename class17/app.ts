///In this class we lean the Interface in the typescript and how to use it

interface normalInfo {
    name: string, 
    email: string,
    address: string,
    no: number,
}

interface studentInfo extends normalInfo {
    cardNo: number
    busID: string
}

interface techerInfo extends normalInfo{
    subjectTech: string
}

function studentInforFun(name:string , email:string , address: string , number: number, cardNo: number , busID:string) {
    let AllStudentFuntion: studentInfo = {
        name: name,
        email: email,
        address: address,
        no: number,
        cardNo: cardNo,
        busID: busID
    }
    return AllStudentFuntion
}
function techerInforFun(name:string , email:string , address: string , number: number, subjectTech: string) {
    let AllStudentFuntion: techerInfo = {
        name: name,
        email: email,
        address: address,
        no: number,
        subjectTech: subjectTech,
    }
    return AllStudentFuntion
}
console.log(studentInforFun('hasnain' , 'hasnain#gmail.com' , 'gilgit' , 20 , 303 , 'yam'))
console.log(studentInforFun('Roahil' , 'Roahil#gmail.com' , 'gilgit' , 20 , 303 , 'yam'))
console.log(studentInforFun('wasim' , 'wasim#gmail.com' , 'gilgit' , 20 , 303 , 'yam'))
console.log(techerInforFun('khan' , 'kha#gmail.com' , 'gilgit' , 20 , 'math' , ))