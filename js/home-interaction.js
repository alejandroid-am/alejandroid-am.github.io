/*
=================================================================
  Homepage Word Carousel
-----------------------------------------------------------------
  * Handles the interactive word-swapping feature on the homepage.
=================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  const transformo = document.querySelector("#carousel-transformo");
  const en = document.querySelector("#carousel-en");
  const para = document.querySelector("#carousel-para");

  // Exit if carousels aren't on the page
  if (!transformo || !en || !para) {
    return;
  }

  // Predefined valid word combinations
  const combos = [
    { design: "interfaces", made: "enhance usability", driven: "curiosity" },
    { design: "interfaces", made: "simplify journeys", driven: "creativity" },
    { design: "interfaces", made: "build trust", driven: "empathy" },
    { design: "visuals", made: "elevate brands", driven: "storytelling" },
    { design: "experiences", made: "simplify journeys", driven: "empathy" },
    { design: "identities", made: "elevate brands", driven: "creativity" }
    // Add more combos as needed
  ];

  // Helper to get the current active word in a carousel
  const getActive = (el) => {
    const node = el.querySelector("li.is-visible");
    return node ? node.textContent.trim() : null;
  };

  // Helper to set a new active word in a carousel
  const setActive = (el, value) => {
    Array.from(el.querySelectorAll("li")).forEach(li => {
      li.classList.toggle("is-visible", li.textContent.trim() === value);
    });
  };

  const changeWord = (carouselId) => {
    const activeDesign = getActive(transformo);
    const activeMade = getActive(en);
    const activeDriven = getActive(para);
    const pool = [];

    // Find valid new words based on the other two active words
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

    // Pick a random word from the best possible matches
    const maxScore = Math.max(...pool.map(p => p.score));
    const topChoices = [...new Set(pool.filter(p => p.score === maxScore).map(p => p.value))];
    const newWord = topChoices[Math.floor(Math.random() * topChoices.length)];

    setActive(document.querySelector(`#${carouselId}`), newWord);
  };

  const eventType = "ontouchstart" in window ? "click" : "mouseenter";

  [
    ["carousel-transformo", transformo],
    ["carousel-en", en],
    ["carousel-para", para]
  ].forEach(([id, el]) => {
    if (el) el.addEventListener(eventType, () => changeWord(id));
  });
});