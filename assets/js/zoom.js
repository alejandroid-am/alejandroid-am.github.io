document.addEventListener('DOMContentLoaded', () => {
    // select all images within project content
    const images = document.querySelectorAll('.project-content img');
    
    // create modal element
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); display: none; justify-content: center;
        align-items: center; z-index: 1000; cursor: zoom-out; opacity: 0; transition: opacity 0.3s;
    `;
    
    const modalImg = document.createElement('img');
    modalImg.style.cssText = "max-width: 90%; max-height: 90%; object-fit: contain; box-shadow: 0 0 20px rgba(0,0,0,0.5);";
    
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // function open modal
    images.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.style.display = 'flex';
            setTimeout(() => modal.style.opacity = '1', 10); // Fade in
        });
    });

    // function close modal
    modal.addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.style.display = 'none', 300);
    });
});