/*
=================================================================
  Case studies only (loaded with style.css on _projects pages).
  Shared behaviour (language, email copy, menu) lives in site.js.
  1. Scroll reveal (Intersection Observer)
  2. Email obfuscation
=================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  /* 1. Scroll reveal: the hidden start state is opt-in (.js-reveal), so
        content stays visible if this file fails or with reduced motion. */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length > 0) {
    if (reduce || !("IntersectionObserver" in window)) {
      revealElements.forEach(el => el.classList.add("visible"));
    } else {
      document.documentElement.classList.add("js-reveal");
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
      revealElements.forEach(el => revealObserver.observe(el));
    }
  }

  /* 2. Email obfuscation */
  document.querySelectorAll(".email-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const u = link.dataset.u;
      const d = link.dataset.d;
      if (u && d) window.location.href = "mailto:" + u + "@" + d;
    });
  });
});
