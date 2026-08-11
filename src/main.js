import './style.css';

// Mobile Navbar Functionality
const mobileNavToggle = document.getElementById("mobileNavToggle");
const mobileNav = document.getElementById("mobileNav");
const mobileNavIcon = mobileNavToggle.querySelector("i");

mobileNavToggle.addEventListener("click", (e) => {
    e.preventDefault();

    mobileNav.classList.toggle("hidden");

    if (mobileNav.classList.contains("hidden")) {
        mobileNavIcon.classList.remove("fa-xmark");
        mobileNavIcon.classList.add("fa-bars");
    } else {
        mobileNavIcon.classList.remove("fa-bars");
        mobileNavIcon.classList.add("fa-xmark");
    }
});