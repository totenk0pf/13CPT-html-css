const navbar = document.getElementById("navbar");
const navbarLink = document.querySelectorAll("#navbar ul li");
const navbarIcon = document.querySelectorAll("#navbar ul i");
const navbarText = document.querySelectorAll(".navbar-text");
const navbarForm = document.getElementById("navbar-form");
const optionContainer = document.getElementById("option-container")
const navbarToggler = document.getElementById("option-container").children[1].children[0]
const cog = document.getElementById("option-container").children[0]
const divider = document.getElementsByClassName("divider");
const paneContainer = document.getElementById("pane-container");
const siteDisplay = document.getElementById("site-display");
const darkSelector = document.getElementById("dark-selector")
const lightSelector = document.getElementById("light-selector")
var navbarStatus = true;
var optionStatus = false;

let changeSite = (id, site) => {
    clickedObj = document.getElementById(id);
    parentObj = clickedObj.parentElement;
    childObj = clickedObj.children;
    for (let i = 0; i < navbarLink.length; i++) {
        navbarLink[i].classList = "unselected";
        navbarLink[i].children[0].children[0].children[0].classList = "material-icons md-light md-inactive md-36";
        if (navbarStatus === true) {
            navbarLink[i].children[0].children[0].children[1].classList = "navbar-text unselected";
        }
        else {
            navbarLink[i].children[0].children[0].children[1].classList = "navbar-text unselected hidden removed";
        }
    }
    if (screen.width > 1280) {
        if (navbarStatus === true) {
            childObj[1].classList = "selected";
        }
    }
    parentObj.parentElement.classList = "selected";
    childObj[0].classList = "material-icons md-dark md-36"
    siteDisplay.classList.remove("fade-in");
    void siteDisplay.offsetWidth;
    siteDisplay.classList.add("fade-in");
    siteDisplay.setAttribute("src", site);
};

let dispNavbar = () => {
    if (navbarStatus === true) {
        for (let i = 0; i < navbarText.length; i++) {
            navbarText[i].classList.toggle("move-left");
            navbarText[i].classList.toggle("hidden");
            setTimeout(function () {navbarText[i].classList.toggle("removed");}, 300);
            navbarStatus = false;
        };
        navbarForm.classList.toggle("hidden");
        setTimeout(function () {navbarForm.classList.toggle("removed");}, 300);
        for (let i = 0; i < navbarIcon.length; i++) {
            navbarIcon[i].style.padding = "0"
        };
        for (let i = 0; i < divider.length; i++) {
            divider[i].classList.toggle("hidden");
            setTimeout(function () {divider[i].classList.toggle("removed");}, 300);
        };
        navbarForm.classList.toggle("move-left");
        navbarToggler.style.transform = "rotateZ(180deg)";
        navbar.style.width = "6rem";
        setTimeout(function () {optionContainer.classList.toggle("small");}, 200);
        cog.classList.toggle("cog");
    } else {
        for (let i = 0; i < navbarText.length; i++) {
            navbarText[i].classList.toggle("removed");
            navbarText[i].classList.toggle("move-left");
            setTimeout(function () {navbarText[i].classList.toggle("hidden");}, 200);
            navbarStatus = true;
        };
        for (let i = 0; i < navbarIcon.length; i++) {
            navbarIcon[i].style.padding = "0"
        };
        for (let i = 0; i < divider.length; i++) {
            divider[i].classList.toggle("removed");
            setTimeout(function () {divider[i].classList.toggle("hidden");}, 200);
        };
        navbarForm.classList.toggle("removed");
        setTimeout(function () {navbarForm.classList.toggle("hidden");}, 200);
        navbarForm.classList.toggle("move-left");
        navbarToggler.style.transform = "rotateZ(0)";
        navbar.style.width = "100%";
        setTimeout(function () {optionContainer.classList.toggle("small");}, 100);
        cog.classList.toggle("cog");
    }
}

let toggleConfig = () => {
    if (optionStatus === false) {
        paneContainer.classList.toggle("removed");
        setTimeout(function () {paneContainer.classList.toggle("hidden");}, 200);
        optionStatus = true;
    }
    else {
        paneContainer.classList.toggle("hidden");
        setTimeout(function () {paneContainer.classList.toggle("removed");}, 200);
        optionStatus = false;
    }
}

let setNavbarTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
        navbar.classList = "dark";
        document.body.classList = "dark";
    }
    else {
        navbar.classList = "";
        document.body.classList = "";
    }
};

let switchTheme = (theme) => {
    siteDisplay.classList = "";
    if (theme === "dark") {
        navbar.classList = "dark";
        localStorage.setItem("theme","dark");
        setNavbarTheme();
        siteDisplay.src = siteDisplay.src;
        darkSelector.style.border = "2px solid #ffffff";
        lightSelector.style.border = "none";
    }
    if (theme === "light") {
        navbar.classList.toggle("dark");
        localStorage.setItem("theme","light");
        setNavbarTheme();
        siteDisplay.src = siteDisplay.src;
        lightSelector.style.border = "2px solid #ffffff";
        darkSelector.style.border = "none";
    }
}

window.onload = function () {
    switchTheme(localStorage.getItem("theme"))
    setNavbarTheme();
}