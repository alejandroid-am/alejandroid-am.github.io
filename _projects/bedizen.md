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
last_modified_at: 2026-11-11
categories: identity ux-ui frontend motion
cover_image: /assets/img/bedizen-view.webp

# --- Layout C "Gallery with captions" (see _projects/spin_app.md) ---
case_layout: c
summary: The AI started out with its rounded borders and cards, but the brand is more brutalist and solid.
project_type: Brand and website
hero_image: /assets/img/BEDiZEN/bedizen_white.svg
hero_w: 720
hero_h: 158
hero_alt: BEDiZEN logo, geometric wordmark with red accent dot
hero_bg: "#1A1B1C"
load_poppins: true   # Poppins is the brand typeface (type specimen below)
# Colours, names and hex from the brand guidelines (page 25).
palette:
  - { name: Horizon Noir, hex: "#1A1B1C" }
  - { name: Lueur Blanche, hex: "#F2F1F0" }
  - { name: Rouge Pionnier, hex: "#E13C30" }
logos:
  - { src: /assets/img/BEDiZEN/bedizen_white.svg, alt: "BEDiZEN logo, white version on dark", bg: dark, caption: "Logo on dark" }
  - { placeholder: "Dark version on light to come", caption: "Logo on light" }
  - { placeholder: "Icon file to come", caption: "Icon" }
---
<p class="c-cta"><a class="btn" href="http://alejandro.am.servd16161.odns.fr/" target="_blank" rel="noopener noreferrer">Visit the Live Site &rarr;</a></p>

{% capture before %}{% include case/figure.html src="/assets/img/BEDiZEN/bedizen_web_v1.webp" w=1884 h=874 alt="BEDiZEN website version 1, minimal layout with large whitespace" %}{% endcapture %}
{% capture after %}{% include case/figure.html src="/assets/img/BEDiZEN/bedizen_web_v2.webp" w=1896 h=872 alt="BEDiZEN website version 2, improved navigation and responsive layout" %}{% endcapture %}
{% include case/compare.html title="A grid that holds the whole site" before_title="Version 1: coded by hand" before_tag="HTML & CSS" before=before after_title="Version 2: built with AI on my grid" after_tag="Current Version" after=after %}

<h2>Two videos, two formats</h2>

<div class="video-duo">
  <div class="video-duo-item">
    <h3 lang="fr">La Réalité Augmentée native pour l'e-commerce</h3>
    <div class="video-frame ratio-16-9">
      <iframe src="https://player.vimeo.com/video/1194848845?app_id=122963" title="Bedizen - La Réalité Augmentée native Pour l'e-commerce" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>
    </div>
  </div>
  <div class="video-duo-item">
    <h3 lang="fr">L'Expérience Try-On en un Clic</h3>
    <div class="video-frame ratio-9-16">
      <iframe src="https://player.vimeo.com/video/1190134356?app_id=122963" title="BEDiZEN | L'Expérience Try-On en un Clic" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>
    </div>
  </div>
</div>

<h2>Brand Guidelines</h2>

{% include case/palette.html colors=page.palette %}

{% include case/type.html family="Poppins" sample="Aa Bb Cc 0123" weights="Bold, Medium" %}

{% include case/logo.html items=page.logos %}

