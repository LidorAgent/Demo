document.addEventListener('DOMContentLoaded', () => {
    // Get the main elements
    const notARobotCheckbox = document.getElementById('not-a-robot-checkbox');
    const awarenessPopup = document.getElementById('awareness-popup');
    const closePopupButton = document.getElementById('close-popup');

    // Ensure the checkbox is initially unchecked (for realism)
    notARobotCheckbox.checked = false;

    // When the "I'm not a robot" checkbox is clicked...
    notARobotCheckbox.addEventListener('click', (event) => {
        // Prevent the checkbox from actually checking/unchecking
        // We do this to ensure the popup shows instantly on the click,
        // and doesn't get visually stuck "checked" before the popup appears.
        event.preventDefault(); 
        
        // Show the awareness popup
        awarenessPopup.style.display = 'flex';
    });

    // When the "I Understand" button on the popup is clicked...
    closePopupButton.addEventListener('click', () => {
        // Hide the popup
        awarenessPopup.style.display = 'none';
        
        // Optionally, reset the checkbox after the popup is closed, 
        // though it won't matter much since the user has already seen the message.
        notARobotCheckbox.checked = false; 
    });
});
