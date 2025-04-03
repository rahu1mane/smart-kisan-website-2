document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slider img");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    // Next and Previous Buttons
    document.querySelector(".next-btn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector(".prev-btn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Auto-slide every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);

    // Show first slide on page load
    showSlide(currentIndex);
});
