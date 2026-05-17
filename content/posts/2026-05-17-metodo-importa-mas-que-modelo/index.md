+++
date = '2026-05-17T10:00:00-03:00'
title = 'El método importa más que el modelo'
slug = "metodo-importa-mas-que-modelo"
tags = ["IA", "programación agéntica", "ELP", "BMAD", "SDD", "SPDD", "metodología", "compiladores"]
draft = false
+++

Satya Nadella, el CEO de Microsoft, definió la AGI como esa etapa en que el uso de la IA genera un impacto masivo en el PIB mundial. Para Altman el éxito está en el surgimiento de la primera startup unicornio de una persona: una empresa de un solo individuo valorada en mil millones de dólares.

Ambas visiones son estrechas, típicas de CEOs pensando en dinero y en agradar a inversionistas. ¿Qué hay del aporte a la humanidad? ¿O al conocimiento? ¿O a la mejora del cáncer? Nada.

Yo humildemente decidí hacer un experimento y definir una meta distinta, más útil para mí al menos. También me motivó una conversación con Pedro Burón sobre cuánto más te amplifica la IA como desarrollador de software.

El objetivo que me puse es más específico y acotado al mundo de la ingeniería de software: ¿puede una sola persona hacer el trabajo de un equipo, de 5 a 10 ingenieros, y de uno o dos años de extensión, en tan solo un mes?

