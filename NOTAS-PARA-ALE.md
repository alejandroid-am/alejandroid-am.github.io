# Notas para Ale

Este archivo no se publica: está en `exclude` de `_config.yml` y `/NOTAS-PARA-ALE.md` da 404.
Rama: `mejoras-clientes`. Push solo de esta rama. No he tocado `main`, no hay merge ni force push.
Vista previa: http://127.0.0.1:4000/ (`docker start portfolio-jekyll` si reinicias).
Para deshacer una tarea concreta: `git revert <hash>`.

# Tanda antes de publicar + SEO, 11/11/2026

## Commits (uno por punto)

Antes de publicar:
- `37c9cc4` BEDiZEN: guía en PDF, páginas de logo, construcción y espaciado, tipografía viva, franjas de color y frase nueva.
- `7d935d9` Menciones de IA: À propos (FR/EN) y mentions légales.
- `2c2437f` CV: PDFs antiguos borrados; `cv_pdf_fr` / `cv_pdf_en`.
- `b6f3582` Dirección en las mentions légales (temporal).
- `2825c9c` Formulario: `form_enabled` (false).
- `d557968` Contact sin formulario: la nota de privacidad va debajo del email.

SEO:
- `d36d42c` robots.txt.
- `b535191` Mentions légales fuera del sitemap, con noindex.
- `ae698b5` `<head>`: títulos, descripciones, Open Graph, imagen OG, JSON-LD.
- `cfcb603` Frase factual en la home y en À propos; FAQ en Services.
- `67a0aeb` 404.

## 1. BEDiZEN

- **Carrusel quitado.**
- **Guía en PDF:** el original no estaba en el repo, así que lo he generado yo: `assets/docs/bedizen-charte-graphique.pdf`.
  - 34 páginas en orden, 3,8 MB, sacado de `page1.webp` a `page34.webp` con Pillow.
  - Son 34 y no 32: el carrusel antiguo se saltaba las dos últimas.
  - **Sustitúyelo por tu PDF original** (mismo nombre, o cambia `brand_pdf` en el front matter). Si el peso cambia, ajusta el texto del botón ("3.8 MB").
- **Páginas mostradas:**
  - 11: el logo en tres partes, Beyond / Digital / Zenith;
  - 15: construcción del logotipo;
  - 14: espacio protegido.
  - Pies escritos por mí, en una línea y resumiendo cada página: confírmalos.
  - El bloque de logos con placeholders ya no se muestra (el front matter `logos` sigue ahí).
- **Tipografía viva en Poppins**, con la jerarquía de la página 22:
  - Title (Bold): "Beyond Digital Zenith";
  - Subtitle (SemiBold): el título del vídeo en francés;
  - Text (Medium): la primera frase del caso.
  - Ningún texto es nuevo.
- **Colores en franjas** con nombre y hex de la página 25. El uso (Primaire / Accentuation) sale de la página 26.
- **Frase de cierre (MÁRCALA):**
  - Antes: "On this project I really was full stack, even if it was only once."
  - Ahora: "It was a school project, done with the school's methodology. For version 2 I used Tailwind, with AI help in VS Code. The plugins, the WordPress back office and the theme over FTP I did by hand, with AI where it could step in."
  - No repite que la v1 fue en HTML y CSS ni lo de los tests de usuario, porque el caso ya lo dice justo antes.
- **Verificado:** 1440, 390 y 320 px sin desbordes; sin JS se ve completo; los únicos errores son los de Vimeo, que ya existían.

## 2. Menciones de IA

- À propos: tu párrafo, debajo de la historia (FR en /a-propos/, EN en /en/about/).
- Mentions légales: la frase FR, en "Propriété intellectuelle".
- No hay versión EN de las mentions légales, así que la frase EN no se usa.

## 3. CV

- `git rm` de los dos PDFs. No había ningún enlace a ellos.
- **Ojo:** siguen en el historial de git (con teléfono y dirección). Borrarlos del historial obliga a reescribirlo y hacer force push; no lo he hecho. Dime si lo quieres.
- Botón "Télécharger mon CV" / "Download my CV" en À propos (columna de idiomas), solo si `cv_pdf_fr` / `cv_pdf_en` tienen ruta.
- Ejemplo: `cv_pdf_fr: "/assets/docs/cv-alejandro-amaro-fr.pdf"`.

## 4. Dirección y email

- `address` en `_config.yml`, con un comentario que dice que es temporal hasta cambiar el domicilio.
- Solo se muestra en `/mentions-legales.html`, en texto normal.
- Comprobado en _site: la calle y "67100" solo aparecen en esa página. No hay teléfono.
- **Decisión mía:** las mentions légales tienen ahora `noindex, follow` y salen del sitemap, para que la dirección no aparezca en buscadores. El pie de todas las páginas sigue enlazándolas. Si prefieres que se indexen, borra `robots` y `sitemap` de su front matter.
- **Email:** el único que aparece es ale.amaro.m@proton.me (32 apariciones). Los otros dos son ejemplos de formato del formulario (nom@domaine.fr / name@domain.com) y el copyright de una fuente. Sin diferencias.

## 5. Formulario

- `form_enabled: false` en `_config.yml`. Con false:
  - Contact muestra el email grande con "Copier" y un botón mailto.
  - Un proyecto bloqueado (`?projet=`) rellena el asunto del mailto.
  - Los textos "Écrire via le formulaire" pasan a "Me contacter" (pie, home, Services).
  - En las mentions légales desaparecen el párrafo de Formspree y la línea "Formulaire".
  - No sale ni una mención a Formspree en el HTML generado.
- Con true, todo vuelve como antes.
- **No he enviado nada al endpoint.** El identificador `xqayldza` (en `_includes/contact.html`) puede no ser tuyo. No lo reutilices sin comprobar en tu cuenta de Formspree que te pertenece.

## SEO y visibilidad

