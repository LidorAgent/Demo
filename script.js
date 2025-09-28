// This function is called by the 'onload' in the script tag in your HTML
function renderTurnstileWidget() {
    turnstile.render('#turnstile-container', {
        sitekey: '0x4AAAAAAB3w-j_jVkZli_hE', // <-- Paste your site key here!
        
        // --- THIS IS THE NEW LINE ---
        action: 'phishing-awareness-test', // This tells Cloudflare the context is critical
        
        callback: function(token) {
            // This function runs when Turnstile is successful
            onTurnstileSuccess(token);
        },
    });
}

// This function is called by the Turnstile callback when verification is successful
function onTurnstileSuccess(token) {
    const turnstileWidget = document.getElementById('turnstile-container');
    turnstileWidget.style.display = 'none';

    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden');
    mainContent.style.display = 'block'; 
}


// --- Your original code for the reCAPTCHA and popup ---
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
