document.addEventListener('DOMContentLoaded', () => {
    // Get the main elements
    const notARobotCheckbox = document.getElementById('not-a-robot-checkbox');
    const awarenessPopup = document.getElementById('awareness-popup');
    const closePopupButton = document.getElementById('close-popup');

    // Ensure the checkbox is initially unchecked (for realism)
    notARobotCheckbox.checked = false;

    // When the "I'm not a robot" checkbox is clicked...
    notARobotCheckbox.addEventListener('click', (event) => {
        event.preventDefault(); 
        awarenessPopup.style.display = 'flex';
    });

    // When the "I Understand" button on the popup is clicked...
    closePopupButton.addEventListener('click', () => {
        const textToCopy = "do not click on anything you see";
        const originalButtonText = closePopupButton.textContent;

        // Use the modern Clipboard API to copy the text
        navigator.clipboard.writeText(textToCopy).then(() => {
            // --- SUCCESS ---
            // Give the user visual feedback that the text was copied
            closePopupButton.textContent = 'Copied!';

            // After 2 seconds, hide the popup and reset everything
            setTimeout(() => {
                awarenessPopup.style.display = 'none';
                closePopupButton.textContent = originalButtonText; // Change text back
                notARobotCheckbox.checked = false;
            }, 2000); // 2-second delay to show the "Copied!" message

        }).catch(err => {
            // --- FAILURE ---
            // If copying fails, log the error and just close the popup
            console.error('Failed to copy text: ', err);
            awarenessPopup.style.display = 'none';
            notARobotCheckbox.checked = false;
        });
    });
});
