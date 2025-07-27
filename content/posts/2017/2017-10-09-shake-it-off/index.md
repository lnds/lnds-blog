---
title: "Shake it off"
authors: [admin]
subtitle: "9 desafíos en 9 lenguajes (4 de 9) parte 6"
date: 2017-10-09T08:25:11-03:00
slug: "shake-it-off"
aliases: [/blog/lnds/2017/10/9/shake-it-off]
draft: false
tags: ['rock', 'lenguajes de programación', 'desafíos', 'swift']
image:
  placement: 3
---

A propósito de su canción "Shake it off", Taylor Swift dijo:

> "He aprendido la dura lección de que la gente puede decir lo que
> quiera de nosotros en cualquier momento, y no podemos controlar eso.
> La única cosa que podemos controlar es nuestra reacción a eso."

La joven cantante elaboró, en una entrevista posterior, que antes había
abordado el tema, pero desde una perspectiva más victimizante, en una
canción titulada
["Mean"](https://www.youtube.com/watch?v=jYa1eI1hpDE), pero decidió
tomarse las cosas con humor, lo que en mi opinión muestra un crecimiento
notable como persona, siendo tan joven. Por supuesto, la exposición de
Swift es muy distinta a un joven normal, un milenial, como hemos
denominado a todos los miembros de su generación, estereotipándolos de
paso, para mal en muchas ocasiones.\

{{<figure caption="Shake it off" src="https://d2dspjyoh5c79p.cloudfront.net/a7539bc0-ad07-11e7-a030-2b5831f8ecb5-aa9f18b7">}}


## Swift

La elección de Taylor Swift para hablar del lenguaje de programación
desarrollado por Apple es demasiado obvia, poco original, pero ¿saben
qué? no me importa lo que piensen, les saco la lengua como lo haría
Taylor Swift, me sacudo sus comentarios trolls y sigo adelante.


Swift es un lenguaje joven, creado en 2014, diseñado originalmente por
[Chris Lattner](http://www.nondot.org/sabre/), el genio detrás de
[LLVM](https://llvm.org/). En estos momentos el lenguaje está siendo
desarrollado por un equipo dentro de Apple y a pesar de su corta vida,
ya va en la versión 4.


{{<figure caption="Chriss Lattner" src="https://d2dspjyoh5c79p.cloudfront.net/d30f4981-ad07-11e7-a030-2b5831f8ecb5-aa9f18b7">}}


No voy a decir que Swift es un lenguaje que me guste, al contrario, he
encontrado varios problemas en su compilador y encuentro que en muchos
aspectos es un pastiche de muchos otros lenguajes que hay en la escena
actual.

Es un lenguaje pop, como Taylor, orientado al programador de Apps. Su
biblioteca básica está diseñada para operar en un entorno de Apps. Lo
que se nota por ejemplo, en el acceso a datos en almacenamiento
secundario. Pero ya hablaremos de
eso.

Así que Swift es, siguiendo esta analogía con estrellas del rock, un
lenguaje que se aleja la linea de otros lenguajes que hemos analizado en
estos desafíos, sobre ["esos raros lenguajes nuevos"](https://www.lnds.net/blog/lnds/2016/1/9/esos-raros-lenguajes-nuevos). 

En términos de las analogías que hemos realizado hasta ahora, que es más
cercano al pop, así que sumado a su juventud y orientación a facilitar
la programación de Apps, así que me parece que escoger a Taylor Swift es
adecuado.

No es esto una actitud de desprecio, Taylor Swift es una gran artista, y
me gustan varias de sus canciones, pero hay que reconocer cuál es el
ámbito en que se mueve dentro de la música (entre el Pop Country y el
Pop Rock). Del mismo modo Swift, siento que está diseñado y optimizado
para cierto tipo de aplicaciones, aunque tiene lo necesario para
desarrollar todo tipo de sistemas, no es su principal foco.

## Del Country al Pop

Taylor Swift partió con el estilo country pop, inspirada por Shania
Twain y posteriormente por la vida de Faith Hill, que decidió mudarse a
Nashville, Tennessee, para desarrollar su carrera artística. Tuvo mucho
éxito, recibiendo diversos premios y reconocimientos de la industria
Country. Incluso su canción "Mean" ganó el premio a mejor canción
country en los Grammys en 2012. Taylor ganó fama de ser una buena
narradora de experiencias personales en sus canciones.


{{<figure caption="Taylor tocando el banjo mostrando su faceta Country, interpretando Mean" src="https://d2dspjyoh5c79p.cloudfront.net/7b5bf66f-ad07-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Swift, el lenguaje, nació como una manera de modernizar el desarrollo
para iOS, el sistema operativo para móviles de Apple.

La introducción del libro ["Swift Programming Language"](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html), dice:


> "Swift es una manera fantástica de escribir software, ya sea para
> teléfonos, escritorios, servidores y todo lo que corra software. Es un
> lenguage de programación seguro, rápido e interactivo, que combina lo
> mejor del pensamiento moderno en lenguajes con la sabiduría de la
> amplia cultura ingenieril de Apple y las diversas contribuciones de su
> comunidad open source."

Me llama la atención el estilo, el uso de las palabras es tan propio de
Apple, donde todo es "fantástico" o "asombroso". Pero la realidad no
es tan así. Swift sigue siendo por debajo, en muchos aspectos, una capa
de abstracción sobre Objective C.

Cada iteración de Swift, cada nueva versión, sólo cierra algún flanco
dentro de esa abstracción.


La cita de arriba dice que con Swift puedo escribir software para
cualquier tipo de ambiente, pues bien, eso es cierto, pero en realidad
no siempre termino escribiéndolo en Swift, sino que en C. Porque debajo
de Swift aún está C. 

Por ejemplo, en [la solución del desafío 2](/blog/lnds/2017/01/02/vectores), escribí este
código:


```swift
      let fentrada = fopen(entrada, "rt")
      if fentrada == nil {
         print("no pudo abrir archivo entrada: \(entrada)")
          exit(-1)
        }
       let fsalida = fopen(salida, "wt")
        if fsalida == nil {
           print("no pudo abrir archivo salida: \(salida)")
            exit(-1)
        }
       let BUFFER_SIZE : Int32 = 4096
       var buf = Array<Int8>(repeating: 0, count: Int(BUFFER_SIZE))
       var nl = 0 // numero de linea
        while fgets(&buf, BUFFER_SIZE, fentrada) != nil {
            let bufOut = procesarLinea(buf, nl)
         fputs(bufOut, fsalida)
          nl += 1
     }
       fclose(fentrada)
        fclose(fsalida)
```

Salvo por unos let, var y la forma de escribir los if y while, esto no
es muy distinto de hacerlo en C. Esto se puede hacer de otra manera en
Swift, pero a riesgo de perder en performance, o complicaciones cuando
la memoria sea limitada.

Déjenme darle otro ejemplo, cuando implementé el desafío 4, en el caso
de la lectura, necesitaba leer el archivo completamente y depositarlo en
un arreglo de bytes. Esto se hace así en Swift:

```swift
  if let data = NSData(contentsOfFile: inputFile) {
      bytes = [UInt8](repeating: 0, count: data.length)
               data.getBytes(&bytes, length: data.length)
  }
```  

NSData es una estructura que nos permite operar con contenidos en un
archivo. Ahora bien, para escribir archivos lo que hice es más o menos
lo siguiente:

```swift
      var out = Data()
      let nsdata = NSData(data: out)
      nsdata.write(toFile: output, atomically: true)
```

Esto es un reflejo de que en Swift los archivos se ven como un elemento
donde persistir la información, no muy distinto de cualquier recurso que
necesite una App (como un ícono, o una imagen). 

Esta es una buena abstracción, pero en ciertos casos no es adecuada, y
en esos casos aprovechas el hecho de que Swift sigue siendo C y puedes
invocar las funciones de stdlib, o stdio propias de ANSI C directamente
desde tu código en Swift.

En resumen, lo que quiero decir, es que Swift es un lenguaje de
propósito general, pero las abstracciones que provee, tanto a nivel de
lenguaje, como de bibliotecas parecen estar pensadas principalmente para
soportar el desarrollo de aplicaciones móviles (Apps), por sobre otro
tipo de problemas. Eso puede traer problemas, si pretendes usar Swift en
programación de sistemas, o en el servidor, sobretodo en seguridad.

## **Huffman en Swift**

La implementación del problema 4 en Swift es realmente aburrida. La
mayor parte del tiempo lo gasté en adaptar las clases BitInputStream y
BitOutputStream, debido a que tuve que aprender cómo abstraer el manejo
de streams de bytes usando Data y NSData. El resto fue simplemente
traducir las solución de Go a Swift, un proceso bastante simple.

Las clases en Swift no tienen muchas características novedosas. Veamos
como implementé los árboles:


```swift
      protocol Tree {
        func freq() -> UInt
        func writeTo(writer: BitOutputStream)
        func dumpCodes(codes: inout [String], prefix: String)
        func readChar(reader: BitInputStream) -> UInt8
      }
      class Leaf : Tree {
        var frecuency : UInt
        var symbol : UInt8
        init(frq:UInt, sym:UInt8) {
            frecuency = frq
            symbol = sym
        }

        func freq() -> UInt {
             return frecuency
        }
        func writeTo(writer: BitOutputStream) {
          writer.writeBit(bit: 1)
          writer.writeByte(byte: UInt16(symbol))
        }
        func dumpCodes(codes: inout [String], prefix: String) {
          codes[Int(symbol)] = prefix
        }
        func readChar(reader: BitInputStream) -> UInt8 {
          return symbol
        }
      }
      class Node : Tree {
        var left: Tree
        var right: Tree
        init( left: Tree, right: Tree) {
          self.left = left
          self.right = right
        }   
        func freq() -> UInt {
          return left.freq() + right.freq()
        }
        func writeTo(writer: BitOutputStream) {
          writer.writeBit(bit: 0)
          left.writeTo(writer: writer)
          right.writeTo(writer: writer)
        }
        func dumpCodes(codes: inout [String], prefix: String) {
          left.dumpCodes(codes: &codes, prefix: prefix+"0")
          right.dumpCodes(codes: &codes, prefix: prefix+"1")
        }
        func readChar(reader: BitInputStream) -> UInt8 {
          if reader.readBool() {
                return right.readChar(reader: reader)
            } else {
              return left.readChar(reader: reader)
          }
        }
      }
```

Los protocolos son los equivalente a interfaces en otros lenguajes. A
diferencia de Go, en Swift la declaración de tipos es estática, no se
infiere como en Go. Así que las clases Node y Leaf deben implementar el
protocolo Tree.

Aprender la sintaxis de clases y protocolos en Swift es algo que no
lleva mucho tiempo a un programador que venga de otros lenguajes como
Java o C\#. Es más difícil entender cómo los usa Go que Swift. Los
constructores se declaran con el método init.

Una particularidad de Swift, que es algo heredado de Objective C, que a
su vez viene de SmallTalk, es que los parámetros deben ser nombrados.

Esto me permitió crear dos constructores para la clase HuffTree que
reciben el mismo tipo de argumento, lo que es interesante:


```swift
    class HuffTree { 
        init(buildFrom: BitInputStream) {
            ...
        }
     
        init(readFrom: BitInputStream) {
            ....
        }
    }
```

Lo que diferencia a ambos métodos es el nombre del argumento, algo que
no se encuentra en muchos otros lenguajes, lo que puede dar cierto grado
de expresividad adicional.

## Extensiones

¿Se puede resolver este problema de otra manera en Swift?\
Yo supongo que sí. 

Swift tiene un tipo enumerado que permite implementar algo similar a los
tipos de datos algebraicos.

Así que se podríamos partir declarando algo como lo siguiente:

```swift
       indirect enum Tree {
          case Empty
           case Leaf(UInt, UInt8)
           case Node(UInt, Tree, Tree)
      }
```

La clausula indirect permite crear una estructura recursiva. 


En base a esto se puede construir una solución muy parecida a la que
[implementé en Rust](/sblog/lnds/2017/09/24/red-barchetta). Esto lo
pueden desarrollar por su cuenta, y si a alguien le interesa me puede
enviar su solución como un pull request. Quizás en algún momento me
anime y la implemente por mi cuenta, pero me agradaría recibir una
contribución de alguien que sepa más de Swift.

{{<youtube nfWlot6h_JM>}}


## Referencias:

Repositorio con la solución del desafío 4 en
Swift: <https://github.com/lnds/9d9l/tree/master/desafio4/swift>

LLVM: <https://llvm.org/>

Chris Lattner: <http://www.nondot.org/sabre>

Swift Programming Language: <https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html>

Taylor Swift: <https://taylorswift.com/>