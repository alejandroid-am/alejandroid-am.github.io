---
layout: project
title: BEDiZEN
description: My final project for the CCI Campus Alsace certification. Version 1 coded by hand; after user tests, version 2 built with AI on a 4-column grid I defined.
role: Brand design, UX/UI. Version 1 coded by hand; version 2 built with AI on a grid I defined; database, hosting and WordPress set up by me.
role_short: Brand & UX/UI
result: Live website. Final project for the CCI Campus Alsace certification.
tools: Figma, Illustrator, HTML/CSS, Tailwind CSS, PHP, MySQL, WordPress
year: 2026
home_order: 4
last_modified_at: 2026-11-11
categories: identity ux-ui frontend motion
cover_image: /assets/img/bedizen-view.webp

# --- Layout C "Gallery with captions" (see _projects/spin_app.md) ---
case_layout: c
summary: The AI started out with its rounded borders and cards, but the brand is more brutalist and solid.
project_type: Brand and website
# Black logo: Ale's definitive black version (Logo_BEDiZEN_black_definitive.svg,
# 2026-11-12), saved as bedizen_black.svg.
hero_image: /assets/img/BEDiZEN/bedizen_black.svg
hero_w: 870
hero_h: 191
hero_alt: The BEDiZEN homepage, with the logo and the WordPress, PrestaShop and Shopify icons appearing one by one
hero_bg: "#F2F1F0"
# Hero video: a recording of the live homepage (Bedizen-homepage-video.mp4, Ale),
# no audio, 1280 px, muted loop; with reduced motion the poster shows.
hero_video: /assets/img/BEDiZEN/bedizen-homepage.mp4
hero_video_webm: /assets/img/BEDiZEN/bedizen-homepage.webm
hero_video_poster: /assets/img/BEDiZEN/bedizen-homepage-poster.webp
hero_video_w: 1280
hero_video_h: 594
load_poppins: true   # Poppins is the brand typeface (type specimen below)
# Colours, names and hex from the brand guidelines (page 25).
palette:
  - { name: Horizon Noir, hex: "#1A1B1C", text: "#F2F1F0", use: Primaire }
  - { name: Lueur Blanche, hex: "#F2F1F0", text: "#1A1B1C", use: Primaire }
  - { name: Rouge Pionnier, hex: "#E13C30", text: "#1A1B1C", use: Accentuation }
# "use" from the colour hierarchy (guidelines page 26). Type hierarchy from page 22:
# Titre = Poppins Bold, Sous-Titre = Poppins SemiBold, text = Poppins Medium.
# Each row shows the role written in its own style (no sample text).
type_scale:
  - { role: title, key: ts_title, weight: 700, label: "Poppins Bold" }
  - { role: subtitle, key: ts_subtitle, weight: 600, label: "Poppins SemiBold" }
  - { role: text, key: ts_text, weight: 500, label: "Poppins Medium" }
# Mockups, in one bento gallery (6-column grid: cols / rows per piece).
gallery:
  - { src: /assets/img/BEDiZEN/bedizen_mockup_2.webp, alt: "BEDiZEN logo on a modern building facade at night", w: 4000, h: 3000, cols: 4, rows: 3 }
  - { src: /assets/img/BEDiZEN/mockup-cap-bedizen-4.webp, alt: "BEDiZEN logo embroidered on a black cap", w: 4004, h: 5334, cols: 2, rows: 3 }
  - { src: /assets/img/BEDiZEN/bedizen_mockup_3.webp, alt: "BEDiZEN mobile interface showing AR product viewer", w: 3284, h: 4166, cols: 2, rows: 3 }
  - { src: /assets/img/BEDiZEN/bedizen_mockup_1.webp, alt: "BEDiZEN branding on a Meta Quest VR headset", w: 5334, h: 4004, cols: 4, rows: 3 }
  - { src: /assets/img/BEDiZEN/flyer.jpg, alt: "BEDiZEN promotional flyer design featuring brand colors and AR imagery", w: 1500, h: 1125, cols: 4, rows: 3 }
  - { src: /assets/img/BEDiZEN/carte-visite-mockup.jpg, alt: "BEDiZEN business cards showing front and back design", w: 1000, h: 1250, cols: 2, rows: 3 }
