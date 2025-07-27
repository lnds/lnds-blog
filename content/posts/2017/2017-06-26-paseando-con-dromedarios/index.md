---
title: "Paseando con Dromedarios"
authors: [admin]
subtitle: "Reflexiones sobre la ley de Conway"
date: 2017-06-26T08:25:11-03:00
slug: "paseando-con-dromedarios"
aliases: [/blog/lnds/2017/6/26/paseando-con-dromedarios]
draft: false
tags: ['leyes', 'ley de conway', 'diseño', 'estructura']
image:
  placement: 3
---


> "Un dromedario es un caballo diseñado por un comité" \
> -- antiguo aforismo mentat, anterior a la Yihad Butleriana

> "Nunca hay tiempo para hacer las cosas bien a la primera, pero
> siempre hay tiempo para volver a hacerlas"\
> -- Anónimo, citado por Melvin Conway

Mi más memorable encuentro y realización de la profundidad de la Ley de
Conway fue hace un par de años, cuando una decisión de arquitectura se
vio afectada por la organización del datacenter en que alojamos nuestras
aplicaciones. Tal cómo lo escuchan, debimos modificar la arquitectura de
despliegue de nuestro sistema por la organización de servicios del
datacenter. 

> "No puedes tener una base de datos en el mismo servidor de
> aplicaciones, porque\... las bases de datos las administran los DBA,
> las capas aplicativas los operadores de sistemas". \
> [Pero\... "Las bases de datos las administran los DBA, las capas aplicativas
> los operadores de sistemas".

En fin, dejaremos la discusión sobre "las buenas prácticas" para otro
momento.

## La Ley de Conway

