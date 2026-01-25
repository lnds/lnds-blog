---
title: "Ralph Wiggum y el fin de la ingeniería de software"
subtitle: "Sobre términos, propósitos y bucles infinitos"
date: 2026-01-25T08:00:00-03:00
slug: "ralph-wiggum-fin-ingenieria-software"
tags: ["IA", "ingeniería de software", "programación agentica", "agentes"]
categories: ["programación", "la naturaleza del software"]
---

> "Me fail English? That's unpossible!"
> — Ralph Wiggum

Ralph Wiggum es el hijo del jefe de policía de Springfield, en la serie animada The Simpsons, te lo cuento por si has vivido bajo una piedra durante los últimos 35 años (o nunca prendiste el televidor sintonizando canal 13 en Chile).

El pequeño Ralph ds, digamos, un niño especial. Su ingenuidad roza lo absurdo, pero ocasionalmente suelta frases que revelan verdades inesperadas. "Me fail English? That's unpossible!" es una de sus líneas más famosas: la frase demuestra exactamente lo que niega.

No es casualidad que alguien decidiera nombrar así a un plugin para agentes de código. [Ralph Wiggum](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum) es un script que ejecuta Claude Code en un bucle infinito, alimentándolo con prompts generados por IA, hasta resolver un problema o agotar el presupuesto. La técnica original viene de Geoff Huntley, quien la describió como "brute force exploration".

Hay algo poético en esto. Un personaje que personifica la incompetencia accidentalmente genial, prestando su nombre a una técnica que básicamente dice: "no sé lo que estoy haciendo, pero si lo intento suficientes veces, eventualmente funcionará".

## Las voces del apocalipsis

Esta semana vi tres tweets que, leídos juntos, pintan un cuadro interesante.

Primero, Erik Meijer:

{{<x user="headinthebox" id="2013770817868382345" >}}

Meijer no es cualquiera. Es el creador de LINQ, Rx, y tiene credenciales académicas que lo respaldan. Su argumento es directo: los LLMs son "generadores de slop" (basura), pero eso no importa porque el costo del cambio colapsó a cero. Ya no necesitas que el código sea perfecto la primera vez.

Luego, Ryan Dahl, el creador de Node.js y Deno:

{{<x user="rough__sea" id="2013280952370573666" >}}

"The era of mass human-written software is over." Punto. Sin matices. El código escrito por humanos será cada vez más raro, reservado para "proyectos de vanidad" y sistemas críticos.

Y finalmente, Grady Booch, uno de los padres del UML y la ingeniería de software moderna:

{{<x user="Grady_Booch" id="2013331606795362398" >}}

Booch ofrece una perspectiva histórica: siempre hemos elevado los niveles de abstracción. El lenguaje natural como siguiente nivel no es el fin del mundo, es el siguiente paso en una progresión que viene desde los años 50.

Tres voces muy distintas. Un académico pragmático, un hacker influyente, un veterano de la industria. Y los tres, de alguna manera, coinciden en que algo fundamental está cambiando.

## El fin ha llegado

La tesis de Meijer merece análisis. Si el costo del cambio colapsa, ¿qué pasa con todas las prácticas que desarrollamos para mitigarlo?

Piensa en cuánto de la ingeniería de software es gestión del riesgo de cambio. Code reviews, tests unitarios, integración continua, arquitecturas desacopladas, documentación. Todo asume que cambiar código es caro y peligroso, que debemos hacerlo bien la primera vez o pagar un precio alto después.

Pero si puedo regenerar el código completo en minutos por "chauchas", ¿para qué tanto proceso?

Ralph Wiggum, el script, implementa esta filosofía literalmente. Ejecuta `while true`, alimenta prompts, evalúa resultados, y repite. No hay elegancia. No hay diseño. Solo fuerza bruta y consumo de tokens baratos (considerando los planes ilimitados de Claude Code, sino es muy caro).

Los números que circulan son absurdos: seis repositorios resueltos overnight, proyectos de cincuenta mil dólares completados por menos de trescientos. Si son reales, aunque sea parcialmente, el modelo económico del desarrollo de software cambia.

En [El Fin del Software Artesanal](/blog/lnds/2025/08/27/2025-08-27-el-fin-del-software-artesanal) escribí sobre los telares de Jacquard. Los tejedores artesanales también creían que su oficio era insustituible. Tenían razón en que algo se perdía. Pero estaban equivocados en que eso detendría la industrialización.

## El fin como propósito

Pero hay otra lectura de la palabra "fin". No como el término, sino como propósito. La finalidad.

¿Cuál es el fin de la ingeniería de software? ¿Escribir código?

