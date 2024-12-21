// ++++++++++++++ what we write ++++++++++++++
// console.log(a)
// let a = 5;
// console.log(a)

// ++++++++++++++ what actually happens when javascript run +++++++++++++
// let a; 
// when js hoisted let varibale then, the declaration become Temoral Dead Zone and that's why the dead zone area is not accessible.
// console.log(a) // Reference Error 
let a = 5;
console.log(a)


// +++++++++++++++++ Funtion are fully hoisted +++++++++++++++++
one()
function one() {
    console.log("Hello")
}
// +++++++++++++++++ Funtion Expression are not hoisted they work like let and const +++++++++++++++++
two()
var two = () =>{
    console.log("Function Expression")
}
// the breakdown of the function express will be like:
var two; // Declaration is hoisted, but it is set to undefined.
two() // TypeError: sayHello is not a function
two = function(){
    console.log("Function Expression")
}