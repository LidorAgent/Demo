document.addEventListener('DOMContentLoaded', () => {
    // Get the elements from the HTML
    const phishingLink = document.getElementById('phishing-link');
    const alertPopup = document.getElementById('alert-popup');
    const closePopupButton = document.getElementById('close-popup');

    // Hide the popup initially
    alertPopup.classList.add('popup-hidden');

    // When the fake link is clicked...
    phishingLink.addEventListener('click', (event) => {
        // Prevent the link from trying to go to a new page
        event.preventDefault(); 
        
        // Show the popup
        alertPopup.style.display = 'flex';
    });

    // When the "I Understand" button is clicked...
    closePopupButton.addEventListener('click', () => {
        // Hide the popup
        alertPopup.style.display = 'none';
    });
});