// Scroll indicator visibility
document.addEventListener("scroll", function () {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = "0";
        scrollIndicator.style.visibility = "hidden";
    } else {
        scrollIndicator.style.opacity = "1";
        scrollIndicator.style.visibility = "visible";
    }
});

// Initialize AOS (if you're using it)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        anchorPlacement: "top-bottom",
    });
});
