---
layout: project
title: Cinéville Festival
description: A surrealist film festival poster, made as a graded exam exercise (not a real client). Library research, pencil sketches, then Photoshop.
context: Graded exam exercise (not a real client)
role: Art direction & graphic design
role_short: Art Direction
tools: Photoshop, Illustrator
year: 2024
home_order: 3
last_modified_at: 2026-11-23
categories: illustration identity
cover_image: /assets/img/cineville_view.webp
theme: cineville
preload_image: /assets/img/Cineville/cineville-title-arch.webp

# --- Layout C "Gallery with captions" (see _projects/spin_app.md) ---
# Rebuilt in round 5 (2026-11-12): the steps follow the order of Ale's presentation.
# Bilingual since 2026-11-23: the deck texts in French as written, translated to English;
# the English narrative translated to French (to be checked by Ale, see NOTAS).
# No reproduction of other people's works: Dali and Magritte are cited in text, with a link.
case_layout: c
summary: After getting the brief, I went to the Médiathèque André Malraux in Strasbourg, my city.
project_type: Festival poster
# Hero: the tagline as written on the poster ("de cinéma"), above the arched title
# from Cineville-texte.png (Ale, 3350 px), recoloured black. The tagline is the
# poster's own lettering: French in both languages.
hero_image: /assets/img/Cineville/cineville-title-arch.webp
hero_w: 1600
hero_h: 967
hero_alt: Cinéville, the festival name in arched lettering
hero_bg: "#F2F1F0"
hero_tagline: Festival de cinéma du monde
hero_tagline_lang: fr
fr:
  title: Festival Cinéville
  description: "Une affiche de festival de cinéma surréaliste, réalisée comme exercice d'examen noté (pas un vrai client). Recherche en médiathèque, croquis au crayon, puis Photoshop."
  summary: Une fois le brief en main, direction la Médiathèque André Malraux à Strasbourg, ma ville.
  context: Exercice d'examen noté (pas un vrai client)
  role: Direction artistique et design graphique
  role_short: Direction artistique
  project_type: Affiche de festival
  hero_alt: Cinéville, le nom du festival en lettrage en arc
# Step 2 (La mission): the three theatre photos in one carousel (Pexels, edited by Ale).
theatre:
  - { src: /assets/img/Cineville/theatre-sunset.webp, alt: "A theater entrance at dusk, its lit marquee reading Cineville Film Festival", alt_fr: "L'entrée d'un théâtre au crépuscule, son enseigne lumineuse indiquant Cineville Film Festival", w: 1200, h: 1811 }
  - { src: /assets/img/Cineville/theatre-night.webp, alt: "A theater marquee at night with a crowd at the entrance, the sign reading Cineville Film Festival", alt_fr: "L'enseigne d'un théâtre la nuit, avec du monde à l'entrée, indiquant Cineville Film Festival", w: 1200, h: 1800 }
  - { src: /assets/img/Cineville/theatre-facade.webp, alt: "A historic theater facade with a vertical sign and a marquee reading Cineville Film Festival", alt_fr: "La façade d'un théâtre ancien avec une enseigne verticale et une marquise indiquant Cineville Film Festival", w: 784, h: 944 }
# Step 4: colours and meanings from the deck (slide 8).
palette:
  - { name: "Elegance and modernity", name_fr: "Élégance et modernité", hex: "#343A40" }
  - { name: "Mysticism and wisdom", name_fr: "Mysticisme et sagesse", hex: "#7952B3" }
  - { name: "Energy, vitality and youth", name_fr: "Énergie, vitalité et jeunesse", hex: "#FFC107" }
  - { name: "Clarity and visual balance", name_fr: "Clarté et équilibre visuel", hex: "#E0E0E0" }
# Step 6: the two Photoshop drafts.
drafts:
  - { src: /assets/img/Cineville/brouillon-1.webp, alt: "An abandoned draft poster built around a wishbone-and-cloth motif", alt_fr: "Un brouillon d'affiche abandonné, construit autour d'un motif de bréchet et de tissu", w: 500, h: 707 }
  - { src: /assets/img/Cineville/brouillon-2.webp, alt: "The draft poster with the reel floating over theater seats under a starry sky, the direction that was kept", alt_fr: "Le brouillon avec la bobine qui flotte au-dessus des sièges de cinéma sous un ciel étoilé, la piste retenue", w: 500, h: 707 }
