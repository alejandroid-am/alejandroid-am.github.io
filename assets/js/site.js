/*
=================================================================
  site.js: shared behaviour (every page). Progressive enhancement:
  without JS every text and link is already in the HTML.
   1. Language: remember the choice, EN paths on English-only pages
   2. (FR / EN are plain links: the active one is underlined in CSS)
   3. Copy the email
   4. Home H1: interchangeable last word
   5. Words that light up with the scroll
   6. Projects rail (pinned, short vertical distance per card)
   7. Timeline (About)
   9. Open the <details> targeted by the URL hash (/services/#revue-ux)
=================================================================
*/
(() => {
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) root.classList.add("js-motion");
  const store = {
    get(k, s) { try { return (s || localStorage).getItem(k); } catch (e) { return null; } },
    set(k, v, s) { try { (s || localStorage).setItem(k, v); } catch (e) { /* storage blocked */ } },
    del(k, s) { try { (s || localStorage).removeItem(k); } catch (e) { /* storage blocked */ } }
  };
  const clamp = (v) => Math.min(1, Math.max(0, v));

  /* 1. Language ------------------------------------------------ */
  const pageLang = root.lang;
  const hint = document.getElementById("lang-hint");
  document.querySelectorAll("a[data-lang]").forEach((a) =>
    a.addEventListener("click", () => store.set("lang", a.dataset.lang)));
  if (hint) {
    store.set("lang_ctx", pageLang, sessionStorage);
    const stay = hint.querySelector(".lang-hint-stay");
    stay.addEventListener("click", () => {
      store.set("lang", stay.dataset.lang);
      root.classList.remove("lang-hint-on");
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });
  }
  if ((store.get("lang") || store.get("lang_ctx", sessionStorage)) === "en") {
    document.querySelectorAll("a[data-href-en]").forEach((a) => { a.href = a.dataset.hrefEn; });
    /* Bilingual labels on one-language pages (_includes/label.html) */
    document.querySelectorAll("[data-en]").forEach((el) => { el.textContent = el.dataset.en; el.lang = "en"; });
    document.querySelectorAll("img[data-caption-en]").forEach((img) => { img.dataset.caption = img.dataset.captionEn; });
  }

  /* 3. Copy the email ------------------------------------------ */
  if (navigator.clipboard && window.isSecureContext) {
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      const out = btn.nextElementSibling;
      let timer = 0;
      btn.hidden = false;
      btn.addEventListener("click", () => {
        const say = (msg, ok) => {
          clearTimeout(timer);
          out.textContent = msg;
          out.classList.toggle("is-error", !ok);
          btn.classList.toggle("is-done", ok);
          timer = setTimeout(() => { out.textContent = ""; btn.classList.remove("is-done"); }, 4000);
        };
        navigator.clipboard.writeText(btn.dataset.copy).then(
          () => say(btn.dataset.ok, true), () => say(btn.dataset.fail, false));
      });
    });
  }

  /* 4. Home H1: interchangeable last word ------------------------
     Mouse hover (after 120 ms) or a click on the word shows the next word. The H1 height is reserved for the longest word. */
  const swap = document.querySelector(".h1-swap");
  if (swap) {
    const h1 = swap.closest("h1");
    const word = swap.querySelector(".h1-word");
    const words = JSON.parse(swap.dataset.words || "[]");
    let i = 0, timer = 0;
    const show = (n) => {
      i = (n + words.length) % words.length;
      word.textContent = words[i];
      if (!reduce) { word.classList.remove("is-in"); void word.offsetWidth; word.classList.add("is-in"); }
    };
    const reserve = () => {
      h1.style.minHeight = "";
      const keep = word.textContent;
      let max = 0;
      words.forEach((w) => { word.textContent = w; max = Math.max(max, h1.offsetHeight); });
      word.textContent = keep;
      h1.style.minHeight = max + "px";
    };
    if (words.length > 1) {
      reserve();
      addEventListener("resize", reserve, { passive: true });
      document.fonts && document.fonts.ready.then(reserve);
      swap.addEventListener("pointerenter", (e) => {
        if (e.pointerType !== "mouse") return;
        clearTimeout(timer);
        timer = setTimeout(() => show(i + 1), 120);
      });
      swap.addEventListener("pointerleave", () => clearTimeout(timer));
      swap.addEventListener("click", () => { clearTimeout(timer); show(i + 1); });
    }
  }

  /* 5. Lit words, 6. rail, 7. timeline: one rAF scroll loop ------- */
  const lits = [...document.querySelectorAll(".lit")].map((el) => ({ el, w: [...el.querySelectorAll(".w")], scene: el.closest(".scene") }));
  const light = (vh) => lits.forEach(({ el, w, scene }) => {
    const r = (scene || el).getBoundingClientRect();
    const p = scene
      ? clamp((vh * 0.6 - r.top) / (r.height * 0.55))
      : clamp((vh * 0.9 - r.top) / (vh * 0.45 + r.height * 0.5));
    const n = Math.round(p * w.length);
    w.forEach((x, k) => x.classList.toggle("on", k < n));
  });

  const rail = document.querySelector("[data-rail]");
  const sticky = rail?.querySelector(".rail-sticky");
  const track = rail?.querySelector(".rail-track");
  const wide = matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
  const FACTOR = 0.5; // vertical scroll per pixel of horizontal travel
  const HOLD = 0.35;  // extra pinned scroll at the end (x viewport height): the last card stays in view
  let pinned = false, dist = 0;
  const measureRail = () => {
    if (!rail) return;
    if (wide.matches !== pinned) {
      pinned = wide.matches;
      rail.classList.toggle("is-pinned", pinned);
      if (!pinned) { rail.style.height = ""; track.style.transform = ""; }
    }
    if (!pinned) return;
    dist = Math.max(0, track.scrollWidth - sticky.clientWidth);
    rail.style.height = sticky.offsetHeight + dist * FACTOR + innerHeight * HOLD + "px";
  };
  const stickyTop = () => parseFloat(getComputedStyle(sticky).top) || 0;
  const moveRail = () => {
    if (!pinned || !dist) return;
    const p = clamp((stickyTop() - rail.getBoundingClientRect().top) / (dist * FACTOR));
    track.style.transform = "translate3d(" + (-p * dist) + "px,0,0)";
  };
  // Keyboard: a focused card brings the page to the position where it is in view
  track?.addEventListener("focusin", (e) => {
    if (!pinned || !dist) return;
    const item = e.target.closest(".rail-item");
    const x = clamp((item.offsetLeft - (sticky.clientWidth - item.offsetWidth) / 2) / dist) * dist;
    window.scrollTo({ top: rail.getBoundingClientRect().top + scrollY - stickyTop() + x * FACTOR, behavior: "instant" });
  });

  const tl = document.querySelector(".tl");
  const tlItems = tl ? [...tl.querySelectorAll(".tl-item")] : [];
  const timeline = (vh) => {
    if (!tl) return;
    const r = tl.getBoundingClientRect();
    tl.style.setProperty("--tl-p", clamp((vh * 0.55 - r.top) / r.height).toFixed(3));
    tlItems.forEach((it) => { if (it.getBoundingClientRect().top < vh * 0.58) it.classList.add("is-lit"); });
  };
  if (reduce) tlItems.forEach((it) => it.classList.add("is-lit"));

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const vh = innerHeight;
      if (!reduce) { light(vh); timeline(vh); }
      moveRail();
    });
  };
  if (lits.length || rail || tl) {
    measureRail();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", () => { measureRail(); onScroll(); }, { passive: true });
    wide.addEventListener("change", () => { measureRail(); onScroll(); });
    document.fonts && document.fonts.ready.then(() => { measureRail(); onScroll(); });
    addEventListener("load", () => { measureRail(); onScroll(); });
    onScroll();
  }

  /* Videos (hero and case): no autoplay attribute and controls in the HTML, so
     without JS, or with reduced motion, the poster shows with the controls.
     Without reduced motion: no controls, muted loop, played while on screen. */
  const vids = document.querySelectorAll("video[data-hero-video], video[data-case-video]");
  if (reduce) vids.forEach((v) => { v.controls = true; });
  else {
    const play = (v) => v.play().catch(() => { v.controls = true; });
    const io = "IntersectionObserver" in window && new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) play(e.target); else e.target.pause();
    }), { rootMargin: "200px" });
    vids.forEach((v) => { v.controls = false; io ? io.observe(v) : play(v); });
  }

  /* 9. Open the <details> targeted by the hash -------------------- */
  const openHash = () => {
    const el = location.hash.length > 1 && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    const d = el && (el.tagName === "DETAILS" ? el : el.querySelector("details"));
    if (d) d.open = true;
  };
  openHash();
  addEventListener("hashchange", openHash);
})();
