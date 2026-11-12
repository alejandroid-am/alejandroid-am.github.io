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
last_modified_at: 2026-11-12
categories: illustration identity
cover_image: /assets/img/cineville_view.webp
theme: cineville
preload_image: /assets/img/Cineville/cineville-title-arch.webp

# --- Layout C "Gallery with captions" (see _projects/spin_app.md) ---
# Rebuilt in round 5 (2026-11-12): the steps follow the order of Ale's presentation.
# Deck texts in French, as written (lang="fr"); short step titles in English;
# no descriptive captions (Ale writes them later). No reproduction of other
# people's works: Dali and Magritte are cited in text, with a link.
case_layout: c
summary: After getting the brief, I went to the Médiathèque André Malraux in Strasbourg, my city.
project_type: Festival poster
# Hero: the arched title from Cineville-texte.png (Ale, 3350 px), recoloured black,
# with the tagline as written on the poster ("de cinéma").
hero_image: /assets/img/Cineville/cineville-title-arch.webp
hero_w: 1600
hero_h: 967
hero_alt: Cinéville, the festival name in arched lettering
hero_bg: "#F2F1F0"
hero_tagline: Festival de cinéma du monde
hero_tagline_lang: fr
# Step 4: colours and meanings from the deck (slide 8).
palette:
  - { name: "Élégance et modernité", hex: "#343A40" }
  - { name: "Mysticisme et sagesse", hex: "#7952B3" }
  - { name: "Énergie, vitalité et jeunesse", hex: "#FFC107" }
  - { name: "Clarté et équilibre visuel", hex: "#E0E0E0" }
# Step 6: the chosen composition and the two Photoshop drafts.
drafts:
  - { src: /assets/img/Cineville/final-sketch.webp, alt: "A more finished pencil sketch of the poster: the melting reel, clouds, and rows of theater seats", w: 420, h: 648 }
  - { src: /assets/img/Cineville/brouillon-1.webp, alt: "An abandoned draft poster built around a wishbone-and-cloth motif", w: 500, h: 707 }
  - { src: /assets/img/Cineville/brouillon-2.webp, alt: "The draft poster with the reel floating over theater seats under a starry sky, the direction that was kept", w: 500, h: 707 }
