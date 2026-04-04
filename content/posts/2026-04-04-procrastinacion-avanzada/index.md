+++
date = '2026-04-04T09:00:00-03:00'
title = 'Procrastinación avanzada'
slug = "procrastinacion-avanzada"
tags = ["productividad", "ia", "herramientas", "reflexion", "vibe-coding"]
draft = false
+++

Hay una forma de procrastinación que es especialmente traicionera porque se disfraza de trabajo. No es quedarse viendo Netflix. No es scrollear Bluesky. Es pasar tres horas configurando el sistema de gestión de tareas que te va a ayudar a ser productivo.

Seguro lo has hecho, yo la he practicado durante décadas, y me temo que acabo de alcanzar su forma más sofisticada.

Es lo que yo llamo "procrastinación avanzada".

{{< figure src="clock.jpg" alt="Reloj en la fachada de un edificio" caption="El tiempo pasa igual, configures o no configures. Foto de [John Hult](https://unsplash.com/@johnhult) en [Unsplash](https://unsplash.com/photos/GJOjFMjeVpQ)." >}}

## La era GTD

En algún momento de los 2000, Getting Things Done de David Allen se convirtió en la biblia de una generación de trabajadores del conocimiento que se sentían abrumados. La promesa era simple: si capturas todo, lo organizas bien, y revisas el sistema regularmente, tu cerebro queda libre para pensar en lugar de recordar.

La promesa era convincente. El problema era el sistema en sí.

Probé de todo, Things, Remember The Milk, Notion, montones de libretas de notas, o agendas inteligentes, ¡hasta me compré el notebook "inteligente" de Evernote!. Luego un sistema de carpetas en texto plano porque "lo simple es mejor". Después Obsidian con plugins kanban. Después de vuelta a algo más simple. Cada migración tenía su justificación racional: esta herramienta tiene mejor captura, aquella tiene mejor revisión semanal, la otra se sincroniza mejor con el calendario.

¿Cuánto tiempo pasé gestionando el sistema de gestión del tiempo?

Pero al menos en esa época la trampa era obvia en retrospectiva. Configurar cualquier herramienta durante horas un domingo por la tarde mientras las tareas reales esperaban era claramente un autoengaño. El disfraz era fino.

## La era del setup

Después llegó la era del setup perfecto. El entorno de desarrollo como obra de arte.

Abandonar los IDEs y retomar Vim, para no abandonar el terminal. Después Neovim, una verdadera madriguera de conejo que te atrapa encontrando el setup perfecto, y el script en Lua maravilloso que resuelve todos tus problemas y te integra con tu herramienta GTD, por supuesto. Después descubres los dotfiles y stow. El repositorio `~/.dotfiles` se convirtió en un proyecto en sí mismo, con sus propias decisiones de arquitectura, sus propias refactorizaciones.

Miro el historial de mi repositorio de dotfiles y veo sesiones enteras de trabajo: rediseñar la barra de estado de tmux con colores inspirados en WezTerm, agregar detección de sesiones remotas vía Tailscale, crear atajos de teclado para cambiar entre ventanas de Ghostty y paneles de tmux, construir un sessionizer personalizado. Cada commit tiene su lógica. Cada feature tiene su uso eventual.

```
feat: redesign tmux status bar with WezTerm-style layout and remote-aware colors
feat: add SSH remote sessions via Tailscale
feat: shortcut list with Cmd+Shift+P and Cmd+Space+Space
feat: replace session scripts with sesh, remove github/betterdisplay widgets
feat: show claude-code instead of version number in status-left
```

Todo eso lo hice. Todo eso lo hice con Claude Code.

Ahí está la trampa nueva.

## Token anxiety

ThePrimeagen publicó hace poco un video llamado "What is wrong with us?" que debería ser de visualización obligatoria para cualquiera que esté viviendo la fiebre de los agentes de IA.

{{<youtube ZJEnQOsMtsU>}}

Empieza describiendo algo que los desarrolladores reconocerán: ese estado de concentración profunda donde aunque no estés frente al computador, tu cerebro sigue trabajando en el problema. El momento en la ducha donde de repente ves la solución. Esa especie de vibración sorda detrás de las orejas que te acompaña aunque estés cenando con tu familia.

Pero ahora, dice ThePrimeagen, eso ya no requiere un problema difícil. Los agentes siempre están corriendo. Siempre hay algo procesando. La vibración es permanente.

