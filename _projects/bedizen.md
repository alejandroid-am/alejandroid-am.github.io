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
last_modified_at: 2026-11-23
categories: identity ux-ui frontend motion
cover_image: /assets/img/bedizen-view.webp

# --- Layout C "Gallery with captions" (see _projects/spin_app.md) ---
# Bilingual since 2026-11-23 (FR / EN toggle): French in fr: and in the .only-fr blocks.
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
fr:
  description: "Mon projet de fin de formation pour la certification CCI Campus Alsace. Version 1 codée à la main ; après des tests utilisateurs, version 2 construite avec l'IA sur une grille de 4 colonnes que j'ai définie."
  role: "Design de marque, UX/UI. Version 1 codée à la main ; version 2 construite avec l'IA sur une grille que j'ai définie ; base de données, hébergement et WordPress mis en place par mes soins."
  role_short: Marque & UX/UI
  result: Site en ligne. Projet de fin de formation pour la certification CCI Campus Alsace.
  summary: "Au départ, l'IA arrivait avec ses bords arrondis et ses cartes, mais la marque est plus brutaliste et solide."
  project_type: Marque et site web
  hero_alt: "La page d'accueil de BEDiZEN, avec le logo et les icônes WordPress, PrestaShop et Shopify qui apparaissent une à une"
# Colours, names and hex from the brand guidelines (page 25). The names are the brand's
# own (French) names: the same in both languages.
palette:
  - { name: Horizon Noir, hex: "#1A1B1C", text: "#F2F1F0", use: Primary, use_fr: Primaire }
  - { name: Lueur Blanche, hex: "#F2F1F0", text: "#1A1B1C", use: Primary, use_fr: Primaire }
  - { name: Rouge Pionnier, hex: "#E13C30", text: "#1A1B1C", use: Accent, use_fr: Accentuation }
# "use" from the colour hierarchy (guidelines page 26). Type hierarchy from page 22:
# Titre = Poppins Bold, Sous-Titre = Poppins SemiBold, text = Poppins Medium.
# Each row shows the role written in its own style (no sample text).
type_scale:
  - { role: title, key: ts_title, weight: 700, label: "Poppins Bold" }
  - { role: subtitle, key: ts_subtitle, weight: 600, label: "Poppins SemiBold" }
  - { role: text, key: ts_text, weight: 500, label: "Poppins Medium" }
# Mockups, in one bento gallery (6-column grid: cols / rows per piece).
gallery:
  - { src: /assets/img/BEDiZEN/bedizen_mockup_2.webp, alt: "BEDiZEN logo on a modern building facade at night", alt_fr: "Le logo BEDiZEN sur la façade d'un immeuble moderne, de nuit", w: 4000, h: 3000, cols: 4, rows: 3 }
  - { src: /assets/img/BEDiZEN/mockup-cap-bedizen-4.webp, alt: "BEDiZEN logo embroidered on a black cap", alt_fr: "Le logo BEDiZEN brodé sur une casquette noire", w: 4004, h: 5334, cols: 2, rows: 3 }
  - { src: /assets/img/BEDiZEN/bedizen_mockup_3.webp, alt: "BEDiZEN mobile interface showing AR product viewer", alt_fr: "L'interface mobile de BEDiZEN avec la visionneuse de produits en réalité augmentée", w: 3284, h: 4166, cols: 2, rows: 3 }
  - { src: /assets/img/BEDiZEN/bedizen_mockup_1.webp, alt: "BEDiZEN branding on a Meta Quest VR headset", alt_fr: "La marque BEDiZEN sur un casque de réalité virtuelle Meta Quest", w: 5334, h: 4004, cols: 4, rows: 3 }
  - { src: /assets/img/BEDiZEN/flyer.jpg, alt: "BEDiZEN promotional flyer design featuring brand colors and AR imagery", alt_fr: "Un flyer promotionnel BEDiZEN aux couleurs de la marque, avec des images de réalité augmentée", w: 1500, h: 1125, cols: 4, rows: 3 }
  - { src: /assets/img/BEDiZEN/carte-visite-mockup.jpg, alt: "BEDiZEN business cards showing front and back design", alt_fr: "Les cartes de visite BEDiZEN, recto et verso", w: 1000, h: 1250, cols: 2, rows: 3 }
