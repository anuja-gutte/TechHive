let currentSlide = 0;
const slides = document.querySelectorAll('.topic-card');  // Select all topic cards
const totalSlides = slides.length;

function moveSlide(direction) {
    const sliderWrapper = document.querySelector('.topics-grid');
    
    // Update currentSlide index based on the direction (1 = next, -1 = previous)
    currentSlide += direction;

    // Loop back to the first or last slide if we go beyond the limits
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Calculate the offset in percentage (adjust to your needs)
    const slideWidth = slides[0].offsetWidth;
    const offset = -(slideWidth + 20) * currentSlide; // Including 20px gap between cards

    // Move the slider using transform translateX
    sliderWrapper.style.transform = `translateX(${offset}px)`;
}


