let idOfLike = document.getElementById("likeIcon");
let idOfPuppy = document.getElementById("puppyImage");
let idOfButton = document.getElementById("likeButton");

function onClickLikeButton() {
    idOfPuppy.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    idOfButton.style.backgroundColor = "#0967d2";
    idOfButton.style.Color = "#cbd2d9";
    idOfLike.style.Color = "#0967d2";
}