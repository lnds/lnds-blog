---
title: "Ceros y Unos"
authors: [admin]
date: 2018-09-23T08:25:11-03:00
slug: "ceros-y-unos"
aliases: [/blog/lnds/2018/9/23/ceros-y-unos]
draft: false
tags: ['computación', 'código binario', 'historia']
image:
  placement: 3
---


La leyenda cuenta que Teseo prometió a su padre, el rey Egeo de Atenas,
que si tenía éxito, en su hazaña de matar al Minotauro, al volver su
barco izaría velas blancas en vez de las tradicionales de color negro.
El hijo de Egeo, perdido por muchos años, quería librar a su ciudad del
infame tributo al Rey Minos, de Creta, que les obligaba a enviar a siete
jóvenes y siete doncellas para que fueran sacrificados ante el monstruo
con cuerpo de hombre y cabeza de toro.

Sabemos que Teseo fue exitoso, al usar una astuta estratagema, entró al
laberinto donde habitaba la bestia, tirando de un hilo proporcionado por
Ariadna, luego de matar a Asterión, el verdadero nombre del monstruo,
según Borges[^1], recorrió de vuelta el camino recogiendo el ovillo. 

{{<figure caption="Teseo luchando con el Minotauro, por Jean-Etienne Ramey" src="https://d2dspjyoh5c79p.cloudfront.net/e8573af0-bf36-11e8-a030-2b5831f8ecb5-aa9f18b7">}}


Volvió Teseo triunfante, pero fue descuidado pues olvidó dar la
instrucción de que pusieran las velas blancas, su padre, que se asomó a
un risco a observar la llegada de su hijo perdido y recobrado. Cuando
vio las velas negras sintió un gran dolor y no pudo soportarlo, a tal
grado que se arrojó por el borde del precipicio, golpeándose en las
rocas y hundiéndose en las aguas de aquel mar, que desde entonces lleva
su nombre, Egeo.

El sistema inventado por Teseo y Egeo, para señalar el éxito o fracaso
de la misión es muy sencillo y ha sido usado desde antiguo. Las señales
con banderas, o humo, eran muy comunes en aquellos tiempos. 

"Una luz si es por tierra, dos luces si es por el mar"[^2], esa fue
la consigna que acordaron Paul Revere y Joseph Warren para avisar a los
colonos de Charlestown cómo sería el movimiento de las tropas inglesas
en su entrada a Masachusets, al inicio de la guerra de independencia
norte americana. La historia es famosa, Warren colocó dos faros en la
torre de una iglesia para que la pudiera observar Revere, quien al ver
la señal cabalgó toda la noche gritando "¡ahí vienen los casacas
rojas!", para advertir a los patriotas que se preparasen para la lucha.

