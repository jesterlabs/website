document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.navigation');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('change');
        navLinks.classList.toggle('display'); // This toggles the display of the navigation links
    });
});
