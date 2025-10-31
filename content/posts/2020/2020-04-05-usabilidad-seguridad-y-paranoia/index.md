---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Usabilidad, Seguridad Y Paranoia"
subtitle: ""
summary: "Zoom y la gestión de riesgos en tiempos de pandemia"
authors: [admin]
tags: [zoom, seguridad, ciberseguridad, "gestión de riesgos", usabilidad]
categories: [seguridad, usabilidad, negocios]
date: 2020-04-05T08:38:01-04:00
lastmod: 2020-04-05T08:38:01-04:00
featured: false
draft: false
math: true
# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "Paranoimia, The Art of Noise"
  focal_point: ""
  preview_only: false
  placement: 3


# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

> Relax\
You're quite safe here\
-- Paranoimia, The Art of Noise

Hace unos ocho o nueve años atrás ibamos a realizar la migración de [SVN](https://subversion.apache.org/) a [GIT](https://git-scm.com/) en mi trabajo.

Hicimos algunas estimaciones y calculamos que en un par de semanas podíamos migrar todos nuestros repositorios a este nuevo [gestor de versiones distribuido](/blog/lnds/2010/07/11/control-de-versiones-distribuido/).

Dado lo anterior solicité que se instalara GIT en los computadores de los miembros del equipo de desarrollo. La sorprea fue que el equipo de informática interna se negó, indicando que no podían instalar software "con serias vulnerabilidades de seguridad" en nuestros equipos.

La respuesta fue para mi increible, tuve que intervenir, pero el daño ya estaba hecho, y tuve que dar explicaciones y dar explicaciones a varios niveles, asumiendo la responsabilidad si algo pasaba por usar GIT.

La verdad es que tenían un punto, si revisan CVE[^5] verán que GIT ha tenido serias vulnerabilidades de seguridad en el pasado: <https://www.cvedetails.com/vulnerability-list/vendor_id-4008/GIT.html>.

Entonces, ¿debíamos de dejar de aprovechar esta poderosa herramienta por esos motivos?

He escuchado anécdotas de empresas que han bloqueado el acceso a todos los sitios terminados en HUB, para evitar el acceso a sitios porno, esto por supuesto generó que no se pudiera acceder a [GitHub](https://www.github.com/), la fuente definitiva de los principales proyectos open source en el mundo.

Cuando quieres innovar o incorporar un nuevo software a tu set de herramientas te encuentras con que la respuesta estándar de casi todos los sysadmin, departamentos de informática es un enorme NO. Y la excusa es que "auditoría, o seguridad de la información, no lo permiten".

![](no.jpeg)

La realidad no es así. Si hablas con tus auditores o gestores de riesgo, ellos te dirán que en realidad lo que corresponde es gestionar el riesgo. Si declaras los riesgos y defines medidas mitigatorias, puedes usar cualquier herramienta que se te de la gana. Es la clásica ecuación: a mayor libertad, mayor responsabilidad.

En mi experiencia, las personas que menos saben de gestión de riegos son las más paranoicas con la seguridad de información. Y esa paranoia hace daño, porque afectan la continuidad del negocio finalmente.

Hay una relación inversa entre usabilidad y seguridad. Y la usabilidad es vital para el éxito de tu negocio.

Si tuvieramos que expresarlo en una ecuación sería algo así:

$$Usabilidad = \frac{k}{Seguridad}$$

A mayor seguridad menos usabilidad.

Y adivinen qué, hay otra ecuación importante:

$$Producto = F(Usabilidad)$$

O, como lo expresa [Steve Yegge](https://en.wikipedia.org/wiki/Steve_Yegge)[^1]:

> [...] argumentaré que la _Usabilidad_ es realmente más importante que la Seguridad porque llevando Usabilidad a cero significa que no tienes producto, mientras que dejando Seguridad en cero puedes tener un producto razonablemente seguro tal como la Playstation Network.

Yegge se refiere al fiasco de seguridad de 2011 de la Playstation Network[^2] que revelaba datos personales de unos 77 millones de usuarios.

Hay personas que dicen que esto es inaceptable, son los que llevan la seguridad a infinito, y por ende la usabilidad a cero.

Estos son los que yo llamo paranoicos de la seguridad de información, y este es su efecto:

$$\lim_{paranoia\to\infty} Usabilidad = 0$$

Debemos combatir esa paranoia, porque si seguimos ese camino nos quedaremos sin internet.

Relájense un poco.

## Zoom y la gestión de riesgos

> How do I get\
How do I get to sleep\
Please let me sleep\
Po-po-poetry, that'll work\
-- Paranoimia, The Art of Noise

[Zoom](https://zoom.us/), la plataforma de teleconferencia, se ha vuelto inmensamente popular en estos días pues aparece como una excelente herramienta para realizar video conferencias. En estos momentos está siendo usada por empresas, escuelas, universidades, y grupos de amigos para comunicarse en estos días de cuarentena preventiva y aislamienteo social, productos de la pandemia de Corona Virus.

El servicio aumentó en un 67% su cantidad de usuarios activos a mediados de marzo. En la bolsa el precio de su acción subió en un 263%[^3].  Todo este éxito viene aparejado de la paranoia por la seguridad y la privacidad. Algunos incidentes del pasado reflotaron, todo lo que atrae a abogados expertos en acciones civiles, bloggers aficionados al clickbait y por supuesto crackers, hackers y juaquers[^4].  

Esto también empieza a preocupar también a organizaciones no gubernamentales preocupadas de la privacidad y a ciber activistas. Estas últimas preocupaciones son legítimas y muy adecuadas, siempre es bueno tener una visión crítica de los servicios que vamos a usar, pero no podemos ser como esas personas que ante una innovación parten con un gran NO a priori. Lo que debemos hacer es un análisis de riegos, evaluar, y en base a antecedentes actualizados tomar decisiones.

Hagamos un poco de análisis de riesgo para Zoom, y partamos con un aspecto comparativo en cuanto a vulnerabilidades, para empezar a magnificar el problema.

¿Saben ustedes cuantas vulnerabilidades de seguridad salen reportadas en [CVE](https://www.cvedetails.com/) [^5] para Google Chrome?

La respuesta es 1858 desde 2008: <https://www.cvedetails.com/product/15031/Google-Chrome.html?vendor_id=1224>

En 2019 se publicaron 177 vulnerabilidades para este navegador web: <https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-15031/year-2019/Google-Chrome.html>

Veamos que pasa con Zoom, desde 2004 se han publicado 5: <https://www.cvedetails.com/vendor/2159/Zoom.html>

En 2019 se publicaron 2: <https://www.cvedetails.com/vulnerability-list/vendor_id-2159/year-2019/Zoom.html>

Bien, parece que Zoom no está tan mal en esta dimensión, pero hay que seguir monitoreando esto, la clave acá es: si vas a usar Zoom actualiza en forma permanente el cliente en tu PC, o la app en tu móvil, para que te mantengas al margen de las fallas que pueden ser explotadas por ciber delincuentes.

Han habido una serie de reportes de fallos de seguridad, los que no analizaré en este post, les dejo este [artículo en inglés](https://blog.rapid7.com/2020/04/02/dispelling-zoom-bugbears-what-you-need-to-know-about-the-latest-zoom-vulnerabilities/amp/)[^6] que explica como se resolvieron varios de ellos, como otros son exageraciones o simplemente mala leche, la que por supuesto alimenta la paranoia: <https://blog.rapid7.com/2020/04/02/dispelling-zoom-bugbears-what-you-need-to-know-about-the-latest-zoom-vulnerabilities/amp/>.

Nuevamente, acá el consejo es mantener actualizada las aplicaciones nativas de Zoom, o usar el cliente en el navegador (si eres paranoico, no uses Chrome :wink:).

Por otro lado, hay un punto relevante que tiene que ver con la encriptación punto a punto o End to End (E2E).
Acá es efectivo que Zoom no garantiza aún un nivel de encriptación que permita comunicaciones confidenciales. El consejo por ahora es: no hables de temas confidenciales, o sensibles, por Zoom. Úsalo para actividades que normalmente harías en forma pública o semi pública. De todas maneras Zoom provee versiones on premise de sus servidores, para clientes enterprise, donde esto puede ser reforzado (en las redes LAN o WAN, o con VPNs)[^6], de hecho Zoom tenía como foco principal para dar servicios de tele conferencias a empresas, donde los niveles de seguridad que se pueden implementar son más estrictos.

El último aspecto es la privacidad. Acá han habido reclamos paranoicos como que Zoom envía datos al gobierno chino, o comparte con la NSA o el FBI, los que son exageraciones o interpretaciones distorsionadas de ciertos hechos. Efectivamente el fundador es de origen chino, y Zoom tiene empleados de esa nacionalidad, y tiene servidores en China, pero también en USA y seguramente otras partes del mundo, y está obligado a cumplir con las regulaciones y leyes de esas naciones. En esto no es diferente de otras empresas, como Microsoft, Google o Amazon. Sobre esto no puede ni podemos hacer mucho, salvo buscar por medios democráticos que las legislaciones cambien y protegan nuestra vida privada.

El artículo en [^6] aborda varios de estos puntos, no me extenderé mucho en este aspecto. Pero la privacidad es algo importante, y debes revisar siempre los términos de servicio antes de usarlo. Si no te satisfacen, o sientes que la empresa que presta el servicio no te entrega confianza, bueno, la decisión es tuya. Haz una análisis de riesgo y pon en la balanza tus necesidades versus lo que te ofrece y te restringe la herramienta que vas a usar. Pero si vas a partir con un NO a priori, sin analizar, puede que estés perdiendo oportunidades por culpa de una visión paraonica.

## Reflexiones finales

> How do I, how am I\
Gonna get to sleep\
Trust me, trust me....\
-- Paranoimia, The Art of Noise

Para terminar quiero hacer algunos comentarios a propósito de la sobre reacción sobre la seguridad de Zoom.

Me llama la atención lo rápido que escaló la paranoia con Zoom, por ejemplo, la página en español de Wikipedia sobre Zoom parte enumerando la información que Zoom recopila, perdiendo la objetividad que debería caracterizarla. Claramente hay una edición sesgada ahí.

Hay una serie de influencers que han propuesto soluciones muy malas. He visto Tweets que promueven usar alternativas al voleo, sin análisis comparativo de riesgos y usabilidad.

¿Sabemos si Zoom es más seguro que Microsoft Teams, o Slack, o Google Meet? ¿Hay comparativas? ¿Hacemos comparativas antes de elegir una herramienta?

Se ha planteado el uso de una herramienta opensource: Jitsi Meet, pero es una solución que aún tiene problemas de usabilidad y seguridad, por ejemplo, cualquiera con la URL de una conferencia en Jitsi puede ingresar a esta, lo que permite el fenómeno del bombing, o simplemente espiar la conversación. Otro ejemplo un issue sobre un XSS que no está claro si ha sido resuelto por esta plataforma: <https://community.jitsi.org/t/xss-injection-on-jitsi-meet/15336/11>. Si bien puedes crear tus propios servidores Jitsi, lo probé y requiere bastante configuración y las opciones que vienen fuera de la caja no son suficientemente seguras aún.

Creo que lo que falta en el caso de Zoom es más análisis de escenarios de riesgo y gestión, hay mucha crítica, mucha paranoia, pero poco análisis.

Zoom ha sido exitoso en muy corto tiempo, y es un objetivo de muchos millones de dólares, así que será blanco de ataques de juaquers, ciber delincuentes, abogados en busca de dinero de acciones civiles, y de bloggers aficionados al clickbait. Las ONG y los gobiernos le exigirán cambios a sus políticas de seguridad y los expertos de ciber seguridad estarán atentos a que se corrijan los fallos y se mejoren los protocolos. Creo que si Zoom sigue con la actitud que ha mostrado hasta ahora, logrará robustecerse.

Recuerdo el caso de Microsoft, establecieron una política estricta de ciberseguridad y mejoraron en robustecer sus productos. Zoom ha respondido rápido, ha establecido mitigaciones rápidas y estableció un freeze de desarrollo de 90 días para corregir fallos de seguridad[^7], esto es lo que deben considerar también en su análisis de riesgo.

Personalmente creo que se puede usar  Zoom con tranquilidad, pero, si están compartiendo cosas muy confidenciales problamente no sea la plataforma adecuada.

Pero les cuento algo, no sé, ni tengo modo de saber, si hay una alternativa que sea más segura que Zoom. Y  los expertos en seguridad serios tampoco pueden garantizar nada al respecto.

Así que hay que gestionar riesgos, asumirlos, tomar medidas mitigatorias e ir midiendo, observando y estando al día de lo que ocurre.

Por ahora, relájense con Zoom, ellos se están haciendo cargo, hay cosas más importantes que nos deberían quitar el sueño.

{{<youtube 6epzmRZk6UU>}}

[^1]: [Stevey's Google Platforms Rant](https://gist.github.com/chitchcock/1281611), en este post Yegge usa la palabra Accesibility, pero como este término tiene otro uso más específico he decidido reemplazarlo por Usabilidad en este contexto.

[^2]: [2011 PlayStation Network outage](https://en.wikipedia.org/wiki/2011_PlayStation_Network_outage), este incidente le significó a Sony pérdidas, cambiar sus políticas de privacidad, tuvo que responder ante varios gobiernos e implementar diversas medidas de seguridad para asegurar la continuidad de su servicio. A diciembre de 2019 se estima que tenía unos 103 millones de usuarios activos, fuente: <https://www.sie.com/en/corporate/release/2020/200107.html>.

[^3]: Fuente: <https://markets.businessinsider.com/news/stocks/zoom-stock-price-surged-coronavirus-pandemic-video-work-from-home-2020-3-1029023594>

[^4]: Para mi un hacker no es un ciberdelincuente, al contrario, puede ser visto como una persona entusiasta de la programación y la tecnología, que logra cierto nivel de habilidad en el campo, y tiene una ética relacionada con la apertura de la información y del software. Por otro lado un cracker es en mi opinión el verdadero ciber delincuente, que usa vulnerabilidades de los servicios o del software para cometer delitos como el robo de información, fraudes económicos, ciber extorsión, robo de dinero, o suplantación de identidad. Por último el juaquer es un término que uso de forma despectiva para ciertos personajes que no son ni hackers ni crackers, pero que aparentan serlo, sin tener las capacidades ni los conocimientos básicos.

[^5]: CVE es un acrónimo para Common Vulnerabilities and Exposures (vulnerabilidades y expuestos comunes), corresponde a una lista de información registrada sobre vulnerabilidades de seguridad conocidas de diversos software y servicios. Pueden leer más sobre esta lista y su origen acá: <https://es.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures>

[^6]: <https://blog.zoom.us/wordpress/2020/04/01/facts-around-zoom-encryption-for-meetings-webinars/>

[^7]: [A message to our users](https://blog.zoom.us/wordpress/2020/04/01/a-message-to-our-users/) post del CEO de Zoom, Eric S. Yuan.

