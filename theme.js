var mainDiv = document.getElementById("main");

mainDiv.classList = ""

function setTheme () {
    if (localStorage.getItem("theme") === "dark") {
        mainDiv.classList = "dark";
    }
    else {
        mainDiv.classList = "";
    }
};

window.onload = function () {setTheme()};