---
layout: project
title: In-House Tools
description: An ongoing series of small tools I design and direct end-to-end for a retail employer — coded through AI pair-programming, each one built to remove a single real operational bottleneck.
role: In-house Designer — directs the build with AI pair-programming
tools: HTML, CSS, JavaScript, PHP (minimal backend where needed), Claude
year: 2025
categories: tools ux-ui
cover_image: /assets/img/tools-covers/social-generator.svg
---

<img src="/assets/img/tools/social-generator-brand-a-ui.webp" alt="Screenshot of the social post generator interface, showing the template editor and a finished Halloween promotion post" class="project-hero-image" style="border-radius: 12px;">

<div class="callout">
  <p>Both tools below run on a real employer's brand assets and business data, so what you see is sanitized: brand names replaced with <strong>Brand A</strong> / <strong>Brand B</strong>, the logo swapped for a placeholder mark, and the address, phone number and contract-number prefix genericized. The screenshots are real, working captures of the sanitized files — not mockups. Everything else — the logic, the numbers, the versions — is accurate to the code.</p>
</div>

<section>
  <h2>About this series</h2>
  <p>I'm the in-house designer for a small retail business with two product lines under different visual identities. Design is my job there; code isn't, but a lot of what actually blocks the team day to day turned out to be small, well-defined software problems — not more creative work. So I started directing Claude to build single-purpose tools for them: I define the problem, the constraints, and the behavior; the AI writes the code; I test every version against how the tool is actually used and push back when it doesn't hold up.</p>
  <p>Two tools have shipped so far. There will likely be more while I'm still there — this page is written to grow with them rather than get rebuilt each time.</p>
</section>

<section>
  <h2>Chapter 1 — Dual-Brand Social Post Generator</h2>
  <p>The two brands post to social media every week, with opposite identities: one loud and colorful (<strong>Brand A</strong>), one sober and premium (<strong>Brand B</strong>). The bottleneck was never the creative call — it was the cost of producing it. A five-slide carousel built by hand in Illustrator competed for time with more urgent work, since I wear several other hats in this role and get interrupted constantly. Posts went out late, or went out fast with brand mistakes.</p>
  <p>A template tool with team seats still charges for the features that matter, and worse, leaves every freedom open that the team needed <em>closed</em>. Continuing by hand doesn't scale and depends entirely on me being available. What was missing was a Canva of our own, with the brand guidelines built into the tool instead of left to memory.</p>

  <h3>Key decisions</h3>
  <ul>
    <li><strong>One file, not an app.</strong> Opens with a double-click, copies to a shared drive, never depends on a service that can go down. The cost, accepted on purpose: no saving between sessions, no simultaneous editing, and shipping an update means replacing a file.</li>
    <li><strong>A closed palette, no hex field.</strong> The impossibility of stepping outside the brand guidelines <em>is</em> the feature, not a limitation added on top of it.</li>
    <li><strong>The interface wears the brand it's building for.</strong> The tool's own UI switches typeface, palette and ornament to match whichever brand is active. Seeing the brand's palette while composing catches a mistake before it's made.</li>
  </ul>

  <div class="bento-gallery" style="grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0;">
    <div class="bento-item">
      <img src="/assets/img/tools/social-generator-brand-a-ui.webp" alt="Brand A mode: bold yellow layout with a Halloween promotion post">
    </div>
    <div class="bento-item">
      <img src="/assets/img/tools/social-generator-brand-b-ui.webp" alt="Brand B mode: same tool switched to a dark, serif, premium identity">
    </div>
  </div>

  <p>One detail worth its own mention: the checkerboard background motif came from an existing Illustrator asset shipping as six full-color versions weighing 5.9 MB combined. I found the repeating tile inside it and rebuilt it as a single 28 KB recolorable layer that adapts to any palette value, light or dark. Reusing what existed beat redrawing it from scratch.</p>

  <p>Nine versions shipped. The meaningful ones: v1 covered the full cycle (choose, write, frame, export) before adding variety; v4 added interior/closing slides and automated the slide counter, because numbers were being typed by hand and skipped; v5 fixed three brand-consistency bugs found by watching the tool get used — a price badge, a checkerboard size, and photo-crop handling for transparent PNGs — none of them programming bugs, all of them a rule that held for one brand and got applied to both without checking. The last version (v9) added a randomizer across 30 contrast-audited color pairings and a full post generator drawing from a bank of 31 pre-written posts — the direct answer to the original problem: a slow week now produces a rushed post, a random one, or no post, not always the latter two.</p>

  <h3>How I verified it</h3>
  <p>Every version ran an automated check across all 38 brand × template combinations, confirming each renders without error and no template ships with an empty field. The 30 color pairings were audited against WCAG contrast — the ones that fail are never offered — and every pre-written post was checked against a template that actually exists for its brand.</p>

  <div class="stat-grid">
    <div class="stat-card"><span class="stat-value">~15 min</span><span class="stat-label">per post now, from ~1–2h in Canva/Photoshop</span></div>
    <div class="stat-card"><span class="stat-value">26</span><span class="stat-label">templates (12 shared)</span></div>
    <div class="stat-card"><span class="stat-value">30</span><span class="stat-label">contrast-audited color pairs</span></div>
    <div class="stat-card"><span class="stat-value">9</span><span class="stat-label">shipped versions</span></div>
    <div class="stat-card"><span class="stat-value">172 KB</span><span class="stat-label">total file size</span></div>
    <div class="stat-card"><span class="stat-value">0€</span><span class="stat-label">cost</span></div>
  </div>
  <p style="color:var(--text-subtle); font-size:0.9rem;">That 15-minute figure is my own estimate, not a stopwatch measurement — I've never timed it precisely, because in this role I'm interrupted constantly and juggling several functions at once, which is a good part of why this tool needed to exist in the first place.</p>
