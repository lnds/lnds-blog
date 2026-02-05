+++
date = '2026-02-04T21:30:00-03:00'
title = 'El Poder de los Agentes'
slug = "el-poder-de-los-agentes"
tags = ["ia", "agentes", "claude", "desarrollo", "productividad"]
+++

Mientras escribo esto, tengo dos agentes de Claude trabajando en un proyecto personal de código abierto. Uno está revisando vulnerabilidades y problemas de arquitectura. El otro está escribiendo un par de features nuevas. Y sí, hay un tercer agente ayudándome a estructurar y corregir este post.

No es ciencia ficción. Es miércoles.

Suena a privilegio. Y lo es. Pero quédate, porque esta historia no termina donde crees.

Llevo meses usando Claude Code y hay algo que se hace evidente con el tiempo: la calidad del output depende directamente de tu maestría como orquestador. No basta con pedirle cosas a la IA. Hay que saber *qué* pedirle, *cómo* estructurar el contexto, y *cuándo* intervenir.

Los primeros días con estas herramientas pueden ser frustrantes. No tanto porque falle en escribir código, sino porque a veces hace demasiada reingeniería, tiende a repetirse mucho. Es muy junior, y tienes que empezar a ponerle control.

Y puede pasar mucho rato sin que avances, hasta que te pongas a estudiar y aprender a usar bien la herramienta. Aprender a crear agentes, armar skills, iterar bien en el planning mode, compartir experiencia con colegas, que te inspiran para probar algo nuevo. En realidad se puede poner bastante entretenido.

Hasta que da error 500, porque Anthropic tiene problemas con su infra.

Jajaja, hay que volver a programar a mano...

¿O no?

