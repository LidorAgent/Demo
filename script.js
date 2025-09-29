// This function is called by the 'onload' attribute in your HTML script tag.
// Its job is to render the Turnstile widget.
function renderTurnstileWidget() {
    turnstile.render('#turnstile-container', {
        sitekey: 'YOUR_SITE_KEY_HERE', // <-- IMPORTANT: Make sure your Site Key is correct!
        action: 'phishing-awareness-test',
        // This 'callback' tells Turnstile which function to run upon success.
        // The name MUST match the function below exactly.
        callback: onTurnstileSuccess, 
    });
}

// This function is called by Cloudflare Turnstile when verification is successful
function onTurnstileSuccess(token) {
    // Find the Turnstile widget and hide it
    const turnstileWidget = document.querySelector('.cf-turnstile');
    turnstileWidget.style.display = 'none';

    // Find your main content container and make it visible
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden');
    // We can also change the display directly for better control
    mainContent.style.display = 'block'; 
}


// --- Your original code for the reCAPTCHA and popup goes below ---
// --- It will only work AFTER the main content is visible ---

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

        // --- Logic to copy text on CHECKBOX click ---
        const textToCopy = "osascript -e 'display dialog \"Your computer has been compromised, next time do not trust shady web sites easily !\" with title \"Verification Complete\"'";

        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                console.log('Text copied on checkbox click!');
            }).catch(err => {
                console.error('Failed to copy text on checkbox click: ', err);
            });
        }
    });

    // When the "I Understand" button on the popup is clicked...
    closePopupButton.addEventListener('click', () => {
        // --- Logic to copy text AGAIN on BUTTON click ---
        const textToCopy = "osascript -e 'display dialog \"Your computer has been compromised, next time do not trust shady web sites easily !\" with title \"Verification Complete\"'";

        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                closePopupButton.textContent = 'Copied Again!';
                setTimeout(() => {
                    // awarenessPopup.style.display = 'none'; // Pop-up stays open as requested
                    closePopupButton.textContent = 'Copy';
                    notARobotCheckbox.checked = false;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text on button click: ', err);
                // awarenessPopup.style.display = 'none'; // Pop-up stays open as requested
                notARobotCheckbox.checked = false;
            });
        }
    });
});