---
<section class="cv-flow-wrap" aria-labelledby="cv-flow-title">
<h2 id="cv-flow-title">The process</h2>
<ol class="cv-flow">
  <li class="cv-step">
    <h3>The brief</h3>
    <div class="cv-step-body" lang="fr">
      <p>CinéVille organise un festival annuel de cinéma, qui célèbre les œuvres cinématographiques indépendantes et internationales. Le festival se veut <strong>éclectique</strong> et <strong>accessible à tous</strong>, avec une atmosphère qui combine le <strong>chic et le décontracté</strong>, et il cherche à attirer des spectateurs de <strong>tous horizons</strong>. L'affiche doit <strong>refléter l'énergie</strong> de la <strong>diversité culturelle</strong> et <strong>l'audace créative</strong> du cinéma indépendant.</p>
    </div>
    {% capture credit %}{% include label.html key="cv_photo_credit" %}{% endcapture %}
    {% include case/figure.html src="/assets/img/Cineville/theatre-sunset.webp" w=1200 h=1811 narrow=true alt="A theater entrance at dusk, its lit marquee reading Cineville Film Festival" caption=credit %}
  </li>
  <li class="cv-step">
    <h3>The mission</h3>
    <div class="cv-step-body" lang="fr">
      <p class="cv-mission"><strong>Mission&nbsp;:</strong> créer une affiche qui capte l'esprit unique de ce festival de cinéma, en utilisant des références culturelles et visuelles du <strong>surréalisme</strong> des années 1920-1930.</p>
    </div>
    {% include case/figure.html src="/assets/img/Cineville/theatre-night.webp" w=1200 h=1800 narrow=true alt="A theater marquee at night with a crowd at the entrance, the sign reading Cineville Film Festival" caption=credit %}
  </li>
  <li class="cv-step">
    <h3>The codes of surrealism</h3>
    <ul class="cv-codes" lang="fr">
      <li><strong>Les images oniriques</strong> Représentations d'éléments de rêve et d'états subconscients.</li>
      <li><strong>La juxtaposition</strong> Placer des objets et des éléments dans des contextes inattendus.</li>
      <li><strong>La métamorphose</strong> Transformations et changements de forme.</li>
      <li><strong>Automatisme</strong> Création d'art sans intervention consciente.</li>
      <li><strong>Symbolisme</strong> Utilisation de symboles pour représenter des idées et des émotions profondes.</li>
    </ul>
  </li>
  <li class="cv-step">
    <h3>Art direction</h3>
    <div class="cv-step-body">
      <h4>Moodboard</h4>
      <p>The moodboard gathered surrealist film posters, paintings by Dalí and Magritte, and a display type specimen.</p>
    </div>
    <div class="cv-step-body">
      <h4>Typography</h4>
      <dl class="cv-type cv-type-text" lang="fr">
        <div><dt>Neworn Uniquen</dt><dd>Originalité et créativité avec une touche chic grâce à ses empattements caractéristiques.</dd></div>
        <div><dt>DM Sans</dt><dd>Typographie propre, moderne et facilement lisible. Excellent pour contraster et équilibrer la lecture.</dd></div>
      </dl>
    </div>
    <div class="cv-step-body">
      <h4>Palette</h4>
      {% include case/palette.html colors=page.palette lang="fr" %}
    </div>
  </li>
  <li class="cv-step">
    <h3>Sketches</h3>
    <div class="cv-step-body"><p>I did several sketches until I settled on the composition that convinced me most.</p></div>
    <div class="cv-full">
      {% include case/figure.html src="/assets/img/Cineville/croquis-cineville.webp" w=1600 h=1254 alt="Eight pencil thumbnails of the poster: title and baseline zoning, a figure in a bowler hat with a film reel for a head, a clapperboard, melting reels, clouds and theater seats" %}
      {% include case/figure.html src="/assets/img/Cineville/croquis-detaille-cineville.webp" w=1186 h=1087 alt="The same eight pencil thumbnails with stronger lines, the festival name written above each layout" %}
    </div>
  </li>
  <li class="cv-step">
    <h3>Proposals and drafts</h3>
    <div class="cv-step-body"><p>Then I went to Photoshop and started there.</p></div>
    {% include case/figure.html src="/assets/img/Cineville/zoning.webp" w=1000 h=464 alt="Ten thumbnail layout sketches exploring where the title, baseline, date and central artwork could sit on the poster" %}
    {% include case/row.html items=page.drafts %}
  </li>
  <li class="cv-step">
    <h3>The references</h3>
    <div class="cv-step-body"><p>After looking at several works by Dalí and Magritte, I took obvious references from them and carried them over to cinema: theater seats, a film reel, text forming an arch, etc.</p></div>
    <ul class="cv-refcards">
      <li>
        {% include case/img.html src="/assets/img/Cineville/melting-reel.webp" w=605 h=760 alt="The melting film reel from the poster" sizes="(max-width: 767px) 92vw, 320px" %}
        <div>
          <p class="cv-ref-title">Salvador Dalí, <a href="https://en.wikipedia.org/wiki/The_Persistence_of_Memory" target="_blank" rel="noopener noreferrer"><em lang="fr">La Persistance de la mémoire</em></a></p>
          <p lang="fr">La bobine de film fondue fait référence au tableau «&nbsp;La persistance de la mémoire&nbsp;» de Salvador Dalí. Dans l'affiche du festival, il représente <strong>l'audace</strong> du cinéma international et la capacité à remettre en question les perceptions conventionnelles du temps et de la réalité.</p>
          <p>I used AI to generate a film reel in a position I liked, so I could give it that melting effect, like the clocks in <em>The Persistence of Memory</em>.</p>
        </div>
      </li>
      <li>
        {% include case/img.html src="/assets/img/Cineville/dream-cloud.webp" w=900 h=436 alt="The cloud from the poster" sizes="(max-width: 767px) 92vw, 320px" %}
        <div>
          <p class="cv-ref-title">René Magritte, <em lang="fr">Les idées claires</em> (<a href="https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte" target="_blank" rel="noopener noreferrer">René Magritte on Wikipedia</a>)</p>
          <p lang="fr">Les nuages de René Magritte cherchent à exprimer les <strong>rêves</strong> et leur nature intangible, souvent dans des endroits inattendus, symbolisant l'éphémère et le mystérieux. Dans l'affiche, il représente l'imagination et la <strong>créativité</strong>.</p>
        </div>
      </li>
      <li>
        {% include case/img.html src="/assets/img/Cineville/cineville-seats.webp" w=392 h=430 alt="The violet theater seats from the poster, cropped from the final artwork" sizes="(max-width: 767px) 92vw, 320px" %}
        <div>
          <p class="cv-ref-title">Theater seats under the starry sky</p>
          <p lang="fr">Les sièges de cinéma sous le ciel étoilé évoquent non seulement une atmosphère <strong>magique et onirique</strong>, mais symbolisent également un espace ouvert et accessible à <strong>tous les types de publics</strong>, car il n'y a <strong>pas de frontières</strong> au firmament.</p>
        </div>
      </li>
    </ul>
  </li>
  <li class="cv-step">
    <h3>The result</h3>
    <div class="cv-step-body">
      <ul>
        <li>I put a cloud behind it so the film wouldn't be resting on thin air.</li>
        <li>The seats are violet instead of red: more mysterious.</li>
        <li>A starry indigo sky.</li>
        <li>The festival name forms the arch, with the dates and the time.</li>
      </ul>
    </div>
    <figure class="case-fig c-poster cv-full"><a class="zoom-trigger" href="/assets/img/Cineville/cineville_poster-fina-aprouved.webp"><img src="/assets/img/Cineville/cineville_poster-fina-aprouved.webp" alt="The final Cinéville festival poster: the arched yellow title, the dates, a melting film reel on a cloud over rows of violet theater seats, under a starry sky" class="cv-final-poster" width="1272" height="1800" srcset="/assets/img/Cineville/cineville_poster-fina-aprouved-840w.webp 840w, /assets/img/Cineville/cineville_poster-fina-aprouved.webp 1272w" sizes="(max-width: 767px) 92vw, 640px" loading="lazy" decoding="async"></a></figure>
  </li>
  <li class="cv-step">
    <h3>Photomontage</h3>
    {% include case/figure.html src="/assets/img/Cineville/theatre-facade.webp" w=784 h=944 narrow=true alt="A historic theater facade with a vertical sign and a marquee reading Cineville Film Festival" caption=credit %}
  </li>
  <li class="cv-step">
    <h3>The poster in situ</h3>
    <div class="cv-step-body"><p>The poster in mockups of urban settings.</p></div>
    <div class="cv-full">
      {% include case/pair.html a="/assets/img/Cineville/pagina-21.webp" a_alt="Mockup of the Cinéville poster on a street billboard at night" a_w=2000 a_h=1414 b="/assets/img/Cineville/pagina-23.webp" b_alt="Mockup of the Cinéville poster at a seaside bus stop" b_w=2000 b_h=1414 %}
      {% include case/pair.html a="/assets/img/Cineville/pagina-22.webp" a_alt="Mockup of the Cinéville poster at a tram stop" a_w=2000 a_h=1414 b="/assets/img/Cineville/pagina-24.webp" b_alt="Mockup of the Cinéville poster on a large format billboard" b_w=2000 b_h=1414 %}
    </div>
  </li>
</ol>
</section>

{% capture long %}
<h3>At the library: surrealism and typography</h3>
<p>After getting the brief, I went to the Médiathèque André Malraux in Strasbourg, my city.</p>
<p>There I took out books on surrealism to understand the concept and the art movement academically: where it comes from and who its main figures were. That's where Dalí and Magritte came from. I also took out books on typography, to find out which one would suit the poster best.</p>

<h3>The delivery</h3>
<p>Everything ready for print in CMYK, with the right image quality and size, and the layers organized in case of changes later.</p>

<p class="c-closing">And a presentation at the end that explains how I worked and justifies each of my decisions.</p>
{% endcapture %}
{% include case/detail.html summary="Le détail" summary_lang="fr" content=long %}
