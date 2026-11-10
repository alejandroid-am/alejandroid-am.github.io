# Notas para Ale

Este archivo no se publica: está en `exclude` de `_config.yml` y `/NOTAS-PARA-ALE.md` da 404.
Rama: `mejoras-clientes`. Push solo de esta rama. No he tocado `main`, no hay merge ni force push.
Vista previa: http://127.0.0.1:4000/ (`docker start portfolio-jekyll` si reinicias).
Para deshacer una tarea concreta: `git revert <hash>`.

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
