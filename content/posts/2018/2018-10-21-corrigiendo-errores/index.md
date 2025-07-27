
---
title: "Corrigiendo errores"
authors: [admin]
date: 2018-10-21T08:25:11-03:00
slug: "corrigiendo-errores"
tags: ["computador", "computadora", "ordenador"]
draft: false
image:
    focal_point: "Center"
    placement: 3
    preview_only: false
---

En España usan la palabra "ordenador", para referirse a las
computadoras, siguiendo la costumbre francesa, que empezó a usar el
término "ordinateur" a partir de la década de 1960. Pero el uso de esa
palabra es una incoherencia, tal como lo plantea Antonio Vaquero Sanchez
en un artículo en el diario El Mundo, de España en 1997[^1]:

> ¿Qué significa ordinateur? No se debe entrar al trapo de los que
> defienden el uso de la palabra "ordenador" porque éste realiza
> "ordenaciones" (operaciones de ordenación). Puede hacer más,
> muchísimo más, que ordenar elementos ordenables. Admitir esa
> denominación por esa causa sería como admitir la designación del todo
> por una parte sólamente. Tampoco es válido el argumento basado en la
> acepción de "orden" como "instrucción". Ordinateur viene definido
> en francés así "\... qui émite ordres". En definitiva, quien da
> órdenes, no quien las recibe. Por tanto el uso de la palabra
> "ordenador" es una incorrección semántica. No lo digo yo. Lo dicen
> los propios franceses. [...] La contestación \[dada por los
> franceses ante la incoherencia\] fue "le mot n\'est pas bon, mais
> nous n\'avons pas trouvé d\'autre meilleur" ["La palabra no es
> buena, pero no hemos encontrado otra mejor"].

Así que con esta corrección lingüistica, partimos este breve artículo
sobre corrección de errores.

## ¿Qué hacen las computadoras?

Esperamos de todo sistema de cómputo moderno al menos tres cosas,
primero que realice cálculos sobre datos que recibe de entrada, lo
segundo es que pueda almacenar esos datos y por último que sea capaz de
transmitir datos (al menos entregar los resultados). Imaginen una
computadora que no pueda almacenar ni transmitir datos, sería
prácticamente inútil. 

Pero el desafío que esto impone no es menor, porque la data debe
permanecer exacta. Los datos se almacenan como secuencias de [ceros y
unos](/blog/lnds/2018/09/23/ceros-y-unos) y basta con
que uno de los millones de bits en la memoria de un computador mute su
valor de cero a uno o viceversa, para que el resultado de cualquier
cálculo sea erróneo.

Los errores en transmisión de datos son frecuentes, pues la
comunicación se ve afectada por el "ruido". Esto lo experimentamos en
el día a día, en una conversación podemos entender mal una palabra, pues
estamos conversando con alguien en la vía ´publica y el ruido de fondo
no nos permite escuchar bien lo que dice nuestro interlocutor, le
pedimos que repita, o que hable más fuerte, para reducir el
error.

Al transmitir datos pasa algo similar, más si se usan medios
electrónicos. Las distancias también hacen que se pierda energía en el
trayecto, y es por esto que se usan sistemas repetidores, que vuelven a
entregar energía para que no se pierda la
señal.

Pero al almacenar también pueden haber errores. Cuando anotas el número
de una persona, para llamarla más tarde, si te equivocas en una cifra, o
tienes mala letra, como es mi caso, te cuesta entender lo que escribiste
en esa ocasión, puedes cometer
errores.

Este tipo de errores también ocurren en las máquinas. A veces al
escribir un 1 este queda mal almacenado como 0, produciéndose el error.
A escala humana cometer errores de almacenamiento no es tanto, pero los
computadores manejan mucha más información que
nosotros.

Consideren un notebook con 500 gigabytes de almacenamiento, una
configuración bastante habitual hoy en día. Es es el equivalente a 75
millones de páginas de texto escrito. Si ese sistema tuviera una tasa de
un error por millón de páginas, entonces tendríamos 75 errores en
promedio en el dispositivo a plena capacidad. Si descargas un progama
que pesa unos 100 megabytes, y el computador interpreta mal un byte
entre un millón, tendrías alrededor de 100 bytes mal interpretados,
suficiente para que tu programa no funcionara, o se interrumpiera en el
momento más inesperado.