1. **robots.txt:**
   - Todo permitido: `*` y, explícitamente, Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot y GPTBot.
   - Antes bloqueaba /tools/ (venía de la primera versión del sitio); ya no.
   - Incluye el comentario para bloquear solo los bots de entrenamiento (GPTBot, ClaudeBot, CCBot, Google-Extended).
   - El sitemap se declara con `site.url` (https://www.alejandro-is.me/sitemap.xml): el dominio real lleva www (CNAME), no https://alejandro-is.me como decía el brief.
2. **Sitemap** (jekyll-sitemap):
   - Fuera: 404, redirecciones, /tools/ y mentions légales.
   - Proyectos bloqueados: no hay ninguno ahora. El layout les pone noindex solo; la plantilla ya recuerda añadir `sitemap: false` (el plugin no puede filtrarlos solo).
   - El PDF de BEDiZEN entra en el sitemap (normal).
   - hreflang FR/EN + x-default hacia FR en todas las páginas bilingües (ya existía, comprobado).
3. **`<head>`:**
   - Títulos de 60 caracteres o menos; las dos homes tienen `seo_title` propio.
   - Descripciones de 155 o menos: he acortado Services y À propos. Todas son únicas.
   - Canonical, lang, Open Graph y Twitter card.
   - **La imagen OG por defecto no existía** (`og-default.webp` daba 404). Nueva: `assets/img/og-default.png`, 1200x630, genérica: "alejandro-is.me / Design web & e-commerce / Strasbourg · PrestaShop · WordPress · FR / EN / ES".
   - Los casos usan su portada.
   - jekyll-seo-tag sigue en el Gemfile, pero el layout escribe sus propias etiquetas (así ya estaba); no lo he activado para no duplicar.
4. **JSON-LD:** un solo script por página, todos validados con `json.loads`.
   - WebSite + Person: nombre, puesto, url, email y LinkedIn en `sameAs`; Instagram entra solo si rellenas `instagram_url`.
   - ProfessionalService en home y Services: areaServed Strasbourg, Alsace y France; ofertas con su precio leído de `_data/offers.yml` (home: las 3 de la home; Services: todas).
   - CreativeWork en los casos.
   - BreadcrumbList en las páginas internas.
   - Sin dirección ni teléfono: he quitado también el `addressLocality` que llevaba Person.
5. **Texto claro:**
   - Home: la frase bajo el H1 es ahora "Alejandro Amaro Mendoza, designer web & e-commerce à Strasbourg. Je travaille pour les petites boutiques en ligne et les PME, sur PrestaShop et WordPress. En français, in English, en español." (y su EN).
   - À propos, bajo el H1: "Je suis Alejandro Amaro Mendoza, designer web et e-commerce à Strasbourg. Je conçois des boutiques en ligne, des sites et des identités visuelles pour les petites boutiques en ligne et les PME." (y su EN). **Revísalas.**
   - Services: FAQ visible con 5 preguntas: precio (la lista se genera desde las ofertas), qué incluye, cómo funciona, plazo de respuesta e idiomas. Sin schema FAQPage.
   - **Falta:** una respuesta sobre el plazo de realización. No existe en la web y no la he inventado (`[[A CONFIRMAR]]` en `services_page.yml`, no visible).
6. **HTML semántico:**
   - Un h1 por página, sin saltos de nivel, con header, nav, main y footer en todas.
   - Todas las imágenes tienen alt, y los enlaces que son solo imagen llevan alt descriptivo.
   - La 404 no tenía h1: ahora sí.
7. **404:** h1 real ("404, page not found"), enlaces a Services, Projects, About, Contact y a las dos homes, y noindex. Revisado: ninguna página importante tiene noindex; lo tienen la 404, las redirecciones y las mentions légales.
8. **llms.txt:** ya existía y no lo he tocado. Ojo: tiene guiones largos y alguna descripción antigua.
9. **Verificación:**
   - Build limpio.
   - Rastreo: 23 páginas y 222 URLs, sin 404 salvo los 2 falsos positivos de audita11y.
   - Greps en _site: `[[A ` 0, "+33" 0, "Lucky" 0, calle solo en mentions légales.
   - robots.txt y sitemap.xml existen.
   - 390 y 1440 px sin desbordes ni errores en las páginas tocadas (con y sin JS).

## Ver el sitio desde el móvil

- El contenedor `portfolio-jekyll` escucha ahora en toda la red local (puerto 4000 abierto en 0.0.0.0).
- Con el móvil en la misma wifi, abre **http://192.168.1.37:4000/**.
- Si no carga, la IP del ordenador puede haber cambiado (`hostname -I`) o el cortafuegos bloquea el puerto (`sudo ufw allow 4000/tcp`).
- En local los enlaces canonical apuntan a 0.0.0.0. Es normal: en producción usan www.alejandro-is.me.

## Checklist para ti (a mano)

- [ ] **Google Search Console:**
  - añadir la propiedad de dominio alejandro-is.me (verificación DNS);
  - enviar `https://www.alejandro-is.me/sitemap.xml`;
  - inspeccionar la home FR y EN.
- [ ] **Bing Webmaster Tools:** importar desde Search Console. Bing alimenta también a ChatGPT Search y Copilot.
- [ ] **Perfiles con el mismo nombre exacto**, "Alejandro Amaro Mendoza", y el mismo puesto: LinkedIn, Malt si vuelves, Behance/Dribbble si los usas, Google Business Profile solo si quieres aparecer en Maps (pide dirección; puedes ocultarla y marcar zona de servicio). Añade la URL del sitio en todos.
- [ ] **Si creas Instagram**, rellena `instagram_url`: entra en `sameAs` y en Contact.
- [ ] **Backlinks reales:** la ficha de la CCI Campus Alsace / promoción, la Global Game Jam (página del juego en globalgamejam.org con enlace), Le Shadok, Somos Arte, el sitio de BEDiZEN apuntando a tu portfolio, y la ficha de WorkPics en Google Play (web del diseñador).
- [ ] **Sustituir el PDF de BEDiZEN** por el original.
- [ ] **Decidir:** si los PDFs del CV se borran también del historial de git.
- [ ] **Decidir:** si las mentions légales se indexan.
- [ ] **Decidir:** la respuesta FAQ sobre plazos.

# Tanda final de casos: limpieza de escritura + maquetación C, 11/11/2026

## Una línea por caso y paso

Paso 1 (limpieza de títulos):
- `a22bc3b` Spin App · `6ca58e3` Keep Breathing · `ecf264d` In-House Tools · `b52e4e0` BEDiZEN · `854ab68` Cinéville.
- WorkPics y Other Works: sin andamiaje, sin commit.

Paso 2 (maquetación C):
- `8871fb4` WorkPics (incluye: lightbox en la maquetación C, que también devuelve a Spin App el lightbox que perdió en `7d9685d`).
- In-House Tools: **no convertido** (ver abajo).
- `a4a7dbb` Keep Breathing · `22b9e1e` Cinéville · `99422ca` BEDiZEN · `1e24e85` Other Works.
- `5b7b4f5` Selección de home (`hide_from_home` en Spin App y WorkPics).

## Paso 1: antes y después

Solo títulos. Ningún párrafo tocado. Para revertir un caso: `git revert <hash>`.

### Spin App (`_projects/spin_app.md`)
| Dónde | Antes | Después | Duda |
|---|---|---|---|
| h3 en "Le détail" | But: I didn't have the data | I didn't have the data | no |
| h3 en "Le détail" + título del bloque Before/After | So: the wheel comes after paying | The wheel comes after paying | no |
| pie y alt de la galería | Streamlined Contacts / streamlined contacts list | (sin cambio) | sí: "streamlined" suena genérico, pero es un pie corto y descriptivo |

### Keep Breathing (`_projects/keepBreathing.md`)
| Dónde | Antes | Después | Duda |
|---|---|---|---|
| h2 | But: big ideas, and everyone had the same ones | Big ideas, and everyone had the same ones | no |
| h2 | So: one carriage and a gas mask | One carriage and a gas mask | no |
| h2 | But: the build wouldn't compile | The build wouldn't compile | no |
| h2 | So: a Figma prototype in 10 minutes | A Figma prototype in 10 minutes | no |
| h2 | Result: Best Technical Achievement | Best Technical Achievement | sí: "Result:" no estaba en tu lista, pero es la misma etiqueta de esquema; el párrafo siguiente repite "Best Technical Achievement." |

### In-House Tools (`_projects/in-house-tools.md`)
| Dónde | Antes | Después | Duda |
|---|---|---|---|
| h2 | But: the posts have to stay consistent when I'm not there | The posts have to stay consistent when I'm not there | no |
| h2 | So: how I work with Claude | How I work with Claude | no |
| h2 | But: what went wrong | What went wrong | no |
| h2 | So: what changed | What changed | no |
| h2 | What I decided: the post generator / What I decided: the contract generator | (sin cambio) | sí: etiqueta con dos puntos, pero informa (no es esquema) |
| h2 | How it was checked: Claude ran the tests | (sin cambio) | sí: mismo caso |
| h2 | And with the time saved | (sin cambio) | sí: empieza por "And", pero suena a persona |

### BEDiZEN (`_projects/bedizen.md`)
| Dónde | Antes | Después | Duda |
|---|---|---|---|
| h2 | But: users couldn't tell what was clickable | Users couldn't tell what was clickable | no |
| h2 | So: a grid that holds the whole site | A grid that holds the whole site | no |
| h2 | But: I had to correct the AI | I had to correct the AI | no |
| cierre | On this project I really was full stack, even if it was only once. | (sin cambio) | sí: es tu texto, pero choca con la regla antigua de no describirte como "full-stack" |

### Cinéville (`_projects/cineville.md`)
| Dónde | Antes | Después | Duda |
|---|---|---|---|
| h2 | So: from the paintings to the cinema | From the paintings to the cinema | no |
| h2 | But: the reel came from AI | The reel came from AI | no |
| h2 | So: the decisions | The decisions | no |

### WorkPics y Other Works
| Archivo | Línea | Antes | Después | Duda |
|---|---|---|---|---|
| workpics.md | párrafo | The lesson: a simple mark that already works can beat a polished exploration. | (sin cambio) | sí: "The lesson:" es una etiqueta, pero no del esquema problema/solución |
| zz_others.md | description | A curated collection of personal experiments, ... | (sin cambio) | sí: "curated" suena a IA; es la descripción (sale en /projets/ y en Google) |

## Paso 2: notas por caso

Común a todos:
- Cabecera: título + resumen, fila de metadatos y luego la imagen.
- Visible: 64 a 89 palabras, todo copiado del texto existente (pies de imagen incluidos, la mayoría eran ya `data-caption` o `figcaption`).
- Resto: íntegro en "Le détail", cerrado.
- Lightbox en todas las imágenes del cuerpo.
- Front matter anterior intacto (solo añadidos + `last_modified_at`).
- `-960w` generados con `tools/optimize-images.sh` (copiando solo las variantes).

- **WorkPics:**
  - Paleta real del caso (4 colores con su función como nombre).
  - Logo final + variantes sobre oscuro y claro.
  - Botón del prototipo Figma.
  - Placeholders: tipografía y vídeo en bucle.
  - Campos míos: `project_type: Logo and app screens` (de la descripción) y `result: WorkPics is published on Google Play.` (frase del caso).
- **In-House Tools, no convertido:**
  - Unas 1.400 palabras y solo 3 imágenes distintas.
  - Lo que vende el caso (decisiones, cifras, qué cambió) es texto. En C quedaría todo en "Le détail" detrás de 3 capturas: lo empeora.
  - Sigue con el estilo antiguo; solo tiene la limpieza del paso 1.
- **Keep Breathing:**
  - Pantallas del juego y fotos del equipo y del jurado; botón del prototipo Figma.
  - La fila de metadatos muestra también Team (ahora el layout C enseña `context`, `team` y `award` si existen).
  - Placeholders: paleta, tipografía, logo del título, vídeo de juego.
  - Campos míos: `project_type: Survival FPS, game jam`, y el alt de la captura de juego (antes no se usaba esa imagen).
- **Cinéville:**
  - El título "CinéVille" sobre el azul noche del festival como cabecera; así se mantiene el `preload_image` existente.
  - Paleta y tipografía reales, sacadas de la diapositiva 8 y de la 7 del deck.
  - Carrusel de 19 diapositivas conservado (sin JS se ven todas).
  - Se pierde la animación de estrellas de la cabecera antigua (era CSS de `style.css`).
  - Campos míos: `project_type: Festival poster`, y el pie "Typography: Neworn Uniquen for the title and DM Sans for the text." (reformulado del alt de la diapositiva).
- **BEDiZEN:**
  - Logo blanco sobre Horizon Noir como cabecera.
  - Version 1 / Version 2 con el include compare; los dos vídeos de Vimeo, tal cual.
  - Paleta real (nombres y hex de la página 25 de la guía); Poppins real (páginas 20-21), con muestra en Poppins alojada.
  - Carrusel de la guía (32 páginas, ahora con srcset).
  - Placeholders: logo sobre claro e icono.
  - Campo mío: `project_type: Brand and website`.
  - **Aviso:** los alt de las páginas del carrusel no corresponden a lo que muestran (ej. "logo specifications" es un texto de presentación). Ya estaba así; no lo he tocado. Conviene reescribirlos mirando cada página.
- **Other Works:**
  - Solo galería: la descripción como resumen y los pies existentes.
  - Sin "Le détail" (no hay más texto) y sin bloques de paleta / tipografía / logo / vídeo (no tienen sentido en piezas sueltas).
  - No tiene `year` ni `home_order`; su "Next project" lleva al primero.

## Assets que faltan por proyecto

- **Spin App:** vídeo en bucle (mp4 sin audio, 6 a 10 s, 1920x1080, menos de 3 MB) + póster; logo monocromo; icono de la app 1024x1024; nombre y pesos de la tipografía; hex reales de la paleta (los actuales están muestreados).
- **WorkPics:** vídeo en bucle del flujo "Open → Shoot → Done" + póster; nombre de la tipografía de la app.
- **Keep Breathing:** vídeo en bucle de juego (6 a 10 s) + póster; logo del título del juego como archivo aparte (PNG transparente o SVG); paleta (hex) y tipografía del juego.
- **Cinéville:** vídeo en bucle (opcional, por ejemplo el póster con el carrete moviéndose); nada más imprescindible.
- **BEDiZEN:** logo oscuro sobre claro (SVG); icono suelto (SVG); alt correctos para las 32 páginas de la guía.
- **Other Works:** año(s) de las piezas si quieres que salga en la fila de metadatos.
- **In-House Tools:** si un día quieres convertirlo, 3 o 4 capturas más (por ejemplo el generador de contratos entero, el botón de pánico, una plantilla en los 3 formatos).

## Home: qué mostrar

- **Recomiendo** (y ya está aplicado, `5b7b4f5`): In-House Tools, Keep Breathing, BEDiZEN, Cinéville. Son los más completos y con material real.
  - In-House Tools es el más útil para tiendas online.
  - Cinéville y BEDiZEN, los que mejor han quedado en C (paleta, tipografía y carrusel reales).
  - Keep Breathing tiene premio y fotos.
- **Ocultos de la home** con `hide_from_home: true` (siguen en /projets/):
  - Spin App: muchos placeholders, nunca se construyó.
  - WorkPics: colaboración informal, con placeholders.
- Para revertir, borra la línea `hide_from_home` en cada archivo.
- **Aviso:** BEDiZEN en la home choca con la regla antigua de no usar "BEDiZEN" en contenido nuevo. Si sigue vigente, ponle también `hide_from_home: true` y entra WorkPics o Spin App.

## Verificación

- Build limpio (solo "Empty slug"). 0 `[[A `; 0 guiones largos en los casos.
- Rastreo: 23 páginas y 279 URLs. Sin 404 salvo los 2 falsos positivos conocidos del JS de audita11y.
- Los 6 casos convertidos, a 1440, 390 y 320 px:
  - sin desbordamiento, sin imágenes rotas, sin saltos de nivel en los títulos;
  - lightbox funcionando;
  - completos sin JS.
- Consola sin errores, salvo los 401 de Vimeo en BEDiZEN (ya existían).
- Carruseles de Cinéville y BEDiZEN probados (botones y lightbox). In-House Tools responde igual que antes.

# Spin App en la maquetación C, 11/11/2026

Un solo commit (hash en el mensaje de entrega; `git log --oneline -1 -- _projects/spin_app.md`). Ningún otro caso convertido.

## Qué cambió

- `_projects/spin_app.md`: misma URL `/projects/spin_app/`, mismos campos de antes; se añaden `case_layout: c`, `summary`, `project_type`, `hero_*`, `preload_*`, `screens_before`, `screens_after`, `palette`, `logos`.
- Orden de cabecera: título + frase de resumen, fila de metadatos (Role, Year, Type, Tools, Result) y DESPUÉS la imagen de cabecera.
- Visible: unas 81 palabras, todas copiadas del texto actual (resumen = el antiguo "hook"; pies = frases del caso). El texto completo va íntegro y en su orden en "Le détail", cerrado por defecto, con todas las imágenes de antes (logos, paletas, UI antes/después, galería, vídeo promo).
- Before / After: include `compare` con título "So: the wheel comes after paying" (h2), "Before" / "After" (h3) y las etiquetas "Spin, then pay" / "Pay, then spin".
- Lo barato: el badge "Pay, then spin" ahora es amarillo sobre negro (15:1; el antiguo `.badge.new` ya no se usa en esta página); los títulos van h1 > h2 > h3 > h4 sin saltos; a 320 px no se sale nada (logo antiguo incluido, ahora dentro de un par que se apila).
- El caso ya no carga `style.css` ni Poppins (solo `site.css`), así que se ve en claro como el resto del sitio. Los otros 6 casos siguen igual (`case_layout` ausente = estilo antiguo).
- Includes (aditivos): nuevo `case/row.html` (fila de pantallas); `type` y `logo` aceptan placeholder; `compare` acepta `title` y etiquetas; `detail` acepta `summary_lang`; el JSON-LD de los casos pasa a `case/jsonld.html` (misma salida).
- `-960w` generados con `tools/optimize-images.sh` para old_spin_app1-3 y new_spin-ui1-3 (copié solo las variantes; los originales no se recomprimieron). `iphone-mockup.webp` mide 500 px: no necesita variante.
- `project_type: Mobile app redesign` lo escribí yo a partir de la descripción: revísalo.

## Assets que faltan para esta maqueta (exactamente)

1. Vídeo corto en bucle: mp4 H.264 sin audio, 6 a 10 s, 1920x1080 (16:9), menos de 3 MB, el flujo "Top Up → Payment confirmed → Spin the Wheel". Más su póster: un fotograma en .webp a 1920x1080. Nombres sugeridos: `assets/img/Spin_app/flow-loop.mp4` y `flow-loop-poster.webp`. Hoy hay un placeholder rayado.
2. Logo en una tinta (monocromo), en SVG o PNG transparente. Placeholder "One-colour version to come".
3. Icono de la app (el cuadrado de la tienda), 1024x1024. Placeholder "App icon to come".
4. Nombre de la tipografía de la app y pesos usados (y el archivo .woff2 si su licencia permite alojarlo). Placeholder "Typeface to come".
5. Hex reales de la paleta: los 5 que hay (#FED06A, #4C91E1, #FF696C, #5BB75A, #582B76) están muestreados de las imágenes y los nombres (Yellow, Blue...) son míos. Confírmalos en el front matter.
6. Opcional: una imagen de cabecera pensada para esta maqueta (horizontal, 2400x1350). Ahora uso el mosaico de pantallas (4549x3475), que se recorta a 86 % de la altura de pantalla.

## Verificación

Build limpio (solo "Empty slug" de siempre). 0 enlaces internos rotos (salvo los 2 falsos positivos conocidos dentro del JS de audita11y). Spin App a 1440, 390 y 320 px: sin desbordamiento y sin errores de consola. Sin JS se ve completo ("Le détail" se abre con el `<details>` nativo). Las 12 imágenes de "Le détail" cargan al abrirlo. Los otros 6 casos responden y no cambian.

# Implementación de la propuesta C, 11/11/2026

## Una línea por bloque

- `320911d` Bloque 1: arquitectura (Services, Projets, À propos, Contact como páginas reales FR y /en/), cabecera y pie comunes, selector FR / EN con línea y descifrado, view transitions 200 ms, redirecciones (/cv/, /portfolio.html, /about.html, /contact.html), fuente Bricolage Grotesque alojada (OFL). Quitados: barra de estado, hora de Strasbourg, "1 projet à la fois", listón de palabras, hueco 3D, cursor propio, botón "volver arriba", barra CTA móvil.
- `dbc4b73` Bloque 2: home breve (H1 con palabra intercambiable, una escena con frase que se enciende, 3 ofertas, carril de 4 proyectos + tarjeta "Voir tous les projets", contacto).
- `d459b03` Bloque 3: Services en filas con "Inclus" desplegable, proceso una sola vez (`#process`), "dès X €" + "précisé dans le devis", fila recomendada en amarillo.
- `d25c50f` Bloque 4: À propos con la trayectoria del CV (línea que se dibuja con el scroll, años grandes, entradas que se iluminan), idiomas y habilidades.
- `0663f6b` Bloque 5: página Projets y componente de proyecto bloqueado.
- `a3a8233` Bloque 6: firma manuscrita (Mrs Saint Delafield, OFL, alojada; revelado izquierda a derecha una vez).
- `0cbb66a` Parte 2: `_includes/case/`, `tools/optimize-images.sh`, `_plantillas/proyecto.md`.
- `dd2e199` Parte 3: `_propuestas/casos.html` (3 maquetaciones con Spin App).

## Añadir un proyecto (10 líneas)

1. Crea `assets/img/<proyecto>/` (minúsculas, sin espacios).
2. Por cada imagen: `tools/optimize-images.sh ruta/imagen.png assets/img/<proyecto>`.
3. El script crea `.webp` (máx. 2400 px) y `-960w.webp`, e imprime ancho, alto y la línea para pegar.
4. Copia `_plantillas/proyecto.md` a `_projects/<proyecto>.md`.
5. Rellena el front matter: título, descripción, rol, año, herramientas, resultado, `cover_image`.
6. Para que salga en el carril de la home: `home_order: N` (1 = primero). `hide_from_home: true` lo quita.
7. Escribe el cuerpo con los bloques `{% include case/... %}` (cada uno está comentado en la plantilla).
8. Proyecto bajo NDA: `locked: true`, `sitemap: false`, cuerpo vacío, nada privado en el repo.
9. Mira http://127.0.0.1:4000/projets/ y la home: aparece solo, sin tocar otros archivos.
10. Commit en la rama, revisa, y solo entonces merge.

## Cómo presenta Steven Hanley sus proyectos (entré en Saronic y 7-Eleven)

- Cabecera tipo ficha: dos celdas con borde fino, CLIENT y ROLE, en mono pequeña y mayúsculas; luego SUMMARY.
- Un único párrafo de resumen grande (32 px), en tercera persona, antes de cualquier imagen.
- Después, casi todo es imagen: 7 a 9 bloques a todo el ancho de la columna, sin columnas de texto.
- Texto mínimo entre imágenes: una frase de 14 px, como pie, que explica el siguiente grupo.
- Vídeos cortos en bucle (autoplay, muted, loop) del mismo ancho que las imágenes; sin controles.
- Sistema visual mostrado como piezas propias: paleta en franjas con nombres, muestra tipográfica grande con texto que la describe.
- Fondo de cada imagen trabajado (gris claro, color de marca), nunca la captura "suelta".
- Sin capítulos ni "problema / solución"; el proceso no se cuenta, se enseña.
- Al final, la lista "SELECTED WORK" con los otros proyectos como navegación siguiente.
- Lo que no hay que copiar: su retícula de celdas con bordes, la tipografía mono de etiquetas y el reloj de cabecera.

## Cómo abrir `_propuestas/casos.html`

Doble clic en el archivo (se abre en el navegador; todas las rutas son relativas). Arriba: botones A / B / C y un recuadro de 3 líneas con pros, contras y para qué casos sirve. No está en el servidor de vista previa (no se publica): ábrelo siempre desde el archivo.

## Assets que faltan para Spin App, por maquetación

- Todas: vídeo corto en bucle (6 a 10 s, mp4 sin audio, 1920x1080, menos de 3 MB) + póster .webp; logo monocromo; icono de la app; nombre y pesos de la tipografía de la app; valores hex reales de la paleta (los que puse están muestreados de las imágenes, aproximados).
- A (Capítulos): 4 imágenes a sangre, una por capítulo, en formato apaisado ancho (2400x1350); falta una para "Problem" (por ejemplo, la pantalla de la ruleta con la calavera) y otra para "Result" (foto o captura del test con el prototipo).
- B (Texto fijo y galería): 6 a 8 imágenes del mismo formato (mejor todas 4:3 o todas 16:10); ahora mezclan 16:9, 4:3 y 1,33.
- C (Galería con pies): una imagen de cabecera pensada para recortarse a lo ancho (hoy uso el mosaico de pantallas) y una secuencia antes / después pantalla por pantalla (old_spin_app1-3 y new_spin-ui1-3 ya existen, pero sin -960w).

## Verificación

- Build limpio (solo el aviso de siempre "Empty slug"). `grep "[[A "` en `_site`: 0. Sin guiones largos en el HTML generado.
- Rastreo de enlaces internos desde / y /en/: 23 páginas, 212 URLs, 0 enlaces rotos. (Dos falsos positivos dentro del JS minificado de `tools/audita11y/`, que no he tocado.)
- 390 y 1440 px: sin desbordamiento horizontal en las 20 páginas revisadas; sin errores de consola salvo en BEDiZEN, que vienen del vídeo de Vimeo incrustado (401 en el navegador de pruebas, ya estaba así).
- Las 7 URLs de casos responden y se ven con la cabecera nueva: /projects/in-house-tools/, /projects/keepBreathing/, /projects/bedizen/, /projects/spin_app/, /projects/workpics/, /projects/cineville/, /projects/zz_others/.
- Probado en navegador: palabra del H1 (hover, clic, botón), copiar email, carril fijado, escena, línea de tiempo, firma, FR / EN con descifrado de salida y de entrada, detalles de Services abiertos por ancla, proyecto bloqueado (con un archivo temporal, borrado antes del commit): el cuerpo no se publica y el formulario llega con el asunto escrito.

## Lo que no hice o dejé a medias

- No convertí ningún caso a los nuevos bloques (esperando tu elección A / B / C).
- Métricas de la fuente de reserva de Bricolage (`size-adjust`, `ascent`) estimadas, no medidas: si ves un salto al cargar, avísame.
- `style.css` aún tiene CSS muerto de la home y del CV antiguos (solo se carga en los casos); limpiarlo es otra tanda.
- La firma es texto con fuente; está preparada para cambiarla por un SVG trazado (comentario en `_includes/signature.html`).
- El selector FR / EN solo aparece en páginas bilingües (los casos están solo en inglés).
- BEDiZEN sigue en el carril de la home porque su `home_order: 3` ya existía; no he escrito "BEDiZEN" en contenido nuevo. Si no lo quieres en la home: `hide_from_home: true`.
- `llms.txt` conserva guiones largos en líneas antiguas que no toqué.

## Textos en borrador (escritos por mí, revísalos)

- Escena de la home (FR/EN): "Une boutique peut être belle et perdre ses ventes entre la fiche produit, le panier et la commande."
- Frase de À propos (EN): "I learned resilience in Cuba, business strategy in Chile, and adaptability in France."
- Pie: "Un projet, une question ?" / "A project, a question?"; "Écrire via le formulaire" / "Write through the form".
- Pista y botón del H1: "Survolez ou cliquez le dernier mot." / "Autre combinaison" (y EN).
- Botón "Parcours et compétences", etiqueta "Le point de départ", títulos de las entradas de la trayectoria.
- Meta descriptions nuevas de Projets, À propos y Contact (FR y EN).
- La historia de À propos son tus 4 párrafos tal cual: sigue pendiente reescribirla.

# Fase 0, 11/11/2026: análisis y 3 propuestas de estilo

No he tocado el sitio real. Solo existe la carpeta nueva `_propuestas/`, que Jekyll ignora por empezar con guion bajo, así que no se publica. También he actualizado este archivo.

## Cómo abrir las propuestas

- **Doble clic** en `_propuestas/index.html`, o en el navegador: `file:///home/ale/PROJECTS/Portfolio-Web/alejandroid-am.github.io/_propuestas/index.html`.
- No hay ruta en http://127.0.0.1:4000/, porque Jekyll no sirve carpetas con guion bajo.
- La barra gris de arriba cambia entre **A · Índice**, **B · Bloques** y **C · Relato**. También puedes añadir `#A`, `#B` o `#C` al final de la URL.
- Debajo de cada propuesta hay un recuadro con 3 líneas de pros y contras.
- Las fuentes se cargan de Google Fonts por `<link>`, como permitía el brief; sin conexión se ven las de reserva. Las imágenes vienen del repo con rutas relativas (`../assets/img/...`) y los enlaces de los casos apuntan a alejandro-is.me.
- Los textos salen de `_data/*.yml` mediante `_propuestas/generar.py`. Si cambias un texto, `python3 _propuestas/generar.py` vuelve a generar el HTML. El CSS está en `estilos.css` y el JS en `script.js`; el generador los mete inline, así que `index.html` no depende de ellos.

## Análisis de las referencias

Abrí cada web con Chromium (Playwright) a 1440 px, medí los estilos calculados e hice capturas a varias alturas de scroll.

**steven-hanley.com**
- **Estructura:** una sola pantalla de índice: cabecera, «Selected work [05]» con 7 filas y «More» con About y Contact como filas. No hay páginas largas.
- **Tipografía:** JetBrains Mono a 12 px / 16 px, todo en mayúsculas y sin tracking extra. Geist aparece solo en algún detalle, a 16 px.
- **Filetes:** 1 px negro. Dos verticales enmarcan la columna de contenido (a unos 28 px del borde izquierdo y a unos 105 px del derecho, a 1440 px) y los horizontales cruzan todo el ancho, por fuera del marco.
- **Ritmo:** filas de 40 px y grandes huecos vacíos entre bloques, unos 100 px.
- **Hover:** la fila entera se rellena de un color plano distinto para cada proyecto (verde ácido, naranja, rojo, cian), el texto se subraya y el cambio es instantáneo.
- **Detalles:** contador «[05]», icono pequeño a la izquierda de cada fila, «Click to copy» en el email, hora local, estado de disponibilidad con punto naranja y un interruptor de sonido. Usa GSAP, ScrambleText, Lenis y Howler.

**vemvem.com** (tienda Shopify)
- **Tipografía:** una sola familia, Instrument Sans 500 en mayúsculas, con tracking muy negativo en los titulares (-0,05 em). La escala medida es 86, 69, 44, 28 y 18 px, con interlineado igual al cuerpo (1,0).
- **Filetes:** 3 px negros por todas partes: retícula, listas de producto y bordes de sección.
- **Color:** papel #F2F2EB, negro y un rojo #E6260D en bloques planos (cabecera y listón).
- **Ritmo:** cabecera fija con el bloque de color, titular centrado enorme y un listón en movimiento con una sola frase repetida («Travels worldwide, quietly.»). Después fotos a sangre de unos 900 px de alto, citas en dos columnas 50/50 y listas tipo tabla (título y precio) con filetes de 3 px.
- **Carácter:** ruidosa y editorial, con pocas palabras y muy grandes.

**manychat.com/report**
- **No se pudo analizar:** Cloudflare devuelve «Performing security verification» al navegador automatizado. Lo dejo anotado y no he intentado saltarlo.

**convodesign101.xyz** (Framer)
- **Tipografía:** Apfel Grotezk 700, titulares de 180 px con interlineado 0,78 y en minúsculas. La escala medida es 180, 160, 100, 80, 40, 16 y 12 px.
- **Color:** fondo cian plano #2CBDDA con nubes en 3D suave y texto negro.
- **Scroll:** el relato avanza con el scroll en «olas» históricas (rigid logic, ...). Hay columnas separadas por filetes punteados verticales, varias capas sticky y objetos tipo sello o tarjeta.
- **Recurso clave:** párrafos grandes cuyo texto pasa de gris claro a negro conforme haces scroll, frase a frase, y frases sueltas a pantalla completa («The new era is about...»). Mezcla una narración en orden cronológico con escenas.

**nebulight.fr** (Jonas Woehrel)
- **Estructura medida:**
  1. hero con titular de 79 px Inter 900 y vídeo vertical en bucle;
  2. presentación del estudio;
  3. «derniers projets» con 4 proyectos sobre una órbita de líneas de colores y 2 vídeos;
  4. servicios en un escenario sticky de unos 4300 px, donde cada palabra grande (Vidéo, Webdesign...) ocupa la escena con un vídeo de fondo;
  5. trayectoria de 6 pasos en tarjetas apiladas sticky;
  6. CTA final y pie.
- **Tipografía:** Inter, titulares 900 de 64 a 88 px y cuerpo 200 (muy fino) en blanco al 55 %. Fondo negro puro y brillos de color.
- **Por qué se percibe cualitativo:**
  - el vídeo propio en el hero y dentro de los servicios demuestra el oficio sin explicarlo;
  - el orden del relato va de quién soy a qué he hecho, qué hago y cómo trabajo, y termina con una invitación;
  - en cada paso del proceso repite la fórmula «Ce qui vous rassure : ...», que responde a la objeción del cliente justo donde aparece;
  - los textos son cortos y sin jerga, y hay un único interlocutor.
- **Elementos distintivos que NO debes replicar:**
  - la metáfora espacial: estrella, despegue, «trajectoire», «décoller», órbitas, brillos solares y «met les autres en lumière»;
  - la fórmula «Ce qui vous rassure :» en cada paso;
  - el título «La trajectoire de votre projet» y la estructura exacta de 6 pasos (premier rendez-vous, cadrage et devis, moodboard, production, retours, livraison et suivi);
  - el escenario sticky de servicios con una palabra gigante por escena sobre vídeo;
  - la órbita de proyectos con líneas de colores;
  - el hero «Vidéo, webdesign, identité, graphisme ... vous fait décoller !»;
  - el CTA «N'attendez pas, lancez-vous dans l'aventure !»;
  - el negro puro con brillos degradados;
  - el menú en píldora y el botón de volver arriba fijo.
- **Coincidencias que ya tenías antes de hoy:** tus 4 pasos de proceso coinciden en espíritu, porque cualquier freelance tiene un primer contacto, un devis, la realización y la entrega. Esos textos ya existían en el sitio. En las propuestas aparecen una sola vez y con tus palabras, sin títulos ni fórmulas de Nebulight.

## Las 3 propuestas

Las tres respetan lo que ya decidiste:
- selector «FR / EN» sin banderas, con FR marcado y EN como enlace;
- sin hora, sin «1 projet à la fois», sin listón de palabras sueltas y sin 3D;
- email con botón Copier;
- ofertas en filas, con el proceso una sola vez;
- Revue UX con precio cerrado y las demás con «dès X €» y «précisé dans le devis»;
- la oferta recomendada como fila invertida en amarillo;
- About con la trayectoria del CV (2009, 2019, RNCP 2024–2026, Global Game Jam 2026), idiomas y habilidades, sin «postes recherchés» ni búsqueda de empleo;
- sin degradados, blobs, iconos genéricos ni emojis.

**A · Índice de precisión**
- **Fondo y marco:** fondo #0E0E0D con un marco de filetes verticales finos.
- **Tipografía:** IBM Plex Mono a 12,5 px en mayúsculas; el titular y los textos largos van en IBM Plex Sans light.
- **Filas:** todo son filas con la misma retícula: ofertas, proyectos, proceso, trayectoria, habilidades y contacto.
- **Interacción:** el amarillo solo aparece en el hover, el foco y la oferta recomendada. Las ofertas se despliegan (`<details>`) para ver «Inclus». En escritorio, al pasar por un proyecto aparece una vista previa grande (unos 640 px); en móvil, una miniatura en la fila.

**B · Bloques gruesos**
- **Tipografía:** titulares en Anton (condensada, mayúsculas) a hasta 204 px; cuerpo en Archivo.
- **Color y filetes:** papel #EFEBDD, negro y bloques amarillos planos. Filetes de 6 px negros y de 10 px amarillos en la sección de ofertas, que es negra.
- **Listón:** una sola frase tuya («Votre boutique en ligne, belle, à jour et qui vend.») con botón Pause, quieta con reduced-motion.
- **Imágenes:** foto a sangre de la Game Jam.
- **50/50:** los proyectos van en 50/50 con una raya vertical de 10 px y la imagen ocupando media pantalla, alternando el lado. El About también va en 50/50.

**C · Relato en scroll**
- **Fondo y tipografía:** fondo #F2F0EA y Bricolage Grotesque; titular de hasta 136 px que entra por frases.
- **Escenas:** dos escenas con una frase fijada que se enciende palabra a palabra con el scroll: «Le point de départ» y «Ce que je regarde». Después vienen el proceso (también se enciende) y el carril horizontal.
- **Carril:** sticky + translateX con imágenes de hasta 1180 × 760 px. En móvil, con reduced-motion o sin JS es un carril nativo con scroll-snap.
- **Ofertas y cierre:** ofertas en filas finas y About con una frase grande y la línea de tiempo en 4 columnas.

**Decisiones mías que conviene que revises:**
- Las frases de las escenas de C son mías, escritas a partir de las ofertas («Une boutique peut être belle et perdre ses ventes entre la fiche produit, le panier et la commande.» y «Je passe en revue ces trois pages...»). Y «I learned resilience in Cuba, business strategy in Chile, and adaptability in France.» es un resumen de tu About. Reescríbelas a tu gusto.
- BEDiZEN no aparece en ningún carril, por la regla de no usar ese nombre en contenido nuevo. Los proyectos son In-House Tools, Keep Breathing, Spin App, WorkPics y Cinéville.
- La trayectoria pone «Début du métier de designer» para 2009. El CV solo dice «17 ans de métier, depuis 2009»; si tu oficio en 2009 tenía otro nombre, cámbialo.
- El título aparece como «Titre professionnel RNCP Concepteur designer UI, niveau 6», como pediste.
- El relato del About sigue en inglés con `lang="en"` y los datos de la trayectoria van en francés.
- El formulario de las maquetas no envía nada (`onsubmit="return false"`) y lo indica.
- La foto a sangre de B es `jury-presentation.webp` (Keep Breathing). Se ven personas del equipo y del jurado: si vas a usar B, confirma que puedes mostrarla tan grande.

**Comprobado:**
- sin errores de consola;
- sin desborde horizontal a 390 y 1440 px en las tres propuestas;
- 0 guiones largos en el HTML;
- se puede recorrer con teclado;
- reduced-motion: sin entrada de C, el listón de B en pausa y el carril de C nativo con las palabras ya encendidas.

**Siguiente paso:** elige A, B o C (o una mezcla concreta, por ejemplo «B con las ofertas de A»). No empiezo a tocar el sitio real hasta que me lo digas.

# Sesión de cierre, 10/11/2026

## Una línea por tarea y etapa

| # | Tarea | Commit |
|---|---|---|
| A1 | SIRET 108 337 783 00014 (y SIREN) en las mentions légales, email y formulario enlazados, sin dirección ni marcadores | `6b97deb` |
| A2 | Hover del H1: A (sin `role="text"`), C (hover solo con ratón vía `pointerenter`, clic para todo) y E (retardo de 120 ms) | `57513c7` |
| A3a | Cinéville: borradores en `minmax(0, 1fr)` solo en móvil; preload de la portada, width/height, lazy y srcset en Cinéville e In-House Tools | `e92c545` |
| A3b | Poppins alojada en el sitio (latin + latin-ext, licencia OFL incluida), precarga de 400 y 700 y fuente de reserva con métricas ajustadas | `a494989` |
| A3c | Mismo tratamiento de imágenes en Keep Breathing y Spin App | `42118f5` |
| B4+B5 | Ofertas: Projet primero y Récurrent al final; en la home, Revue UX, Refonte UX y Site vitrine; precios «dès»; un solo CTA; «Pour qui» y «Non inclus» solo con `validated: true` | `d31e5da` |
| C1 | Etapa 1: barra de estado (hora de Strasbourg, 1 projet à la fois, email con botón Copier), hueco para el render 3D y entrada escalonada | `1e68f97` |
| C2 | Etapa 2: ofertas en filas (número, nombre, promesa, precio, un enlace que cubre la fila) con filetes amarillos gruesos | `3842fe4` |
| C3 | Etapa 3: carril horizontal de proyectos, con la tarjeta final «Voir tous les projets» | `144d100` |
| C4 | Etapa 4: listón de texto con botón de pausa, «Comment ça se passe» en capítulos que se iluminan y revelados que nunca ocultan contenido sin JS | `1a4d848` |
| fix | Barra de estado sin desbordar a 320 px | `6209700` |

⚠️ Hubo un error mío en `d31e5da`: dejé Revue UX en `validated: true` por una prueba mal revertida, así que su «Pour qui» y «Non inclus» se veían. Lo detecté y lo corregí en `3842fe4`; todas las ofertas vuelven a estar en `validated: false`. Ese estado intermedio nunca llegó a `main`.

## Lighthouse móvil (local, final)

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| `/` | 99 | 100 | 100 | 100 | 1,8 s | 0 |
| `/en/` | 98 | 100 | 100 | 100 | 2,0 s | 0 |
| `/services/` | 99 | 100 | 100 | 100 | 1,8 s | 0 |
| `/cv/` | 98 | 100 | 100 | 100 | 2,1 s | 0 |
| Cinéville (antes 91, LCP 3,4 s) | 98 | 100 | 100 | 100 | 2,3 s | 0 |
| In-House Tools (antes 90, LCP 3,2 s, CLS 0,018) | 99 | 100 | 100 | 100 | 2,1 s | 0 |
| Keep Breathing (antes 91, LCP 3,5 s) | 99 | 100 | 100 | 100 | 2,1 s | 0 |
| Spin App | 98 | **94** | 100 | 100 | 2,2 s | 0 |

- **INP:** no se puede medir en laboratorio. El TBT es de 0 a 30 ms y todas las interacciones nuevas son triviales (clase CSS o portapapeles), así que no hay riesgo de pasar de 200 ms.
- **Spin App, accesibilidad 94:** el problema ya existía y está dentro del contenido del caso (contraste del badge `.badge.new` y un `<h4>` que se salta un nivel). No lo toqué porque el caso es intocable. Arreglarlo son dos cambios de CSS o HTML, pero necesito tu OK.

## Verificación

- Build de Jekyll sin errores. Solo aparece el aviso `Empty slug`, que ya salía antes.
- `grep "[[A "` en `_site` = **0**. En el código quedan marcadores solo en comentarios: Cal.com, Instagram, CGV/RC Pro y `show_dev_note`.
- 210 URLs internas distintas comprobadas (enlaces, imágenes y srcset), 0 rotas.
- Sin guiones largos (—) en el texto añadido hoy.
- Sin desbordes a 320, 360, 390, 768 y 1440 px en 13 páginas, salvo uno que ya existía en Spin App a 320 px: el logo `old-spin_logo.webp` del bento se sale unos 4 px. Comprobé que no lo causan mis cambios.
- Escritorio de los 7 casos de estudio a 1440 px: idéntico píxel a píxel a como estaba antes de hoy. Las únicas diferencias son la animación del indicador de scroll.
- Teclado: recorrido completo en 9 páginas, en escritorio y en móvil, sin trampas. El test marcaba «sin foco visible» en las filas de ofertas, pero es un falso positivo: el contorno se dibuja en toda la fila y lo comprobé en captura.
- reduced-motion: no hay entrada del hero, el listón está quieto y sin botón, el carril es nativo y los capítulos no se atenúan.
- Sin JS, y también con `main.js` bloqueado: todo el contenido es visible. Antes, si `main.js` fallaba, las secciones con revelado se quedaban invisibles; eso está corregido.
- Sin errores de consola.
- No envié nada a Formspree, no hay dirección postal y los PDFs del CV siguen sin enlazar.

## Lo que no hice o dejé bloqueado

- **Spin App:** el 94 de accesibilidad y el logo que se sale a 320 px. Ambos ya existían; necesito tu permiso para tocar el caso.
- **Render 3D:** el hueco está listo (`<div class="hero-media" data-slot="hero-3d">` en `_includes/home.html`). Mete dentro un `<img>` con width/height o un `<video muted loop playsinline poster=...>`. Si es vídeo, en móvil y con reduced-motion habrá que mostrar solo el póster; eso lo hago cuando lo tengas.
- **No he revertido ninguna etapa:** todas cumplen el presupuesto.

## Decisiones que tomé yo (y cómo revertirlas)

1. **SIREN:** muestro «SIRET : 108 337 783 00014 (SIREN 108 337 783)». Para quitar el SIREN, edita la línea 16 de `mentions-legales.html`.
2. **Dirección vacía:** cambié el comentario de `address` en `_config.yml` a «vacía a propósito». ⚠️ Ojo: la LCEN suele exigir una dirección (vale una domiciliación). Es decisión tuya, solo te aviso.
3. **Fuentes:** las sirvo desde el sitio y cambié en las mentions légales la frase de Google Fonts por «hébergées sur ce site, aucune donnée n'est transmise à un service tiers». Revertir: `git revert a494989`. Ojo, eso también recupera la frase antigua.
4. **Lightbox:** abre siempre el original a tamaño completo (`img.src`), aunque el navegador haya cargado una variante pequeña.
5. **Optimicé también Keep Breathing y Spin App,** no solo los dos casos que pediste, porque Keep Breathing estaba en 3,5 s. Revertir: `git revert 42118f5`.
6. **Orden de /services/:** Projet, Agences y Récurrent. Entendí «Projet primero, Récurrent al final». Si prefieres Agences al final, mueve el bloque en `_includes/services.html`.
7. **Promesas de una línea:** acorté los `short` de 4 ofertas usando solo palabras que ya estaban, sin datos nuevos. Ejemplo: «Fiche produit, panier et checkout repensés, à prix fixe.» Revisa `_data/offers.yml`.
8. **Validación de borradores:** un solo `validated` por oferta, que muestra a la vez «Pour qui» y «Non inclus». Si quieres validarlos por separado, lo divido.
9. **Barra de estado en móvil:** solo hora y disponibilidad. El email se oculta por debajo de 768 px para que «Voir les offres» siga en el primer pantallazo a 360×780; está en la sección de contacto y en el pie. La frase «1 projet à la fois» bajo los botones desapareció porque ya está en la barra.
10. **Carril:** muestra todos los proyectos con `home_order` (hoy 6), sin el límite de 6 de antes. El modo fijo con desplazamiento lateral solo se activa a partir de 1024 px y con movimiento permitido. Para volver a la rejilla: `git revert 144d100`.
11. **Listón:** «Revue UX · Refonte UX · Site vitrine · PrestaShop · WordPress · Strasbourg · Français · English · Español», con datos que ya están en la web. Con JS se desplaza y tiene botón Pause/Reprendre, y se para al pasar el ratón o al enfocar. Los textos están en `ribbon` de `_data/home.yml`.
12. **Capítulos:** en escritorio van desplazados al 25 % para una composición asimétrica. El texto atenuado es #8a8a8a sobre #111, un contraste de unos 5,6:1.
13. **Revelados:** 14 px y una sola vez. Solo se ocultan si `main.js` añade `.js-reveal` a `<html>`.

## Pendientes tuyos (de antes, siguen abiertos)

- PDFs del CV, disponibilidad para /cv/, Cal.com, Instagram, CGV y RC Pro, desarrolladores de confianza.
- Validar «Pour qui» y «Non inclus»: pon `validated: true` en cada oferta de `_data/offers.yml`.
- Traducir About y casos de estudio.
- Dirección postal (ver la decisión 2).

---

# Informe anterior (noche del 9 al 10/11/2026)

## Qué hice esta noche (un commit por tarea)

1. **H1 en francés, opción A** (`7acd335`): «Je conçois des interfaces / pour faciliter l'usage / guidé par la curiosité».
   - Las mismas combinaciones e interacción. Los textos FR y EN están en `_data/home.yml`.
   - Cada grupo («les parcours», «des interfaces») es un `<span>` con `white-space: nowrap`.
   - El ancho está reservado: todas las palabras de un carrusel comparten una celda de grid, así que la caja mide siempre lo de la palabra más larga.
   - En inglés a 1440 px queda idéntico píxel a píxel a como estaba.
2. **Hero en móvil** (`561d5a3`): un solo hero, solo CSS por debajo de 768 px.
   - H1 de 32 a 44 px, botones apilados a todo el ancho, sin indicador de scroll y «e‑commerce» sin cortar en el guion.
   - Sin solapes a 320, 360 ni 390 px.
   - «Voir les offres» aparece en el primer pantallazo a 360×780 y a 390×844. A 320×640 no cabe.
3. **Visor de imágenes** (`d18d5a7`): ahora es un diálogo modal con nombre accesible.
   - Cerrar, anterior y siguiente son botones con `aria-label` en FR o EN.
   - Esc cierra, las flechas navegan, el foco queda atrapado dentro y vuelve a la imagen de origen.
   - Las imágenes del carrusel del proceso se abren con Enter o espacio.
   - Lo probé en Cinéville, tanto en la galería bento como en el carrusel.
4. **Error del formulario** (`a9aa050`): muestra tu correo como texto visible y como enlace `mailto:`.
   - El honeypot y `aria-live` siguen igual.
   - Lo probé con un error 500 simulado y un fallo de red simulado. No se envió nada a Formspree.
5. **CLS del aviso de idioma** (`1531438`): en `/` era **0,081** porque el aviso aparecía después de cargar.
   - Ahora se decide en el `<head>`, antes de pintar.
   - Quedaba además un 0,0007 en `/en/` por el cambio de fuente del H1, también corregido.
   - Resultado: **CLS 0,000** en `/` y en `/en/`.
6. **Auditoría del hover del H1** (`3bd2866`): solo auditoría, sin cambios. Está más abajo.
7. **Fase 2, /cv/** (`337e347`):
   - Puestos buscados: Designer UI, Web designer, Graphiste et designer UI y Product designer junior. CDI en Strasbourg.
   - Contacto: LinkedIn, email y formulario.
   - «En bref»: 17 años de oficio desde 2009, e-commerce desde 2019 (WordPress y luego PrestaShop, dos datos separados), tu título, Global Game Jam 2026 y los idiomas.
   - 3 casos de estudio: In-House Tools, Keep Breathing y Spin App.
   - Debajo siguen Skills y Formación.

## Resultados de Lighthouse (móvil, local)

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| `/` (con el aviso de idioma visible) | 98 | 100 | 100 | 100 | 1,8 s | 0,000 |
| `/en/` | 98 (una ejecución dio 94) | 100 | 100 | 100 | 1,8 s (una ejecución dio 2,5 s) | 0,000 |
| `/cv/` | 98 | 100 | 100 | 100 | 2,0 s | 0,000 |
| `/services/` | 98 | 100 | 100 | 100 | 1,8 s | 0,000 |
| Caso Cinéville | 91 | 100 | 100 | 100 | **3,4 s** ⚠️ | 0,000 |

En `/en/` hice tres ejecuciones: dos dieron 98 y 1,8 s, y una 94 y 2,5 s. Es variación del entorno local.

**Otras verificaciones:**
- Build de Jekyll sin errores.
- `grep "[[A "` en `_site` = **0**.
- 685 enlaces y recursos internos revisados en FR y EN, 0 rotos.
- Sin desbordamiento horizontal a 320, 360, 768 y 1440 px en 11 páginas, salvo Cinéville (ver abajo).
- Con reduced-motion todo el contenido es visible, sin errores de JS.
- Teclado completo en 9 páginas, en escritorio y en móvil.

## Lo que quedó bloqueado o sin hacer

- **PDFs del CV, no enlazados.** Existen (`assets/img/CV/CV_AlejandroAM_FR.pdf` y `_EN.pdf`), pero chocan con las reglas:
  - incluyen tu **teléfono** y «67000, Strasbourg»;
  - nombran a tu **empleador actual**, que el brief prohíbe en el sitio;
  - dicen «Titre obtenu, 2026» y «RNCP niveau 6», mientras que el sitio usa «2024–2026» sin RNCP;
  - el inglés dice «since 2011» y el sitio dice 2009.
  - Opción más segura: no enlazarlos hasta que me pases versiones sin teléfono ni empleador, o me confirmes que así está bien.
  - ⚠️ Ojo: ya son accesibles públicamente por URL desde `main`, aunque nada los enlaza.
- **Disponibilidad en /cv/:** no la puse porque no tengo la fecha. Dime si va «immédiate» o una fecha.
- **Cinéville en móvil:** la imagen `brouillon-2.webp` (bloque `.cv-brouillon-pair`) se sale unos 50 px a la derecha a 320 y 360 px. Queda recortada, sin scroll horizontal.
  - Ya estaba así antes y no lo toqué, porque los casos de estudio son intocables.
  - Arreglo propuesto, una línea de CSS: columnas `minmax(0, 1fr)` en `.cv-brouillon-pair`.
- **LCP de los casos de estudio:** Cinéville 3,4 s e In-House Tools 2,9 s. Están por encima del presupuesto por sus imágenes grandes.
  - Propuesta: precargar la imagen de portada y servir versiones más pequeñas en móvil. Toca los casos, así que necesito tu OK.

## Lo que debes decidir por la mañana

1. **PDFs del CV:** ¿versiones nuevas sin teléfono ni empleador, o enlazo estas?
2. **SIRET y dirección profesional:** siguen ocultos en las mentions légales. La ley los exige, así que **bloquean el merge**.
3. **Disponibilidad** para /cv/.
4. **Hover del H1:** ¿aplico las mejoras A, C y E de la auditoría?
5. **Cinéville en móvil y LCP de los casos:** ¿me das permiso para la línea de CSS y para optimizar las imágenes?
6. **Pendientes de antes:**
   - Cal.com y la URL de Instagram (`_config.yml`).
   - CGV y RC Pro (Maintenance).
   - Desarrolladores de confianza (`show_dev_note` en `_data/services_page.yml`).
   - Validar los borradores de «Pour qui» y «Non inclus» de las ofertas.
7. **Sin empezar porque no están aprobados:** los reordenamientos (j) y la fase 4.

### Decisiones que tomé yo, todas reversibles

- **H1 en móvil:** cada grupo va en su propia línea («faciliter / l'usage»). Así el número de líneas no depende de la fuente (CLS 0) y no queda una línea vacía bajo las palabras cortas. Se revierte quitando la regla `.h1-group { display: block }` del bloque móvil.
- **Fuente del H1 en escritorio:** solo se reduce si la línea más larga no cabe. Usa `--h1-fit` en `_data/home.yml`: 14,2 en FR y 13,8 en EN.
- **Casos elegidos para /cv/:** In-House Tools, Keep Breathing y Spin App. No elegí BEDiZEN porque el brief no lo quiere en contenido nuevo. Se cambian en `cases:` de `_data/cv.yml`.
- **Frase de oficio:** «17 ans de métier, depuis 2009.», sin decir en qué, para no inventar.
- **«Sites e-commerce depuis 2019 (WordPress, puis PrestaShop)»:** lo saqué de tu CV (Somos Arte 2019 y tu puesto actual desde 2022).

## Auditoría del hover de palabras del H1 (tarea 6, solo auditoría, sin cambios)

Cómo funciona hoy: `assets/js/home-interaction.js` cambia una palabra resaltada cuando pasas el ratón por encima (`mouseenter`) o cuando la tocas (`click`) si el dispositivo tiene pantalla táctil. Elige otra palabra al azar que encaje con una de las 6 combinaciones definidas. El cambio es instantáneo, sin animación.

### Problemas

1. **Descubribilidad.** Nada indica que las palabras se puedan cambiar. En escritorio solo cambia el cursor (puntero o cursor personalizado agrandado). En móvil no hay ninguna pista, así que casi nadie tocará el H1. La mayoría de visitantes no descubrirá la interacción.
2. **Teclado.** Las palabras no reciben foco y no hay alternativa con teclado. Como el bloque está en `aria-hidden` y el H1 tiene un nombre estable, no es un fallo de accesibilidad grave: el contenido no se pierde. Pero un usuario de teclado no puede usar algo que un usuario de ratón sí. Si la interacción se considera funcionalidad y no decoración, incumple WCAG 2.1.1.
3. **Táctil y dispositivos híbridos.** El tipo de evento se decide con `"ontouchstart" in window`. En un portátil con pantalla táctil y ratón, pasar el ratón ya no hace nada: solo funciona hacer clic. En móvil, tocar una palabra la cambia sin ninguna respuesta visual, así que puede parecer un error.
4. **Cambios accidentales.** `mouseenter` se dispara cada vez que el puntero cruza una palabra, por ejemplo al ir hacia los botones. La frase cambia mientras se está leyendo.
5. **Salto de diseño.** Antes había un problema real: a 360 px «enhance usability» se montaba sobre la línea anterior. **Ya está corregido**: las palabras de cada carrusel comparten una celda de grid, así que la caja tiene siempre el tamaño de la palabra más larga. En móvil, cada grupo va en su línea, y el CLS medido es 0.
6. **Rendimiento.** Bien. Un listener por carrusel, sin bucles, sin animación y sin trabajo en scroll. Sin coste medible: TBT 0 ms.
7. **Reduced-motion.** No hay animación en el cambio de palabra (`transition: none`), así que no hay nada que reducir. El cursor personalizado ya se desactiva con reduced-motion.
8. **Código.** `role="text"` en cada carrusel no es un rol ARIA válido. No hace daño porque está dentro de `aria-hidden`, pero conviene quitarlo. El comentario del archivo está en inglés y español mezclados.

### Mejoras propuestas, de menor a mayor cambio

- **A. Quitar `role="text"`.** Cero riesgo.
- **B. Pista visual discreta**, por ejemplo un subrayado punteado bajo las palabras y una microanimación de 150 ms al cambiar, desactivada con reduced-motion.
- **C. Detectar el tipo de puntero, no el dispositivo.** Usar `pointerenter` con `pointerType === "mouse"` para el hover y `click` para todo. Así funciona en dispositivos híbridos.
- **D. Alternativa con teclado.** Convertir cada palabra en un `<button>` fuera del `aria-hidden`, con un texto accesible del tipo «Changer le mot», o añadir un único botón pequeño «↻ autre combinaison». En ese caso el H1 accesible seguiría siendo el texto estable.
- **E. Retardo de intención.** Cambiar solo si el puntero se queda unos 120 ms, para evitar cambios al cruzar.

Mi recomendación es A, C y E ahora, porque son seguras y no cambian el aspecto. B y D, mejor con la fase 4 (dirección visual).
