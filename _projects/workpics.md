---
layout: project
title: WorkPics
description: Logo and app screens for a developer friend's field reporting app for construction teams, now published on Google Play.
role: Visual Design (Logo & App Screens)
tools: Figma, Illustrator
year: 2025
categories: ux-ui identity
cover_image: /assets/img/workpics-view.webp
home_order: 5
hide_from_home: true   # recommendation 2026-11-11, see NOTAS
last_modified_at: 2026-11-11

# --- Layout C "Gallery with captions" (see _projects/spin_app.md) ---
case_layout: c
summary: People who aren't very familiar with technology, but who all know how to use a phone and how to read.
project_type: Logo and app screens
result: WorkPics is published on Google Play.
hero_image: /assets/img/Workpics/workpicks_ui_mockups.webp
hero_w: 2400
hero_h: 1696
hero_alt: WorkPics app interface showing camera view and photo management screens
preload_image: /assets/img/Workpics/workpicks_ui_mockups.webp
preload_srcset: "/assets/img/Workpics/workpicks_ui_mockups-960w.webp 960w, /assets/img/Workpics/workpicks_ui_mockups.webp 2400w"
preload_sizes: "100vw"

logo_proposals:
  - { src: /assets/img/Workpics/workpics1.webp, alt: "WorkPics logo proposal A, camera shutter concept", w: 532, h: 532, caption: "Proposal A" }
  - { src: /assets/img/Workpics/workpics2.webp, alt: "WorkPics logo proposal B, cloud sync concept", w: 532, h: 532, caption: "Proposal B" }
  - { src: /assets/img/Workpics/logo-worpics-client-choice.svg, alt: "WorkPics final logo, the five-minute placeholder chosen by the team, orange and white app icon", w: 512, h: 512, caption: "Placeholder (Team's Choice)" }

# Colours and their roles come from the case text (Color Palette block).
palette:
  - { name: Background, hex: "#F5F5F5" }
  - { name: Active controls, hex: "#4300FF" }
  - { name: Upload check icon, hex: "#08CB00" }
  - { name: Alerts, hex: "#FF6600" }
# Official logo of the case and of the site: workpics2.webp (Ale, 2026-11-11).
# The logo the app shipped with (the team's placeholder) goes in "Final version".
logos:
  - { src: /assets/img/Workpics/workpics2.webp, alt: "WorkPics logo", w: 532, h: 532, caption: "WorkPics logo" }
  - { src: /assets/img/Workpics/14.webp, alt: "WorkPics logo on dark background", w: 1920, h: 1080, bg: full, caption: "Logo Variant on Dark Background" }
  - { src: /assets/img/Workpics/27.webp, alt: "WorkPics logo on light background", w: 1920, h: 1080, bg: full, caption: "Logo Variant on Light Background" }
final_logo:
  - { src: /assets/img/Workpics/logo-worpics-client-choice.svg, alt: "Logo of the published WorkPics app, the placeholder chosen by the team, orange and white app icon", caption: "Placeholder (Team's Choice)" }
---
{% include case/figure.html src="/assets/img/Workpics/sketch_ui_workpics.webp" w=2400 h=1710 alt="Hand-drawn paper sketch of WorkPics UI zoning" caption="I started with a pencil sketch of the mobile interface and removed every non-essential element." %}

{% include case/figure.html src="/assets/img/Workpics/13.webp" w=1920 h=1080 alt="WorkPics dashboard overview screen" caption="I kept the screens to the minimum: <em>&quot;Open → Shoot → Done&quot;</em>." %}

<p class="c-cta"><a class="btn" href="https://www.figma.com/proto/yOtKX0dQk7dqkICI0IK8Fu/WorkPics?page-id=28%3A120&node-id=28-121&p=f&viewport=-33%2C-1068%2C0.49&t=6H42hRzE8CVupbFh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A121" target="_blank" rel="noopener noreferrer">Try Figma Prototype &rarr;</a></p>

