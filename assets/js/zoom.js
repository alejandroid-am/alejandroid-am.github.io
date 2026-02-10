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

    /* --- 2. LIGHTBOX (ZOOM) --- */
    
    // Inyectar HTML del lightbox si no existe
    if (!document.getElementById('lightbox')) {
        const lightboxHTML = `
        <div id="lightbox" class="lightbox">
            <span class="lightbox-close">&times;</span>
            <div class="lightbox-prev">&#10094;</div>
            <img class="lightbox-content" id="lightbox-img">
            <div class="lightbox-next">&#10095;</div>
            <div class="lightbox-caption"></div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevArrow = document.querySelector('.lightbox-prev');
    const nextArrow = document.querySelector('.lightbox-next');

    let currentImages = [];
    let currentIdx = 0;

    // Función para abrir
    const openLightbox = (index, images) => {
        currentImages = images;
        currentIdx = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloquear scroll
    };

    const updateLightboxContent = () => {
        const img = currentImages[currentIdx];
        // Buscar la fuente real (src) o la del link
        let src = img.src;
        // Si la imagen está dentro de un link, a veces queremos el href del link (mayor calidad)
        // pero en tu caso usamos la misma imagen.
        
        lightboxImg.src = src;
        
        // Caption
        const caption = img.getAttribute('data-caption') || img.alt || '';
        lightboxCaption.textContent = caption;
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // --- LISTENERS PARA ABRIR ---

    // A. Imágenes del Carrusel
    // Seleccionamos directamente las imágenes visibles
    const carouselImages = document.querySelectorAll('.document-carousel img');
    if (carouselImages.length > 0) {
        carouselImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                openLightbox(index, Array.from(carouselImages));
            });
        });
    }

    // B. Galería Bento (Detectar clic en el enlace .zoom-trigger)
    const bentoLinks = document.querySelectorAll('.bento-gallery .zoom-trigger');
    if (bentoLinks.length > 0) {
        // Creamos un array de las IMÁGENES dentro de los links para pasarlo al lightbox
        const bentoImages = Array.from(bentoLinks).map(link => link.querySelector('img'));
        
        bentoLinks.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Evitar navegación del link
                openLightbox(index, bentoImages);
            });
        });
    }

    // --- CONTROLES NAVEGACIÓN ---
    
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    const showNext = () => {
        currentIdx = (currentIdx + 1) % currentImages.length;
        updateLightboxContent();
    };

    const showPrev = () => {
        currentIdx = (currentIdx - 1 + currentImages.length) % currentImages.length;
        updateLightboxContent();
    };

    nextArrow.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    prevArrow.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
});
