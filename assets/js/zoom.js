document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. CONFIGURACIÓN DEL CARRUSEL --- */
    const carouselContainer = document.querySelector('.document-carousel-container');
    
    if (carouselContainer) {
        const track = carouselContainer.querySelector('.document-carousel');
        const slides = Array.from(track.querySelectorAll('.carousel-slide'));
        const nextBtn = carouselContainer.querySelector('.next-btn');
        const prevBtn = carouselContainer.querySelector('.prev-btn');
        const counter = carouselContainer.querySelector('.carousel-counter');
        let currentIndex = 0;

        const updateCarousel = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.remove('active-slide');
                if (i === index) slide.classList.add('active-slide');
            });
            if(counter) counter.textContent = `${index + 1} / ${slides.length}`;
        };

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
        updateCarousel(0);
    }

    /* --- 2. LIGHTBOX (ZOOM) ---
       Accessible dialog: labelled buttons, Esc closes, arrows navigate,
       Tab stays inside while open, focus returns to the opener on close. */
    const fr = (document.documentElement.lang || 'en').indexOf('fr') === 0;
    const L = fr
        ? { dialog: 'Visionneuse d\'images', close: 'Fermer', prev: 'Image précédente', next: 'Image suivante', open: 'Agrandir l\'image', fallback: 'Image agrandie' }
        : { dialog: 'Image viewer', close: 'Close', prev: 'Previous image', next: 'Next image', open: 'Enlarge image', fallback: 'Enlarged image' };

    if (!document.getElementById('lightbox')) {
        const lightboxHTML = `
        <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="${L.dialog}" hidden>
            <button type="button" class="lightbox-close" aria-label="${L.close}"><span aria-hidden="true">&times;</span></button>
            <button type="button" class="lightbox-prev" aria-label="${L.prev}"><span aria-hidden="true">&#10094;</span></button>
            <img class="lightbox-content" id="lightbox-img" alt="">
            <button type="button" class="lightbox-next" aria-label="${L.next}"><span aria-hidden="true">&#10095;</span></button>
            <div class="lightbox-caption" aria-live="polite"></div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevArrow = lightbox.querySelector('.lightbox-prev');
    const nextArrow = lightbox.querySelector('.lightbox-next');

    let currentImages = [];
    let currentIdx = 0;
    let opener = null;

    const updateLightboxContent = () => {
        const img = currentImages[currentIdx];
        // Always the full-size original, even when srcset served a smaller file.
        lightboxImg.src = img.src || img.currentSrc;
        lightboxImg.alt = img.alt || L.fallback;
        const caption = img.getAttribute('data-caption') || img.alt || '';
        const count = currentImages.length > 1 ? ` (${currentIdx + 1} / ${currentImages.length})` : '';
        lightboxCaption.textContent = caption + count;
    };

    const openLightbox = (index, images, trigger) => {
        currentImages = images;
        currentIdx = index;
        opener = trigger || document.activeElement;
        const several = images.length > 1;
        prevArrow.hidden = !several;
        nextArrow.hidden = !several;
        updateLightboxContent();
        lightbox.hidden = false;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    };

    const closeLightbox = () => {
        if (lightbox.hidden) return;
        lightbox.classList.remove('active');
        lightbox.hidden = true;
        document.body.style.overflow = '';
        if (opener && typeof opener.focus === 'function') opener.focus();
        opener = null;
    };

    const showNext = () => {
        currentIdx = (currentIdx + 1) % currentImages.length;
        updateLightboxContent();
    };

    const showPrev = () => {
        currentIdx = (currentIdx - 1 + currentImages.length) % currentImages.length;
        updateLightboxContent();
    };

    // --- OPENERS ---

    // A. Document carousel images: make them reachable and operable by keyboard
    const carouselImages = Array.from(document.querySelectorAll('.document-carousel img'));
    carouselImages.forEach((img, index) => {
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', `${L.open}: ${img.alt || index + 1}`);
        img.addEventListener('click', () => openLightbox(index, carouselImages, img));
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(index, carouselImages, img); }
        });
    });

    // B. Bento gallery links (.zoom-trigger)
    const bentoLinks = Array.from(document.querySelectorAll('.bento-gallery .zoom-trigger'));
    const bentoImages = bentoLinks.map(link => link.querySelector('img'));
    bentoLinks.forEach((link, index) => {
        if (!link.hasAttribute('aria-label') && bentoImages[index]) {
            link.setAttribute('aria-label', `${L.open}: ${bentoImages[index].alt || index + 1}`);
        }
        link.setAttribute('role', 'button');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openLightbox(index, bentoImages, link);
        });
        link.addEventListener('keydown', (e) => {
            if (e.key === ' ') { e.preventDefault(); openLightbox(index, bentoImages, link); }
        });
    });

    // --- CONTROLS ---
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    nextArrow.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    prevArrow.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

    document.addEventListener('keydown', (e) => {
        if (lightbox.hidden) return;
        if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); return; }
        if (currentImages.length > 1 && e.key === 'ArrowRight') { e.preventDefault(); showNext(); return; }
        if (currentImages.length > 1 && e.key === 'ArrowLeft') { e.preventDefault(); showPrev(); return; }
        if (e.key === 'Tab') {
            // Focus trap: cycle through the visible buttons only
            const focusables = [closeBtn, prevArrow, nextArrow].filter(b => !b.hidden);
            const first = focusables[0], last = focusables[focusables.length - 1];
            const idx = focusables.indexOf(document.activeElement);
            if (e.shiftKey && (idx <= 0)) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && (idx === -1 || idx === focusables.length - 1)) { e.preventDefault(); first.focus(); }
        }
    });
});
