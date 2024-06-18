document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("showing");
    });

    // Close the mobile menu when a nav link is clicked
    document.querySelectorAll('.nav li a').forEach(item => {
        item.addEventListener('click', () => {
            if (nav.classList.contains('showing')) {
                nav.classList.remove('showing');
            }
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
