---
layout: project
title: WorkPics
description: Logo and app screens for a developer friend's field reporting app for construction teams, now published on Google Play.
role: Visual Design (Logo & App Screens)
tools: Figma, Illustrator
year: 2025
categories: ux-ui identity
cover_image: /assets/img/workpics-view.webp
home_order: 1
last_modified_at: 2026-11-23

# --- Layout C "Gallery with captions" (see _projects/spin_app.md) ---
case_layout: c
summary: People who aren't very familiar with technology, but who all know how to use a phone and how to read.
project_type: Logo and app screens
result: WorkPics is published on Google Play.
# Hero: Mockup 8 from Figma-png-WorkPics.zip. Every WorkPics screen on this page is
# from Ale's Figma prototype, not a capture of the published app: Prototype Figma label.
hero_image: /assets/img/Workpics/workpics-hero-mockup.webp
hero_w: 2400
hero_h: 1800
hero_alt: A phone showing the WorkPics sign-in screen, standing on an orange metal cart
hero_label: case_figma
preload_image: /assets/img/Workpics/workpics-hero-mockup.webp
preload_srcset: "/assets/img/Workpics/workpics-hero-mockup-960w.webp 960w, /assets/img/Workpics/workpics-hero-mockup.webp 2400w"
preload_sizes: "100vw"
# Bilingual since 2026-11-23 (FR / EN toggle): French in fr:, *_fr and the .only-fr blocks.
fr:
  description: "Le logo et les écrans d'une appli de reportage terrain pour les équipes de chantier, développée par un ami développeur, aujourd'hui publiée sur Google Play."
  role: Design visuel (logo et écrans de l'appli)
  summary: Des personnes peu familières avec la technologie, mais qui savent toutes utiliser un téléphone et lire.
  project_type: Logo et écrans d'appli
  result: WorkPics est publiée sur Google Play.
  hero_alt: Un téléphone affichant l'écran de connexion de WorkPics, posé sur un chariot métallique orange

# Open, Shoot, Done: three frames of the Figma prototype (Login, Camera, Camera 3),
# then the prototype video, in one row of four equal cells (2 x 2 on phones).
screens_flow:
  - { src: /assets/img/Workpics/wp-open.webp, alt: "Open: the WorkPics sign-in screen, with the logo, the user and password fields and a Sign in button", alt_fr: "Ouvrir : l'écran de connexion de WorkPics, avec le logo, les champs utilisateur et mot de passe et un bouton Sign in", w: 804, h: 1748 }
  - { src: /assets/img/Workpics/wp-shoot.webp, alt: "Shoot: the camera screen, a construction worker framed with a grid, the location, GPS and date stamped in the corners and a large shutter button", alt_fr: "Photographier : l'écran de l'appareil photo, un ouvrier cadré avec une grille, le lieu, le GPS et la date inscrits dans les coins et un grand déclencheur", w: 804, h: 1748 }
  - { src: /assets/img/Workpics/wp-done.webp, alt: "Done: the camera screen after the shot, the photo thumbnail with a cloud and a green check", alt_fr: "Terminé : l'écran de l'appareil photo après la prise de vue, la miniature de la photo avec un nuage et une coche verte", w: 804, h: 1748 }
  - { video: /assets/img/Workpics/workpics-figma-flow.mp4, webm: /assets/img/Workpics/workpics-figma-flow.webm, poster: /assets/img/Workpics/workpics-figma-flow-poster.webp, w: 576, h: 1280, label: "The WorkPics Figma prototype: sign in, camera and location permission, loading, taking photos, settings", label_fr: "Le prototype Figma de WorkPics : connexion, autorisation de l'appareil photo et de la localisation, chargement, prise de photos, réglages" }

# The three logo versions (Ale, 2026-11-12): workpics2 is the official company
# logo, the team's choice is the app logo. No logo mockups on this page.
logo_versions:
  - { src: /assets/img/Workpics/workpics1.webp, alt: "WorkPics logo proposal, a W and a P whose shapes form a check mark", alt_fr: "Une proposition de logo WorkPics, un W et un P dont les formes dessinent une coche", w: 532, h: 532, caption: "Proposal A", caption_fr: "Proposition A" }
  - { src: /assets/img/Workpics/workpics-logo-official.svg, alt: "WorkPics company logo, a W and a P built into a cube", alt_fr: "Le logo de l'entreprise WorkPics, un W et un P construits dans un cube", w: 881, h: 936, label: logo_official, scale: 0.72 }
  - { src: /assets/img/Workpics/logo-worpics-client-choice.svg, alt: "WorkPics app logo, an orange safety helmet over a black camera shutter", alt_fr: "Le logo de l'appli WorkPics, un casque de chantier orange au-dessus d'un obturateur d'appareil photo noir", w: 512, h: 512, label: logo_app }

# Colours and their roles come from the case text (Color Palette block).
palette:
  - { name: Background, name_fr: "Fond", hex: "#F5F5F5" }
  - { name: Active controls, name_fr: "Contrôles actifs", hex: "#4300FF" }
  - { name: Upload check icon, name_fr: "Icône de validation d'envoi", hex: "#08CB00" }
  - { name: Alerts, name_fr: "Alertes", hex: "#FF6600" }
---
<p class="only-fr" lang="fr">J'ai commencé par un croquis au crayon de l'interface mobile, et j'ai supprimé tout élément non essentiel.</p>
<p class="only-en" lang="en">I started with a pencil sketch of the mobile interface and removed every non-essential element.</p>

{% include case/figure.html src="/assets/img/Workpics/sketch_ui_workpics.webp" w=2400 h=1710 alt="Hand-drawn paper sketch of WorkPics UI zoning" alt_fr="Croquis à la main, sur papier, du zonage de l'interface de WorkPics" %}

<p class="only-fr" lang="fr">J'ai réduit les écrans au minimum&nbsp;: <em>«&nbsp;Ouvrir → Photographier → Terminé&nbsp;»</em>.</p>
<p class="only-en" lang="en">I kept the screens to the minimum: <em>"Open → Shoot → Done"</em>.</p>

{% include case/row.html items=page.screens_flow tag="figma" %}

<p class="c-cta"><a class="btn" href="https://workpics.multiservicesfl.com/welcome" target="_blank" rel="noopener noreferrer">{% include label.html key="live_project" %} <span aria-hidden="true">&rarr;</span></a> <a class="btn btn-ghost" href="https://www.figma.com/proto/yOtKX0dQk7dqkICI0IK8Fu/WorkPics?page-id=28%3A120&node-id=28-121&p=f&viewport=-33%2C-1068%2C0.49&t=6H42hRzE8CVupbFh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A121" target="_blank" rel="noopener noreferrer"><span class="only-fr" lang="fr">Essayer le prototype Figma</span><span class="only-en" lang="en">Try Figma Prototype</span> &rarr;</a></p>

<h2>Logo</h2>

{% include case/logo.html items=page.logo_versions %}

<p class="only-fr" lang="fr">Ils ont choisi un placeholder que j'avais fait en cinq minutes.</p>
<p class="only-en" lang="en">They picked a placeholder I had made in five minutes.</p>

<p class="only-fr" lang="fr">L'entreprise va ajouter d'autres fonctionnalités que les photos&nbsp;: l'identité de l'entreprise utilise donc le logo officiel, tandis que l'appli garde son propre logo.</p>
<p class="only-en" lang="en">The company will add more features beyond photos, so the company identity uses the official company logo, while the app keeps its own logo.</p>

<h2>{% include bi.html fr="Palette de couleurs" en="Color Palette" %}</h2>

{% include case/palette.html colors=page.palette %}

{% capture long_fr %}
<h3>Le résultat</h3>
<p>WorkPics est <mark>publiée sur Google Play</mark>. C'est une appli de reportage photo sur le terrain pour les équipes de chantier, développée par un ami développeur.</p>
<p>Mon ami m'a demandé de l'aide pour le design. J'ai conçu le logo et les écrans de l'interface. C'était une collaboration informelle, pas une commande client.</p>
<p>Mon lien avec la publication sur Google Play, ce sont les tests. Google exige <mark>douze testeurs</mark> avant qu'une appli puisse sortir des tests fermés. J'en faisais partie.</p>

<h3>Les utilisateurs&nbsp;: des ouvriers du bâtiment, avec des gants, en plein soleil</h3>
<p>Tout au long du processus, j'ai gardé en tête les profils utilisateurs décrits dans le brief&nbsp;: leurs conditions de travail et un utilisateur idéal. Les utilisateurs sont des ouvriers du bâtiment. <mark>Ils portent des gants et travaillent en plein soleil</mark>. J'ai réduit les écrans au minimum&nbsp;: <em>«&nbsp;Ouvrir → Photographier → Terminé&nbsp;»</em>.</p>

<h4>1 - D'abord, un croquis au crayon</h4>
<p>J'ai commencé par un croquis au crayon de l'interface mobile, et j'ai <mark>supprimé tout élément non essentiel</mark>. La localisation, l'heure et l'identifiant de l'utilisateur sont enregistrés en arrière-plan. L'utilisateur n'a qu'à cadrer la photo.</p>
<p>Définir le parcours minimal viable.</p>
<h5>Choix d'interface</h5>
<ul>
  <li><strong>Se connecter une fois, puis oublier&nbsp;:</strong> les ouvriers se connectent une seule fois. L'appli garde leur session et le chantier qui leur est attribué.</li>
  <li><strong>L'appareil photo d'abord&nbsp;:</strong> l'interface reste proche de l'appareil photo standard du téléphone, il y a donc peu de choses à apprendre.</li>
  <li><strong>Des commandes surdimensionnées&nbsp;:</strong> les boutons sont <mark>grands et espacés</mark>, pour éviter les erreurs de clic avec des gants.</li>
</ul>

<h4>2 - Le prototype cliquable</h4>
<p>J'ai construit un <mark>prototype cliquable dans Figma</mark>.</p>

<h4>3 - Les couleurs</h4>
<p>Fond blanc, texte noir et trois autres couleurs&nbsp;: un bleu assez fort, #4300FF, pour la confiance et le contraste&nbsp;; un vert uniquement pour l'icône de réussite (une coche, sans texte)&nbsp;; et un orange pour les alertes. Il n'y avait pas grand-chose de plus à faire, puisqu'il n'y avait que quelques écrans.</p>
<p>Le texte est noir sur blanc pour bien se lire au soleil, et la coche de réussite est <mark>reconnaissable à sa forme, pas seulement à sa couleur</mark>.</p>

<h4>4 - Logo&nbsp;: le placeholder a gagné</h4>
<p>J'ai fait plusieurs propositions de logo, chacune basée sur une recherche autour d'une idée visuelle différente pour l'appli. L'équipe n'en a choisi aucune. Ils ont <mark>choisi un placeholder</mark> que j'avais fait en cinq minutes.</p>
<p>La leçon&nbsp;: <strong>un signe simple qui fonctionne déjà peut battre une exploration aboutie.</strong></p>
{% include case/pair.html a="/assets/img/Workpics/5.webp" a_alt="Logo construction breakdown showing W + P + checkmark geometry" a_alt_fr="La construction du logo, décomposée : la géométrie du W, du P et de la coche" a_w=1920 a_h=1080 a_caption="Composition" b="/assets/img/Workpics/19.webp" b_alt="Logo construction showing negative space usage" b_alt_fr="La construction du logo et son usage de l'espace négatif" b_w=1920 b_h=1080 b_caption="Composition" %}
{% endcapture %}
{% capture long %}
<h3>The Result</h3>
<p>WorkPics is <mark>published on Google Play</mark>. It is a field photo reporting app for construction teams, built by a developer friend.</p>
<p>My friend asked me for help with the design. I designed the logo and the interface screens. This was an informal collaboration, not a client commission.</p>
<p>My link to the Google Play release is as a tester. Google requires <mark>twelve testers</mark> before an app can leave closed testing. I was one of them.</p>

<h3>The users: construction workers with gloves, in the sun</h3>
<p>Throughout the process, I kept in mind the user profiles described in the brief: their working conditions and an ideal user. The users are construction workers. <mark>They wear gloves and work in bright sunlight</mark>. I kept the screens to the minimum: <em>"Open → Shoot → Done"</em>.</p>

<h4>1 - A pencil sketch first</h4>
<p>I started with a pencil sketch of the mobile interface and <mark>removed every non-essential element</mark>. Location, time, and user ID are captured in the background. The user only frames the shot.</p>
<p>Defining the minimal viable flow.</p>
<h5>Interface Choices</h5>
<ul>
  <li><strong>Login & Forget:</strong> Workers log in once. The app remembers their session and assigned site.</li>
  <li><strong>Camera First:</strong> The interface stays close to a standard phone camera, so there's little to learn.</li>
  <li><strong>Oversized Controls:</strong> Buttons are <mark>large and spaced out</mark> to prevent miss-clicks with gloves.</li>
</ul>

<h4>2 - The clickable prototype</h4>
<p>I built a <mark>clickable prototype in Figma</mark>.</p>

<h4>3 - The colors</h4>
<p>White background, black text and three more colors: a fairly strong blue, #4300FF, for trust and contrast; a green only for the success icon (a check, no text); and an orange for alerts. There wasn't much else to do, since there were only a few screens.</p>
<p>The text is black on white so it reads well in the sun, and the success check is <mark>recognizable by its shape, not only by its color</mark>.</p>

<h4>4 - Logo: The Placeholder Won</h4>
<p>I made several logo proposals, each based on research into a different visual idea for the app. The team chose none of them. They <mark>picked a placeholder</mark> I had made in five minutes.</p>
<p>The lesson: <strong>a simple mark that already works can beat a polished exploration.</strong></p>
{% include case/pair.html a="/assets/img/Workpics/5.webp" a_alt="Logo construction breakdown showing W + P + checkmark geometry" a_w=1920 a_h=1080 a_caption="Composition" b="/assets/img/Workpics/19.webp" b_alt="Logo construction showing negative space usage" b_w=1920 b_h=1080 b_caption="Composition" %}

{% endcapture %}
{% include case/detail.html content=long content_fr=long_fr %}
