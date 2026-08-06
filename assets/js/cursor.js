/*
=================================================================
  Custom Cursor (Progressive Enhancement)
  ---------------------------------------------------------------
  Only activates on non-touch, non-reduced-motion devices.
  Native cursor is hidden ONLY after this script confirms it works.
  If JS fails, users always see the native cursor.
=================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".custom-cursor");
  if (!cursor) return;

  // Don't activate on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Don't activate if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Mark HTML as cursor-ready — this triggers the CSS to hide native cursor
  document.documentElement.classList.add('cursor-ready');

  // Follow mouse
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Hover state on interactive elements
  const interactiveSelector = 'a, button, .portfolio-item, .project-card, .filter-btn, .carousel, .submit-btn, .menu-btn, .bento-gallery a, .carousel-btn';
  
  const interactiveElements = document.querySelectorAll(interactiveSelector);

  interactiveElements.forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
});