Para concretarlo me planteé hacer un compilador, para un lenguaje que llevo diseñando por años (un heredero espiritual de [Ogú](https://github.com/ogu-lang)). No solo el compilador debe operar, debe generar código nativo, ser rápido, y compilar sobre el 90% del lenguaje, en un mes. Es un experimento análogo a lo que conté en [*Fake it till you make it*](/blog/lnds/2017/03/01/fake-it-till-you-make-it/), cuando armé un transpilador para Ogú en 60 horas, pero esta vez con más ambición. Y el resultado está casi listo, la meta es llegar al 21 de mayo, pero ya pueden verlo y empezar a probarlo: los enlaces están en [kaikai-lang.org](https://kaikai-lang.org).

Pero este post no es sobre el lenguaje y su compilador, es sobre el método que me permitió hacer esto en paralelo con mi trabajo, mientras un hijo se casaba, y dictaba clases en la universidad. Para contar toda la historia tengo que hablarles sobre los métodos para desarrollar con IA que se han ido decantando estos meses. Mejor se acomodan, que este post es largo.

<!--more-->

## El problema con los asistentes de IA a escala

Trabajar con un asistente en una sola sesión conversacional funciona muy bien para tareas pequeñas. Cuando el proyecto crece, el patrón se rompe siempre por las mismas razones:

- El contexto se llena. El agente pierde detalles relevantes que estaban al inicio.
- Los cambios se pisan entre sí cuando varias tareas se intercalan.
- No queda registro de lo que se intentó y se descartó.
- Cada conversación parte de cero, sin acceso al aprendizaje previo.

Ese es el piso donde nacen los cuatro métodos que vamos a recorrer. Cada uno es una respuesta distinta al mismo problema.

## El espectro Plotter / Pantser

Introduje estos dos conceptos en *[Mapas o Brújulas](/blog/lnds/2025/10/31/mapas-o-brujulas/)* y volví sobre el tema en *[La programación agéntica y el estilo plotter](/blog/lnds/2025/11/20/programacion-agentica-es-plotter/)*. Acá va el recordatorio rápido para quienes no han leído esos artículos (aunque les recomiendo que lo hagan).

**Plotter**: planifica antes de ejecutar. Documentos de requisitos, especificaciones, diagramas, arquitectura escrita. Es la tradición de la ingeniería: piensa primero, ejecuta después.

**Pantser**: del inglés *by the seat of his pants*. Itera en pasos cortos, ajusta con cada paso. No es improvisación, es proceso liviano con disciplina.

Sobre este espectro voy a ubicar los cuatro métodos: SDD, SPDD, BMAD y ELP. Y antes que ellos, el método cero, la línea base contra la que se mide todo.

## Método 0: Vibe Coding

Karpathy lo bautizó en 2024. El humano describe la vibra (the vibe), el como espera lo que quiere, lo que siente con el resultado, etc. El modelo implementa, casi no se revisa. Sirve para prototipos descartables, guiones de fin de semana, exploraciones rápidas. Falla, sin matices, en cualquier cosa que vaya a producción.

Steve Krouse lo expuso claramente: *vibe code is legacy code*. Lo que escribes sin método hoy es la deuda técnica del próximo trimestre. Contra esta "joya" vamos a comparar los métodos que siguen.

## Método 1: SDD, Spec-Driven Development

> La especificación es la fuente de verdad. El código es derivado.

Esa es la inversión que propone SDD. En el flujo clásico la especificación se escribe antes y se descarta. El código se vuelve la fuente de verdad y la especificación queda desactualizada. SDD lo invierte: la especificación persiste, versionada en el repositorio, y el código es un derivado regenerable. Si cambian los requisitos, regeneras desde la especificación actualizada. Los cambios son re-generaciones sistemáticas.

Una pieza interesante de la implementación de GitHub, el [Spec Kit](https://github.com/github/spec-kit), es la `constitution.md`: un documento de principios no negociables del proyecto que el agente debe respetar siempre. Una capa por encima de la especificación de cada funcionalidad.

SDD opera por fases ordenadas:

1. **Specification**. Qué hace el sistema, no cómo. Casos de uso, criterios de aceptación, restricciones.
2. **Plan**. La estrategia técnica. Arquitectura, tecnologías, dependencias.
3. **Tasks**. Descomposición ejecutable. Unidades concretas que el agente puede tomar autónomamente.
4. **Implementation**. El agente genera código contra la especificación, con pruebas y documentación.

Es Plotter puro. Dibujas el mapa con todo el detalle, después dejas que el agente lo ejecute. Funciona bien cuando el dominio es estable y la especificación puede capturar la verdad. Huele a cascada cuando los requisitos cambian rápido, pero la gracia es que el costo de reimplementar bajó mucho.

Mi crítica, es la misma que he sostenido toda mi vida de ingeniero de software: es imposible tener una claridad de todo lo que debes implementar, y menos expresarlo de manera completa y clara. Salvo que sean sistemas muy pequeños, esto es puro pensamiento mágico en mi opinión.

## Método 2: SPDD, Structured Prompt-Driven Development

> Si el prompt produce el código, el prompt es código.

[Wei Zhang y Jessie Jie Xia](https://martinfowler.com/articles/structured-prompt-driven/), del equipo de tecnologías de información interno de Thoughtworks, publicaron este método en el sitio de Martin Fowler. La idea es simple y poderosa: si el prompt produce el código, hay que tratarlo como código. Se versiona, se revisa en un pull request, se reutiliza, se mejora con el tiempo.

El bucle de SPDD es cerrado. La idea de negocio se traduce a abstracción, la abstracción se ejecuta como prompt, la ejecución se valida, lo validado se publica. Si después aparece un error, la corrección vuelve al prompt para que prompt y código no diverjan.

La plantilla central es el **REASONS Canvas**, siete dimensiones obligatorias antes de generar código:

| Letra | Dimensión | Qué captura |
|---|---|---|
| **R** | Requirements | Qué resolver y para quién |
| **E** | Entities | Modelo de dominio |
| **A** | Approach | Solución elegida y descartadas |
| **S** | Structure | Componentes y contratos |
| **O** | Operations | Tareas, secuencia, criterios |
| **N** | Norms | Convenciones reutilizables |
| **S** | Safeguards | Riesgos y mitigaciones |

La regla operativa: si no puedes llenar el canvas, el prompt no está listo. Y si no está listo, no se ejecuta.

SPDD es el más institucional de los cuatro. Su objetivo es convertir la asistencia de IA de hábito personal a capacidad organizacional. Plotter, pero con disciplina de ingeniería sobre el artefacto prompt.

Esto se ve mejor que SDD, asume la limitante anterior. Esto rima con todos los procesos tipo espiral o incrementales. Es mejor que cascada, porque sabe que las especificaciones perfectas a la primera no existen, entonces lo resuelve manteniendo la spec como algo vivo. Es más ceremonial, rígida, ingenieril. Yo la recomendaría por sobre SDD, pero hay que ser conscientes de que requiere esa ceremonia y disciplina que lleva a la rigidez.

## Método 3: BMAD, Breakthrough Method for Agile AI-Driven Development

> Doce o más agentes con roles funcionales claros.

[BMAD](https://github.com/bmad-code-org/BMAD-METHOD) viene de Brian Madison (B Mad, sí). Es el método más completo en términos de roles. Cada rol es un agente con su propio prompt cuidado, su contexto y sus herramientas: jefe de producto, arquitecto, desarrollador, experiencia de usuario, control de calidad, analista, ingeniero de pruebas. Y la lista crece.

El humano dirige la conversación activando el rol adecuado en cada fase. Cuando entra el jefe de producto, el agente toma esa personalidad. Cuando entra el arquitecto, cambia. La novedad reciente es el *Party Mode*: invocar varios personajes dentro de la misma sesión para que colaboren entre sí. No es paralelismo de procesos, es colaboración multipersona dentro de la conversación.

BMAD avanza por fases ágiles, cada una con un agente líder distinto:

1. **Tormenta de ideas** (Analista). Exploración abierta del problema.
2. **Documento de requisitos** (Jefe de producto). Requisitos y alcance.
3. **Arquitectura** (Arquitecto). Decisiones técnicas.
4. **Experiencia de usuario**. Flujos e interfaces.
5. **Historias** (Jefe de producto + Desarrollador). Descomposición ejecutable.
6. **Implementación** (Desarrollador + Control de calidad). Código y pruebas.

Opera dentro del entorno de desarrollo: Claude Code, Cursor. La integración es fluida y la curva de entrada baja. La diferencia central con SDD es que aquí no hay un solo artefacto vivo, sino una colección de artefactos especializados, cada uno con un agente responsable.

Es Plotter ágil. Plotter porque sigue fases ordenadas. Ágil porque incorpora ceremonias y artefactos ágiles clásicos.

Y cae en los mismos pegados ágiles, que en realidad de ágil solo tiene el nombre. A mi me parece que también es ilusorio el replicar la estructura humana en el proceso. Es lleva la Ley de Conway al método, eso me parece un sinsentido. Pero este método parece tener cierta aceptación y popularidad por las mismas razones por las que la gente usa SCRUM, es decir, por las razones equivocadas :p.

## Método 4: ELP, Empirical Lane Parallelism

Y llegamos al método que vengo destilando los últimos meses.

*Welcome back, my friends, to the show that never ends* -- Emerson, Lake and Palmer

{{< figure src="elp-1992.jpg" alt="Emerson, Lake & Palmer en concierto, 1992" caption="Emerson, Lake & Palmer en vivo, 1992. Foto de Gorupdebesanez, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Emerson,_Lake_%26_Palmer_01.jpg), CC BY-SA 3.0." >}}

Por supuesto que el nombre es un homenaje a ese power trio del progresivo. Los lectores regulares de este blog saben que amamos el rock progresivo por acá. Un género poderoso y pretencioso, como este método, al menos así suena en mi cabeza :D.

ELP es el acrónimo de Empirical Lane Parallelism, es un método que combina tres ideas:

1. **Lanes paralelas**. Cada unidad de trabajo se ejecuta como una sesión aislada: un *git worktree*, una rama propia, una sesión `tmux` propia. Varias lanes corren al mismo tiempo.
2. **Brief como contrato**. Cada lane recibe un documento estructurado que define su alcance, las decisiones ya tomadas, qué hacer y qué no, y qué entregar. Producto de un *briefing* explícito entre el arquitecto, el integrador y el agente.
3. **Captura empírica del proceso**. Auditorías previas al código, retrospectivas obligatorias por lane y mediciones de cada compilación, conservadas como conjunto de datos que alimenta a las lanes siguientes.

ELP no necesariamente reemplaza a SDD ni a SPDD. Los puede complementar con un patrón explícito para coordinar varios agentes sin que el sistema se degrade en pocas semanas. Sí es una alternativa a BMAD. Acá los agentes no tienen roles especializados por capacidades, solo hay tres roles, y uno lo cumple el humano.

### Los tres roles

ELP define tres roles que son independientes entre sí.

- **Arquitecto**. El humano. Decide alcance, orden, prioridades. Aprueba PRs, autoriza acciones irreversibles, corrige cuando algo se sale de cauce. **No escribe código línea por línea.**
- **Integrador**. Agente de IA en sesión interactiva. Mantiene el contexto compartido, lee el repositorio, escribe los briefs, lanza las lanes y vigila su progreso. Nunca toca código directamente.
- **Lane**. Agente de IA en sesión aislada, en modo autónomo. Recibe el brief al partir y lo ejecuta de principio a fin: explorar, diagnosticar, implementar, validar, escribir la retro, abrir el PR. Solo se detiene en los puntos de *detente-y-reporta* declarados en el brief.

La autonomía de la lane es lo que hace viable la ejecución paralela. Un humano no puede supervisar N lanes a la vez. El brief reemplaza a la supervisión continua. Por eso su calidad es el techo de la calidad de la lane. Un brief escueto produce un agente perdido.

### El brief como contrato

El brief es la diferencia entre un agente que entrega un PR listo para revisión y uno que pierde el tiempo. Tiene una estructura canónica: objetivo, contexto, lectura previa, decisiones fijadas, alcance (lo que SÍ y lo que NO), salidas requeridas, disciplina e instrumentación.

La sección crítica es **Decisiones fijadas**. La IA está entrenada para ser útil y tiende a "mejorar" lo que ya estaba decidido. Hay que escribirle: *"No tocar `CHANGELOG.md`. No arreglar el issue #219 en esta lane. Cambia lo mínimo para que pase."* Lo que NO se hace es tan importante como lo que SÍ.

El brief no es la spec. Es la orden para ejecutar una iteración, es un repaso con la estrategia para abordar la ejecución de una spec. Define criterios para abortar, caminos alternos, cuando reportar al integrador.

En mi caso las spec viven en issues en GitHub, pero en tu caso pueden estar en documentos markdown en el mismo repo o en el sistema de gestión que uses como Shortcut, Jira o Linear.

### Captura empírica: sin retro, no hay PR

Aquí está la diferencia mayor con los otros métodos. SDD y BMAD producen artefactos previos. SPDD versiona el prompt. ELP además **mide el proceso**:

- **Auditorías de fase 0**: lanes puramente documentales que validan la premisa de un hito antes de escribir código. En la práctica, algunas auditorías descartaron la propuesta completa con datos, ahorrando semanas de trabajo equivocado.
- **Retros de lane**: cada lane escribe `docs/lane-experience-<lane>.md` antes de abrir el PR. Sin retro, no hay PR. Marcas de tiempo, errores de compilación encontrados, ambigüedades, puntos de fricción.
- **Archivo TSV de compilaciones**: cada invocación a `make` queda registrada con marca de tiempo, comando, resultado y duración. Es el conjunto de datos que permite evaluar honestamente cuánto cuesta cada lane.

Las retros sirven a cuatro propósitos: capturan información mientras el contexto está fresco, son entrada para la siguiente lane, son material para evaluar la autoría real del modelo, y documentan vacíos que se transforman en nuevos issues.

ELP es Pantser estructurado. No tiene un mapa completo. Tiene principio, brújula y bitácora.

El archivo TSV en realidad es opcional, yo lo estoy usando para medir la rapidez y el nivel de amplificación del método. Se puede descartar porque no necesariamente te interesa.

## Comparación rápida

|  | SDD | SPDD | BMAD | ELP |
|---|---|---|---|---|
| **Familia** | Plotter | Plotter institucional | Plotter ágil | Pantser estructurado |
| **Artefacto central** | Especificación viva | Prompt vivo | Documento de requisitos + arquitectura | Brief + retro |
| **Topología** | Especificación → código regenerado | Prompt y código en paralelo | Fases ágiles | Lanes paralelas |
| **Captura del proceso** | Especificación | Prompt | Parcial | Retros, auditorías, archivo TSV |
| **Cuándo encaja** | Dominio estable | Equipo grande, escala organizacional | Un humano con varios agentes en el entorno de desarrollo | Proyecto largo, muchos PRs por día |

No hay un método mejor. Hay un método más adecuado a cada problema. La pregunta correcta no es *"cuál es el más moderno"* sino *"qué problema tengo enfrente"*.

## El caso del compilador

Volvamos al experimento del principio. ¿Puede una sola persona hacer el trabajo de un equipo de 5 a 10 ingenieros de uno o dos años en un mes? Apliqué ELP a la construcción del compilador de [Kaikai](https://kaikai-lang.org), un lenguaje funcional autocompilable con efectos algebraicos y emisión final con LLVM. Proyecto desde cero, partiendo con visión de producto y diseño general escritos desde el día cero.

Las cifras al día 27 del experimento (20 de abril al 17 de mayo de 2026) salen de `git log`, de `gh pr list` y del archivo TSV de cada lane:

| Indicador | Valor |
|---|---|
| Tiempo total | 27 días corridos |
| Commits | 1.621 |
| Pull requests integrados | 359 |
| Issues cerrados | 252 |
| Versiones publicadas | v0.1.0 a v0.72.1 |
| Peaks de commits en un día | 135 (2 de mayo) |
| Auditorías de fase 0 | 10 |
| Retros de lane producidas | 179 |
| Peak de lanes paralelas | 3 simultáneas |

La distribución de los commits dice algo más interesante que el conteo:

```
   funcionalidades  ████████████████████   68%   feat + módulos del compilador
   docs             ████                   14%   auditorías, retros y diseño
   fix              ██                      7%   arreglos
   release/ci       █                       5%   bump, release, integración continua
   test             █                       3%
   refactor         █                       3%
```

**14% de documentación es alto para un compilador**, y eso que el porcentaje bajó a medida que crecía la base. Es justo el conjunto de datos empíricos que ELP recomienda: auditorías, retros, documentos de diseño por funcionalidad, objetivos de honestidad. En valor absoluto son 233 commits de documentación. **7% de arreglos es bajo**. Las funcionalidades llegaron limpias gracias a controles de calidad obligatorios: autocompilación byte a byte desde el día 1, pruebas locales antes de subir los cambios, retro antes del PR.

Pagar por adelantado el 14% de documentación es lo que mantiene el 7% de arreglos.

¿Cuánto cuesta normalmente algo así? Comparativas públicas: Roc unos 5 años de investigación, Koka más de 10 años académicos, Effekt unos 5 años con equipo de doctorados, Crystal unos 3 años con su equipo principal. El equivalente humano para alcanzar el mismo alcance técnico está en el orden de **3 a 4 ingenieros expertos en compiladores con experiencia, durante 12 a 18 meses, entre USD 1,0 y 1,5 millones en remuneraciones**.

Una cosa que yo dije cuando empecé este proyecto es: "la IA ya se leyó todos los papers que necesito". Y es esa [inteligencia potencial](/blog/lnds/2012/04/17/sobre-la-inteligencia-del-coyote/) envasada la que estoy aprovechando.

ELP llegó al mismo punto en 27 días, con un humano (el arquitecto), un agente integrador y lanes paralelas. La meta original es el 21 de mayo y aún quedan cuatro días de margen para cerrar la versión que cubre el 90% del lenguaje.

Esto es [método](/blog/lnds/2012/05/19/conoces-a-pin-pon/). Cada issue descartado, cada lane cerrada como negativa es descartada por auditoría empírica antes de implementarse y está documentada con su retro. Cada fallo nos entrega datos.

## Cuándo aplicar ELP, y cuándo no

ELP encaja cuando el proyecto va a durar meses, hay visión y diseño escritos, principios arquitectónicos fijados, alcance para varios PRs en paralelo sobre zonas ortogonales, y el arquitecto puede dedicar 10 a 20 minutos por brief.

ELP **no** encaja para prototipos desechables, arreglos urgentes en producción, equipos sin pruebas ni integración continua maduras (ELP amplifica lo que ya existe; sin un pipeline sólido amplifica el caos), o proyectos sin visión de producto. ELP no inventa el qué construir, lo orquesta.

Si vas a probarlo, lee el documento completo del método. Está publicado en [github.com/lnds/elp](https://github.com/lnds/elp), bajo licencia CC BY 4.0.

## El método importa más que el modelo

Los CEOs siguen vendiendo el próximo modelo. *GPT-7, Claude 5, Gemini Ultra Pro Max.* Como si el techo de lo que podemos hacer estuviera en los parámetros. En mi opinión no es así, o al menos no es lo principal. Yo creo que el techo está en la disciplina con la que organizas el trabajo alrededor del modelo.

No te estoy vendiendo pomadas,pero te lo planteo desde mi experiencia de estas semanas: aunque cambie el modelo, el método es lo que termina haciendo la diferencia entre un equipo que rinde y un equipo que se ahoga. Entre un compilador funcional en cuatro semanas y un mes de *vibe coding* que termina en código heredado e inmantenible.

Por eso creo que las preguntas interesantes no son *cuándo llega la AGI* ni *qué modelo es el más potente*, sino otras dos mucho más concretas: ¿sirve la IA en su estado actual para completar tu proyecto? Y si la respuesta es sí, ¿cuál es el método que te ayuda a alcanzar ese objetivo?

Con [ELP](https://github.com/lnds/elp) puedes medirlo y sacar las respuestas tú mismo.

---

*Si te interesa seguir esta línea, suscríbete al boletín en [newsletter.lnds.net](https://newsletter.lnds.net) y cuéntame qué método estás usando. Las retros también valen para los lectores. Y si quieres apoyar el trabajo y conversar más a fondo sobre estos temas, te invito a sumarte a [mi Patreon](https://www.patreon.com/lnds).*
