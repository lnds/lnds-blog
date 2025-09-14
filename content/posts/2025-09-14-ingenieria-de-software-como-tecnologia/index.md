+++
date = '2025-09-14T10:00:00-04:00'
draft = false
title = 'Ingeniería de Software como Tecnología'
tags = ['ingeniería de software', 'IA', 'verificación', 'Bertrand Meyer', 'historia']
slug = 'ingenieria-de-software-como-tecnologia'
+++

"La ingeniería de software no será solo un proceso, sino que una tecnología." Así predecía Bertrand Meyer en 2010 cómo sería la programación una década más tarde.

Quince años después, esa predicción resuena con una ironía que Meyer probablemente no anticipó. Ya saben, es mejor no hacer predicciones, o si queremos asegurarnos, seguir el consejo de Alan Kay, más que predecirlo hay que crearlo.

# La visión original

En [aquella presentación](http://se.ethz.ch/~meyer/publications/methodology/programming-10years-sierre.pdf), Meyer hablaba de transformar la ingeniería de software de un conjunto de prácticas y metodologías en una tecnología propiamente tal. Su visión incluía verificación integrada, interfaces web ubicuas, concurrencia omnipresente.

La idea central era que la disciplina maduraría hasta convertirse en algo predecible, confiable, industrializado. Como la ingeniería civil o la manufactura: procesos repetibles, resultados garantizados, calidad medible.

Meyer no hablaba de artesanos ni de arte. Hablaba de tecnología.

# La ironía del presente

Hoy, en 2025, efectivamente la ingeniería de software se ha convertido en una tecnología. Pero no como Meyer imaginaba.

Claude Code, Cursor y otras herramientas han transformado el acto de programar en algo que se parece más a operar una máquina que a practicar un oficio. Como escribí en mi [último post](/blog/lnds/2025/08/27/el-fin-del-software-artesanal/), los telares de Jacquard del siglo XXI han llegado.

La verificación que Meyer promovía, como una búsqueda obsesiva por la corrección formal, ha sido reemplazada por el "parece que funciona" del vibe coding. La concurrencia está casi en todas partes, pero escondidad en frameworks que pocos entienden realmente. Las interfaces web son comunes, pero generadas por LLMs que producen código que nadie revisará línea por línea.

# Más chispas que carne

El propio Meyer ha tenido que confrontar esta realidad. En un [paper reciente](https://bertrandmeyer.com/2025/07/24/more-sizzle-than-steak-using-an-llm-to-produce-verified-bug-fixes-new-paper/) sobre el uso de LLMs para corregir bugs, su equipo descubrió algo revelador: hay "más chisporroteo que carne" en las promesas de la IA.

![más chispas que carne](chispas.png)

Sus hallazgos son brutales en su honestidad:

- Los LLMs generan soluciones que parecen correctas pero fallan bajo verificación rigurosa
- "Una prueba exitosa no significa nada" cuando hablamos de corrección real
- Identificaron siete "personalidades" diferentes de uso de LLMs, desde el crédulo hasta el escéptico

Meyer sigue creyendo en la verificación formal. Usa AutoProof y contratos de Eiffel para validar las correcciones propuestas por GPT-4. Es como un relojero suizo insistiendo en la precisión artesanal mientras el mundo compra Apple Watches.

Quizás el problema sea que los LLM no tienen suficiente código Eiffel en la data usada para su entrenamiento. ¿Cuánto se usará Eiffel en la industria? Pero nuestro héroe no se amilana por ese pequeño inconveniente.

Al menos el autor asume que, estadísticamente hablando, este estudio puede no ser relevante.

# La tecnología que obtuvimos

La ingeniería de software sí se convirtió en tecnología, pero no en el sentido que Meyer imaginaba. No es una tecnología de procesos rigurosos y verificación formal. Es una tecnología de generación masiva y validación aproximada.

Y acá está la gran diferencia entre la visión de un académico y la realidad del mercado. Meyer soñaba con catedrales; obtuvimos fábricas. Él imaginaba artesanos elevados a ingenieros; obtuvimos operarios dirigiendo máquinas que no comprenden.

Y aquí está lo interesante: ambas visiones son tecnología. Solo que una es la tecnología de la precisión y la otra es la tecnología de la productividad.

# El verdadero cambio tecnológico

Cuando Meyer hablaba de la ingeniería de software como tecnología, pensaba en herramientas que amplificarían la capacidad humana de razonamiento formal. Herramientas que harían de la verificación "algo rutinario", natural e integrada.

Lo que obtuvimos fueron herramientas que reemplazan el razonamiento con aproximación estadística. Que convierten la programación en un diálogo con una caja negra. Que transforman el debugging en un proceso de prueba y error asistido por IA.

No es que Meyer estuviera equivocado. Es que el mercado eligió automatizar lo que conocía.

# La paradoja de la predicción cumplida

Meyer tenía razón en algo: la ingeniería de software se convirtió en tecnología, o al menos parcialmente. Pero aplicando el viejo truco de las profecías que se cumplen, lo que tenemos que hacer es transformar su significado original.

La verificación está integrada, pero es verificación por prueba empírica, no formal. La concurrencia está en todas partes, pero manejada por abstracciones que ocultan su complejidad. Las interfaces web son ubicuas, generadas automáticamente por LLMs.

Es como si hubiéramos tomado cada punto de su lista y lo hubiéramos implementado con un asterisco:

- Verificación integrada*
- Concurrencia omnipresente*
- Interfaces web universales*
- Ingeniería como tecnología*

*Pero no como esperábamos

# El futuro de la tecnología

Quizás la lección más importante es que la tecnología no evoluciona según los deseos de los tecnólogos. Evoluciona según las presiones del mercado, las limitaciones humanas, y el camino de menor resistencia.

Meyer quería elevar la programación. El mercado quería popularizarla (por razones de pura codicia, se necesitaban más manos y las pocas que había, eran caras). Meyer buscaba corrección. El mercado buscaba velocidad. Meyer imaginaba ingenieros. El mercado necesitaba operarios.

Y así, la ingeniería de software se convirtió en tecnología. No la tecnología de la verificación formal y la corrección matemática, sino la tecnología de la generación masiva y la validación suficiente.

Como los tejedores del siglo XIX frente a los telares de Jacquard, nos encontramos en un momento de transición. Podemos insistir en que el verdadero software se verifica formalmente, que los verdaderos ingenieros entienden cada línea. O podemos aceptar que la tecnología ha virado por otro camino.

Un camino donde "más chispas que carne" no es un bug. Es un feature.

---

*¿Qué opinas de esta transformación? ¿Crees que Meyer tenía razón en el fondo, aunque la implementación haya sido diferente? ¿O estamos presenciando algo completamente distinto a lo que cualquiera pudo imaginar? Suscríbete a mi [newsletter](https://newsletter.lnds.net) para continuar esta conversación.*
