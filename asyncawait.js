// ++++++++++++ without callback +++++++++++++
// function fatchData() {
//     console.log("Fatching Data......")
//     setTimeout(() => {
//         console.log("Data Fatched!")
//     }, 2000)
// }

// fatchData()
// console.log("I run immediately after fetchData() is called.")

// +++++++++++++ with callback ++++++++++++++++++++++
// function withCallback(callback){
//     console.log("Fetching Data...")
//     setTimeout(() => {
//         console.log("Data fetched!")
//         callback();        
//     })
// }

// withCallback(() => {
//     console.log("Now we can process the data!")
// })
function withCallback(nested) {
    console.log("Data fetching...")
    nested()
}
withCallback(function () {
    console.log("callback")
})

// ********** Promise *************


const promise = new Promise((resolve, reject) => {
    const data = [1, 2, 3, 4, 5];
    setTimeout(() => {
        if (data.length == 5) {
            resolve("Task Completed successfully")
        } else {
            reject("Task failed")
        }
    }, 2000)
})

promise
    .then(result => console.log(result))
    .catch(err => console.log(err))