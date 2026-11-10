# Notas para Ale

Este archivo no se publica: está en `exclude` de `_config.yml`.

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
