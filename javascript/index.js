// Mobile Menu Toggle (Add later if needed)
document.addEventListener('DOMContentLoaded', function() {
    console.log("Website loaded!");
    // You can add a hamburger menu for mobile here later
});

// Simple Form Validation (For Contact Page)
if (window.location.pathname.includes('contact.html')) {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! We will contact you soon.');
        form.reset();
    });
}