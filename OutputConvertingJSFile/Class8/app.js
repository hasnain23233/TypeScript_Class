"use strict";
console.log('In this Class we integrate the html form with typescript');
function getInfo() {
    alert('Calling the button funtion in the typescript');
    const username = document.getElementById('username');
    const useremail = document.getElementById('useremail');
    const userage = document.getElementById('userage');
    const name = username.value;
    const email = useremail.value;
    const age = userage.value;
    try {
        console.log(name);
        console.log(email);
        console.log(age);
    }
    catch {
        console.log('name issue');
    }
}
