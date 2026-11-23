---
layout: project
title: Spin App
description: A redesign of a mobile top-up app that moves the reward wheel to after payment. Based on intuition, tested with 3 people, never built for lack of funding.
role: UI/UX & brand
role_short: UI/UX & Brand
result: Full redesign; never implemented, for lack of funding.
tools: Figma, Illustrator, Photoshop
year: 2025
home_order: 5
hide_from_home: true   # still hidden from the home rail (Ale, 2026-11-12); order 5 for "next project"
last_modified_at: 2026-11-23
categories: ux-ui identity motion
cover_image: /assets/img/spin_view.webp

# --- Layout C "Gallery with captions" (_layouts/project.html) ---
case_layout: c
summary: Showing a skull that tells you you lost on the wheel could put people off buying.
project_type: Mobile app redesign
# Hero: the same mockup on a transparent background (Hero-Muckup-phone-transparent.png, Ale).
hero_image: /assets/img/Spin_app/spin-app-hero-mockup.webp
hero_w: 2400
hero_h: 1915
hero_bg: "#F2F1F0"
hero_art_max: 1200
hero_alt: The redesigned Spin App home screen on a phone, in front of the amount, subscription, account and provider screens
preload_image: /assets/img/Spin_app/spin-app-hero-mockup.webp
preload_srcset: "/assets/img/Spin_app/spin-app-hero-mockup-960w.webp 960w, /assets/img/Spin_app/spin-app-hero-mockup.webp 2400w"
preload_sizes: "100vw"
# Bilingual since 2026-11-23 (FR / EN toggle): French in fr:, *_fr and the .only-fr blocks.
fr:
  description: "La refonte d'une appli de recharge mobile qui place la roue des récompenses après le paiement. Fondée sur l'intuition, testée avec 3 personnes, jamais développée faute de financement."
  role: UI/UX & marque
  role_short: UI/UX & Marque
  result: "Refonte complète ; jamais mise en œuvre, faute de financement."
  summary: "Montrer une tête de mort qui vous annonce que vous avez perdu à la roue pouvait dissuader d'acheter."
  project_type: Refonte d'appli mobile
  hero_alt: "L'écran d'accueil repensé de Spin App sur un téléphone, devant les écrans du montant, de l'abonnement, du compte et de l'opérateur"

# Avant: old_spin_app3 comes FIRST although its name says 3: it is the wheel, and in
# the old app the spin happened before the user chose anything (Ale, 2026-11-12).
# Files are not renamed, only reordered.
screens_before:
  - { src: /assets/img/Spin_app/old_spin_app3.webp, alt: "Original Spin app, the reward wheel, shown before the user has chosen anything", alt_fr: "L'appli Spin d'origine : la roue des récompenses, affichée avant que l'utilisateur ait choisi quoi que ce soit", w: 1080, h: 2400 }
  - { src: /assets/img/Spin_app/old_spin_app1.webp, alt: "Original Spin app, the More menu: about us, prizes, privacy policy, terms of use, rules, contact and delete account", alt_fr: "L'appli Spin d'origine : le menu Plus, avec à propos, prix, politique de confidentialité, conditions d'utilisation, règles, contact et suppression du compte", w: 1080, h: 2400 }
  - { src: /assets/img/Spin_app/old_spin_app2.webp, alt: "Original Spin app, the recharge screen: the Virgin Mexico operator, an Add Contact field and a Continue button", alt_fr: "L'appli Spin d'origine : l'écran de recharge, avec l'opérateur Virgin Mexico, un champ Add Contact et un bouton Continue", w: 1080, h: 2400 }
# Apres: the new flow from the Figma export (Figma-png-Spin! UI.zip, dark board):
# home, top-up amount, the wheel, and the prototype video, in one row of four equal
# cells (2 x 2 on phones). The rows carry an h4 (Avant / Apres) instead of a label per image.
screens_after:
  - { src: /assets/img/Spin_app/spin-new-home.webp, alt: "Redesigned home screen: the crypto balance, a promo banner and four cards, Send Top-Up, Send E-Gift, Send Remittances and Crypto", alt_fr: "L'écran d'accueil repensé : le solde crypto, une bannière promo et quatre cartes, Send Top-Up, Send E-Gift, Send Remittances et Crypto", w: 800, h: 1744 }
  - { src: /assets/img/Spin_app/spin-new-amount.webp, alt: "Redesigned top-up screen: the contact, the operator and the amounts with their prices", alt_fr: "L'écran de recharge repensé : le contact, l'opérateur et les montants avec leurs prix", w: 800, h: 1744 }
  - { src: /assets/img/Spin_app/spin-new-wheel.webp, alt: "Spin to win: the reward wheel, shown after the payment", alt_fr: "Spin to win : la roue des récompenses, affichée après le paiement", w: 800, h: 1744 }
  - { video: /assets/img/Spin_app/spin-figma-flow.mp4, webm: /assets/img/Spin_app/spin-figma-flow.webm, poster: /assets/img/Spin_app/spin-figma-flow-poster.webp, w: 576, h: 1280, label: "The Spin App Figma prototype: home, top-up, provider, amount, payment, then the reward wheel", label_fr: "Le prototype Figma de Spin App : accueil, recharge, opérateur, montant, paiement, puis la roue des récompenses" }

