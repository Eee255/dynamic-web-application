let newPasswordEl = document.getElementById("newPassword");
let paraEl = document.getElementById("newPasswordErrMsg");
let passwordEl = newPasswordEl.value;
let updatePasswordEl = document.getElementById("confirmPassword");
let paraEl1 = document.getElementById("confirmPasswordErrMsg");
let updateVal = updatePasswordEl.value;

let buttonEl = document.getElementById("updatePasswordForm");

let validNewPassword = function() {
    if (passwordEl === "") {
        paraEl.textContent = "Reqired*";
    } else {
        paraEl.textContent = "";
    }
}
let validNewUpdate = function() {
    if (updateVal !== passwordEl) {
        paraEl1.textContent = "Password must be same";
    } else {
        paraEl1.textContent = "";
    }
}
newPasswordEl.addEventListener("blur", validNewPassword);

updatePasswordEl.addEventListener("blur", validNewUpdate);

buttonEl.addEventListener("submit", function(event) {
    event.preventDefault();
});