const menu = document.querySelector(".js-menu");

const nav = document.querySelector("nav");
const navigation = document.querySelector(".nav");

const navItems = document.querySelectorAll(".nav__item");

const hamburger = document.querySelectorAll(".nav__hamburger");

const heroTxt = document.querySelector(".hero__txt");

menu.addEventListener("click", openNav);

function openNav() {
    menu.classList.toggle("nav__menu--variant");
    heroTxt.classList.toggle("js--hidden");
    nav.classList.toggle("js-nav");
    navigation.classList.toggle("nav--flex");
    hamburger.forEach((v) => {
        v.classList.toggle("nav__hamburger--variant");
    });


    navItems.forEach((v) => {
        v.classList.toggle("nav__item--hidden");
    });
}