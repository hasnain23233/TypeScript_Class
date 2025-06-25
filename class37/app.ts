//In this page we learn about Promises in typescript and how to use it in programming.

type resolvetype = {
    name: string,
    id: number, 
    email:string
}

function firstPro():Promise<resolvetype> {
    return new Promise((res , rej) => {
        setTimeout(() => {
            res({
                name: "hasnain",
                id: 3423,
                email: "hasnain@gmail.com"
            })
        }, 1000);
    })
}
firstPro().then((data:resolvetype) => {
    console.log('promise completed ' + data.name)
    console.log(data)
})