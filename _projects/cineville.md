---
layout: project
title: Cinéville Festival
description: A surrealist film festival poster, made as a graded exam exercise (not a real client). Library research, pencil sketches, then Photoshop.
context: Graded exam exercise (not a real client)
role: Art direction & graphic design
role_short: Art Direction
tools: Photoshop, Illustrator
year: 2024
home_order: 6
last_modified_at: 2026-11-11
categories: illustration identity
cover_image: /assets/img/cineville_view.webp
theme: cineville
preload_image: /assets/img/Cineville/cineville-title-black.webp

# --- Layout C "Gallery with captions" (see _projects/spin_app.md) ---
case_layout: c
summary: After getting the brief, I went to the Médiathèque André Malraux in Strasbourg, my city.
project_type: Festival poster
# Hero: the arched wordmark cut from the poster, recoloured black (the arch is
# hand-warped lettering: an SVG copy would not be faithful). Tagline copied from
# the poster as written there ("de cinéma", above the title on the poster).
hero_image: /assets/img/Cineville/cineville-title-black.webp
hero_w: 750
hero_h: 469
hero_alt: Cinéville, the festival name in arched lettering
hero_bg: "#F2F1F0"
hero_tagline: Festival de cinéma du monde
hero_tagline_lang: fr
drafts:
  - { src: /assets/img/Cineville/brouillon-1.webp, alt: "An abandoned draft poster built around a wishbone-and-cloth motif", w: 500, h: 707 }
  - { src: /assets/img/Cineville/brouillon-2.webp, alt: "The draft poster with the reel floating over theater seats under a starry sky, the direction that was kept", w: 500, h: 707 }
# Colours and names from the process deck (slide 8).
palette:
  - { name: Dark gray, hex: "#343A40" }
  - { name: Violet, hex: "#7952B3" }
  - { name: Yellow, hex: "#FFC107" }
  - { name: Light gray, hex: "#E0E0E0" }
# Image slots of the process (Ale exports them from Canva). Empty list = nothing
# shown, no placeholder. Format: - { src: /assets/img/Cineville/x.webp, alt: "...", w: 1600, h: 1000 }
flow_sketches: []
flow_proposals: []
flow_drafts: []
flow_action: []
logos:
  - { src: /assets/img/Cineville/cineville-title.webp, alt: "CinéVille title lettering", w: 750, h: 469, bg: dark, caption: "Title lettering" }
---
{% include case/figure.html src="/assets/img/Cineville/zoning.webp" w=1000 h=464 alt="Ten thumbnail layout sketches exploring where the title, baseline, date and central artwork could sit on the poster" caption="Layout thumbnails." %}

{% include case/row.html items=page.drafts caption="Two drafts in Photoshop." %}

{% include case/figure.html src="/assets/img/Cineville/melting-reel.webp" w=605 h=760 narrow=true alt="The melting film reel illustration created for the Cinéville poster, inspired by Dalí's soft clocks" caption="I used AI to generate a film reel in a position I liked, so I could give it that melting effect, like the clocks in <em>The Persistence of Memory</em>." %}

<figure class="case-fig c-poster"><a class="zoom-trigger" href="/assets/img/Cineville/cineville_poster-fina-aprouved.webp"><img src="/assets/img/Cineville/cineville_poster-fina-aprouved.webp" alt="Final Cinéville festival poster, surrealist film reel melting over theater seats in a cloudy sky" class="cv-final-poster" width="1272" height="1800" srcset="/assets/img/Cineville/cineville_poster-fina-aprouved-840w.webp 840w, /assets/img/Cineville/cineville_poster-fina-aprouved.webp 1272w" sizes="(max-width: 767px) 92vw, 1272px" loading="lazy" decoding="async"></a></figure>

{% include case/logo.html items=page.logos %}

<h2>Mockups</h2>

{% include case/pair.html a="/assets/img/Cineville/pagina-21.webp" a_alt="Mockup of the Cinéville poster on a street billboard at night" a_w=2000 a_h=1414 a_caption="Mockup: street billboard at night" b="/assets/img/Cineville/pagina-23.webp" b_alt="Mockup of the Cinéville poster at a seaside bus stop" b_w=2000 b_h=1414 b_caption="Mockup: seaside bus stop" %}

