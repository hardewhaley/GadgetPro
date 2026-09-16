const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        this.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        this.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});