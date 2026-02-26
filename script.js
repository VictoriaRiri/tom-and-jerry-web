document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('chase-btn');
    const tom = document.getElementById('tom');
    const jerry = document.getElementById('jerry');
    const statusText = document.getElementById('status-text');

    btn.addEventListener('click', () => {
        // Change text
        statusText.innerText = "Jerry is getting away!";
        
        // Add animation class to Jerry
        jerry.classList.add('run-away');
        
        // Tom tries to follow
        setTimeout(() => {
            tom.style.transform = "translateX(50px)";
            statusText.innerText = "Tom is giving chase!";
        }, 300);

        // Reset after 2 seconds
        setTimeout(() => {
            jerry.classList.remove('run-away');
            tom.style.transform = "translateX(0)";
            statusText.innerText = "";
        }, 2500);
    });
});