Esto quiere decir, que un computador con un 99.9999% de exactitud no es
suficiente para ser usable. Entonces se necesita un mecanismo que nos
proteja de estos errores, y por fortuna existe, y es una de las cosas
más ingeniosas que hemos desarrollado en
informática.

## El Truco de la Repetición

Supongamos que un computador en tu banco quiere transmitir el balance de
tu cuenta a través de internet. Imaginemos que el balance de tu cuentas
es $ 521.375, pero la red no es muy confiable y cada digito tiene un 20 
por ciento 
de probabilidad de ser alterado. Entonces puede llegar $ 529.375 a tu
computador. No tienes forma de saber si esta cifra es o no correcta.
Todos los dígitos deberían estar correcto, pero uno más pueden estar
incorrectos y no tienes modo de saberlo. Pero repitiendo el mensaje
tienes una buena manera de inferir el verdadero balance. Supongamos que
pedimos que se envíe cinco veces el balance, y recibimos las siguientes
respuestas

> transmision 1: $ 5 2 9 . 3 7 5\
transmision 2: $ 5 2 1 . 3 7 5\
transmision 3: $ 5 2 1 . 3 1 1\
transmision 4: $ 5 4 4 . 3 7 5\
transmision 5: $ 7 2 1 . 8 7 5

Notemos que algunas transmisiones tienen más de un dígito incorrecto, y
que hay una transmisión (la número 2) sin ningún error. Pero no sabemos
cuáles son los errores, ni tampoco que la transmisión 2 es la correcta.
Pero tomemos carácter por carácter la transmisión y elijamos el más
frecuente:

>    transmisión 1: $ 5 2 9 . 3 7 5\
transmisión 2:        $ 5 2 1 . 3 7 5\
transmisión 3:        $ 5 2 1 . 3 1 1\
transmisión 4:        $ 5 4 4 . 3 7 5\
transmisión 5:        $ 7 2 1 . 8 7 5\
dígito más común:       $ 5 2 1 . 3 7 5

Haciendo esto podemos ver que llegamos a un valor que es el más
probable: \$ 521.375, que en este caso coincide con el valor correcto.

El problema de esto es que en la medida que el canal es más ruidoso
debemos repetir más veces el mensaje para aumentar la probabilidad de
adivinar cuál fue el mensaje correcto. El otro problema, es que no hay
garantía que este mecanismo nos permita encontrar la respuesta
correcta.

# La técnica de los tambores parlantes

