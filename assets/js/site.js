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
  10. Image carousel (case studies)
  11. Footer signature (drawn once per visit)
=================================================================
*/
(() => {
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) root.classList.add("js-motion");
  // s = "session" for sessionStorage. The storage object is read inside try: a browser
  // that blocks storage throws on the mere access to window.localStorage / sessionStorage.
  const area = (s) => (s === "session" ? window.sessionStorage : window.localStorage);
  const store = {
    get(k, s) { try { return area(s).getItem(k); } catch (e) { return null; } },
    set(k, v, s) { try { area(s).setItem(k, v); } catch (e) { /* storage blocked */ } },
    del(k, s) { try { area(s).removeItem(k); } catch (e) { /* storage blocked */ } }
  };
  const clamp = (v) => Math.min(1, Math.max(0, v));

  /* 1. Language ------------------------------------------------ */
  const pageLang = root.lang;
  const hint = document.getElementById("lang-hint");
  document.querySelectorAll("a[data-lang]").forEach((a) =>
    a.addEventListener("click", () => store.set("lang", a.dataset.lang)));
  if (hint) {
    store.set("lang_ctx", pageLang, "session");
    const stay = hint.querySelector(".lang-hint-stay");
    stay.addEventListener("click", () => {
      store.set("lang", stay.dataset.lang);
      root.classList.remove("lang-hint-on");
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });
  }
  /* English-only pages (case studies, 404): FR / EN toggle in the header. It swaps
     the bilingual labels (label.html, data-en) and the menu / back links
     (data-href-en), both ways, and remembers the choice ("lang" + "lang_ctx"). */
  const applyLang = (lang) => {
    const en = lang === "en";
    root.classList.toggle("ctx-en", en);
    document.querySelectorAll("a[data-href-en]").forEach((a) => {
      if (!a.dataset.hrefFr) a.dataset.hrefFr = a.getAttribute("href");
      a.href = en ? a.dataset.hrefEn : a.dataset.hrefFr;
    });
    document.querySelectorAll("[data-en]").forEach((el) => {
      if (el.dataset.fr === undefined) { el.dataset.fr = el.textContent; el.dataset.frLang = el.lang || ""; }
      el.textContent = en ? el.dataset.en : el.dataset.fr;
      el.lang = en ? "en" : (el.dataset.frLang || "fr");
    });
    document.querySelectorAll("img[data-caption-en]").forEach((img) => {
      if (img.dataset.captionFr === undefined) img.dataset.captionFr = img.dataset.caption || "";
      img.dataset.caption = en ? img.dataset.captionEn : img.dataset.captionFr;
    });
    document.querySelectorAll("[data-set-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
  };
  const ctxLang = (store.get("lang") || store.get("lang_ctx", "session")) === "en" ? "en" : "fr";
  if (ctxLang === "en") applyLang("en");
  document.querySelectorAll("[data-lang-toggle]").forEach((g) => {
    g.hidden = false;
    g.querySelectorAll("[data-set-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === ctxLang));
      b.addEventListener("click", () => {
        store.set("lang", b.dataset.setLang);
        store.set("lang_ctx", b.dataset.setLang, "session");
        applyLang(b.dataset.setLang);
      });
    });
  });

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
  const narrow = matchMedia("(max-width: 860px)"); // phones / tablets: no word reveal (CSS shows the sentence lit)
  const lits = [...document.querySelectorAll(".lit")].map((el) => ({ el, w: [...el.querySelectorAll(".w")], scene: el.closest(".scene"), pin: el.closest(".scene-pin") }));
  // In a scene the words light up from the moment the sentence enters the screen
  // until 85% of its sticky stretch, so the scroll never "stalls" on a sentence
  // that is already fully lit (same timing on phones and desktops).
  const light = (vh) => lits.forEach(({ el, w, scene, pin }) => {
    const r = (scene || el).getBoundingClientRect();
    let p;
    if (scene && pin) {
      const cs = getComputedStyle(scene);
      const padT = parseFloat(cs.paddingTop) || 0, padB = parseFloat(cs.paddingBottom) || 0;
      const start = padT - vh * 0.8;
      const end = r.height - (parseFloat(getComputedStyle(pin).top) || 0) - pin.offsetHeight - padB;
      p = clamp((-r.top - start) / Math.max(1, (end - start) * 0.85));
    } else p = clamp((vh * 0.9 - r.top) / (vh * 0.45 + r.height * 0.5));
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
      if (!reduce) { if (!narrow.matches) light(vh); timeline(vh); }
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

  /* Vimeo: the player is loaded only after a click on the poster (dnt=1) */
  document.querySelectorAll("a.vimeo-facade[data-vimeo]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const f = document.createElement("iframe");
      f.src = "https://player.vimeo.com/video/" + encodeURIComponent(a.dataset.vimeo) + "?dnt=1&autoplay=1";
      f.title = a.dataset.title || "Vimeo";
      f.allow = "autoplay; fullscreen; picture-in-picture";
      f.referrerPolicy = "strict-origin-when-cross-origin";
      a.replaceWith(f);
      f.focus();
    });
  });

  /* 11. Footer signature: drawn once per visit when the footer comes into view.
     The <img> (whole signature) stays for no JS, reduced motion, a failed fetch, and
     the next pages of the same visit (flag in sessionStorage, set when the drawing ends). */
  const sigBox = document.querySelector(".footer-sig");
  const sigImg = sigBox?.querySelector("img");
  const sigDone = () => store.get("sig_done", "session") === "1";
  if (sigImg && !reduce && !sigDone() && "IntersectionObserver" in window && window.fetch && window.DOMParser) {
    sigBox.classList.add("is-pending");
    const reveal = () => sigBox.classList.remove("is-pending");
    let svgP = null;
    const load = () => svgP || (svgP = fetch(sigImg.currentSrc || sigImg.src)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((t) => {
        const svg = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
        if (!svg || svg.nodeName.toLowerCase() !== "svg") throw new Error("not svg");
        return document.importNode(svg, true);
      }));
    const draw = (svg) => {
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      const paths = [...svg.querySelectorAll("path")];
      sigImg.replaceWith(svg);
      reveal();
      let delay = 0;
      paths.forEach((p) => {
        const len = Math.ceil(p.getTotalLength()) + 2; // + 2: no gap at the round caps
        p.style.strokeDasharray = len + " " + len;
        p.style.strokeDashoffset = len;
        p.dataset.delay = delay;
        delay += +p.dataset.d || 400;
      });
      svg.getBoundingClientRect(); // commit the hidden state before the transition
      paths.forEach((p) => {
        p.style.transition = "stroke-dashoffset " + (+p.dataset.d || 400) + "ms cubic-bezier(.45, .05, .35, 1) " + p.dataset.delay + "ms";
        p.style.strokeDashoffset = "0";
      });
      setTimeout(() => store.set("sig_done", "1", "session"), delay + 50);
    };
    const near = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { near.disconnect(); load().catch(() => {}); } }, { rootMargin: "600px 0px" });
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect(); // once per page
      load().then(draw).catch(reveal);
    }, { threshold: 0.4 });
    near.observe(sigBox);
    io.observe(sigBox);
  }

  /* 9. Open the <details> targeted by the hash -------------------- */
  const openHash = () => {
    const el = location.hash.length > 1 && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    const d = el && (el.tagName === "DETAILS" ? el : el.querySelector("details"));
    if (d) d.open = true;
  };
  openHash();
  addEventListener("hashchange", openHash);

  /* 10. Image carousel (_includes/case/carousel.html) ------------
     Without JS it is a native scroll strip. Here: previous / next and dots,
     no autoplay; smooth scroll only without reduced motion. */
  document.querySelectorAll("[data-carousel]").forEach((c) => {
    const track = c.querySelector(".cc-track");
    const slides = [...track.children];
    const dots = [...c.querySelectorAll(".cc-dot")];
    const ctrl = c.querySelector(".cc-ctrl");
    if (!track || slides.length < 2 || !ctrl) return;
    ctrl.hidden = false;
    let cur = 0;
    const mark = (i) => {
      cur = i;
      dots.forEach((d, k) => d.toggleAttribute("aria-current", k === i));
      slides.forEach((s, k) => s.setAttribute("aria-hidden", String(k !== i)));
    };
    const go = (i) => {
      i = (i + slides.length) % slides.length;
      track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: reduce ? "auto" : "smooth" });
      mark(i);
    };
    c.querySelectorAll("[data-dir]").forEach((b) => b.addEventListener("click", () => go(cur + Number(b.dataset.dir))));
    dots.forEach((d) => d.addEventListener("click", () => go(Number(d.dataset.go))));
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); go(cur + (e.key === "ArrowRight" ? 1 : -1)); }
    });
    let t = 0;
    track.addEventListener("scroll", () => {
      clearTimeout(t);
      t = setTimeout(() => mark(Math.round(track.scrollLeft / track.clientWidth)), 80);
    }, { passive: true });
    mark(0);
  });
})();