brand_pdf: /assets/docs/bedizen-charte-graphique.pdf
logos:
  - { src: /assets/img/BEDiZEN/bedizen_black.svg, alt: "BEDiZEN logo, black version on light", alt_fr: "Le logo BEDiZEN, version noire sur fond clair", bg: light, caption: "Logo" }
---
<p class="c-cta"><a class="btn" href="http://alejandro.am.servd16161.odns.fr/" target="_blank" rel="noopener noreferrer"><span class="only-fr" lang="fr">Voir le site en ligne</span><span class="only-en" lang="en">Visit the Live Site</span> &rarr;</a></p>

{% capture before %}{% include case/figure.html src="/assets/img/BEDiZEN/bedizen_web_v1.webp" w=1884 h=874 alt="BEDiZEN website version 1, minimal layout with large whitespace" alt_fr="La version 1 du site BEDiZEN, une mise en page minimale avec beaucoup d'espace blanc" %}{% endcapture %}
{% capture after %}{% include case/figure.html src="/assets/img/BEDiZEN/bedizen_web_v2.webp" w=1896 h=872 alt="BEDiZEN website version 2, with a reworked navigation and a responsive layout" alt_fr="La version 2 du site BEDiZEN, avec une navigation retravaillée et une mise en page responsive" %}{% endcapture %}
{% include case/compare.html title="A grid that holds the whole site" title_fr="Une grille qui tient tout le site" before_title="Version 1: coded by hand" before_title_fr="Version 1 : codée à la main" before_tag="HTML & CSS" before=before after_title="Version 2: built with AI on my grid" after_title_fr="Version 2 : construite avec l'IA sur ma grille" after_tag="Current Version" after_tag_fr="Version actuelle" after=after %}

<h2>{% include bi.html fr="Deux vidéos, deux formats" en="Two videos, two formats" %}</h2>

<div class="video-duo">
  <div class="video-duo-item">
    <h3>{% include bi.html fr="La Réalité Augmentée native pour l'e-commerce" en="Native Augmented Reality for e-commerce" %}</h3>
    {% include vimeo.html id="1194848845" title="Bedizen - La Réalité Augmentée native Pour l'e-commerce" ratio="16-9" logo="/assets/img/BEDiZEN/bedizen_white.svg" %}
  </div>
  <div class="video-duo-item">
    <h3>{% include bi.html fr="L'Expérience Try-On en un Clic" en="The One-Click Try-On Experience" %}</h3>
    {% include vimeo.html id="1190134356" title="BEDiZEN | L'Expérience Try-On en un Clic" ratio="9-16" logo="/assets/img/BEDiZEN/bedizen_white.svg" %}
  </div>
</div>

<h2>{% include bi.html fr="Charte graphique" en="Brand Guidelines" %}</h2>

{% include case/pair.html class="is-contain" ratio="1600 / 681" a="/assets/img/BEDiZEN/bedizen-icon-clear-space.webp" a_w=1600 a_h=1532 a_alt="The BEDiZEN icon on a grid that shows the clear space around it" a_alt_fr="L'icône BEDiZEN sur une grille qui montre la zone de protection autour d'elle" b="/assets/img/BEDiZEN/bedizen-wordmark-clear-space.webp" b_w=1600 b_h=681 b_alt="The BEDiZEN wordmark on a grid that shows the clear space around it" b_alt_fr="Le logotype BEDiZEN sur une grille qui montre la zone de protection autour de lui" %}

<div class="case-duo">
<div>{% include case/palette.html colors=page.palette %}</div>
<div>{% include case/type-scale.html family="Poppins" class_key="ts_geometric_sans" rows=page.type_scale %}</div>
</div>

<p class="c-cta"><a class="btn" href="{{ page.brand_pdf }}" download><span class="only-fr" lang="fr">Télécharger la charte graphique (PDF, 34 pages, 6,6 Mo)</span><span class="only-en" lang="en">Download the brand guidelines (PDF, 34 pages, 6.6 MB)</span></a></p>

<h2>{% include bi.html fr="Galerie du projet" en="Project Gallery" %}</h2>

