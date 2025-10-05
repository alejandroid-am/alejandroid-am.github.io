// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------
     MENU (mobile) - toggle
     --------------------------- */
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  if (menuBtn && menu && iconMenu && iconClose) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("open");
      iconMenu.classList.toggle("hidden-icon");
      iconClose.classList.toggle("hidden-icon");
    });
  }
});