{{<figure caption="La cabalgata nocturna de Paul Revere" src="https://d2dspjyoh5c79p.cloudfront.net/4ee0c5c2-bf37-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

## Códigos Binarios

Lo que tienen en común las leyendas de Teseo y de Paul Revere es que en
ambas se usó un código binario para entregar información. 

¿Qué significa esto de código binario?

Lo que queremos decir, es que en ambos casos, hay dos partes
involucradas: Teseo y Egeo, Revere y Warren, que se ponen de acuerdo en
un código que sólo tiene dos opciones. Para Teseo y Egeo el código tiene
dos valores: velas blancas que significa éxito, o Velas negras que
significa fracaso. Para Revere y Warren el código tiene los valores:
"dos lámparas" significa que los ingleses entrarán por el mar, "una
lámpara", que entrarán por tierra.

Para que un código funcione  todas las partes que lo ocupan deben tener
claro su significado. Por supuesto pueden haber errores, y descuidos en
su uso (como fue el caso de Teseo), entonces es necesario tener cuidado
de asegurar que el mensaje no sea alterado cuando se usa un código. En
general, cuando es tan simple un código, descuidamos estos detalles.

## Contar con números binarios

Si con dos valores, podemos tener un código simple, con tres o cuatro
podemos enriquecer el vocabulario de lo que queremos decir, ¿verdad? 

Es cierto, pero las cosas se empiezan a complicar. Tendríamos que crear
tablas de significados, uno significa esto, dos significa otra cosa,
tres otra más, y así.

Hace muchos años atrás trabajé en un sistema en que podíamos codificar
millones de millones de mensajes usando sólo sesenta y cuatro letras.
¿Cómo es posible eso? Para que entiendan lo que hice tengo que contarles
primero cómo se cuenta en binario.

### Partir desde cero

Cuando nos enseñan a contar en la escuela lo hacen a partir del uno: 1,
2, 3... Si hay una hilera de personas empezamos a contarlas desde 1. Por
eso que los matemáticos tienen el conjunto de los números naturales que
empieza desde 1: N = {1, 2, 3, 4.....}. Pero en computación las cosas
empiezan desde cero.

Según [Wikipedia](http://es.wikipedia.org/wiki/Cero): "La palabra
«cero» proviene de la traducción de su nombre en sánscrito shunya
(vacío) al árabe sifr (صفر), a través del italiano. La voz española
«cifra» también tiene su origen en sifr."[^3]

El cero, el valor nulo, la ausencia de algo, el origen, el primero de
los números binarios, esa será nuestra primera cifra. La segunda cifra
será el 1.

Y no necesitamos más. 0 y 1 son suficientes.

El gran matemático Leibnitz lo [explicó así](http://www.leibniz-translations.com/binary.htm) en 1703:

> El ajuste de cuentas común de la aritmética está hecho de acuerdo a la
> progresión de las decenas. Diez caracteres son usados, los que son 0,
> 1, 2, 3, 4, 5, 6, 7, 8, 9, los que denotan al cero, uno y los números
> sucesivos hasta el nueve inclusive. Y luego, cuando alcanzamos diez,
> el uno empieza de nuevo, escribiendo diez como "10″, diez veces diez,
> o cien, como "100″, diez veces cien, o mil, como "1000″, diez veces
> mil como "10000″, y así.

> Pero en vez de la progresión de diez, he usado por muchos años la más
> simple progresión de todas, la que se incrementa por dos, habiendo
> encontrado que es útil para la perfección de la ciencia de los
> números. Así que no uso otros caracteres que el 0 y el 1, y cuando
> llego al dos, empiezo de nuevo. Esto es porque el dos es expresado por
> "10″, y dos veces dos, o cuatro, por "100″, dos veces cuatro, u ocho,
> por "1000″, dos veces ocho, o dieciséis, por "10000″, y así.

> Aquí está la tabla de los números de esta manera, la cual puede ser
> extendida tan lejos como se desee.

![](https://d2dspjyoh5c79p.cloudfront.net/8bb9955e-bf34-11e8-a030-2b5831f8ecb5-aa9f18b7)

Aquí, de un vistazo se hace evidente la razón para una celebrada
propiedad de la progresión geométrica de los dos en todos los números,
la que establece que si uno tiene sólo uno de esos número por cada
grado, se pueden componer todos los números por debajo del grado más
alto. De aquí, si uno ha dicho, por ejemplo, que 111, ó 7, es la suma de
cuatro, dos y uno, y que 1101, ó 13, es la suma de ocho, cuatro y uno.
Esta propiedad permite a los ensayadores pesar todo tipo de masas con
pocos pesos y podría servir para acuñar de modo de obtener muchos
valores con pocas
monedas.

> Estableciendo estas expresiones de número nos permiten hacer todo tipo
> de operaciones muy fácilmente.


Estableciendo estas expresiones de número nos permiten hacer todo tipo
de operaciones de una manera muy sencilla. Y estas fascinantes
propiedades aritméticas tienen la ventaja de que se pueden implementar
muy bien en un dispositivo electrónico, siendo el 0 y el 1 los estados
de un interruptor (cero es apagado, y uno es encendido). A estos dígitos
binarios (cero y uno) los llamamos BITs, que viene de BInary Digit en
inglés.

En 1937 Claude Shannon escribió su tesis doctoral donde implementó el
álgebra de Boole usando relés y conmutadores por primera vez en la
historia. Esta tesis es la base de los circuitos digitales que son
usados hoy por todos los computadores.

Este mismo principio que explica Leibnitz es el que usé para codificar
millones de millones de mensajes usando sólo sesenta y cuatro letras.

La historia es así. Fui contratado por una empresa que contaba con
barcos que recorrían los fiordos del sur de Chile. Cada barco llevaba un
sistema de GPS. Este aparato en particular tenían la propiedad que cada
vez que se conectaban al satélite podía "descargar" hasta 64 bytes de
información y enviar de vuelta la misma cantidad. Un byte son ocho bits,
así que podía codificar literalmente 2 elevado a 64 valores posibles,
para los curiosos ese número es: 18.446.744.073.709.551.616.

Entonces lo que hice fue crear un programa que administraba una tabla,
con posibles valores:

0 - Diríjase a la base\
1 - Refugiese en el puerto más cercano\
2 - Recoja carga en puerto XX\
3 - Recoja carga en puerto YY

\.... Etc.

La tabla se alimentaba cuando los barcos recalaban en la base central,
después iban recibiendo instrucciones usando este sencillo sistema.

Por supuesto no usamos todos los valores posibles, bastaban unas pocas
decenas, se ocuparon los primeros 4 bytes para las tablas de mensajes y
los otros 60 podían escribir cualquier cosa. Las comunicaciones eran
lentas por cierto, tomaban varios minutos, pero servían para zonas en
que la única señal era la del satélite. Y funcionó bastante bien.

Así que verán, cono sólo dos dígito, cero y uno, tenemos para escribir
todo lo que podamos imaginar.

[^1]: "La casa de Asterión", de Jorge Luis Borges.

[^2]: En realidad las dos luces indicaban que los ingleses tomarían la
ruta del "agua" cruzando el río Charles.
Fuente: <https://en.wikipedia.org/wiki/Paul\_Revere\#%22Midnight\_Ride%22>

[^3]: Cero en
Wikipedia <https://es.wikipedia.org/wiki/Cero>

