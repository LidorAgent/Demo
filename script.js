// This function is called by the 'onload' attribute in your HTML script tag.
// Its job is to render the Turnstile widget.
function renderTurnstileWidget() {
    turnstile.render('#turnstile-container', {
        sitekey: '0x4AAAAAAB3w-j_jVkZli_hE', // <-- IMPORTANT: Make sure your Site Key is correct!
        action: 'phishing-awareness-test',
        // This 'callback' tells Turnstile which function to run upon success.
        // The name MUST match the function below exactly.
        callback: onTurnstileSuccess, 
    });
}

// This is the callback function that runs after a user successfully completes the CAPTCHA.
function onTurnstileSuccess(token) {
    // Debugging message: This will appear in your browser's console if the function runs.
    console.log("Turnstile verification successful! Token:", token);

    // Find the Turnstile widget and hide it.
    const turnstileWidget = document.getElementById('turnstile-container');
    if (turnstileWidget) {
        turnstileWidget.style.display = 'none';
    }

    // Find your main content and show it.
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.classList.remove('hidden');
        mainContent.style.display = 'block'; 
    }
}


// --- Your original code for the fake reCAPTCHA and popup ---
document.addEventListener('DOMContentLoaded', () => {
    const notARobotCheckbox = document.getElementById('not-a-robot-checkbox');
    const awarenessPopup = document.getElementById('awareness-popup');
    const closePopupButton = document.getElementById('close-popup');

    if (notARobotCheckbox) {
        notARobotCheckbox.addEventListener('click', (event) => {
            event.preventDefault(); 
            awarenessPopup.style.display = 'flex';
        });
    }

    if (closePopupButton) {
        closePopupButton.addEventListener('click', () => {
            // ... your copy-to-clipboard logic ...
        });
    }
});
