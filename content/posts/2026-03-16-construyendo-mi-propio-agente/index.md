+++
date = '2026-03-16T09:00:00-03:00'
title = 'Construyendo mi propio agente'
slug = "construyendo-mi-propio-agente"
tags = ["ia", "agentes", "claude", "desarrollo", "productividad", "podcast"]
draft = false
+++

Hace poco más de un mes escribí sobre [el poder de los agentes](/blog/lnds/2026/02/04/el-poder-de-los-agentes). En ese post contaba cómo estaba experimentando con OpenClaw, un agente de código abierto que prometía ser "la IA que realmente hace cosas". También hablaba sobre la maestría necesaria para orquestar estas herramientas, la brecha digital que generan, y los riesgos de seguridad que implican.

Actualización: dejé de usar OpenClaw y decidí construir mi propio agente.

## El problema con OpenClaw

No voy a endulzar esto: OpenClaw es un desastre.

Primero el rebranding (ClawdBot, luego Moltbot, ahora OpenClaw) trajo confusión, oportunidades de phishing, y extensiones falsas en marketplaces. La extensión "ClawdBot Agent" que apareció en VS Code no era del equipo oficial. Los 37 skills maliciosos en ClawdHub tampoco.

Después está la seguridad. El CVE-2026-25253 que mencioné en el post anterior -- CVSS 8.8, ejecución remota con un click -- fue solo la punta del iceberg. Desde que lo instalé hasta que lo desinstalé, pasaron tres parches críticos más. La arquitectura fundamental del proyecto tiene problemas de diseño que hacen que cada plugin sea un vector de ataque potencial. No hay sandboxing real entre skills, no hay validación robusta de entrada, y el sistema de permisos es un chiste.

Pero lo que me terminó de convencer fue algo más prosaico: la calidad del código. Contribuciones aceptadas sin review, tests que no cubren los caminos críticos, documentación desactualizada que contradice el comportamiento real. La comunidad es entusiasta, sí, pero entusiasmo sin disciplina produce software frágil. Y cuando ese software tiene acceso a tu Telegram, tu WhatsApp, y puede ejecutar comandos en tu máquina... no, gracias.

## Si quieres algo bien hecho

Así que hice lo que cualquier ingeniero con demasiados proyectos personales haría: construí el mío.

No fue una decisión impulsiva. Tomé notas de lo que funcionaba y lo que no en OpenClaw.

Sabía qué necesitaba: un agente personal que pudiera conversar conmigo por Telegram, que tuviera memoria persistente, que pudiera ejecutar tareas programadas, y sobre todo, que yo pudiera auditar y controlar completamente.

La base es el [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview), el framework de Anthropic para construir agentes. Es relativamente nuevo, pero sólido. Un solo proceso Python asincrónico, sin la complejidad innecesaria de microservicios o colas de mensajería externas.

## La arquitectura

El diseño es simple y deliberado. Un bus de mensajes conecta los canales de entrada (CLI para desarrollo, Telegram para uso diario) con un loop principal que alimenta al orquestador. El orquestador envuelve el Agent SDK y gestiona el contexto, las sesiones y las herramientas disponibles.

{{< figure src="arquitectura.jpg" caption="Arquitectura del agente personal" >}}

Lo que hace diferente a este agente de un simple wrapper de LLM es la **personalidad configurable**. El contexto se construye a partir de archivos markdown que definen quién es el agente, cómo se comporta, qué sabe del usuario, y qué herramientas tiene disponibles. Estos archivos son editables, incluso el propio agente, con mi autorización, puede modificarlos durante la conversación, lo que le permite actualizar su memoria y adaptar su comportamiento.

Las herramientas se implementan como servidores MCP (*Model Context Protocol*). Cada herramienta es un módulo independiente con su propio esquema de entrada y manejador. El agente tiene acceso a memoria persistente indexada con búsqueda de texto completo, un sistema de tareas programadas, y módulos opcionales para generación de voz, imágenes y análisis de video.

El sistema de *skills* permite definir capacidades especializadas en archivos markdown con metadatos YAML. Cada skill puede especificar su propio modelo, herramientas permitidas, y se activa por comandos explícitos o detección de palabras clave en el mensaje.

¿Lo más importante? Es un solo proceso. Sin Redis, sin Kubernetes, sin infraestructura sobredimensionada. Un proceso Python que arranca, carga su configuración, y escucha. Si se cae, lo reinicio. Si quiero agregar una herramienta, escribo un handler y lo registro.

## Los robots del amanecer

Pero un agente personal es solo el principio. La verdadera gracia está en lo que puedes construir *sobre* él.

Una de las herramientas que integré es un generador de podcasts. El agente investiga un tema, estructura un guión con dos presentadores (con personalidades distintas, uno entusiasta y otro analítico), y genera el audio usando síntesis de voz multilocutor. El resultado es un podcast completo, generado íntegramente por IA.

Así nació **Los Robots del Amanecer**, un podcast sobre tecnología e inteligencia artificial con presentadores virtuales. El primer episodio ya está disponible y cubre las noticias más relevantes de la semana en IA y tecnología.

{{< figure src="lrda.jpeg" caption="Los Robots del Amanecer: un podcast generado íntegramente por IA" >}}

Yo lo creé para tener una manera cómoda y entretenida de estar al día en estas noticias, el agente también me genera un resumen diario de las noticias de política (nacional e internacional) y actualidad, que probablemente también comparta en algún momento. También reduzco el ruido de redes sociales y las fake news pues me aseguro de curar las fuentes.

Por ahora pueden escuchar el primer podcast mencionado en [lrda.ai](https://lrda.ai), o buscarlo en [Spotify](https://open.spotify.com/show/4IEVycPrII5zaA9N2b6njd) y [YouTube](https://www.youtube.com/channel/UCAwb2_EnsYvAjOhHrvC12nA).

¿Es perfecto? No. Pero es un punto de partida, y cada episodio es una iteración. Lo interesante no es el producto final, sino el proceso: un agente que puede investigar, escribir, y producir contenido multimedia de forma autónoma, que te llega y te mantiene al día, incluso de forma entretenida sin el ruido y la toxicidad de las redes sociales.

## El punto

Construir mi propio agente no fue solo un ejercicio técnico. Fue una declaración de principios.

En el post anterior hablaba del espectro de actitudes hacia la IA, de Butlerianos a Cyborgs. Construir tu propio agente es posicionarte en un punto específico de ese espectro: el de quien usa la tecnología sin entregarse a ella. El de quien entiende que las herramientas son tan buenas como quien las opera, y que la mejor forma de entender una herramienta es construirla.

No todos necesitan construir su propio agente. Pero todos deberían entender cómo funcionan. Porque la alternativa es ser usuario pasivo de agentes que otros construyeron para sus propios intereses.

Y eso, como les dije la vez pasada, da miedo.

---

*Si este tipo de contenido te aporta valor, considera apoyar mi trabajo en [Patreon](https://www.patreon.com/lnds). Tu apoyo me permite seguir escribiendo y experimentando con estas tecnologías para compartir lo que aprendo.*
