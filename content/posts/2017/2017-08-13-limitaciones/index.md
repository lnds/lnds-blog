---
title: "Limitaciones"
authors: [admin]
date: 2017-08-13T08:25:11-03:00
slug: "limitaciones"
aliases: [/blog/lnds/2017/8/13/limitaciones]
draft: false
tags: ['rock', 'agilidad', 'devops', 'innovación']
image:
  placement: 3
---

En mi timeline de Facebook aparece una referencia a
[una columna de opinión](http://impresa.lasegunda.com/2017/08/12/A/8337C5C1/C637C5FV)
de Carlos Franz en el diario [La Segunda](http://impresa.lasegunda.com/2017/08/12/A)

El título es "eñe" y parte así:

> Un año no es lo mismo que un ano. Aunque a veces algunos años resulten
> ser como el ano, es preferible no confundir esta indispensable parte
> del cuerpo con un ciclo de la Tierra en torno al sol. La buena
> ortografía sirve, entre otras cosas, para evitar confusiones tontas o
> peligrosas como ésa. Además, sirve para entendernos mejor por escrito
> y mantener la historia, identidad y unidad de nuestra
> lengua.
>
> Sin embargo, parece que esos nobles objetivos no le importan mucho al
> Estado de Chile (en su actual estado). Por ejemplo, nuestro Servicio
> de Impuestos Internos (SII) atiende a los sufridos contribuyentes
> mediante un programa informático que --en muchos casos-- no admite
> signos ortográficos propios de la lengua oficial de nuestra república.
> En su plataforma de Internet el SII nos impide usar la tilde de los
> acentos gráficos. Y como si esto fuera poco, el SII nos prohíbe usar
> una de las letras de nuestro abecedario: la eñe.
>
> Un señor apellidado Patiño, que viva en Ñuñoa y desee emitir una
> boleta de honorarios electrónica por servicios de movilización de
> niños, se verá convertido en el "senor Patino domiciliado en Nunoa" y
> su boleta dirá que se dedica a la "movilizacion de ninos".
>

Ante la duda de Franz y de seguro de varios no informáticos del porqué
ocurren estas cosas, me veo obligado a explicar cuál es la principal
razón de que esto suceda.

En una palabra, la única razón por la que no se puede ingresar una eñe
en un formulario en un sitio web cualquiera es esta:

<center>
<b>INCOMPETENCIA</b>
</center>

A estas alturas del siglo manejar carácteres "especiales" ya no
debería ser problema, no es fácil, de hecho es bastante complicado, pero
tampoco es ciencia espacial.

Y de seguro acá surgirá otra duda para mis amigos muggles que no
dominan las complejidades de las ciencias oscuras de la computación,
¿por qué les denominamos "carácteres"
especiales?

La razón es histórica. Los primeros computadores fueron creados en
Inglaterra y Estados Unidos, en inglés no hay acentos y las letras del
alfabeto son sólo veintiséis.

No hay eñe en inglés, como tampoco acentos, o dieresis (esos dos
puntitos que se ponen a veces sobre la u para que podamos decir pingüino
y no confundir güiña con guiña).

Cuando los computadores empezaron a manejar letras además de números fue
necesario establecer una forma estándar de codificar estos símbolos.
Entonces se recurrió a cosas que ya existían. En 1928 IBM introdujo una
máquina de tarjetas perforadas, que era usada para tabular datos y junto
con la máquina se definió una codificación basada en 6 bits (es decir,
servía para codificar 64 caracteres, recordemos que si tenemos n bits
para una código, podemos codificar 2 elevado a n símbolos).

A estos primeros códigos se les
llamó [BCD](https://es.wikipedia.org/wiki/Decimal_codificado_en_binario),
o Binary Coded Decimal. Con estos
códigos sólo se podían representar los dígitos del 0 al 9 más las letras
mayúsculas desde la A a la Z y algunos pocos símbolos más, como \$, \#,
@, etc.

El problema es que no había estándar, cada fabricante codificaba en 6
bits como mejor le parecía, la misma IBM tenía representaciones
distintas entre diversos modelos.

En 1963 se establecen dos estándares en paralelo, uno de la misma IBM
conocido como [EBCDIC](https://es.wikipedia.org/wiki/EBCDIC),
y otro
llamado [ASCII](https://es.wikipedia.org/wiki/ASCII) diseñado
por la Asociación de Estándares de Norteamérica, que en ese tiempos era
conocida como ASA (American Standard Association) y que es la antecesora
de la
actual [ANSI](https://www.ansi.org/) (American
National Standards Institute).

La novedad de EBCDIC y [ASCII](https://es.wikipedia.org/wiki/ASCII) es
que incorporaban las letras minúsculas y por lo tanto requerían una
codificación de 7 bits.

Lo curioso es que IBM fue uno de los principales impulsores de ASCII,
pero sus productos tardaron varios años en adoptar
ASCII.

Todo esto provocó los primeros problemas de traducción de caracteres,
EBCDIC coloca en su tabla las mayúsculas antes que las minúsculas,
además de colocar todas las letras antes de los números, exactamente al
revés de ASCII. Además las letras se encuentran segmentadas en EBCDIC.
Ante esto, la traducción implicaría muchas transformaciones bastante
complejas.

Pero IBM y otros proveedores se toparon con la realidad de los múltiples
caracteres adicionales que introducen los lenguajes europeos. EBCDIC
resolvió esto creando code pages. Por ejemplo, la code page 284
(conocida como EBCDIC 284) es una codificación que se puede usar en
Latino America, pero es distinta de la codificación para Francia (EBCDIC
297).

En EBCDIC-284 la eñe tiene el código 106, mientras que en EBCDIC-297 la
misma é tiene el código 73. El código 106 en EBCDIC 297 es ù. Entonces
si usted codificó un texto en Chile en EBCDIC 284 y lo envía a Francia
la palabra niño será recibido como niùo.

En ASCII la situación no es mejor. ASCII sólo se hace cargo de la
codificación en 7 bits. Hacia los 70´s y 80´s ya estaba establecido que
un byte era un conjunto de 8 bits (no siempre un byte fueron 8 bits).
Esto implica que se pueden usar 8 bits para codificar carácteres
adicionales.

Entonces diversos proveedores usaron esos 128 espacios adicionales para
codificar otros símbolos para distintas necesidades.

En los tiempos de los primeros PC, Apple introdujo sus extensiones a
ASCII, como [Mac OS Roman](https://en.wikipedia.org/wiki/Mac_OS_Roman).

El mismo IBM en su PC creó varias extensiones para que pudieran ser
usadas por DOS, el sistema operativo que adquirieron de Microsoft.

Acá el panorama mejoró un poco, por ejemplo, la Code page 850 de ASCII
DOS, conocida también como DOS Latin 1, nos permite resolver el problema
de más arriba. En esta codificación, tanto en Chile como en Francia la
eñe es el código 164.

Lo malo es que no se podría compartir información con Grecia, quienes
además de soportar nuestros caracteres deben usar otros adicionales. En
Grecia el estándar a usar es la Code Page 737 donde la eñe es
reemplazada por la letra mu en minúscula griega.

Estas cosas eran problemáticas en los ´80, porque los PC se debían
configurar de la manera adecuada para que usaran el Code Page pertinente
al país en que se operaba, pero al interactuar
con [MainFrames](https://en.wikipedia.org/wiki/Mainframe_computer) (grandes
servidores de esa época) venían los
problemas. Sumen esto a que las impresoras también tenían su propia
codificación. Recuerdo que en esos tiempo uno podía pasar mucho rato
configurando la impresora para que las eñes salieran adecuadamente en
las impresoras.

Para los programadores en USA estas cosas no eran gran problema, pero
cuando empezaron a exportar sus aplicaciones se dieron cuenta de estas
dificultades. Para los programadores en Europa o Latinoamérica la cosa
no fue fácil desde el principio.

La solución más simple fue obligar a los usuarios a usar ASCII, después
de todo, los programadores estaban acostumbrados a estas limitaciones.

Por ejemplo, yo normalmente tengo mi teclado configurado en Inglés
cuando programo y lo cambio a español sólo para escribir textos, como
este, porque es más eficiente para mi operar de esa manera. Pero es
injusto que los programadores impongamos limitaciones que carecen de
lógica a nuestros usuarios.

La cosa se complicó aún más con la aparición de internet. Ahora los
textos fluían por la red sin limitaciones.

Para resolver esto de una vez Joe Becker, Lee Collins y Mark Davis
quienes trabajaban en Apple y Xerox decidieron lanzar el
proyecto [Unicode](http://unicode.org/).

Hace veintinueve años, en agosto de 1988 publicaron el primer borrador
de lo que se conoce hoy como Unicode88. En 1989 se unieron a este
esfuerzo otras compañías como Microsoft y Sun Microsystems. En febrero
de 1991 se formó en Consorcio Unicode y en octubre de ese año se publicó
la primera versión del estándar.

Unicode fue desarrollado bajo los siguientes objetivos:

- **Universalidad:** Un repertorio suficientemente amplio que albergue
    a todos los caracteres probables en el intercambio de texto
    multlingüe.
- **Eficiencia:** Las secuencias generadas deben ser fáciles de
    tratar.
- **No ambigüedad:** Un código dado siempre representa el mismo
    carácter.

Así que en Unicode resolvemos el problema de la eñe de una vez por toda,
la eñe minúsculas tiene el código 241 y la EÑE mayúscula tiene el código
209, acá en Chile, en Francia o en Grecia.

Don Carlos Franz puede exigir ahora que se resuelva el problema,
bastaría con usar Unicode en todas las aplicaciones del estado,
¿verdad?

En principio la respuesta es sí, pero no es tan simple.

Porque, el problema con Unicode es que requiere que todos los símbolos
sean representados en 32 bits, es decir, ocupan 4 veces el tamaño
actual, eso implicaría multiplicar por 4 los tamaños de las bases de
datos que actualmente guardan todo en alguna variante de la codificación
ANSI (ASCII extendido).

Es por esto que se crearon tres forma de codificación para Unicode:
UTF-8, UTF-16 y UTF-32, por la cantidad de bits que se usan para
representar a los símbolos del lenguaje. La codificación UTF-8 es la más
popular y cada símbolo puede ser representado por 1 ó más bytes, es lo
que se denomina técnicamente una codificación de largo variable.

El problema con UTF-8 es que nuestra querida eñe se representa con 2
bytes!

En Unicode la eñe es el código 241, en binario esto se representa así:

**0000 0000 1111 0001**

Las reglas de codificación de UTF-8 indican que al ser un número
superior a 128 se debe codificar usando una serie de transformaciones,
que se traducen en que nuestra eñe queda codificada de la siguiente
manera:

**1100 0011 1011 0001**

Ahora, supongamos que descuidadamente enviamos nuestra eñe por internet
desde Chile a Francia sin indicar que estamos usando UTF-8, y el
programador que recibe estos textos en Francia y como vienen 16 bits
interpreta erróneamente que esto corresponde a UTF-16 y en ese caso su
interpretación arrojaría este extraño
símbolo: 쎱

Así que la lección en este caso es que no basta con la codificación,
hay que incorporar meta información. Todo se resuelve si ambas partes
saben que se está trabajando con la misma
codificación.

Y eso es lo que pasa con muchos sistemas, sitios webs y aplicaciones en
Chile.

Manejar correctamente la codificación requiere esfuerzo, es complicado,
pero no es algo imposible. Basta con conocer todo lo necesario sobre
codificación, encoding, transformaciones y por supuesto administrar bien
las configuraciones y controlar adecuadamente las entradas y las
salidas.

Eso requiere, reitero, esfuerzo y contar con las competencias adecuadas.

Entonces, ¿por qué ocurren estas cosas aún, si tenemos la solución desde
hace casi treinta años?

Alguien por ahí dijo que [no necesitamos más informáticos, lo que necesitamos es mejores informáticos](https://twitter.com/leosoto/status/893472819505491969).

Informáticos que no transfieran sus propias limitaciones a los usuarios
finales.

### **Referencias:**

- Wikipedia: [Unicode](https://es.wikipedia.org/wiki/Unicode),
[ASCII](https://es.wikipedia.org/wiki/ASCII),
[EBCDIC](https://es.wikipedia.org/wiki/EBCDIC)

- Joel on Software, [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
