---
layout: project
title: Spin App
description: A redesign of a mobile top-up app that moves the reward wheel to after payment. Based on intuition, tested with 3 people, never built for lack of funding.
role: UI/UX & brand
role_short: UI/UX & Brand
result: Full redesign; never implemented, for lack of funding.
tools: Figma, Illustrator, Photoshop
year: 2025
home_order: 4
hide_from_home: true   # recommendation 2026-11-11, see NOTAS
last_modified_at: 2026-11-11
categories: ux-ui identity motion
cover_image: /assets/img/spin_view.webp

# --- Layout C "Gallery with captions" (_layouts/project.html) ---
case_layout: c
summary: Showing a skull that tells you you lost on the wheel could put people off buying.
project_type: Mobile app redesign
hero_image: /assets/img/Spin_app/Spin_App_Mockups_image.webp
hero_w: 4549
hero_h: 3475
hero_alt: SPIN App redesigned home screen dashboard
preload_image: /assets/img/Spin_app/Spin_App_Mockups_image.webp
preload_srcset: "/assets/img/Spin_app/Spin_App_Mockups_image-960w.webp 960w, /assets/img/Spin_app/Spin_App_Mockups_image.webp 4549w"
preload_sizes: "100vw"

screens_before:
  - { src: /assets/img/Spin_app/old_spin_app1.webp, alt: "Original Spin app, menu screen", w: 1080, h: 2400 }
  - { src: /assets/img/Spin_app/old_spin_app2.webp, alt: "Original Spin app, add contact screen", w: 1080, h: 2400 }
  - { src: /assets/img/Spin_app/old_spin_app3.webp, alt: "Original Spin app, reward wheel shown before payment", w: 1080, h: 2400 }
screens_after:
  - { src: /assets/img/Spin_app/new_spin-ui1.webp, alt: "Redesigned home screen with cards and points balance", w: 1117, h: 2428 }
  - { src: /assets/img/Spin_app/new_spin-ui2.webp, alt: "Redesigned subscription screen", w: 1117, h: 2428 }
  - { src: /assets/img/Spin_app/new_spin-ui3.webp, alt: "Redesigned account screen with wallet, level and rewards", w: 1117, h: 2428 }

# Hex values sampled from new_color_palette.webp and the logo: to confirm with the Figma file.
palette:
  - { name: Yellow, hex: "#FED06A" }
  - { name: Blue, hex: "#4C91E1" }
  - { name: Coral, hex: "#FF696C" }
  - { name: Green, hex: "#5BB75A" }
  - { name: Purple, hex: "#582B76" }
logos:
  - { src: /assets/img/Spin_app/new_spin_logo.webp, alt: "Redesigned Spin logo", w: 1920, h: 1080, bg: full, caption: "Main logo" }
  - { placeholder: "One-colour version to come", caption: "One colour" }
  - { placeholder: "App icon to come", caption: "App icon" }
---
{% include case/row.html items=page.screens_before caption="Spin App let users spin a wheel for a reward before paying for a top-up." %}

{% capture before %}<p><strong>Open App → Spin the Wheel → Top Up</strong></p>{% endcapture %}
{% capture after %}<p><strong>Open App → Top Up → Payment confirmed → Spin the Wheel</strong></p>{% endcapture %}
{% include case/compare.html title="The wheel comes after paying" before_title="Before" before_tag="Spin, then pay" before=before after_title="After" after_tag="Pay, then spin" after=after %}

{% include case/row.html items=page.screens_after caption="I replaced the cluttered list view with cards." %}

{% include case/figure.html src="/assets/img/Spin_app/spin2.webp" w=2400 h=1800 alt="SPIN App reward wheel, post-purchase celebration" caption="Every spin wins something: cashback, points, or double recharge." %}

{% include case/video.html src="" w=16 h=9 placeholder="Short loop video to come" label="" %}

<h2>The brand and the screens</h2>

{% include case/palette.html colors=page.palette %}

{% include case/type.html placeholder="Typeface to come" %}

{% include case/logo.html items=page.logos %}

{% capture long %}
<h3>There were few purchases</h3>
<p>Spin App let users spin a wheel for a reward <em>before</em> paying for a top-up. I knew there were few purchases.</p>

<h3>I didn't have the data</h3>
<p>I didn't know it from data: it was just intuition. (I know, in UX there's no intuition, there's user feedback.) The back-end developer was the one with access to those numbers.</p>

