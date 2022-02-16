// Timing function
let minTimer= 0;  // minutes
let secTimer= 0;  // seconds
let minTimerCon = document.querySelector(".minTimerCon");       // Access to the dom
let secTimerCon = document.querySelector(".secTimerCon");       // Access to the dom
let totalTimer = 0; // The total time

let clearTimer = Object;

let restart = document.querySelector(".restart")
let reset_btn = document.querySelector(".reset_btn")
// Encapsulation time function
function Timer() {
    // Initialize data
    minTimer = 0;
    secTimer = 0;
    totalTimer = 0;
    clearTimer =  setInterval(() => {
        secTimer++;
        totalTimer++;
        if(secTimer == 60) {
            minTimer = minTimer + 1;
            secTimer = 0
        }
        minTimerCon.innerHTML = minTimer;
        secTimerCon.innerHTML = secTimer;
        if(totalTimer >= 299) {
            clearInterval(clearTimer)
            restart.style.display = 'block';
        }
    },1000)
}
// Mouse movement event
document.onmousemove = function () {
    totalTimer = 0;
}

// Click on the reset
reset_btn.onclick = function () {
    location.reload()
}
