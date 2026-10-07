/* ==========================================
   Portfolio Website JavaScript
========================================== */

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Dark / Light Theme
    ========================== */

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light-theme");

            const icon = themeToggle.querySelector("i");

            if (document.body.classList.contains("light-theme")) {

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

            } else {

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

            }

        });

    }

    /* ==========================
       Smooth Scrolling
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       Active Navbar
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    /* ==========================
       Scroll Reveal
    ========================== */

    const revealItems = document.querySelectorAll(

        ".card, .project, .timeline-item, .achievement-card, .certificate-card"

    );

    revealItems.forEach(item => {

        item.classList.add("fade-up");

    });

    function reveal() {

        revealItems.forEach(item => {

            const windowHeight = window.innerHeight;

            const elementTop = item.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {

                item.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /* ==========================
       Scroll To Top Button
    ========================== */

    const scrollBtn = document.querySelector(".scrollTop");

    if (scrollBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                scrollBtn.classList.add("active");

            } else {

                scrollBtn.classList.remove("active");

            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================
       Footer Year
    ========================== */

    const footer = document.querySelector("footer p:last-child");

    if (footer) {

        footer.innerHTML =

            `© ${new Date().getFullYear()} Srinivas Jammoju. All Rights Reserved.`;

    }

});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if(navLinks.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

    }else{

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    }

});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.querySelector("i").classList.remove("fa-times");
        menuToggle.querySelector("i").classList.add("fa-bars");

    });

});

const contactForm = document.getElementById("contactForm");
const submitButton = contactForm.querySelector("button");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    submitButton.textContent = "✓ Successfully Submitted";

    contactForm.reset();

});