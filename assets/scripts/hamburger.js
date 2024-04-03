
let menuItems = document.getElementById("menuItems")
let menuIcon = document.querySelector(".navbar__hamburger")

function toggleMenu() {
    menuItems.classList.toggle("open")
    menuIcon.classList.toggle("closed")
}

window.addEventListener("resize", function() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        menuItems.classList.remove("open");
        menuIcon.classList.remove("closed");
    }
})