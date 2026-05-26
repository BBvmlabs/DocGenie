const textToType = "LayrDoc generate --map-architecture";
const typeTarget = document.getElementById("typewriter");

let i = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    if (!isDeleting && i <= textToType.length) {
        // Typing
        typeTarget.innerHTML = textToType.substring(0, i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && i >= 0) {
        // Backspacing
        typeTarget.innerHTML = textToType.substring(0, i);
        i--;
        setTimeout(typeWriter, typingSpeed / 2); // Delete faster than typing
    } else {
        // Swap states
        isDeleting = !isDeleting;
        // Pause at the end before deleting, and pause before typing again
        setTimeout(typeWriter, isDeleting ? 2000 : 500);
    }
}

// Scroll Animation Observer
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Start the animation after a short delay
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    setTimeout(typeWriter, 1000);
});