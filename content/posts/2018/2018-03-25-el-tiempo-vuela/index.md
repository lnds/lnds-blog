---
title: "El tiempo vuela"
authors: [admin]
subtitle: "Servicios y herramientas para medir el uso del tiempo"
date: 2018-03-25T08:25:11-03:00
slug: "el-tiempo-vuela"
aliases: [/blog/lnds/2018/3/25/el-tiempo-vuela]
draft: false
tags: ['tiempo', 'gestión', 'herramientas']
image:
  placement: 3
---

> But after a while\
> You realize time flies\
> -- Porcupine Tree

Mi hija menor, que es una excelente dibujante, tiene un hábito bastante
sano, que yo no tengo. Cuando se pone a dibujar coloca un temporizador
en su teléfono, de modo que suena una alarma cuando ha pasado un tiempo
que ella se ha fijado como límite para esta actividad. De este modo
cuando se detiene, descansa, cuidando su vista y sus
manos.

Y es que, cuando haces lo que te apasiona el tiempo pasa volando,
sobretodo cuando entras en la
[zona](/blog/lnds/2010/08/09/estado-de-flujo).

![](https://d2dspjyoh5c79p.cloudfront.net/3356928e-303d-11e8-a030-2b5831f8ecb5-aa9f18b7)

Por otro lado, hay razones prácticas para controlar el tiempo que te
toma ejecutar alguna actividad. Más aún, si te dedicas profesionalmente
a desarrollar software, el medir tu desempeño es esencial. Y para medir
desempeño hay que partir por el tiempo.

Hay varias herramientas para medir el tiempo que pasas codificando.
Aparte de las obvias, como usar un cronómetro, las mejores herramientas
son las que actúan en sintonía con tu ambiente de trabajo.

Yo he probado tres herramientas en el último tiempo, y quiero compartir
con ustedes algunas impresiones.

## Timing 1.0

Este es una app que hace tracking de todas tus actividades en tu Mac. La
ejecutas en background y lleva un registro del tiempo que gastas en
distintas tareas.

![](https://d2dspjyoh5c79p.cloudfront.net/0a8c2671-303f-11e8-a030-2b5831f8ecb5-aa9f18b7)

En la imagen que les muestro pueden ver una fracción de mis actividades
en mi PC entre julio y septiembre del año pasado. Es bastante detallada,
al principio incluso da mucho susto usarla. La versión 2.0 promete
mejoras en este sentido, veamos si me animo a instalarla.

Tu puedes desactivar el tracking, indefinidamente, o por periodos.
También puedes crear tus propios tipos de actividades.

¿Cómo opera Timing? Lo que hace es que debes darle acceso a la API de
Accesibilidad, con eso accede a los títulos de las ventanas activas y de
ese modo registra la actividad.

Es una buena herramienta para cualquier freelancer en cualquier tipo de
actividad, no sólo para desarrolladores de software. Es simple, casi no
hay que configurarla, y funciona localmente, no se envía nada a ningún
servidor central. Ideal para paranoicos. El costo es de 29 dólares por
la licencia básica para usar en 1 Mac.

## WakaTime

Esta herramienta está orientada a los desarrolladores de software. En
este caso el tracking se hace desde un Editor o IDE compatible con este
servicio.

[WakaTime](https://wakatime.com/) es un servicio, no una aplicación,
como en el caso de Timing 1.0. La versión gratuita te permite registrar
tu tiempo por una semana, para registrar mayores tiempos, debes usar la
versión pagada (que cuesta 9 dólares mensuales, o 12 dólares en la
versión para equipos).

![](https://d2dspjyoh5c79p.cloudfront.net/8d101912-3041-11e8-a030-2b5831f8ecb5-aa9f18b7)

En la imagen de arriba pueden ver mi tiempo codificando en la última
semana. Y abajo pueden ver la proporción entre herramientas de desarrolo
y lenguajes:

![](https://d2dspjyoh5c79p.cloudfront.net/b84f6ae4-3041-11e8-a030-2b5831f8ecb5-aa9f18b7)

Hace años que ya no me dedico a desarrollar full time. Normalmente
escribo código para algún proyecto personal, o mantengo algunos
proyectos pequeños en mi trabajo. Como pueden apreciar la última semana
he trabajado en Python, y tuve que revisar un pequeño proyecto en Scala
que escribí para mi trabajo. Los IDEs que he usado son IntellijIdea y
PyCharm.

WakaTime se integra con más de 43 editores, y todos los plugins son
opensource, se encuentran disponibles en
GitHub: <https://github.com/wakatime>.

De este modo puedes ver qué es lo que hacen exactamente en cada editor y
averiguar como determinan el tiempo que inviertes escribiendo código.

WakaTime en su versión gratuita mantiene un board donde puedes
compararte con otros programadores del mundo (hay personas que pasan
demasiado tiempo codificando, hay dos motivos, o no duermen, o han
logrado hackear el sistema de tracking). El aspecto \"social\" de la
herramienta no es lo mejor, porque creo que genera una competencia que
no aporta nada valioso. Tampoco veo espacio para la versión de equipos,
pero seguramente pueden haber grupos de programadores que quieran medir
sus egos en un dashboard y ver quien codifica más tiempo.

Lo valioso de WakaTime, al menos para mi, es que me permite ver la
información por proyecto, y eso me permite medir y dosificar esfuerzos.
También puedo usarla como herramienta motivadora, por ejemplo, me he
propuesto codificar una hora al día, algo que es muy difícil, pero vamos
a ver que tal funciona.

## CodeAlike

Este servicio es el más orwelliano de todos. CodeAlike pretende llevar
un registro de casi todas  tus actividades como desarrollador:
codificación, compilación (building), depuración (debugging) e
interacción con el sistema. Si instalan un plugin para Chrome analiza si
estás visitando sitios como StackOverflow y te muestra una estimación
del tiempo que pasas resolviendo un problema (troubleshooting), que es
muy cool por un lado, y algo siniestro por otro.

Este es uno de esos servicios en que debes leer bien los términos y
condiciones, porque sus plugins entregan mucha información que va hacia
los servidores de CodeAlike.

Quizás el único feature que encontré interesante de CodeAlike es este
gráfico:

![](https://d2dspjyoh5c79p.cloudfront.net/7bf8eaa5-3044-11e8-a030-2b5831f8ecb5-aa9f18b7)

Este mide el nivel de foco o atención que prestas interactuando con el
código, la linea horizontal es el promedio de la comunidad de CodeAlike.
Esto está tomado de las dos últimas semanas, y muestra que soy un bicho
vespertino, mi peak está en las 16 y las 23 horas. 

Personalmente encuentro que es una herramienta que se excede en
métricas, pero supongo que hay personas que puedan obsesionarse con
medir cada aspecto de su trabajo. 

El precio de este servicio es de \$12 dólares.

## ¿Por qué medir tu tiempo?

Si eres un *freelance*, y cobras por hora, por ejemplo, saber cuantas
horas le dedicaste a desarrollar una solución para tu cliente es
esencial. Pero también es útil para hacer estimaciones más precisas en
futuros trabajos.

Tener métricas de tu desempeño también te ayuda a mejorar, y a entender
tu proceso personal de desarrollo de software. También puedes usar estas
métricas en el mismo sentido que el temporizador de mi hija, para darte
cuenta que has pasado demasiado tiempo trabajando y debes descansar.

Si cruzas esta información con tu trabajo, por ejemplo, la información
que te entrega Git, puedes saber cuánto te cuesta escribir una línea de
código. Saber si pasas mucho tiempo depurando, y de ese modo hacerte
consciente de los aspectos que debes mejorar para aumentar tu desempeño.

Como toda herramienta, estas pueden ser usadas para el bien o para el
mal, eso depende de ti. Lo importante es que veas cuál se acomoda más a
tu flujo de trabajo. 

¿Ustedes usan herramientas como estas para medir el tiempo que invierten
trabajando? 

Me gustaría saber sus experiencias.
