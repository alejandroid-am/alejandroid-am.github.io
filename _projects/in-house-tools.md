---
layout: project
title: In-House Tools
description: Two tools I built for my own day job because the old way was eating hours I didn't have. This is the honest version of how and why, told the way I'd actually tell you.
role: In-house Designer, directs the build with AI pair-programming
tools: HTML, CSS, JavaScript, PHP (minimal backend where needed), Claude
year: 2026
categories: tools ux-ui
cover_image: /assets/img/tools/in-house-tools-cover.webp
---

<img src="/assets/img/tools/social-generator-brand-a-ui.webp" alt="Screenshot of the social post generator interface, showing the template editor and a finished Halloween promotion post" class="project-hero-image" style="border-radius: 12px;">

<div class="callout">
  <p>Quick disclosure before you scroll: both tools below run on a real employer's brand assets and business data, so what you're looking at is sanitized. Brand names are Brand A / Brand B, the logo is a placeholder mark, and the address, phone number and contract-number prefix are all fake. The screenshots are real though, actual captures of the sanitized files, not mockups I drew to look convincing. The logic, the numbers, the versions: all of that is exactly what shipped.</p>
</div>

<section>
  <h2>So, about this series</h2>
  <p>I'm the in-house designer for a small retail business with two product lines under different visual identities. Design is my actual job there. Code isn't. But here's the thing I kept noticing: most of what actually slowed the team down wasn't a design problem at all, it was a small, boring, well-defined software problem wearing a design costume.</p>
  <p>So I stopped waiting for someone else to fix it and started directing Claude to build single-purpose tools instead. I define the problem, the constraints, and exactly how it should behave. The AI writes the code. I test every single version against how the tool actually gets used in the wild, and I push back hard when it doesn't hold up. That's the whole method, and it's the same method both times below.</p>
  <p>Two tools have shipped so far. There will probably be more while I'm still there, which is why this page is built to grow instead of getting rebuilt from scratch every time. Consider this a running log, not a closed case.</p>
</section>

<section>
  <h2>Chapter 1: the tool that gave me my Tuesday nights back</h2>
  <p>Picture the setup: two brands, same company, completely opposite personalities. Brand A is loud and colorful. Brand B is sober and expensive-looking. Both need fresh social posts every single week, and here's what nobody tells you about that job: the creative part was never the hard part. I could design a post in my sleep. The problem was everything around it, the stock check, the ERP sync, the SEO, the five other hats I wear on any given day. A five-slide carousel built by hand in Illustrator had to fight for time against things that were, frankly, on fire. Posts went out late, or they went out fast and wrong.</p>
  <p>I looked at the two "obvious" fixes and rejected both. A template tool with team seats charges for the features that matter and, worse, leaves every freedom open that I specifically needed locked shut. A template suggests a default. It doesn't stop anyone from wandering off it. And doing it by hand forever wasn't a plan, it was just me, indefinitely, never sick, never busy, never gone. What I actually needed was our own Canva, with the brand guidelines built into the walls instead of taped to the fridge.</p>

  <h3>The calls I made, and why</h3>
  <ul>
    <li><strong>One file, not an app.</strong> Double-click to open, copy to a shared drive, no service that can quietly die on a Tuesday. The trade-off, and I made it on purpose: no autosave, no two people editing at once, and shipping an update means swapping a file. Fine by me.</li>
    <li><strong>A closed palette. No hex field, anywhere.</strong> Not being able to leave the brand guidelines isn't a limitation I settled for. It's the entire feature.</li>
    <li><strong>The tool's own interface wears the brand it's building for.</strong> Switch to Brand A, the whole UI turns loud and yellow. Switch to Brand B, it goes dark and serif. Seeing the palette while you compose catches the mistake before you make it, not after.</li>
  </ul>

  <div class="bento-gallery" style="grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0;">
    <div class="bento-item">
      <img src="/assets/img/tools/social-generator-brand-a-ui.webp" alt="Brand A mode: bold yellow layout with a Halloween promotion post">
    </div>
    <div class="bento-item">
      <img src="/assets/img/tools/social-generator-brand-b-ui.webp" alt="Brand B mode: same tool switched to a dark, serif, premium identity">
    </div>
  </div>

  <p>One small detail I'm genuinely proud of: the checkerboard motif you see in the background came from an old Illustrator asset shipping as six full-color files weighing 5.9 MB combined. I dug out the one tile that actually repeats and rebuilt it as a single 28 KB layer that recolors itself for any palette, light or dark. No reason to redraw what already existed.</p>

  <p>Nine versions later, here's what actually mattered along the way. Version 1 covered the whole cycle (pick, write, frame, export) before I let myself add variety, because a half-finished tool doesn't get used, it gets abandoned politely. Version 4 added the interior and closing slides and automated the slide counter, because someone (often me) kept typing slide numbers by hand and skipping one. Version 5 caught three brand-consistency slips just by watching the tool get used: a price badge sitting on top of an ornament on one brand, a checkerboard too small to read, a product photo getting its head cropped off. None of these were code problems. Every one of them was a rule that worked for one brand and got applied to both without anyone checking. And version 9, the last one, added a randomizer across 30 contrast-checked color pairings plus a full post generator pulling from 31 pre-written posts. That's the actual answer to the actual problem: a slammed week doesn't produce a perfect post, it produces a rushed one, a random one, or nothing. Now it produces something, every time.</p>

  <h3>How I know it actually works</h3>
  <p>Every version runs an automated check across all 38 brand times template combinations: does it render, is any field left empty. The 30 color pairings are all audited against WCAG contrast, so the ones that fail never even get offered. Every pre-written post gets checked against a template that actually exists for its brand. I don't ship on vibes.</p>

  <div class="stat-grid">
    <div class="stat-card"><span class="stat-value">~15 min</span><span class="stat-label">per post now, down from 1 to 2 hours</span></div>
    <div class="stat-card"><span class="stat-value">26</span><span class="stat-label">templates (12 shared)</span></div>
    <div class="stat-card"><span class="stat-value">30</span><span class="stat-label">contrast-audited color pairs</span></div>
    <div class="stat-card"><span class="stat-value">9</span><span class="stat-label">shipped versions</span></div>
    <div class="stat-card"><span class="stat-value">172 KB</span><span class="stat-label">total file size</span></div>
    <div class="stat-card"><span class="stat-value">0€</span><span class="stat-label">cost</span></div>
  </div>
  <p style="color:var(--text-subtle); font-size:0.9rem;">Full honesty on that 15-minute number: it's a feel, not a stopwatch reading. I've never timed it properly, because in this role I get interrupted mid-task more often than not, juggling three or four jobs at once. Which, if you think about it, is exactly why this tool needed to exist in the first place.</p>
