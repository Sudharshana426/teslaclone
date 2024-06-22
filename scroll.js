// Get all sections
const sections = document.querySelectorAll('section');

// Set the initial active section
let activeSection = 0;

// Add event listener for scroll
window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollPosition = window.pageYOffset;

    // Loop through sections
    for (let i = 0; i < sections.length; i++) {
        // Check if the scroll position is within the section
        if (scrollPosition >= sections[i].offsetTop && scrollPosition <= sections[i].offsetTop + sections[i].offsetHeight) {
            // Update the active section
            activeSection = i;
        }
    }

    // Update the page based on the active section
    updatePage(activeSection);
});

// Function to update the page
function updatePage(activeSection) {
    // Update the active section class
    sections.forEach((section, index) => {
        if (index === activeSection) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Update the page content based on the active section
    // For example, you can hide or show elements based on the active section
    // ...
}