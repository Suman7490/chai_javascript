// Register
// Send welcome Email
// Login
// Get user data
// Display user data



function register(callback) {
    setTimeout(() => {
        console.log("Register end")
        callback();
    }, 2000)
}

function email(callback) {
    setTimeout(() => {
        console.log("Email");
        callback();
    }, 5000)
}

function login(callback) {
    setTimeout(() => {
        console.log("Login");
        callback();
    }, 3000)
}

function getData(callback) {
    setTimeout(() => {
        console.log("Get User Data");
        callback();
    }, 1000)
}
function displayData() {
    setTimeout(() => {
        console.log("Displya Data");
    }, 1000)
}


register(function () {
    email(function () {
        login(function () {
            getData(function () {
                displayData()
            })

        })

    })

})

console.log("Other application display")