**La Ley de Conway**, es una observación del programador, hacker, y PhD
en Computer Sciences [Melvin Conway](http://www.melconway.com/Home/Home.html), 
que dice (citado de su [paper](http://www.melconway.com/Home/Committees_Paper.html)):

> "Las organizaciones que diseñan sistemas (en el amplio sentido usado
> aquí) están obligados a producir diseños que son copias de las
> estructuras de comunicación de estas
> organizaciones".

Cuando Melvin Conway envió su paper ["How Do Committees
Invent?](http://www.melconway.com/Home/Committees_Paper.html)" a la
prestigiosa publicación Harvard Bussiness Review fue rechazado sobre la
base de que no logró probar su tesis. Luego de este rechazo la envió a
[Datamation](http://www.datamation.com/). El artículo es de 1968, y es
una observación bastante razonable y bien argumentada, en mi
opinión.

Para Conway el diseño de un sistema es la actividad intelectual que
intenta crear un todo a partir de diversas partes que lo comparten. Ya
sea la creación de un sistema de armas, la recomendación para enfrentar
un desafío social o programar un computador. Para el autor estas
actividades son esencialmente lo mismo.

Lo normal es que la organización que se hace cargo de idear este sistema
busca crear un documento que contenga un cuerpo estructurado y coherente
de información. Esto es lo que se llama el diseño del sistema. El
destinatario de este documento es un "sponsor", quien desea que se
realice una actividad guiada por el diseño del sistema. Por ejemplo, una
autoridad que encarga una legislación para evitar la recurrencia de un
desastre reciente, y para esto establece un equipo que explique la
catástrofe y proponga soluciones preventivas. También puede ser un
empresario que necesita comercializar un nuevo producto y designa un
equipo de planificación para especificar cómo este se debe introducir en
el mercado.

La organización que diseña puede o no estar involucrada en la
construcción del sistema. Esto afecta las decisiones de diseño, pues el
saber que uno estará involucrado en la construcción nos lleva a tomar
ciertas decisiones distintas a si sabemos que ese peso recae en otros
hombros.

La actividad de diseñar requiere tomar decisiones de manera continua y
estas decisiones son también decisiones que el diseñador hace para su
propio futuro. Acá los incentivos que existen en el ambiente pueden
atentar contra las intenciones del sponsor.

Una de las observaciones claves que hace Conway es que la mera elección
del equipo implica decisiones básicas de diseño del sistema final. En
otras palabras, el diseño de un sistema es reflejo del grupo de personas
que lo va a diseñar.

Una vez que se elige la organización del equipo de diseño podemos
delegar actividades a los sub grupos dentro de esta organización. Con
cada delegación lo que hacemos es estrechar las alternativas de diseño
posible, en función de las capacidades de los sub grupos o personas
elegidas.

Junto con la delegación aparecen los problemas de coordinación. La
necesidad de coordinar disminuye la productividad de los grupos más
pequeños, pero es la única posibilidad de que los grupos de trabajo
separados puedan consolidar sus esfuerzos para un diseño de sistema
unificado.

Para Conway el ciclo de diseño de un sistema es así:

1.  Establecimiento de las fronteras del sistema de acuerdo a ciertas
    reglas básicas
2.  Elección un concepto preliminar de sistema
3.  Organización de la actividad de diseño y delegación de tareas de
    acuerdo a este concepto
4.  Coordinación entre las tareas delegadas.
5.  Consolidación de los sub diseños en un diseño único.

Es posible que la actividad de diseño no siga esta secuencia. Por
ejemplo, uno puede reorganizarse tras el descubrimiento de un nuevo
concepto de diseño que sea evidentemente superior. Claro que la
reorganización no es algo agradable, y a menudo suele ser también
costosa. 

Lo que sí es cierto que este proceso está siempre repitiéndose, después
de todo, como observa Conway, **"nunca hay tiempo suficiente para hacer
algo bien, pero siempre hay tiempo para volver a hacerlo"**.

Cualquier sistema de envergadura está estructurado de sub sistemas
menores, que se encuentran inter conectados. La descripción del sistema,
parte por la descripción de sus conexiones con el mundo exterior y luego
profundiza en cada sub sistema y el modo en que están inter conectados,
bajando de nivel, cada vez, reduciendo el alcance hasta llegar a las
partes más simples que pueden ser entendidas sin mayor sub división.

Lo mismo puede decirse de una teoría, que también puede ser subdividida
en sub teorías y explicada de una forma similar.

Un sistema o teoría puede ser representado como un
[grafo](https://es.wikipedia.org/wiki/Grafo). Cada nodo es un sub
sistema que se comunica con otros sub sistemas a través de los nodos o
aristas. A estas aristas las llamamos interfaces.

{{<figure caption="Un ejemplo de Grafo Lineal usado para representar un sistema, expuesto por Conway en su artículo original: \"How Do Committees Invent?\"" src="https://d2dspjyoh5c79p.cloudfront.net/6b251ba5-5a8a-11e7-8a6c-fd3bc33e2c90-aa9f18b7">}}

Lo interesante, y es lo que Conway intenta demostrar en su artículo, es
que uno puede reemplazar en el grafo la palabra sistema por la palabra
comité, sub sistema por sub comité y las interfaces por coordinadores, y
de este modo replicar la estructura organizacional que diseñó el
sistema.

Consideren el caso de las interfaces. Tomemos dos nodos X e Y de un
sistema. Estos pueden estar conectados entre sí por un arco. Si hay una
arista entonces dos grupos de diseño X e Y (no necesariamente distintos)
deben haber negociado y haber llegado a un acuerdo sobre la
especificación de la interfaz para permitir la comunicación enter los
dos nodos correspondientes. Si no hay una rama entre los nodos X e Y
significa que no hubo nada que negociar entre ambos grupos de diseño, es
así de simple.

La estructura del sistema, entonces, refleja la estructura de la
organización que lo diseña. En términos matemáticos, hay un homomorfismo
entre el grafo del diseño de un sistema y el grafo de la estructura
organizacional que lo diseñó.

El ejemplo clásico que expone Conway es el siguiente:

> Un equipo de desarrollo tiene ocho personas y se les encarga producir
> un compilador para COBOL y otro para ALGOL. Después de una estimación
> inicial de esfuerzo y tiempo, cinco personas son asignadas al trabajo
> en COBOL y tres al trabajo en ALGOL. El compilador de COBOL corre en
> cinco fases, mientras que el compilador de ALGOL corre en tres fases.

O sea, si usted tiene un sistema en tres capas es porque tiene su equipo
dividido en tres, un equipo para el front-end, otro para la capa de
negocio y otro para la capa de datos. Una aplicación dividida en esta
forma será desplegada en tres piezas distintas. 

Una aplicación monolítica suele ser el producto del trabajo inicial de
sólo un desarrollador que luego es "transferida" a un equipo mayor, el
que rápidamente empieza a dividirla de forma modular para poder abordar
su evolución.

Conway nos recuerda que la estructura de un sistema grande tiende a
desintegrarse durante el desarrollo cualitativamente más que los
sistemas pequeños. 

Para entender esto hay que entender por qué los sistemas grandes se
desintegran, y esto tiene que ver directamente con el homomorfismo que
hemos identificado.

Los sistemas se desintegran en tres pasos:

-   Primero, al darse cuenta los diseñadores iniciales que el sistema
    será grande, junto con ciertas presiones de su organización, se
    vuelve irresistible la tentación de asignar demasiada gente al
    esfuerzo de diseño.
-   Segundo, la aplicación de las prácticas convencionales de gestión a
    una organización de diseño grande causa que su estructura de
    comunicación se desintegre.
-   Tercero, el homomorfismo asegura que la estructura del sistema
    reflejará la desintegración que ha ocurrido en la organización de
    diseño.

De seguro esto lo han experimentando muchas veces. Los equipos de
diseño van desintegrándose lentamente cuando aún el diseño no ha
terminado del todo, puesto que sus miembro son requeridos en otras
labores. Esta desintegración se refleja en la estructura que ha
adquirido el sistema y la sufren quienes están desarrollando o
manteniendo el sistema.

Cuando un sistema es grande lo más probable es que solicitemos contar
con un equipo mayor.  Después de todo queremos delegar el esfuerzo para
atacar la complejidad aparente del sistema, que ya ha alcanzado nuestros
límites de comprensión. Tenemos un plazo que cumplir, así que queremos
sub dividir más la labor para sacarla adelante. Pero el diseñador
inicial se encuentra en la encrucijada de lidiar con el diseño complejo
o fragmentar su conocimiento del mismo mediante la delegación. Pero el
administrador fuerza a la delegación, pues no puede mantener recursos
ociosos.

Otro ejemplo es cuando se debe subcontratar una tarea de diseño difícil
y hay dos opciones, un contratista pequeño y nuevo con una aproximación
que parece interesante a un costo menor al presupuestado, o una
organización establecida más convencional con una tarifa más
"realista". 

El administrador sabe que si el contratista más pequeño falla será
acusado de desperdiciar los recursos, pero si el contratista más
"establecido" falla será una evidencia de que el problema realmente es
muy difícil.

El problema es que los criterios contables, que guían las prácticas
convencionales de gestión, nos dicen que si hablamos de esfuerzo humano
este debe medirse en el costo de las horas de dedicación.

La falacia detrás de este cálculo es que establece una propiedad lineal
que dice que dos personas trabajando por un año o cien personas
trabajando por una semana son recursos de igual valor. 

Sabemos que dos personas y cien personas no pueden tener la misma
estructura organizacional, y el homorfismo de Conway nos dice que no
diseñarán sistema similares, luego los esfuerzos no son siquiera
comparables. La experiencia nos dice que si elegimos bien, y si
sobreviven a la experiencia, dos personas nos darán un mejor
sistema.

Si se tratara de pelar papas, levantar muros, o recoger la siembra del
trigo, podemos usar la linealidad y asumir que traer más personas ayuda
a reducir tiempos. Pero para diseñar sistemas complejos, eso no es
cierto. Pero aún así, se insiste en usar este criterio lineal en la
planificación y diseño de nuestros sistemas.

Conway nos advierte también de que una vez que el prestigio y poder del
administrador queda atado a su presupuesto, este tenderá a expandir su
organización. "Una vez que la organización existe debe ser usada, por
supuesto. Probablemente el factor común único detrás de tantos sistemas
mal diseñados, ahora en existencia, ha sido la disponibilidad de una
organización con necesidad de trabajar".

La segunda fase proceso de desintegración empieza en cuanto comienza la
delegación. Sabemos que el número de caminos posibles de comunicación en
una organización es proporcional al cuadrado de la cantidad de personas
pertenecientes a esta. Incluso en organizaciones pequeñas es necesario
restringir el grado de comunicación entre las personas para lograr que
avancemos (algo que no se da mucho, con nuestra tendencia a realizar
reuniones ampliadas para tomar cualquier decisión).

Entonces, para poder restringir estos canales de comunicaciones, las
prácticas normales de administración llevan a establecer estructuras
jerárquicas, donde las comunicaciones fluyen de arriba hacia abajo y
viceversa. El grafo se convierte en un árbol, y el sistema empieza a
adquirir la estructura jerárquica similar (otra cosa que también tiende
a fallar cuando en las organizaciones las decisiones quedan estancadas
en los niveles superiores y no bajan las comunicaciones hacia los
implementadores en los niveles inferiores).

## Conclusiones

Conway nos dice que las organizaciones que diseñan sistemas producirán
sistemas que asemejan las estructuras de comunicación de las mismas.
Esto tiene importantes implicancias en la gestión del diseño de
sistemas.

La conclusión evidente es que la flexibilidad de la organización es
importante para tener diseños efectivos, porque sabemos que el primer
diseño nunca es el mejor posible, 

Conway en 1968 recomienda que recompensemos a aquellos administradores
que mantienen sus organizaciones livianas y flexibles. Que no se debe
basar la gestión del diseño en la idea de que agregar más personas
agrega más productividad. Para él esta filosofía es clave para que el
diseño de tecnología sea una labor confiable. 

Vamos a cumplir cincuenta años de la publicación del artículo de Conway
y aún seguimos atrapados en las mismas trampas que identificó este
autor. Seguimos obteniendo dromedarios, cuando lo que queríamos eran
caballos.
