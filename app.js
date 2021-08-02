let navItem = document.querySelectorAll(".nav-item");
let subItems = document.querySelectorAll(".sub-items");
let images = document.querySelectorAll(".whitearrow");
let hamburger = document.querySelectorAll("i");
let two = document.querySelectorAll("nav, .register");
// let closey = document.querySelector("i:nth-of-type(2)");

for (let i=0; i<navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
        subItems[i].classList.toggle("show");
        images[i].classList.toggle("ghuumna");
    })
}


hamburger[0].addEventListener("click", function () {
    for(let i=0; i<two.length; i++) {
        two[i].classList.toggle("show");
        hamburger[0].style.display = "none";
    }
})

hamburger[1].addEventListener("click", function() {
    two[0].classList.toggle("show");
    two[1].classList.toggle("show");
    hamburger[0].style.display = "block";
})