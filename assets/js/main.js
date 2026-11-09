/*
=================================================================
  Main JavaScript
  ---------------------------------------------------------------
  1. Mobile Menu Toggle
  2. Portfolio Filter
  3. Back to Top Button
  4. Scroll Reveal (Intersection Observer)
  5. Email Obfuscation
  6. Smooth Scroll for Anchor Links
=================================================================
*/

document.addEventListener("DOMContentLoaded", () => {

  // Remove no-js class if present
  document.documentElement.classList.remove('no-js');

  /*
  ==============================================
  1. Mobile Menu Toggle
  ==============================================
  */
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      iconMenu.classList.toggle("hidden-icon");
      iconClose.classList.toggle("hidden-icon");
      menuBtn.setAttribute("aria-expanded", isOpen);

      // Trap focus in menu when open
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu on link click
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        iconMenu.classList.remove("hidden-icon");
        iconClose.classList.add("hidden-icon");
        menuBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        iconMenu.classList.remove("hidden-icon");
        iconClose.classList.add("hidden-icon");
        menuBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = '';
        menuBtn.focus();
      }
    });
  }


  /*
  ==============================================
  2. Portfolio Filter
  ==============================================
  */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.dataset.filter;
        portfolioItems.forEach(item => {
          const categories = item.dataset.category || '';
          if (filter === "all" || categories.includes(filter)) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }


  /*
  ==============================================
  3. Back to Top Button
  ==============================================
  */
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
    }, { passive: true });

    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }


  /*
  ==============================================
  4. Scroll Reveal (Intersection Observer)
  ==============================================
  */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    if (prefersReducedMotion) {
      // Reduced motion: make everything visible immediately
      revealElements.forEach(el => el.classList.add('visible'));
    } else if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      // No IntersectionObserver support: show everything
      revealElements.forEach(el => el.classList.add('visible'));
    }
  }


  /*
  ==============================================
  5. Email Obfuscation
  ==============================================
  */
  document.querySelectorAll('.email-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const u = link.dataset.u;
      const d = link.dataset.d;
      if (u && d) {
        window.location.href = 'mailto:' + u + '@' + d;
      }
    });
  });


  /*
  ==============================================
  6. Smooth Scroll for Anchor Links
  ==============================================
  */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#main-content') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        
        // Update URL without scroll jump
        history.pushState(null, null, targetId);
      }
    });
  });

});

/*
==============================================
7. Language: remember the visitor's choice, never redirect
  - FR is the default at /. A click on a language link or on
    "Rester en français / Stay in English" saves the choice.
  - If no choice is saved and the browser language differs from the
    page, a small non-blocking hint offers the other version.
  - English-only pages (case studies) point their nav to the FR paths;
    they switch to the EN paths when the visitor chose English or
    arrived from an English page in this session.
==============================================
*/
document.addEventListener("DOMContentLoaded", () => {
  const store = {
    get(k, s) { try { return (s || localStorage).getItem(k); } catch (e) { return null; } },
    set(k, v, s) { try { (s || localStorage).setItem(k, v); } catch (e) { /* storage blocked */ } }
  };
  const saved = store.get("lang");
  const pageLang = document.documentElement.lang;
  const hint = document.getElementById("lang-hint");

  document.querySelectorAll(".lang-switch[data-lang]").forEach(link => {
    link.addEventListener("click", () => store.set("lang", link.dataset.lang));
  });

  if (hint) {
    // Bilingual page: remember the language of this session for English-only pages
    store.set("lang_ctx", pageLang, sessionStorage);
    const browser = (navigator.language || "").toLowerCase();
    const browserIsFr = browser.indexOf("fr") === 0;
    const differs = pageLang === "fr" ? !browserIsFr : browserIsFr;
    if (!saved && browser && differs) {
      hint.hidden = false;
      const stay = hint.querySelector(".lang-hint-stay");
      stay.addEventListener("click", () => {
        store.set("lang", stay.dataset.lang);
        hint.hidden = true;
        const main = document.getElementById("main-content");
        if (main) { main.setAttribute("tabindex", "-1"); main.focus({ preventScroll: true }); }
      });
    }
  }

  const ctx = saved || store.get("lang_ctx", sessionStorage);
  if (ctx === "en") {
    document.querySelectorAll("a[data-href-en]").forEach(a => { a.href = a.dataset.hrefEn; });
  }
});


/*
==============================================
8. Header call-to-action: outline while the home hero is visible
   (the hero has its own primary button), solid everywhere else
==============================================
*/
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".header-cta.is-quiet");
  const hero = document.querySelector(".hero");
  if (!cta || !hero || !("IntersectionObserver" in window)) return;

  new IntersectionObserver(([entry]) => {
    cta.classList.toggle("is-quiet", entry.isIntersecting);
  }, { threshold: 0.25 }).observe(hero);
});


/*
==============================================
9. Mobile call-to-action bar: hidden while the home hero
   (which has its own primary button) or the contact section is on screen
==============================================
*/
document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("mobile-cta-bar");
  if (!bar || !("IntersectionObserver" in window)) return;

  const targets = [document.querySelector(".hero"), document.getElementById("contact")].filter(Boolean);
  if (targets.length === 0) return;

  const visible = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
    bar.classList.toggle("is-hidden", visible.size > 0);
  }, { threshold: 0.1 });

  targets.forEach(t => observer.observe(t));
});
