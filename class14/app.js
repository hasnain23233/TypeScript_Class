// In this class we learn the Never datatype in TypeScript
console.log('never datatype');
function neverFun() {
    while (true) {
        console.log('this is use never in TypeScript');
    }
}
function errorFun() {
    throw new Error('This is a new error');
}
