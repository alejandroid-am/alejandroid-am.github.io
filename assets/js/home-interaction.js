/*
=================================================================
  Homepage Word Interaction
-----------------------------------------------------------------
  * Swaps one highlighted H1 word for another that fits one of the
  * combos below. Matches on data-key, so it works in every language.
=================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  const transformo = document.querySelector("#carousel-transformo");
  const en = document.querySelector("#carousel-en");
  const para = document.querySelector("#carousel-para");

  if (!transformo || !en || !para) {
    return;
  }

  const combos = [
    { design: "interfaces", made: "enhance usability", driven: "curiosity" },
    { design: "interfaces", made: "simplify journeys", driven: "creativity" },
    { design: "interfaces", made: "build trust", driven: "empathy" },
    { design: "visuals", made: "elevate brands", driven: "storytelling" },
    { design: "experiences", made: "simplify journeys", driven: "empathy" },
    { design: "identities", made: "elevate brands", driven: "creativity" }
  ];

  const getActive = (el) => {
    const node = el.querySelector("li.is-visible");
    return node ? node.dataset.key : null;
  };

  const setActive = (el, value) => {
    Array.from(el.querySelectorAll("li")).forEach(li => {
      li.classList.toggle("is-visible", li.dataset.key === value);
    });
  };

  const changeWord = (carouselId) => {
    const activeDesign = getActive(transformo);
    const activeMade = getActive(en);
    const activeDriven = getActive(para);
    const pool = [];

    combos.forEach(c => {
      let score = 0;
      if (carouselId === "carousel-transformo") {
        if (c.made === activeMade) score++;
        if (c.driven === activeDriven) score++;
        if (c.design !== activeDesign && score > 0) pool.push({ value: c.design, score });
      }
      if (carouselId === "carousel-en") {
        if (c.design === activeDesign) score++;
        if (c.driven === activeDriven) score++;
        if (c.made !== activeMade && score > 0) pool.push({ value: c.made, score });
      }
      if (carouselId === "carousel-para") {
        if (c.design === activeDesign) score++;
        if (c.made === activeMade) score++;
        if (c.driven !== activeDriven && score > 0) pool.push({ value: c.driven, score });
      }
    });

    if (pool.length === 0) return;

    const maxScore = Math.max(...pool.map(p => p.score));
    const topChoices = [...new Set(pool.filter(p => p.score === maxScore).map(p => p.value))];
    const newWord = topChoices[Math.floor(Math.random() * topChoices.length)];

    setActive(document.querySelector(`#${carouselId}`), newWord);
  };

  // Hover only for a real mouse (pointerType "mouse"), with a short intent
  // delay so crossing a word on the way to the buttons does not swap it.
  // Click (or tap) swaps for every pointer type, so hybrid devices work too.
  const HOVER_DELAY = 120;
  const CLICK_GUARD = 600;

  [
    ["carousel-transformo", transformo],
    ["carousel-en", en],
    ["carousel-para", para]
  ].forEach(([id, el]) => {
    let timer = 0;
    let lastHoverSwap = 0;

    el.addEventListener("pointerenter", (e) => {
      if (e.pointerType !== "mouse") return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        changeWord(id);
        lastHoverSwap = Date.now();
      }, HOVER_DELAY);
    });

    el.addEventListener("pointerleave", () => clearTimeout(timer));

    el.addEventListener("click", () => {
      clearTimeout(timer);
      // A mouse click right after a hover swap would swap twice.
      if (Date.now() - lastHoverSwap < CLICK_GUARD) return;
      changeWord(id);
    });
  });
});