<div class="document-carousel-container">
    <button class="carousel-btn prev-btn" aria-label="Previous slide">&lt;</button>
    <div class="document-carousel">
      <img src="/assets/img/BEDiZEN/page1.webp" alt="BEDiZEN brand guidelines, cover page" class="carousel-slide active-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page1-960w.webp 960w, /assets/img/BEDiZEN/page1.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px">
      <img src="/assets/img/BEDiZEN/page2.webp" alt="Brand guidelines, table of contents" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page2-960w.webp 960w, /assets/img/BEDiZEN/page2.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page3.webp" alt="Brand guidelines, brand overview" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page3-960w.webp 960w, /assets/img/BEDiZEN/page3.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page4.webp" alt="Brand guidelines, mission statement" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page4-960w.webp 960w, /assets/img/BEDiZEN/page4.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page5.webp" alt="Brand guidelines, logo specifications" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page5-960w.webp 960w, /assets/img/BEDiZEN/page5.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page6.webp" alt="Brand guidelines, logo clear space" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page6-960w.webp 960w, /assets/img/BEDiZEN/page6.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page7.webp" alt="Brand guidelines, color palette" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page7-960w.webp 960w, /assets/img/BEDiZEN/page7.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page8.webp" alt="Brand guidelines, typography system" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page8-960w.webp 960w, /assets/img/BEDiZEN/page8.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page9.webp" alt="Brand guidelines, typography usage" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page9-960w.webp 960w, /assets/img/BEDiZEN/page9.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page10.webp" alt="Brand guidelines, iconography" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page10-960w.webp 960w, /assets/img/BEDiZEN/page10.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page11.webp" alt="Brand guidelines, photography style" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page11-960w.webp 960w, /assets/img/BEDiZEN/page11.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page12.webp" alt="Brand guidelines, imagery guidelines" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page12-960w.webp 960w, /assets/img/BEDiZEN/page12.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page13.webp" alt="Brand guidelines, layout grid" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page13-960w.webp 960w, /assets/img/BEDiZEN/page13.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page14.webp" alt="Brand guidelines, business card design" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page14-960w.webp 960w, /assets/img/BEDiZEN/page14.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page15.webp" alt="Brand guidelines, stationery system" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page15-960w.webp 960w, /assets/img/BEDiZEN/page15.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page16.webp" alt="Brand guidelines, digital applications" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page16-960w.webp 960w, /assets/img/BEDiZEN/page16.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page17.webp" alt="Brand guidelines, social media templates" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page17-960w.webp 960w, /assets/img/BEDiZEN/page17.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page18.webp" alt="Brand guidelines, merchandise design" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page18-960w.webp 960w, /assets/img/BEDiZEN/page18.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page19.webp" alt="Brand guidelines, brand voice" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page19-960w.webp 960w, /assets/img/BEDiZEN/page19.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page20.webp" alt="Brand guidelines, tone of voice examples" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page20-960w.webp 960w, /assets/img/BEDiZEN/page20.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page21.webp" alt="Brand guidelines, web design system" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page21-960w.webp 960w, /assets/img/BEDiZEN/page21.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page22.webp" alt="Brand guidelines, UI components" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page22-960w.webp 960w, /assets/img/BEDiZEN/page22.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page23.webp" alt="Brand guidelines, responsive design" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page23-960w.webp 960w, /assets/img/BEDiZEN/page23.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page24.webp" alt="Brand guidelines, accessibility standards" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page24-960w.webp 960w, /assets/img/BEDiZEN/page24.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page25.webp" alt="Brand guidelines, motion guidelines" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page25-960w.webp 960w, /assets/img/BEDiZEN/page25.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page26.webp" alt="Brand guidelines, presentation templates" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page26-960w.webp 960w, /assets/img/BEDiZEN/page26.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page27.webp" alt="Brand guidelines, environmental design" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page27-960w.webp 960w, /assets/img/BEDiZEN/page27.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page28.webp" alt="Brand guidelines, signage system" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page28-960w.webp 960w, /assets/img/BEDiZEN/page28.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page29.webp" alt="Brand guidelines, brand do's and don'ts" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page29-960w.webp 960w, /assets/img/BEDiZEN/page29.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page30.webp" alt="Brand guidelines, implementation checklist" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page30-960w.webp 960w, /assets/img/BEDiZEN/page30.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page31.webp" alt="Brand guidelines, contact information" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page31-960w.webp 960w, /assets/img/BEDiZEN/page31.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
      <img src="/assets/img/BEDiZEN/page32.webp" alt="Brand guidelines, back cover" class="carousel-slide" width="2339" height="1654" srcset="/assets/img/BEDiZEN/page32-960w.webp 960w, /assets/img/BEDiZEN/page32.webp 2339w" sizes="(max-width: 767px) 100vw, 1100px" loading="lazy" decoding="async">
    </div>
    <button class="carousel-btn next-btn" aria-label="Next slide">&gt;</button>
    <div class="carousel-counter" aria-live="polite">1 / 32</div>
  </div>

{% include case/pair.html a="/assets/img/BEDiZEN/flyer.jpg" a_alt="BEDiZEN promotional flyer design featuring brand colors and AR imagery" a_w=1500 a_h=1125 a_caption="Promotional flyer for events" b="/assets/img/BEDiZEN/carte-visite-mockup.jpg" b_alt="BEDiZEN business cards showing front and back design" b_w=1000 b_h=1250 b_caption="Business card design" %}

