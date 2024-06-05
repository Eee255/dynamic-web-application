let inputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let dynamicContEl = document.getElementById("resultCountries");

let searchInput = "";
let countriesList = [];

function differetCountries(countries) {
    let {
        flag,
        name,
        population
    } = countries;
    // new comtainer
    let flagsContainer = document.createElement('div');
    flagsContainer.classList.add("col-12");
    flagsContainer.classList.add("col-md-6");
    flagsContainer.classList.add("country-card");
    flagsContainer.classList.add("d-flex");
    flagsContainer.classList.add("flex-row");
    dynamicContEl.appendChild(flagsContainer);

    //flags flagsContainer
    let flagContainer = document.createElement('div');
    flagsContainer.appendChild(flagContainer);

    //flag HTMLImageElement
    let imageFlag = document.createElement('img');
    imageFlag.setAttribute("src", flag);
    imageFlag.classList.add("country-flag");
    flagContainer.appendChild(imageFlag);

    //countryname flagContainer
    let countryNameCont = document.createElement('div');
    flagsContainer.appendChild(countryNameCont);

    // country name 
    let countryName = document.createElement('h1');
    countryName.textContent = name;
    countryName.classList.add("country-name");
    countryNameCont.appendChild(countryName);

    //population 
    let populationName = document.createElement('p');
    populationName.textContent = population;
    populationName.classList.add("country-population");
    countryNameCont.appendChild(populationName);
}

function allCountries(jsonData) {
    for (let countries of jsonData) {
        differetCountries(countries);
    }
}

let options = {
    method: "GET"
};
fetch("https://apis.ccbp.in/countries-data", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        allCountries(jsonData);
    });

function onChangeInput(event) {
    searchInput = event.target.value;
    offChangeInput();
}

inputEl.addEventListener("keyup", onChangeInput);