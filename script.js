document.addEventListener('DOMContentLoaded', () => {
    // Get the main elements
    const verifyButton = document.getElementById('verify-button');
    const alertPopup = document.getElementById('alert-popup');
    const closePopupButton = document.getElementById('close-popup');
    const imageItems = document.querySelectorAll('.grid-item');

    // Hide the popup initially
    alertPopup.classList.add('popup-hidden');

    // Add click event to each image to make it look interactive
    imageItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
        });
    });

    // When the "Verify" button is clicked...
    verifyButton.addEventListener('click', (event) => {
        // Prevent any default button action
        event.preventDefault(); 
        
        // Show the awareness popup
        alertPopup.style.display = 'flex';
    });

    // When the "I Understand" button on the popup is clicked...
    closePopupButton.addEventListener('click', () => {
        // Hide the popup
        alertPopup.style.display = 'none';
    });
});
