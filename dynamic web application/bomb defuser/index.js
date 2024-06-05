let inputValEl = document.getElementById("defuser");
let paraEl = document.getElementById("timer");
let counter = 10;

let uniqueId = setInterval(function() {
    paraEl.textContent = counter;
    if (counter === 0) {
        clearInterval(uniqueId);
        paraEl.textContent = "Boom";
    } else {
        counter = counter - 1;
        paraEl.textContent = counter;
    }
}, 1000);

inputValEl.addEventListener("keydown", function(event) {
    let inputVal = inputValEl.value;
    if (event.key === "Enter" && inputVal === "defuse" && counter !== 0) {
        paraEl.textContent = "You did it !!!";
    }
});