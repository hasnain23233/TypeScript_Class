//In this class class we learn the funtion params in typescript and how to use it

const addingValue = (pram1:number , pram2:number , des:string ) => {
    let grad = pram1 + pram2

    if (grad < 60) {
        return 'D' + des
    } else if (grad < 80) {
        return 'B' + des
    } else if (grad < 90) {
        return 'A+' + des
    }
}
console.log(addingValue(39, 48 , ' Grade'))