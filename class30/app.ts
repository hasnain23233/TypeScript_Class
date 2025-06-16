// In this we the typegraud in typescript and how to use this. So let`s start


// using the typeOF
let nameUser: string | number = "Asif"
if (typeof nameUser === 'string') {
    console.log('the varriable you working is string data type')
} else {
    console.log('The varriable you working is number type')
}

///using the instanceOf

class productOrder { }
class productDetails { }

let client = new productOrder()
let client2 = new productDetails()

function checkthePRoductOrder(data: productDetails | productOrder) {
    if (data instanceof productDetails) {
        console.log('this is a product details class I detected it')
    } else {
        console.log('this is a product order class I detected it')
    }
}
checkthePRoductOrder(client)

///using the custom type

interface studentInfor{
    name: string,
    f_name:string
}
interface moreInfor{
    email: string,
    no:number
}

let hasnainStu: studentInfor | moreInfor ={
    name: 'hasnain',
    f_name: 'K.Muhammad'
}
let moreInformation: studentInfor | moreInfor = {
    email: 'hasnainkhushii@gmail.com',
    no: 3493239233
}

function checktheStuInformation(data : studentInfor | moreInfor): void{
    if ((data as studentInfor).name != undefined) {
        console.log(hasnainStu)
        console.log('this is a name and father name interface I detect it ')
    } else {
        console.log(moreInformation)
        console.log('this si a email and no interface I detect it')
    }
}
checktheStuInformation(hasnainStu)