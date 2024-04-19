const hamburgerContainer = document.querySelector("#main-nav-header");

const hamburger = document.querySelector(".main-nav-hamburger");

const links = document.querySelectorAll(".main-nav-links li");

hamburger.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("clicked");

    links.forEach((link) => {
link.classList.toggle("fade");
    })
});