En 1986, Fred Brooks escribió "No Silver Bullet" distinguiendo entre complejidad esencial y accidental. La complejidad esencial es inherente al problema que resolvemos. La accidental viene de nuestras herramientas y procesos imperfectos.

Si la IA elimina la complejidad accidental de escribir código, lo que queda es la complejidad esencial: entender qué construir y por qué.

En [Juicio y Estilo](/blog/lnds/2026/01/07/juicio-y-estilo) cité a Joseph Weizenbaum, quien distinguía entre el programador profesional y el compulsivo. El profesional ve la programación como un medio para un fin. "Su satisfacción viene de haber resuelto un problema sustantivo, no de haber sometido al computador a su voluntad."

El compulsivo programa por programar. El código es el fin, no el medio.

Si tu identidad profesional está atada al acto de escribir código, el colapso del costo del cambio es una amenaza existencial. Pero si tu valor está en entender problemas complejos, en diseñar soluciones elegantes, en tomar decisiones difíciles, entonces la IA es una herramienta más.

El fin de la ingeniería de software nunca fue escribir código. Fue gestionar complejidad para resolver problemas reales.

## Ni plotter ni pantser: fuerza bruta

En [Mapas o Brújulas](/blog/lnds/2025/10/31/mapas-o-brujulas) describí dos aproximaciones a la programación con IA: los plotters que planifican todo antes de escribir, y los pantsers que exploran iterativamente.

Ralph Wiggum no es ninguno de los dos. Es algo nuevo.

El README del plugin lo dice sin pudor:

> "Iteration > Perfection"
> "Failures Are Data"
> "Context Is King"

No hay plan. No hay exploración guiada. Solo un bucle que genera, evalúa, falla, y repite. La inteligencia no está en el proceso, está en los criterios de aceptación.

La ironía es que parece funcionar.

Es incómodo admitirlo. Décadas de metodologías, de mejores prácticas, de certificaciones y frameworks, y resulta que a veces la respuesta es "prueba muchas cosas hasta que algo funcione".

Pero no deberíamos sorprendernos. El aprendizaje automático funciona así. La evolución funciona así. La ciencia funciona así, si le das suficiente tiempo.

Lo que cambió es que ahora podemos hacer millones de intentos por un costo aparentemente muy bajo (esto si nos desentendemos del costo ambiental del uso de la IA).

Si el "fin" como término de la ingeniería de software llega, si realmente dejamos de escribir código como actividad central, entonces el "fin" como propósito se revela con claridad.

Nunca fuimos escritores de código. Fuimos gestores de complejidad, traductores entre el mundo caótico de los problemas humanos y el mundo formal de las instrucciones computacionales.

Obie Fernandez lo puso bien: "Those 10,000 hours you spent becoming a great programmer aren't useless at all. They're what give you the two things that actually matter now: judgment and taste."

Juicio para saber qué construir. Gusto para reconocer cuándo está bien hecho.

Ralph Wiggum, el personaje, no tiene ninguna de las dos cosas. Dice cosas absurdas que accidentalmente son profundas. Pero no sabe por qué son profundas. No puede repetir el truco intencionalmente.

Ralph Wiggum, el script, tampoco tiene juicio ni gusto. Solo tiene tokens y tiempo. Necesita que alguien defina los criterios de aceptación, que alguien evalúe los resultados, que alguien decida cuándo el problema está resuelto.

Ese alguien todavía eres tú.

O al menos, lo eres mientras tengas el juicio para distinguir lo bueno de lo malo, y el gusto para preferir lo elegante sobre lo funcional, pero feo.

---

*¿El fin de la ingeniería de software? Depende de qué fin hables.*

*Si te interesa seguir esta conversación, suscríbete a mi [newsletter](https://lnds.substack.com) o apóyame en [Patreon](https://www.patreon.com/lnds).*

---

**Referencias:**

- [Ralph Wiggum plugin (Anthropic)](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum)
- [A Brief History of Ralph (HumanLayer)](https://www.humanlayer.dev/blog/brief-history-of-ralph)
- [La técnica original de Geoff Huntley](https://ghuntley.com/ralph/)
- [No Silver Bullet - Fred Brooks (PDF)](https://worrydream.com/refs/Brooks-NoSilverBullet.pdf)

**Posts relacionados en este blog:**

- [El Fin del Software Artesanal](/blog/lnds/2025/08/27/2025-08-27-el-fin-del-software-artesanal) (2025)
- [Juicio y Estilo](/blog/lnds/2026/01/07/juicio-y-estilo) (2026)
- [Mapas o Brújulas](/blog/lnds/2025/10/31/mapas-o-brujulas) (2025)
- [No somos cocineros](/blog/lnds/2013/03/08/no-somos-cocineros) (2013)
- [Creadores de universos](/blog/lnds/2011/10/11/creadores-de-universos) (2011)
