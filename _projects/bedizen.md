---
layout: project
title: BEDiZEN
description: My final project for the CCI Campus Alsace certification. Version 1 coded by hand; after user tests, version 2 built with AI on a 4-column grid I defined.
role: Brand design, UX/UI. Version 1 coded by hand; version 2 built with AI on a grid I defined; database, hosting and WordPress set up by me.
role_short: Brand & UX/UI
result: Live website. Final project for the CCI Campus Alsace certification.
tools: Figma, Illustrator, HTML/CSS, Tailwind CSS, PHP, MySQL, WordPress
year: 2026
home_order: 3
last_modified_at: 2026-10-20
categories: identity ux-ui frontend motion
cover_image: /assets/img/bedizen-view.webp
---

<img src="/assets/img/BEDiZEN/bedizen_white.svg" alt="BEDiZEN logo, geometric wordmark with red accent dot" class="project-hero-image" style="width: 100%; max-width: 300px; margin: 40px auto; display: block;">

<p class="case-hook">The AI started out with its rounded borders and cards, but the brand is more brutalist and solid.</p>

<section>
  <h2>Version 1: coded by hand</h2>
  <p>BEDiZEN is a WebAR studio concept that gives small e-commerce businesses virtual try-ons, a feature usually reserved for large retailers. It was my final project for the CCI Campus Alsace Web UX/UI Designer certification, and the site is live.</p>
  <p>I made the first version myself, with HTML and CSS. Very little JS, or none, if I remember correctly.</p>
  <a href="http://alejandro.am.servd16161.odns.fr/" target="_blank" rel="noopener noreferrer" class="submit-btn" style="margin-top: 1rem; display: inline-block;">
    Visit the Live Site &rarr;
  </a>
</section>

<section>
  <h2>But: users couldn't tell what was clickable</h2>
  <p>Then came the user tests: <strong>7 people with different profiles</strong> took the test. Users couldn't tell which buttons were clickable, and they didn't know where they were on the site.</p>
</section>

<section>
  <h2>So: a grid that holds the whole site</h2>
  <p>I did a thorough review of the brand identity and of how I wanted BEDiZEN to be different. I used AI to develop a website based on a consistent grid that would convey structure (both of work and of sustainability), seriousness and modernity, but that would be easy to use.</p>
</section>

<section>
  <h2>But: I had to correct the AI</h2>
  <p>At first, the AI started out with its rounded borders and cards. The brand is more brutalist and solid, so: square corners, no rounding, none of that.</p>
  <p>I looked at groundbreaking sites, because I want to revolutionize the XR market on the web, so I went to sites like Awwwards. I asked it to create a 4-column grid that repeats across the whole site. I also had to correct the order of some things and how each column was used.</p>
  <p>The AI also helped me fix repeated code, where I could have used variables to reuse things and end up with fewer lines of code.</p>

  <div class="version-comparison">
    <div class="version-card">
      <div class="version-header">
        <h4>Version 1: coded by hand</h4>
        <span class="badge">HTML & CSS</span>
      </div>
      <img src="/assets/img/BEDiZEN/bedizen_web_v1.webp" alt="BEDiZEN website version 1, minimal layout with large whitespace" class="project-img-shadow">
      <div class="version-desc">
        <h4>What the user tests found</h4>
        <ul>
          <li>Users couldn't tell which buttons were clickable.</li>
          <li>Users didn't know where they were on the site.</li>
        </ul>
      </div>
    </div>

    <div class="version-card">
      <div class="version-header">
        <h4>Version 2: built with AI on my grid</h4>
        <span class="badge new">Current Version</span>
      </div>
      <img src="/assets/img/BEDiZEN/bedizen_web_v2.webp" alt="BEDiZEN website version 2, improved navigation and responsive layout" class="project-img-shadow">
      <div class="version-desc">
        <h4>What changed</h4>
        <ul>
          <li>A 4-column grid that repeats across the whole site, with square corners.</li>
          <li>Mobile-first layout in Tailwind CSS.</li>
          <li>Active states and breadcrumbs, so users know where they are.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section>
  <h2>The setup</h2>
  <p>I created the database and the hosting, and installed WordPress, the credentials, etc. The hosting is on O2switch: I edited the server files over FTP with FileZilla, and added WordPress plugins for security, SEO, WooCommerce, contact forms and caching.</p>
</section>

<section>
  <h2>Two videos, two formats</h2>
  <p>I produced two short videos that show the BEDiZEN experience. One is landscape, for YouTube. One is vertical, for Instagram and TikTok feeds.</p>

  <div class="video-duo">
    <div class="video-duo-item">
      <h4>La Réalité Augmentée native pour l'e-commerce</h4>
      <div class="video-frame ratio-16-9">
        <iframe src="https://player.vimeo.com/video/1194848845?app_id=122963" title="Bedizen - La Réalité Augmentée native Pour l'e-commerce" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>
      </div>
      <p class="version-desc">Landscape format, for YouTube and other horizontal placements.</p>
    </div>
    <div class="video-duo-item">
      <h4>L'Expérience Try-On en un Clic</h4>
      <div class="video-frame ratio-9-16">
        <iframe src="https://player.vimeo.com/video/1190134356?app_id=122963" title="BEDiZEN | L'Expérience Try-On en un Clic" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>
      </div>
      <p class="version-desc">De la simple navigation à l'immersion totale : un aperçu vertical pensé pour les réseaux sociaux.</p>
    </div>
  </div>
