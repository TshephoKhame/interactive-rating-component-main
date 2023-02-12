// JavaScript source code
var rating = "";
var prev = "";
function SelectRating(id) {

    prev = document.getElementsByClassName("active");
    if (prev.length != 0) { prev[0].classList.remove("active"); }

    rating = document.getElementById("rating-" + id);
    rating.classList.add("active");
    rating = rating.innerHTML;
}

function Submit() {
    document.getElementById("card__rating").innerHTML = rating;
    prev = document.getElementsByClassName("card");
    for (var i = 0; i < prev.length; i++) {
        if (prev[i].classList.contains("card__submitted") == false) {
            prev[i].classList.add("card__submitted");
        } else { prev[i].classList.remove("card__submitted"); prev[i].classList.add("card__center"); }
    }
}