James Gleick en su libro [The Information: A History, a Theory, a
Flood](http://www.amazon.com/gp/product/0375423729/ref=as_li_qf_sp_asin_tl?ie=UTF8&tag=lanaturaledel-20&linkCode=as2&camp=217145&creative=399349&creativeASIN=0375423729),
nos revela la historia de cómo el resto del mundo llegó a comprender el
misterio de los tambores parlantes africanos. Aunque muchos exploradores
y viajeros habían escuchado los tambores sub saharianos, nadie sabía que
llevaban información, que de hecho hablaban.

A mediados del siglo XIX ,en una expedición al rio Niger, organizada por
la "Sociedad para la extinción de la esclavitud", el capitán William
Allen hizo un descubrimiento importante, al ponerle atención a su piloto
camerunés, a quien llamó Glasgow. Estaban en la cabina de la nave cuando
el capitán notó que su piloto se encontraba abstraído escuchando los
tambores. "¿No escuchas a mi hijo hablar?", le preguntó Glasgow. Como no
habían escuchado voces, le preguntaron cómo sabía que su hijo le
hablaba. "El tambor me habla, me dice que salga a la cubierta." El
asombro fue mayor, y el capitán anotó por primera vez las increíbles
capacidades de comunicación de estos tambores, que podían transmitir
mensajes por grandes distancias. Una tecnología que aún no se
desarrollaba en Europa, la capacidad de enviar mensajes más rápido que
con mensajeros a caballo.

Los exploradores y misioneros comenzaron a registrar y transcribir estos
mensajes.

> El anuncio de un nacimiento en Bolenge, una villa en el Congo Belga,
> iba así: *Batoko fala fala, tokema bolo bolo, boseka woliana imaki
> tonkilingonda, ale nda bobila wa fole fole, asokoka l'isika koke
> koke.\
> *Las esteras están enrolladas, nos sentimos fuertes, una mujer vino
> desde el bosque, ella está en la villa abierta, eso es suficiente para
> su tiempo.\
> Un misionero, Roger T. Clarke, transcribió esta llamada a un funeral
> de un pescador:\
> *La nkesa laa mpombolo, tofolange benteke biesala, tolanga bonteke
> bolokolo bole nda elinga l'enjale baenga, basaki l'okala bopele pele.
> Bojende bosalaki lifeta Bolenge wa kala kala, tekendake tokilingonda,
> tekendake beningo la nkaka elinga l'enjale. Tolanga bonteke bolokolo
> bole nda elinga l'enjale, la nkesa la mpombolo.\
> *En la mañana al amanecer, no queremos reunirnos para el trabajo,
> queremos una reunión de juego en el río. Los hombres que viven en
> Bolenge, no vayan al bosque, no vayan a pescar. Queremos una reunión
> de juego en el rio, en la mañana al amanecer."

John. F. Carrington, un misionero inglés, nacido en 1914, viajo al
África en 1938 y se estableció de por vida en ese continente. Descubrió
que los tambores no usaban un sistema de señales, no había código, para
decirlo en términos modernos, en estas transmisiones. Los tambores
transmitían poesía, oraciones, incluso chistes. Los tambores
literalmente se usaban para hablar.

Carrington aprendió a tocar los tambores, en particular dominaba el
Kele, un lenguaje de la famila
[Bantu](http://en.wikipedia.org/wiki/Bantu_languages), del este de
Zaire. Los nativos decían que en realidad él no era europeo, a pesar de
su color, Carrington era uno de ellos. Que al morir los dioses habían
enviado su alma por error a Inglaterra, al cuerpo de un bebé. Pero como
era africano no pudo evitar volver. Generosamente los aldeanos decían,
que si a veces sus mensajes por tambor sonaban extraños, era por la
pobre educación que los blancos le habían dado.

Carrington se convirtió en una autoridad lingüistica en la estructura de
las familias de lenguajes africanos. Sus descubrimientos los publicó en
un libro titulado: "The Talkin Drums of Africa" (Los Tambores Parlantes
de África) en 1949.

![](https://d2dspjyoh5c79p.cloudfront.net/5fc01856-d54e-11e8-a030-2b5831f8ecb5-aa9f18b7)

Para entender el misterio de los tambores parlantes hay que conocer la
estructura de los lenguajes africanos. Estos son lenguajes tonales,
donde el sentido está determinado por la subida o bajada del tono al
pronunciar vocales o consonantes. Nuestra lengua no tiene este tipo de
cambio de tonalidades, salvo cuando hacemos una pregunta, o exclamación.
Pronunciamos "¿estás feliz?" de forma distinta a cuando decimos "estás
feliz", en el caso de la pregunta hay una ligero alzamiento del tono al
final de la frase. Eso es lo que los lenguajes africanos aplican a todas
sus vocales y consonantes.

Por ejemplo, la palabra *lisaka,* pronunciada con las tres sílabas bajas
significa *charco*, cuando se pronuncia subiendo el tono en la última
sílaba, sin necesariamente cargar la voz o acentuar, significa
*promesa*, y pronunciada de otra forma puede significar *veneno*.

Carrington observó cuan cómica la confusión puede ser:

> alambaka boili \[-*--* \_ \_\] = el miró la orilla del río\
> alambaka boili \[---- \_ - \_ \] = el hirvió a su suegra

El tambor transmite el tono, pero no la altura, por eso en el lenguaje
de los tambores se transmiten las consonantes representadas por los
diversos tonos de los distintos tambores. El problema es que esto
produce ambigüedades, por ejemplo, dos tonos altos de tambor en Kele,
pueden ser *sango*, que significa padre, o *songe* que significa luna.
Para evitar esta ambigüedad se introducen palabras adicionales que crean
una frase que permite identificar la palabra. Por ejemplo, para decir la
luna se usa la frase "*songe li tange la manga*" ("la luna se ve abajo
en la tierra"). **Los golpes adicionales proveen contexto.**

Lo que hacen estos sonidos extras es introducir bits adicionales de
información para corregir y desambiguar el mensaje.
**La redundancia, aunque ineficiente,
evita la confusión del mensaje**.

## El truco de la redundancia

El truco de la repetición sólo envía el mismo mensaje una y otra vez.
Pero, tal como hemos visto con la historia de los tambores parlantes, lo
que debemos hacer es agregar algo extra para mejorar la comunicación.
Este extra es lo que, en términos técnicos, llamamos **redundancia**.

Si en vez de enviar los dígitos \$ 521.375 podríamos enviar el siguiente
mensaje:

>     cinco dos uno punto tres siete cinco

Supongamos la misma tasa de error, del 20%, entonces algunos caracteres
serían cambiados por otros, quedando el mensaje así:

>     kinco dos unp puntf tpes sieme cinpo

Aunque es algo difícil de leer, estarán de acuerdo que cualquier que
sepa leer y sabiendo que estamos hablando de números, podrá interpretar
el mensaje como que el balance es de \$ 521.375.

Si les digo que "sieme" representa un dígito en español y que sólo un
letra ha sido alterada, es casi cierto que me dirán que el número es
"siete", porque no hay otra palabra que alterando una letra nos de un
número.

Lo que hemos hecho con esto es crear un código:

>     1 -> uno
>     2 -> dos
>     3 -> tres
>     4 -> cuatro
>     5 -> cinco

Y para decodificar ocurre lo siguiente:

>      cinco -> 5 (parea exacto)
>      cinpo -> 5 (pareo aproximado)
>      unp -> 1 (pareo aproximado)

Y eso es lo que hacen los computadores todo el rato, usar estas tablas
de codificación y redundancia.

En 1947, Richard Hamming, desarrolló uno de estos códigos, que hoy se
conoce como el Código de Hamming, mientras trabajaban en Laboratorios
Bell.

Como en el computador todo se almacena con ceros y uno, lo que se hace
con el código de Hamming es agregar redundancia de una manera similar a
lo que hicimos con las palabras:

>     0000 -> 0000000
>     0001 -> 0001011
>     0010 -> 0010111
>     0011 -> 0011100
>     0100 -> 0100110

Entonces al decodificar tenemos:

>     001011 -> 0010 (pareo exacto)
>     0010110 -> 0010 (pareo cercano)
>     1011100 -> 0011 (pareo cercano)

Este ejemplo corresponde a lo que conoce como el código Hamming (7,4).
He presentado sólo 5 de 16 posibles combinaciones de 4 bits. No entraré
en los detalles técnicos de cómo se implementa esto en los computadores,
pero es esencialmente igual a lo que describí con el ejemplo de los
número expresados por palabras. Si quieres saber más del código Hamming
puedes visitar esta página en
Wikipedia: [<https://es.wikipedia.org/wiki/C%C3%B3digo_Hamming>](https://es.wikipedia.org/wiki/C%C3%B3digo_Hamming)

{{<figure caption="Richard Hamming" src="https://d2dspjyoh5c79p.cloudfront.net/942e5618-d54e-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

Hay más técnicas para detectar y corregir errores, como el
[checksum](https://es.wikipedia.org/wiki/Suma_de_verificaci%C3%B3n) los
[bits de paridad](https://es.wikipedia.org/wiki/Bit_de_paridad). Hasta
el día de hoy se sigue trabajando y mejorando estas técnicas de
corrección de errores (como con los [low-density
partity-check](https://en.wikipedia.org/wiki/Low-density_parity-check_code),
o los [Fountain Codes](https://en.wikipedia.org/wiki/Fountain_code)).

Estas técnicas fueron descubiertas y desarrolladas por Hamming y Claude
Shannon entre 1947 y 1950. El paper de Shannon: "The Mathematical
Theory of Communication", se convirtió en el fundamento para todas
estas técnicas que son usadas hoy para que tengamos computadores y redes
confiables. Respecto a este trabajo seminal, Irving Reed, quien también
desarrolló un código de corrección, expresó: "Pocos trabajos de este
siglo han tenido mayor impacto en la ciencia y la ingeniería. Este
artículo ha alterado profundamente todos los aspectos de la teoría y
práctica de la comunicación".[^2]


[^1]: "El uso de la palabra
Ordenador" <https://www.elmundo.es/su-ordenador/SORnumeros/97/SOR066/SOR066tribuna.html>


[^2]: Tomado de "Nine Algorithms That Changed The Future", de John
MacCormick.

