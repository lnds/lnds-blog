---
title: "Arquitectura y Orquestación"
authors: [admin]
date: 2017-12-10T08:25:11-03:00
slug: "arquitectura-y-orquestacion"
draft: false
tags: ['arquitectura', 'música', 'orquestación']
image:
  placement: 3
---

En su extraordinario, y muy entretenido libro, "How Music Works"[^1],
David Byrne, se pregunta en uno de sus capítulo, sobre el rol de la
arquitectura en la forma que adquiere la música. O puesto de otra
manera, en qué grado la arquitectura del lugar, donde se interpreta la
música, influye en la estructura de la misma.

{{<figure caption="El escenario de CBGB, el club donde empezó su carrera Talking Heads" src="https://d2dspjyoh5c79p.cloudfront.net/dae07887-de0b-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Lo que escribe en aquel capítulo lo expuso en una charla TED:
[https://www.ted.com/talks/david\_byrne\_how\_architecture\_helped\_music\_evolve\#t-934161](https://www.ted.com/talks/david_byrne_how_architecture_helped_music_evolve#t-934161)

Este es el video de la misma:

{{<ted "david_byrne_how_architecture_helped_music_evolve">}}


Todo esto es muy interesante, puesto que en el último tiempo he estado
trabajando en una arquitectura de apoyo para orquestar un proceso.

Fue entonces que recordé esta reflexión de Byrne. No es lo mismo
escribir canciones punk para CBGB, que componer un aria que se escuchará
en la Scala de Milán, o un coral como El Mesías de Handël que será
escuchado en una gran catedral.

{{<figure caption="La arquitectura de la Scala de Milán es adecuada para una ópera, la reverberancia propia del edificio permite proyectar adecuadamente la voz." src="https://d2dspjyoh5c79p.cloudfront.net/14d5fa28-de10-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Lo mismo pasa con las arquitecturas de software, deben estar en función
del proceso o servicio que se orquestará sobre estas.

Pero ocurre que muchos arquitectos de software que son perezosos,
replican, o repiten, las mismas arquitecturas, que les funcionaron en un
momento, en distintos contextos, para todas sus soluciones. Lo que
produce esto son sistemas con serios problemas de mantención o
desempeño.

Cómo aún no puedo hablarles de la arquitectura en la que estoy
trabajando, les voy a dar un ejemplo, ya clásico a estas alturas:
Twitter.

Twitter fue construido como una aplicación Ruby on Rails estándar. La
arquitectura era esta[^2]:

![](https://d2dspjyoh5c79p.cloudfront.net/3d900b39-de11-11e7-a030-2b5831f8ecb5-aa9f18b7)

Esta es la estructura más común en la web, casi todos los frameworks
comunes implementan esta arquitectura de tres o más capas.

El hecho que esta arquitectura haya funcionado tan bien en el pasado, no
es garantía de que siga funcionando hoy en día. El problema es que no
escala muy bien. Es como si fueramos una banda punk tocando en CBGB y
ante el gran éxito nos piden tocar repentinamente en un gran estadio,
¿qué es lo que haremos?

En el caso de Twitter, la popularidad en 2008 los llevó a esto:

{{<figure caption="La famosa Fail Whale, una forma simpática de pedir perdón por las fallas de la infraestructura." src="https://d2dspjyoh5c79p.cloudfront.net/dfc72f4b-de12-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Al menos Twitter usó el humor para contener el problema. Pero, ¿qué
pasaría con nuestra pequeña banda punk si nos piden ir a tocar a un gran
estadio? La solución es obvia, pongamos más amplificadores y quizás
agreguemos algo de teclado. Eso es lo que hizo Twitter en 2008:

![](https://d2dspjyoh5c79p.cloudfront.net/60bc7d8c-de13-11e7-a030-2b5831f8ecb5-aa9f18b7)

¡Poner más amplificadores! Eso nos sacará del paso, pero no sonará
adecuadamente, porque la música fue escrita para un ambiente ruidoso,
cerrado y pequeño, pero quizás esos sintetizadores ayuden, ¿verdad?

Twitter hizo lo que el 99% de los arquitectos novatos hacen, escalar
horizontalmente. El problema es que en 2008, al hacer estos cambios, los
desarrolladores de Twitter no visualizaron esto:

{{<figure caption="El crecimiento de Twitter" src="https://d2dspjyoh5c79p.cloudfront.net/aa43947d-de13-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Lo correcto en este caso es reconocer el nuevo entorno. Hay bandas, como
U2 o Cold Play, que saben escribir música muy adecuada para los
estadios. En estos escenarios se trata más de una experiencia social,
más que musical, lo adecuado es una música más wagneriana, por eso que
el rock funciona bien en estadios, no así el funk, o el rythm and blues.
Lo adecuado para los estadios son himnos, que todos corean, baladas a
media velocidad, como las describe Byrne.

Entonces, ¿cómo debemos orquestar nuestras arquitecturas en un escenario
como el que enfrentaba Twitter?

Veamos algunos números:

> Con 150 millones de usuarios activos, se recibían 400 millones de
> tweets al día, eso es 4.600 tweets por segundo, con un máximo de
> 150.000 tweets por segundo aproximadamente. Al mismo tiempo se
> recibiían 300 mill consultas del timeline de usuario por segundo y
> unas 6 mil consultas de búsquedas personalizadas.

Con estos datos, ¿qué es lo que debemos optimizar primero?

Claramente, el equivalente al nuevo tipo de baladas que debemos
componer, en el caso de Twitter es cómo manejar la construcción de los
timelines. Y la arquitectura de Twitter se ajustó a esta realidad.

{{<figure caption="La arquitectura de Twitter para gestionar los timelines" src="https://d2dspjyoh5c79p.cloudfront.net/55ef91ae-de16-11e7-a030-2b5831f8ecb5-aa9f18b7">}}


Entonces, al revés de lo que identificó David Byrne con la música,
pareciera que en el software la arquitectura es la que está al servicio
de la orquestación.

Al menos así lo veo yo. Hay que ver qué es lo que necesitamos orquestar,
una vez definida nuestra orquestación, debemos construir una
arquitectura que la apoye, y no al revés. ¿Qué opinan ustedes?

[^1]: David Byrne, ["How Music Works"](http://amzn.to/2BsQNvo)

[^2]: Chris Aniszczyk, "Evolution of the Twitter Stack",
https://www.slideshare.net/caniszczyk/twitter-opensourcestacklinuxcon2013

[^3]: Raffi Krikoria, "Timelines at Scale", https://www.infoq.com/presentations/Twitter-Timeline-Scalability "https://www.slideshare.net/caniszczyk/twitter-opensourcestacklinuxcon2013"}

