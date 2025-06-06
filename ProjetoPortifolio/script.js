let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  const slideTrack = document.querySelector(".carousel-slide");
  slideTrack.style.transform = `translateX(${-slideWidth * index}px)`;
}

function moveSlide(step) {
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Auto play
setInterval(() => {
  moveSlide(1);
}, 4000); // delay de 4 segundos
