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
// async function authenticate(){
// try {
//     await register()
//     await email()
//     await login()
//     await getData()
//     await displayData()
// } catch (err) {
//     console.log(err);
//     throw err;
// }
// }
// authenticate()
// .then(() => {
//     console.log("All set");    
// })

// console.log("Other application display")
// const arr = [10, 20, 30]; 
// arr[100] = 50; 
// console.log(arr.length); 
// console.log(arr)
// let a = 0;
//  console.log("1", a++);
//  console.log("2", ++a);
//  console.log("3", a);
//  console.log("Use of Reduce:", [1, 2, 3].reduce((a, b) => a * b, 2)); 
const cart = ["shoes", "Paint", "Kurta"]

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updatedWallteBalance()
        })
    })
})


// Promise Chai
createOrder(cart)
.then(function (orderId){
   return proceedToPayment(orderId)
})
.then(function (paymentInfo){
   return showOrderSummary(paymentInfo)
})
.then(function (paymentInfo){
   return updatedWallteBalance(paymentInfo)
})

// Promise Creation
