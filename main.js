const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_toggle");
const navClose = document.getElementById("nav-close");

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


const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills_content skills_close";
    }

    if (itemClass === "skills_content skills_close") {
            this.parentNode.className = "skills_content skills_open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification_active");
        });
        target.classList.add("qualification_active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification_active");
        });
        tab.classList.add("qualification_active");
    });
});

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        const navLink = document.querySelector(".nav_menu a[href*=" + sectionId + "]");
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add("active-link");
            } else {
                navLink.classList.remove("active-link");
            }
        }
    });
}

function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 80) {
        nav.classList.add("scroll-header");
    } else {
        nav.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 560) {
        scrollUp.classList.add("scroll-up");
    } else {
        scrollUp.classList.remove("scroll-up");
    }
}
window.addEventListener("scroll", scrollUp);

const themeButton = document.getElementById("theme-button");   
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true,
});

sr.reveal(`.home_data, .home_img, .about_data, .about_img, .services_content, .menu_content, .app_data, .app_img, .contact_data, .contact_button, .footer_content`, {
    interval: 200,
});

sr.reveal(`.skills_content, .qualification_content, .qualification_data, .portfolio_content, .footer_content`, {
    interval: 200,
});



