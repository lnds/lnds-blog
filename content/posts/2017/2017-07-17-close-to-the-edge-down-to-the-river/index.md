---
title: "Close to the Edge, down by the river"
authors: [admin]
subtitle: "9 desafíos en 9 lenguajes (4 de 9) parte 2"
date: 2017-07-17T08:25:11-03:00
slug: "close-to-the-edge-down-to-the-river"
aliases: [/blog/lnds/2017/7/17/close-to-the-edge-down-to-the-river]
draft: false
tags: ['desafios', 'lenguajes nuevos', 'lenguajes', 'lenguajes de programación', 'programación', 'rock', 'scala', 'programación funcional']
image:
  placement: 3
---

La historia del rock está llena de anécdotas que reflejan el choque de
egos entre artistas, como cuando Jimmy Hendrix le roba el acto de quemar
la guitarra a Pete Townsend, en el Festival de Monterrey de 1967. Hay
otra involucra a Yes y Deep Purple.

La historia transcurre en la décima edición del National Jazz & Blues
Festival en Plumpton, en Inglaterra, en agosto de 1970. Los
organizadores habían decidido que Deep Purple cerrara el espectáculo,
algo que molestó a Yes, quienes querían clausurar el evento. Así que la
banda liderada por Jon Anderson decidió retrasar su llegada, obligando a
los organizadores a solicitar a Deep Purple que ejecutaran su show
antes.

