---
title: "El Fin de la Agilidad (IV)"
authors: [admin]
subtitle: "Parte 4: AOR"
date: 2019-03-23T08:25:11-03:00
slug: "el-fin-de-la-agilidad"
aliases: [/blog/lnds/2019/3/23/el-fin-de-la-agilidad]
tags: ["agilidad", "trabajo", "familia", "ingeniería de software"]
categories: ["el fin de la agilidad"]
draft: false
image:
    placement: 3
    caption: "Toto"
---

(Para escuchar la banda sonora de este post haz click en [este
enlace](https://open.spotify.com/user/ediazlnds/playlist/2gXGpqFGB3koMhwdCAaBEw?si=s_zCUh6yTc2IYbp1FQtDCw))

> "Hold the line, love isn't always on time" -- Toto

El amor no siempre llega cuando tú quieres, hay veces que te esfuerzas
tanto en buscarlo que finalmente lo alejas, o lo dejas pasar sin darte
cuenta. Recuerdo que a principios de 1998 una amiga, sicóloga, con la
que aprendí a leer el Tarot, me dijo que yo debía dejar de estar tan
ansiosos por estar sin pareja, que dejara de buscar tan desesperadamente
la compañía, que esta llegaría cuando dejara de
buscar.

Resultó que una de las canciones favoritas de Kika es ["Hold The Line"](https://www.youtube.com/watch?v=htgr3pvBr-I),
de [Toto](http://totoofficial.com/), que habla de algo parecido al
consejo de mi amiga. Como les conté en [la parte tres de esta serie](/blog/lnds/2019/03/19/el-fin-de-la-agilidad),
nos encontramos a fines de 1998, y no nos separamos más.


Así empecé 1999 de la mejor forma posible.

## Y2K

> "Carry on my wayward son\
> For there'll be peace when you are done"\
> --- Kansas

Recuerdo que esos años fueron muy intensos y productivos. A pesar de
que entre medio nos topamos con el famoso Y2K, o [bug del
milenio](https://es.wikipedia.org/wiki/Problema_del_a%C3%B1o_2000).


Los programadores de sistemas legados, desarrollados muchos años antes,
habían decidido, por razones económicas, que las fechas sólo necesitaban
dos dígitos para almacenar el año. Esto alertó a todo el mundo.


Muchas consultoras y empresas ganaron mucho dinero en base a este
problema. Yo era escéptico al respecto, afirmaba que no pasaría nada.
Otros sin embargo, muchos expertos sostenían que debíamos prepararnos
para un verdadero Apocalipsis, las plantas generadoras de electricidad
fallarían, no podrías retirar dinero de tus bancos, el mundo colapsaría
el 1 de enero de 2000.

A pesar de que yo no creía que esto sería gran cosa, igual tuve que
asumir el desafío de revisar todos los sistemas de la CCS. Finalmente
topamos con un servicio desarrollado en
[RM-Cobol](https://www.microfocus.com/products/rm-cobol/) que se
distribuía en algunas financieras. Buscamos al desarrollador, pero ya no
se dedicaba al software, como tantos otros se había apestado de los
proyectos y tenía una próspera empresa de instalación de piscinas.
Logramos convencerlo para que revisara el software, vino unos días y
realizó los ajustes respectivos. Aparte de eso y parchar cientos de
computadores con windows, el famoso Y2K no fue un gran dolor de cabeza
para nosotros.

Una semana antes de año nuevo, mientras visitábamos el supermercado,
conversábamos con Kika sobre el bug del milenio. Ella me contaba que
algunos de sus compañeros de la carrera de ingeniería informática habían
expuesto como tesis de titulación sobre el problema, incluso uno de
ellos habló de marcapasos que fallarían y centrales eléctricas
colapsando.

Recuerdo que me burlé de todo eso y le dije que no pasaría nada. Pero
pasamos por un pasillo donde vendían velas y tomé un paquete y lo puse
sobre el carro. ¿Y esto?, me preguntó ella. Le cerré un ojo y le dije
que más valía prevenir que lamentar. Se rió, y por supuesto nunca olvidó
esta anécdota.

## Ingeniería de Software

> "Working hard to get my fill\
Everybody wants a thrill\
Payin\' anything to roll the dice\
Just one more time" --- Journey


Con mi equipo en la CCS, cuyo núcleo central estaba compuestoa por 6 a 8
personas, manteníamos en ejecución una cantidad similar de proyectos al
año. Una de las cosas notables de esto fue que todos desarrollaban,
todos programaban en un grado u otro. 


Recuerdo que cuando ingresé a la CCS, uno de ellos, Julio Arróspide
cumplía un rol de jefatura de proyectos pero su anterior jefatura sólo
le daba la misión de ser un mensajero, con los proveedores externos.
Estaba inmerso en la nefasta dinámica de miles de jefes de proyectos,
ser un tomador de recados. Eso cambió radicalmente al cabo de un año.
Julio se había convertido en un gestor eficaz de proyectos, pero además
hacía investigación en nuevas tecnologías. Todo el equipo ya dominaba
DHTML, pero yo recuerdo que fue Julio quien me mostró por primera vez lo
que se podía hacer con XMLHttpRequest, una tecnología introducida por
Microsoft en Internet Explorer y que después copiaron en Netscape, para
convertirse en lo que llegó a ser conocido como Ajax.

Mi equipo era innovador y auto motivado, porque todos eran
desarrolladores natos, y eso es en mi opinión clave para el éxito de los
proyectos.


Dijkstra dijo que la ingeniería de software es una disciplina condenada,
la cita es esta:


> [\... condenada porque no puede lograr su meta, porque esta meta es
> contradictoria. La Ingeniería de Software se presenta a si misma como
> otra causa noble, pero es un colirio. Si lees cuidadosamente su
> literatura y analizas lo que sus devotos realmente hacen, descubrirás
> que la ingeniería de software ha aceptado como su estatuto el "Cómo
> programar si usted no puede".


Hay una noción equivocada en mi opinión sobre qué significa desarrollar
software y la razón por la que existe este blog es tratar de hacer
patente este hecho.


En muchos libros de ingeniería de software encontrarán un diagrama como
este:

![](https://d2dspjyoh5c79p.cloudfront.net/86e47ea0-4d73-11e9-8e69-21c4c306beae-aa9f18b7)

El eje vertical es el esfuerzo. El eje horizontal el tiempo. Se afirma
que el ciclo e vida del software tiene dos grandes fases, la
Construcción (C en el diagrama) y la manutención (M en el diagrama).

Por supuesto la fase de mantención del software toma más tiempo que la
construcción dentro de la vida completa del software. Este diagrama es
producto de la visión lineal que se tiene sobre el proceso de desarrollo
de software.

Esta visión deriva en que se vea que el proceso de "construcción" del
software como algo que debe seguir una secuencia lineal, lo que se ve
así:

![](https://d2dspjyoh5c79p.cloudfront.net/ab76a602-4d76-11e9-8e69-21c4c306beae-aa9f18b7)

Este es famoso "desarrollo en cascada", conocido también como *"la
forma más ineficiente de organizar el proceso de desarrollo de
software"*.

No sé que viene primero, si el proceso es el que conforma la estructura
del equipo, o es el equipo el que estructura la forma del proceso, pero
esta manera de ver las cosas obliga a una separación de
funciones. 

Están los analistas, los arquitectos que diseñan, los programadores que
construyen y los testers que prueban. Todos entran en el proceso en
ciertas etapas del proceso. El gran problema es que cuando han terminado
de realizar su labor quedan desocupados entonces nos preguntamos, si la
fase de análisis se completó, ¿a qué se dedicarán los
analistas?

Otras metodologías como el desarrollo incrementar, o RUP se hacen cargo
de esto, pero siguen en la trampa de la literalidad. Su propuesta de
solución es esta:

![](https://d2dspjyoh5c79p.cloudfront.net/327647a3-4d77-11e9-8e69-21c4c306beae-aa9f18b7)

Esto al menos hace un uso más eficiente de los "recursos" (que es la
palabra que usan en ingeniería de software para hablar de las personas).
De este modo todos están ocupados. Pero aún así, yo sostengo que eso no
sirve.


## Adult Oriented Rock

> It's more than a feeling (more than a feeling)\
> When I hear that old song they used to play (more than a feeling)\
> --- Boston


Mi vida personal sufría cambios en esa época también. Empecé a
relacionarme con Matías y Javiera, los dos pequeños hijos de Kika. Con
Javierita fue más sencillo, era ella tierna conmigo, le encantaba jugar
con mi pelo y me acogió desde un principio. Matías el mayor era más
celoso. Cuando él cumplió 21 años escribió, en este mismo blog, nuestra
historia, pueden leerla acá: [Un niño y la tecnología](/blog/lnds/2010/09/04/un-nino-y-la-tecnologia).


Yo recuerdo que les contaba historias de mitología en las noches, antes
de que fueran a dormir, a ellos les encantaban. Tanto fue el éxito de
estas historias que me empecé a quedar corto de relatos, así que compré
el libro ["Los Mitos Griegos"](https://es.wikipedia.org/wiki/Los_mitos_griegos),
de Robert Graves, para tener mucho más que contarles.

![](https://d2dspjyoh5c79p.cloudfront.net/fa630144-4d77-11e9-8e69-21c4c306beae-aa9f18b7)

En ese tiempo me podías ver en las mañanas caminando por Monjitas, o
José Miguel de la Barra con un libro de mitología bajo el brazo.

A mi vida el amor había llegado en pleno, sin sospecharlo estaba
empezando a formar una familia. Ya era un adulto joven y responsable.

Así que lo que correspondía escuchar era rock orientada al adulto (AOR),
bandas como Toto, Boston, Styx o Kansas era la banda sonora de esos
tiempos.

Lo bueno es que tanto a Kika y a mí nos gustaban esa música, así que
apareció en mi casa un nuevo equipo de sonido, que reemplazó al viejo
reproductor de CDs, que nos permitía escuchar mi amplia colección de
discos y cassettes, acurrucados sobre un cómodo sofá que apareció por
alguna razón misteriosa que no puedo explicar hasta el día hoy. También,
aparecieron unos cómodos sillones, un refrigerador, una cama más grande,
y mi dieta de fin de semana dejó de ser atún con tomate, el miedo a
contraer escorbuto estaba superado.

## Transacciones

> You can't concern yourself with bigger things\
> You catch the pearl and ride the dragon's wings\
>   --- Asia

El desarrollo de sofftware es como la vida, se va dando con pequeños
cambios que van transformando el entorno. Así como con mi pareja íbamos
haciendo cambios a mi departamento, del mismo modo gradual, pero
sostenido, con nuestro equipo íbamos abordando cada vez más y más
proyectos.

En esos años aparecieron reformas importantes al boletín de
informaciones comerciales. Y la CCS decidió adoptar una estrategia nueva
en la manera en que prestaba algunos de sus servicios de información. Se
imitó el modelo de la distribución de energía. En la industria eléctrica
están las generadoras y las distribuidoras. La Cámara asumiría un rol de
"generador", como la fuente oficial de información sobre morosidades y
deudas. Otras empresas, como DataBussiness, Equifax (DICOM), Sinacofi y
otros tendrían el rol de
distribuidoras.

Para ajustar la tecnología a esta estrategia de negocios desarrollamos
un sistema transaccional de alto desempeño basado en
[Tuxedo](https://es.wikipedia.org/wiki/Tuxedo_(software)). Este debía
ser capaz de atender unos cuatro millones de transacciones al mes.

Diseñé una arquitectura que cumpliera con este desafío. La clave estaba
en una técnica similar a la que usamos en Impuestos internos en el
proyecto que les conté en la primera parte.

El sistema que estábamos construyendo sería consultado por cada de
solicitud de crédito que se realizara en el retail o en el sector
financiero del país. Estas instituciones consultarían si la persona que
estaban atendiendo tenía moras o deudas protestadas en el sistema.

En aquel tiempo, en la CCS sabíamos que el 80% de los consumidores no
tenían morosidades ni deudas protestadas. Así que aproveché este hecho
para establecer un principio de la arquitectura, que voy a expresar más
o menos así: "sólo se debe acceder a la base de datos si el RUT está
dentro del 20% de las personas que presenta algún grado de
morosidad".

Esto nos permitía tener en memoria una tabla que nos permitía
discriminar rápidamente los casos morosos de aquellos que no.

Licitamos esta solución, y exigimos que se cumpliera este principio.
Eso fue crucial, porque el sistema llegó a tener hasta un 50% más de
demanda de la que presupuestamos originalmente (más de seis millones de
transacciones). Como el 80% se podía resolver sin tocar la base de
datos, los tiempos de respuesta era extraordinarios.

Pero habían algunas cosas que no licitamos y construimos internamente,
como la integración con este sistema transnacional con la aplicación
cliente servidor en Visual Basic (SIAC) que se usaba en las oficinas del
Boletín Comercial a lo largo del país.

Fue entonces que me arremangué la camisa y programé dos piezas de
software. Una era un cliente, embebido en una [DLL](https://es.wikipedia.org/wiki/Biblioteca_de_enlace_din%C3%A1mico),
escrita en Delphi por supuesto, que se comunicaba usando sockets con un
servidor.

El servidor era un proceso Unix escrito en C que se conectaba con el
servidor Tuxedo. Era esencialmente un Gateway. Este Gateway fue
construido por simplicidad y por costos. Cada cliente Tuxedo tenía un
costo adicional, además integrarlo desde una aplicación Visual Basic era
una tarea no menor e invasiva.

Como anécdota, en 2011, me llamaron de la CCS para que les ayudara a
migrar el Gateway a una versión de 64 Bits de Linux. Mi aplicación
llevaba 10 años corriendo sin fallar, y sospecho que aún se sigue
usando, pero ahí hay otra historia interesante que les contaré más
adelante.

## Iteraciones

> "It's the eye of the tiger, it's the dream of the fight\
> Risin' up to the challenge of our rival" --- Survivor

La clave, en mi opinión, para desarrollar software es darse cuenta de la
naturaleza iterativa, circular, repetitiva de este. Y no hay nada mejor
que recurrir a la cosmología mapuche para abordar el problema.

Todo proceso de software se basa en cuatro etapas que expresaré como
este dibujo que emula a un [cultrún mapuche](https://pueblosoriginarios.com/sur/patagonia/mapuche/kultrun.html)

![](https://d2dspjyoh5c79p.cloudfront.net/e5051de5-4d79-11e9-8e69-21c4c306beae-aa9f18b7)

Todo proceso de desarrollo de software se compone de las cuatro D del
cultrún: Diseño, Desarrollo, Depuración y Despliegue.

Noten que en el diagrama de la cascada no mencionamos el despliegue o
entrega, algo que se suele descuidar y lo que ha llevado a mucha
improvisación con respecto a este aspecto que es
crucial.

La gracia de nuestro cultrún es que nos permite optimizar el tiempo y
liberar software muy rápido, e incluso en paralelo. El equipo de
desarrollo hace todo, es una unidad cohesionada enfocada en entregar un
producto al final de cada ciclo. [Así que gracias a este cultrún mágico
podemos hacer esto:]{style="letter-spacing: 0.01rem;"}

![](https://d2dspjyoh5c79p.cloudfront.net/18cdf3e6-4d7a-11e9-8e69-21c4c306beae-aa9f18b7)


Cada cultrún en este diagrama corresponde a un ciclo breve donde
desarrollamos nueva funcionalidad que puede ser liberada para que sea
usada por nuestros usuarios.


Cada línea en este diagrama puede ser un proyecto, un microservicio, un
módulo, un servicio, cualquier cosa que pueda ser abordado por el
equipo-cultrún que repite el ciclo de las cuatro D en cada
iteración.

Es decir, en este dibujo en concreto tenemos a 4 equipos cultrún que han
completado 24 iteraciones (6 cada uno). Si cada iteración es de 1 mes,
en 6 meses han realizado 24 entregas.


Y ese amiguitos es ***el fin de la agilidad***.

Pero apenas estamos empezando, sigan conmigo en nuestro próximo
episodio.

### Notas:

La parte 1 está
[acá](/blog/lnds/2019/03/17/el-fin-de-la-agilidad)

La parte 2 la pueden leer en [este enlace](/blog/lnds/2019/03/18/el-fin-de-la-agilidad)

Parte 3 está [acá](/blog/lnds/2019/03/19/el-fin-de-la-agilidad)

La parte 5 está [acá](/blog/lnds/2019/03/31/el-fin-de-la-agilidad)
