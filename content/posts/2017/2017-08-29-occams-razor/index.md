---
title: "Occam's Razor"
authors: [admin]
subtitle: "9 desafíos en 9 lenguajes (4 de 9) parte 3"
date: 2017-08-29T08:25:11-03:00
slug: "occams-razor"
aliases: [/blog/lnds/2017/8/29/occams-razor]
draft: false
tags: ['desafios', 'lenguajes nuevos', 'lenguajes', 'lenguajes de programación', 'programación', 'rock', 'clojure', 'programación funcional']
image:
  placement: 3
---

## Porcupine Tree y Steven Wilson

La historia de Porcupine Tree es curiosa. Nació en 1987 como una suerte
de elaborada broma (hoax band) creada por Steven Wilson y Malcolm Stock.

{{<figure caption="Steven Wilson, creador de Porcupine Tree" src="https://d2dspjyoh5c79p.cloudfront.net/c142f0bb-8c19-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Los dos amigos elaboraron una detallada historia sobre una supuesta
banda sicodélica de los setenta, que llamaron Porcupine Tree.


Este recuento contenía coloridas anécdotas sobre eventos,
participaciones en festivales de rock, y por supuesto estadías en
prisión. Cuando Wilson tuvo su propio equipo de estudio grabó varias
horas de material musical, con el fin de entrega "evidencias" de la
existencia de la banda.

Aunque Stocks participó con algunos pasajes vocales y algo de guitarras
experimentales, su rol en el proyecto fue principalmente el
de proporcionar ideas, la mayor parte del material fue escrito, grabado
y ejecutado por Steven Wilson.

La idea de Wilson con este proyecto era emular lo que hicieron
[XTC](https://es.wikipedia.org/wiki/XTC) con 
[The Dukes of Stratosphear](https://en.wikipedia.org/wiki/The_Dukes_of_Stratosphear),
una banda modelada en base a los grupos pop sicodélicos de los sesenta.
Recién en 1989 empezó a considerar la idea de formar una banda, pero
antes lanzó un cassette de ochenta minutos de duración titulado
"[Tarquin's Seaweed Farm](https://en.wikipedia.org/wiki/Tarquin%27s_Seaweed_Farm)", el que
incluía un folleto de ocho páginas con más historias falsas sobre la
banda, manteniendo aún el espíritu de la broma. Esta grabación circuló
entre algunos conocidos de Wilson, pero fue suficiente para generar
cierto interés por este misterioso grupo.

Y fue así como entre 1991 y 1997 se formó y consolidó Porcupine Tree
como una banda real, con la dirección de Wilson, quien además actuaba de
vocalista y primera guitarra, Richard Barbieri en teclados, Colin Edwin
en bajo y Chris Maitland en batería. Esta formación se mantuvo hasta
2002, cuando Maitland abandona el grupo y se incorpora el gran baterista
Gavin Harrison. Es en el periodo del 2002 hasta 2010 donde el estilo de
Porcupine Tree se consolida y se publican sus álbumes más exitosos, como
In Absentia, Deadwing, el reconocido Fear of a Blank Planet y The
Incident.

![](https://d2dspjyoh5c79p.cloudfront.net/f076ae3c-8c19-11e7-a030-2b5831f8ecb5-aa9f18b7)

Pero este post no es sobre Porcupine Tree, así que sigamos.

## Occam's Razor

Occam's Razor, la Navaja de Occam, es el primer tema de 
[The Incident](https://en.wikipedia.org/wiki/The_Incident_(album)), una pieza
instrumental de menos de dos minutos, que antecede a la canción The
Blind House. Con respecto a este título Steven Wilson declaró lo
siguiente:

> "Todo el asunto sobre Occam's Razor para mi es que es una suerte de
> preludio a The Blind House, una canción que trata sobre un culto
> religioso. He escrito algunas canciones en estos años sobre mis
> sentimientos con respecto a la religión organizada. \[\...\]  lo
> interesante sobre Occam's Razor es que si aplicas sus principios
> sobre la religión la Navaja de Occam básicamente dice que cualquiera
> que sea la más obvia, aceptable y lógica de las explicaciones es la
> que debes aceptar como correcta. Hay muchas teorías para explicar
> algo, tienes que descartar todas esas para las que no hay suficiente
> evidencia o parecen implausibles y aceptar aquella que tiene el mayor
> peso científico. Si aplicas este principio a la creación del universo
> y porqué los seres humanos están acá, Dios y la religión está como en
> la posición 50.000 en una lista de explicaciones plausibles\[\...\]"

El término de [la Navaja de Occam](https://es.wikipedia.org/wiki/Navaja_de_Ockham) nos habla sobre
descartar las explicaciones enrevesadas, sobre descartar la
complejidad. 

En su forma más pura la Navaja de Occam dice lo siguiente:

> "Cuando te enfrentes a hipótesis competidoras, selecciona la que haga
> menos suposiciones. No multipliques entidades sin necesidad."


Este concepto, acuñado por el filósofo medieval 
[Guillermo de Ockham](https://es.wikipedia.org/wiki/Guillermo_de_Ockham), nos lleva al
segundo protagonista de este post, Rich Hickey, el autor de Clojure.


## Simple Made Easy

Rich Hickey es el creador de Clojure, el lenguaje que usaremos para
resolver nuestro desafío cuatro.

{{<figure caption="Rich Hickey, creador de Clojure" src="https://d2dspjyoh5c79p.cloudfront.net/a599f25a-8c19-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

En la [primera parte](/blog/lnds/2017/06/10/pour-some-syntactic-sugar-on-me)
de esta serie introduje el problema y presenté la solución en Kotlin. En
la [segunda parte](/blog/lnds/2017/7/17/close-to-the-edge-down-to-the-river)
expuse la solución en Scala.

Es el momento de resolver la codificación Huffmann usando Clojure, el
tercero de nuestros lenguajes basados en la JVM (Java Virtual Machine).

Una de las cosas que me gustan de [Clojure](https://clojure.org/) es su
simpleza. Rich Hickey nos dice en su charla 
["Simple Made Easy"](https://www.infoq.com/presentations/Simple-Made-Easy), que
debemos buscar la simplicidad, porque ésta es un requisito para la
confiabilidad.

Lo simple a menudo es tomado de forma errónea por lo "fácil". Pero
fácil significa que es lo que tenemos más a mano, algo que es accesible.
Por otro lado "Simple" es lo opuesto a lo "Complejo", y lo complejo
es algo que está enrevesado (algo lioso, confuso, enredado o
intrincado). Así que simple no es lo mismo que fácil.


Para Hickey lo que importa en el software es:

-   ¿hace lo que se supone que debe hacer?
-   ¿es de alta calidad?
-   ¿es confiable?
-   ¿se pueden resolver los problemas en el camino?
-   ¿pueden cambiar los requerimientos a lo largo del tiempo?

La respuesta a estas preguntas es lo que importa cuando escribimos
software, no el "look and feel" de la experiencia de escribir el
código o las implicaciones culturales de esto.

Los beneficios de la simplicidad son:

-   facilidad de entendimiento
-   facilidad para el cambio
-   facilidad para depurar
-   flexibilidad


Para construir sistemas simples debemos descartar esas construcciones
complejas, como el estado, los objetos, los métodos, la sintaxis, la
herencia, las variables, los loops imperativos, actores, ORM,
condicionales.


Para Hickey las construcciones simples son: Valores, Funciones, Espacios
de nombres, Datos, Polimorfismo, Referencias Administradas, Funciones
sobre conjuntos, Colas, Manipulación de datos declarativos, Reglass y
Consistencia.

Los sistemas simples se construyen mediante la abstracción, hay que
diseñar respondiendo las preguntas clásicas: qué, quién, cuándo, dónde,
por qué y cómo. Luego se eligen construcciones que generen artefactos
simples.


Así como Guillermo de Ockham al plantear su famoso principio nos invita
a desechar aquellas hipótesis menos enrevesadas y que no compliquemos
nuestros razonamientos invocando a más entidades que las necesarias,
Rich Hickey nos invita a hacer algo similar con el software.

Es por esto que Clojure es un lenguaje tan interesante, y es lo que hace
que valga la pena aprenderlo.

# Desafío 4 en Clojure

Veamos cómo aplica todo esto en el contexto del problema que estamos
solucionando.

Recordemos que lo que queremos es implementar una forma de compresión de
archivos de texto usando la codificación de Huffman.

La compresión es muy sucinta en Clojure, y para mi al menos queda muy
clara:

```clojure
    (defn compress [input output]
      (let [bytes (read-bytes input)
            freq (sort-by val <  (frequencies bytes))
            leaves (map (partial apply leaf) freq)
            tree (make-tree leaves)
            codes (make-codes tree)]
        (write-encoded output (flatten [(tree-as-bits tree)
                                        (encode-bits codes bytes)] ))))
```

Vamos a desglosar esto por parte:

```clojure
        (let [bytes (read-bytes input)
```

Es simplemente leer todos los bytes del archivo en un arreglo, esta es
una función propia construida en base la biblioteca java.nio, y pueden
encontrarla en el namespace huffman.io.


Una vez obtenidos los caracteres del archivo calculamos su frecuencia:\

```clojure
              freq (sort-by val <  (frequencies bytes))
```

La función frecuencies recibe un arreglo de bytes y devuelve un arreglo
de pares en que coloca cada elemento único y su frecuencia.[^1]


Esta tabla de frecuencias la ordenamos de mayor a menor para esto usamos
sort-by, con val y \< como argumentos, val es la función que obtiene el
valor de frecuencia de la lista de pares devuelta por frecuencies, \< es
la función usada para comparar dos valores.

Luego convertimos estas frecuencias en hojas de nuestro árbol:

```clojure
            leaves (map (partial apply leaf) freq)
```

Acá usamos la función leaf que se define así:


```clojure
(defn leaf \[symbol freq\] (list :leaf freq symbol))
```

Es decir, una hoja (leaf) es una lista que contiene una etiqueta :leaf,
luego la frecuencia y en la tercera posición el símbolo.


Al hacer (map (partial apply leaf) freq) usamos la función map para
crear un nuevo arreglo de hojas a partir de un arreglo de frecuencias.


Con las hojas generamos el árbol:

```clojure
    tree (make-tree leaves)
```

La función make-tree se define así:

```clojure
    (defn make-tree [leaves]
      (loop [trees leaves]
          (if (= 1 (count trees))
            (first trees)
            (recur (sort-tree (cons (node (first trees) (second trees)) (drop 2 trees)))))))
```

Esto aplica el loop del algoritmo para construir un árbol de
codificación de huffman. Mientras el largo del arreglo sea mayor a uno,
tomamos los dos primeros nodos y construimos un nuevo nodo que los tiene
de hijos, eso es lo que hace la función node:

```clojure
    (defn weight [node] (second node))(defn node [left right] (list :node (+ (weight left) (weight right))  left right))
```

Un nodo, entonces, es una lista con una etiqueta :node seguido de la
suma de las frecuencias de su nodo izquierdo y del nodo derecho, luego
el nodo izquierdo y el nodo derecho. (La función weight retorna la
frecuencia de un nodo o de una hoja, que siempre corresponde al segundo
elemento de la lista).


Ahora hay que construir la tabla de códigos, esto se hace con la función
make-codes la que recibe el árbol:

```clojure
    codes (make-codes tree)]
```
La función make-codes es como sigue:

```clojure
    (defn make-codes
      ([tree] (make-codes tree []))
      ([tree code]
        (if (leaf? tree)
          {(sym tree) code}
          (conj
            (make-codes (left-node tree) (conj code 0))
            (make-codes (right-node tree) (conj code 1))))))
```

Esta es una función que puede ser invocada de dos maneras, una externa
en que sólo recibe el árbol y en ese caso llama a la versión interna que
recibe el árbol además del código.

En el caso de la función interna tenemos dos caso, que el árbol sea una
hoja, en cuyo caso el resultado es un par con el símbolo y el código,
pero como una tupla hash-ref, esto permite armar un diccionario que nos
permite mapear los símbolos a sus representaciones binarias.


Si el árbol es un nodo, entonces el resultado es un diccionario con los
códigos del lado izquierdo del árbol (que empiezan con 0) junto a los
códigos del lado derecho del árbol (que empiezan con 1).

Ahora viene la parte final:

```clojure
    (write-encoded output (flatten [(tree-as-bits tree)
                                    (encode-bits codes bytes)] ))
```

La función write-encoded recibe un arreglo de bits (0's y 1's) y lo
escribe en el archivo output.

El arreglo de 0s y 1s se obtiene a partir de dos partes:

```clojure
    (tree-as-bits tree)
```

x
Es una función que transforma el árbol en una secuencia de 0s y 1s, y
luego:

```clojure
    (encode-bits codes bytes)
```

que transforma cada byte en su representación binaria en el código de
huffman.  Cómo cada representación es un arreglo, esto genera un arreglo
de arreglos de 0s y 1s, para obtener un arreglo plano de ceros y unos
usamos flatten[^2].

La función encode-bits es la siguiente:

```clojure
    (defn encode-bits [codes bytes]
      (flatten (map codes bytes)))
```

Esa es la descripción de la compresión, les dejo el código para que
analicen la descompresión.

El código está acá: https://github.com/lnds/9d9l/tree/master/desafio4/clojure

## Way out of here 

Tanto Rich Hickey como Steven Wilson son hombres de fuertes convicciones
en sus respectivos campos profesionales, uno como desarrollador de
software, el otro como artista.

La visión de Wilson sobre el artista (artist) se resume cuando lo
compara con el "animador" (entertainer):

«Hago una clara distinción entre estas dos. Si quieres ser un animador y
agradar a tus fanáticos, terminas dándoles lo mismo todo el tiempo. Si
eres un artista, lo haces por una necesidad más profunda dentro de ti
que es más conductiva a la experimentación e innovación.».

Yo creo que hay una diferencia entre el programador (que es un artista
en mi visión) y el codificador. El programador va más allá de agradar al
usuario, no le da lo que el usuario pide, sino que lo que necesita 
([ya he hablado de esto](/blog/lnds/2013/03/23/expectativas)). En ese
sentido el codificador es como el animador que habla Wilson. Por otro
lado el artista, y el programador son innovadores y sorprenden a los
receptores de su trabajo.

Por otro lado, Rich Hickey en sus charlas, nos expone otra forma de
aproximarnos al arte de la programación, les recomiendo revisarlas en
sitios como InfoQ: <https://www.infoq.com/profile/Rich-Hickey>.

Una de mis citas favoritas de Hickey es la siguiente:

> "Simplicity is hard work. But, there's a huge payoff. The person who
> has a genuinely simpler system - a system made out of genuinely simple
> parts, is going to be able to affect the greatest change with the
> least work. He's going to kick your ass. He's gonna spend more time
> simplifying things up front and in the long haul he's gonna wipe the
> plate with you because he'll have that ability to change things when
> you're struggling to push elephants around."
>
> -- ***"La simplicidad es trabajo duro."***

Y ese es el mensaje último de este post. Los dejo con Porcupine Tree
para el cierre:

> The shutters are down and the curtains are close>\
> And I've covered my tracks\
> Disposed of the car

{{<youtube SlwT7VTM_Hc>}}


[^1]: Aunque no lo declaré antes, asumimos que los archivos son
simplemente secuencias de bytes, ignoramos su encoding.

[^2]: Para entender un poco esto, (map codes bytes) podría generar una
salida del estilo:\
    [[0 1 0 1 0 0] [1 0 1 0 1] [1 1 0 11] ...]\
Al hacer flatten obtenemos:\
    [0 1 0 1 0 0 1 0 1 0 1 1 1 0 11 ...]

