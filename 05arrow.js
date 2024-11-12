const user = {
    username: "suman",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}
// console.log(user);
// user.welcomeMessage()
// user.username= "Sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//         let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()


// function chai(num1, num2){
//     console.log(num1 + num2)
// }
// chai(5,6)

// const code = (num1, num2) =>{
// return num1+num2
// }
// console.log(code(2, 5))

// const code = (num1, num2) => num1 +num2
// console.log(code(2, 5))

// const code = (num1, num2) => ({username: "suman"})
// console.log(code())

// ************** callback function ******************
// function sum(num1, num2, callback) {
//     console.log(num1 + num2)
//     callback();
// }
// sum(4,5, function(){
//     console.log("Hello Suman")
// })

// ********** Another way of callback function ******
function hello(){
   const c = "suman"
return c;
}
function one(a, b, callback){
    console.log(a + b)
    const result = callback();
    return result;
}

const result = one(5,2, hello)
console.log(result)