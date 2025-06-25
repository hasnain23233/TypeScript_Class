///In this class we learn how to handle API in typescript. So let`s go
type apiData = {
    userId: number,
    id: number,
    title: string,
    completed:boolean
    
}

async function apiCallHandling():Promise<apiData> {
    const url = await fetch('https://jsonplaceholder.typicode.com/todos/2')
    const data = await url.json()
    // console.log(data)
    return data
}
apiCallHandling().then((data) => {
    console.log(data)
})