{% include case/row.html items=page.logo_proposals caption="They picked a placeholder I had made in five minutes." %}

<h2>Color Palette</h2>

{% include case/palette.html colors=page.palette %}

{% include case/type.html placeholder="Typeface to come" %}

{% include case/logo.html items=page.logos %}

<h2>Final version</h2>

{% include case/logo.html items=page.final_logo %}

{% include case/video.html src="" w=16 h=9 placeholder="Short loop video to come" label="" %}

{% include case/pair.html a="/assets/img/Workpics/workpics_cap2.webp" a_alt="WorkPics branding on orange safety helmet" a_w=2400 a_h=1650 a_caption="High-Vis Helmet Branding" b="/assets/img/Workpics/workpics_cap_black.webp" b_alt="WorkPics branding on black manager helmet" b_w=2400 b_h=1650 b_caption="Manager Helmet Branding" %}

{% capture long %}
<h3>The Result</h3>
<p>WorkPics is published on Google Play. It is a field photo reporting app for construction teams, built by a developer friend.</p>
<p>My friend asked me for help with the design. I designed the logo and the interface screens. This was an informal collaboration, not a client commission.</p>
<p>My link to the Google Play release is as a tester. Google requires twelve testers before an app can leave closed testing. I was one of them.</p>

<h3>The users: construction workers with gloves, in the sun</h3>
<p>Throughout the process, I kept in mind the user profiles described in the brief: their working conditions and an ideal user. The users are construction workers. They wear gloves and work in bright sunlight. I kept the screens to the minimum: <em>"Open → Shoot → Done"</em>.</p>

<h4>1 - A pencil sketch first</h4>
<p>I started with a pencil sketch of the mobile interface and removed every non-essential element. Location, time, and user ID are captured in the background. The user only frames the shot.</p>
<p>Defining the minimal viable flow.</p>
<h5>Interface Choices</h5>
<ul>
  <li><strong>Login & Forget:</strong> Workers log in once. The app remembers their session and assigned site.</li>
  <li><strong>Camera First:</strong> The interface stays close to a standard phone camera, so there's little to learn.</li>
  <li><strong>Oversized Controls:</strong> Buttons are large and spaced out to prevent miss-clicks with gloves.</li>
</ul>

<h4>2 - The clickable prototype</h4>
<p>I built a clickable prototype in Figma.</p>

<h4>3 - The colors</h4>
<p>White background, black text and three more colors: a fairly strong blue, #4300FF, for trust and contrast; a green only for the success icon (a check, no text); and an orange for alerts. There wasn't much else to do, since there were only a few screens.</p>
<p>The text is black on white so it reads well in the sun, and the success check is recognizable by its shape, not only by its color.</p>

<h4>4 - Logo: The Placeholder Won</h4>
<p>I made several logo proposals, each based on research into a different visual idea for the app. The team chose none of them. They picked a placeholder I had made in five minutes.</p>
<p>The lesson: <strong>a simple mark that already works can beat a polished exploration.</strong></p>
{% include case/pair.html a="/assets/img/Workpics/5.webp" a_alt="Logo construction breakdown showing W + P + checkmark geometry" a_w=1920 a_h=1080 a_caption="Geometry / Composition" b="/assets/img/Workpics/19.webp" b_alt="Logo construction showing negative space usage" b_w=1920 b_h=1080 b_caption="Geometry / Composition" %}

<h3>Project Gallery</h3>
<p>Mockups of the screens and the logo in use.</p>
{% include case/pair.html a="/assets/img/Workpics/25.webp" a_alt="WorkPics settings and profile flow" a_w=1920 a_h=1080 a_caption="Settings & Profile Flow" b="/assets/img/Workpics/workpics_bag.webp" b_alt="WorkPics branded tote bag mockup" b_w=2400 b_h=1800 b_caption="Brand application: Tote Bag" %}
{% endcapture %}
{% include case/detail.html summary="Le détail" summary_lang="fr" content=long %}
