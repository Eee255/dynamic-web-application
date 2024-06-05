let timerEl = document.getElementById("timer");
let submitBtnEl = document.getElementById("submitBtn");
let textAreaEl = document.getElementById("quoteInput");
let paraEl = document.getElementById("quoteDisplay");
let errorParaEl = document.getElementById("result");
let resetEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

let counter = 0;
let uniqueNo = setInterval(function() {
    counter = counter + 1;
    timerEl.textContent = counter;
}, 1000);

function mainParaEl(data) {
    paraEl.textContent = data;
    submitBtnEl.addEventListener("click", function() {
        if (textAreaEl.value === "") {
            errorParaEl.classList.remove("d-none");
            errorParaEl.textContent = "You typed incorrect sentence";
        } else if (data === textAreaEl.value) {
            errorParaEl.textContent = "You typed in " + counter + " seconds";
            clearInterval(uniqueNo);
        } else {
            errorParaEl.textContent = "You typed incorrect sentence";
        }
    });
}

resetEl.addEventListener("click", function() {
    spinnerEl.classList.remove("d-none");
    paraEl.textContent = "";
    counter = 0;
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            mainParaEl(jsonData.content);
            spinnerEl.classList.add("d-none");
        });
});

let options = {
    method: "GET"
};
fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        mainParaEl(jsonData.content);
    });