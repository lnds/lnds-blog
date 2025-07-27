---
title: "El Fin de la Agilidad (VII)"
authors: [admin]
subtitle: "Parte 7 - Jam Bands"
date: 2019-04-14T08:25:11-03:00
slug: "el-fin-de-la-agilidad"
aliases: [/blog/lnds/2019/4/14/el-fin-de-la-agilidad]
tags: ["agilidad", "arquitectura de software", "principios"]
categories: ["el fin de la agilidad"]
draft: false
image:
    caption: "Dave Mathews Band"
    placement: 3
---


**(Para escuchar la banda sonora de este post [haz click
aquí](https://open.spotify.com/user/ediazlnds/playlist/4PgdLIEo3STIIeB9zbgJDa?si=5CBB2t7vT_yi6FdCK-XDZg))**

> When all the little ants are marching\
> Red and black antennae waving\
> They all do it the same\
> They all do it the same way\
> --- Dave Mathews Band

La primera canción de [Dave Mathews Band](https://www.davematthewsband.com/),que
recuerdo haber escuchado, es una
versión en vivo de ["Ants Marching"](https://www.youtube.com/watch?v=GhswH1bLMy8), me gustó tanto
que la usé en la banda sonora de un video familiar que hice de nuestras
vacaciones de veranos del 2004.

Ese año fuimos a La Serena, compré la cámara de video allá mismo. Hay
hermosos y divertidos momentos de mis hijos mayores jugando con
Francisca, que acababa de cumplir dos
años. 

No recuerdo exactamente si fue a fines de 2003 o principios de 2004 que
mi amigo Marco me contactó con una idea. A esas reuniones se sumó
Gustavo, un colega argentino que trabajaba con Marco. Cuando tuve la
crisis, [que les conté en la parte 6](/blog/lnds/2019/04/06/el-fin-de-la-agilidad),
trabajé en un proyecto de factura electrónica para la empresa en la que
trabajaban ellos. Yo respetaba a Gus pues me quedó claro que era un
brillante y muy prolijo programador.

Marco me contó que se le había acercado un exitoso empresario, a quién
yo conocía también, pues habíamos explorado negocios cuando trabajábamos
en Énfasis. Su empresa representaba a la marca Handkey, que vendía un
dispositivo como este:

{{<figure caption="Handkey II" src="https://d2dspjyoh5c79p.cloudfront.net/b0beba81-5f07-11e9-8e69-21c4c306beae-aa9f18b7">}}

Este aparato permite medir la geometría de la mano, lo que es muy útil
para identificar personas, dentro de una población limitada. Es por esto
que este artefacto empezó a ser usado en algunos clubes deportivos y
gimnasios de la capital. El problema que tenía este empresario es que no
podía escalar este negocio por falta de software adecuado.


Pero Marco pensó en una idea más amplia, ¿por qué no desarrollar
software de plataforma que permitiera implementar servicios de identidad
de personas usando biometría? [Fue así cómo elaboramos un plan de
negocios que le presentamos a este señor, con el fin de crear un
emprendimiento centrado en soluciones que usaran la
biometría.


Nuestra propuesta de valor era más o menos la siguiente: "siempre que
necesites identificar a alguien, en alguna parte de tus procesos de
negocios, nosotros te entregamos la tecnología para responder tres
preguntas: **Quién, Dónde y Cuándo**".


Así nació Biokey Technologies. A propósito decidimos usar un nombre en
inglés porque lo visualizamos como una Startup que podría salir al
extranjero. Nos pusimos algo *siúticos*, tomamos cargos en inglés, por
ejemplo Gus era el Chief Technology Officer, Marco el Chief Marketing
Officer y yo el Chief Operating Officer. [Nos instalamos en las oficinas
de la empresa de nuestro inversionista principal, y empezamos a operar
en una sala de exhibiciones. Cuando debían ocupar esa sala nosotros
salíamos y nos instalábamos en la cocina o salíamos a trabajar en algún
café cercano.

Los primeros meses fueron de intenso diseño. Mucha pizarra, discusiones
y Marco llenaba ceniceros con sus puchos. Estudiamos y tomamos
decisiones arquitecturales
relevantes.


Cuando trabajas en arquitectura de software debes considerar primero el
contexto en el cual operarán tus soluciones. Además debes definir
ciertas metas que debe satisfacer la arquitectura. Para cumplir esos
objetivos defines los principios de negocio y luego los principios
técnicos que guiarán tus decisiones de arquitectura. Esto l[o voy a
resumir en este diagrama:]{style="letter-spacing: 0.01rem;"}

{{<figure src="https://d2dspjyoh5c79p.cloudfront.net/261bfa22-5f0a-11e9-8e69-21c4c306beae-aa9f18b7" caption="El proceso para tomar decisiones en una arquitectura de software">}}

Este diagrama es muy importante porque es la guía de trabajo del buen
arquitecto de software. Si quieren saber más detalles les sugiero leer
el trabajo de de Rozanski y Woods [1].

Bueno, tal cómo les dije antes nuestra propuesta de negocios era ofrecer
un modo de ayudar a nuestros clientes a responder esas tres simples
preguntas: ¿Quién? ¿Dónde? y ¿Cuándo?


Entonces decidimos que construiríamos una red de dispositivos
biométricos distribuidos, de todo tipo y sabores. La biometría nos
ayudaría a responder la pregunta del ***quién***. La estructura de red
nos permitiría responder el ***dónde***. El ***cuándo*** era trivial,
bastaba registrar el timestamp de cada
transacción.


Cómo los tres teníamos experiencia previa en criptografía, y en
documentos y medios de firma electrónicos, podíamos asegurar la
integridad y confiabilidad de las respuestas a estas tres preguntas.


Esos eran los principios que guiaron nuestra arquitectura.


Pero una vez que tienes estos principios hay cuestiones prácticas que
decidir. En particular la tecnología específica que debes usar. Fue acá
donde sorprendimos a todos los que nos conocían. Decidimos usar la
plataforma .Net de Microsoft.

Cuando empezamos a presentar nuestras soluciones a potenciales clientes,
gente que conocía nuestro background tecnológico, les extrañaba que
usáramos .Net y no Java, además que, al menos yo, éramos conocidos como
fans de Java.


Una de las razones para esta decisión era totalmente práctica: la mayor
parte de los dispositivos biométricos funcionaban en Windows, además
tendríamos que desplegarlos en computadores con Windows. Había otra
razón estratégica, queríamos formar alianza con Microsoft, algo que
logramos por cierto. La tercera, la más importante, era que tanto Gus y
yo teníamos ganas de aprender C\#. "Si no es divertido, ¿para qué
hacerlo?"

![Si no es divertido, ¿para qué
hacerlo?](https://d2dspjyoh5c79p.cloudfront.net/86468c74-5f0b-11e9-8e69-21c4c306beae-aa9f18b7)

## Jam Bands

> Yeah\
> One, two, princes kneel before you\
> That\'s what I said, now\
> Princes, Princes who adore you\
> Just go ahead, now \
> --- Spin Doctors

El término [jam bands](https://en.wikipedia.org/wiki/Jam_band) se aplica
a esos grupos cuyos conciertos en vivo generan una fuerte cultura de
fans. Es un fenómeno que empezó con The Grateful Deads en los 60, y que
tiene entre sus exponentes a excelentes bandas como Phish, The Alman
Brothers Band, Blues Travellers, Ozryc Tentacles, Spin Doctos y por
supuesto, mi favorita, Dave Mathews Band.

Es un término muy amplio que abarca diversos estilos musicales, pero
algo que tienen en común que aglutina a bandas que cuentan en sus filas
con grandes músicos capaces de dar un gran espectáculo en vivo, no tanto
por su virtuosismo como por el sentimiento que entregan en cada
performance.

Bueno, en esos años, trabajando en Biokey yo me sentía como que
interpretaba la sección rítmica de una banda de jam. Con Gus nos
dividimos el trabajo. Él se preocupó principalmente del frontend y yo
del backend.

Los primeros meses escribimos mucho código. El objetivo era mostrar una
primera versión de nuestra tecnología para una importante exposición
minera.

Los recuerdos se confunden con los años, pero me parece que fue justo
cuando estábamos constituyendo la empresa que tuve un accidente
doméstico y caí al salir de la ducha, fracturándome el cuello del húmero
izquierdo (eso es el hombro, niños). Esto me tuvo fuera de combate al
menos tres meses. Me sentía frustrado, pero aún así apoyé a los
muchachos en organizar las primeras labores y en el diseño.


A pesar de los problemas de partida, fuimos avanzando. Armamos pruebas
de concepto. Cuando ya me recuperé empezamos la verdadera jam session.
Escribíamos código y armábamos nuestra plataforma mientras Marco buscaba
alianzas y prospectaba negocios.


Sin embargo, creo que caímos en uno de los errores que Roberto Camhi,
[en este reciente artículo](http://robertocamhi.com/4-pecados-capitales-del-emprendedor/)
llama pecados capitales. Nuestro fallo estaba en el timing. Nuestros
conceptos estaban algo adelantado para la madurez del mercado chileno en
el uso de la biometría en 2004. 


Sonará arrogante, sin embargo creo que ninguna empresa relevante que se
dedica a la biometría en Chile tiene una propuesta tan claramente
estructurada a nivel conceptual y arquitectónico como la que
desarrollamos. Pero esto, por desgracias, es una confirmación de que la
excelencia técnica no lo es todo para triunfar en los
negocios.

En retrospectiva creo que una de nuestra principales ventajas es que
invertíamos mucho tiempo en investigación. Quizás eso no le gustaba a
nuestro inversionista, pero estábamos convencidos que era uno de los
elementos diferenciados de nuestra propuesta.


Les daré un ejemplo de lo que hacíamos en BioKey Technologies.
Nuestra plataforma ofrecía un modelo de seguridad basado en el trabajo
de Ratha, Connel y Bolle, que se detalla en 
[este paper](https://www.researchgate.net/profile/Jonathan_Connell/publication/220353130_Enhancing_Security_and_Privacy_in_Biometrics-Based_Authentication_Systems/links/555a010508ae6fd2d8281b10/Enhancing-Security-and-Privacy-in-Biometrics-Based-Authentication-Systems.pdf)
\[2\]. En ese artículo estos investigadores exponen que hay ocho puntos
de ataque a un sistema biométrico. Pues bien, nuestra propuesta
explicaba estas ocho vulnerabilidades y proponía soluciones y
mitigaciones para cada una. Ese era el rigor técnico que aplicábamos en
Biokey, y tal como les dije, no lo veo mucho hoy en la industria chilena
que se dedica a esto. 

{{<figure caption="El modelo de Ratha, Connel y Bolle." src="https://d2dspjyoh5c79p.cloudfront.net/2ab95335-5f0e-11e9-8e69-21c4c306beae-aa9f18b7">}}


# What Would You Say

> Knock knock on the door. Who\'s it for?\
> There\'s nobody in here\
> Look in the mirror, my friend\
> I don\'t understand at best\
> And cannot speak for all the rest\
> --- Dave Mathews Band

Como en los primeros meses no lográbamos ventas de nuestros productos
ejecutamos algunos proyectos que nos permitieron obtener ingresos que
necesitábamos. Cómo ya gran parte de la tecnología estaba construida
podíamos desviar parte de nuestra atención a resolver algunos problemas
de la industria, de ese modo también estos clientes podrían más adelante
comprarnos nuestras soluciones.

Sucedió que para Microsoft éramos vistos como expertos en .Net, así que
nos recomendaron a una importante empresa con sede en Valparaiso a
mejorar el performance de su nueva plataforma operativa web. Lo mismo
hicimos con otra empresa de cable. La cantidad de aberraciones
arquitectónicas que tuvimos que ver en ese tiempo dan para escribir otra
serie. La transición de las aplicaciones cliente servidor a aplicaciones
web, era algo que le estaba costando a los ingenieros nacionales.
Microsoft no ayudaba mucho con Visual Studio y sus primera versiones del
.Net Framework. Muchos programadores creían que era correcto aplicar el
paradigma de respuestas a eventos de Visual Basic, y el modelo de dos
capas, que imponía de cierta forma las herramientas de Microsoft. Eso
cambió con el tiempo, cuando Microsoft finalmente implementó MVC, pero
quizás fue algo tarde, en mi opinión, creo el daño ya estaba hecho.
Nosotros usábamos C\# pero de una manera distinta a lo que promovía
Microsoft. Cómo veníamos de Java estructuramos nuestra arquitectura de
modo muy distinto a la forma a la que te obligaba el IDE Visual Studio.


## Accidente

> Driving along this highway\
> All these cars and upon the sidewalk\
> People in every direction\
> --- Dave Mathews Band

En la segunda mitad de 2005 la ansiedad me estaba comiendo. En el
proyecto yo empezaba a sentirme decepcionado, no era la idea participar
nuevamente en una empresa de desarrollo de proyectos. Yo había firmado
para desarrollar productos y plataforma. Por otro lado, tuve que
resolver algunos antiguos conflictos con mi madre y mis hermanos, que
llevaron a situaciones tensas. Recuerden también que arrastraba un caos
económico arrastrado de los años previos. 

Nos habíamos definido un nivel de sueldo inicial que estaba de acuerdo
al plan original. Si bien era un buen ingreso, estaba por debajo de lo
que todos los socios habíamos estado acostumbrado, pero lo aceptamos
porque era una forma de auto motivarnos, de modo que si el negocio era
bueno, si lográbamos vender nuestros productos, entonces el éxito
significaría mejores sueldos.


Pero eso no estaba pasando, ya les explicaré cuál fue el error que
cometimos. Lo que me ocurrió en ese tiempo fue que la ansiedad me estaba
llevando a la depresión. Recuerdo que mi amigo Marco me llevó un par de
veces a la clínica, pues yo pensaba que estaba con un ataque cardiaco.
En realidad eran ataques de pánico. Tuve que empezar a ir al siquiatra y
empezar un tratamiento. Me diagnosticaron depresión.


Para empeorar las cosas, en enero de 2006 sufrí un grave accidente
automovilístico, la guadaña de la parca pasó rozándome los pelos. Estuve
casi un año sin conducir después de eso. La única forma de salir
adelante la encontré en la escritura. En agosto de 2005 empecé
a escribir este blog, al principio era una forma de escape. Después la
escritura me fue ayudando de a poco. Creo que lo principal que aprendí
de ese tiempo fue que debía dejar de guardarme tanto las cosas. En Ants
Marching Dave Mathews escribe:

> But we never say a thing\
> And these crimes between us grow deeper


Aprendí que había cosas que también me guardaba, en todas mis
relaciones, con mi familia, mis amigos, y en la empresa. Así que tuve
que aprender a manifestarlas.


## Un bolsillo lleno de kryptonita

> Come on downtown and stay with me tonight\
> I got a pocket full of kryptonite \
>  --- Spin Doctors

Pero aún así seguimos investigando y desarrollando tecnología.
Desarrollamos nuestra propia implementación del formato WSQ que
certificamos ante el FBI. Ganamos un premio a la innovación por este
trabajo por parte de la [AIE](http://aie.cl/). Además firmamos un
convenio con las universidades chilenas en 2007 para 
[desarrollar algoritmos que facilitaran la utilización de soluciones biométricas en Chile](http://e-ciencia.reuna.cl/T2007/Ten_02/doc/WG_CSc_e-science-CEMCC.pdf).

Ejecutamos varios proyectos en ese tiempo. Pero la ansiedad empezó a
comernos también. Uno de los errores que cometimos también ha sido
identificado por Roberto Camhi, es lo que él denomina ["foco producto"](http://robertocamhi.com/que-el-foco-producto-no-termine-matando-tu-producto/).
Teníamos una solución tan robusta que insistíamos en que era en eso lo
que debíamos enfocarnos. Pero vender una solución, más que resolver el
problema del cliente, es la razón de que muchos emprendimientos
fracasen.

Empezamos a pivotear, a desarrollar soluciones de control de asistencia,
o de control de identidad mucho más simples. También a desarrollar
proyectos específicos. Entonces fue cuando empezaron las discusiones
entre los socios. En un momento sentí que teníamos cuatro visiones
distintas de cómo dirigir la empresa, eso eventualmente terminaría por
dividir a la empresa. Finalmente julio de 2007 tuve una fuerte
discusión con mis socios.  

Publiqué un comentario en este mismo blog, sobre una política pública
que involucraba a un socio de negocios estratégico. Eso me pareció
incorrecto y lo dije abiertamente. Eso fue una imprudencia de mi parte,
eso es cierto. Sin embargo, significaba un conflicto ético para mí.
Tenía que decidir entre seguir apoyando esa alianza de negocios, o
defender mi libertad de pensar y expresar mis opiniones. Lo más duro de
ese momento fueron las discusiones con mi amigo Marco. Tuvieron que
pasar varios meses para que nos reconciliáramos con Marco y aclaráramos
nuestras motivaciones de ese momento, ambas legítimas por cierto. Pero
esa es una historia que continuará en la siguiente
parte.

En la mitad de 2007 estaba nuevamente cesante. Pero aproveché mi red de
contactos y les manifesté abiertamente que estaba en busca de trabajo.
Recibí varios llamados, y tuve conversaciones muy interesantes. Estaba
de vuelta en el mercado, y el mercado parecía tener interés por mis
servicios. Así fue cómo recibí la llamada de Ubaldo, pero eso lo contaré
en la octava parte.

### Notas

\[1\] Software Systems Architecture,  Nick Rozanski, Eóin
Woods [[https://amzn.to/2Xc8F4i](https://amzn.to/2Xc8F4i)

\[2\] "Enhancing security and privacy in biometrics based authentication", [N.
K. Ratha, J. H. Connell, R. M. Bolle]<https://www.researchgate.net/profile/Jonathan_Connell/publication/220353130_Enhancing_Security_and_Privacy_in_Biometrics-Based_Authentication_Systems/links/555a010508ae6fd2d8281b10/Enhancing-Security-and-Privacy-in-Biometrics-Based-Authentication-Systems.pdf>

La primera parte de esta serie se encuentra
acá: [https://www.lnds.net/blog/lnds/2019/03/17/el-fin-de-la-agilidad](/blog/lnds/2019/03/17/el-fin-de-la-agilidad)

La octava parte de esta serie se encuentra
acá: [https://www.lnds.net/blog/lnds/2019/04/21/el-fin-de-la-agilidad](/blog/lnds/2019/04/21/el-fin-de-la-agilidad)


