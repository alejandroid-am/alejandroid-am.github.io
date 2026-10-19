---
layout: project
title: In-House Tools
description: A post generator and a contract generator in daily use at the shop where I work. Before, only 2 people could make a contract. Now even the interns can.
role: In-house designer. I define the problem, the behavior and the rules; Claude writes the code.
role_short: In-house designer
result: Two tools in daily use. Before, only 2 people could make a contract; now the interns can too.
tools: HTML, CSS, JavaScript, PHP (minimal backend where needed), Claude
year: 2026
home_order: 1
last_modified_at: 2026-10-20
categories: tools ux-ui
cover_image: /assets/img/tools/in-house-tools-cover.webp
thumb_image: /assets/img/tools/social-generator-brand-a-ui.webp
thumb_hover_image: /assets/img/tools/social-generator-brand-b-ui.webp
---

<img src="/assets/img/tools/social-generator-brand-a-ui.webp" alt="Screenshot of the social post generator interface, showing the template editor and a finished Halloween promotion post" class="project-hero-image" style="border-radius: 12px;">

<p class="case-hook">Before, only 2 people knew how to make a rental contract. Now even the interns can.</p>

<div class="callout">
  <p>Both tools run on a real employer's brand assets and business data, so what you see here is sanitized. The brand names are Brand A / Brand B, the logo is a placeholder, and the address, phone number and contract-number prefix are fake. The screenshots are real captures of the sanitized files, not mockups. The logic, the numbers and the versions are what shipped.</p>
</div>

<section>
  <h2>The Adobe subscription ended</h2>
  <p>I built these because the shop needed them. The Adobe subscription ended, and I don't think Canva Pro is worth what it costs. On top of that, a lot of time goes into composition: finding the images, choosing the typeface…</p>
</section>

<section>
  <h2>But: the posts have to stay consistent when I'm not there</h2>
  <p>I'm the one who makes the posts for social media. And I wanted the posts made while I'm away to stay consistent with what already existed.</p>
  <p>In Canva, if the designer isn't there and someone else takes over, there's a risk they won't use the right colors and typefaces.</p>
</section>

<section>
  <h2>So: how I work with Claude</h2>
  <p>With Claude, I made a folder for each project and put the context files and the rules in it: the brand identity and the current structure (in case of a redesign), so it knows what I'm working on. If there's already a design idea, I add it to that folder too, so it works from it.</p>
  <p>We already used Canva and Photoshop, so I decided the base should feel similar: a column on the left for the content and its settings, like in Canva and Photoshop.</p>
</section>

<section>
  <h2>What I decided: the post generator</h2>
  <ul>
    <li>Both brands share the same tool, with a toggle button. The interface changes depending on the brand you're working on, with each one's colors and identity, so you can tell them apart quickly.</li>
    <li>A <strong>panic button</strong> for real emergencies, or for when a creative block won't let us move forward: something quick for emergency posts.</li>
    <li>Based on earlier posts and on a modern, effective layout, I made several fixed but adjustable templates for different uses: video thumbnails, first carousel image, middle carousel images and last carousel image, posts with photos, without photos, text only, announcements, opening hours, etc.</li>
    <li>Each post can be adapted to different sizes while keeping its layout: story, 1:1 and vertical.</li>
    <li>You can edit the image (position, size) and the text too, but without much freedom, because the whole idea came from this: in Canva, if the designer isn't there and someone else takes over, there's a risk they won't use the right colors and typefaces.</li>
    <li>The colors come from the official brand guide (the PDF), where I took the HEX codes from.</li>
  </ul>

  <div class="bento-gallery" style="grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0;">
    <div class="bento-item">
      <img src="/assets/img/tools/social-generator-brand-a-ui.webp" alt="Brand A mode: bold yellow layout with a Halloween promotion post">
    </div>
    <div class="bento-item">
      <img src="/assets/img/tools/social-generator-brand-b-ui.webp" alt="Brand B mode: same tool switched to a dark, serif, premium identity">
    </div>
  </div>

  <p>The checkerboard pattern in the background came from an old Illustrator asset: six full-color files, 5.9 MB in total. I kept the one tile that repeats and rebuilt it as a single 28 KB layer that recolors itself for any palette, light or dark.</p>

  <div class="stat-grid">
    <div class="stat-card"><span class="stat-value">26</span><span class="stat-label">templates (12 shared)</span></div>
    <div class="stat-card"><span class="stat-value">30</span><span class="stat-label">contrast-checked color pairs</span></div>
    <div class="stat-card"><span class="stat-value">9</span><span class="stat-label">shipped versions</span></div>
    <div class="stat-card"><span class="stat-value">172 KB</span><span class="stat-label">total file size</span></div>
    <div class="stat-card"><span class="stat-value">0€</span><span class="stat-label">cost</span></div>
  </div>