</section>

<section>
  <h2>Chapter 2 — Rental Contract Generator</h2>
  <p>The store rents costumes, and every rental needed a contract — first on paper, later a spreadsheet edited and calculated by hand for each customer. The pricing wasn't trivial: the rate changes for multi-day rentals, and the shop is closed two days a week, so "days that pass" and "days that get billed" are two different numbers. Every contract ate into selling time, calculator in hand, with the customer standing there.</p>
  <p>A generic rental-management SaaS wasn't going to reproduce a legal document the team had already validated, in its exact paper layout. What was needed was the same document, with the arithmetic done by the machine and every real decision — negotiating, agreeing, signing — still in the hands of the person at the counter.</p>

  <h3>Key decisions</h3>
  <ul>
    <li><strong>Automate the arithmetic, never the decision.</strong> The per-day price calculates itself; a discount negotiated with a customer stays behind a collapsed dropdown instead of a field anyone can see and edit by default.</li>
    <li><strong>The smallest backend that earns its place.</strong> The contract counter works with no server by default. Only where several people genuinely needed a unique number the same day did I add one — not a database, a 30-line PHP file with file locking, on hosting the business already pays for.</li>
    <li><strong>Sensitive data handled by not digitizing it.</strong> When a deposit is guaranteed by card, the printed sheet gets blank lines for the card number, expiry and security code — no input field. The salesperson never types there; only the customer writes, by hand, on paper.</li>
  </ul>

  <img src="/assets/img/tools/contract-generator-sheet.webp" alt="Generated rental contract sheet showing two line items, the tiered daily rate applied automatically, and a calculated total" style="width:100%; max-width:600px; display:block; margin: 24px auto; border-radius: 8px;">

  <div class="callout">
    <p><strong>The bug that explained three symptoms at once:</strong> line items weren't showing, totals weren't calculating, and an internal field wasn't displaying — all three traced back to one line of code writing into an element that didn't exist, which silently stopped the script before it reached anything else. I found it not by re-reading the code, but by running the entire form headless in a browser-less DOM (Node + jsdom) and reading the first real error the console threw. That's the method I've used before every release since.</p>
  </div>

  <p>The pricing engine was the most delicate part: 100% the first day, 50% each additional day, except "day" skips the two days the shop is closed each week — so a rental from Saturday to Tuesday bills as a single day, not four. I verified the formula against a real example the team gave me (one item at 30€/day, two days, 45€ total — the same numbers in the screenshot above) before treating it as correct, not before.</p>

  <div class="stat-grid">
    <div class="stat-card"><span class="stat-value">3</span><span class="stat-label">contract types on one base</span></div>
    <div class="stat-card"><span class="stat-value">6</span><span class="stat-label">shipped versions</span></div>
    <div class="stat-card"><span class="stat-value">20</span><span class="stat-label">form fields (9 required)</span></div>
    <div class="stat-card"><span class="stat-value">~30</span><span class="stat-label">lines of optional backend</span></div>
    <div class="stat-card"><span class="stat-value">0€</span><span class="stat-label">cost</span></div>
  </div>
</section>

<section>
  <h2>Where these stop</h2>
  <ul>
    <li>Neither tool saves anything between sessions by design — no accounts, nothing to migrate, nothing to corrupt.</li>
    <li>No simultaneous editing between two people on the same file.</li>
    <li>Both exports depend on an external library loaded from a CDN.</li>
    <li>These tools remove the production cost of a task. They don't replace judgment — good copy, a fair negotiated discount, a signed contract are still a person's job.</li>
  </ul>
</section>