---
<section class="cv-flow-wrap" aria-labelledby="cv-flow-title">
<h2 id="cv-flow-title">{% include bi.html fr="Le processus" en="The process" %}</h2>
<ol class="cv-flow">
  <li class="cv-step">
    <h3>{% include bi.html fr="Le brief" en="The brief" %}</h3>
    <div class="cv-step-body only-fr" lang="fr">
      <p>CinéVille organise un festival annuel de cinéma, qui célèbre les œuvres cinématographiques indépendantes et internationales. Le festival se veut <strong>éclectique</strong> et <strong>accessible à tous</strong>, avec une atmosphère qui combine le <strong>chic et le décontracté</strong>, et il cherche à attirer des spectateurs de <strong>tous horizons</strong>. L'affiche doit <strong>refléter l'énergie</strong> de la <strong>diversité culturelle</strong> et <strong>l'audace créative</strong> du cinéma indépendant.</p>
    </div>
    <div class="cv-step-body only-en" lang="en">
      <p>CinéVille runs an annual film festival that celebrates independent and international cinema. The festival aims to be <strong>eclectic</strong> and <strong>accessible to all</strong>, with an atmosphere that blends <strong>chic and casual</strong>, and it wants to draw audiences <strong>from all backgrounds</strong>. The poster must <strong>reflect the energy</strong> of <strong>cultural diversity</strong> and the <strong>creative boldness</strong> of independent cinema.</p>
    </div>
    {% include case/carousel.html items=page.theatre label="cv_carousel" ratio="2 / 3" credit="cv_photo_credit" %}
  </li>
  <li class="cv-step">
    <h3>{% include bi.html fr="La mission" en="The mission" %}</h3>
    <div class="cv-step-body only-fr" lang="fr">
      <p class="cv-mission"><strong>Mission&nbsp;:</strong> créer une affiche qui capte l'esprit unique de ce festival de cinéma, en utilisant des références culturelles et visuelles du <strong>surréalisme</strong> des années 1920-1930.</p>
    </div>
    <div class="cv-step-body only-en" lang="en">
      <p class="cv-mission"><strong>Mission:</strong> create a poster that captures the unique spirit of this film festival, using cultural and visual references from the <strong>surrealism</strong> of the 1920s and 1930s.</p>
    </div>
  </li>
  <li class="cv-step">
    <h3>{% include bi.html fr="Les codes du surréalisme" en="The codes of surrealism" %}</h3>
    <ul class="cv-codes only-fr" lang="fr">
      <li><strong>Les images oniriques</strong> Représentations d'éléments de rêve et d'états subconscients.</li>
      <li><strong>La juxtaposition</strong> Placer des objets et des éléments dans des contextes inattendus.</li>
      <li><strong>La métamorphose</strong> Transformations et changements de forme.</li>
      <li><strong>Automatisme</strong> Création d'art sans intervention consciente.</li>
      <li><strong>Symbolisme</strong> Utilisation de symboles pour représenter des idées et des émotions profondes.</li>
    </ul>
    <ul class="cv-codes only-en" lang="en">
      <li><strong>Dream imagery</strong> Depictions of dream elements and subconscious states.</li>
      <li><strong>Juxtaposition</strong> Placing objects and elements in unexpected contexts.</li>
      <li><strong>Metamorphosis</strong> Transformations and changes of shape.</li>
      <li><strong>Automatism</strong> Making art without conscious intervention.</li>
      <li><strong>Symbolism</strong> Using symbols to represent deep ideas and emotions.</li>
    </ul>
  </li>
  <li class="cv-step">
    <h3>{% include bi.html fr="Direction artistique" en="Art direction" %}</h3>
    <div class="cv-step-body">
      <h4>Moodboard</h4>
      <p class="only-fr" lang="fr">Le moodboard réunissait des affiches de films surréalistes, des tableaux de Dalí et de Magritte, et un spécimen de caractère d'affichage.</p>
      <p class="only-en" lang="en">The moodboard gathered surrealist film posters, paintings by Dalí and Magritte, and a display type specimen.</p>
    </div>
    <div class="cv-step-body">
      <h4>{% include bi.html fr="Typographie" en="Typography" %}</h4>
      <dl class="cv-type cv-type-text only-fr" lang="fr">
        <div><dt>Neworn Uniquen</dt><dd>Originalité et créativité avec une touche chic grâce à ses empattements caractéristiques.</dd></div>
        <div><dt>DM Sans</dt><dd>Typographie propre, moderne et facilement lisible. Excellent pour contraster et équilibrer la lecture.</dd></div>
      </dl>
      <dl class="cv-type cv-type-text only-en" lang="en">
        <div><dt>Neworn Uniquen</dt><dd>Originality and creativity with a chic touch, thanks to its distinctive serifs.</dd></div>
        <div><dt>DM Sans</dt><dd>A clean, modern, easy-to-read typeface. Excellent for contrast and for balancing the reading.</dd></div>
      </dl>
    </div>
    <div class="cv-step-body">
      <h4>Palette</h4>
      {% include case/palette.html colors=page.palette %}
    </div>
  </li>
  <li class="cv-step">
    <h3>{% include bi.html fr="Croquis" en="Sketches" %}</h3>
    <div class="cv-step-body">
      <p class="only-fr" lang="fr">J'ai fait plusieurs croquis, jusqu'à trouver la composition qui me convainquait le plus.</p>
      <p class="only-en" lang="en">I did several sketches until I settled on the composition that convinced me most.</p>
    </div>
    <div class="cv-full">
      {% include case/figure.html src="/assets/img/Cineville/croquis-cineville.webp" w=1600 h=1254 alt="Eight pencil thumbnails of the poster: title and baseline zoning, a figure in a bowler hat with a film reel for a head, a clapperboard, melting reels, clouds and theater seats" alt_fr="Huit vignettes au crayon de l'affiche : zonage du titre et de la baseline, un personnage au chapeau melon avec une bobine de film en guise de tête, un clap, des bobines qui fondent, des nuages et des sièges de cinéma" %}
    </div>
  </li>
  <li class="cv-step">
    <h3>{% include bi.html fr="Propositions et brouillons" en="Proposals and drafts" %}</h3>
    <div class="cv-step-body">
      <p class="only-fr" lang="fr">Ensuite, j'ai ouvert Photoshop et j'ai commencé là.</p>
      <p class="only-en" lang="en">Then I went to Photoshop and started there.</p>
    </div>
    {% include case/row.html items=page.drafts %}
  </li>
  <li class="cv-step">
    <h3>{% include bi.html fr="Les références" en="The references" %}</h3>
    <div class="cv-step-body">
      <p class="only-fr" lang="fr">Après avoir regardé plusieurs œuvres de Dalí et de Magritte, j'en ai repris des références évidentes et je les ai transposées au cinéma&nbsp;: des sièges de cinéma, une bobine de film, un texte qui forme un arc, etc.</p>
      <p class="only-en" lang="en">After looking at several works by Dalí and Magritte, I took obvious references from them and carried them over to cinema: theater seats, a film reel, text forming an arch, etc.</p>
    </div>
    <ul class="cv-refcards">
      <li>
        {% include case/img.html src="/assets/img/Cineville/melting-reel.webp" w=605 h=760 alt="The melting film reel from the poster" alt_fr="La bobine de film qui fond, sur l'affiche" sizes="(max-width: 767px) 92vw, 320px" %}
        <div class="only-fr" lang="fr">
          <p class="cv-ref-title">Salvador Dalí, <a href="https://fr.wikipedia.org/wiki/La_Persistance_de_la_m%C3%A9moire" target="_blank" rel="noopener noreferrer"><em>La Persistance de la mémoire</em></a></p>
          <p>La bobine de film fondue fait référence au tableau «&nbsp;La persistance de la mémoire&nbsp;» de Salvador Dalí. Dans l'affiche du festival, il représente <strong>l'audace</strong> du cinéma international et la capacité à remettre en question les perceptions conventionnelles du temps et de la réalité.</p>
          <p>J'ai utilisé l'IA pour générer une bobine de film dans une position qui me plaisait, afin de pouvoir lui donner cet effet de fonte, comme les montres de <em>La Persistance de la mémoire</em>.</p>
        </div>
        <div class="only-en" lang="en">
          <p class="cv-ref-title">Salvador Dalí, <a href="https://en.wikipedia.org/wiki/The_Persistence_of_Memory" target="_blank" rel="noopener noreferrer"><em>The Persistence of Memory</em></a></p>
          <p>The melting film reel refers to Salvador Dalí's painting <em>The Persistence of Memory</em>. On the festival poster, it stands for the <strong>boldness</strong> of international cinema and its ability to challenge conventional perceptions of time and reality.</p>
          <p>I used AI to generate a film reel in a position I liked, so I could give it that melting effect, like the clocks in <em>The Persistence of Memory</em>.</p>
        </div>
      </li>
      <li>
        {% include case/img.html src="/assets/img/Cineville/dream-cloud.webp" w=900 h=436 alt="The cloud from the poster" alt_fr="Le nuage de l'affiche" sizes="(max-width: 767px) 92vw, 320px" %}
        <div class="only-fr" lang="fr">
          <p class="cv-ref-title">René Magritte, <em>Les Idées claires</em> (<a href="https://fr.wikipedia.org/wiki/Ren%C3%A9_Magritte" target="_blank" rel="noopener noreferrer">René Magritte sur Wikipédia</a>)</p>
          <p>Les nuages de René Magritte cherchent à exprimer les <strong>rêves</strong> et leur nature intangible, souvent dans des endroits inattendus, symbolisant l'éphémère et le mystérieux. Dans l'affiche, il représente l'imagination et la <strong>créativité</strong>.</p>
        </div>
        <div class="only-en" lang="en">
          <p class="cv-ref-title">René Magritte, <em>The Clear Ideas</em> (<a href="https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte" target="_blank" rel="noopener noreferrer">René Magritte on Wikipedia</a>)</p>
          <p>René Magritte's clouds try to express <strong>dreams</strong> and their intangible nature, often in unexpected places, as a symbol of the fleeting and the mysterious. On the poster, the cloud stands for imagination and <strong>creativity</strong>.</p>
        </div>
      </li>
      <li>
        {% include case/img.html src="/assets/img/Cineville/cineville-seats.webp" w=392 h=430 alt="The violet theater seats from the poster, cropped from the final artwork" alt_fr="Les sièges de cinéma violets de l'affiche, recadrés depuis l'œuvre finale" sizes="(max-width: 767px) 92vw, 320px" %}
        <div class="only-fr" lang="fr">
          <p class="cv-ref-title">Les sièges de cinéma sous le ciel étoilé</p>
          <p>Les sièges de cinéma sous le ciel étoilé évoquent non seulement une atmosphère <strong>magique et onirique</strong>, mais symbolisent également un espace ouvert et accessible à <strong>tous les types de publics</strong>, car il n'y a <strong>pas de frontières</strong> au firmament.</p>
        </div>
        <div class="only-en" lang="en">
          <p class="cv-ref-title">Theater seats under the starry sky</p>
          <p>The theater seats under the starry sky evoke a <strong>magical, dreamlike</strong> atmosphere, and they also stand for an open space, accessible to <strong>every kind of audience</strong>, because there are <strong>no borders</strong> in the sky.</p>
        </div>
      </li>
    </ul>
  </li>
  <li class="cv-step">
    <h3>{% include bi.html fr="Le résultat" en="The result" %}</h3>
    <div class="cv-step-body">
      <ul class="only-fr" lang="fr">
        <li>J'ai mis un nuage derrière, pour que la pellicule ne repose pas dans le vide.</li>
        <li>Les sièges sont violets au lieu de rouges&nbsp;: plus mystérieux.</li>
        <li>Un ciel indigo étoilé.</li>
        <li>Le nom du festival forme l'arc, avec les dates et l'horaire.</li>
      </ul>
      <ul class="only-en" lang="en">
        <li>I put a cloud behind it so the film wouldn't be resting on thin air.</li>
        <li>The seats are violet instead of red: more mysterious.</li>
        <li>A starry indigo sky.</li>
        <li>The festival name forms the arch, with the dates and the time.</li>
      </ul>
    </div>
    <figure class="case-fig c-poster cv-full"><a class="zoom-trigger" href="/assets/img/Cineville/cineville_poster-fina-aprouved.webp"><img src="/assets/img/Cineville/cineville_poster-fina-aprouved.webp" alt="L'affiche finale du festival Cinéville : le titre jaune en arc, les dates, une bobine de film qui fond sur un nuage au-dessus de rangées de sièges de cinéma violets, sous un ciel étoilé" data-alt-en="The final Cinéville festival poster: the arched yellow title, the dates, a melting film reel on a cloud over rows of violet theater seats, under a starry sky" class="cv-final-poster" width="1272" height="1800" srcset="/assets/img/Cineville/cineville_poster-fina-aprouved-840w.webp 840w, /assets/img/Cineville/cineville_poster-fina-aprouved.webp 1272w" sizes="(max-width: 767px) 92vw, 640px" loading="lazy" decoding="async"></a></figure>
  </li>
  <li class="cv-step">
    <h3>{% include bi.html fr="L'affiche in situ" en="The poster in situ" %}</h3>
    <div class="cv-step-body">
      <p class="only-fr" lang="fr">L'affiche en mockups dans des décors urbains.</p>
      <p class="only-en" lang="en">The poster in mockups of urban settings.</p>
    </div>
    <div class="cv-full">
      {% include case/pair.html a="/assets/img/Cineville/pagina-21.webp" a_alt="Mockup of the Cinéville poster on a street billboard at night" a_alt_fr="Mockup de l'affiche Cinéville sur un panneau dans la rue, de nuit" a_w=2000 a_h=1414 b="/assets/img/Cineville/pagina-23.webp" b_alt="Mockup of the Cinéville poster at a seaside bus stop" b_alt_fr="Mockup de l'affiche Cinéville sur un abribus au bord de la mer" b_w=2000 b_h=1414 %}
      {% include case/pair.html a="/assets/img/Cineville/pagina-22.webp" a_alt="Mockup of the Cinéville poster at a tram stop" a_alt_fr="Mockup de l'affiche Cinéville à un arrêt de tram" a_w=2000 a_h=1414 b="/assets/img/Cineville/pagina-24.webp" b_alt="Mockup of the Cinéville poster on a large format billboard" b_alt_fr="Mockup de l'affiche Cinéville sur un panneau grand format" b_w=2000 b_h=1414 %}
    </div>
  </li>
