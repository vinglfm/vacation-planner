var slides = document.querySelectorAll('.content .slide');
var currentSlide = 0;
var slideInterval = setInterval(goToNextSlide, 10000);

function goToNextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
}
