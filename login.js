// Register
// Send welcome Email
// Login
// Get user data
// Display user data

// function waitForThreeSecond() {
//     let ms = 3000 + new Date().getTime();
//     while (new Date() < ms) { }
// }

function register(callback) {
    setTimeout(() => {
        console.log("Register end")
        callback();
    }, 2000)
}

function email() {
    setTimeout(() => {
        console.log("Email");
    }, 1000)
}

function login() {
    setTimeout(() => {
        console.log("Login");
    }, 1000)
}

function getData() {
    setTimeout(() => {
        console.log("Get User Data");
    }, 1000)
}
function displayData() {
    setTimeout(() => {
        console.log("Displya Data");
    }, 1000)
}


register( function(){
    email()
    login()
    getData()
    displayData()
})

console.log("Other application display")