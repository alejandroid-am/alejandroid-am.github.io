/*
=================================================================
  site.js: shared behaviour (every page). Progressive enhancement:
  without JS every text and link is already in the HTML.
   1. Language: remember the choice, EN paths on English-only pages
   2. FR / EN: sliding line + scramble effect, then navigate
   3. Copy the email
   4. Home H1: interchangeable last word
   5. Words that light up with the scroll
   6. Projects rail (pinned, short vertical distance per card)
   7. Timeline (About)
   8. Signature
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
  }

  /* 2. FR / EN: line + scramble ---------------------------------
     Only after a click on FR / EN: the menu and the H1 run through random
     letters (~350 ms), then the browser navigates; the new page plays the
     effect backwards (flag in sessionStorage). Each letter keeps the width
     of the real one, so nothing moves. The real text is always in the HTML. */
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#%&*+=/<>";
  const rnd = () => CHARS[(Math.random() * CHARS.length) | 0];
  const targets = () => [...document.querySelectorAll(".site-header [data-scramble], main h1[data-scramble]")];
  const split = (el) => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const spans = [];
    nodes.forEach((n) => {
      const frag = document.createDocumentFragment();
      for (const ch of n.textContent) {
        if (/\s/.test(ch)) { frag.append(ch); continue; }
        const s = document.createElement("span");
        s.className = "sc-ch"; s.textContent = ch; s.dataset.ch = ch;
        frag.append(s); spans.push(s);
      }
      n.replaceWith(frag);
    });
    spans.forEach((s) => { s.style.width = s.getBoundingClientRect().width + "px"; });
    return spans;
  };
  const scramble = (dir, done) => {
    const els = targets();
    const all = els.map((el) => split(el));
    const t0 = performance.now(), D = 350;
    const frame = (now) => {
      const p = clamp((now - t0) / D);
      all.forEach((spans) => spans.forEach((s, i) => {
        const k = i / Math.max(1, spans.length);
        const real = dir === "out" ? k > p : k < p;
        s.textContent = real ? s.dataset.ch : rnd();
      }));
      if (p < 1) return requestAnimationFrame(frame);
      // Put the real text nodes back (the elements themselves are kept)
      if (dir === "in") all.forEach((spans, k) => { spans.forEach((s) => s.replaceWith(s.dataset.ch)); els[k].normalize(); });
      done && done();
    };
    requestAnimationFrame(frame);
  };
  if (root.classList.contains("scramble-pending")) {
    store.del("scramble-in", sessionStorage);
    root.classList.remove("scramble-pending");
    if (!reduce) scramble("in");
  }
  const pick = document.querySelector(".lang-pick");
  if (pick) {
    const line = pick.querySelector(".lang-line");
    const place = (el) => {
      line.style.width = el.offsetWidth + "px";
      line.style.transform = "translateX(" + el.offsetLeft + "px)";
    };
    pick.classList.add("has-line");
    place(pick.querySelector(".is-active"));
    pick.querySelectorAll("a.lang-opt").forEach((a) => a.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      if (reduce) { location.href = a.href; return; }
      place(a);
      store.set("scramble-in", "1", sessionStorage);
      scramble("out", () => { location.href = a.href; });
    }));
    addEventListener("resize", () => place(pick.querySelector(".is-active")), { passive: true });
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
     Mouse hover (after 120 ms), a click on the word, or the button show
     the next word. The H1 height is reserved for the longest word. */
  const swap = document.querySelector(".h1-swap");
  if (swap) {
    const h1 = swap.closest("h1");
    const word = swap.querySelector(".h1-word");
    const words = JSON.parse(swap.dataset.words || "[]");
    const next = document.querySelector(".h1-next");
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
      if (next) { next.hidden = false; next.addEventListener("click", () => show(i + 1)); }
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
    rail.style.height = sticky.offsetHeight + dist * FACTOR + "px";
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

  /* 8. Signature: written left to right once, when it enters the screen */
  const sig = document.querySelector("[data-signature]");
  if (sig && !reduce && "IntersectionObserver" in window) {
    sig.classList.add("sig-armed");
    const ready = document.fonts ? document.fonts.load('1em "Mrs Saint Delafield"').catch(() => {}) : Promise.resolve();
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      ready.then(() => requestAnimationFrame(() => sig.classList.add("sig-on")));
    }, { threshold: 0.6 });
    io.observe(sig);
  }

  /* Case videos: no autoplay with reduced motion (controls instead) */
  if (reduce) document.querySelectorAll("video[data-case-video]").forEach((v) => { v.pause(); v.removeAttribute("autoplay"); v.controls = true; });

  /* 9. Open the <details> targeted by the hash -------------------- */
  const openHash = () => {
    const el = location.hash.length > 1 && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    const d = el && (el.tagName === "DETAILS" ? el : el.querySelector("details"));
    if (d) d.open = true;
  };
  openHash();
  addEventListener("hashchange", openHash);
})();
