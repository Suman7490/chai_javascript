const cart = ["shoes", "Paint", "Kurta"]
const promise = createOrder(cart);

promise
.then(function (orderId) {
    console.log(orderId)
    return orderId
})
.then(function (orderId){
    return proceedToPayment(orderId)    
})
.then(function (paymentInfo) {
     console.log(paymentInfo)
})
.catch(function (err){
    console.log(err.message)
})

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // createOrder
        // validateCart
        // orderId
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid")
            reject(err)
        }
        const orderId = "1234";
        if (orderId) {
            resolve(orderId)
        }
    })
    return pr;
}

function proceedToPayment(orderId){
    // 
    return new Promise( function (resolve, reject){
        resolve("Payment Success")
    })
}

function validateCart(cart) {
    return true;
}