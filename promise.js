// Register
// Send welcome Email
// Login
// Get user data
// Display user data

// the Promise functions syncronously render the functions.



function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject("Error while registering")
            console.log("Register end")
            resolve("Registed Successfully");
        }, 2000)
    })

}

function email() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email");
            resolve();
        }, 5000)
    })

}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login");
            resolve();
        }, 3000)
    })

}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Get User Data");
            resolve();
        }, 1000)
    })

}
function displayData() {
    setTimeout(() => {
        console.log("Displya Data");
    }, 1000)
}

// ***************** Nested way of calling functions *****************
// register(function () {
//     email(function () {
//         login(function () {
//             getData(function () {
//                 displayData()
//             })
//         })
//     })
// })

// **************** Using promise method *********
// register()
//     .then(email)
//     .then(login)
//     .then(getData)
//     .then(displayData)
//     .catch((err) => {
//         console.log("error: ", err)
//     })

// ************* Using Async await method of calling functions ***********
async function authenticate(){
try {
    await register()
    await email()
    await login()
    await getData()
    await displayData()
} catch (err) {
    console.log(err);
    throw err;
}
}
authenticate()
.then(() => {
    console.log("All set");    
})

console.log("Other application display")