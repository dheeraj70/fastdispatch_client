const burgerButton = document.querySelector('.btn-burger');
const closeButton = document.querySelector('.btn-x-mark');
const navLinks = document.querySelector('.nav-links');

function toggleAbout() {
    const readmore = document.getElementById('readmore');
    readmore.style.display = 'none';
    const aboutFull = document.getElementById('full-about');
    if (aboutFull.style.display === 'none') {
        aboutFull.style.display = 'block';
    } else {
        aboutFull.style.display = 'none';
    }
}


// Open the menu
burgerButton.addEventListener('click', () => {
    navLinks.classList.add('active'); // Add active class to show menu
    document.body.classList.add('no-scroll'); // Disable scroll
});

// Close the menu with the close button
closeButton.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Remove active class to hide menu
    document.body.classList.remove('no-scroll'); // Enable scroll
});

// Close the menu when clicking outside or on a link
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !burgerButton.contains(e.target)) {
        navLinks.classList.remove('active'); // Hide menu
        document.body.classList.remove('no-scroll'); // Enable scroll
    }
});

// Close the menu when a link is clicked
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active'); // Hide menu
        document.body.classList.remove('no-scroll'); // Enable scroll
    }
});