<h3>The wheel comes after paying</h3>
<p>Flipping the flow was my idea: the wheel, after paying.</p>
<p>I based it on conventions already established in similar apps, which were part of my research, to see if we could attract customers from the competition and keep the learning curve gentle.</p>
<h4>Before: Spin, then pay</h4>
<p><strong>Open App → Spin the Wheel → Top Up</strong></p>
<ul>
  <li>The user spins <em>before</em> buying.</li>
  <li>A skull for a loss could put them off buying. This was my hypothesis, without data.</li>
</ul>
<h4>After: Pay, then spin</h4>
<p><strong>Open App → Top Up → Payment confirmed → Spin the Wheel</strong></p>
<ul>
  <li>The user spins <em>after</em> a confirmed purchase.</li>
  <li>Every spin wins something: cashback, points, or double recharge.</li>
</ul>

<h3>The brand and the screens</h3>
<h4>Brand Evolution</h4>
<p>The original brand used clashing neon colors. I made a calmer palette that still feels playful, and a logo that suggests movement.</p>
{% include case/pair.html a="/assets/img/Spin_app/old-spin_logo.webp" a_alt="Original Spin logo" a_w=1920 a_h=1080 a_caption="<strong>Before:</strong> the original logo." b="/assets/img/Spin_app/new_spin_logo.webp" b_alt="Redesigned Spin logo" b_w=1920 b_h=1080 b_caption="<strong>After:</strong> a logo that suggests movement." %}
{% include case/pair.html a="/assets/img/Spin_app/old_colore_palette.webp" a_alt="Original neon color palette" a_w=1920 a_h=1080 a_caption="<strong>Before:</strong> clashing neon colors." b="/assets/img/Spin_app/new_color_palette.webp" b_alt="New, calmer color palette" b_w=1920 b_h=1080 b_caption="<strong>After:</strong> a calmer palette that still feels playful." %}
<h4>UI Evolution</h4>
<p>I replaced the cluttered list view with cards. "Top Up" is the most visible action. The country code is filled in from the contact's number, which removes one step from every transaction.</p>
{% include case/pair.html a="/assets/img/Spin_app/old_spin ui.webp" a_alt="Original Spin UI, list view" a_w=2400 a_h=1696 a_caption="<strong>Before:</strong> the original list view." b="/assets/img/Spin_app/new_spin ui.webp" b_alt="Redesigned Spin UI, card layout with a prominent Top Up button" b_w=2400 b_h=1696 b_caption="<strong>After:</strong> cards, with &quot;Top Up&quot; as the most visible action." %}

<h3>The test: 3 people</h3>
<p>I tested it with 3 people. One is a developer with deep knowledge of ergonomics, accessibility and UX, who gave me the green light. The other two, also developers, went through the flow in the Figma prototype.</p>

<h3>What I would have measured</h3>
<p>The purchases made, how many users came back and how often, and how long they spent on each screen (if possible).</p>

<p class="c-closing">In UX there's no intuition: there's user feedback.</p>

<h3>Project Gallery</h3>
<p>The final screens and a promo video made for the redesign.</p>
<figure class="case-fig">
  <video controls muted playsinline preload="none" poster="/assets/img/spin_view.webp" width="1920" height="1080">
    <source src="/assets/img/Spin_app/spin_video.mp4" type="video/mp4">
  </video>
</figure>
{% include case/pair.html a="/assets/img/Spin_app/spin1.webp" a_alt="SPIN App login screen with gradient background" a_w=2400 a_h=1800 a_caption="Login Screen" b="/assets/img/Spin_app/spin3.webp" b_alt="SPIN App streamlined contacts list" b_w=2400 b_h=1800 b_caption="Streamlined Contacts" %}
{% include case/pair.html a="/assets/img/Spin_app/spin4.webp" a_alt="SPIN App user profile settings" a_w=2400 a_h=1800 a_caption="User Profile" b="/assets/img/Spin_app/spin-phone.webp" b_alt="SPIN App promotional marketing shot" b_w=4000 b_h=3000 b_caption="Promotional Material" %}
<figure class="case-fig c-narrow"><img src="/assets/img/Spin_app/iphone-mockup.webp" alt="SPIN App home screen on iPhone in context" width="500" height="1000" loading="lazy" decoding="async"><figcaption>Mockup in context</figcaption></figure>
{% include case/figure.html src="/assets/img/Spin_app/Spin_App_Mockups_presentation (1).webp" w=1920 h=1080 alt="SPIN App redesigned interface showing home screen and reward wheel" %}
{% endcapture %}
{% include case/detail.html summary="Le détail" summary_lang="fr" content=long %}
