const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const navlist = document.querySelector(".nav-list");
const navlink = document.querySelector(".nav-link");
const hamburgermenu = document.querySelector(".hamburger-menu");

hamburgermenu.addEventListener('click',() => {
    bar2.classList.toggle("barline2");
    bar1.classList.toggle("barline1");
    bar3.classList.toggle("barline3");

    navlist.classList.toggle("nav-link");


})