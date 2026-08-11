document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        // Validate required fields
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        const interest = document.getElementById('contact-interest').value;

        // validate required fields
        if (!name || !email || !message || !interest) {
            e.preventDefault();
            alert('Please fill in all required fields (marked with *).');
            return;
        }

        // Validate email format
        if (!email.includes('@') || !email.includes('.')) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }
    });
});
