---
title: "When The Heart Rules the Mind"
authors: [admin]
subtitle: "9 desafíos en 9 lenguajes (4 de 9) parte 5"
date: 2017-10-01T08:25:11-03:00
slug: "when-the-heart-rules-the-mind"
aliases: [/blog/lnds/2017/10/1/when-the-heart-rules-the-mind]
draft: false
tags: ['rock', 'lenguajes de programación', 'desafíos', 'go']
image:
  placement: 3
---

> Mother protect me,\
> protect me from myself

Si juntas a Steve Howe, ex guirarrista de Yes y Asia con  Steve Hackett,
ex guitarrista de Génesis, nada puede salir mal, ¿verdad? Es decir, son
dos de los mejores guitarristas del rock progresivo inglés, sumemos a
John Mover, ex baterista de Marillion, a Phil Spalding (quien entre
otros trabajó con Mike Oldfield) y al frente al canta Max Bacon (ex
Nightwing and Bronz), con todo ese talento junto el producto debería ser
excepcional. Al menos en teoría.

{{<figure caption="Steve Hackett y Steve Howe" src="https://d2dspjyoh5c79p.cloudfront.net/1539bfc9-a6ef-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Ese super grupo existió y se llamó GTR, y generó mucho ruido en 1985. El
nombre es simplemente Guitar sin las vocales, el nombre viene de la
restricción que impuso Howe, quien, molesto de la predominancia de los
teclados en Asia, impuso la restricción de que el grupo sólo ocuparía
guitarras. Claro que eran guitarras especiales con unos pickups para
sintetizadores Roland, que usan la vibración de las cuerdas para crear
señales MIDI que activan y operan sintetizadores. 

Pero desde el principio tuvieron problemas, Howe insistía en que se
invirtiera tiempo de alta calidad en el estudio, mientras que Hackett
prefería un presupuesto más bajo en estudio e invertir más en
instrumentos y tecnología. La idea de Howe fue la que prevaleció y
resultó a la larga ser más cara, dejando al grupo endeudado. Esto fue
aprovechado por el manager Brian Lane (ex manager de Yes), para amarrar
un trato final que le aseguró la recuperación del dinero invertido.

El resultado final fue tan decepcionante, que el crítico J.D. Considine
publicó en la revista Musician, como única crítica al álbum debut, lo
siguiente: "GTR - SHT".

![](https://d2dspjyoh5c79p.cloudfront.net/bdd18d08-a6ce-11e7-a030-2b5831f8ecb5-aa9f18b7)

GTR salió de tour en 1986 por Norte América y Europa. Fue en los ensayos
que se reveló que la idea de no usar teclados era impracticable, puesto
que los sintetizadores conectados a las guitarras no tenían la calidad
requerida para un concierto en vivo, así que a regañadientes el grupo
tuvo que aceptar la incorporación de un tecladista en el escenario.
Además tuvieron que agregar canciones de Yes y Genesis para completar
los setlists de los conciertos.

Go Power Trio
=============

> When the heart rules the mind\
> One look and love is blind\
> When you want the dream to last\
> Take a chance forget the past

[El lenguaje de programación Go](https://golang.org/) es también el
producto de un super grupo, uno financiado por Google. Go fue diseñado
originalmente por Robert Griesemer, quien había trabajado en un
compilador de Java para HotSpot y en la máquina virtual V8 para
JavaScript, junto con Rob Pike, ex miembro de Bell Labs, uno de los
creadores del sistema operativo Plan 9 y del lenguaje Limbo y por último
el gran Ken Thompson, uno de los creadores del sistema operativo Unix y
el lenguaje C.

Así como Howe estaba harto de los teclados, Griesemmer, Pike y Thompson
estaban más que insatisfechos con la complejidad de C++. 

Por fortuna el ensamble de Google tuvo mejor éxito que el de GTR, en
parte porque Pike y Thompson ya habían trabajado juntos, y porque
pudieron construir en muy poco tiempo una comunidad alrededor del
lenguaje (gracias al gentil auspicio de Google, por supuesto).

{{<figure caption="Griesemer, Pike y Thompson" src="https://d2dspjyoh5c79p.cloudfront.net/4f0fa74b-a6fa-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

El diseño de Go favorece la simplicidad, una sintaxis simple, que
permite un compilador muy rápido. Go es un lenguaje con tipos estáticos,
que permite el desarrollo de sistemas grandes y escalables.  Es un
lenguaje muy productivo y de fácil lectura para alguien acostumbrado a
lenguajes derivados de C. Su diseño está pensado para dar buen soporte a
aplicaciones de redes y multi proceso. 

## Objetos en Go

> Watching the actor,\
> that takes the stage by storm

Las características que sobresalen de Go son:

-   Procesos livianos a través de las llamadas go-rutinas 
-   Canales para implementar concurrencia usando parte del modelo
    [CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes)
-   Interfaces, para poder implementar polimorfismo
-   En Go no hay herencia, aunque se puede implementar composición.

Una de las particularidades en  Go, y que puede ser confusa al
principio, en mi opinión, es su modelo de programación de objetos. 

Les voy a mostrar un ejemplo:

```golang
    package main
    import "fmt"

    type Car struct {
      odometer int
    }

    func NewCar() *Car {
      p := new(Car)
      p.odometer = 0
      return p
    }

    func (c Car) forward() {
      c.odometer += 10
    }

    func (c Car) showOdometer() {
       fmt.Printf("odometer %d\n", c.odometer)
    }

    func main() {
       car := NewCar()
       car.forward()
       car.forward()
       car.showOdometer()
    }
```

Uno esperaría que este programa imprimiera: "odoometer 20", pero no es
así, lo que hace es imprimir 0. Esta fue la causa de un bug cuando
implementé por primera vez mi solución al desafío 4 en Go.

En realidad, en Go los métodos son simplemente funciones, que reciben
sus argumentos por valor. Así que cuando hacemos:

```go
        c.odometer += 10
```

Estamos operando sobre la copia que recibió la función, los cambios se
perderán al retornar de la función. Así que la solución es que para
construir métodos que mutan un objeto se deben usar punteros:

Así que para resolver este problema debemos hacer:

```go
    package main
    import "fmt"

    type Car struct {
      odometer int
    }

    func NewCar() *Car {
      p := new(Car)
      p.odometer = 0
      return p
    }

    func (c *Car) forward() {
        c.odometer += 10
    }

    func (c Car) showOdometer() {
       fmt.Printf("odometer %d\n", c.odometer)
    }

    func main() {
      car := NewCar()
      car.forward()
      car.forward()
      car.showOdometer()
    }
```

Este es un modelo de paso de argumentos muy parecido a lo que ocurre en
lenguajes antiguos, como C, Pascal, o incluso Algol, bastante anticuado,
en mi opinión, que supongo viene de Pike y Thompson, como muchas otras
cosas idiosincráticas del lenguaje, por ejemplo, el hecho de no
implementar estructuras de datos genéricas (o templates).

## Huffman en Go 

Esta es la quinta parte del desafío 4, en nuestra serie de
["esos raros lenguajes nuevos"](/blog/lnds/2016/01/09/esos-raros-lenguajes-nuevos).

Resolver este problema en Go fue relativamente sencillo comparado con la
solución en Rust. Aunque debo decir que al ejecutar por primera vez el
programa en Go tuve un error de acceso a un puntero null, algo que es
imposible de lograr en Rust, y ahí fue donde gasté más tiempo, hasta que
entendí cómo maneja sus argumentos los métodos en
Go.

El bug se encontraba en el método BuildHuffTree:

```go
    func BuildHuffTree(reader *BitInputStream) *HuffTree {
     p := new(HuffTree)
       freqs := calcFrecuencies(reader)
        heap := NewHeap(MAX_SYMBOLS)
        for s, f := range(freqs) {
           if f > 0 {
                heap.Insert(NewLeaf(uint(f), byte(s)))
          }
       }
       for heap.Size() > 1 {
         l := heap.Extract()
         r := heap.Extract()
         heap.Insert(NewNode(l.Freq()+r.Freq(), l, r))
       }
       tree := heap.Extract()
      codes := buildCodes(tree)
       p.tree = tree
       p.codes = codes
     return p
    }
```

Originalmente Heap.Insert() no recibía un puntero a la struct Heap, así
que yo esperaba que Insert() fuera mutando la estructura, lo que no
sucedió, pues estaba acostumbrado a los modelos de muchos lenguajes
modernos, que manejan los objetos como referencias. 

La otra característica que usé en esta solución fueron las Interfaces de
Go. Esto permite crear una solución orientada al objeto, no tan
funcional como la de Rust. A diferencia de Rust, en Go sí existen
valores nulos (por eso que mi programa se cayó la primera vez).

En nuestro caso la interfaz a implementar fue Tree:

```go
    type Tree interface {
      Freq() uint
      WriteTo(writer *BitOutputStream)
      sDumpCodes(codes []string, prefix string)
      ReadChar(reader *BitInputStream) byte
    }
```

En Go no hay herencia, pero sí polimorfismo, a través de interfaces.
Cualquier estructura que implemente los métodos definidos en la
interface se dice que tiene el mismo tipo. Esto se llama técnicamente,
polimorfismo de subtipos implícitos, o coloquialmente, 
["duck typing"](https://en.wikipedia.org/wiki/Duck_typing)("si camina como
pato, grazna como pato, entonces ¡es un pato!"). Esta es una
característica típica de los lenguajes dinámicos, pero es muy agradable
encontrarla en un lenguaje estático como Go.

Así que para resolver nuestro problema declaramos el modelo del árbol de
Huffman usando dos tipos: Leaf y Node del siguiente modo:

```go
    type Leaf struct {
      freq uint
       symbol byte
    }
    type Node struct {
        freq uint
       left Tree
       right Tree
    }
```

Y por cada una implementamos los métodos de la interface:

```go
    func (l Leaf) Freq() uint {
       return l.freq
    }
    func (n Node) Freq() uint {
     return n.freq
    }
    func (l Leaf) WriteTo(writer *BitOutputStream) {
        writer.WriteBit(1)
      writer.WriteByte(uint16(l.symbol))
    }
    func (n Node) WriteTo(writer *BitOutputStream) {
      writer.WriteBit(0)
      n.left.WriteTo(writer)
      n.right.WriteTo(writer)
    }
    func (l Leaf) DumpCodes(codes []string, prefix string) {
     codes[l.symbol] = prefix
    }
    func (n Node) DumpCodes(codes []string, prefix string) {
        n.left.DumpCodes(codes, prefix+"0")
     n.right.DumpCodes(codes, prefix+"1")
    }
    func (l Leaf) ReadChar(reader *BitInputStream) byte {
       return l.symbol
    }
    func (n Node) ReadChar(reader *BitInputStream) byte {
     if reader.ReadBool() {
          return n.right.ReadChar(reader)
      } else {
            return n.left.ReadChar(reader)
       }
    }
```

Lo interesante es que no tuvimos que decir que Leaf o Node implementan
Tree, para Go esto sólo importa cuando tratamos de hacer pasar alguna de
estas variables como un Tree, como por ejemplo, en el caso de la función
readTree().


```go
    func readTree(reader *BitInputStream) Tree {
        flag := reader.ReadBool()
       if flag {
            return *NewLeaf(0, reader.ReadChar())
        } else {
         l := readTree(reader)
           r := readTree(reader)
           return *NewNode(0, l, r)
     }
    }
```

Esta función devuelve algún objeto que implemente Tree, tanto Leaf como
Node cumplen esta condición, así que el código es válido.

## Go o no Go

> Seasons will change\
> You must move on\
> Follow your dream

Go es un lenguaje muy poderoso, y con características interesantes. Es
fácil de aprender, tiene una complejidad moderada, es muy fácil ser
productivo en Go, pero tiene ciertas idiosincracias que encuentro
molestas.

En particular no me gusta el manejo de excepciones, que obliga a llenar
el código de ifs, para verificar el resultado de cada operación
peligrosa. En este sentido, Rust es más elegante al administrar los
errores en monads, como Option o Result, las que se pueden componer. 
En este sentido Go es bastante primitivo. Aunque no tanto como C.

El polimorfismo en Go es elegante, pero sospecho que en una base de
código de muchas lineas puede llegar a ser engorroso de manejar. Es una
lástima que no soporte programación de estructuras de datos genéricas.

Go ha ganado mucho momentum, se ha vuelto un lenguaje popular entre
programadores aburridos de Java o de C++. No sabemos si los reemplazará,
pero sospecho que seguirá ganando momentum, y será más popular que Rust,
en ciertos ámbitos, porque definitivamente es mucho más fácil de
aprender. 

Si estás aburrido de Java o de C++, definitivamente este es un lenguaje
que te recomiendo aprender. 

Debo confesar que me sentía exceptico con respecto a Go, pero después de
este ejercicio me parece que es un lenguaje agradable. Me gustaría que
adoptara más aspectos funcionales, y que resuelva algunos issues con la
programación concurrente (de los que hablaremos en otro desafío). 

Pero a veces no hay que dejar que el corazón gobierne a la mente, el
hecho de que mis primeras experiencias con Go no hayan sido agradables,
y que no tenga características que me gustan, no quita el hecho de que
Go es un lenguaje bastante bueno. Así que vamos a darle más
oportunidades a Go, creo que me sorprenderá gratamente.

El código fuente está, como siempre, en mi repositorio
GitHub: <https://github.com/lnds/9d9l/tree/master/desafio4/go>

{{<youtube ARERFbiqCfk>}}


## **Fuentes**:

Página en wikipeda sobre
GTR: <https://en.wikipedia.org/wiki/GTR\_(band)>

Página oficial de Go: <https://golang.org/>

[El libro The Go Programming Language](http://amzn.to/2xTvy3b), de Alan
Donovan y Brian Kernighan.
