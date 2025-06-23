//In this class we learn about namespace in typescript and how to use it

namespace userData2{
    export class addingData{
        name: string
        email: string
        constructor(name: string, email: string) {
            this.name = name
            this.email = email
        }
        userData(): void{
            console.log(`Your name is ${this.name} and Your email is ${this.email}. Thanks for contacting me`)
        }
    }
    export function AdditionTwoNo(x:number , y:number):number{
        return x + y
    }
}

// let useInformation = new userData2.addingData('Hasnain', 'hasnain@gmail.com')
// useInformation.userData()
// let AdditionTwoNo2 = userData2.AdditionTwoNo(20, 72)
// console.log(AdditionTwoNo2)
