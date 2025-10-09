/*
=================================================================
  Main JavaScript File
-----------------------------------------------------------------
  * Contains functionality for:
  * 1. Mobile Menu Toggle
  * 2. Portfolio Filter
  * 3. Document Carousel (in project pages)
  * 4. Lightbox Gallery (in project pages)
  * 5. Back to Top Button
=================================================================
*/

document.addEventListener("DOMContentLoaded", () => {

  /*
  ==============================================
  --- 1. Mobile Menu Toggle
  ==============================================
  */
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("open");
      iconMenu.classList.toggle("hidden-icon");
      iconClose.classList.toggle("hidden-icon");
    });
  }


  /*
  ==============================================
  --- 2. Portfolio Filter
  ==============================================
  */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.dataset.filter;
        portfolioItems.forEach(item => {
          const itemCategories = item.dataset.category;
          if (filter === "all" || itemCategories.includes(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }


  /*
  ==============================================
  --- 3. Document Carousel (Project Pages)
  ==============================================
  */
  const docCarousel = document.querySelector(".document-carousel-container");
  if (docCarousel) {
    const slides = docCarousel.querySelectorAll(".carousel-slide");
    const nextBtn = docCarousel.querySelector(".next-btn");
    const prevBtn = docCarousel.querySelector(".prev-btn");
    const counter = docCarousel.querySelector(".carousel-counter");
    let currentIndex = 0;
    if (slides.length > 0) {
      const updateCarousel = () => {
        slides.forEach((slide, index) => {
          slide.classList.toggle("active-slide", index === currentIndex);
        });
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === slides.length - 1;
      };
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
    }
  }


  /*
  ==============================================
  --- 4. Lightbox Gallery (Project Pages)
  ==============================================
  */
  const lightbox = document.getElementById("lightbox");
  const galleryLinks = document.querySelectorAll("a[data-gallery]");
  if (lightbox && galleryLinks.length > 0) {
      const lightboxImg = document.getElementById("lightbox-img");
      const lightboxCaption = document.getElementById("lightbox-caption");
      const closeBtn = lightbox.querySelector(".lightbox-close");
      const prevBtn = lightbox.querySelector(".lightbox-prev");
      const nextBtn = lightbox.querySelector(".lightbox-next");
      let currentGallery = [];
      let currentIndex = 0;
      const updateLightboxImage = () => {
        const currentLink = currentGallery[currentIndex];
        lightboxImg.src = currentLink.href;
        lightboxCaption.textContent = currentLink.dataset.caption || '';
        prevBtn.style.display = currentIndex === 0 ? "none" : "block";
        nextBtn.style.display = currentIndex === currentGallery.length - 1 ? "none" : "block";
      };
      const openLightbox = (e) => {
        e.preventDefault();
        const link = e.currentTarget;
        const galleryName = link.dataset.gallery;
        currentGallery = Array.from(document.querySelectorAll(`a[data-gallery="${galleryName}"]`));
        currentIndex = currentGallery.indexOf(link);
        updateLightboxImage();
        lightbox.style.display = "block";
        document.body.style.overflow = "hidden";
      };
      const closeLightbox = () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
      };
      const showNextImage = () => {
        if (currentIndex < currentGallery.length - 1) {
          currentIndex++;
          updateLightboxImage();
        }
      };
      const showPrevImage = () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateLightboxImage();
        }
      };
      galleryLinks.forEach(link => link.addEventListener("click", openLightbox));
      closeBtn.addEventListener("click", closeLightbox);
      nextBtn.addEventListener("click", showNextImage);
      prevBtn.addEventListener("click", showPrevImage);
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "block") {
          if (e.key === "ArrowRight") showNextImage();
          if (e.key === "ArrowLeft") showPrevImage();
          if (e.key === "Escape") closeLightbox();
        }
      });
  }
  
  
  /*
  ==============================================
  --- 5. Back to Top Button
  ==============================================
  */
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    // Muestra u oculta el botón dependiendo del scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) { // Aparece después de bajar 300px
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    // Scroll suave hacia arriba al hacer clic
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});