</ol>
</section>

{% capture long_fr %}
<h3>À la médiathèque&nbsp;: surréalisme et typographie</h3>
<p>Une fois le brief en main, direction la Médiathèque André Malraux à Strasbourg, ma ville.</p>
<p>Là, j'ai emprunté des <mark>livres sur le surréalisme</mark> pour comprendre le concept et le mouvement artistique de façon académique&nbsp;: d'où il vient et qui en sont les grandes figures. C'est de là que viennent Dalí et Magritte. J'ai aussi emprunté des livres de typographie, pour savoir laquelle conviendrait le mieux à l'affiche.</p>

<h3>La livraison</h3>
<p>Tout <mark>prêt pour l'impression en CMJN</mark>, avec la bonne qualité et la bonne taille d'image, et les calques organisés en cas de modifications plus tard.</p>

<p class="c-closing">Et, pour finir, une présentation qui explique comment j'ai travaillé et <mark>justifie chacune de mes décisions</mark>.</p>
{% endcapture %}
{% capture long %}
<h3>At the library: surrealism and typography</h3>
<p>After getting the brief, I went to the Médiathèque André Malraux in Strasbourg, my city.</p>
<p>There I took out <mark>books on surrealism</mark> to understand the concept and the art movement academically: where it comes from and who its main figures were. That's where Dalí and Magritte came from. I also took out books on typography, to find out which one would suit the poster best.</p>

<h3>The delivery</h3>
<p>Everything <mark>ready for print in CMYK</mark>, with the right image quality and size, and the layers organized in case of changes later.</p>

<p class="c-closing">And a presentation at the end that explains how I worked and <mark>justifies each of my decisions</mark>.</p>
{% endcapture %}
{% include case/detail.html content=long content_fr=long_fr %}
