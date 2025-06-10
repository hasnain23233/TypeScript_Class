console.log('In this Class we integrate the html form with typescript')

function getInfo() {
    alert('Calling the button funtion in the typescript')
    const username = document.getElementById('username') as HTMLInputElement
    const useremail = document.getElementById('useremail') as HTMLInputElement
    const userage = document.getElementById('userage') as HTMLInputElement

    const name: string = username.value
    const email: string = useremail.value
    const age: number | string = userage.value

    try {
        console.log(name)
        console.log(email)
        console.log(age)
    } catch {
        console.log('name issue')
    }

}