{% include case/figure.html src="/assets/img/BEDiZEN/bedizen_mockup_2.webp" w=4000 h=3000 alt="BEDiZEN logo on a modern building facade at night" caption="Exterior branding, building facade" %}

{% capture long %}
<h3>Version 1: coded by hand</h3>
<p>BEDiZEN is a WebAR studio concept that gives small e-commerce businesses virtual try-ons, a feature usually reserved for large retailers. It was my final project for the CCI Campus Alsace Web UX/UI Designer certification, and the site is live.</p>
<p>I made the first version myself, with HTML and CSS. Very little JS, or none, if I remember correctly.</p>

<h3>Users couldn't tell what was clickable</h3>
<p>Then came the user tests: <strong>7 people with different profiles</strong> took the test. Users couldn't tell which buttons were clickable, and they didn't know where they were on the site.</p>

<h3>A grid that holds the whole site</h3>
<p>I did a thorough review of the brand identity and of how I wanted BEDiZEN to be different. I used AI to develop a website based on a consistent grid that would convey structure (both of work and of sustainability), seriousness and modernity, but that would be easy to use.</p>

<h3>I had to correct the AI</h3>
<p>At first, the AI started out with its rounded borders and cards. The brand is more brutalist and solid, so: square corners, no rounding, none of that.</p>
<p>I looked at groundbreaking sites, because I want to revolutionize the XR market on the web, so I went to sites like Awwwards. I asked it to create a 4-column grid that repeats across the whole site. I also had to correct the order of some things and how each column was used.</p>
<p>The AI also helped me fix repeated code, where I could have used variables to reuse things and end up with fewer lines of code.</p>
<h4>Version 1: coded by hand (HTML & CSS)</h4>
<p><strong>What the user tests found</strong></p>
<ul>
  <li>Users couldn't tell which buttons were clickable.</li>
  <li>Users didn't know where they were on the site.</li>
</ul>
<h4>Version 2: built with AI on my grid (Current Version)</h4>
<p><strong>What changed</strong></p>
<ul>
  <li>A 4-column grid that repeats across the whole site, with square corners.</li>
  <li>Mobile-first layout in Tailwind CSS.</li>
  <li>Active states and breadcrumbs, so users know where they are.</li>
</ul>

<h3>The setup</h3>
<p>I created the database and the hosting, and installed WordPress, the credentials, etc. The hosting is on O2switch: I edited the server files over FTP with FileZilla, and added WordPress plugins for security, SEO, WooCommerce, contact forms and caching.</p>

<h3>Two videos, two formats</h3>
<p>I produced two short videos that show the BEDiZEN experience. One is landscape, for YouTube. One is vertical, for Instagram and TikTok feeds.</p>
<p><em lang="fr">La Réalité Augmentée native pour l'e-commerce</em>: Landscape format, for YouTube and other horizontal placements.</p>
<p><em lang="fr">L'Expérience Try-On en un Clic</em>: <span lang="fr">De la simple navigation à l'immersion totale : un aperçu vertical pensé pour les réseaux sociaux.</span></p>

<p class="c-closing">On this project I really was full stack, even if it was only once.</p>

<h3>Brand Guidelines</h3>
<p>The full brand guidelines I wrote for BEDiZEN:</p>

<h3>Project Gallery</h3>
<p>Mockups of the BEDiZEN brand in use.</p>
{% include case/pair.html a="/assets/img/BEDiZEN/mockup-cap-bedizen-4.webp" a_alt="BEDiZEN logo embroidered on a black cap" a_w=4004 a_h=5334 a_caption="Branded merchandise, cap" b="/assets/img/BEDiZEN/bedizen_mockup_3.webp" b_alt="BEDiZEN mobile interface showing AR product viewer" b_w=3284 b_h=4166 b_caption="Mobile AR interface" %}
{% include case/figure.html src="/assets/img/BEDiZEN/bedizen_mockup_1.webp" w=5334 h=4004 alt="BEDiZEN branding on a Meta Quest VR headset" caption="VR headset branding" %}
{% endcapture %}
{% include case/detail.html summary="Le détail" summary_lang="fr" content=long %}
