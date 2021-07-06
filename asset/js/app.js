let menubar = document.querySelector('.drop-menu-toggle');
let navbar = document.querySelector('.hero-section header .col-md-6');
let heroSection = document.querySelector('.hero-section');

menubar.addEventListener('click',() => {
    navbar.classList.toggle('show');
    heroSection.classList.toggle('more-height');
});
