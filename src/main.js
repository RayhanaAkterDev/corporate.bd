import './style.css';

const loadComponent = async (id, file) => {
    const element = document.getElementById(id);

    if (element) {
        const response = await fetch(file);
        element.innerHTML = await response.text();
    }
};

loadComponent("header", "/src/components/header.html");
loadComponent("footer", "/src/components/footer.html");

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