<section class="cv-flow-wrap" aria-labelledby="cv-flow-title">
<h2 id="cv-flow-title">{% include label.html key="cv_flow" %}</h2>
<ol class="cv-flow">
  <li class="cv-step">
    <h3>{% include label.html key="cv_brief" %}</h3>
    <div class="cv-step-body" lang="fr">
      <p>CinéVille organise un festival annuel de cinéma, qui célèbre les œuvres cinématographiques indépendantes et internationales. Le festival se veut <strong>éclectique</strong> et <strong>accessible à tous</strong>, avec une atmosphère qui combine le <strong>chic et le décontracté</strong>, et il cherche à attirer des spectateurs de <strong>tous horizons</strong>. L'affiche doit <strong>refléter l'énergie</strong> de la <strong>diversité culturelle</strong> et <strong>l'audace créative</strong> du cinéma indépendant.</p>
      <p class="cv-mission"><strong>Mission&nbsp;:</strong> créer une affiche qui capte l'esprit unique de ce festival de cinéma, en utilisant des références culturelles et visuelles du <strong>surréalisme</strong> des années 1920-1930.</p>
    </div>
  </li>
  <li class="cv-step">
    <h3>{% include label.html key="cv_codes" %}</h3>
    <ul class="cv-codes" lang="fr">
      <li><strong>Les images oniriques</strong> Représentations d'éléments de rêve et d'états subconscients.</li>
      <li><strong>La juxtaposition</strong> Placer des objets et des éléments dans des contextes inattendus.</li>
      <li><strong>La métamorphose</strong> Transformations et changements de forme.</li>
      <li><strong>Automatisme</strong> Création d'art sans intervention consciente.</li>
      <li><strong>Symbolisme</strong> Utilisation de symboles pour représenter des idées et des émotions profondes.</li>
    </ul>
  </li>
  <li class="cv-step">
    <h3>{% include label.html key="cv_direction" %}</h3>
    <div class="cv-step-body"><p>The moodboard gathered surrealist film posters, paintings by Dalí and Magritte, and a display type specimen.</p></div>
  </li>
  <li class="cv-step">
    <h3>{% include label.html key="cv_type" %}</h3>
    <dl class="cv-type">
      <div><dt>Neworn Uniquen</dt><dd>{% include label.html key="cv_type_title" %}</dd></div>
      <div><dt>DM Sans</dt><dd>{% include label.html key="cv_type_text" %}</dd></div>
    </dl>
  </li>
  <li class="cv-step">
    <h3>{% include label.html key="cv_palette" %}</h3>
    {% include case/palette.html colors=page.palette %}
  </li>
  <li class="cv-step">
    <h3>{% include label.html key="cv_sketches" %}</h3>
    <div class="cv-step-body"><p>I did several sketches until I settled on the composition that convinced me most.</p></div>
    {%- if page.flow_sketches.size > 0 %}{% include case/row.html items=page.flow_sketches %}{% endif %}
  </li>
  <li class="cv-step">
    <h3>{% include label.html key="cv_proposals" %}</h3>
    <div class="cv-step-body"><p>Then I went to Photoshop and started there.</p></div>
    {%- if page.flow_proposals.size > 0 %}{% include case/row.html items=page.flow_proposals %}{% endif %}
  </li>
  <li class="cv-step">
    <h3>{% include label.html key="cv_drafts" %}</h3>
    <div class="cv-step-body"><p>Two drafts in Photoshop.</p></div>
    {%- if page.flow_drafts.size > 0 %}{% include case/row.html items=page.flow_drafts %}{% endif %}
  </li>
  <li class="cv-step">
    <h3>{% include label.html key="cv_refs" %}</h3>
    <ul class="c-refs">
      <li>Salvador Dalí, <a href="https://en.wikipedia.org/wiki/The_Persistence_of_Memory" target="_blank" rel="noopener noreferrer"><em>La Persistance de la mémoire</em></a>. <span lang="fr">La bobine de film fondue fait référence au tableau «&nbsp;La persistance de la mémoire&nbsp;» de Salvador Dali. Dans l'affiche du festival, il représente <strong>l'audace</strong> du cinéma international et la capacité à remettre en question les perceptions conventionnelles du temps et de la réalité.</span></li>
      <li>René Magritte, <em>Les idées claires</em> (<a href="https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte" target="_blank" rel="noopener noreferrer">René Magritte on Wikipedia</a>). <span lang="fr">Les nuages de René Magritte cherchent à exprimer les <strong>rêves</strong> et leur nature intangible, souvent dans des endroits inattendus, symbolisant l'éphémère et le mystérieux. Dans l'affiche, il représente l'imagination et la <strong>créativité</strong>.</span></li>
      <li lang="fr">Les sièges de cinéma sous le ciel étoilé évoquent non seulement une atmosphère <strong>magique et onirique</strong>, mais symbolisent également un espace ouvert et accessible à <strong>tous les types de publics</strong>, car il n'y a <strong>pas de frontières</strong> au firmament.</li>
    </ul>
  </li>
  <li class="cv-step">
    <h3>{% include label.html key="cv_action" %}</h3>
    <div class="cv-step-body"><p>The poster in mockups of urban settings.</p></div>
    {%- if page.flow_action.size > 0 %}{% include case/row.html items=page.flow_action %}{% endif %}
  </li>
