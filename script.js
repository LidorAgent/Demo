document.addEventListener('DOMContentLoaded', () => {
    // Get the main elements
    const notARobotCheckbox = document.getElementById('not-a-robot-checkbox');
    const awarenessPopup = document.getElementById('awareness-popup');
    const closePopupButton = document.getElementById('close-popup');

    // Ensure the checkbox is initially unchecked
    notARobotCheckbox.checked = false;

    // When the "I'm not a robot" checkbox is clicked...
    notARobotCheckbox.addEventListener('click', (event) => {
        event.preventDefault(); 
        awarenessPopup.style.display = 'flex';
    });

    // When the "I Understand" button on the popup is clicked...
    closePopupButton.addEventListener('click', () => {
        const textToCopy = "do not click on anything you see";

        // Check if the Clipboard API is available
        if (!navigator.clipboard) {
            alert("Clipboard API not available on this browser.");
            return;
        }

        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(textToCopy).then(() => {
            // --- SUCCESS ---
            // If the browser thinks it worked, it will show this alert.
            alert("Success! Text should be in your clipboard.");
            
            closePopupButton.textContent = 'Copied!';
            setTimeout(() => {
                awarenessPopup.style.display = 'none';
                closePopupButton.textContent = 'I Understand';
                notARobotCheckbox.checked = false;
            }, 2000);

        }).catch(err => {
            // --- FAILURE ---
            // If the browser blocks the action, it will show this alert with the error.
            alert("Copy failed. Error: " + err);
            console.error('Failed to copy text: ', err); // Also log error for developers

            // Close the popup anyway
            awarenessPopup.style.display = 'none';
            notARobotCheckbox.checked = false;
        });
    });
});
