/*
=================================================================
  Projects rail (home)
-----------------------------------------------------------------
  * Wide screens with motion allowed: the section gets a height of
    (sticky viewport + horizontal distance); while the sticky block
    is pinned, the track moves by translateX according to the
    vertical scroll progress. rAF + passive listeners only.
  * Never touches the wheel or native scrolling, never traps focus:
    when a card receives focus, the page scrolls to the position
    where that card is in view, so tab order follows the visual order.
  * Phones, prefers-reduced-motion or no JS: the CSS fallback stays,
    a native horizontal scroller with scroll-snap.
  * More projects later = a longer rail, no code change.
=================================================================
*/
(() => {
  const rail = document.querySelector("[data-rail]");
  if (!rail) return;
  const sticky = rail.querySelector(".rail-sticky");
  const track = rail.querySelector(".rail-track");
  const header = document.querySelector('header[role="banner"]');
  if (!sticky || !track) return;

  const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
  let on = false;
  let distance = 0;
  let top = 0;
  let x = 0;
  let ticking = false;

  const measure = () => {
    top = header ? header.offsetHeight : 0;
    rail.style.setProperty("--rail-top", top + "px");
    distance = Math.max(0, track.scrollWidth - sticky.clientWidth);
    rail.style.height = sticky.offsetHeight + distance + "px";
  };

  const setX = (value) => {
    x = value;
    track.style.transform = "translate3d(" + x + "px, 0, 0)";
  };

  const update = () => {
    ticking = false;
    if (!on) return;
    const scrolled = top - rail.getBoundingClientRect().top;
    const progress = distance ? Math.min(1, Math.max(0, scrolled / distance)) : 0;
    setX(-progress * distance);
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  const onResize = () => {
    if (!on) return;
    measure();
    update();
  };

  // Keyboard: bring the focused card into view by scrolling the page itself
  const onFocus = (e) => {
    if (!on || !distance) return;
    const item = e.target.closest(".rail-item");
    if (!item) return;
    const left = item.offsetLeft - track.offsetLeft;
    const width = item.offsetWidth;
    const view = sticky.clientWidth;
    let target = x;
    if (left + target < 0) target = -left;
    else if (left + width + target > view) target = view - width - left;
    target = Math.min(0, Math.max(-distance, target));
    const railTop = rail.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: railTop - top + (-target / distance) * distance, behavior: "instant" });
    update();
  };

  const enable = () => {
    if (on) return;
    on = true;
    rail.classList.add("rail--pinned");
    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    track.addEventListener("focusin", onFocus);
  };

  const disable = () => {
    if (!on) return;
    on = false;
    rail.classList.remove("rail--pinned");
    rail.style.removeProperty("height");
    rail.style.removeProperty("--rail-top");
    track.style.removeProperty("transform");
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    track.removeEventListener("focusin", onFocus);
  };

  const apply = () => (mq.matches ? enable() : disable());
  apply();
  mq.addEventListener("change", apply);
  // Late fonts can change the heading height: measure again once they are in
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(onResize);
})();
