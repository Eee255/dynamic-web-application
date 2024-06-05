

// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let formEl = document.getElementById("bookmarkForm");
let siteNameInEl = document.getElementById("siteNameInput");
let siteUrlInEl = document.getElementById("siteUrlInput");
let requiredParaName = document.getElementById("siteNameErrMsg");
let urlErrprMsgEl = document.getElementById("siteUrlErrMsg");
let buttonEl = document.getElementById("submitBtn");
let unorderedList = document.getElementById("bookmarksList");



function unorderedFynction() {
    let valueHeadEl = siteNameInEl.value;
    let headingEl = document.createElement("li");
    headingEl.textContent = valueHeadEl;

    headingEl.classList.add("list");
    unorderedList.appendChild(headingEl);
}

function unorderedLinkFynction() {
    let valueEl = siteUrlInEl.value;
    let linkEl = document.createElement("a");
    linkEl.textContent = valueEl;
    linkEl.href = valueEl;

    unorderedList.appendChild(linkEl);
}

siteNameInEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        requiredParaName.textContent = "Required*";
    } else {
        requiredParaName.textContent = "";
        unorderedFynction();
    }
});

siteUrlInEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErrprMsgEl.textContent = "Required*";
    } else {
        urlErrprMsgEl.textContent = "";
        unorderedLinkFynction();
    }
});
buttonEl.addEventListener("click", function() {
    unorderedList.classList.toggle("d-none");
});
formEl.addEventListener("submit", function(event) {
    event.preventDefault();
});