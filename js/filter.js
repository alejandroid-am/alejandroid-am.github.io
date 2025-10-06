document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Gestionar el estado activo del botón
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      // Filtrar los elementos del portfolio
      portfolioItems.forEach(item => {
        // CAMBIO CLAVE: Usamos .includes() en lugar de ===
        // Esto comprueba si la lista de categorías del item contiene la categoría del filtro.
        if (filter === "all" || item.dataset.category.includes(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});