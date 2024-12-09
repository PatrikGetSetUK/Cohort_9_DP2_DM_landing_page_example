// Mobile menu toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

// Close mobile menu on link click
function closeMenu() {
    document.getElementById("mobile-menu").style.display = "none";
}

// Cookie popup
function acceptCookies() {
    document.getElementById("cookie-popup").style.display = "none";
}

function declineCookies() {
    document.getElementById("cookie-popup").style.display = "none";
}

// Carousel
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