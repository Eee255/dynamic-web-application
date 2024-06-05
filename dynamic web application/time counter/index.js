let hoursEl = document.getElementById("hoursInput");
let minutesEl = document.getElementById("minutesInput");
let paraEl = document.getElementById("errorMsg");
let buttonEl = document.getElementById("convertBtn");
let secondsBox = document.getElementById("timeInSeconds");
let hoursElVal = hoursEl.value;

let minutesElVal = minutesEl.value;


function convertSeconds() {
    paraEl.textContent = "";
    console.log(hoursElVal);
    console.log(minutesElVal);
    let secondsEl = (parseInt(hoursElVal) * 3600) + (parseInt(minutesElVal) * 60);
    console.log(secondsEl);
    secondsBox.classList.add("second-box");
    secondsBox.textContent = secondsEl;
}

function onClick(hoursElVal, minutesElVal) {
    if (hoursElVal === "") {
        paraEl.textContent = "Please enter a valid number of hours";
        secondsBox.textContent = "";
    } else if (minutesElVal === "") {
        paraEl.textContent = "Please enter a  valid number of Minutes";
        secondsBox.textContent = "";
    } else {
        convertSeconds();
    }
}
buttonEl.onclick = function() {
    onClick(hoursElVal, minutesElVal);
}