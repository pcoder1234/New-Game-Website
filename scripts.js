function toggleMenu() {
    var navbar = document.getElementById("navbar");
    var menuBtn = document.querySelector(".menu-btn");

    // Toggle navbar display
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }

    // Toggle the button animation
    menuBtn.classList.toggle("active");
}