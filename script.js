import "nes.css/css/nes.min.css";

document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.navigation');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('change');
        navLinks.classList.toggle('display'); // This toggles the display of the navigation links
    });
});

var pix = document.getElementsByClassName("pixel");

for (var i = 0; i < pix.length; i++) {
  pix[i].style.animationDelay = Math.ceil(Math.random()*5000)+"ms";
}