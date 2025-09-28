document.addEventListener('DOMContentLoaded', () => {
    const widget = document.getElementById('turnstile-widget');
    const spinner = document.getElementById('turnstile-spinner');
    const checkmark = document.getElementById('turnstile-checkmark');
    const widgetText = document.getElementById('turnstile-text');
    const awarenessPopup = document.getElementById('awareness-popup');
    const closePopupButton = document.getElementById('close-popup');

    let isVerified = false; // Prevents re-clicking

    // When the Turnstile widget is clicked
    widget.addEventListener('click', () => {
        if (isVerified) return; // Do nothing if already clicked

        // 1. Show spinner and "Verifying..." text
        spinner.classList.remove('hidden');
        widgetText.textContent = 'Verifying...';
        widget.style.cursor = 'default'; // Change cursor to show it's processing

        // 2. Wait for a moment to simulate verification
        setTimeout(() => {
            // 3. Show success checkmark and text
            spinner.classList.add('hidden');
            checkmark.classList.remove('hidden');
            widgetText.textContent = 'Success!';
            isVerified = true;

            // 4. Wait another moment, then show the awareness popup
            setTimeout(() => {
                awarenessPopup.style.display = 'flex';
            }, 800); // 0.8 second delay before popup

        }, 1500); // 1.5 second "verification" delay
    });

    // When the "I Understand" button on the popup is clicked
    closePopupButton.addEventListener('click', () => {
        awarenessPopup.style.display = 'none';
    });
});
