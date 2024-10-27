// Toggle untuk Menu Navigasi Mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Fungsi untuk toggle menu
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});

// Smooth Scroll ke Section yang Dipilih
const smoothScroll = (target, duration) => {
    const targetPosition = document.querySelector(target).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
};

// Event Listener untuk Menu Navigasi dengan Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, 1000);
    });
});

// Animasi saat halaman di-scroll untuk mengaktifkan elemen
window.addEventListener('scroll', function () {
    const revealElements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});