</section>

<p class="case-closing">On this project I really was full stack, even if it was only once.</p>

<section>
  <h2>Brand Guidelines</h2>
  <p>The full brand guidelines I wrote for BEDiZEN:</p>

  <div class="document-carousel-container">
    <button class="carousel-btn prev-btn" aria-label="Previous slide">&lt;</button>
    <div class="document-carousel">
      <img src="/assets/img/BEDiZEN/page1.webp" alt="BEDiZEN brand guidelines, cover page" class="carousel-slide active-slide">
      <img src="/assets/img/BEDiZEN/page2.webp" alt="Brand guidelines, table of contents" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page3.webp" alt="Brand guidelines, brand overview" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page4.webp" alt="Brand guidelines, mission statement" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page5.webp" alt="Brand guidelines, logo specifications" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page6.webp" alt="Brand guidelines, logo clear space" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page7.webp" alt="Brand guidelines, color palette" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page8.webp" alt="Brand guidelines, typography system" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page9.webp" alt="Brand guidelines, typography usage" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page10.webp" alt="Brand guidelines, iconography" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page11.webp" alt="Brand guidelines, photography style" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page12.webp" alt="Brand guidelines, imagery guidelines" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page13.webp" alt="Brand guidelines, layout grid" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page14.webp" alt="Brand guidelines, business card design" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page15.webp" alt="Brand guidelines, stationery system" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page16.webp" alt="Brand guidelines, digital applications" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page17.webp" alt="Brand guidelines, social media templates" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page18.webp" alt="Brand guidelines, merchandise design" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page19.webp" alt="Brand guidelines, brand voice" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page20.webp" alt="Brand guidelines, tone of voice examples" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page21.webp" alt="Brand guidelines, web design system" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page22.webp" alt="Brand guidelines, UI components" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page23.webp" alt="Brand guidelines, responsive design" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page24.webp" alt="Brand guidelines, accessibility standards" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page25.webp" alt="Brand guidelines, motion guidelines" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page26.webp" alt="Brand guidelines, presentation templates" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page27.webp" alt="Brand guidelines, environmental design" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page28.webp" alt="Brand guidelines, signage system" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page29.webp" alt="Brand guidelines, brand do's and don'ts" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page30.webp" alt="Brand guidelines, implementation checklist" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page31.webp" alt="Brand guidelines, contact information" class="carousel-slide">
      <img src="/assets/img/BEDiZEN/page32.webp" alt="Brand guidelines, back cover" class="carousel-slide">
    </div>
    <button class="carousel-btn next-btn" aria-label="Next slide">&gt;</button>
    <div class="carousel-counter" aria-live="polite">1 / 32</div>
  </div>
</section>

<section>
  <h2>Project Gallery</h2>
  <p>Mockups of the BEDiZEN brand in use.</p>
</section>

<section class="bento-gallery">
  <div class="bento-item" style="grid-column: span 2; grid-row: span 2;">
    <a href="javascript:void(0)" class="zoom-trigger">
      <img src="/assets/img/BEDiZEN/flyer.jpg" alt="BEDiZEN promotional flyer design featuring brand colors and AR imagery" data-caption="Promotional flyer for events">
    </a>
  </div>
  <div class="bento-item" style="grid-column: span 2; grid-row: span 2;">
    <a href="javascript:void(0)" class="zoom-trigger">
      <img src="/assets/img/BEDiZEN/carte-visite-mockup.jpg" alt="BEDiZEN business cards showing front and back design" data-caption="Business card design">
    </a>
  </div>
  <div class="bento-item" style="grid-column: span 2; grid-row: span 2;">
    <a href="javascript:void(0)" class="zoom-trigger">
      <img src="/assets/img/BEDiZEN/mockup-cap-bedizen-4.webp" alt="BEDiZEN logo embroidered on a black cap" data-caption="Branded merchandise, cap">
    </a>
  </div>
  <div class="bento-item">
    <a href="javascript:void(0)" class="zoom-trigger">
      <img src="/assets/img/BEDiZEN/bedizen_mockup_3.webp" alt="BEDiZEN mobile interface showing AR product viewer" data-caption="Mobile AR interface">
    </a>
  </div>
  <div class="bento-item">
    <a href="javascript:void(0)" class="zoom-trigger">
      <img src="/assets/img/BEDiZEN/bedizen_mockup_1.webp" alt="BEDiZEN branding on a Meta Quest VR headset" data-caption="VR headset branding">
    </a>
  </div>
  <div class="bento-item" style="grid-column: span 2;">
    <a href="javascript:void(0)" class="zoom-trigger">
      <img src="/assets/img/BEDiZEN/bedizen_mockup_2.webp" alt="BEDiZEN logo on a modern building facade at night" data-caption="Exterior branding, building facade">
    </a>
  </div>
</section>
