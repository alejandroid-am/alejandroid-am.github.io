document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. CAROUSEL LOGIC ON PAGE 
       ========================================= */
    const carouselContainer = document.querySelector('.document-carousel-container');
    
    if (carouselContainer) {
        const track = carouselContainer.querySelector('.document-carousel');
        const slides = Array.from(track.querySelectorAll('.carousel-slide'));
        const nextBtn = carouselContainer.querySelector('.next-btn');
        const prevBtn = carouselContainer.querySelector('.prev-btn');
        const counter = carouselContainer.querySelector('.carousel-counter');
        let currentIndex = 0;

        // Function to update which slide is displayed
        const updateCarousel = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.remove('active-slide');
                if (i === index) slide.classList.add('active-slide');
            });
            if(counter) counter.textContent = `${index + 1} / ${slides.length}`;
        };

        // Events Click buttons
        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel(currentIndex);
            });
        }

        if(prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel(currentIndex);
            });
        }

        // initate
        updateCarousel(0);
    }

    /* =========================================
       2. LOGIC LIGHTBOX (ZOOM + NAVEGATION)
       ========================================= */
    
    // // Create the lightbox HTML dynamically if it doesn't exist
    if (!document.getElementById('lightbox')) {
        const lightboxHTML = `
        <div id="lightbox" class="lightbox">
            <span class="lightbox-close">&times;</span>
            <a class="lightbox-prev">&#10094;</a>
            <img class="lightbox-content" id="lightbox-img">
            <a class="lightbox-next">&#10095;</a>
            <div class="lightbox-caption"></div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const lbNext = document.querySelector('.lightbox-prev'); // Note: Sometimes Unicode makes left appear as next visually; adjust if necessary.
    const lbPrev = document.querySelector('.lightbox-next');

    // Variables to control the open gallery
    let currentGalleryImages = [];
    let currentLightboxIndex = 0;

    // Function to open Lightbox
    const openLightbox = (index, imagesArray) => {
        currentGalleryImages = imagesArray;
        currentLightboxIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Block background scrolling
    };

    // Image refresh function within the Lightbox
    const updateLightboxImage = () => {
        const imgObj = currentGalleryImages[currentLightboxIndex];
        lightboxImg.src = imgObj.src;
        // Try to search for a caption (alt or data-caption)
        const caption = imgObj.getAttribute('data-caption') || imgObj.alt || "";
        lightboxCaption.textContent = caption;
    };

    // CLOSE Lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // --- DETECT IMAGE GROUPS ---

    // A. Imágenes del Carrusel de Documentos
    const docImages = document.querySelectorAll('.document-carousel .carousel-slide');
    if (docImages.length > 0) {
        docImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                // Convert NodeList to Array to pass it
                openLightbox(index, Array.from(docImages));
            });
        });
    }

    // B. Imágenes de la Galería Bento (y otras galerías)
    const galleryLinks = document.querySelectorAll('.bento-gallery .zoom-trigger img');
    if (galleryLinks.length > 0) {
        galleryLinks.forEach((img, index) => {
            // ELIMINADA LA LÍNEA QUE FORZABA LA LUPA
            img.addEventListener('click', (e) => {
                e.preventDefault(); 
                openLightbox(index, Array.from(galleryLinks));
            });
        });
    }

    // --- CONTROLS LIGHTBOX ---
    
    // BUTTON CLOSE
    closeBtn.addEventListener('click', closeLightbox);
    
    // Click outside the image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Navigation (Arrow keys)
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

    // Navigation (Clicks on arrows)
    // Note: I've visually reversed the logic if you use < (< is left/prev)
    document.querySelector('.lightbox-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });
    
    document.querySelector('.lightbox-next').addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    function showNext() {
        currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryImages.length;
        updateLightboxImage();
    }

    function showPrev() {
        currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        updateLightboxImage();
    }
});
