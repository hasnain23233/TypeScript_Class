console.log('In this Class we integrate the html form with typescript');
function getInfo() {
    alert('Calling the button funtion in the typescript');
    var username = document.getElementById('username');
    var useremail = document.getElementById('useremail');
    var userage = document.getElementById('userage');
    var name = username.value;
    var email = useremail.value;
    var age = userage.value;
    try {
        console.log(name);
        console.log(email);
        console.log(age);
    }
    catch (_a) {
        console.log('name issue');
    }
}