# Brand evolution: the original logo with its corrections (before) next to the
# new logo in one violet ink (after), in equal white boxes.
logos:
  - { src: /assets/img/Spin_app/spin-old-logo-corrections.webp, alt: "The original Spin logo with red guide lines and marks showing the alignment and spacing mistakes to fix", alt_fr: "Le logo Spin d'origine, avec des repères rouges qui montrent les erreurs d'alignement et d'espacement à corriger", w: 1920, h: 1080, label: case_before }
  - { src: /assets/img/Spin_app/spin-wordmark-violet.webp, alt: "The new Spin logo in a single violet ink", alt_fr: "Le nouveau logo Spin, en une seule encre violette", w: 934, h: 503, label: case_after }

# Hex values sampled from the old new_color_palette.webp (deleted in round 6) and the logo: to confirm with the Figma file.
palette:
  - { name: Yellow, name_fr: Jaune, hex: "#FED06A" }
  - { name: Blue, name_fr: Bleu, hex: "#4C91E1" }
  - { name: Coral, name_fr: Corail, hex: "#FF696C" }
  - { name: Green, name_fr: Vert, hex: "#5BB75A" }
  - { name: Purple, name_fr: Violet, hex: "#582B76" }
---
<h2 class="case-compare-title">{% include bi.html fr="La roue arrive après le paiement" en="The wheel comes after paying" %}</h2>

{% include case/row.html items=page.screens_before title="case_before" %}

{% capture before %}<p class="only-fr" lang="fr"><strong>Ouvrir l'appli → Tourner la roue → Recharger</strong></p><p class="only-en" lang="en"><strong>Open App → Spin the Wheel → Top Up</strong></p>{% endcapture %}
{% capture after %}<p class="only-fr" lang="fr"><strong>Ouvrir l'appli → Recharger → Paiement confirmé → Tourner la roue</strong></p><p class="only-en" lang="en"><strong>Open App → Top Up → Payment confirmed → Spin the Wheel</strong></p>{% endcapture %}
{% include case/compare.html before_title="Before" before_title_fr="Avant" before_tag="Spin, then pay" before_tag_fr="Tourner, puis payer" before=before after_title="After" after_title_fr="Après" after_tag="Pay, then spin" after_tag_fr="Payer, puis tourner" after=after %}

{% include case/row.html items=page.screens_after title="case_after" tag="figma" %}

{% include case/figure.html src="/assets/img/Spin_app/spin2.webp" w=2400 h=1800 alt="SPIN App reward wheel, post-purchase celebration" alt_fr="La roue des récompenses de SPIN App, la célébration après l'achat" %}

<h2>{% include bi.html fr="La marque et les écrans" en="The brand and the screens" %}</h2>

{% include case/palette.html colors=page.palette %}

<h3>{% include bi.html fr="Évolution de la marque" en="Brand Evolution" %}</h3>

<p class="only-fr" lang="fr">La marque d'origine utilisait des couleurs néon qui se heurtaient. J'ai créé une palette plus calme, qui reste ludique, et un logo qui suggère le mouvement.</p>
<p class="only-en" lang="en">The original brand used clashing neon colors. I made a calmer palette that still feels playful, and a logo that suggests movement.</p>

{% include case/logo.html items=page.logos %}

<h3>{% include bi.html fr="Évolution de l'interface" en="UI Evolution" %}</h3>

<p class="only-fr" lang="fr">J'ai remplacé la vue en liste surchargée par des cartes. «&nbsp;Top Up&nbsp;» est l'action la plus visible. L'indicatif du pays est rempli à partir du numéro du contact, ce qui supprime une étape à chaque transaction.</p>
<p class="only-en" lang="en">I replaced the cluttered list view with cards. "Top Up" is the most visible action. The country code is filled in from the contact's number, which removes one step from every transaction.</p>

{% capture long_fr %}
<h3>Il y avait peu d'achats</h3>
<p>Spin App permettait aux utilisateurs de faire tourner une roue pour gagner une récompense <em>avant</em> de payer une recharge. Je savais qu'il y avait <mark>peu d'achats</mark>.</p>

<h3>Je n'avais pas les données</h3>
<p>Je ne le savais pas par les données&nbsp;: <mark>c'était juste une intuition</mark>. (Je sais, en UX il n'y a pas d'intuition, il y a les retours des utilisateurs.) C'était le développeur back-end qui avait accès à ces chiffres.</p>

<h3>La roue arrive après le paiement</h3>
<p>Inverser le parcours, c'était mon idée&nbsp;: <mark>la roue, après le paiement</mark>.</p>
<p>J'ai pris appui sur des <mark>conventions déjà établies</mark> dans des applis similaires, qui faisaient partie de ma recherche, pour voir si on pouvait attirer des clients de la concurrence et garder une courbe d'apprentissage douce.</p>
<h4>Avant&nbsp;: tourner, puis payer</h4>
<p><strong>Ouvrir l'appli → Tourner la roue → Recharger</strong></p>
<ul>
  <li>L'utilisateur fait tourner la roue <em>avant</em> d'acheter.</li>
  <li>Une tête de mort pour une partie perdue pouvait le dissuader d'acheter. C'était mon hypothèse, sans données.</li>
