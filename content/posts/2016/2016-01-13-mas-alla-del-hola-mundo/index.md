---
title: "Más allá del Hola Mundo"
authors: [admin]
date: 2016-01-13T08:25:11-03:00
slug: "mas-alla-del-hola-mundo"
draft: false
tags: ['lenguajes de programación', 'desafíos']
image:
  placement: 3
---

Desde que Kernighan & Ritchie publicaron "The C Programming Language"
ha sido, casi de rigor, que toda introducción a un nuevo lenguaje de
programación parta con el famoso ["Hello
World](//en.wikipedia.org/wiki/%22Hello,_World!%22_program)". Un
programa muy sencillo que es más o menos así:

>     main() {
>        printf("hello, world\n");
>     }

Esta tradición está bien para un principiante, pero también es útil para
verificar que hemos instalado el compilador y/o el ambiente del lenguaje
que queremos aprender.

Pero para un profesional, que quiere aprender y evaluar un nuevo
lenguaje de programación, nos gustaría contar con un test que permita
responder las siguientes interrogantes:

> ¿Cómo se controla el flujo de un programa? Es decir, cómo se expresa
> la toma de decisiones, cómo se escribe un ciclo (loop), cómo se define
> el inicio y el fin de un ciclo. ¿Acepta recursividad el lenguaje?
> ¿Cómo se define una simple función o sub
> rutina?

Por supuesto que primero hay que conocer el tipo de paradigma principal
de ese nuevo lenguaje (funcional, orientado al objeto, lógico,
imperativo, etc)., pero eso lo tenemos más o menos claro cuando elegimos
el lenguaje en cuestión, lo que queremos es poder escribir un programa
que permita probar lo básico, los elementos mínimos que componen todo
programa, sus estructuras de control y la forma en que podemos dividir y
organizar el
código.

{{<figure caption="Dijkstra" src="//d2dspjyoh5c79p.cloudfront.net/8e70a390-ba4e-11e5-8a08-83bbaa5c62fa-aa9f18b7">}}

Para escribir cualquier programa en una Máquina de Turing basta tener
dos instrucciones: if y goto. Pero todos odiamos los goto, por eso, bajo
la luz de Dijkstra y la idea de "programación estructurada", nuestros
antepasados nos entregaron los loops (while, for, repeat, etc).

Pero otro grupo, bajo la inspiración de McCarthy descubrió que estas
cosas se pueden hacer de otra manera y en vez de pensar en condiciones y
saltos podemos ver un programa como un flujo de datos que van pasando de
función a función, flujos que transforman lo datos de entrada en datos
de salida.

{{<figure caption="McCarthy" src="//d2dspjyoh5c79p.cloudfront.net/a0031521-ba4e-11e5-8a08-83bbaa5c62fa-aa9f18b7">}}

Así que a grande rasgos, y considerando sólo la sintaxis básica, tenemos
lenguajes que siguen la linea de Dijkstra de la programación
estructurada y lenguajes que siguen la vía de McCarthy y se construyen
mediante la composición de funciones (y la manipulación de listas o
secuencias).

Para evaluar la médula de la sintaxis se me ocurrió que el desafío
adecuado para el proyecto 
["9 desafíos en 9 lenguajes de programación"](/blog/lnds/2016/01/09/esos-raros-lenguajes-nuevos) 
(que describí en mi post anterior) consiste en un juego interactivo.

Un juego simple, por supuesto, en que la interacción se haga a través de
la consola básica del sistema operativo (por ejemplo, el shell).

## Juegos por SMS

Hace varios años atrás desarrollé juegos con los que las personas
interactuaban vía SMS (mensajería de texto en celulares). 

Seguramente los conocen:  "manda la palabra XXX vía mensaje de texto al
número 9999 y ya estás participando" o "Vota por tu artista favorito X
enviando un mensaje al 9999".

La idea era que el público enviara un SMS y jugara, para matar el tiempo
en una época sin Smartphones. Aparte de pasar el rato la gente vaciaba
sus billeteras, porque cada interacción con el juego costaba varios
pesos (entre \$80 y \$250 de la época). Pero esa era la idea del
"modelo de negocios" (y de todos los modelos de negocios, exprimir tu
billetera para poder pasarle ese dinero a los inversionistas).

Uno de los juegos que implementé fue Black Jack, otro se llamaba Toque y
Fama. 

![](//d2dspjyoh5c79p.cloudfront.net/3ae368a9-ba50-11e5-8a08-83bbaa5c62fa-aa9f18b7)

Lo *"bonito"* de Toque y Fama es que puedes estar mucho rato jugando y
por lo tanto enviando muchos mensajes (\$ \$ \$ \$) al servidor, tratando
de adivinar la cifra. (Ustedes pensarán que nos hicimos ricos con esto,
pero no, la verdad es que en Chile la mayor parte de la gente en esa
época tenía planes de prepago y no iba a gastar sus pocas "*luquitas"*
en *leseras*, aunque, el horóscopo y los relatos eróticos (por SMS!)
tuvieron mayor éxito, pero esa es una historia para otra oportunidad.

Toque y fama es un juego muy simple:

> El servidor genera una secuencia de 5 dígitos distintos, por ejemplo:
> 4,8,1,3 y 5. 
>
> El usuario debe tratar de adivinar los números en el orden correcto.
> Si envía un SMS con "12345", el servidor le responderá "Tienes 3
> Toques y 1 Fama", porque los números 1,3 y 4 están en la lista, pero
> en posiciones incorrectas (*"toques"*), por otro lado el 5 está en
> la lista y en la posición correcta ("fama").
>
> Luego el jugador entusiasmado decide probar con la secuencia "40321"
> (este es un jugador obsesivo y sin una estrategia clara, un ingenuo
> que puede llegar a gastar mucho dinero en SMS, los inversionistas
> están felices).
>
> Al recibir el SMS 40325 el servidor responde con el mensaje "Tienes 1
> Toque y 2 Famas". Y así sigue el pobre incauto enviando mensajes
> hasta que logra las 5 Famas y gana (o se le acaba el dinero del plan,
> pero ese es su problema, no nuestro).

## El desafío número 1

El primer objetivo de este desafío es implementar "Toque y Fama" en
Clojure, Erlang, F\#, Go, Haskell, Kotlin, Rust, Scala y Swift. 

Por supuesto no vamos a implementar un
[ESME](//en.wikipedia.org/wiki/External_Short_Messaging_Entity) para
jugar usando nuestros celulares, la entrada al sistema la vamos a
reemplazar con la consola del sistema operativo (conocida en otro
círculos como [entrada estándar o
STDIN](//es.wikipedia.org/wiki/Entrada_est%C3%A1ndar)).

Una sesión de nuestro juego se verá así:

```
    Bienvenido a Toque y Fama.
    ==========================
    En este juego debes tratar de adivinar una secuencia de 5 dígitos generadas por el programa.
    Para esto ingresas 5 dígitos distintos con el fin de adivinar la secuencia.
    Si has adivinado correctamente la posición de un dígito se produce una Fama.
    Si has adivinado uno de los dígitos de la secuencia, pero en una posición distinta se trata de un Toque.
    Ejemplo: Si la secuencia es secuencia: [8, 0, 6, 1, 3] e ingresas 40863, entonces en pantalla aparecerá:
    tu ingresaste [4, 0, 8, 6, 3]
    resultado: 2 Toques 2 Famas

    Ingresa una secuencia de 5 dígitos distintos (o escribe salir):
    *12345
    tu ingresaste [1, 2, 3, 4, 5]
    resultado: 1 Toques 1 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    67890
    tu ingresaste [6, 7, 8, 9, 0]
    resultado: 3 Toques 0 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    67915
    tu ingresaste [6, 7, 9, 1, 5]
    resultado: 4 Toques 1 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    97615
    tu ingresaste [9, 7, 6, 1, 5]
    resultado: 3 Toques 2 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    91756
    tu ingresaste [9, 1, 7, 5, 6]
    resultado: 2 Toques 3 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    91765
    tu ingresaste [9, 1, 7, 6, 5]
    resultado: 0 Toques 5 FamasGanaste! Acertaste al intento 6! La secuencia era [9, 1, 7, 6, 5].
```


No es la idea de este proyecto, ni de estos artículos, el enseñar a
programar en cada uno de estos lenguajes, para eso hay mucho material en
internet y una gran cantidad de libros. Al final de esta serie de
artículos publicaré referencias bibliográficas para que puedan aprender
el lenguaje que les parezca más interesante.

En este primer desafío otro objetivo es revisar como expresamos las
estructuras de control (loops, ifs, etc) y como se definen las sub
rutinas.

Por supuesto que se deben hacer más cosas para resolver este ejercicio:
leer y escribir desde la consola, manipular strings, generar números
aleatorios, etc. Pero en cada capítulo de este proyecto voy a
concentrarme en distintos aspectos de la programación en general y como
se resuelven en cada uno de los 9 lenguajes. En esta oportunidad son las
estructuras de control y la declaración de funciones o sub rutinas.

El código completo está en mi repositorio Github en la siguiente
dirección: <https://github.com/lnds/9d9l/tree/master/desafio1>

Sugiero obtener y compilar el código del lenguaje en que estén
interesados y luego estudiarlo. Por cada uno agregué una breve nota en
el directorio doc. 

## **Tipos de Lenguajes**

Ya les hablé de que hay lenguajes que vamos a llamar Dijkstreanos que
usan ifs, loops y esas cosas y lenguajes que vamos a llamar McCartheanos
que prefieren la recursividad y el pattern matching. Para simplificar
las cosas los vamos a llamar lenguajes tipo D y tipo M[^*]. 

Esta es una división que se me ocurrió ahora, de puro *bacán* que soy,
así que no la busquen en ningún libro, ni en Wikipedia, porque no
existía hasta que se me ocurrió (puede que un día la academia la adopte
y me entreguen el PhD que me merezco por este brillante aporte a la
ciencia de la computación).

Los lenguajes tipo D son normalmente imperativos (son explícitos en cómo
ejecutar las operaciones), permiten la mutabilidad de estado, permiten
organizar el código en módulos, clases, objetos, interfaces, prototipos,
traits, etc.

Los lenguajes tipo M son más declarativos (se interesan en el qué se
requiere computar, no cómo), favorecen la inmutabilidad, son
funcionales, favorecen la composición de funciones, operan sobre
estructuras de datos como listas, secuencias, etc. 

En este proyecto tenemos:

Lenguajes Tipo D: Go, Kotlin, Rust y Swift.

Lenguajes Tipo M: Clojure, Haskell y Erlang.

Sin embargo, todos los tipo D en este proyecto soportan recursividad,
sólo que no siempre es la forma más eficiente de implementar algunas
cosas en estos lenguajes.

Por otro lado, Scala tiene la particularidad de que podemos escribir
programas enteros siguiendo el estilo de los lenguajes Tipo M. Por esto
vamos a crear un tercer grupo de lenguajes, que llamaremos Tipo O, en
honor a Martin Odersky. F\# también tiene muchas de estas
características. Son Lenguajes que tienen elementos de los lenguajes
tipo D y M.

A continuación revisaremos brevemente las estructuras de control de cada
uno de estos lenguajes y posteriormente veremos cómo se declaran las
funciones, para finalizar con algunas conclusiones del ejercicio.

## Evaluación la sintaxis de los lenguajes

### Estructuras de Control 

La selección nos permite decidir cuales acciones se deben ejecutar en un
programa en base a una condición. Como los IFs en muchos lenguajes, o
los switchs/case que permiten selección entre múltiples casos.

Veamos qué descubrimos con este ejercicio.

## **Lenguajes Tipo D (Go, Rust, Swift, Kotlin)**

Todos usan un if derivado de la sintaxis de C.  Go, Rust y Swift
eliminan los paréntesis en la expresión evaluada, aunque Kotlin lo
conserva.

Ejemplos:

En Go, un fragmento de la función que valida la entrada.

{{<gist lnds 4b29aba11d61b18e88eb>}}
If en Go

Go es bien estricto con la forma en que ponemos las llaves del bloque de
código { y }, las que son obligatorias (igual que en Swift y Rust).

En Swift, el mismo fragmento:

{{<gist lnds 25a5db4dc7b3a158bf53>}}
If en Swift

En Rust:

{{<gist lnds e7e9c746475baf88d65d>}}
If en Rust, notar que podemos escribir el cuerpo en la misma linea, algo
que no se puede hacer en Go.

Sin embargo en Rust if es una forma de expresión como queda claro en
este fragmento de la función validar\_entrada:

```rust
    return if num.len() == tam { Jugar(num) } else { Error }
```

En Kotlin:

{{<gist lnds cb2519efd5fe43da3824>}}


Notar que no colocamos un else después del primer if, lo mismo podríamos
haber hecho en Go y Rust.

En Kotlin if también es una expresión.

En Go y Swift if es una sentencia (statement), en cambio en Rust, Scala,
Kotlin, Erlang, F\# y Haskell es una expresión.

La diferencia es la siguiente:

```
    // Esto es seudo lenguaje

    // Cuando if es una sentencia

    var max : Int;
    if a > b then max = a else max = b;


    // cuando if es una expresión

    max := if a > b then a else b;
```

Para los que han desarrollado en C o C++ el if como expresión reemplaza
al operador ternario "?:".

## Tipo O

{{<gist lnds db41725f31dbb6c425eb>}}

El if en Scala está usando operaciones sobre colecciones como en los
lenguajes funcionales.

En este caso aprovechamos de destacar una característica de los
lenguajes Tipo O, que mezclan conceptos de programación orientada al
objeto con programación funcional. La variable
***accion*** es un
string, en Scala un string es un objeto que corresponde a una secuencia
de caracteres y por lo tanto una colección. Todas las colecciones tienen
el método exists, el que recibe una función (las funciones se pueden
pasar como argumentos a otras funciones en Scala) y retorna true si
algún elemento de la colección cumple la condición (en este caso que el
carácter no sea un dígito). Algo similar hacemos en el
*else* al aplicar
un map sobre la variable
***accion***.

Podríamos haber escrito el método validar de esta otra forma:

{{<gist lnds f6e4bc18a75530d5d358>}}

Y ahí queda más claro que estamos ante el uso de funciones anónimas
sobre listas, algo habitual en un lenguaje M, pero aplicadas a un
objeto, algo típico de los lenguajes tipo D.

El if en F\# es muy similar al de Scala.

{{<gist lnds fb0eee1489ffa46a6de4>}}

La función validar en F\#

##  Lenguajes Tipo M (Haskell, Erlang, Clojure)

En Haskell existe un if, que también es una expresión. Pero existen
maneras de hacer selección a nivel de la declaración de las funciones
mediante pattern matching.

Veamos esto en la función validar.

{{<gist lnds af0a3425a0fa912f513b>}}


Acá se define la función validar, que recibe n, que es número entero que
indica el largo que debe tener la secuencia de dígitos. El argumento xs
es la secuencia de caracteres ingresados por el jugador.

En este caso estamos ante la presencia de *guards*, que son expresiones
que van entre \| y =, por ejemplo este fragmento:

```
    | length num /= n = []
```

Define una condición que se debe cumplir para asignar el valor \[\]
(lista vacía) como resultado de la función validar.

(En Haskell el operador "distinto a" se escribe /=, en C corresponde a
!=).

El siguiente fragmento es una especie de "else":

```
    | otherwise = num
```

Que indica que si otras expresiones en los guards no se han cumplido
entonces use el siguiente valor como resultado de la función.

Pero también podemos usar if como expresión:

    where num = if not (all isDigit xs) then [] else remover_dups xs

La sentencia where declara num como una variable, la que tendrá el valor
\[\] (lista vacía) si la secuencia de dígitos contiene al menos un
carácter que no sea un dígito, o de lo contrario tendrá todos los
dígitos de la secuencia (removiendo los duplicados).

El caso de Clojure es más sencillo, existe una función llamada if cuya
forma es:

```
    (if condicion valor_true valor_false)
```

Por ejemplo, si queremos determinar el valor máximo entre dos números

```
    (if (> a b) a b)
```

Clojure es un lenguaje basado en LISP así que usa la notación prefija
agrupando entre paréntesis.

Esto asusta a muchos programadores (incluso el mismo Dijskstra odiaba
esta notación[^1]), veamos la función validar en Clojure:

{{<gist lnds c7ba64b77b24be873742>}}

## Validar en Clojure

Una manera de evitar caer en el infierno de los paréntesis y es lo que
trato de hacer cuando he tenido que usar algún dialecto de Lisp, es
dividir una función en pequeñas funciones. Esto es lo que se llama una
estructuración bottom up, escribir pequeñas piezas que resuelven una
parte del problema y luego integrarlas en la solución final.

Si no hubiera hecho esto la función validar sería así:

{{<gist lnds f47e8a136053f7b542cd>}}

Validar en Clojure sin usar funciones auxiliares

Como pueden apreciar, ya empieza a hacerse más difícil empezar a
seguirle la pista al código de esta función.

Imaginen una función con más de 50 líneas y una enorme cantidad de
paréntesis. 

Así que es mejor seguir el viejo adagio de "dividir para reinar" con
Clojure.

Erlang, es el más extraño de los lenguajes en este aspecto.

En Erlang existe un if, pero es más parecido a un switch o case de otros
lenguajes.

{{<gist lnds b7e46cf41ea6ee2eb7be>}}
Fragmento de la función validar en Erlang

En Erlang no existe un "else", una forma de expresar un else sería la
siguiente:

```erlang
    if A > B -> A;
    true -> B end.
```

Esa frase "true -\>" es el equivalente a un else en Erlang.

Lo que puede llegar a ser bastante confuso, por ejemplo:

```erlang
    es_mayor_que (X, Y) ->
        if X>Y ->     true;
        true -> false
    end.
```

Es por esto que los programadores Erlang acostumbrar colocar la
condición negada como la condición final, que es lo que hacemos en el
fragmento de más arriba. 

Otra forma de expresar el salto condicional es usando *guards*, como en
Haskel, por ejemplo con esta función que determina si un carácter es un
dígito:

{{<gist lnds 150e5656d9adb12d38e9>}}

determinando que un caracter es un dígito.

Loops
-----

Otra estructura de control son los ciclos.

Go, F\#, Rust, Kotlin, Scala y Swift tienen while y for como en C

En Haskell y Erlang la manera de ejecutar loops es mediante
recursividad.

Este desafío requiere de  un ciclo principal, que dura hasta que el
usuario escribe "salir" o gana el juego (es decir, obtiene 5 famas).

Pero en Go, Rust, Swift y Kotlin usamos una característica interesante
de la sentencia for. 

Veamos a que me refiero con este fragmento en Go:

{{<gist lnds b66007ebe19cc53a7e43>}}
For en Go que usa range

En este for recorremos el  string *accion* dejando en cada ciclo en la
variable c el carácter y en la variable i la posición que ocupa c dentro
de la cadena. La variable i tendrá los valores 0,1,2,\... en la medida
que se recorra el string.

En C tendríamos que haber hecho algo así:

```
    for (i = 0; i < strlen(accion); i++) {
        char c = accion[i];
    ....
    }
```

En Rust y en Swift se logra lo mismo usando Enumerates

{{<gist lnds dead88b3ecdfae8306a1>}}
for con enumerate en Swift

{{<gist lnds cdf388705574fefd57a7>}}

for con enumerate en Swift

Fíjense que en Swift y en Rust tenemos un ***for in***, en Go es una
variable que toma valores de un range().

En Kotlin es similar, aunque  podemos obtener las variables de dos
formas:

{{<gist lnds a001e68d186fb0082c2a>}}

En el primer  for usamos it como un objeto con dos atributos: .index y
.value, en el segundo y tercer for los usamos como tuplas, como en los
otros lenguajes

En Scala podemos simular lo mismo con el método zipWithIndex disponible
en las colecciones, pero además podemos crear dos *for* anidados en la
misma sentencia:

{{<gist lnds e11fcdd50a2209567e11>}}
Este for en Scala genera una colección deTs (para los toques) y Fs (para
las famas)

En Clojure existe una construcción que nos permite hacer loops:

    (loop [x 10]
      (when (> x 1)
        (println x)
        (recur (dec x))))

En este caso imprimimos los número desde 10 a 1.

En realidad en Clojure se usa la recursividad para implementar loops,
pero si no se tiene cuidado podemos provocar un "stack overflow"
(recordemos que Clojure usa la JVM). Para ayudar al compilador, Clojure
implementa la función (recur) que permite implementar "tail
recursion", algo que veremos en detalle más adelante. Del mismo modo,
la función (loop) ayuda al compilador de Clojure para implementar ciclos
de forma eficiente.

Lo interesante de la solución en Clojure es que no usa recursividad  en
ninguna función y utiliza la función (loop) sólo para el ciclo principal
del programa.

La solución en Erlang, está implementada como un *"descenso
recursivo"*. No es que me haya propuesto escribir el código de esta
manera, pero fue la forma en que se me fue ocurriendo como solucionar
este problema.

En esencia la solución Erlang va descendiendo por las distintas
funciones a partir de la función jugar:

    - main
    -- jugar
    --- continuar
    ---- "error" -> jugar
    ---- revisar_jugada
    ------ "Ganaste" -> <fin del programa>
    ------ -> jugar  

Creo que esta manera de resolver el problema se da por la influencia de
Prolog en el lenguaje, esto es algo que veremos si se ratifica en los
desafíos que vienen.\

La interrogante que debo resolver es qué pasa con esta solución, el
instinto me lleva a pensar que debería provocarse  un "stack
overflow", pero es algo que debo probar. Si algún lector conoce más de
Erlang agradecería sus comentarios sobre esa solución, es mi primer
programa en este lenguaje y no tengo claro si hay algún tipo de
optimización tipo "tail recursion" que aplique a mi solución (sospecho
que no, pero es algo que debe aclararse).

No copio el código en Erlang acá por su extensión, pueden verlo en
detalle
[acá](//github.com/lnds/9d9l/blob/master/desafio1/erlang/toque_y_fama.erl).

En el caso de Haskell la única alternativa es la recursividad (hay
formas de simular loops usando "Monads", pero no quiero asustarlos con
eso todavía).

A diferencia de la solución en Clojure, en que calculo los toques y las
famas en 2 funciones diferentes, acá me propuse calcular ambas cifras en
sólo 1 función. La solución no es la más eficiente pero muestra cómo
pueden hacer "loops" en Haskell:

{{<gist lnds f24ce824041c3127ef37>}}

Una función que calcula los toques y famas comparando dos secuencias de
números

La función toques\_y\_famas recibe 3 parámetros: la secuencia de números
ingresada por el usuario y los parámetros 2 y 3 corresponden
inicialmente a la secuencia generada por el programa (la cifra que se
debe adivinar).

La linea 1 del código de arriba muestra el caso particular en que la
entrada del jugador es vacía (primer parámetro = \[\]). En este caso hay
cero toques y cero famas.

Luego hacemos nuevamente un descenso recursivo. La notación (n:ns)
descompone una lista en su cabeza (n) y su cola (ns). Por ejemplo, si la
lista es \[1,2,3,4,5\] el patrón (n:ns) hace calzar n con 1 y ns con
\[2,3,4,5\].

El algoritmo expresado en ese código en Haskell es el siguiente:

1\. Si la lista ingresada por el jugador está vacía, entonces hay 0
toques y 0 famas.

2\. En caso contrario, tome la lista ingresada por el jugador y
descompóngala en cabeza y cola (n y ns). Tome la secuencia generada por
el programa y haga lo mismo (obteniendo x y xs).

3\. Si la cabeza de ambas listas son iguales entonces se tiene 1 fama y
por lo tanto se incrementa la cantidad de famas (f) en 1 devolviendo el
par (t, 1+f).

4\. De lo contrario, si la cabeza de la lista ingresada por el jugador
(n) está en la secuencia generada por el programa (ys) entonces eso se
debe contar como un toque (t) y se devuelve (t+1, f).

5\. Si no se cumple ni 3 ni 4  se devuelve el valor t y f acumulado.

6\. Acá viene la magia: t y f se han calculado previamente a partir de
ns y xs. 

El paso 6 es lo que está expresado en la sentencia **where** al final de
la definición de la función.

Esta solución en Haskell fue la que inspiró las soluciones en Erlang y
F\#:

{{<gist lnds 297bfd90aef441a0641c>}}


Contar Toques y Famas en Erlang

{{<gist lnds 84b556795321b21480c4>}}


Contar Toques y Famas en F\#

Este código sólo funciona correctamente si ambas secuencias son del
mismo largo (algo de lo que nos preocupamos en otras etapas del
programa, pero que se podría manejar en el código).

Esta solución no es la más eficiente, por supuesto.

¿Se les ocurre una solución más eficiente para comparar ambas secuencias
en los lenguajes tipo M? (Pista: vean la solución en Scala).

## Declaración y llamada de subrutinas

Uso el término [subrutina](//es.wikipedia.org/wiki/Subrutina) para
englobar los conceptos de funciones, métodos, procedimientos, etc.

En Clojure la forma de declarar una función
es:

    (def funcion (fn [args] cuerpo))

Por ejemplo:

    (def mutiplica (fn [a b] (* a b)))

Hay una macro que permite simplificar la declaración

    (defn multiplica [a b] (* a b))

Clojure es un lenguaje
[homoicónico](//es.wikipedia.org/wiki/Homoiconicidad), lo que significa
que la forma de representar el código es igual a la forma de representar
la estructura de datos básica.

En Clojure y en la familia de lenguajes basados en LISP, la estructura
de datos elemental es la lista, así que en Clojure en rigor no existe
una sintaxis como tal. Lo que hay son listas que son procesadas por el
interprete de Clojure.

De este modo para llamar a la función (multiplica) lo que hacemos es
crear una lista, donde la cabeza es el nombre de la función:

    (multiplicar 2 500) ; retorna 1000

Clojure maneja otra estructura que es el vector. Un vector se expresa
colocando los elementos entre corchete, por ejemplo: \[1 2 3\]. En
Clojure la coma es equivalente a un espacio, así que podemos escribir
\[1, 2, 3\]. 

Entonces, siguiendo el principio de homoiconicidad, los parámetros de
una función se expresan como un vector y la definición de la función es
una lista. Una lista puede tener otras listas o vectores como elementos.

Veamos todo esto reflejado en la función (gano?) que evalúa si el
jugador ganó la partida:

{{<gist lnds 5174b8b444cdf1a40683>}}

Una función en Clojure

El nombre de una función debe empezar por un carácter no numérico, y
puede estar compuesto por letras, números y los símbolos \*, +, !, -,
\_, \',y ?.

En este caso llamamos a la función (gano?) usando el signo de
interrogación. Los parámetros se escriben como un vector \[num sec
tam\], los vectores se usan para crear variables auxiliares usando la
forma **let**. Todo esto muestra la homoiconicidad, en que el código de
expresa usando las estructuras de datos básicas (listas y vectores).

En Haskell el nombre de la función va seguido de sus parámetros, los que
se separan simplemente con el espacio en blanco:


```haskell
    multiplicar a b = a * b
```

[Para llamar a la función colocamos su nombre seguido de los parámetros,
otra vez separados sólo por espacios  (sin usar paréntesis ni
comas):]{style="letter-spacing: 0.01rem; line-height: 1.5;"}\

```haskell
    multiplicar 2 500
```

Es mejor pensar en Haskell que lo que tenemos es una ecuación o
identidad, de este modo podemos entender este
fragmento

```haskell
    mil = multiplicar 2 500
```

Hay más sobre las funciones en Haskell y algo hemos visto, como los
*guards* y la cláusula **where**:

{{<gist lnds af0a3425a0fa912f513b>}}

Los detalles los iremos comentando más adelante.

El estilo de declaración en F\# es similar, pero usamos la palabra
reservada **let** para iniciar una declaración:

```
    let multiplicar = a * b
```

Y para ejecutar la función la llamamos igual que en Haskell.

En Erlang las cosas son bastante diferentes. En este lenguaje una
función es secuencia de cláusulas separadas por punto y coma (\';\'),
terminada con un punto (\'.\'):

```
    fact(N) when N>0 ->  % encabezado de la primera cláusula
        N * fact(N-1);   % cuerpo de la primera cláusula
    fact(0) ->           % encabezado de la segunda cláusula
        1.     
```

El cuerpo de una cláusula puede contener una lista de cláusulas
separadas por comas (\',\'), por ejemplo, nuestra función main se
compone de sólo una cláusula, con varias sub cláusulas en el cuerpo de
la función:

    main() -> Tam = 5, 
              mostrar_reglas(Tam), 
       Sec = lists:sublist(generar_secuencia(), Tam),  
        jugar(Tam,Sec,1).

En Erlang las variables empiezan en Mayúsculas, los nombres de las
funciones en minúsculas (técnicamente son átomos, pero eso lo veremos
después).

Tanto Go, Swift, Kotlin, Rust y Scala declaran sus funciones de una
forma muy similar:

Go:

    func validar(tam int, accion string) []int {
    ...
    }

Rust:

    fn validar_entrada(tam:usize, accion:&String) -> Accion {
    ...
    }

Swift:

    func validar(tam:Int, acc:String!) -> [Int]? {
    ...
    }

Kotlin:

    fun validar(tam:Int, accion:String?) : IntArray? {
    ..
    }

Scala:

    def validar(tam:Int, accion:String) : Option[Array[Int]] = ...

En esto se nota el ancestro común (C).
Sin embargo, todos estos lenguajes colocan el tipo de los parámetros
después del identificador del mismo, como en Pascal. Sólo Go omite los
dos puntos (\':\').

En otro artíclo hablaremos sobre los tipos de las funciones y las
variables.

## Conclusiones

El siguiente cuadro resume la cantidad de líneas de código para cada
implementación:


| Haskell | 45 |
|---------|----|
| Clojure | 49 |
| F#      | 53 |
| Scala   | 55 |
| Erlang  | 61 |
| Swift   | 66 |
| Kotlin  | 79 |
| Rust    | 82 |
| Go      | 86 |

Las he ordenado de menor a mayor. Estos números pueden variar más
adelante si es que reviso el código. Los datos actualizados siempre
estarán en el archivo README.md del repositorio.

El orden en que resolví estos problemas es el siguiente:

orden en que fui solucionando el desafío
1. Rust
2. Go
3. Clojure
4. Haskell
5. F#
6. Scala
7. Swift
8. Kotlin
9. Erlang

Aunque no medí el tiempo de desarrollo (algo que espero realizar en los
futuros desafíos), me atrevo a clasificar del siguiente modo las
soluciones según el tiempo invertido en desarrollar cada una (codificar,
probar y depurar):

orden según el tiempo invertido en solucionar el problema (de menos a más)
1. Scala
2. Kotlin
3. Swift
4. Go
5. Clojure
6. F#
7. Rust
8. Haskell
9. Erlang

El mayor tiempo invertido en Erlang se debe a lo diferente que es este
lenguaje con respecto a los demás.

La solución en Go permitió guiar el desarrollo de las soluciones en casi
todos los demás lenguajes tipo D. Aunque escribí el código de Rust
primero, el uso de *ranges* de Go me llevó a re escribir la solución
Rust. La escritura del programa en Haskell tuvo varias iteraciones.

Si tuviera que implementar esto para un juego por SMS usaría seguramente
Erlang o Go, porque son lenguajes apropiados para ese tipo de
aplicaciones. Pero si la restricción es que sólo corra en la linea de
comandos, quizás lo menos complicado sería hacerlo en Go.

Sin embargo, la solución que encuentro más elegante es la que escribí en
Clojure, no tiene loops (salvo el del ciclo principal del programa), no
hay recursividad y todo se resuelve con operaciones con listas. Hay otra
forma más eficiente de solucionarlo con Clojure y creo que la
implementaré en otra ocasión (al igual que en Haskell).

Por ahora hasta acá queda el desafío 1. Espero sus comentarios y retro
alimentación.

Recuerden que el código de todas las implementaciones de este desafío
están
acá: [https://github.com/lnds/9d9l/tree/master/desafio1](//github.com/lnds/9d9l/tree/master/desafio1)

**Notas**

[^*]: Por Dijkstra y McCarthy. Al parecer hubo cierta polémica entre
ellos, aunque McCarthy fue más reservado en sus comentarios que
Dijkstra.

[^1]: En su discurso para recibir el Premio Turing, Dijkstra
escribió: LISP ha sido descrito humorísticamente como "la forma más
inteligente de desaprovechar un computador". Pienso que la descripción
es un gran cumplido porque transmite un sabor pleno de liberación: ha
asistido a un número de nuestros más dotados compañeros humanos a pensar
en ideas previamente imposibles."
