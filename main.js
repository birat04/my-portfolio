
const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_toggle");

const navClose = document.getElementById("nav)close");





if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}


if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}



const navLinks = document.querySelectorAll(".nav_link");

function linkAction() {
    navLinks.forEach((link) => link.classList.remove("active-link"));
    this.classList.add("active-link");
}

navLinks.forEach((link) => link.addEventListener("click", linkAction));

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