</ol>
</section>

{% capture long %}
<h3>At the library: surrealism and typography</h3>
<p>After getting the brief, I went to the Médiathèque André Malraux in Strasbourg, my city.</p>
<p>There I took out books on surrealism to understand the concept and the art movement academically: where it comes from and who its main figures were. That's where Dalí and Magritte came from. I also took out books on typography, to find out which one would suit the poster best.</p>
{% include case/pair.html a="/assets/img/Cineville/research-paradiso.webp" a_alt="Cinema Paradiso display typeface specimen, an ornate arched wordmark over a tropical illustration" a_w=735 a_h=427 a_caption="A display type specimen, a reference for the arched lettering." b="/assets/img/Cineville/research-books.webp" b_alt="Reference books on Surrealism and on typographic choice, stacked on a desk" b_w=400 b_h=491 b_caption="A book on surrealism and a guide to choosing type." %}

<h3>From the paintings to the cinema</h3>
<p>After looking at several works by Dalí and Magritte, I took obvious references from them and carried them over to cinema: theater seats, a film reel, text forming an arch, etc.</p>
<p>I did several sketches until I settled on the composition that convinced me most. Then I went to Photoshop and started there.</p>
<figure class="case-fig c-narrow"><a class="zoom-trigger" href="/assets/img/Cineville/final-sketch.webp"><img src="/assets/img/Cineville/final-sketch.webp" alt="A more finished pencil sketch of the Cinéville poster, already showing the melting reel, clouds and theater seats silhouette facing an audience" width="420" height="648" loading="lazy" decoding="async" data-caption="The composition I chose."></a><figcaption>The composition I chose.</figcaption></figure>
{% include case/figure.html src="/assets/img/Cineville/sketches.webp" w=900 h=707 alt="Eight rougher sketches, including a figure with a film reel for a head wearing a bowler hat, and early clapperboard and film-strip motifs" caption="Rougher sketches." %}

<h3>The reel came from AI</h3>
<p>I used AI to generate a film reel in a position I liked, so I could give it that melting effect, like the clocks in <em>The Persistence of Memory</em>.</p>

<h3>The decisions</h3>
<ul>
  <li>I put a cloud behind it so the film wouldn't be resting on thin air.</li>
  <li>The seats are violet instead of red: more mysterious.</li>
  <li>A starry indigo sky.</li>
  <li>The festival name forms the arch, with the dates and the time.</li>
</ul>
{% include case/figure.html src="/assets/img/Cineville/dream-cloud.webp" w=900 h=436 alt="The floating cloud illustration created for the Cinéville poster" %}

<h3>The delivery</h3>
<p>Everything ready for print in CMYK, with the right image quality and size, and the layers organized in case of changes later.</p>

<h3>Mockups</h3>
<p>The poster in mockups of urban settings.</p>
{% include case/pair.html a="/assets/img/Cineville/pagina-22.webp" a_alt="Mockup of the Cinéville poster at a tram stop" a_w=2000 a_h=1414 a_caption="Mockup: tram stop" b="/assets/img/Cineville/pagina-24.webp" b_alt="Mockup of the Cinéville poster on a large format billboard" b_w=2000 b_h=1414 b_caption="Mockup: large format billboard" %}

<p class="c-closing">And a presentation at the end that explains how I worked and justifies each of my decisions.</p>
{% endcapture %}
{% include case/detail.html summary="Le détail" summary_lang="fr" content=long %}
