// ========== MOBILE MENU TOGGLE ==========
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// ========== CAROUSEL SCROLL FUNCTION ==========
function scrollCarousel(carouselId, amount) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}

// ========== CLOSE MENU WHEN CLICK OUTSIDE (Optional) ==========
document.addEventListener('click', function(event) {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    
    if (menu.classList.contains('active') && 
        !menu.contains(event.target) && 
        !toggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            const menu = document.getElementById('navMenu');
            menu.classList.remove('active');
        }
    });
});

// ========== NAVBAR SCROLL EFFECT (Optional) ==========
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,128,0.2)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,128,0.15)';
    }
});