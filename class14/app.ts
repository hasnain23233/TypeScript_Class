// In this class we learn the Never datatype in TypeScript

console.log('never datatype');

function neverFun(): never {
    while (true) {
        console.log('this is use never in TypeScript');
    }
}

function errorFun(): never {
    throw new Error('This is a new error');
}
