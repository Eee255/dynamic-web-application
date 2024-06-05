let btnEl = document.getElementById("jokeBtn");
let paraEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");

function randomJoke(jsonData) {
    spinnerEl.classList.toggle("d-none");
    let {
        value
    } = jsonData;
    paraEl.textContent = value;
}

function onButton() {
    spinnerEl.classList.toggle("d-none");
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            randomJoke(jsonData);
        });
}
btnEl.addEventListener("click", onButton);