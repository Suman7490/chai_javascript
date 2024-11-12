let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let amorpm = document.querySelector(".amorpm")


const date = new Date();
console.log(date)
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())



function init() {
    const date = new Date();

    let hoursTime = date.getHours();
    let minutesTime = date.getMinutes();
    let secondsTime = date.getSeconds();

    if (hoursTime > 12) {
        hoursTime -= 12;
        amorpm.innerHTML = "&nbsp;PM";
    } else {
        amorpm.innerHTML = "&nbsp;AM";
    }
 
    if(hoursTime < 10){
        hoursTime = "0" + hoursTime;
    }
    if(minutesTime < 10){
        minutesTime = "0" + minutesTime;
    }
    if(secondsTime < 10){
        secondsTime = "0" + secondsTime;
    }

    hours.innerText = hoursTime;
    minutes.innerText = minutesTime;
    seconds.innerText = secondsTime;

    requestAnimationFrame(init)
}

requestAnimationFrame(init);