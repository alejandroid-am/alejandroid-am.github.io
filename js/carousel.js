document.addEventListener("DOMContentLoaded", () => {
      const slides = document.querySelectorAll(".carousel-slide");
      const nextBtn = document.querySelector(".next-btn");
      const prevBtn = document.querySelector(".prev-btn");
      const counter = document.querySelector(".carousel-counter");
      let currentIndex = 0;

      if (!slides.length) return;

      function updateCarousel() {
        slides.forEach((slide, index) => {
          slide.classList.remove("active-slide");
          if (index === currentIndex) {
            slide.classList.add("active-slide");
          }
        });
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === slides.length - 1;
      }

      nextBtn.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
          currentIndex++;
          updateCarousel();
        }
      });

      prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });

      updateCarousel();
    });