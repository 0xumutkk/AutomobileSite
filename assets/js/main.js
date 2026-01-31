// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

// Close menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// WhatsApp Button Injection
// WhatsApp Button Injection
(function () {
    const whatsappLink = document.createElement('a');
    whatsappLink.href = 'https://wa.me/491731837466';
    whatsappLink.className = 'whatsapp-float';
    whatsappLink.target = '_blank';
    whatsappLink.innerHTML = `
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white">
            <path d="M16 0a16 16 0 0 0-16 16 16 16 0 0 0 2.292 8.214L0 32l8.038-2.109A16 16 0 1 0 16 0zm0 29.333a13.25 13.25 0 0 1-6.79-1.875l-.488-.288-5.06 1.328 1.35-4.93-.316-.503A13.292 13.292 0 1 1 16 29.333zM22.95 20.2c-.382-.191-2.261-1.115-2.612-1.24-.35-.128-.606-.191-.861.191s-.988 1.241-1.21 1.496-.446.287-.828.096a10.435 10.435 0 0 1-3.076-1.9 11.5 11.5 0 0 1-2.126-2.646c-.223-.382-.024-.588.167-.778.172-.171.382-.446.574-.669s.255-.382.382-.637a.711.711 0 0 0-.032-.669c-.096-.191-.86-2.071-1.179-2.835-.311-.745-.623-.644-.86-.656h-.733a1.408 1.408 0 0 0-1.02.478 4.288 4.288 0 0 0-1.338 3.186 7.448 7.448 0 0 0 1.559 3.949c.191.255 3.011 4.594 7.294 6.44 1.02.44 1.815.701 2.435.898a5.832 5.832 0 0 0 2.684.168c.732-.108 2.261-.924 2.58-1.815.318-.892.318-1.656.223-1.815s-.35-.255-.733-.446z"/>
        </svg>
    `;
    document.body.appendChild(whatsappLink);
    console.log('WhatsApp button injected');
})();
