---
title: "The Chain"
authors: [admin]
date: 2018-01-06T08:25:11-03:00
slug: "the-chain"
aliases: [/blog/lnds/2018/1/6/the-chain]
tags: ['blockchain', 'arquitectura', 'OOP', 'patrones', 'encadenamiento', 'inmutabilidad']
draft: false
image:
  placement: 3
---

> "Chain, keep us together\
> Running in the shadows\
> Chain, keep us together\
> Running in the shadows

[The Chain](https://en.wikipedia.org/wiki/The_Chain) tiene la
peculiaridad de ser la única canción de Fleetwood Mac firmada por todos
sus integrantes activos durante la grabación de un álbum, y la razón
para esto es muy curiosa.

En 1977 la banda presentaba su formación más conocida y exitosa. La
alineación era la siguiente: [Mick Fleetwood](https://en.wikipedia.org/wiki/Mick_Fleetwood) en batería,
[John McVie](https://en.wikipedia.org/wiki/John_McVie) en bajo,
[Christine McVie](https://en.wikipedia.org/wiki/Christine_McVie) en
voces y teclados, la gran [Stevie Nicks](https://en.wikipedia.org/wiki/Stevie_Nicks), en voces, por
supuesto, y [Lindsey Buckingham](https://en.wikipedia.org/wiki/Lindsey_Buckingham) en
guitarras y voz.

{{<figure caption="FletwoodMac en 1977" src="https://d2dspjyoh5c79p.cloudfront.net/856cf561-f2f1-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Para grabar su álbum número once la banda se dirigió a California, a
trabajar en el famoso estudio [Record Plant](https://en.wikipedia.org/wiki/Record_Plant), en Sausalito.

Esa época era uno de los momentos más duros dentro del grupo. Stevie
Nicks siempre ha dicho que los mejores trabajos de Fleetwood Mac
surgieron cuando la banda estaba en su peor forma.

![](https://d2dspjyoh5c79p.cloudfront.net/23469aa8-f312-11e7-a030-2b5831f8ecb5-aa9f18b7)

The Chain surge de la **concatenación** de un montón de material
rechazado. La sección final de la canción, que empieza con una
progresión en bajo, fue creada por Mick Fleetwood y John McVie que la
grabaron por separado. Por otro lado Stevie Nick había escrito la letra
y encontró que  podría calzar con esa melodía, así que trabajó con
Christine McVie en armar la primera parte de la canción. Para completar
el tema, Buckingham recicló la intro de una composición que había
desarollado con Nick como  duo de 1973. El puente lo extrajeron los
ingenieros de sonido, Ken Caillat y Richard Dashu, de otra grabación
descartada, removieron el piano que le había puesto McVie y cortaron con
hojas de afeitar las cintas para después pegarlas y darle la forma final
a la canción.

Esa es la razón por la que The Chain aparece firmada por todos los
integrantes del grupo.[^1]


## Cadenas 

> "Listen to the wind blow\
> Watch the sun rise\
> Run in the shadows\
> Damn your love, damn your lies"

Una cadena es un conjunto de eslabones, o anillos, enlazados entre sí.
Es una herramienta útil, para tirar, sujetar, o incluso transmitir
movimiento a las máquinas. También es un símbolo, de múltiples
significados, cómo opresión, unidad, o incluso opulencia.

En física y matemáticas, la catenaria es la forma que toma una cadena al
colgar de sus dos extremos. La forma precisa de la ecuación que describe
a esta forma geométrica fue obtenida como respuesta a un desafío,
planteado por Jakob Bernoulli, que convocó a los mejores matemáticos del
siglo diecisiete. El resultado fue obtenido a través del ***trabajo
colectivo*** de Gottfried Leibniz, Christiaan Huygens y Johann
Bernoulli.

La forma de la catenaria permitió al arquitecto catalán Antoni Gaudí
crear estructuras que distribuyen mejor la tensión a la que están
sometidas.

{{<figure caption="Catenarias en La Pedrera de Gaudí" src="https://d2dspjyoh5c79p.cloudfront.net/61f3e582-f2f6-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

En computación las cadenas aparece en muchas áreas y contextos, por
supuesto, y de eso vamos a hablar un poco.

## Encadenamiento Inmutable

> "And if you don't love me now\
> You will never love me again\
> I can still hear you saying\
> We would never break the chain"

El "method chaining" es una técnica de encadenamiento usada en muchos
lenguajes de programación orientados al objeto.

En la programación orientada al objeto usamos el encadenamiento de
métodos para ejecutar una serie de operaciones sobre un objeto.

Veamos un ejemplo en Scala: [^2]

```scala
    class Person {
      private var name: String = null 
      private var age: Int = 0 

      def setName(newName: String) = { this.name = newName; this; }
      def setAge(newAge: Int) = { this.age = newAge; this; )
      def introduce { println( s"Hello, my name is $name and I am $age years old." ) }
    }

    object App {
      def main(args: Array[String]) {
        
        // Output: Hello, my name is Peter and I am 21 years old.
        new Person().setName("Peter").setAge(21).introduce
      }
    }
```

Lo que hemos hecho acá es crear un objeto de tipo Person, al que le
aplicamos una secuencia de métodos que alteran su estado y generan una
salida. Esa cadena de métodos  permite escribir código más compacto.
Esta técnica es muy útil para desarrollar lenguajes de dominio
específico (DSL)[^3].

Pero un programador funcional encontraría esto una aberración, porque en
cada llamada estamos alterando el estado del objeto y eso es un pecado
mortal en este paradigma, donde el concepto de **inmutabilidad** es
esencial.

¿Qué significa esto de la inmutabilidad?

Lo que queremos es que las estructuras de datos no cambien su valor a lo
largo del proceso. Por ejemplo, si tenemos un registro que contiene el
nombre de una persona el valor escrito allí no debe cambiar, nunca.

¿Pero las personas cambian de nombre, verdad?

Así es, aunque podríamos cuestionarnos si la persona que a los
veinticinco cambia su nombre a Jorge es la misma persona que recibió el
nombre Pedro al nacer.

Pero independiente de la filosofía, debemos hacernos cargo del cambio,
la respuesta que asegura la inmutabilidad es que debemos crear un nuevo
registro con el nuevo valor y olvidarnos del valor anterior (o dejarlo
por ahí, para que lo revisen los historiadores después).

Así que veamos cómo sería el código con una estructura de datos
inmutable:

```scala
    case class Person(private val name: String = null, private val age: Int = 0 ) {
      def setName(newName: String) = Person( newName, this.age )
      def setAge(newAge: Int) = Person( this.name, newAge )
      def introduce { println( s"Hello, my name is $name and I am $age years old." ) }
    }

    object App {
      def main(args: Array[String]) {
        // Output: Hello, my name is Peter and I am 21 years old.
        Person().setName("Peter").setAge(21).introduce
      }
    }
```

Noten que cada método genera un nuevo objeto Person. En este caso
particular el objeto anterior se pierde y es liberado por el 
[Garbage Collector](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))
del lenguaje de manera automática. A nosotros como programadores no nos
interesa más (aunque supongo que al ingeniero de sistema, encargado de
operar nuestro software en producción, sería bueno avisarle que asigne
memoria suficiente y haga un tunning de los parámetros de la máquina
virtual, un poco de cortesía no es mala).

## Cadena de Responsabilidades 

> "Thunder only happens when it's raining\
> Players only love when they are playing"\

La cadena de reponsabilidades es un patrón de diseño de software, que
pretende resolver dos problemas:\

-   Evitar el acoplamiento entre el que envía (sender) un requerimiento
    (request) y quien lo recibe (receiver).\
-   Debería ser posible que más de un receptor sea capaz de manejar un
    requerimiento (request).\[4\]

{{<figure class="Diagrama de clases que describe el patrón cadena de responsabilidades" src="https://d2dspjyoh5c79p.cloudfront.net/1e7cb883-f2fc-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Lo que dice este patrón es que un requerimiento es procesado por una
serie, o cadena, de receptores, los que a priori son desconocidos por el
emisor (sender).

Esto es muy útil en las interfaces de usuario, por ejemplo. Cuando tocas
en la pantalla un objeto se espera que exista una "vista" que sea
capaz de procesar ese evento, esta vista puede que no sepa qué hacer con
el evento, entonces lo deriva a una vista superior y así el evento sube
a lo largo de la cadena hasta encontrar un objeto que sepa procesar el
evento.

Lo importante acá es que podemos distribuir la ***responsabilidad de
procesamiento*** a lo largo de la cadena.

## Cadena de Mensajes 

> "Break the silence\
> Damn the dark, damn the light"

No todo es bueno con las cadenas. Por ejemplo, existe un problema, algo
que llamamos [code smell](https://en.wikipedia.org/wiki/Code_smell)[^5], 
denominado cadena de mensajes, o [Message Chain](https://sourcemaking.com/refactoring/smells/message-chains).

Martin Fowler lo describe en su libro ["Refactoring: Improving the
Design of Existing Code"](http://amzn.to/2AAnv92), de la siguiente
forma:

{{<figure caption="Escenario de una cadena de mensajes" src="https://d2dspjyoh5c79p.cloudfront.net/7710c646-f30a-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Supongamos que a partir  un objeto cliente queremos obtener el manager
de una persona, para esto el código que debemos escribir es el
siguiente:

```scala
manager = person.getDepartment().getManager()
```

Esto podría ser peor, hay situaciones en que puede darse una cadena
larga de mensajes para poder obtener un valor:

```scala
f = client.getA().getB().getC().getD().getF()
```

Esto es diferente al encadenamiento de métodos (method chaining), porque
en ese caso estamos operando sobre métodos de la misma clase.

En el encadenamiento de mensajes estamos navegando una jerarquía de
clases para llegar a obtener el método que necesitamos.

## La Ley de Demeter 

> "I know there's nothing to say\
> Someone has taken my place"

El encadenamiento de mensajes es una forma de acoplamiento, y una forma
de evitar este problema es respetando la Ley de Demeter, o Principio del
Menor Conocimiento, que dice lo siguiente:

Dado un método ***m*** de un objeto ***O*** este sólo puede invodar los
métodos de los siguientes tipos de objetos:

1.  El objeto ***O*** en si mismo.
2.  Los parámetros de ***m***.
3.  Cualquier objeto creado o instanciado dentro de ***m***.
4.  Los objetos que son componentes de ***O***.
5.  Una variable global, accesible por ***O***, en el ámbito de
    ejecución de ***m***.

De este modo lo que deberíamos hacer para corregir el ejemplo anterior
es lo siguiente:

```scala
manager = person.getManager()
```

Esto implica hacer una refactorización que se conoce como 
["Hide Delegate"](https://refactoring.com/catalog/hideDelegate.html):

{{<figure caption="Reorganización de la clase Person para permitir Hide Delegate" src="https://d2dspjyoh5c79p.cloudfront.net/6c9d1df7-f30d-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

## Intermediario

> "Tell me why\
> Everything turned around\
> Packing up\
> Shacking up's all you wanna do"

Resulta que si aplicamos indiscriminadamente la Ley de Demeter nos
podemos meter en un lio.

Supongan que ahora a la clase Person le agregamos los métodos
getDivision(), getDirector(), getCountry(), getDivisionManager(), etc,
para acceder a distintos objetos dentro de la jerarquía.

La clase Person se transforma en un objeto del cual todos los demás
dependen, y además esta queda dependiendo de muchas más clases.
Se convierte en un intermediario. Todo debe pasar a través de esta
clase, lo que tampoco es bueno.

A este síntoma, o code smell, se le llama
[MiddleMan.](https://refactoring.com/catalog/removeMiddleMan.html)

¿Cuál es la solución a este problema?

La mala noticia que la solución para este code smell se llama Message
Chain, la famosa cadena de mensajes. de la que tratábamos de huir hace
un rato. :D

## Intermediarios vs Cadenas

> Don\'t stop thinking about tomorrow\
> Don\'t stop, it\'ll soon be here\
> It\'ll be here better than before\
> Yesterday\'s gone, yesterday\'s gone

Esto puede resultar algo angustiante. Por un lado nos dicen que un
patrón interesante de usar es el encadenamiento de métodos, y la cadena
de responsabilidad, pero por otro lado la cadena de mensajes, que se
parece al encadenamiento de métodos, viola la Ley de Demeter. Pero en el
afán de respetar la Ley de Demeter podemos caer en la trampa del
MiddleMan, para la cual la única salida es violar la Ley de Demeter
introduciéndo la cadena de mensajes. ¡Es para enloquecer!

Así es el diseño de software, una serie de decisiones entre
requerimientos que a veces entran en conflicto.

Pero además,  ¿no les parece que hemos tropezado con algo más
fundamental acá?

Así es, porque esta dicotomía entre centralizar o descentralizar, alojar
la responsabilidad en un punto central, versus distribuirla en una
cadena es algo que se da en distintos contextos, no sólo tecnológicos.

Piensen en otra cadena, muy famosa en estos días, me refiero al Block
Chain. Es una tecnología que permite distribuir la confianza, o para ser
más preciso, el consenso, entre toda una red, que **trabaja
colectivamente**,  usando para esto una **cadena inmutable**.

El blockchain es una solución interesante que empezaremos a estudiar en
los siguientes artículos. Algunas preguntas que pretendo resolver son:
¿para qué sirve el blockchain? ¿Es el blockchain la solución adecuada
para ciertos problemas, o a veces es mejor usar un **MidleMan**?

Aunque este artículo parece que habla de programación, en realidad no es
así, habla de diseño de soluciones, de restricciones y por supuesto rock
and roll.

En este texto he intentado introducir algunos conceptos básicos que son
necesarios para entender lo que viene, así que los invito a estar
atentos al segundo artículo de esta serie, que he llamado ***"The
Chain"***, donde nos desviaremos un poco para hablar de consenso.


### Notas: 

Las citas son de las canciones "The Chain", "Dreams", "Second Hands
News" y "Don´t Stop", del álbum "Rumours" de Fleetwood Mac, banda
que nos acompañará en esta aventura.

[^1]: Hay más anécdotas sobre The Chain en [Songfacts.](http://www.songfacts.com/detail.php?id=6269)

[^2]: Ejemplos tomados y adaptados desde Wikipedia:
[https://en.wikipedia.org/wiki/Method\_chaining](https://en.wikipedia.org/wiki/Method_chaining)

[^3]: Puedes leer sobre aplicar DSLs con method chaining en est artículo
en InfoQ [https://www.infoq.com/articles/internal-dsls-java](https://www.infoq.com/articles/internal-dsls-java)

[^4]: El patrón Chain of Responsability fue descrito por la [GoF](http://wiki.c2.com/?GangOfFour) 
en el libro [Design Patterns, Elements of Object Oriented Software.](http://wiki.c2.com/?DesignPatternsBook)

[^5]: Un code smell es cualquier síntoma en el código fuente de un
programa que indica que hay un potencial problema:
[https://en.wikipedia.org/wiki/Code\_smell](https://en.wikipedia.org/wiki/Code_smell)


