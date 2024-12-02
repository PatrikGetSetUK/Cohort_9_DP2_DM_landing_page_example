
// Scroll button
const scrollButton = document.getElementById('scrollButton');

window.addEventListener('scroll', function () {
    if (window.scrollY > 100 && window.scrollY < 5200) {
        scrollButton.style.display = 'block';
    }
        
    else {
        scrollButton.style.display = 'none';
    }

});


// Burger menu
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");

    burgerMenu.addEventListener("click", function () {
        menu.classList.toggle("show-menu");
    });
})



// Sticky Header
window.onscroll = function () { myFunction() };

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Carousel
const slides = document.querySelectorAll(".carousel-slide img");
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    slides[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function autoSlide() {
    nextSlide();
}
setInterval(autoSlide, 2000);

// Featured Line Up Horizontal scrolling images
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".featured2");
    const marquee = document.querySelector(".featured2-marquee");

    let containerWidth = container.offsetWidth;
    let marqueeWidth = marquee.offsetWidth;

    marquee.style.left = `${containerWidth}px`;

    const animateMarquee = () => {
        let currentLeft = parseInt(marquee.style.left, 10);

        if (currentLeft < -marqueeWidth) {
            marquee.style.left = `${containerWidth}px`;
            currentLeft = containerWidth;
        } else {
            marquee.style.left = `${currentLeft - 1}px`;
        }
    };

    setInterval(animateMarquee, 20);
});

// Countdown Timer
const days = document.getElementById("days");

const hours = document.getElementById("hours");

const minutes = document.getElementById("minutes");

const seconds = document.getElementById("seconds");

const countDownDate = new Date("Aug 01, 2024 12:00:00").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();

    const diff = countDownDate - currentDate;
    console.log(diff);

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;


}

setInterval(updateCountdown, 1000);



// Love Section Scrolling Images
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".love-logo");
    const marquee = document.querySelector(".love-marquee");

    let containerWidth = container.offsetWidth;
    let marqueeWidth = marquee.offsetWidth;

    marquee.style.left = `${containerWidth}px`;

    const animateMarquee = () => {
        let currentLeft = parseInt(marquee.style.left, 10);

        if (currentLeft < -marqueeWidth) {
            marquee.style.left = `${containerWidth}px`;
            currentLeft = containerWidth;
        } else {
            marquee.style.left = `${currentLeft - 1}px`;
        }
    };

    setInterval(animateMarquee, 20);
});