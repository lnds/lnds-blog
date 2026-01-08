---
title: "Juicio y Estilo"
subtitle: "Lo que la IA no puede reemplazar"
date: 2026-01-07T12:00:00-03:00
slug: "juicio-y-estilo"
tags: ["programación", "inteligencia artificial", "desarrollo de software", "diseño"]
categories: ["programación", "la naturaleza del software"]
---

> "Those 10,000 hours you spent becoming a great programmer aren't useless at all. They're what give you the two things that actually matter now: **judgment and taste**."
> — Obie Fernandez

Seguro, que al igual que yo, has pasado a producción código que no entendías del todo.

Si eres programador en 2026 y dices que esto nunca te ha pasado, o mientes o no estás usando las herramientas disponibles. La pregunta no es si usamos IA para generar código. La pregunta es si entendemos lo que estamos desplegando.

## La crisis infinita

Jake Nations, ingeniero de Netflix, publicó recientemente una [charla](https://www.youtube.com/watch?v=eIoohUmYpGI) que resonó con conversaciones que he tenido con mis colegas.

Te recomiendo ver el video, lo he dejado insertado al final de este artículo. El argumento central de Nations es que la velocidad de generación de código ahora excede nuestra capacidad de comprensión, y eso es peligroso.

Nations trabaja con un codebase de Netflix que tiene alrededor de un millón de líneas de Java. Según él esto equivale a unos cinco millones de tokens. Y describe algo que muchos reconoceremos: la tentación de dejar que la IA genere, probar que funciona, y seguir adelante sin entender realmente qué se escribió.

> "He enviado código que no entendía del todo. Lo generé, lo probé, lo desplegué. No podía explicar cómo funcionaba."

El problema es que los sistemas de producción siempre fallan de formas inesperadas. Y cuando fallan, es mejor que puedas entender el código que estás depurando a las 3 de la mañana.

Esto no es un argumento nuevo. En 1986, Fred Brooks escribió el clásico ["No Silver Bullet"](https://worrydream.com/refs/Brooks-NoSilverBullet.pdf), donde identificó las dificultades **esenciales** de construir software: complejidad, conformidad, necesidad de cambios e invisibilidad. Las dificultades **accidentales**, como las herramientas, los lenguajes, los frameworks, se pueden resolver con el tiempo. Las esenciales no. Ya he escrito sobre esto en ["Toda empresa es de software (o lo será)"](/blog/lnds/2016/08/30/toda-empresa-es-de-software-o-lo-sera).

{{<figure src="Fred_Brooks.jpg" caption="Fred Brooks" >}}

Brooks argumentaba que ninguna innovación única daría una mejora de orden de magnitud en productividad de software. ¿Por qué? Porque la parte difícil nunca fue la mecánica de codificar. Era entender el problema real y diseñar la solución.

Cuarenta años después, la IA generativa parece darnos exactamente eso: una mejora de orden de magnitud en la mecánica. Y precisamente por eso, Brooks tenía razón. La complejidad esencial sigue intacta.

## Simple no es lo mismo que fácil

Rich Hickey, el creador de Clojure, hizo una distinción que se vuelve más relevante cada día. En su charla ["Simple Made Easy"](https://www.infoq.com/presentations/Simple-Made-Easy) explicó:

- **Simple** (del latín *simplex*, un pliegue): una cosa, sin entrelazamientos. Cada pieza hace una cosa y no se enreda con otras.
- **Fácil** (del latín *adjacens*, adyacente): lo que está al alcance, lo que puedes hacer sin esfuerzo.

Simple requiere pensamiento y diseño. Fácil solo significa poner algo más cerca.

La IA es el botón de "fácil" definitivo. ¿Por qué pensar en arquitectura cuando el código aparece instantáneamente? ¿Por qué considerar alternativas cuando la primera respuesta "funciona"?

El problema es que cada vez que elegimos fácil, estamos eligiendo velocidad ahora y complejidad después. Y la IA no distingue entre tu lógica de negocio esencial y la deuda técnica accidental de decisiones pasadas. Replica todo con la misma confianza.

Nations lo pone así: las interfaces conversacionales de IA llevan a gestión compleja de contexto y conflictos de patrones arquitectónicos. El código generado trata todos los patrones por igual, preservando deuda técnica como si fueran patrones legítimos a seguir. Cuando las cosas son complejas, todo toca todo lo demás. No puedes cambiar una cosa sin afectar otras diez.

Nosotros podemos distinguir. O al menos podemos cuando nos detenemos lo suficiente para pensar.

Como escribí en ["Occam's Razor"](/blog/lnds/2017/08/29/occams-razor), citando a Hickey: la simplicidad es trabajo duro. Pero quien tiene un sistema genuinamente simple va a poder lograr el mayor cambio con el menor esfuerzo. Va a pasar más tiempo simplificando el problema en lugar de escribir código complejo, pero cuando tenga que depurar su código, habrá menos que depurar.

## El programador compulsivo

En 1976, Joseph Weizenbaum escribió ["Computer Power and Human Reason"](https://amzn.to/ZcmD2i), un libro que se adelantó décadas a su tiempo. En él identificó una patología que llamó "el programador compulsivo":

> "El programador de computadoras es un creador de universos para los cuales es el único legislador. Así, también, es el diseñador de cualquier juego. Pero universos de complejidad virtualmente ilimitada pueden ser creados en la forma de programas computacionales."

Weizenbaum describía a programadores que se perdían en el acto de programar, desconectados del mundo real, trabajando en código por el placer de la actividad misma, no por resolver problemas reales. Programadores que no podían detenerse.

Pero también describió al programador profesional, y la diferencia es crucial:

> "El profesional ve la programación como un medio para un fin, no como un fin en si mismo. **Su satisfacción viene de haber resuelto un problema sustantivo, no de haber sometido al computador a su voluntad.**"

Ya he citado a Weizenbaum en posts anteriores, tanto en ["Creadores de universos"](/blog/lnds/2011/10/11/creadores-de-universos) como en ["No somos cocineros"](/blog/lnds/2013/03/08/no-somos-cocineros). Yo pienso que su advertencia se vuelve más urgente hoy. Porque con la IA generativa, el riesgo de compulsión se multiplica.

Cuando Weizenbaum escribía, la interacción con el computador tenía fricción natural: compiladores lentos, ciclos de feedback largos, tiempo forzado para reflexionar. Hoy esa fricción desapareció. El código aparece instantáneamente. La tentación de seguir generando, de agregar una cosa más, de "mejorar" algo que ya funciona, es constante.

El *vibe coder* que genera código sin entenderlo no es el artesano que describía el movimiento *software craftsmanship*. Tampoco es el profesional que Weizenbaum valoraba. Es algo nuevo: un operario de la nueva fábrica de software, atrapado en un loop de generación compulsiva donde la satisfacción viene de ver código aparecer, no de resolver problemas reales.

## El fin del software artesanal (otra vez)

¿Acaso va a desaparecer la programación?

Mi respuesta es no. Yo creo que ya salimos de la [fase artesanal del desarrollo de software](/blog/lnds/2025/08/27/2025-08-27-el-fin-del-software-artesanal). Ahora sí podemos hablar de *software factories*, no como horas de asesorías facturables, sino como producción real.

Tengo la suerte de trabajar con gente muy capa, como Leo Soto que lo puso del siguiente modo:

> "La iniciativa sobre qué construir, cómo construirlo y cómo verificar que lo construimos bien, sigue de nuestro lado. Y eso sigue siendo programar."

Esto es exactamente algo que ya discutimos en 2012 en ["¿Qué es programar?"](/blog/lnds/2012/05/09/que-es-programar): **programar es diseñar**. El código fuente es el diseño final, no un artefacto de construcción separado.
Si eres de esos viejitos que sigue viendo al programador como un *code monkey*, un picacódigo al que hay que indicarle los pasos en un diagrama de flujo, déjame decirte que está muy equivocado.

La IA no cambia esto. Lo acentúa.

La definición de programar cambia. Lo que permanece es la necesidad de **juicio** para saber qué construir, y **gusto** para saber cómo construirlo bien.

## La curva S

Estamos en un momento donde la IA parece avanzar de forma acelerada.

Las cosas parecen exponenciales cuando estás en el medio de la curva. Pero puede que en realidad sigan una curva logística,  la famosa curva S, y puede que estemos por llegar a una meseta.

¿Cuándo? No lo sé. Puede que pronto, puede que falte. Lo que sí sé es que ya vi esta película antes. En los ochenta fue la Quinta Generación japonesa: el mismo discurso de hoy, pero sin nada que mostrar. Ahora hay mucho que mostrar, pero la curva S sigue aplicando.

Lo tricky de las curvas S, como dice Leo, es que "un ratito más en la parte del medio de la S te cambia montones el resultado final". Ese punto antes de la meseta tiene mucho impacto.

Jake Nations lo pone en contexto histórico: cada década trajo una "solución" a la crisis del software. Los setenta trajeron cosas como el lenguaje C. Los ochenta, las computadoras personales. Los noventa, la orientación a objetos (que trajo sus propios problemas con las jerarquías de herencia). Los 2000, Agile (que reemplazó waterfall con sprints y scrum masters). Los 2010, cloud, mobile y DevOps. Los 2020, IA generativa.

Ninguna fue la bala de plata. Todas movieron la aguja. Y después de cada una, la complejidad encontró nuevas formas de crecer.

Dijkstra ya lo había observado: cuando teníamos unos pocos computadores débiles, la programación era un problema menor. Ahora que tenemos computadores gigantescos, la programación se ha convertido en un problema gigantesco. El poder del hardware creció por un factor de mil, y las demandas de software de la sociedad crecieron proporcionalmente.

## Lo que queda de nuestro lado

Nations propone un enfoque de tres fases que, curiosamente, ya está formalizado en herramientas como Claude Code:

1. **Investigar** el sistema existente
2. **Planificar** la implementación en detalle
3. **Ejecutar** con especificaciones claras

El modo "plan" versus el modo "build". La IA acelera la ejecución, pero el plan sigue siendo nuestro.

El proceso que describe Nations es el siguiente:

1. **Compresión de contexto**: transformar millones de tokens en miles de palabras de especificación clara. En su caso, 5 millones de tokens se convirtieron en 2.000 palabras de especificación que un humano puede revisar (algo como la extensión de este artículo).

2. **Validación activa**: probar el análisis de la IA con preguntas específicas sobre caching, manejo de errores, casos borde. Corregir cuando está mal. Agregar contexto faltante.

3. **Especificaciones detalladas**: escribir planes tan detallados que un ingeniero junior pueda seguirlos fácilmente. Esto permite revisar el código generado verificando conformidad con el plan, en lugar de tratar de entender invenciones.

4. **Migraciones manuales primero**: hacer la primera migración manual para descubrir restricciones ocultas que el análisis de código no puede revelar. Luego alimentar ese conocimiento al proceso automatizado.

Lo que no se puede delegar:

- **Juicio**: saber cuándo lo que produjo la IA es correcto, robusto y apropiado versus cuándo es sutilmente incorrecto.
- **Gusto**: reconocer la diferencia entre código que pasa tests y código que sobrevive en producción.
- **Reconocimiento de patrones**: detectar una arquitectura peligrosa porque eres tú quien ha estado despierto a las 3 de la mañana lidiando con las consecuencias.

Estas habilidades vienen de la experiencia. De esas famosas 10,000 horas. De haber cometido errores y haber aprendido de ellos. El reconocimiento de patrones se atrofia cuando los desarrolladores pierden experiencia directa con las fallas del sistema.

Como dice Nations: "Cada vez que saltamos el pensamiento para mantener el ritmo de generación, estamos perdiendo nuestra capacidad de reconocer problemas."

## Belleza, bondad y verdad

En ["No somos cocineros"](/blog/lnds/2013/03/08/no-somos-cocineros) escribí que si no hay belleza, bondad y verdad en el quehacer del profesional, y solo el deseo compulsivo de complacer, entonces ya no vale la pena dedicarse a la profesión.

Como diría Dijkstra: "La belleza es nuestro negocio."

La IA puede generar código que funciona. Pero la belleza del software, la elegancia de una API,ww la claridad de una arquitectura, la economía de una solución, sigue requiriendo un humano que la reconozca, la valore y la exija.

Weizenbaum lo entendió hace cincuenta años: la satisfacción del programador profesional viene de haber resuelto un problema sustantivo, no de haber sometido al computador a su voluntad. Y ciertamente no de haber generado más líneas de código que nadie entiende.

![](/blog/lnds/2013/03/08/no-somos-cocineros/weizenbaum.jpg)

La belleza del software se aprecia en múltiples niveles. Para los usuarios es la interfaz, la fluidez, el diseño. Para los técnicos, la arquitectura, la elegancia de las APIs, el estilo del código, la eficiencia, la economía de recursos

El *vibe coder* que genera código sin entenderlo no es un artesano. Apenas un operario de la nueva fábrica de software. Tiene su lugar, pero no es el futuro de la profesión.

El futuro pertenece a quienes entienden sus sistemas. No a quienes generan más código.

## La síntesis y el juicio

Nations cierra su charla con una reflexión que merece repetirse:

> "No estamos usando IA para pensar por nosotros. La estamos usando para acelerar las partes mecánicas. El pensamiento, la síntesis y el juicio siguen siendo nuestros."

La inteligencia artificial ha hecho progresos significativos. Pero, citando a Knuth, aún hay una brecha enorme entre lo que los computadores pueden hacer y lo que las personas comunes pueden hacer. Las misteriosas ideas que la gente tiene al hablar, escuchar, crear, e incluso cuando están programando, siguen estando fuera del alcance de la IA. Aún mucho de lo que hacemos sigue siendo un arte.

La pregunta no es si usaremos IA. La usaremos. La pregunta es si entenderemos nuestros sistemas.

Debemos mantener la comprensión humana y el pensamiento arquitectónico, mientras usamos la IA para acelerar lo mecánico.

O como lo puso Jake Nations:

> "La parte difícil nunca fue escribir el código. Era saber qué escribir en primer lugar."

Eso no ha cambiado. Y no va a cambiar.

Acá está la charla de Jake Nations:

 {{<youtube eIoohUmYpGI >}}

---

*Si te gustó este post, suscríbete a mi [newsletter](https://lnds.substack.com) para recibir más reflexiones sobre desarrollo de software.*

---

**Referencias:**

- [Charla de Jake Nations (Netflix) sobre AI Code Generation](https://www.youtube.com/watch?v=eIoohUmYpGI)
- [No Silver Bullet - Fred Brooks (PDF)](https://worrydream.com/refs/Brooks-NoSilverBullet.pdf)
- [Simple Made Easy - Rich Hickey](https://www.infoq.com/presentations/Simple-Made-Easy)
- [Computer Power and Human Reason - Joseph Weizenbaum](https://amzn.to/ZcmD2i)
- [Tweet de Obie Fernandez sobre judgment and taste](https://x.com/obie/status/2008182056358924443)

**Posts relacionados en este blog:**

- [Creadores de universos](/blog/lnds/2011/10/11/creadores-de-universos) (2011)
- [¿Qué es programar?](/blog/lnds/2012/05/09/que-es-programar) (2012)
- [No somos cocineros](/blog/lnds/2013/03/08/no-somos-cocineros) (2013)
- [Toda empresa es de software (o lo será)](/blog/lnds/2016/08/30/toda-empresa-es-de-software-o-lo-sera) (2016)
- [Occam's Razor](/blog/lnds/2017/08/29/occams-razor) (2017)
- [El Fin del Software Artesanal](/blog/lnds/2025/08/27/2025-08-27-el-fin-del-software-artesanal) (2025)
