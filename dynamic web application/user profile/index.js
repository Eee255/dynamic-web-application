let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let containerElement = document.getElementById("imgContainer");

let imageElement = document.createElement('img');
imageElement.src = profileDetails.imgSrc;
imageElement.style.margin = "10px";
containerElement.appendChild(imageElement);

let headingElement = document.createElement('h1');
headingElement.textContent = profileDetails.name;
headingElement.classList.add("profile-name");
containerElement.appendChild(headingElement);

let ageElement = document.createElement('p');
ageElement.textContent = "Age: " + profileDetails.age;
ageElement.classList.add("profile-name");
containerElement.appendChild(ageElement);
console.log(containerElement);