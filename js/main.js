const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const iconMenu = document.getElementById("icon-menu");
const iconClose = document.getElementById("icon-close");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  iconMenu.classList.toggle("hidden-icon");
  iconClose.classList.toggle("hidden-icon");
});

document.addEventListener("DOMContentLoaded", () => {
  function setupInteractiveCarousel(id) {
    const carousel = document.getElementById(id);
    const items = carousel.querySelectorAll("li");
    const total = items.length;
    let currentIndex = 0;

    // Detect if the device is likely a mobile device (based on touch capability)
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Hide all items to start
    items.forEach(item => item.classList.remove('is-visible'));

    // Show the first item on page load
    if (total > 0) {
      items[0].classList.add("is-visible");
    }

    // This is the core function to change the word
    function changeWord() {
      items[currentIndex].classList.remove('is-visible');
      currentIndex = (currentIndex + 1) % total;
      items[currentIndex].classList.add('is-visible');
    }

    // Assign the correct event based on the device
    if (isMobile) {
      // On mobile, change word on click
      carousel.addEventListener('click', changeWord);
    } else {
      // On desktop, change word on hover (mouseenter is more efficient)
      carousel.addEventListener('mouseenter', changeWord);
    }
  }

  setupInteractiveCarousel("carousel-transformo");
  setupInteractiveCarousel("carousel-en");
  setupInteractiveCarousel("carousel-para");
});