Pero Ritchie Blackmore planeó una venganza notable. Después de
interpretar casi íntegramente su álbum ["In Rock"](https://en.wikipedia.org/wiki/Deep_Purple_in_Rock),
seleccionaron para el cierre de su espectáculo interpretar el clásico
[Paint In Black](https://www.youtube.com/watch?v=O4irXQhgMqg) de los
Rolling Stones. Durante la ejecución del tema Blackmore ordenó a sus
"roadies" que vaciaran combustible sobre los equipos, luego encendió
un fósforo y lo arrojo al suelo, y siguió tocando su guitarra mientras
empezaba un incendio sobre el escenario.

Yes logró tocar último, pero los asistentes quedaron impresionados al
punto que todos comentaban la espectacular puesta en escena de Deep
Purple. Así que Ritchie Blackmore tuvo su dulce venganza, y consiguió
que Deep Purple acaparara los comentarios de los asistentes a esa
jornada relegando a Yes al segundo plano.

![](https://d2dspjyoh5c79p.cloudfront.net/65f51b37-6a96-11e7-976c-0d1ee2977bbe-aa9f18b7)

Yes es una banda con una historia compleja, con diversas formaciones,
agrupaciones, reagrupaciones, incluso en un momento hubo dos Yes
operando en paralelo.

Esto se refleja también en su música, que alcanzó los máximos puntos de
complejidad interpretativa con la incorporación del tecladista Rick
Wakeman. Yes ha reunido a grandes músicos, y servido de inspiración a
diversas bandas del rock progresivo.

# El Cuarto Desafío

Este artículo no es sobre Yes o rock progresivo, este post es parte de
[la serie sobre nueve lenguajes en nueve desafíos de programación](/blog/lnds/2016/01/09/esos-raros-lenguajes-nuevos),
y en particular aborda el cuarto desafío de esta serie, compresión
usando la codificación de Huffman.

Cuando decidí escribir este cuarto desafío pensé que escribiría un
artículo por cada una de las soluciones en cada uno de los lenguajes.
Pero también decidí asociar un grupo o artista de rock o pop a cada
lenguaje.

Esta vez es el turno de Scala. 

Yes es una banda compleja, del mismo modo que Scala es un lenguaje
complejo.

![](https://d2dspjyoh5c79p.cloudfront.net/86ff34a8-6a96-11e7-976c-0d1ee2977bbe-aa9f18b7)

En [el primer post de esta serie](/blog/lnds/2017/06/10/pour-some-syntactic-sugar-on-me)
asocié, accidentalmente en realidad, a Def Leppard con Kotlin. Esta vez
consulté a mi amigo [Ubaldo Taladriz](https://twitter.com/utaladriz),
quien lleva más horas de vuelo que yo usando Scala. Le pedí su opinión
sobre qué banda le parecía más adecuada para reflejar a este lenguaje. Y
llegamos a la conclusión de que tenía que ser algo que reflejara la
complejidad, pero además fuera un grupo de gran calidad, con buenas
canciones.  

Las composiciones de Yes tienen esa componente, sobretodo en álbumes
como Fragile, o Close to the Edge. [Pero Yes también ha seguido
derroteros más populares, como en los álbumes de 90125, o Big
Generator.

El registro de Yes va desde clásicos como Close to the Edge, Starship
Trooper, RoundAbout, hasta hits como Owner of a Lonely Heart.

En Scala podemos escribir código muy simple y cercano a Java. Pero a
diferencia de Java, es más difícil escapar del paradigma orientado al
objeto en Scala.

## El desafío Huffman

Recordemos que en este desafío estoy implementando la compresión de
archivos usando la codificación de Huffman. Pueden leer la explicación
de este desafío en [mi anterior artículo](/blog/lnds/2017/06/10/pour-some-syntactic-sugar-on-me).

Mi primera solución en Scala es una simple traducción de la versión en
Kotlin [descrita anteriormente](/blog/lnds/2017/6/10/pour-some-syntactic-sugar-on-me).

Por supuesto, hacer esto es un tanto decepcionante. Por ejemplo,
consideren este fragmento de código:

```scala
    import scala.util.control.Breaks._

    ....

    def extract() : HuffTree = {
        if (empty()) {
          throw new ArrayIndexOutOfBoundsException()
        }
        val min = heap(1)
        heap(1) = heap(last)
        last -= 1
        var j = 1
        breakable {
          while (2 * j <= last) {
            var k = 2 * j
            if (k + 1 <= last && heap(k + 1).frequency < heap(k).frequency) {
              k += 1
            }
            if (heap(j).frequency < heap(k).frequency) {
              break
            }
            val tmp = heap(j)
            heap(j) = heap(k)
            heap(k) = tmp
            j = k
          }
        }
        min
      }
```

En Scala no existe la primitiva **break**, que existe en Kotlin para
interrumpir un loop. 

En Scala, esto se simula en el package scala.util.control.Breaks, que
define un DSL para esto. 

Los diseñadores de Scala decidieron que este tipo de estructuras
introduce más problemas, y tienen razón en mi opinión. A veces esta
interrupción de un loop hace que razonar sobre el comportamiento de una
función sea más difícil.

El código anterior es parte de la implementación de un Heap, como
estructura de datos.

La primera solución, es decir, la traducción del código Kotlin está
disponible en Github en el siguiente repositorio:
 <https://github.com/lnds/9d9l/tree/master/desafio4/scala1>

No es muy interesante en el sentido de que no destaca muchas de las
características de Scala.

Así que escribí una segunda solución, en la que usé un estilo más
funcional para una parte crucial del código.

En vez de implementar un Heap, hice una interpretación más directa del
algoritmo:

1.  Por cada tupla (carácter, frecuencia) armamos un nodo hoja y los
    dejamos en una lista ordenada por el valor frecuencia en forma
    ascendente.
2.  Tomamos los dos primeros elementos de la lista los combinamos en un
    nodo interno, donde la frecuencia del nodo es la suma de las
    frecuencias de las dos hojas que contiene. Insertamos este nodo en
    la lista, manteniendo el orden.
3.  Repetimos hasta que sólo quede un árbol en la lista.

Para esto nuestro modelo de datos es el siguiente:

```scala
    abstract class HuffTree(val frequency: Int) 

    case class HuffLeaf(override val frequency: Int,  symbol: Char) 
       extends HuffTree(frequency = frequency) 

    case class HuffNode(left:HuffTree, right: HuffTree) 
       extends HuffTree(left.frequency+right.frequency) 
```

Creamos una clase abstracta y dos case clases, una para Hoja y otra para
Nodo.

Las *"case classes"* son ideales para trabajar con estructuras de
datos inmutables, cómo las  listas. De este modo la primera parte del
algoritmo queda así:

```scala
     val leaves = freqs
          .map { case (sym, freq) => HuffLeaf(freq, sym) }
          .sortWith((l1: HuffLeaf, l2: HuffLeaf) => l1.frequency < l2.frequency)
```

freqs es una lista de pares (carácter, frequencia), que se construye al
leer el archivo. Al estar en una lista puedo *mapear* cada par
insertándolos en un nodo hoja. Luego se ordena la lista con el método
sortWith.

Esto nos permite eliminar la necesidad de crear una estructura de datos
como el Heap, de la solución inicial.

Ahora bien, ¿cómo implementamos los pasos 2 y 3 repetidamente?

La solución funcional a esto es muy elegante. 

Lo primero que haremos es lo siguiente: c[rearemos una función que nos
indique si la lista, que contiene todos los nodos (o árboles) sólo
contiene un elemento:]{style="letter-spacing: 0.01rem;"}

```scala
    def singleton(trees: List[HuffTree]) : Boolean = trees.length == 1
```

Esta función recibe una lista de árboles y retorna verdadero sólo si la
lista contiene un sólo elemento. Recordemos que iniciamos con una lista
de hojas (leaves) obtenida anteriormente.

Lo otro que haremos es una función de *combinación*, esta implementa en
esencia el paso 2 de nuestro algoritmo:

```scala
     def combine(trees: List[HuffTree]) : List[HuffTree] =
        trees match {
          case left :: right :: tail => 
           (HuffNode(left, right) :: tail).sortWith((l1,l2) => l1.frequency < l2.frequency)
          case _ => trees
        }
```

La función combine recibe una lista, si la lista tiene al menos dos
elementos, tomamos los dos primeros elementos para crear un nodo
interno:

```scala
    case left :: right :: tail =>  (HuffNode(left, right) :: tail)
```

Este fragmento de código es un *"pattern matching",* en este caso el
patrón es **left :: right :: tail.
**Este patrón corresponde a los dos primeros elementos de la lista y
tail representa el resto de los elementos. 

Lo que viene después de =\> es una transformación, en este caso
convertimos el patrón left::right::tail en HuffNode(left, right)::tail,
es decir, reemplazamos los dos primeros elementos por un nodo interno
que contiene a estos elementos como hijos. Y a este nodo le concatenamos
el resto de la lista (tail).

Por supuesto, esto no es suficiente, hay que mantener ordenada la lista
resultante, y eso se logra agregando la llamada a sortWith.

Entonces, la función combine lo que hace es ejecutar el paso dos de
nuestro algoritmo, tomar dos elementos iniciales de una lista de nodos
(ordenada en orden ascendente de frecuencias) y generar una nueva lista
ordenada, en que los dos primeros nodos han sido reemplazados por un
nodo interno que los contiene.

Ahora falta la repetición, y para eso usamos  la función until:

```scala
    @tailrec
    def until[A](singleton: A => Boolean, combine: A => A)(data: A) : A =
        if (singleton(data)) data else until(singleton, combine)(combine(data))
```

Esta es una función recursiva y genérica. Recibe una tupla consistente
en la función condicional que nos permite establecer la condición de
término de la recursión, en este caso es singleton, Además recibe una
función de combinación. Todo esto será aplicado sobre data, que es la
estructura que recorreremos (en este caso una lista, pero puede ser
cualquier estructura de datos que soporte las operaciones singleton y
combine.

La anotación \@tailrec indica a Scala que puede optimizar el código de
esta recursión mediante la técnica de [tail call](https://en.wikipedia.org/wiki/Tail_call).

Así que crear el árbol final a partir de la lista de hojas es tan simple
como esto:

```scala
    until(singleton, combine)(leaves).head
```

De este modo, la función que construye el árbol de Huffman es la
siguiente:

```scala
     def build(freqs: List[(Char, Int)]): HuffTree = {
        val leaves = freqs
          .map { case (sym, freq) => HuffLeaf(freq, sym) }
          .sortWith((l1: HuffLeaf, l2: HuffLeaf) => l1.frequency < l2.frequency)
        
        until(singleton, combine)(leaves).head
      }
```

Por supuesto esta implementación es más lenta que las solución 1, en
este caso la elegancia de la solución tiene un costo de performance,
pero no es tan caro como pueda parecer. Al final de esta serie
evaluaremos el desempeño de las distintas soluciones.

Hay una otras maneras de solucionar esto usando Scala de una forma más
funcional aún, usando otras estructuras de datos propias de Scala, pero
se los dejo como ejercicio.

## Close to the edge

Scala es uno de esos lenguajes que permite acercarse a los extremos,
"close to the edge", hacia un estilo más funcional, lo que permite
escribir código que tiene cierta elegancia, concisión, e incluso una
formalidad matemática mayor, que permite simplificar el razonamiento
sobre el flujo de la información durante la ejecución. 

Con esta construcción

```scala
    @tailrec
    def until[A](singleton: A => Boolean, combine: A => A)(data: A) : A =
        if (singleton(data)) data else until(singleton, combine)(combine(data))
```

hemos creado un lenguaje de dominio específico para procesar datos.
Scala nos permite crear nuevas estructuras para operar sobre una gran
cantidad de estructuras de datos. Tenemos el poder de extender los
límites del lenguaje.

## Down by the river

Usar estructuras inmutables es lo que ayuda. La programación funcional
puede ser vista como el flujo de datos a través de diversos filtros, una
corriente de información, donde cada función es un filtro, una cañería,
que transforma la data en cada paso.

El mejor ejemplo es el código de arriba:

```scala
     freqs
          .map { case (sym, freq) => HuffLeaf(freq, sym) }
          .sortWith((l1: HuffLeaf, l2: HuffLeaf) => l1.frequency < l2.frequency)
```

Un flujo de datos desde un arreglo de bytes para terminar en una lista
de nodos.

Y cuando hacemos:

```scala
    until(singleton, combine)(leaves).head
```

también trabajamos con un flujo controlado de datos, un rio de
información.

Así que la elección de Yes para hablar de Scala resultó muy adecuada.

El código está disponible en [mi repositorio GitHub](https://github.com/lnds/9d9l)
 y pueden hacerme las consultas que
estimen conveniente. Recibo también pull request con mejoras y aportes.

Referencias:

Para la primera parte de esta serie lee: [Pour some syntactic sugar on me](/blog/lnds/2017/06/10/pour-some-syntactic-sugar-on-me)

Para entender la serie: [Esos raros lenguajes nuevos](/blog/lnds/2016/01/09/esos-raros-lenguajes-nuevos)

Repositorio GitHub: https://github.com/lnds/9d9l/ 