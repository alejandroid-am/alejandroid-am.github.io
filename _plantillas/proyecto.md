---
# =================================================================
#  PLANTILLA DE PROYECTO. Copia este archivo a _projects/<nombre>.md
#  (nombre en minúsculas, sin espacios: será la URL /projects/<nombre>/).
#  _plantillas/ no se publica (Jekyll ignora las carpetas con "_").
#  Borra los comentarios que no necesites. Textos del caso en inglés por ahora.
# =================================================================

# --- Lo que se ve en la cabecera del caso y en las listas ---
title: Nombre del proyecto
description: Una o dos frases. Sale en /projets/, en el carril de la home y en Google.
role: UI/UX & brand                 # rol completo (cabecera del caso)
role_short: UI/UX & Brand           # rol corto (tarjetas y filas)
tools: Figma, Illustrator
year: 2026
result: Una frase con el resultado real (sin cifras inventadas).
category: Refonte e-commerce        # categoría corta; se usa sobre todo en los proyectos bloqueados

# --- Dónde aparece ---
home_order: 7          # posición en el carril de la home (1 = primero). Sin home_order: solo en /projets/
hide_from_home: false  # true = nunca en la home, aunque tenga home_order (sigue en /projets/)
locked: false          # true = proyecto bajo NDA: tarjeta con candado, "Étude de cas sur demande",
                       #        enlace a Contact con el asunto ya escrito. El cuerpo NUNCA se muestra:
                       #        no pongas aquí ni texto ni imágenes privados. Con locked: true añade también
                       #        sitemap: false (y deja el cuerpo vacío).

# --- Maquetación C "Galería con pies" (opcional; sin case_layout, el caso usa el estilo antiguo) ---
# Orden: título + resumen, fila de metadatos, imagen de cabecera, cuerpo, "Next project".
# Ejemplo completo: _projects/spin_app.md
case_layout: c
summary: Una frase de resumen, tomada del texto del caso.
project_type: Mobile app redesign          # "Type" en la fila de metadatos
hero_image: /assets/img/mi-proyecto/hero.webp
hero_w: 2400
hero_h: 1350
hero_alt: Describe la imagen

# --- Imágenes de listas (rutas desde la raíz del sitio) ---
cover_image: /assets/img/mi-proyecto/cover.webp   # obligatoria (redes sociales y /projets/)
thumb_image: /assets/img/mi-proyecto/thumb.webp   # opcional: miniatura en /projets/ (si no, cover_image)
rail_image: /assets/img/mi-proyecto/rail.webp     # opcional: imagen grande del carril (si no, thumb o cover)

# --- Rendimiento: la primera imagen del caso se pide antes que nada ---
preload_image: /assets/img/mi-proyecto/hero.webp
preload_srcset: "/assets/img/mi-proyecto/hero-960w.webp 960w, /assets/img/mi-proyecto/hero.webp 2400w"
preload_sizes: "100vw"

# --- Filtros y fechas ---
categories: ux-ui identity          # ux-ui, identity, tools, illustration, motion, 3d-art, game-dev, frontend
last_modified_at: 2026-11-11

# --- Datos para los bloques de paleta y logo (opcionales) ---
palette:
  - { name: Violet nuit, hex: "#2B1B5A", use: Fond principal }
  - { name: Jaune, hex: "#FFEE00", use: Accent }
logos:
  - { src: /assets/img/mi-proyecto/logo.svg, alt: "Logo, main version", bg: light }
  - { src: /assets/img/mi-proyecto/logo-white.svg, alt: "Logo on dark background", bg: dark }
---
{%- comment -%}
  CUERPO DEL CASO. Cada bloque es una línea: no hace falta escribir HTML.
  Las imágenes se preparan con:  tools/optimize-images.sh <archivo> assets/img/mi-proyecto
  (el script imprime w, h y la línea lista para pegar).
{%- endcomment -%}

{%- comment -%} Con case_layout: c la imagen de cabecera ya la pone el layout (hero_image): no uses case/hero.html. {%- endcomment -%}
{% include case/hero.html src="/assets/img/mi-proyecto/hero.webp" w=2400 h=1350 alt="Describe la imagen" %}

{%- comment -%} Fila de pantallas del mismo formato (lista en el front matter, como screens_before en spin_app.md) {%- endcomment -%}
{% include case/row.html items=page.screens caption="Pie de 1 o 2 frases." %}

<p class="case-hook">Una frase que resume la idea del proyecto.</p>

<section>
  <h2>Context</h2>
  <p>Texto corto.</p>
</section>

{% include case/figure.html src="/assets/img/mi-proyecto/pantalla.webp" w=2400 h=1500 alt="Describe la imagen" caption="Pie de 1 o 2 frases." %}

{% include case/pair.html a="/assets/img/mi-proyecto/a.webp" a_alt="..." a_w=1200 a_h=900 b="/assets/img/mi-proyecto/b.webp" b_alt="..." b_w=1200 b_h=900 %}

{% include case/video.html src="/assets/img/mi-proyecto/flujo.mp4" poster="/assets/img/mi-proyecto/flujo-poster.webp" w=1920 h=1080 label="Qué muestra el vídeo" caption="" %}

{% include case/palette.html colors=page.palette %}

{% include case/type.html family="Poppins" sample="Aa Bb Cc 0123" weights="400, 600, 700" note="Títulos e interfaz" %}

{% include case/logo.html items=page.logos %}

{% include case/quote.html text="Una cita real de un test o de un cliente." by="Nombre, rol" %}

{% capture before %}<p>Cómo era.</p>{% endcapture %}
{% capture after %}<p>Cómo quedó.</p>{% endcapture %}
{% include case/compare.html before_title="Before" before=before after_title="After" after=after %}

{% capture long %}<p>El texto largo va aquí, plegado por defecto.</p>{% endcapture %}
{% include case/detail.html summary="Le détail" summary_lang="fr" content=long %}