<p class="only-fr" lang="fr">Des mockups de la marque BEDiZEN en situation.</p>
<p class="only-en" lang="en">Mockups of the BEDiZEN brand in use.</p>

{% include case/bento.html items=page.gallery %}

{% capture long_fr %}
<h3>Version 1&nbsp;: codée à la main</h3>
<p>BEDiZEN est un concept de studio WebAR qui offre aux petits e-commerces des <mark>essayages virtuels</mark>, une fonctionnalité d'habitude réservée aux grandes enseignes. C'était mon projet de fin de formation pour la certification Designer Web UX/UI de la CCI Campus Alsace, et le site est en ligne.</p>
<p>J'ai fait la première version moi-même, en <mark>HTML et CSS</mark>. Très peu de JS, voire pas du tout, si je me souviens bien.</p>

<h3>Les utilisateurs ne voyaient pas ce qui était cliquable</h3>
<p>Ensuite sont venus les tests utilisateurs&nbsp;: <strong>7 personnes aux profils différents</strong> ont passé le test. Les utilisateurs <mark>ne voyaient pas quels boutons étaient cliquables</mark>, et ils ne savaient pas où ils se trouvaient sur le site.</p>

<h3>Une grille qui tient tout le site</h3>
<p>J'ai fait une revue approfondie de l'identité de la marque et de la façon dont je voulais que BEDiZEN se distingue. J'ai utilisé l'IA pour développer un site basé sur <mark>une grille cohérente</mark>, qui transmette de la structure (du travail comme de la durabilité), du sérieux et de la modernité, tout en restant facile à utiliser.</p>

<h3>J'ai dû corriger l'IA</h3>
<p>Au départ, l'IA arrivait avec ses bords arrondis et ses cartes. La marque est plus brutaliste et solide, donc&nbsp;: <mark>des angles droits, aucun arrondi</mark>, rien de tout ça.</p>
<p>J'ai regardé des sites novateurs, parce que je veux révolutionner le marché de la XR sur le web&nbsp;: j'ai donc regardé des sites comme Awwwards. Je lui ai demandé de créer une <mark>grille de 4 colonnes qui se répète</mark> sur tout le site. J'ai aussi dû corriger l'ordre de certains éléments et l'usage de chaque colonne.</p>
<p>L'IA m'a aussi permis de corriger du code répété, là où j'aurais pu utiliser des variables pour réutiliser des éléments et finir avec moins de lignes de code.</p>
<h4>Version 1&nbsp;: codée à la main (HTML &amp; CSS)</h4>
<p><strong>Ce que les tests utilisateurs ont montré</strong></p>
<ul>
  <li>Les utilisateurs ne voyaient pas quels boutons étaient cliquables.</li>
  <li>Les utilisateurs ne savaient pas où ils se trouvaient sur le site.</li>
</ul>
<h4>Version 2&nbsp;: construite avec l'IA sur ma grille (version actuelle)</h4>
<p><strong>Ce qui a changé</strong></p>
<ul>
  <li>Une grille de 4 colonnes qui se répète sur tout le site, avec des angles droits.</li>
  <li>Une mise en page mobile first en Tailwind CSS.</li>
  <li><mark>Des états actifs et un fil d'Ariane</mark>, pour que les utilisateurs sachent où ils sont.</li>
</ul>

<h3>La mise en place</h3>
<p>J'ai créé la base de données et l'hébergement, et installé WordPress, les identifiants, etc. L'hébergement est chez O2switch&nbsp;: j'ai modifié les fichiers du serveur en FTP avec FileZilla, et ajouté des <mark>extensions WordPress</mark> pour la sécurité, le SEO, WooCommerce, les formulaires de contact et le cache.</p>
{% include case/figure.html src="/assets/img/BEDiZEN/bedizen-wordpress-back-office.webp" w=1902 h=884 alt="The BEDiZEN WordPress dashboard, with the WooCommerce setup, Wordfence, Limit Login Attempts and Cookie Compliance blocks" alt_fr="Le tableau de bord WordPress de BEDiZEN, avec les blocs de configuration WooCommerce, Wordfence, Limit Login Attempts et Cookie Compliance" caption="WordPress back office" caption_fr="Le back-office WordPress" %}