</ul>
<h4>Après&nbsp;: payer, puis tourner</h4>
<p><strong>Ouvrir l'appli → Recharger → Paiement confirmé → Tourner la roue</strong></p>
<ul>
  <li>L'utilisateur fait tourner la roue <em>après</em> un achat confirmé.</li>
  <li><mark>Chaque tour fait gagner quelque chose</mark>&nbsp;: du cashback, des points ou une double recharge.</li>
</ul>

<h3>Le test&nbsp;: 3 personnes</h3>
<p>Je l'ai <mark>testé avec 3 personnes</mark>. L'une est un développeur avec une solide connaissance de l'ergonomie, de l'accessibilité et de l'UX, qui m'a donné le feu vert. Les deux autres, développeurs aussi, ont parcouru le flux dans le prototype Figma.</p>

<h3>Ce que j'aurais mesuré</h3>
<p>Les achats réalisés, <mark>combien d'utilisateurs revenaient</mark> et à quelle fréquence, et le temps passé sur chaque écran (si possible).</p>

<p class="c-closing">En UX, il n'y a pas d'intuition&nbsp;: il y a les retours des utilisateurs.</p>

<h3>Galerie du projet</h3>
<p>Les écrans finaux et une vidéo promo réalisée pour la refonte.</p>
{% include case/pair.html a="/assets/img/Spin_app/spin1.webp" a_alt="SPIN App login screen with gradient background" a_alt_fr="L'écran de connexion de SPIN App sur un fond en dégradé" a_w=2400 a_h=1800 b="/assets/img/Spin_app/spin3.webp" b_alt="SPIN App streamlined contacts list" b_alt_fr="La liste de contacts simplifiée de SPIN App" b_w=2400 b_h=1800 %}
{% include case/pair.html a="/assets/img/Spin_app/spin4.webp" a_alt="SPIN App user profile settings" a_alt_fr="Les réglages du profil utilisateur de SPIN App" a_w=2400 a_h=1800 b="/assets/img/Spin_app/spin-phone.webp" b_alt="SPIN App promotional marketing shot" b_alt_fr="Un visuel promotionnel de SPIN App" b_w=4000 b_h=3000 %}
{% include case/figure.html src="/assets/img/Spin_app/Spin_App_Mockups_presentation (1).webp" w=1920 h=1080 alt="SPIN App redesigned interface showing home screen and reward wheel" alt_fr="L'interface repensée de SPIN App, avec l'écran d'accueil et la roue des récompenses" %}
{% endcapture %}
{% capture long %}
<h3>There were few purchases</h3>
<p>Spin App let users spin a wheel for a reward <em>before</em> paying for a top-up. I knew there were <mark>few purchases</mark>.</p>

<h3>I didn't have the data</h3>
<p>I didn't know it from data: <mark>it was just intuition</mark>. (I know, in UX there's no intuition, there's user feedback.) The back-end developer was the one with access to those numbers.</p>

<h3>The wheel comes after paying</h3>
<p>Flipping the flow was my idea: <mark>the wheel, after paying</mark>.</p>
<p>I based it on <mark>conventions already established</mark> in similar apps, which were part of my research, to see if we could attract customers from the competition and keep the learning curve gentle.</p>
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
  <li><mark>Every spin wins something</mark>: cashback, points, or double recharge.</li>
</ul>

<h3>The test: 3 people</h3>
<p>I <mark>tested it with 3 people</mark>. One is a developer with deep knowledge of ergonomics, accessibility and UX, who gave me the green light. The other two, also developers, went through the flow in the Figma prototype.</p>

<h3>What I would have measured</h3>
<p>The purchases made, <mark>how many users came back</mark> and how often, and how long they spent on each screen (if possible).</p>

<p class="c-closing">In UX there's no intuition: there's user feedback.</p>

<h3>Project Gallery</h3>
<p>The final screens and a promo video made for the redesign.</p>
{% include case/pair.html a="/assets/img/Spin_app/spin1.webp" a_alt="SPIN App login screen with gradient background" a_w=2400 a_h=1800 b="/assets/img/Spin_app/spin3.webp" b_alt="SPIN App streamlined contacts list" b_w=2400 b_h=1800 %}
{% include case/pair.html a="/assets/img/Spin_app/spin4.webp" a_alt="SPIN App user profile settings" a_w=2400 a_h=1800 b="/assets/img/Spin_app/spin-phone.webp" b_alt="SPIN App promotional marketing shot" b_w=4000 b_h=3000 %}
{% include case/figure.html src="/assets/img/Spin_app/Spin_App_Mockups_presentation (1).webp" w=1920 h=1080 alt="SPIN App redesigned interface showing home screen and reward wheel" %}
{% endcapture %}
{% include case/detail.html content=long content_fr=long_fr %}
