const arr = [5, 2, 1, 8, 10, 4]

const greaterThanFour = arr.filter((x) => x > 4)
console.log("filter function:", greaterThanFour)

const double = arr.map((x) => x * 2)
console.log("Map function:", double)

// *********** Find the sum of arr's value ***********
// ++++++++++++ with simple function +++++++++++++++
const sumOfArr = function () {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log("Sum of arr using simple function:", sumOfArr(arr))

// +++++++++++++++++ with reduce function ++++++++++
// const output = arr.reduce((acc, curr) => (acc = acc + curr), 0);
const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)

console.log("sum of arr using reduce:", output);

//  Find the greates value in the arr

const maxNum = arr.reduce(function (max, curr) { // using reduce function
    if (curr > max) {
        max = curr
    }
    return max
}, 0)

console.log("The greated value in the arr is:", maxNum); // using reduce function

const users = [
    { firstName: "Suman", lastName: "Pal", age: 20 },
    { firstName: "Shivani", lastName: "Mahura", age: 18 },
    { firstName: "Ritik", lastName: "Pal", age: 20 },
    { firstName: "Vandna", lastName: "Pal", age: 27 },
]

// Find out how many users are having same age
const similarAge = users.filter((x) => x.age == 20).map((x) => x.firstName); // using filter
console.log("The users of similar age are:", similarAge.length, similarAge)

const similarAge2 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log("greatest age in the users by reduce function:", similarAge2)
// ***************************************************

const sameAgeUser = users.reduce(function (acc, curr) {
    if (curr.age > 19) {
        acc.push(curr)
    }
    return acc
}, [])
console.log(sameAgeUser)