const api = "https://api.github.com/users/ritikpal1122";

async function handlePromise() {
    const data = await fetch(api);
    const apiData = await data.json();
    console.table(apiData)

}
// handlePromise(); 


function greet(greeting){
    console.log(`${greeting}, ${this.name}`)
}
const user = {name: "Suman"}

greet.call(user, "Hi")
greet.apply(user, ["Hello"])
const bindGreet = greet.bind(user, "Hey")
bindGreet()


// ***************** setTimeOut and setInterval *******************

setTimeout(() => {
    console.log("Hello Guys!")
},1000)
const interValid = setInterval(() => {
console.log("Repeated")
}, 1000)

clearInterval(interValid);

// ******************************
const obj = {a: 1, b: { c: 2 }}
const shallow = {...obj}
console.log("Object before shallow copy:", shallow)
shallow.b.c = 3
console.log("Object after shallow copy:", shallow)

const deep = JSON.parse(JSON.stringify(obj))
console.log("Object before deep copy:", deep)
deep.b.c = 4
console.log("Object after deep copy:", deep)
