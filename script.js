// Set target date to January 1, 3000
const targetDate = new Date('January 1, 3000 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate time units
    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the display with padded numbers
    document.getElementById('years').textContent = String(years).padStart(3, '0');
    document.getElementById('days').textContent = String(days).padStart(3, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Email form handling
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('emailInput').value;
    const confirmMessage = document.getElementById('confirmMessage');

    // Store email in localStorage (in production, you'd send this to a server)
    let emails = JSON.parse(localStorage.getItem('albumEmails') || '[]');

    if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem('albumEmails', JSON.stringify(emails));
        confirmMessage.textContent = 'Thank you! You\'re on the list.';
        confirmMessage.style.color = '#7a7a7a';
    } else {
        confirmMessage.textContent = 'This email is already registered.';
        confirmMessage.style.color = '#9a7a5a';
    }

    // Clear input
    document.getElementById('emailInput').value = '';

    // Clear message after 5 seconds
    setTimeout(() => {
        confirmMessage.textContent = '';
    }, 5000);
});

