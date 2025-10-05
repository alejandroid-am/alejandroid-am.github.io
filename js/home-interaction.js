// js/home.js
document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------
     CAROUSEL (palabras coherentes)
     --------------------------- */
  const transformo = document.querySelector("#carousel-transformo");
  const en = document.querySelector("#carousel-en");
  const para = document.querySelector("#carousel-para");

  if (!transformo || !en || !para) {
    return; // Si no están los carruseles, no se ejecuta el resto.
  }

  const requireBothMatches = false;
  const combos = [
    { design: "interfaces", made: "enhance usability", driven: "curiosity" },
    { design: "interfaces", made: "simplify journeys", driven: "creativity" },
    { design: "interfaces", made: "build trust", driven: "empathy" },
    { design: "visuals", made: "elevate brands", driven: "storytelling" },
    { design: "visuals", made: "elevate brands", driven: "creativity" },
    { design: "visuals", made: "build trust", driven: "creativity" },
    { design: "visuals", made: "build trust", driven: "empathy" },
    { design: "experiences", made: "simplify journeys", driven: "curiosity" },
    { design: "experiences", made: "simplify journeys", driven: "empathy" },
    { design: "experiences", made: "enhance usability", driven: "storytelling" },
    { design: "experiences", made: "build trust", driven: "creativity" },
    { design: "identities", made: "elevate brands", driven: "creativity" },
    { design: "identities", made: "elevate brands", driven: "storytelling" },
    { design: "identities", made: "build trust", driven: "storytelling" },
    { design: "identities", made: "build trust", driven: "empathy" }
  ];

  function getActive(el) {
    const node = el.querySelector("li.is-visible");
    return node ? node.textContent.trim() : null;
  }

  function setActive(el, value) {
    const lis = Array.from(el.querySelectorAll("li"));
    let found = false;
    lis.forEach(li => {
      if (li.textContent.trim() === value) {
        li.classList.add("is-visible");
        found = true;
      } else {
        li.classList.remove("is-visible");
      }
    });
    if (!found && lis.length) {
      lis[0].classList.add("is-visible");
    }
  }

  function changeWord(carouselId) {
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

    if (requireBothMatches) {
      const strict = pool.filter(p => p.score === 2);
      if (strict.length > 0) {
        const uniqueStrict = [...new Set(strict.map(p => p.value))];
        const newWord = uniqueStrict[Math.floor(Math.random() * uniqueStrict.length)];
        setActive(document.querySelector(`#${carouselId}`), newWord);
      }
      return;
    }

    const maxScore = Math.max(...pool.map(p => p.score));
    const top = pool.filter(p => p.score === maxScore).map(p => p.value);
    const uniqueTop = [...new Set(top)];
    const newWord = uniqueTop[Math.floor(Math.random() * uniqueTop.length)];
    setActive(document.querySelector(`#${carouselId}`), newWord);
  }

  const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const eventType = isMobile ? "click" : "mouseenter";

  [["carousel-transformo", transformo], ["carousel-en", en], ["carousel-para", para]]
    .forEach(([id, el]) => {
      if (el) el.addEventListener(eventType, () => changeWord(id));
    });
});