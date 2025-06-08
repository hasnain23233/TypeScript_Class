var nullValue: null = null
console.log(nullValue)

var undefineValue: undefined = undefined
console.log(undefineValue)

var undefined2: undefined | string = undefined
console.log(undefined2)
console.log(typeof undefined2)

console.log(nullValue === undefined2)
console.log(nullValue == undefineValue)

var objectValue: [name: string, number: number, email: string] = [
    'jasain', 23, 'hlog' 
]
console.log(objectValue)
console.log(objectValue)