<h3>Deux vidéos, deux formats</h3>
<p>J'ai réalisé <mark>deux courtes vidéos</mark> qui montrent l'expérience BEDiZEN. L'une est au format paysage, pour YouTube. L'autre est verticale, pour les fils Instagram et TikTok.</p>
<p><em>La Réalité Augmentée native pour l'e-commerce</em>&nbsp;: format paysage, pour YouTube et les autres emplacements horizontaux.</p>
<p><em>L'Expérience Try-On en un Clic</em>&nbsp;: de la simple navigation à l'immersion totale&nbsp;: un aperçu vertical pensé pour les réseaux sociaux.</p>

<p class="c-closing">C'était un projet d'école, mené avec la méthodologie de l'école. Pour la version 2, j'ai utilisé Tailwind, avec l'aide de l'IA dans VS Code. Les extensions, le back-office WordPress et le thème en FTP, je les ai faits à la main, avec l'IA là où elle pouvait intervenir.</p>

<h3>Charte graphique</h3>
<p>La charte graphique complète que j'ai rédigée pour BEDiZEN&nbsp;: <a href="{{ page.brand_pdf }}" download>PDF, 34 pages</a>.</p>
{% endcapture %}
{% capture long %}
<h3>Version 1: coded by hand</h3>
<p>BEDiZEN is a WebAR studio concept that gives small e-commerce businesses <mark>virtual try-ons</mark>, a feature usually reserved for large retailers. It was my final project for the CCI Campus Alsace Web UX/UI Designer certification, and the site is live.</p>
<p>I made the first version myself, with <mark>HTML and CSS</mark>. Very little JS, or none, if I remember correctly.</p>

<h3>Users couldn't tell what was clickable</h3>
<p>Then came the user tests: <strong>7 people with different profiles</strong> took the test. Users <mark>couldn't tell which buttons were clickable</mark>, and they didn't know where they were on the site.</p>

<h3>A grid that holds the whole site</h3>
<p>I did a thorough review of the brand identity and of how I wanted BEDiZEN to be different. I used AI to develop a website based on <mark>a consistent grid</mark> that would convey structure (both of work and of sustainability), seriousness and modernity, but that would be easy to use.</p>

<h3>I had to correct the AI</h3>
<p>At first, the AI started out with its rounded borders and cards. The brand is more brutalist and solid, so: <mark>square corners, no rounding</mark>, none of that.</p>
<p>I looked at groundbreaking sites, because I want to revolutionize the XR market on the web, so I went to sites like Awwwards. I asked it to create a <mark>4-column grid that repeats</mark> across the whole site. I also had to correct the order of some things and how each column was used.</p>
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
  <li><mark>Active states and breadcrumbs</mark>, so users know where they are.</li>
</ul>

<h3>The setup</h3>
<p>I created the database and the hosting, and installed WordPress, the credentials, etc. The hosting is on O2switch: I edited the server files over FTP with FileZilla, and added <mark>WordPress plugins</mark> for security, SEO, WooCommerce, contact forms and caching.</p>
{% include case/figure.html src="/assets/img/BEDiZEN/bedizen-wordpress-back-office.webp" w=1902 h=884 alt="The BEDiZEN WordPress dashboard, with the WooCommerce setup, Wordfence, Limit Login Attempts and Cookie Compliance blocks" caption="WordPress back office" %}

<h3>Two videos, two formats</h3>
<p>I produced <mark>two short videos</mark> that show the BEDiZEN experience. One is landscape, for YouTube. One is vertical, for Instagram and TikTok feeds.</p>
<p><em>Native Augmented Reality for e-commerce</em>: Landscape format, for YouTube and other horizontal placements.</p>
<p><em>The One-Click Try-On Experience</em>: From simple browsing to full immersion: a vertical preview designed for social media.</p>

<p class="c-closing">It was a school project, done with the school's methodology. For version 2 I used Tailwind, with AI help in VS Code. The plugins, the WordPress back office and the theme over FTP I did by hand, with AI where it could step in.</p>

<h3>Brand Guidelines</h3>
<p>The full brand guidelines I wrote for BEDiZEN: <a href="{{ page.brand_pdf }}" download>PDF, 34 pages</a>.</p>
{% endcapture %}
{% include case/detail.html content=long content_fr=long_fr %}
