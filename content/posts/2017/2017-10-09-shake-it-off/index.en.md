---
title: "Shake it off"
authors: [admin]
subtitle: "9 challenges in 9 languages (4 of 9) part 6"
date: 2017-10-09T08:25:11-03:00
slug: "shake-it-off"
draft: false
tags: ['rock', 'programming languages', 'challenges', 'swift']
image:
  placement: 3
---

About her song "Shake it off", Taylor Swift said:

> "I've learned a pretty tough lesson that people can say whatever they
> want about us at any time, and we cannot control that.
> The only thing we can control is our reaction to that."

The young singer elaborated, in a later interview, that she had
tackled the subject before, but from more of a victim's perspective, in a
song titled
["Mean"](https://www.youtube.com/watch?v=jYa1eI1hpDE), and that she decided
to take things with humor, which in my opinion shows remarkable
growth as a person for someone so young. Of course, Swift's
exposure is very different from that of a normal young person, a millennial, as we have
labeled every member of her generation, stereotyping them
along the way, often for the worse.

{{<figure caption="Shake it off" src="https://d2dspjyoh5c79p.cloudfront.net/a7539bc0-ad07-11e7-a030-2b5831f8ecb5-aa9f18b7">}}


## Swift

Picking Taylor Swift to talk about the programming language
developed by Apple is far too obvious, hardly original, but you know
what? I don't care what you think. I stick my tongue out at you like
Taylor Swift would, shake off your troll comments and move on.


Swift is a young language, created in 2014, originally designed by
[Chris Lattner](http://www.nondot.org/sabre/), the genius behind
[LLVM](https://llvm.org/). Right now the language is being
developed by a team inside Apple and, despite its short life,
it is already at version 4.


{{<figure caption="Chriss Lattner" src="https://d2dspjyoh5c79p.cloudfront.net/d30f4981-ad07-11e7-a030-2b5831f8ecb5-aa9f18b7">}}


I'm not going to say Swift is a language I like. On the contrary, I have
found several problems in its compiler and I think that in many
respects it is a pastiche of many other languages on the current
scene.

It is a pop language, like Taylor, aimed at the app programmer. Its
basic library is designed to operate in an app environment. You
can see that, for example, in how it accesses data in secondary
storage. But we'll get to
that.

So Swift is, following this rock star analogy, a
language that strays from the line of the other languages we have analyzed in
these challenges on ["those weird new languages"](https://lnds.net/en/blog/lnds/2016/01/09/those-strange-new-languages/). 

In terms of the analogies we have drawn so far, it is
closer to pop, and add to that its youth and its focus on making
app programming easier, so picking Taylor Swift seems
fitting to me.

This is not contempt. Taylor Swift is a great artist, and
I like several of her songs, but you have to recognize the
space she moves in within music (between country pop and
pop rock). In the same way, I feel Swift is designed and optimized
for a certain kind of application; although it has what it takes to
build all kinds of systems, that is not its main focus.

## From country to pop

Taylor Swift started out in country pop, inspired by Shania
Twain and later by the life of Faith Hill, and decided to move to
Nashville, Tennessee, to pursue her artistic career. She was very
successful, receiving various awards and recognition from the country
industry. Her song "Mean" even won the award for best country
song at the 2012 Grammys. Taylor earned a reputation as a good
narrator of personal experiences in her songs.


{{<figure caption="Taylor playing the banjo, showing her country side, performing Mean" src="https://d2dspjyoh5c79p.cloudfront.net/7b5bf66f-ad07-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Swift, the language, was born as a way to modernize development
for iOS, Apple's mobile operating system.

The introduction to the book ["Swift Programming Language"](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html) says:


> "Swift is a fantastic way to write software, whether it's for
> phones, desktops, servers, or anything else that runs code. It's a
> safe, fast, and interactive programming language that combines the
> best in modern language thinking with wisdom from the
> wider Apple engineering culture and the diverse contributions from its
> open-source community."

The style catches my attention; the choice of words is so very
Apple, where everything is "fantastic" or "amazing". But reality isn't
quite like that. Underneath, Swift is still, in many respects, a layer
of abstraction over Objective C.

Each iteration of Swift, each new version, only closes off one more flank
of that abstraction.


The quote above says that with Swift I can write software for
any kind of environment. Well, that's true, but in reality
I don't always end up writing it in Swift; I write it in C. Because underneath
Swift there is still C. 

For example, in [the solution to challenge 2](/en/blog/lnds/2017/01/02/vectors/), I wrote this
code:


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

Apart from a few let and var keywords and the way the if and while are written, this is
not very different from doing it in C. It can be done another way in
Swift, but at the risk of losing performance, or of complications when
memory is limited.

Let me give you another example. When I implemented challenge 4, for
the reading part I needed to read the whole file and put it in
an array of bytes. In Swift that is done like this:

```swift
  if let data = NSData(contentsOfFile: inputFile) {
      bytes = [UInt8](repeating: 0, count: data.length)
               data.getBytes(&bytes, length: data.length)
  }
```  

NSData is a structure that lets us work with the contents of a
file. Now, to write files, what I did is more or less
the following:

```swift
      var out = Data()
      let nsdata = NSData(data: out)
      nsdata.write(toFile: output, atomically: true)
```

This reflects the fact that in Swift files are seen as a place
to persist information, not very different from any resource an
app needs (like an icon or an image). 

This is a good abstraction, but in certain cases it isn't adequate, and
in those cases you take advantage of the fact that Swift is still C and you can
call the stdlib or stdio functions of ANSI C directly
from your Swift code.

In short, what I mean is that Swift is a general
purpose language, but the abstractions it provides, both at the
language level and in its libraries, seem to be designed mainly to
support the development of mobile applications (apps) over other
kinds of problems. That can cause trouble if you intend to use Swift for
systems programming, or on the server, especially around security.

## **Huffman in Swift**

The implementation of problem 4 in Swift is really boring. I
spent most of the time adapting the BitInputStream and
BitOutputStream classes, because I had to learn how to abstract the handling
of byte streams using Data and NSData. The rest was simply
translating the Go solution to Swift, a fairly simple process.

Classes in Swift don't have many novel features. Let's see
how I implemented the trees:


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

Protocols are the equivalent of interfaces in other languages. Unlike
Go, in Swift the type declaration is static; it isn't
inferred as in Go. So the Node and Leaf classes must implement the
Tree protocol.

Learning the syntax of classes and protocols in Swift doesn't
take long for a programmer coming from languages like
Java or C\#. It is harder to understand how Go uses them than how Swift does.
Constructors are declared with the init method.

One peculiarity of Swift, inherited from Objective C, which in
turn got it from Smalltalk, is that parameters must be named.

This let me create two constructors for the HuffTree class that
take the same type of argument, which is interesting:


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

What sets the two methods apart is the name of the argument, something
you don't find in many other languages, and which can give you a certain
extra degree of expressiveness.

## Extensions

Can this problem be solved another way in Swift?\
I suppose so. 

Swift has an enumerated type that lets you implement something similar to
algebraic data types.

So we could start by declaring something like the following:

```swift
       indirect enum Tree {
          case Empty
           case Leaf(UInt, UInt8)
           case Node(UInt, Tree, Tree)
      }
```

The indirect clause makes it possible to create a recursive structure. 


On top of this you can build a solution very similar to the one
[I implemented in Rust](/en/blog/lnds/2017/09/24/red-barchetta/). You
can work that out on your own, and if anyone is interested they can
send me their solution as a pull request. Maybe at some point I'll
feel like implementing it myself, but I would be glad to receive a
contribution from someone who knows more Swift.

{{<youtube nfWlot6h_JM>}}


## References:

Repository with the solution to challenge 4 in
Swift: <https://github.com/lnds/9d9l/tree/master/desafio4/swift>

LLVM: <https://llvm.org/>

Chris Lattner: <http://www.nondot.org/sabre>

Swift Programming Language: <https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html>

Taylor Swift: <https://taylorswift.com/>
