/* Propuestas fase 0. Sin JS se ven las tres seguidas; con JS, una cada vez. */
(() => {
  const root = document.documentElement;
  root.classList.add("js");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const props = [...document.querySelectorAll(".prop")];
  const tabs = [...document.querySelectorAll("[data-go]")];
  const hooks = [];

  const show = (id, scroll) => {
    if (!props.some((p) => p.id === id)) id = "A";
    props.forEach((p) => p.classList.toggle("is-on", p.id === id));
    tabs.forEach((t) => t.setAttribute("aria-current", t.dataset.go === id ? "true" : "false"));
    if (scroll) window.scrollTo({ top: 0, behavior: "instant" });
    hooks.forEach((fn) => fn(id));
  };
  tabs.forEach((t) =>
    t.addEventListener("click", (e) => {
      e.preventDefault();
      history.replaceState(null, "", "#" + t.dataset.go);
      show(t.dataset.go, true);
    })
  );
  const fromHash = () => {
    const h = location.hash.slice(1);
    const id = ["A", "B", "C"].includes(h) ? h : (document.getElementById(h)?.closest(".prop")?.id || "A");
    show(id, false);
  };
  window.addEventListener("hashchange", fromHash);

  /* Copiar email */
  document.querySelectorAll(".copy").forEach((b) => {
    if (!navigator.clipboard) { b.hidden = true; return; }
    b.addEventListener("click", () => {
      const out = b.nextElementSibling;
      navigator.clipboard.writeText(b.dataset.copy).then(
        () => { out.textContent = b.dataset.ok; setTimeout(() => (out.textContent = ""), 3000); },
        () => { out.textContent = "Copie impossible"; }
      );
    });
  });

  /* A: vista previa grande del proyecto al pasar o enfocar la fila */
  const prev = document.querySelector(".pA .preview");
  if (prev) {
    const pimg = prev.querySelector("img");
    document.querySelectorAll(".pA .proj").forEach((row) => {
      const on = () => { pimg.src = row.dataset.preview; prev.classList.add("on"); };
      const off = () => prev.classList.remove("on");
      row.addEventListener("pointerenter", on);
      row.addEventListener("pointerleave", off);
      row.addEventListener("focus", on);
      row.addEventListener("blur", off);
    });
  }

  /* B: pausa del listón */
  const banner = document.querySelector(".pB .banner");
  if (banner) {
    const btn = banner.querySelector(".pause");
    const set = (paused) => {
      banner.classList.toggle("paused", paused);
      btn.setAttribute("aria-pressed", String(paused));
      btn.textContent = paused ? "Lecture" : "Pause";
    };
    set(reduce.matches);
    btn.addEventListener("click", () => set(!banner.classList.contains("paused")));
  }

  /* C: palabras que se encienden con el scroll */
  const lits = [...document.querySelectorAll(".pC .lit")].map((el) => ({ el, w: [...el.querySelectorAll(".w")] }));
  const lightAll = () => lits.forEach(({ w }) => w.forEach((x) => x.classList.add("on")));
  const light = () => {
    const vh = innerHeight;
    lits.forEach(({ el, w }) => {
      // En las escenas la frase está fijada (sticky): se mide la escena entera
      const scene = el.closest(".scene");
      const r = (scene || el).getBoundingClientRect();
      const p = scene
        ? Math.min(1, Math.max(0, (vh * 0.6 - r.top) / (r.height * 0.6)))
        : Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.5 + r.height * 0.5)));
      const n = Math.round(p * w.length);
      w.forEach((x, i) => x.classList.toggle("on", i < n));
    });
  };

  /* C: carril horizontal fijado (sticky + translateX) en pantallas anchas */
  const rail = document.querySelector(".pC [data-rail]");
  const sticky = rail?.querySelector(".rail-sticky");
  const track = rail?.querySelector(".rail-track");
  const wide = matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
  let pinned = false, dist = 0;
  const measure = () => {
    if (!rail) return;
    const want = wide.matches && rail.offsetParent !== null;
    if (want !== pinned) {
      pinned = want;
      rail.classList.toggle("rail--pinned", pinned);
      if (!pinned) { rail.style.height = ""; track.style.transform = ""; }
    }
    if (!pinned) return;
    dist = Math.max(0, track.scrollWidth - sticky.clientWidth);
    rail.style.height = sticky.offsetHeight + dist + "px";
  };
  const moveRail = () => {
    if (!pinned) return;
    const top = parseFloat(getComputedStyle(sticky).top) || 0;
    const p = dist ? Math.min(1, Math.max(0, (top - rail.getBoundingClientRect().top) / dist)) : 0;
    track.style.transform = "translate3d(" + -p * dist + "px,0,0)";
  };
  // Teclado: al enfocar un enlace del carril, desplazar la página hasta esa diapositiva
  track?.addEventListener("focusin", (e) => {
    if (!pinned) return;
    const slide = e.target.closest(".slide");
    const x = Math.min(dist, Math.max(0, slide.offsetLeft - (sticky.clientWidth - slide.offsetWidth) / 2));
    const top = parseFloat(getComputedStyle(sticky).top) || 0;
    window.scrollTo({ top: rail.getBoundingClientRect().top + scrollY - top + x, behavior: "instant" });
  });

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      if (!document.getElementById("C").classList.contains("is-on")) return;
      if (!reduce.matches) light();
      moveRail();
    });
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", () => { measure(); onScroll(); }, { passive: true });
  wide.addEventListener("change", () => { measure(); onScroll(); });

  hooks.push((id) => {
    if (id !== "C") return;
    if (reduce.matches) lightAll();
    requestAnimationFrame(() => { measure(); onScroll(); });
  });
  if (document.fonts) document.fonts.ready.then(() => { measure(); onScroll(); });

  fromHash();
})();
