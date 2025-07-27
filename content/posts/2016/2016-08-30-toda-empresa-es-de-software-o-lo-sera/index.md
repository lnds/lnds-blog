---
title: "Toda empresa es de software, o lo será"
authors: [admin]
subtitle: "Reflexiones sobre la naturaleza del software y el emprendimiento"
date: 2016-08-30T08:25:11-03:00
slug: "toda-empresa-es-de-software-o-lo-sera"
aliases: [/blog/lnds/2016/8/30/toda-empresa-es-de-software-o-lo-sera]
draft: false
tags: ['emprendimiento', 'la naturaleza del software', 'complejidad']
image:
  placement: 3
---
En una columna titulada ["Por qué el software se está comiendo al
mundo"](//www.wsj.com/articles/SB10001424053111903480904576512250915629460),
publicada en el Wall Street Journal en 2011, 
[Marc Andreessen](//es.wikipedia.org/wiki/Marc_Andreessen) plantea que cada
vez más industrias y negocios se ejecutan mediante
software.

Sólo por tomar un ejemplo, consideren a Amazon y Alibaba, las dos
empresas de retail más grandes del mundo. En 2015 el CEO de Alibaba,
Jack Ma, dijo:

> "Si quieres tener 10.000 nuevos clientes tienes que construir nuevos
> almacenes, esto y aquello. Para mí: sólo dos servidores."

Mis amigos de Continuum han escrito una serie de tres artículos donde
resumen muy bien todo esto, que denominan [transformación
digital.](//blog.continuum.cl/transformacion-digital/)

Todo parte con una idea muy simple, potente y terrible a la vez:

> "Tu empresa ya es una empresa de software. O lo será. O Morirá."

Si esto es así, ¿qué significa tranformarse digitalmente?
[La respuesta de Continuum es la siguiente](//blog.continuum.cl/transformacion-digital/):

> "El ritmo y naturaleza de los cambios del mundo digital presenta un
> desafío complejo. Tranformación Digital es cambiar profundamente para
> enfrentar este desafío. Es aprender a transformarnos y adaptarnos.\
> (Y sacarle el apellido digital a las cosas: todo va hacia lo digital,
> y no es una dimensión paralela)"

Todas estas afirmaciones son interesantes y vale la pena hacer un
análisis de estas en base todo lo que hemos escrito en este blog en todo
este tiempo.

Agosto es el mes de aniversario de La Naturaleza del Software, son once
años de existencia. Esta vez decidí escribir un post especial, más
extenso para celebrar este cumpleaños. 

Este concepto de transformación digital me da una buena excusa es
revisitar esta idea que exploré hace unos años. Este artículo sostiene
en esencia que lo que dice Andreessen es obvio puesto que al final todo
es software, así que lo que estamos observando es inevitable.

Pero vamos por partes, hagamos una exploración mas fundamental, o
filosófica si quieren, de todo esto.

## 1) La complejidad como dificultad esencial en la construcción del software

En el artículo ["No Silver Bullet - Essence and accident in Software
Engineering](//worrydream.com/refs/Brooks-NoSilverBullet.pdf)", Fred
Brooks, siguiendo la tradición filosófica griega, identifica
dificultades accidentales y esenciales de construir software.

Las dificultades accidentales, como las técnicas, las herramientas, los
modelos, etc, se pueden resolver en el tiempo con suficientes avances en
investigación.

{{<figure caption="Portada de la edición de abril de 1987 de la revista Computer, donde se publicó el artículo de Brooks: No Silver Bullet" src="//d2dspjyoh5c79p.cloudfront.net/5db040e0-6e5b-11e6-aecf-c1145ad981b8-aa9f18b7">}}

Los problemas esenciales son insolubles por definición. Brooks
identifica cuatro dificultades esenciales para construir software:
**Complejidad, Conformidad, Necesidad de cambios** e **Invisibilidad**.

- **Complejidad**. Las entidades de software son más complejas por su
tamaño que cualquier otra construcción humana, porque dos partes no son
iguales entre sí. Si lo fueran los programadores nos encargamos de
juntar dos cosas similares en una, como una subrutina, una función un
objeto o una componente. Siempre estamos agrupando cosas similares, con
lo que el software, de manera paradojal, sólo crece en complejidad. Los
computadores, los móviles y todos los dispositivos digitales que hemos
construido tienen una cantidad enorme de estados posibles. Los sistemas
de software tienen varios órdenes de magnitud estados que cualquier
computador. Y los problemas no son sólo técnicos, también surgen
problemas de gestión de esta complejidad.

- **Conformidad**. Los científicos también enfrentan la complejidad,
como veremos más adelante. La física trata con objetos de gran
complejidad incluso a nivel de partículas elementales, es cosa de ver
los esfuerzos enormes para entenderlas reflejadas en estructuras enormes
como el Super Colisionador de Hadrones, en el CERN. La máquina más
compleja jamás construida. Pero los físicos buscan explicaciones
simplificadas de la naturaleza, expresada en leyes entendibles por el
ser humano (aunque sólo sean accesibles unos pocos individuos). Pero el
ingeniero de software no puede contar con la esperanza del físico,
porque gran parte de la complejidad es arbitraria, forzada por la norma
que debe ser cumplida o la conformidad con interfaces de sistemas
externos, diseñados por otras personas o instituciones.

- **Necesidad de cambios.** Existe una permanente presión por
introducir cambios. Lo mismo pasa con los objetos físicos, como autos,
edificios o computadores. Pero las cosas manufacturadas rara vez son
modificadas después de ser construidas. Son reemplazadas por modelos
posteriores. Los cambios en el mundo de los objetos materiales es menos
frecuente que en el software. En parte porque el software encapsula su
función y la función es la parte que más siente la presión del cambio.
Después de todo el software es pensamiento puro y por tanto
infinitamente maleable. El cambio también es el producto del éxito del
software. Cuando un sistema es útil sus usuarios lo prueban en nuevos
casos, llevándolo al extremo, a los bordes del dominio original. El
usuario quiere cambios para ajustarlo a los nuevos usos del software.
Por otro lado, el software sobrevive la vida normal de la
infraestructura que lo soporta. En el paper de Brooks el autor sólo
nombra a la infraestructura física (computadores, impresoras), pero hoy
es peor, el sistema operativo, las bases de datos, el middleware que
soporta al software, evolucionan también y el sistema debe sobrevivir
estos cambios.

- **Invisibilidad.** El software es invisible e invisualizable. La
realidad del software no está plasmada en el espacio tridimensional
físico. Cuando hacemos diagramas de la estructura del software empezamos
a lidiar con una serie de gráficos que pueden representar el control de
flujo, el flujo de datos, las dependencias entre componentes, las
secuencias de tiempo, etc. Muchas de estas representaciones no son
planas, y ni siquiera jerárquicas. Al final la única representación
fidedigna es el código y sabemos que los que son capaces de leerlo y
entenderlo son muy pocos, y con mucho esfuerzo en algunos casos.

Por último, podemos observar que en realidad la complejidad sólo aumenta
y que las otras tres dificultades esenciales son consecuencia de esta y
a la vez aportan a la mayor complejidad.

Entonces, nuestra disciplina se trata de desarrollar técnicas para
abordar la complejidad.

Cuando se dice "el ritmo y naturaleza de los cambios del mundo digital
presenta un desafío complejo", lo que se hace es recoger esta
dificultad esencial de la que nos habla Brooks. Los cambios del mundo
digital, que es el mundo cuyos cimientos están en el software,
presentarán siempre desafíos complejos.

## 2) ¿Qué es la Complejidad?

Cuando decimos que algo es complejo queremos sugerir que es el resultado
inevitable de combinar los elementos, y que esto no implica una falta o
un fallo, como cuando decimos "esta receta es compleja".

Por otro lado, el término "complicado" lo aplicamos a lo que presenta
gran dificultad para entender, resolver o explicar, por ejemplo "un
complicado proceso judicial".

Recordemos el Conjunto de Mandelbrot que se aprecia en esta imagen:

![](//d2dspjyoh5c79p.cloudfront.net/9a7fba51-6e5b-11e6-aecf-c1145ad981b8-aa9f18b7)

Es indudable que esta es una imagen compleja. Se trata de un fractal,
una figura geométrica que tiene la particular propiedad llamada
*autosimilaridad*, esta nos dice que si hacemos un zoom en algunas de
las partes de la imagen obtendremos imágenes tan hermosas y complejas
como esta, pero estas imágenes serán similares a la original. Decimos
que esta es una imagen compleja porque tiene infinitos
detalles.

Y sin embargo, para los matemáticos la información contenida en este
conjunto es esencialmente cero.

Podemos definir el conjunto de Mandelbrot mediante una breve relación
matemática, incluso podemos escribir un programa que calcule este
conjunto en menos de 50 líneas de código (dependiendo del lenguaje de
programación).

La imagen original de arriba tiene 800 x 600 pixeles, cada pixel tiene
24 bits de información, es decir, si almacenamos la imagen en un
archivo, este contendrá 11.520.000 bits. Sin embargo el programa,
escrito en C, que describe esta imagen ocupará apenas unos 64.000 bits.

El matemático ruso [Andrei Kolmogorov](//en.wikipedia.org/wiki/Andrey_Kolmogorov) inventó el
concepto de Complejidad Descriptiva, o Entropía Algorítmica para tratar
de medir los recursos computacionales necesarios para describir un
objeto.

Por ejemplo, observen estas dos cadenas de letras:

> abababababababababababababababababababababababababababababababab
> 
> 4c1j5b2p0cv4w1x8rx2y39umgw5q85s7uraqbjfdppa0q7nieieqe9noc4cvafzf

Ambas tienen el mismo largo, 64 caracteres. Sin embargo, la primera
cadena se puede expresar como: "ab 32 veces", con sólo 11 caracteres.
Sin embargo, para la segunda cadena parece que no hay otra forma más
corta de representarla que escribirla por extensión.

Kolmogorov diría que la primera cadena es menos compleja que la segunda.

Ahora, volvamos al conjunto de Mandelbrot. Resulta que el programa que
permite calcular los puntos del conjunto tiene un parámetro, que indica
la cantidad de iteraciones necesarias para determinar el siguiente pixel
a dibujar. Si elegimos dibujar un segmento más detallado del conjunto de
Mandelbrot, en otras palabra hacer un zoom, este parámetro debe ser
mayor, lo que implica que el computador consume más tiempo y recursos
para generar el detalle de una parte más interna del conjunto. Queda
claro que la definición de complejidad algorítmica, tomada como el largo
del programa no refleja el uso real de la CPU en este problema.

La pregunta es si esta definición de complejidad es adecuada. Porque de
acuerdo a la noción de Kolmogorov el conjunto de Mandelbrot no es una
cosa compleja, y ya hemos visto que en términos de gasto computacional
(gasto de energía, y de tiempo de proceso) no parece ser simple.

Por otro lado, un objeto aleatorio, como la cadena
"4c1j5b2p0cv4w1x8rx2y39umgw5q85s7uraqbjfdppa0q7nieieqe9noc4cvafzf",
tienen una complejidad de Kolmogorov altísima (o máxima) pero no es una
cosa muy atractiva para el estudio.

Un televisor mostrando sólo ruido estático no es muy interesante, al
final sólo es simple ruido, pero ese ruido aleatorio es complejo en
términos informáticos, si seguimos la idea de Kolmogorov.

## 3) La simplicidad de las leyes de la naturaleza

> "Sin las matemáticas no podemos penetrar en profundidad en la
> filosofía. Sin la filosofía no podemos penetrar en profundidad en las
> matemáticas. Sin ambas no podemos penetrar profundamente en nada." -
> Leibniz

[Gregory Chaitin](//en.wikipedia.org/wiki/Gregory_Chaitin), estudiando
las misma nociones de complejidad de Kolmogorov, encontró en los
trabajos de [Leibniz](//en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz)
una de las primeras consideraciones sobre complejidad.

En los ["Discursos sobre la metafísica"](//www.libroesoterico.com/biblioteca/metafisica/Leibniz%20Discurso-de-Metafisica.pdf),
Leibniz se pregunta sobre la naturaleza de los "datos experimentales"
que representan unas manchas de tinta derramadas sobre una pieza de
papel.

Consideremos el conjunto finito de puntos obtenidos de esta forma, y
preguntémonos si este obedece una ley natural. Bien, para Leibniz no
basta con que exista una ecuación matemática que pase por todos los
puntos, porque siempre existe esa ecuación. El conjunto de puntos
obedece una ley sólo si hay una ecuación simple que pase por todos los
puntos.

Otro ejemplo de la preocupación de este filósofo por la complejidad se
presenta cuando en 1714 en su trabajo 
["Principio de la Naturaleza y la Gracia"](//profesorvargasguillen.files.wordpress.com/2011/10/leibniz-principios-de-la-naturaleza-y-la-gracia.pdf)
se pregunta, "¿por qué hay algo, en vez de la nada, si la nada es más
simple que algo?". 

En términos modernos lo que el filósofo racionalista quiere saber es de
donde viene la complejidad observada en el mundo. Para Liebniz la
respuesta es Dios. Dios ha creado el mejor mundo posible y que toda la
riqueza y diversidad que observamos en el universo es el producto de un
conjunto simple, bello y elegante de ideas. Dios maximiza la riqueza del
mundo, al tiempo que minimiza la complejidad de las leyes que lo
determinan. En términos científicos modernos, el mundo es entendible,
comprehensible y la ciencia es posible, porque existe una ley que puede
ser entendida.

El cosmólogo Max Tegmark argumenta que es más simple considerar un
ensamblaje de todas las leyes posibles y todos los posibles universo que
considerar un universo en particular. En otras palabras, el multiverso
es más fundamental que la pregunta sobre las leyes de nuestro universo
particular. Para ilustrar la idea, el conjunto de todos los números
positivos 1,2,3,... es muy simple, aunque un positivo particular, como
12478329212991232 puede ser arbitrariamente complejo.

Es decir, es más simple pensar en el multiverso que en tratar de
justificar la complejidad de nuestro universo. Todos los universos
posibles existen, y el nuestro no tiene nada de particular si lo vemos
desde esa perspectiva, aparece como complejo, y especial, simplemente
porque vivimos en él.

Pero volvamos a Leibniz. En la
**[Monadologia](//es.wikipedia.org/wiki/Monadolog%C3%ADa)** Liebniz
discute los medios para realizar una prueba matemática. Allí él anota
que para probar una sentencia complicada se divide en sentencias más
simple, hasta alcanzar proposiciones que son tan simples que se hacen
evidentes en si mismas y no requieren ser probadas.

Diversos epistemólogos han analizado las ideas de Leibniz, y han
observado que esta idea crucial de complejidad de Leibniz es algo muy
difícil de clarificar.¿Cómo medimos la complejidad de una ecuación y por
lo tanto la complejidad de las leyes naturales?

Si proponemos que el largo de la ecuación es una medida, eso es algo que
cambia con el tiempo. Además, ¿cuales son los elementos básicos que debe
tener una ecuación? Si la naturaleza ha de regirse por leyes simples,
como exige Leibniz, tenemos que saber cómo podemos medir la simplicidad
de estas leyes, bueno, Chaitin tiene una propuesta.

## 4) El Universo es Digital

Acabamos de ver que Leibniz plantea que la naturaleza ha de obedecer
leyes simples, bellas y elegantes, es decir, leyes comprensibles, sino
la ciencia no es posible. El problema filosófico es saber qué entendemos
por leyes simples, ¿la simplicidad de las ecuaciones que las describen?
y ¿qué pasa con todo el conocimiento previo que hay que tener para
comprender esas ecuaciones?

{{<figure caption="Electric Sheep 10679 - Generación 245 - Original art by [Scott Draves](//scottdraves.com) and [The Electric Sheep](//electricsheep.org)]" src="//d2dspjyoh5c79p.cloudfront.net/52f81cd4-6f1f-11e6-aecf-c1145ad981b8-aa9f18b7">}}

En la década de 1960 tres matemáticos, Solomonoff, Kolmogorov, y
Gregory Chaitin propusieron la Teoría Algoritmica de la Información o
TAI (Chaitin era adolescente cuando formuló estas ideas).

Según algunos la TAI da una respuesta precisa a la definición de ley
exigida por los filósofos de la ciencia. Esta respuesta se obtiene
cambiando el contexto. En vez de considerar que los datos experimentales
son puntos, y las leyes deban ser ecuaciones, en la TAI se hace todo
digital, todo pasa a ser combinaciones de 0s y 1s. Para la TAI una ley
de la naturaleza es una pieza de software, un algoritmo de computador, y
en vez de tratar de medir la complejidad de la ley por el tamaño de las
ecuaciones, consideramos el tamaño de los programas, el número de bits
en el software que implementan nuestra teoría.

Esto se expresa en el siguiente diagrama:

> Ley: Ecuación → Software,\
> Complejidad: Tamaño de las ecuaciones → Tamaño del programa, Bits de
> software.

Para la Teoría Algorítmica de la Información la labor científica se
modela así:

> Teoría (01100...11) → COMPUTADOR → Datos Experimentales (110...0).

En este modelo, ambas la teoría y la data son cadenas finitas de bits.
Una teoría es el software para explicar la data, y esto significa que el
software produce o calcula la data en forma exacta, sin errores. En
otras palabras, en este modelo una teoría científica es un programa cuya
salida (output) es la data, software auto contenido, sin ninguna entrada
(input).

Comparado con las observaciones de Leibniz, en que siempre hay la
posibilidad de obtener una ecuación complicada para cualquier conjunto
arbitrario de datos, en este modelo siempre hay una teoría con el mismo
conjunto de bits que la data que explica, porque el software siempre
contiene la data que está tratando de calcular como constante, evitando
así cualquier cálculo. En ese caso no hay una ley, no es una teoría
real. En este modelo decimos que la data sigue una ley, es decir, puede
ser entendida, sólo si el programa para calcularla es más pequeño que la
data que se trata de explicar.

En palabras de Chaitin: "entendimiento es compresión, comprensión es
compresión, una teoría científica unifica muchos fenómenos que parecen
disparatados y muestra que estos reflejan un mecanismo interno común".

Si el mundo que observamos, la complejidad que observamos, es producto
de las leyes de la naturaleza, y estas son software, entonces todo es
entendible mediante el software.

Si esto es así, entonces la mejor teoría es aquella con el programa más
corto que produzca, en forma precisa, la data observada. Esta sería la
versión en términos de la teoría algorítmica de la información, de la
Navaja de Ockham. Con estas nociones se puede definir la complejidad en
términos matemáticos, y empezar a probar cosas con respecto a las leyes
de la naturaleza.

Lo primero que se nota es que las cadenas más finitas de bits no tienen
leyes, son irreducibles en términos de algoritmos, son aleatorios en el
sentido que hemos definido, porque no hay una teoría más pequeña que la
data en si misma. Es decir, el programa más pequeño que produce la
salida es del mismo tamaño que la salida.

Lo segundo que se nota, es que no se puede estar seguro de que se ha
encontrado la mejor teoría. Para entender esto último necesitamos
conocer mejor uno de los grandes logros del pensamiento lógico.

## 5) Los límites de lo que podemos saber

> "Como sabemos,\
> Hay conocimientos conocidos.\
> Hay cosas que sabemos que sabemos.\
> También sabemos que hay conocimientos desconocidos.\
> Es decir sabemos que hay cosas que no sabemos.\
> Pero hay también desconocidos desconocimientos,\
> Aquellos que no sabemos que no los sabemos"\
>    - Donald Rumsfeld

Consideren esta imagen:

![](//d2dspjyoh5c79p.cloudfront.net/68161442-6e5d-11e6-aecf-c1145ad981b8-aa9f18b7)

Si Pinocho dice que su nariz crecerá, pero no lo hace, estaría
mintiendo, pero cuando Pinocho miente su nariz crece, pero al crecer su
nariz entonces estaría diciendo la verdad. Luego, ¿qué diablos debería
pasar después de que Pinocho dice esta frase?

Esta es una reformulación de la vieja Paradoja del Mentiroso, lo
interesante es que esta paradoja juega un papel fundamental en la
solución de un importante problema de la lógica matemática, y de paso en
el desarrollo de la computación moderna.

A fines del siglo XIX y principios del siglo XX la escuela formalista
era un grupo de matemáticos que consideraban la siguiente afirmación
como fundamental:

"La matemática es un juego ---carente de significado--- en el que uno lo
practica con símbolos carentes de significado de acuerdo a unas reglas
formales establecidas de antemano".

David Hilbert, un matemático alemán, formado esta corriente de
pensamiento, se encontraba molesto debido a las paradojas que aparecían
en los trabajos e intentos de axiomatización de las matemáticas de ese
tiempo, como por ejemplo, la monumental obra de Russel y Whitehead:
"Principia Mathematica". Esta magna obra de tres volúmenes, plasmaba el
tremendo esfuerzo de estos dos pensadores, un trabajo de años, que
alcanza su cima cuando en la página 379 del primer volumen se establece
la prueba de que 1+1 = 2, ¡la que se termina de demostrar en la página
86 del segundo volumen!

Hilbert era un hombre de carácter fuerte que se resistía a considerar
que la mente tuviera alguna clase de limitación. En 1880 el fisiólogo y
sicólogo alemán Emil du Bois-Reymond planteó en una famosa charla en la
academia de ciencias de Berlin, que hay problemas que ni la ciencia ni
la filosofía podrían resolver jamás. Esto lo resumió en la frase en
latín "Ignoramus et Ignorabimus" ("no sabemos y no podremos saber").

Para Hilbert esa concepción era errada, en 1930 replicó:

> "No debemos creer a esos, quienes hoy, con apoyo filosófico y tono
> deliberado, profetizan la caída de la cultura y aceptan el
> ignorabimus. Para nosotros no hay ignorabimus, y en mi opinión para
> nadie en las ciencias naturales. En oposición al necio ignorabimus
> nuestro eslogan deberá ser Wir müssen wissen --- wir werden wissen!
> ("¡debemos saber - sabremos!").

Lo que no sabía el famoso matemático es que mientras él pronunciaba
estas palabras un callado colega austriaco destrozaba todo su programa
con un brillante teorema.

Hilbert había propuesto en 1920 un programa de investigación para
resolver las paradojas de las matemáticas y establecer un sistema formal
que permitiera darle bases sólidas a esta disciplina.

Lo que Hilbert pedía que las matemáticas tuvieran, entre otros, estos
atributos:

> \- **Formalismo**, es decir, todas todas las afirmaciones matemáticas
> deberían ser escritas en un lenguaje preciso y formal, y manipuladas
> de acuerdo a reglas bien definidas.
>
> \- **Integridad**, debía mostrarse una prueba de que todas las
> afirmaciones matemáticas pueden ser probadas en el formalismo.
>
> \- **Consistencia**, Hilbert pedía una prueba de que ninguna
> contradicción puede ser obtenida en el formalismo de las matemáticas.
>
> \- **Decibilidad** debería haber un algoritmo para decidir la verdad o
> falsedad de cualquier afirmación matemática.

Kurt Gödel descartó los tres primeros atributos solicitados por Hilbert,
no es posible formalizar totalmente las matemáticas, y por lo tanto
estas no pueden tener la propiedad de integridad, y además no pueden ser
consistentes. Para esto usó una variante de la paradoja del mentiroso. 

En esencia lo que hizo Gödel fue formular una proposición que dice "Esta
proposición es indemostrable". Si la proposición es indemostrable,
entonces es cierta, y por lo tanto la formulación de la aritmética es
incompleta (porque hay una proposición no demostrada), por otro lado, si
la proposición se puede demostrar, es decir, es falsa, entonces la
formulación de la teoría es inconsistente. La prueba de Gödel involucra
la construcción de una suerte de máquina lógica, un computador
rudimentario que escribe sentencias lógicas siguiendo ciertas reglas.

El cuarto atributo, conocido como problema de la decibilidad o
Entscheidungproblem. Lo que pide Hilbert es proporcionar un mecanismo
que permita determinar si una afirmación dada es válida dentro de un
sistema formal, o si existe un modo de decidir si una sentencia
matemática puede ser demostrada a partir de un conjunto de axiomas y
siguiendo las reglas de la lógica.

La respuesta que otorgaron Alonzo Church primero, y en forma
independiente y muy poco tiempo después Alan Turing fue que no era
posible. Y con estos resultados el programa de Hilbert fracasó.

Turing fue más tarde a estudiar con Alonzo Church y demostraron que
ambas pruebas eran equivalentes, lo novedoso del método de Turing es que
para desarrollar su prueba construyó una máquina ideal que simula los
estados por los que pasamos al razonar matemáticamente.

Esta máquina es en realidad la descripción de un programa informático,
Turing encontró la forma de construir el hardware y el software en la
misma idea. El hardware que de sustrato a las instrucciones que vienen
contenidas en el software.

Los resultados de Gödel, Church y Turing abarcan mucho más que la teoría
de números y la aritmética, gracias a la introducción precisa del
concepto de algoritmo computacional. En la actualidad el teorema de
Gödel se considera aplicable a todo sistema axiomático formal y por
extensión los resultados de Turing y Church imponen también un límite a
nuestras capacidades computacionales.

## 6) Conocimiento e innovación

El famoso economista, y acérrimo defensor del liberalismo económico
clásico, [Friedrich Hayek](//en.wikipedia.org/wiki/Friedrich_Hayek)
afirmó que el Teorema de Gödel no es sino un caso especial de un
principio más general, que aplica a todos los procesos conscientes y en
particular a todos los procesos racionales, es decir el principio de que
entre sus determinantes siempre habrá reglas que no pueden ser
declaradas o que incluso son inconscientes.

[Michael Polanyi](//en.wikipedia.org/wiki/Michael_Polanyi), el gran
pensador de origen húngaro, nacionalizado británico, traza el límite a
la capacidad de articular el conocimiento humano basándose en el
descubrimiento de Gödel. 

Polanyi niega la posibilidad de llegar a la verdad de manera mecánica
siguiendo el método científico. Todo conocimiento, no importa cuan
formalizado esté, depende de compromisos. 

Polanyi argumenta que los supuestos que subyacen a la filosofía crítica
no sólo son falsos, pues socavan los compromisos que motivan nuestros
logros más altos. Él aboga por que reconozcamos que creemos más de lo
que podemos demostrar y sabemos más de lo que podemos decir.

Un conocedor no se aparta del universo, sino que participa personalmente
en este. Nuestras habilidades intelectuales son guiadas por compromisos
apasionados que motivan el descubrimiento y su validación. Para Polanyi,
un gran científico no sólo identifica patrones, sino que escoge
preguntas significativas con una alta probabilidad de encontrar una
resolución exitosa. 

Los innovadores arriesgan su reputación comprometiéndose con una
hipótesis. Polanyi pone de ejemplo a Copérnico, afirmando que este llegó
a la relación real entre la Tierra y el Sol no como consecuencia de
seguir un método, sino que a través de "la mayor satisfacción
intelectual que deriva del panorama celestial visto desde el Sol en vez
de la Tierra."

Para Polanyi, nuestra conciencia tácita nos conecta, aunque de manera
falible, con la realidad. Al contrario de su colega y amigo Alan Turing,
Polanyi rechazaba la idea de que las mente podía ser reducida a un
conjunto de reglas. Polanyi aboga por el concepto de Emergencia, la idea
de que existe un proceso a través del cual entidades, patrones o
regularidades mayores surgen de entidades menores más simples que no
exhiben las misma propiedades. 

Polanyi afirma que hay varios niveles de realidad y causalidad. Esta idea
se basa en el supuesto de que las condiciones de borde otorgan grados de
libertad, los que en vez de ser aleatorios, están determinados por
realidades de más alto nivel, cuyas propiedades dependen, pero son
distintas, de los niveles inferiores de los cuales emergen. Un ejemplo
de una realidad de alto nivel funcionando como una fuerza causal hacia
las capas interiores es la consciencia generando significado
(intencionalidad).

## 7) Emprendimiento e Incompletitud

La famosa incubadora [Y-Combinator](//www.ycombinator.com/), fundada por
el programador y emprededor [Paul Graham](//en.wikipedia.org/wiki/Paul_Graham_(computer_programmer)),
lleva este nombre por el [combinador de punto fijo Y](//en.wikipedia.org/wiki/Fixed-point_combinator#Fixed_point_combinators_in_lambda_calculus),
que se usa para construir funciones recursivas.

Sucede que la primera persona en crear funciones recursivas fue Gödel.
La idea del combinador de punto fijo es un derivado directo del trabajo
de Gödel. ¿Por qué Graham decidió llamar así a una incubadora de
negocios? Porque en esencia Y-Combinator es un programa que corre otros
programas, pero hay una relación más interesante entre emprendimiento y
el teorema de Gödel.

Para entender esto, consideren este ejemplo, que tomaremos prestado a
Max Skibinsky, un hacker y ex socio de Mark Andreessen.

(Fuente:
[http://skibinsky.com/godel-incompleteness-for-startups/](//skibinsky.com/godel-incompleteness-for-startups/))

Imaginen el Monopolista Máximo, que quiere encontrar todas las formas de
extraer dinero y valor del mercado global y mantenerlo dentro de su
imperio comercial. Es como Bill Gates pero con esteroides. ¿Cuál sería
su "sistema formal" de economía y negocios? Cualquier cosa que él
desee: la Librería del Congreso de Estados Unidas completa, o todas las
ediciones de The Economist desde que el mundo es mundo. Todos los
tratados de economía escritos desde las tablillas de greda hasta las
versiones online. 

Puede tener todos los sistemas formales y expresivos que quiera,
teniendo el cuidado de agregarlo de modo de evitar contradicciones.
Puede depositar este conocimiento en un googolplex de computadores para
compilar y analizar estos datos para obtener toda la lista de sentencias
verdaderas derivadas de este sistema. En el fondo, obtendría todas la
formas de obtener dinero, crear nuevas startups lucrativas, y todas la
forma de generar valor. Más aún, este señor tiene todo el dinero
suficiente para instalar estas startups y convertirlas en negocios
operacionales.

En otras palabras, nuestro Monopolista Máximo no se detendrá para
obtener cualquier prometedora idea de negocios para si mismo, e
invertirá casi todos sus recursos ilimitados ante la oportunidad. Este
descripción no está lejos de la realidad, cuando piensan en Apple,
Alphabet (Google), Facebook y Amazon. Estas compañías han construido
impresionantes sistema semi formales a través de los años que llevan
operando. Estos sistemas están optimizados para una cosa: como extraer
el máximo valor de mercado de la innovación tecnológica. Sus sistemas
son inmensos, código fuente de programas, guías de marketing,
"playbooks", guías de contratación e incontables documentos. Este es
el sistema que sus empleados usan colectivamente en su trabajo diario y
es la forma en que se entrenan a los nuevos reclutas. Y sobre todo esto
tenemos decenas de miles de millones de dólares en el banco necesarios
para llevar a cabo cualquier conclusión arrojada por sus sistemas semi
formales.

Y aún así, a pesar de todo ese poderoso conocimiento formalizado, una y
otra vez aparecen startups innovadoras de la nada. Siempre pillan a los
incumbentes ciegos en algún punto y les hacen pagar miles de millones de
dólares para adquirir estos nuevos descubrimientos. Ya sea Alphabet o
Facebook, a cualquiera le gustaría dar con estas ideas primero y
capturar toda la utilidad de estas innovaciones para si mismos, en vez
de tener que pagar millones por adquirir una startup disruptiva. ¿Por
qué no pueden hacerlo entonces? Lo que impide a estas poderosas
compañías que lleguen a la billonaria o trillonaria capitalización es el
teorema de Gödel.

Lo que Gödel ha demostrado es que cualquier tipo de Monopolista Máximo
está condenado a perder. Hay sentencias verdaderas en su sistema, es
decir, hay nuevas ideas y modelos de negocios de startups, que nunca
podrán ser probados (demostrados) dentro de sus sistema formal, por
amplio que este sea. No importa cuantas bibliotecas de conocimiento se
agregue a su sistema, cuanto poder computacional se agregue al sistema
de descubrimiento formal, aún así nunca, jamás, descubrirá todas las
sentencias verdaderas (es decir, los modelos rentables) de su sistema
formal. El Monopolista Máximo siempre perderá al final porque no puede
cubrir todas las sentencias. Nunca podrá completar su Imperio de hacer
dinero.

## 8) Negocios y Software

La historia es un proceso de creación de sistemas formales que sirven un
propósito específico. Desde el Código de Hamurabbi hasta los terabytes
de información que permiten que Facebook prediga tus intereses y te
presente noticias y avisos relevantes.

Esta creación de sistemas formales debe asumir algunos compromisos,
simplificaciones lo suficientemente buenas de una variedad infinita,
mientras se trata de capturar y mantener la complejidad del dominio que
se modela. La única forma que tenemos de llevar nuestra vida es
simplificando el mundo alrededor nuestro, es el conocimiento personal
del que hablaba Polanyi.

Todas las reglas, modelos mentales, convenciones, etiquetas, prácticas,
etc, han sido desarrolladas con el simple propósito de atrapar a la
infinita complejidad dentro de una abstracción simple con la que podamos
lidiar. Es la manera que tiene nuestro cerebro de hacer atajos para
contar con un modelo finito de la realidad, más que la realidad infinita
en si misma (¿será que el ideal de Chaitin sea imposible y al final la
realidad sea totalmente aleatoria y por lo tanto inasible?).

Lo que Gödel, Türing y otros han probado de manera tan decisiva es que
nunca tendremos sistemas ideales. Todas nuestras aplicaciones, programas
y sistemas nunca capturaran toda la variedad de infinitas posibilidades.

A pesar de todas sus limitaciones, los sistemas formales, y por
extensión el software son objetos totalmente necesarios para modelar el
mundo. Nuestros cerebros sólo pueden operar con una cantidad pequeña y
limitada de axiomas y reglas simples. Esa es la forma en que operamos.
Pero aún así, el primer paso para evitar errores es reconocer las
limitaciones naturales de los sistemas formales, que es que nunca podrán
representar de forma completa la realidad.

Una compañía es un sistema semi formal para extraer dinero del mercado.
Las startups pueden saltarse la parte de generar utilidad durante
algunos años, pero al final lo que diferencia a los ganadores de los
perdedores es la capacidad de obtener suficiente rentabilidad del modelo
de negocios que han descubierto o desarrollado.

Recordemos el caso de Microsoft. A fines del segundo milenio era para
todos los efectos prácticos un monopolio tecnológico. El sistema de
conocimiento organizado de esta empresa en 1998 abarcaría miles de
páginas impresas imposibles de dominar por una persona. En ese instante
y dado el tamaño de la empresa se requerían diversas guías para los
empleados de cada división: ¿cómo vender licencias OEM? ¿Cómo mejorar
Office para mantener a los sistemas operativos de la competencia fuera
de mercado?, etc. Con decenas de miles de reglas Microsoft estaba en una
posición única de extraer asombrosos márgenes de su posición dominante
en sistemas operativos y software de oficina.

Imaginen por un momento que un viajero del tiempo del futuro se aparece
a Bill Gates en 1999 y le dice:

> "¡Soy del futuro! ¡Debes vender palabras claves que calcen con
> consultas de búsqueda en la web!"

¿Qué haría Bill Gates con esta información? La sintaxis del
requerimiento es familiar, sabe lo que es una búsqueda en la web y lo
que significan palabras claves. Hay algunas pocas empresas de búsqueda
por ahí como Lycos y Altavista, pero su capitalización es menos que el
presupuesto para bebidas gaseosas de la compañía. Son compañías con
problemas. ¿Por qué vender palabras claves de búsqueda?

Todo lo que busque Bill en su sistema semi formal, o las consultas que
haga con sus expertos será incompleto. La probabilidad de que la
sentencia que demuestra que vender palabras claves para la búsqueda sea
verdadera es muy baja, a pesar de toda la información con la que cuenta
Bill Gates. Su sistema en ese tiempo abarcaba los dominios de venta de
hardware, computadores, ventas OEM, y software.

El modelo de Google es imposible de analizar para Microsoft.

Corresponde que Larry Page y Sergey Brin formalicen el sistema de
búsquedas en la web y la venta de palabras claves. Los fundadores parten
con con su imaginación y el sueño de "organizar la información del
mundo". Como esta sentencia se vuelve muy rentable se inicia un proceso
en cascada de formalización de este dominio. Nuevos términos y axiomas
se agregan al sistema de Google.

Pasa el tiempo y en 2003 nuestro viajero del tiempo se aparece a Larry
Page con nuevas palabras proféticas:

> "¡Soy del futuro! ¡Deberían organizar a los amigos en grafos sociales
> entre toda la gente!"

Larry examina su sistema formal, puede acceder también al sistema formal
de Microsoft de los noventa, y aún así ninguno de los dos sistemas es
capaz de explicar el significado de la profecía. Hay algunas pocas redes
sociales por ahí, Friendster y MySpace, su capitalización es menos que
todo el presupuesto en sushi de Google. Larry entiende la sintaxis de la
sugerencia, pero carece de las herramientas para demostrar la ganancia
de este nuevo modelo de negocios.

Es el turno de Mark Zuckerberg de formalizar el sistema sobre construir
grafos sociales y encontrar formas óptimas de extraer valor de estos.
Podemos seguir así tanto hacia el futuro como al pasado (aunque un viaje
hasta los tiempo de Tesla y Edison tiene el problema adicional que
habría que explicar la sintaxis a estos innovadores para que entienda
conceptos como el computador personal o la internet).

## 9) Toda empresa es de software, o lo será

> "Tu piensas que sabes cuando aprendes, y estás más seguro cuando
> puedes escribir, aún más cuando enseñas, pero estás cierto cuando
> puedes programar." - Alan Perlis, epigrama 116

Hemos visto como el concepto de Complejidad nos llevó por un viaje hacia
los fundamentos del conocimiento humano. Aprendimos que hay límites a lo
que podemos conocer, pero por paradójico que parezca, es esta limitación
la fuente de toda innovación disruptiva.

Si observamos el desarrollo de las grandes empresas actuales veremos que
entre las más grandes y con mayores recursos en el mundo, es decir, con
la mayor capitalización, están empresas tecnológicas, como Apple,
Alphabet, Amazon, Facebook.

Esta es una tendencia que seguirá ocurriendo por el simple hecho de que
son estas empresas las que están en mejores condiciones de construir
sistemas semi formales de descubrimiento de oportunidades de negocios.
No sólo tienen grandes recursos, sino que bastas bases de datos y
sistemas de conocimientos que les permiten explorar nuevos modelos de
negocios, dentro de los límites del Teorema de Gödel por supuesto.

Sin embargo, hemos encontrado que es posible encontrar espacios no
cubiertos por estos bastos sistemas formales. Ese es el espacio de la
innovación. Son los puntos ciegos que estas empresas no pueden cubrir
los que presentan las oportunidades para crear valor.

Puesto que, como hemos visto, la necesidad de entender, de asir la
complejidad del mundo moderno, requiere de sistema formales de
información y de inferencia de reglas que permitan operar dentro de los
dominios de cada mercado, es que surge como conclusión evidente que la
capacidad de construir estos sistemas formales es esencial para la
sobrevivencia de la empresa moderna. Esa habilidad es la habilidad de
construir y controlar el software.

Así que cuando nuestros amigos de Continuum afirman que:

> "Tu empresa ya es una empresa de software. O lo será. O Morirá."

Están haciendo explícita la conclusión de este extenso artículo. Todo es
software y por tanto toda empresa lo es. 

El desafío está en saber cómo desarrollar software, esa será una de las
competencias core de toda empresa exitosa del futuro. Pero, tal como
hemos visto, desarrollar software es lidiar con la complejidad. 

Por otro lado, la realidad cambia y es inabarcable por nuestro modelos
formales del mundo, sabemos que, por el Teorema de Gödel, nunca podremos
estar listos para entender y modelar por completo todas las
oportunidades de negocios que se nos presentan. El reconocer esta
limitación es la que nos prepara para afrontar el desafío de la
transformación digital. La transformación y adaptación al cambio
consiste precisamente en ampliar o desarrollar nuevos sistemas formales
para superar estas limitaciones. 

Lo que he intentado mostrar en este artículo es que detrás del concepto
de transformación digital hay fundamentos epistemológicos profundos,
cuyo conocimiento no solo es interesante y enriquecedor, sino que da una
nueva perspectiva a esta visión de desarrollo de negocios.

---

Créditos de la imagen del título: "Electric Sheep - Generation 245 -
Sheep 6221".  Original art by [Scott Draves](//scottdraves.com) and
the [Electric Sheep](//electricsheep.org).
