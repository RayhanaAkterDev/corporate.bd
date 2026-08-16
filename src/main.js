import './style.css';

const loadComponent = async (id, file) => {
    const element = document.getElementById(id);

    if (element) {
        const response = await fetch(file);
        element.innerHTML = await response.text();
    }
};

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");

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

// ==================================================


const signupForm = document.getElementById("signupForm");
const nameErr = document.getElementById("nameError");
const emailErr = document.getElementById("emailError");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(signupForm);

    const uname = formData.get("name");
    const email = formData.get("email");
    const gender = formData.get("gender");
    const skill = formData.getAll("skill");
    const password = formData.get("password");

    // Validation for name field
    if (!uname) {
        nameErr.textContent = "Please enter your name";
    } else if (!/^[A-Za-z.\-\s]+$/.test(uname)) {
        nameErr.textContent = "Invalid name";
    } else {
        nameErr.textContent = "";
    }

    // Validation for email field
    if (!email) {
        emailErr.textContent = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailErr.textContent = "Invalid email";
    } else {
        emailErr.textContent = "";
    }
});


// ==================================================
/* =========================================================
   BLOG FILTER & SEARCH
========================================================= */

const categoryButtons = document.querySelectorAll(".category-btn");
const blogCards = document.querySelectorAll(".blog-card");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

let currentCategory = "all";

function filterBlogs() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    blogCards.forEach((card) => {
        const category = card.dataset.category;
        const content = card.textContent.toLowerCase();

        const matchesCategory =
            currentCategory === "all" ||
            category === currentCategory;

        const matchesSearch =
            searchTerm === "" ||
            content.includes(searchTerm);

        if (matchesCategory && matchesSearch) {
            card.classList.remove("hidden");
            visibleCount++;
        } else {
            card.classList.add("hidden");
        }
    });

    if (visibleCount === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
    }
}


/* Category buttons */

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove active state from all buttons
        categoryButtons.forEach((btn) => {
            btn.classList.remove("bg-slate-900", "text-white");
            btn.classList.add(
                "border",
                "border-slate-200",
                "text-slate-500"
            );
        });

        // Add active state to clicked button
        button.classList.remove(
            "border",
            "border-slate-200",
            "text-slate-500"
        );

        button.classList.add("bg-slate-900", "text-white");

        // Update selected category
        currentCategory = button.dataset.category;

        // Apply filter
        filterBlogs();
    });
});


/* Search */

searchInput.addEventListener("input", filterBlogs);


/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const button = newsletterForm.querySelector("button");

    button.textContent = "Subscribed ✓";

    newsletterForm.reset();

    // Restore button after a few seconds
    setTimeout(() => {
        button.textContent = "Subscribe →";
    }, 3000);
});