</section>

<section>
  <h2>What I decided: the contract generator</h2>
  <ul>
    <li>The same principle: all the tools on the left.</li>
    <li>A section where the price can be edited by hand, in case of a negotiation.</li>
    <li>The card deposit is on the same sheet, but it only shows up if, and only if, the card deposit is selected.</li>
    <li>The most important fields are required before printing.</li>
    <li>A button to print a blank contract, in case someone wants to fill it in by hand.</li>
    <li>The interface shouldn't follow the style of the post generator: it had to be more accessible and more "serious".</li>
    <li>A formula so the price changes with the number of days rented, with specific rules: -50% from the second day, and Sundays and Mondays don't count because the shop is closed.</li>
  </ul>

  <img src="/assets/img/tools/contract-generator-sheet.webp" alt="Generated rental contract sheet showing two line items, the tiered daily rate applied automatically, and a calculated total" style="width:100%; max-width:600px; display:block; margin: 24px auto; border-radius: 8px;">

  <p>I checked the formula against a real example the team gave me before trusting it: one item at 30€ a day, rented for two days, 45€ in total. Those are the numbers in the screenshot above.</p>

  <div class="stat-grid">
    <div class="stat-card"><span class="stat-value">3</span><span class="stat-label">contract types on one base</span></div>
    <div class="stat-card"><span class="stat-value">0€</span><span class="stat-label">cost</span></div>
  </div>
</section>

<section>
  <h2>But: what went wrong</h2>
  <ul>
    <li><strong>The scroll.</strong> The tools column has several sections, so scrolling moved the whole page, including the design you were working on, and you lost sight of it. The idea is to keep the canvas of the image or post you're on fixed in place.</li>
    <li><strong>Transparency.</strong> At first, images with a transparent background didn't load properly.</li>
  </ul>
</section>

<section>
  <h2>How it was checked: Claude ran the tests</h2>
  <p>Claude ran the tests on its own. I had Claude verify every render and every color pair before each release, making sure every color combination passed the minimum set by WCAG.</p>
  <p>But that doesn't change the fact that, if you pick the colors by hand, you need judgment for taste and consistency: a red background with green text is neither accessible nor pretty.</p>
</section>

<section>
  <h2>So: what changed</h2>
  <ul>
    <li><strong>Post generator:</strong> we no longer pay for subscriptions to paid platforms. The learning curve is faster: pick a template, change the text and the color, and add an image if needed. Making content for social media takes less time (images only: videos still need editing and time to shoot).</li>
    <li><strong>Contract generator:</strong> it doesn't just cut the time it takes to make a contract, it also saves paper (the card deposit used to go on a separate sheet). Contract generation is now centralized and automated: an Excel file that took about 3 minutes to open, plus a separate Word file for the deposit, became a single HTML tool that is smarter and more intuitive.</li>
    <li><strong>Who uses it:</strong> before, 2 people could make contracts. Now even the interns can, with no friction and almost no learning curve.</li>
    <li><strong>Volume:</strong> on average, between 5 and 10 contracts a week, depending on the season.</li>
  </ul>
</section>

<section>
  <h2>And with the time saved</h2>
  <p>I use that time to optimize the shop's website with Claude Code and the web service: customer service, checking the logs on OVH, updating the modules, improving and optimizing.</p>
</section>

<section>
  <h2>Where these stop, honestly</h2>
  <ul>
    <li>Neither tool saves anything between sessions. That's on purpose: no accounts and nothing to migrate.</li>
    <li>Two people can't edit the same file at the same time.</li>
    <li>Both exports rely on an external library loaded from a CDN.</li>
    <li>The tools take care of the repetitive work. They don't replace judgment: good copy, a fair negotiated discount and a signed contract are still a person's job.</li>
  </ul>
</section>

<p class="case-closing">Now, when I'm not there, the posts made while I'm away stay consistent with what already existed.</p>
