// References to DOM elements
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navigation');

// Hamburguer menu
hamburger.addEventListener('click', function() {
    nav.classList.toggle('open');
    
    if (nav.classList.contains('open')) {
        hamburger.textContent = '✕';
        hamburger.setAttribute('aria-label', 'Close navigation menu');
    } else {
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-label', 'Open navigation menu');
    }
});

// Close navigation menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            hamburger.textContent = '☰';
            hamburger.setAttribute('aria-label', 'Open navigation menu');
        }
    });
});