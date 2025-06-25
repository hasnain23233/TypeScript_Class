//In this page we learn about Promises in typescript and how to use it in programming.
function firstPro() {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            res({
                name: "hasnain",
                id: 3423,
                email: "hasnain@gmail.com"
            });
        }, 1000);
    });
}
firstPro().then(function (data) {
    console.log('promise completed ' + data.name);
    console.log(data);
});
