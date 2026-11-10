/*
=================================================================
  Home motion: text ribbon + process chapters
-----------------------------------------------------------------
  Both are progressive: the HTML/CSS default is static and fully
  readable. Nothing here runs with prefers-reduced-motion.
=================================================================
*/
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches) return;

  // Ribbon: start the scroll, show an accessible pause/play toggle (WCAG 2.2.2)
  const ribbon = document.querySelector(".ribbon");
  const toggle = ribbon && ribbon.querySelector(".ribbon-toggle");
  if (ribbon && toggle) {
    ribbon.classList.add("ribbon--live");
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      const paused = ribbon.classList.toggle("is-paused");
      toggle.setAttribute("aria-pressed", String(paused));
      toggle.textContent = paused ? toggle.dataset.play : toggle.dataset.pause;
    });
  }

  // Chapters: light the step that crosses the middle band of the screen
  const list = document.querySelector(".process-steps");
  if (list && "IntersectionObserver" in window) {
    const steps = list.querySelectorAll(".process-step");
    list.classList.add("process--live");
    if (steps[0]) steps[0].classList.add("is-lit");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        steps.forEach((s) => s.classList.toggle("is-lit", s === e.target));
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    steps.forEach((s) => io.observe(s));
  }
})();
