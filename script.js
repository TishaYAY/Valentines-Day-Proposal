function askValentine() {
    // Flip the paper open
    document.querySelector('.paper').style.transform = 'perspective(500px) rotateX(180deg)';
    document.querySelector('.fold').style.transform = 'rotateX(0deg)';
    
    // Show the popup after a delay to simulate unfolding
    setTimeout(() => {
        document.getElementById('popup').style.display = 'flex';
    }, 500);
}

function closePopup() {
    // Close the popup
    document.getElementById('popup').style.display = 'none';
}
