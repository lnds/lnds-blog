+++
date = '2025-08-04T09:10:03-04:00'
draft = false
title = 'Agente Code, Claude Code'
tags = ['IA', 'Claude Code', 'Agentes', 'Vibe Coding']
slug = '2025-08-04-agente'
+++

La palabra agente se ha puesto de moda en el sub mundo tech-ai. Pero la verdad es que se aplica muchas veces a herramientas que no son agentes de inteligencia artificial propiamente tal.

La definición de agente es antigua y se refiere a una entidad que percibe su entorno, actúa de forma autónoma para cumplir metas u objetivos que le plantean, aprende y mejora su desempeño.

Hoy en día se ofrecen servicios IA llamados agentes, que en realidad son orquestadores y ejecutores de flujos de trabajo.
Pero lograr un agente como se espera en la definición, es aún un desafío de envergadura.

Pero aún así, ya se venden estos servicios, y en particular Claude Code ofrece desde hace unas pocas semanas sub agentes.

Crearlos es sencillo, y la documentación de Anthropic está bien, pero ya hay montones de tutoriales y videos que muestran como usarlos.
La calidad de estos videos cubre todo el espectro, y es difícil saber cuál es bueno y te enseña algo útil.
En los que he visto no siento que se expliquen casos de usos adecuados. Y aprovecho de hacer la crítica a muchos de estos tech-influencer IA.
Muchos son loros que repiten lo que dicen las compañías, que le compran todo sin un análisis crítico.
Otros crean ejemplos simplones, que no te aportan nada.

En este caso, cuando hablan de Claude Code, he llegado a ver a algunos proponer que crees un agente que actúe de Product Owner,
otro agente que sea Scrum Master,
otro Desarrollador, un cuarto agente que haga el control de calidad como tester, y un agente DevOps.
Como si eso fuera una buena idea!

Pero que ridicules más grande emular los roles de Scrum como agentes, eso no te añade valor alguno.
Incluso la separación desarrollador - tester tampoco la encuentro útil.

Acá pasa que lo único que estás haciendo es propagar la cascada a tu trabajo con "agentes".
Porque claro, al final, los agentes son sólo una manera de encapsular system prompts para etapas especificas
en tu proceso de desarrollo.

# Agentes Programadores

Entonces, qué te aportan estos sub agentes?

No tengo la respuesta. Pero he estado haciendo algunos experimentos.

El fin de semana trabajé en un proyectito personal.

Mi idea era paralelizar la implementación de features, pero "a lo bestia", puro vibe coding. Podría aumentar la productividad
corriendo más agentes en paralelo como anuncian esos videos en internet?

![](agentes.png)

Pensé que especificando dos agentes "ingenieros de software", esto funcionaría a las mil maravillas.

Lo que descubrí es que un agente puede ejecutarse en paralelo más de una vez, es decir tener dos instancias de un agente corriendo a la vez.
No es necesario tener dos tipos de agentes que hagan las mismas actividades.

Lo otro que descubrí que si estás en modo vibe coding, lo más probable es que los agentes se interpongan entre sí.

De hecho les pedí a cada agente que trabajara en su propia rama y usé git worktree.

Hice dos intentos. En el primero les pedí trabajar en dos features en paralelo, y que usaran git worktree.
Ademas los dejé corriendo en modo de auto aceptación de las ediciones en el texto.
Para mi horror descubrí que terminaron trabajando ambos en la rama main, y por pura suerte no se anularon mutuamente.
Ambos features quedaron implementados, pero de verdad fue suerte.

Para el segundo intento fui más explícito, incluso les exigí que crearan un pull request para cada una de sus propuestas.
Ahí trabajaron en sus ramas respectivas, pero ojo, Claude se marea y tiende a trabajar en el directorio donde estabas parando
cuando empiezas la sesión.

El primer PR pasó sin problemas. Pero el segundo generó un merge conflict, que no era menor. De esos en que dos
funciones se traslapan entre sí. Lo que pasa es que la IA genera mucho código duplicado (estamos en modo vibe coding, recuerden).
Entonces Git al preparar los patches a mergear mostraba un enorme traslape de funciones.

Y acá vino un segundo experimento, le pedí a Claude que resolviera el merge conflict. Y trabajó duro, pero lo logró.

Pero toda la ganancia esperada de tiempo no se pudo lograr. Si yo hubiera ejecutado cada feature en secuencial
las hubiera terminado en menos tiempo.

Entonces la lecciones hasta ahora:

- Para trabajar en paralelo con Claude es recomendable tener sesiones distintas (levanta terminales distintos, o usa multiplexión).
- Los agentes pueden ejecutarse en paralelo, y cada uno sirve para especializar tareas.
Piensa en ellos como flujos de trabajo que cuentan con un system prompt que especifica las habilidades destacadas
que quires que Claude use cuando esté en ese "modo".
- Hay que dividir las tareas a paralelizar de modo que sus funcionalidades no se traslapen, para que no tengas conflictos.
- Claude es capaz de resolver merge-conflict, y esa es una habilidad que puede ser bien útil en otras ocasiones.

Seguiré exprimentando con los sub agentes, para ver si pueden ser realmente útiles, si tienen algún caso de uso
les agradeceré que lo compartan en los comentarios.

Si te gusta lo que estás leyendo te invito a agregar este blog en tu read list, a compartirlo y si te animas suscribirte a mi [newsletter](https://newsletter.lnds.net) que es la forma que tengo por ahora de establecer un nexo de comunicación de novedades
de mis proyectos. Gracias por seguir leyendo.