Hace poco descubrí que puedes probar con otros modelos tan buenos como los de Anthropic, son open source. El problema es el costo (esos [varios tokens de más](/blog/lnds/2025/07/30/por-unos-pocos-tokens-más)). Pero he estado experimentando con [Synthetic](https://synthetic.new/) y [OpenCode](https://opencode.ai/), como alternativa (para proyectos personales).

Lo interesante es cómo vas aprendiendo y poco a poco, con [pasos de cierva](/blog/lnds/2025/10/31/mapas-o-brujulas) vas adquiriendo maestría.

Un colega me compartió un agente que revisa nuestros "pull requests". La "gracia" de este agente es que está inspirado en Linus Torvalds. Con su estilo directo, sin filtros, que te dice exactamente qué está mal con tu código. Sin rodeos, sin "quizás podrías considerar", sin feedbacks edulcorados. Te dice que tu función es una bazofia y por qué.

Funciona la raja!

{{< figure src="licutus.jpg" caption="Linus Torvalds, versión agente revisor de código" >}}

No porque la IA sea mágica, sino porque alguien entendió cómo configurarla para una tarea específica con un tono específico. El mismo modelo que puede escribirte poesía cursi puede destrozar tu código como el creador de Linux destrozaría un driver mal escrito. Todo depende del prompt, del contexto, de la orquestación.

La diferencia entre un novato y alguien con experiencia en estas herramientas es saber orquestar.

## El laboratorio controlado

Hay una herramienta que está generando ruido últimamente: [OpenClaw](https://openclaw.ai/). Un asistente de IA de código abierto que corre local y se conecta a WhatsApp, Telegram, Slack. Puede controlar tu navegador, ejecutar comandos, leer y escribir archivos. La promesa es "la IA que realmente hace cosas" - desde gestionar tu correo hasta hacer check-in de vuelos.

Suena potente. Y lo es. También es un campo minado si no sabes lo que haces.

Hay montones de historias de terror.

El 30 de enero parchearon CVE-2026-25253, una vulnerabilidad CVSS 8.8 que permitía ejecución remota de código con un solo click. El servidor no validaba el header de origen en WebSockets. Visitabas una página maliciosa y comprometías tu gateway completo.

Pero eso no es todo. Han encontrado 37 skills maliciosos en ClawdHub, la tienda de plugins de la comunidad. Una extensión llamada "ClawdBot Agent" apareció en el marketplace de VS Code, aunque el equipo oficial nunca publicó tal extensión. Los múltiples rebrandings del proyecto (ClawdBot, luego Moltbot, ahora OpenClaw) han creado oportunidades para phishing y suplantación de identidad.

¿Significa que no hay que usarlo? No. Significa que hay que usarlo con cuidado, incluso como hobby o para experimentar.

Yo he decidido instalarlo y ver qué onda. Mi setup: un mini PC con Linux, sin acceso directo a internet, conectado solo a mi tailnet vía Tailscale. La parte peligrosa es que tengo configurado el acceso a Telegram y WhatsApp, pareados y limitados solo para mí. El entorno está sandboxed como recomienda el proyecto. Le hago auditoría en profundidad todos los días y actualizo a la última versión apenas sale. Lo tengo instalado desde el domingo.

Implementé un sistema para recordar qué cosas debo hacer, con recordatorios. Un modo para jugar ajedrez, incluso vibe codeamos con Jaime (así se llama mi agente OpenClaw, sí, es poco original, pero es un experimento, ok?): un intérprete de la notación algebraica del ajedrez, para poder pasarle las jugadas.

{{< figure src="jaime1.jpeg" caption="13:04 - La idea: programar una interfaz de ajedrez vía chat" >}}

{{< figure src="jaime2.jpg" caption="13:19 - Quince minutos después, jugando ajedrez con Jaime" >}}

Desde la idea hasta la primera jugada: quince minutos. Eso incluye que Jaime entendiera el requerimiento, generara el código del intérprete de notación algebraica, lo probara, y lo dejara funcionando. Vibe coding en su máxima expresión. Aunque como escribí en [Confía en el Proceso](/blog/lnds/2025/07/31/2025-07-31-confia-en-el-proceso), esto funciona porque hay alguien que sabe orquestar.

Como soy programador, he pensado en hacer yo mismo los plugins y tools que el agente usa. De hecho está usando una herramienta que estoy escribiendo para gestionar mis "todo list". Iré automatizando otras tareas lentamente, a medida que gane confianza en la herramienta y la herramienta gane madurez. Es principalmente un hobby, pero un hobby que trato con disciplina de producción.

Créanme que tengo mucho cuidado, pero hay cosas que pueden fallar. El prompt injection es el principal problema y no le veo solución robusta todavía. No creo que vayan a inventar un firewall semántico pronto. La clave es usar modelos grandes, que tienden a ser más seguros, pero también más caros. Con API tokens puedes gastar fácil sobre 50 dólares por día. Por eso uso [Synthetic](https://synthetic.new/), que tiene planes con tope de gasto y modelos buenos como [GLM 4.7](https://z.ai/blog/glm-4.7) y [Kimi K2.5](https://www.kimi.com/ai-models/kimi-k2-5).

Aconsejo siempre prudencia, pero no oponerse a investigar y entender estas herramientas antes de confiarles tareas críticas. Debería ser obvio, pero en el mundo del hype tecnológico, la prudencia se confunde con miedo y la experimentación controlada se confunde con atraso.

Los agentes de IA son herramientas potentes. No son magia ni son el apocalipsis. Son amplificadores de capacidad que requieren criterio para usarse bien. Estamos apenas asomándonos a un mundo nuevo, y eso me entusiasma tanto como me preocupa.

Pero hay un problema tan profundo como la seguridad de estas herramientas: el acceso.

Yo tengo recursos y conocimientos para usarlas, configurarlas, y financiar su operación. Pero la mayor parte de las personas no. Van a quedar a merced de empresas como OpenAI, que les entregarán estas herramientas a cambio de su privacidad y atención.

Si antes teníamos brecha digital, ahora esa brecha se agranda. Los que entienden orquestarán agentes que potencien su trabajo. Los que no, consumirán agentes que los distraigan con animaciones, arte barato, romances simulados, o peor: diagnósticos médicos generados por IA que reemplazan a profesionales reales.

Esto último ya está pasando en salud mental. Y da miedo.

Hace unos meses, reflexionando sobre esto, dibujé un espectro de actitudes hacia la IA. En un extremo los Butlerianos, en referencia a la Jihad Butleriana de Dune, donde la humanidad prohíbe las máquinas pensantes. En el otro, los que llamo *cyborgs*, dispuestos a integrarse con la IA. Sarah Connor representa la resistencia armada; Cypher de Matrix, el sometimiento voluntario.

{{< figure src="espectro-ia.png" caption="El espectro de la IA: de Butlerianos a Cyborgs. Publicado en mi newsletter." >}}

La IA nos va a polarizar. Ya lo está haciendo. Este será un nuevo campo de batalla intelectual y cultural. Pero me pregunto si el problema está realmente en la IA, o si nuestra actitud hacia ella es solo un síntoma de algo mayor.

Los agentes de IA son poderosos, y lo van a ser cada vez más. Mejorarán, pero ¿quiénes tendrán acceso a estos? ¿Quiénes van a entenderlos y no los van a endiosar? ¿Cuántos serán usados para engañar a las personas, o explotarlas y exprimirlas robándoles información y atención? Sí, son poderosos, pero ¿usaremos ese poder sabiamente como sociedad?

Yo prefiero imaginar un futuro distinto. Uno donde la IA no nos reemplaza, sino que colabora. Como en Star Trek, cuando Dax le pide a la computadora:

> DAX: Computadora, crea una base de datos para todas las referencias históricas a los Orbes, incluidos todos los informes de cualquier fenómeno inexplicable en el espacio bajorano.
>
> ORDENADOR: ¿Parámetros de tiempo?
>
> DAX: Diez milenios.
>
> ORDENADOR: Inicializando base de datos. La función solicitada requerirá dos horas para completarse.

{{< figure src="dax.jpeg" caption="Jadzia Dax en Star Trek: Deep Space Nine. La visión rodenberryana de la colaboración humano-máquina." >}}

Es utópico, lo sé. Rodenberryano hasta la médula. Pero es el mundo que yo vería con buenos ojos: agentes que potencian nuestro quehacer, no que nos reemplazan ni nos explotan. Herramientas al servicio de la humanidad, no al revés.

---

*Si este tipo de contenido te aporta valor, considera apoyar mi trabajo en [Patreon](https://www.patreon.com/lnds). Tu apoyo me permite seguir escribiendo y experimentando con estas tecnologías para compartir lo que aprendo.*
