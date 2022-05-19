const dropdownBtn = document.querySelector('.nav-link.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const navbarTogglerBtn = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-first-col');
const leftArrowBtn = document.querySelector('.stylist-left-arrow');
const rightArrowBtn = document.querySelector('.stylist-right-arrow');
const navbarIcons = document.querySelector('.navbar-icons');
const collapseNavbar = document.querySelector('.collapse');

window.addEventListener('resize', () => {
    if(document.body.clientWidth > 991) {
        dropdownMenu.classList.remove('active');
        collapseNavbar.classList.remove('mobile-active');
        collapseNavbar.classList.remove('mobile-active');
    }
})

dropdownBtn.addEventListener('click' , () => {
    dropdownMenu.classList.toggle('active');
})

navbarTogglerBtn.addEventListener('click', () => {
    // navbarNav.classList.toggle('mobile-active');
    // navbarIcons.classList.toggle('mobile-active');
    collapseNavbar.classList.toggle('mobile-active');
})

leftArrowBtn.addEventListener('click', () => {
    cosnole.log('click');
})

rightArrowBtn.addEventListener('click', () => {
    cosnole.log('click');
})