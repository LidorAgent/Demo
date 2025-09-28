body {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.captcha-container {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 15px;
    width: 400px;
}

.captcha-header {
    background-color: #4285f4;
    color: white;
    padding: 20px;
    font-size: 1.2rem;
    border-radius: 2px;
}

.captcha-subject {
    font-weight: bold;
    font-size: 2rem;
    display: block;
    margin-top: 10px;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 15px 0;
}

.grid-item {
    cursor: pointer;
    position: relative;
}

.grid-item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 2px;
}

.grid-item::after {
    content: '✔';
    position: absolute;
    top: 5px;
    left: 5px;
    color: white;
    background-color: #4285f4;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    transform: scale(0);
    transition: transform 0.2s;
}

.grid-item.selected::after {
    transform: scale(1);
}

.captcha-button {
    background-color: #4285f4;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
}

.captcha-button:hover {
    background-color: #357ae8;
}

/* Styles for the popup (remains the same) */
.popup-hidden {
    display: none;
}

#alert-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: #fff;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    text-align: center;
}

.popup-content h2 {
    color: #d93025;
}

.popup-content button {
    background-color: #1a73e8;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    font-size: 16px;
}
