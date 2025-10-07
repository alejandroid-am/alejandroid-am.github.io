document.addEventListener("DOMContentLoaded", () => {
      const lightbox = document.getElementById("lightbox");
      if (!lightbox) return; // Si no hay lightbox, no hacer nada

      const lightboxImg = document.getElementById("lightbox-img");
      const lightboxCaption = document.getElementById("lightbox-caption");
      const closeBtn = document.querySelector(".lightbox-close");
      const prevBtn = document.querySelector(".lightbox-prev");
      const nextBtn = document.querySelector(".lightbox-next");

      let currentGallery = [];
      let currentIndex = 0;

      function openLightbox(e) {
        // ESTA LÍNEA ES LA MÁS IMPORTANTE
        // Evita que el enlace te lleve a otra página
        e.preventDefault(); 
        
        const link = e.currentTarget;
        const galleryName = link.dataset.gallery;
        
        currentGallery = Array.from(document.querySelectorAll(`a[data-gallery="${galleryName}"]`));
        currentIndex = currentGallery.indexOf(link);
        
        updateLightboxImage();
        lightbox.style.display = "block";
        document.body.style.overflow = "hidden";
      }

      function updateLightboxImage() {
        const currentLink = currentGallery[currentIndex];
        lightboxImg.src = currentLink.href;
        lightboxCaption.textContent = currentLink.dataset.caption || '';
        
        prevBtn.style.display = currentIndex === 0 ? "none" : "block";
        nextBtn.style.display = currentIndex === currentGallery.length - 1 ? "none" : "block";
      }

      function showNextImage() {
        if (currentIndex < currentGallery.length - 1) {
          currentIndex++;
          updateLightboxImage();
        }
      }

      function showPrevImage() {
        if (currentIndex > 0) {
          currentIndex--;
          updateLightboxImage();
        }
      }

      function closeLightbox() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
      }

      const galleryLinks = document.querySelectorAll("a[data-gallery]");
      galleryLinks.forEach(link => link.addEventListener("click", openLightbox));
      
      closeBtn.addEventListener("click", closeLightbox);
      nextBtn.addEventListener("click", showNextImage);
      prevBtn.addEventListener("click", showPrevImage);
      
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });
      
      document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "block") {
          if (e.key === "ArrowRight") showNextImage();
          if (e.key === "ArrowLeft") showPrevImage();
          if (e.key === "Escape") closeLightbox();
        }
      });
    });
