document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in-element");

  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Si el elemento está en la pantalla (intersecting)
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Opcional: deja de observar el elemento una vez que ha sido animado
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // La animación se dispara cuando el 10% del elemento es visible
  });

  // Observa cada uno de los elementos a los que le pusimos la clase
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});