</section>

<section>
  <h2>Chapter 2: teaching a spreadsheet's job to a machine that never gets tired</h2>
  <p>The store rents out costumes, and every single rental needs a signed contract. That used to mean paper filled out by hand, then later a spreadsheet someone had to edit, calculate, and print fresh for every customer. The pricing itself is sneakier than it looks: the daily rate changes the longer you rent, and the shop is closed two days a week, so "days the costume was out" and "days you actually get charged for" are two different numbers. Every contract ate into selling time, calculator in hand, customer standing right there watching you do math.</p>
  <p>A generic rental SaaS was never going to reproduce a legal document the team had already fought to get right, in its exact paper layout, with its exact clauses. What the shop actually needed was the same document it already trusted, with the machine doing the arithmetic and the human still making every real decision: negotiating, agreeing, signing.</p>

  <h3>The calls I made, and why</h3>
  <ul>
    <li><strong>Automate the math, never the decision.</strong> The per-day price calculates itself. A discount negotiated with a customer stays behind a collapsed dropdown instead of sitting in a field anyone could nudge by accident.</li>
    <li><strong>The smallest backend I could get away with.</strong> The contract counter runs with no server at all by default. Only where several people genuinely needed one unique number on the same day did I add anything, and even then it's not a database, it's a 30-line PHP file with file locking, sitting on hosting the business already pays for.</li>
    <li><strong>Sensitive data handled by simply not digitizing it.</strong> When a deposit is guaranteed by card, the printed sheet gets blank lines for the card number, expiry, and security code. No input field, anywhere. The salesperson never types a customer's card details. Only the customer writes them, by hand, on paper, the way it's always been done.</li>
  </ul>

  <img src="/assets/img/tools/contract-generator-sheet.webp" alt="Generated rental contract sheet showing two line items, the tiered daily rate applied automatically, and a calculated total" style="width:100%; max-width:600px; display:block; margin: 24px auto; border-radius: 8px;">

  <p>The pricing engine was the trickiest part to get right, and I mean that as a compliment to how deceptively simple it looks: 100% the first day, 50% each day after, except "day" quietly skips the two days the shop is closed. Rent something from Saturday to Tuesday and it bills as a single day, not four. I checked the formula against a real example the team handed me (one item at 30€ a day, two days, 45€ total, the exact numbers in the screenshot above) before I trusted it, not after.</p>

  <p>Before every release, I run the entire form headless in a browser-less DOM (Node plus jsdom) and watch what the console actually says. It's saved me more than once, and it's simply part of the process now, not a reaction to anything going wrong.</p>

  <div class="stat-grid">
    <div class="stat-card"><span class="stat-value">3</span><span class="stat-label">contract types on one base</span></div>
    <div class="stat-card"><span class="stat-value">6</span><span class="stat-label">shipped versions</span></div>
    <div class="stat-card"><span class="stat-value">20</span><span class="stat-label">form fields (9 required)</span></div>
    <div class="stat-card"><span class="stat-value">~30</span><span class="stat-label">lines of optional backend</span></div>
    <div class="stat-card"><span class="stat-value">0€</span><span class="stat-label">cost</span></div>
  </div>
</section>

<section>
  <h2>Where these stop, honestly</h2>
  <ul>
    <li>Neither tool saves anything between sessions. That's on purpose: no accounts, nothing to migrate, nothing to quietly corrupt.</li>
    <li>No two people editing the same file at once.</li>
    <li>Both exports lean on an external library loaded from a CDN.</li>
    <li>These tools kill the busywork. They don't replace judgment. Good copy, a fair negotiated discount, a signed contract: still very much a human's job, and I wouldn't want it any other way.</li>
  </ul>
  <p>If you made it this far: thanks for reading a case study about a costume shop's Tuesday like it was a heist movie. That's kind of the point. Most of the good design work I do never touches Figma, and I think that's worth saying out loud instead of hiding it below the fold.</p>
</section>
