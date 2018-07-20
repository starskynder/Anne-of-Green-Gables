// Select hamburger menu
const menu = document.querySelector(".js-menu");

// Select nav tag
const nav = document.querySelector("nav");

// Select navigation ul
const navigation = document.querySelector(".nav");

// Select navigation items
const navItems = document.querySelectorAll(".nav__item");

// Select hamburger's components
const hamburger = document.querySelectorAll(".nav__hamburger");

//Select hero text
const heroTxt = document.querySelector(".hero__txt");

//Listen for click on hamburger menu
menu.addEventListener("click", openNav);


//If hamburger manu is clicked toggle full navigation and transform hamburger 
// icon in a "close" cross, also toggle hero text
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