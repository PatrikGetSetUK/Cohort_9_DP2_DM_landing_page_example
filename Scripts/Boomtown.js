// Selecting all the image elements inside the carousel
const slides = document.querySelectorAll(".carousel-slide img");
// Selecting all the bullet elements inside the carousel
const bullets = document.querySelectorAll(".carousel-bullets .bullet");
// Variable to keep track of the current slide index
let currentSlide = 0;

// Function to show a particular slide
function showSlide(n) {
  // Removing 'active' class from all slides and bullets
  slides.forEach((slide) => slide.classList.remove("active"));
  bullets.forEach((bullet) => bullet.classList.remove("active"));

  // Handling overflow or underflow conditions for the slide index
  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  // Adding 'active' class to the current slide and bullet
  slides[currentSlide].classList.add("active");
  bullets[currentSlide].classList.add("active");
}

// Function to show the next slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Function to show the previous slide
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Adding click event listeners to the next and previous buttons
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Adding click event listeners to the bullets for direct slide navigation
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    showSlide(index);
  });
});

// Function to automatically slide to the next image every 2 seconds
function autoSlide() {
  nextSlide();
}

// Setting up an interval to call autoSlide function every 2 seconds
setInterval(autoSlide, 2000);

document.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('.headingTyped');
  const texts = [
      "A MUSIC FESTIVAL, BUT NOT AS YOU KNOW IT.",
      "The story continues... Chapter Three is nearly upon us!",
      "Will you join the Revolution of Imagination?"
  ];
  let currentTextIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100; // Initial delay

  function type() {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
          element.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          delay = 50;
      } else {
          element.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          delay = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
          delay = 2000; // Pause at end of current text
          isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          delay = 500; // Pause before starting next text
      }

      setTimeout(type, delay);
  }

  type();
});