brand_pdf: /assets/docs/bedizen-charte-graphique.pdf
logos:
  - { src: /assets/img/BEDiZEN/bedizen_black.svg, alt: "BEDiZEN logo, black version on light", bg: light, caption: "Logo" }
---
<p class="c-cta"><a class="btn" href="http://alejandro.am.servd16161.odns.fr/" target="_blank" rel="noopener noreferrer">Visit the Live Site &rarr;</a></p>

{% capture before %}{% include case/figure.html src="/assets/img/BEDiZEN/bedizen_web_v1.webp" w=1884 h=874 alt="BEDiZEN website version 1, minimal layout with large whitespace" %}{% endcapture %}
{% capture after %}{% include case/figure.html src="/assets/img/BEDiZEN/bedizen_web_v2.webp" w=1896 h=872 alt="BEDiZEN website version 2, improved navigation and responsive layout" %}{% endcapture %}
{% include case/compare.html title="A grid that holds the whole site" before_title="Version 1: coded by hand" before_tag="HTML & CSS" before=before after_title="Version 2: built with AI on my grid" after_tag="Current Version" after=after %}

<h2>Two videos, two formats</h2>

<div class="video-duo">
  <div class="video-duo-item">
    <h3 lang="fr">La Réalité Augmentée native pour l'e-commerce</h3>
    {% include vimeo.html id="1194848845" title="Bedizen - La Réalité Augmentée native Pour l'e-commerce" ratio="16-9" logo="/assets/img/BEDiZEN/bedizen_white.svg" %}
  </div>
  <div class="video-duo-item">
    <h3 lang="fr">L'Expérience Try-On en un Clic</h3>
    {% include vimeo.html id="1190134356" title="BEDiZEN | L'Expérience Try-On en un Clic" ratio="9-16" logo="/assets/img/BEDiZEN/bedizen_white.svg" %}
  </div>
</div>

<h2>Brand Guidelines</h2>

{% include case/figure.html src="/assets/img/BEDiZEN/bedizen-logo-construction.webp" w=798 h=609 narrow=true alt="The BEDiZEN wordmark with the circles and guide lines of its construction" %}

{% include case/pair.html a="/assets/img/BEDiZEN/bedizen-icon-clear-space.webp" a_w=1600 a_h=1532 a_alt="The BEDiZEN icon on a grid that shows the clear space around it" b="/assets/img/BEDiZEN/bedizen-wordmark-clear-space.webp" b_w=1600 b_h=681 b_alt="The BEDiZEN wordmark on a grid that shows the clear space around it" %}

{% include case/palette.html colors=page.palette %}

{% include case/type-scale.html family="Poppins" class_key="ts_geometric_sans" rows=page.type_scale %}

<p class="c-cta"><a class="btn" href="{{ page.brand_pdf }}" download>Download the brand guidelines (PDF, 34 pages, 6.6 MB)</a></p>

<h2>Project Gallery</h2>

<p>Mockups of the BEDiZEN brand in use.</p>

{% include case/bento.html items=page.gallery %}

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
{% include case/figure.html src="/assets/img/BEDiZEN/bedizen-wordpress-back-office.webp" w=1902 h=884 alt="The BEDiZEN WordPress dashboard, with the WooCommerce setup, Wordfence, Limit Login Attempts and Cookie Compliance blocks" caption="WordPress back office" %}

<h3>Two videos, two formats</h3>
<p>I produced two short videos that show the BEDiZEN experience. One is landscape, for YouTube. One is vertical, for Instagram and TikTok feeds.</p>
<p><em lang="fr">La Réalité Augmentée native pour l'e-commerce</em>: Landscape format, for YouTube and other horizontal placements.</p>
<p><em lang="fr">L'Expérience Try-On en un Clic</em>: <span lang="fr">De la simple navigation à l'immersion totale : un aperçu vertical pensé pour les réseaux sociaux.</span></p>

<p class="c-closing">It was a school project, done with the school's methodology. For version 2 I used Tailwind, with AI help in VS Code. The plugins, the WordPress back office and the theme over FTP I did by hand, with AI where it could step in.</p>

<h3>Brand Guidelines</h3>
<p>The full brand guidelines I wrote for BEDiZEN: <a href="{{ page.brand_pdf }}" download>PDF, 34 pages</a>.</p>

{% endcapture %}
{% include case/detail.html summary="Le détail" summary_lang="fr" content=long %}
