function changeBoxShadowColor() {
    const calculator = document.querySelector('.Calculator');
    const colors = [
        'rgba(237, 46, 13, 0.5)',
        'rgba(238, 17, 213, 0.911)',
        'rgba(181, 197, 9, 0.91)',
        'rgba(16, 180, 240, 0.91)',
          // Change this to the desired color
        // Add more colors if needed
    ];

    let index = 0;

    function updateColor() {
        index = (index + 1) % colors.length;
        const newBoxShadow = `0px 3px 15px ${colors[index]}`;
        calculator.style.boxShadow = newBoxShadow;
    }

    // Initial color change
    updateColor();

    setInterval(updateColor, 1000); // 1 second interval
}

// Call the function to start the color change
changeBoxShadowColor();
