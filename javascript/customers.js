const cusBoxes = document.querySelectorAll('.cusBox');
let currentIndex = 0;
 
function showSlide(index) {
    cusBoxes.forEach((box, i) => {
        box.style.opacity = '0';
        box.style.display = 'none';
        if (i === index) {
            box.style.display = 'flex';
            setTimeout(() => {
                box.style.transition = 'opacity 0.7s ease-in-out';
                box.style.opacity = '1';
            }, 50);
        }
    });
}
 
document.querySelectorAll('#LeftSwap').forEach(button => {
    button.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cusBoxes.length - 1;
        animateSlide(currentIndex);
    });
});
 
document.querySelectorAll('#RightSwap').forEach(button => {
    button.addEventListener('click', () => {
        currentIndex = (currentIndex < cusBoxes.length - 1) ? currentIndex + 1 : 0;
        animateSlide(currentIndex);
    });
});
 
function animateSlide(index) {
    const currentBox = cusBoxes[currentIndex];
    currentBox.style.transition = 'opacity 0.7s ease-in-out';
    currentBox.style.opacity = '0';
    setTimeout(() => {
        showSlide(index);
    }, 700); // Match the transition duration
}
 
// Initialize with the first slide
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});