Cita un [artículo](https://writing.nikunjk.com/p/token-anxiety) sobre lo que llaman "token anxiety" en San Francisco: un amigo del autor se fue de una fiesta a las 9:30 del sábado en la noche, sin estar cansado ni enfermo. Quería volver con sus agentes. Nadie preguntó. La mitad de los que quedaban en la fiesta pensaba lo mismo. La otra mitad probablemente estaba revisando el progreso de sus agentes desde el teléfono.

El CEO de Y Combinator anunció que dejó el alcohol por Claude Code. Necesita tener el cerebro pristino para poder escribir 10.000 líneas de código al día.

Hay gente en el Bay Area gastando mil dólares al día en tokens. Múltiples agentes corriendo en paralelo. Ideas generando ideas que generan más ideas. Todo en su versión más mediocre, pero todo avanzando.

> "It's almost like I'm not really accomplishing the things I want to accomplish, but I'm building more than I've ever built in my life. 10,000 lines of code in a day. Easy. But that doesn't mean those 10,000 lines were any good. It doesn't mean I feel satisfied afterwards, it doesn't even mean I built the right thing."

Leí eso y sentí algo incómodo.

## El disfraz más sofisticado

Lo que hace que la procrastinación con IA sea más peligrosa que las versiones anteriores es que los resultados son reales. No es solo que estés *configurando* el sistema. Es que el sistema *funciona*. El código se escribe. Las features aparecen. Los commits se acumulan.

Mi barra de tmux está genuinamente bien diseñada. El sessionizer con integración a Tailscale es muy útil. El script que muestra el proceso activo en el panel es algo que uso todos los días.

Pero mientras estaba construyendo todo eso con Claude Code, ¿qué no estaba escribiendo? ¿Qué posts quedaron sin terminar? ¿Qué proyectos reales quedaron en pausa mientras optimizaba el entorno en el que supuestamente iba a trabajar en esos proyectos?

La procrastinación GTD al menos era ineficiente. Pasabas tiempo configurando y el resultado era solo configuración. Fácil de diagnosticar, fácil de corregir.

La procrastinación con IA es eficiente. Produces cosas reales. Solo que puedes producir las cosas equivocadas con una velocidad impresionante.

ThePrimeagen lo formula bien: **el problema nunca fue la programación. El problema fue siempre elegir el problema correcto**. Y ahora tenemos herramientas que nos permiten no elegir, porque podemos tener cuatro ideas corriendo al mismo tiempo. Todas mediocres. Todas creciendo. Ninguna terminada.

## La racionalización permanente

Lo que tienen en común la era GTD, la era del setup perfecto y la era de los agentes es la racionalización. Siempre hay una razón convincente para seguir configurando en lugar de hacer.

Con GTD: "si el sistema no está perfecto, voy a perder cosas importantes." Con dotfiles: "si el entorno no está optimizado, voy a trabajar más lento en todo lo que venga después." Con agentes: "esto me va a ahorrar semanas de trabajo más adelante."

Las tres racionalizaciones son parcialmente verdaderas. Eso es lo que las hace resistentes. Un sistema de tareas razonablemente bueno sí ayuda. Un entorno de desarrollo cómodo sí hace diferencia. Los agentes bien configurados sí aceleran el trabajo.

El problema no es la premisa. El problema es el gradiente. Hay un punto donde el retorno marginal de mejorar el sistema es menor que el costo de no hacer el trabajo, y es sorprendentemente fácil cruzar ese punto sin notarlo.

## Lo que no ha cambiado

ThePrimeagen termina su video con un consejo que se da a sí mismo, retroactivo a 2009, cuando se quedaba despierto noches enteras construyendo su startup en NetBeans escribiendo PHP:

> "One extra feature in your calendar app is not worth skipping out on some good times with your friends. Hard work got me to where I am now, but it is not who I am."

Veinte años después, misma trampa, diferente herramienta.

Lo que no ha cambiado es la naturaleza del trabajo que importa. Sigue siendo la misma: entender el problema correcto, pensar antes de ejecutar, elegir qué no hacer. Eso no lo automatiza ningún agente. Al contrario, los agentes hacen más urgente esa habilidad, porque la capacidad de ejecutar ya no es el cuello de botella.

Puedo tener cinco cosas corriendo en paralelo. La pregunta es si alguna de las cinco era la que debía estar haciendo.

Estoy escribiendo esto mientras mi tmux tiene cuatro paneles abiertos y Claude Code está corriendo en uno de ellos, esperando instrucciones.

El disfraz es buenísimo.

---

*Si este post te resonó, puedes suscribirte al [newsletter de La Naturaleza del Software](https://newsletter.lnds.net). O compartirlo con alguien que también tiene demasiados agentes corriendo.*
