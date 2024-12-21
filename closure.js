function a() {
    var num = 7;
    function b() {
        console.log(num)
    }
    return b;
}
var z = a();
console.log(z)
z();

// Closure with a perameter
function outer(b) {
    function inner() {
        console.log("Closure with a perameter:", e, b)
    }
    let e = 10;
    return inner;
}
outer("I am a paremater of outer function")();

// Closure with nested way
function outest(){
    var outestVar = 10;
    function outer(permater){
        let outerVar = 9;
        function inner(){
            console.log(outestVar, permater, outerVar,)
        }
        return inner;
    }
    return outer;
}
const close = outest() ("I am the permater passed in outer function")
close()


// SetTimeout + closure
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function y(i) {
//             setTimeout(function () {
//                 console.log("Closure with setTimeout", i)
//             }, 1000)
//         }
//         y(i)
//     }
// }
// x()