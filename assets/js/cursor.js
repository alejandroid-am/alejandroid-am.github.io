document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".custom-cursor");

  if (!cursor) return;

  // Sigue el movimiento del ratón
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Lista de todos los elementos que deben activar el estado "hover" del cursor
  const interactiveElements = document.querySelectorAll('a, button, .portfolio-item, .filter-btn, .carousel, .submit-btn, .menu-btn');

  // Añade y quita la clase 'hover' para cambiar el tamaño
  interactiveElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
});