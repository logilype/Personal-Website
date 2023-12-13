document.addEventListener('DOMContentLoaded', function () {
    // Check if dark mode is stored in local storage
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    // Set the initial mode based on the stored value
    setDarkMode(isDarkMode);

    // Toggle dark mode when the user clicks on a button or any other trigger
    document.querySelector('#darkModeToggle').addEventListener('click', function () {
        // Toggle the dark mode class on the body
        document.body.classList.toggle('dark-mode');
        // Toggle the dark mode class on the nav
        document.querySelector('nav').classList.toggle('dark-mode');

        // Save the current mode to local storage
        const currentMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', currentMode);
    });
});

function setDarkMode(isDarkMode) {
    // Set the dark mode class on the body
    document.body.classList.toggle('dark-mode', isDarkMode);
    // Set the dark mode class on the nav
    document.querySelector('nav').classList.toggle('dark-mode', isDarkMode);
}
