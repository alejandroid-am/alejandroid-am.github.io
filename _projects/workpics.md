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

# The three logo versions (Ale, 2026-11-12): workpics2 is the official company
# logo, the team's choice is the app logo. No logo mockups on this page.
logo_versions:
  - { src: /assets/img/Workpics/workpics1.webp, alt: "WorkPics logo proposal, a W and a P whose shapes form a check mark", w: 532, h: 532, caption: "Proposal A" }
  - { src: /assets/img/Workpics/workpics2.webp, alt: "WorkPics company logo, a W and a P built into a cube", w: 532, h: 532, label: logo_official }
  - { src: /assets/img/Workpics/logo-worpics-client-choice.svg, alt: "WorkPics app logo, an orange safety helmet over a black camera shutter", w: 512, h: 512, label: logo_app }

# Colours and their roles come from the case text (Color Palette block).
palette:
  - { name: Background, hex: "#F5F5F5" }
  - { name: Active controls, hex: "#4300FF" }
  - { name: Upload check icon, hex: "#08CB00" }
  - { name: Alerts, hex: "#FF6600" }
---
<p>I started with a pencil sketch of the mobile interface and removed every non-essential element.</p>

{% include case/figure.html src="/assets/img/Workpics/sketch_ui_workpics.webp" w=2400 h=1710 alt="Hand-drawn paper sketch of WorkPics UI zoning" %}

{% include case/figure.html src="/assets/img/Workpics/workpicks_ui_mockups.webp" w=2400 h=1696 alt="WorkPics camera screen with the shutter button, the photo grid and the settings screen" caption="I kept the screens to the minimum: <em>&quot;Open → Shoot → Done&quot;</em>." %}

<p class="c-cta"><a class="btn" href="https://www.figma.com/proto/yOtKX0dQk7dqkICI0IK8Fu/WorkPics?page-id=28%3A120&node-id=28-121&p=f&viewport=-33%2C-1068%2C0.49&t=6H42hRzE8CVupbFh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A121" target="_blank" rel="noopener noreferrer">Try Figma Prototype &rarr;</a></p>

<h2>Logo</h2>

{% include case/logo.html items=page.logo_versions %}

<p>They picked a placeholder I had made in five minutes.</p>

<p>The company will add more features beyond photos, so the company identity uses the official company logo, while the app keeps its own logo.</p>

<h2>Color Palette</h2>

{% include case/palette.html colors=page.palette %}

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

{% endcapture %}
{% include case/detail.html summary="Le détail" summary_lang="fr" content=long %}
