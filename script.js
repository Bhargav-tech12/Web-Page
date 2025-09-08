// Simple contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    document.getElementById('formResponse').textContent = `Thanks, ${name}! I will reply to ${email} soon.`;
    this.reset(); // Clear the form
});
