

function one(){
    var a = 40;
    console.log(a)
}
one()
//console.log(a); // a is not defined
// +++++++++++++++ var as function scope +++++++++++++
function two(){
    var a = 10;
    if(true){
        var a = 20;
        console.log(a)
    }
    console.log(a)
}
two()

// +++++++++++++++ let as block scope +++++++++++++
console.log("block scope start")
function three() {
    const b = 30
    if (true) {
        const b = 10
        console.log(b)
    }
    console.log(b)
}
three()