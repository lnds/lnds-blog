---
title: "When the heart rules the mind"
authors: [admin]
subtitle: "9 challenges in 9 languages (4 of 9) part 5"
date: 2017-10-01T08:25:11-03:00
slug: "when-the-heart-rules-the-mind"
draft: false
tags: ['rock', 'programming languages', 'challenges', 'go']
image:
  placement: 3
---

> Mother protect me,\
> protect me from myself

If you put together Steve Howe, former guitarist of Yes and Asia, with Steve Hackett,
former guitarist of Genesis, nothing can go wrong, right? I mean, they are
two of the best guitarists in English progressive rock. Add
John Mover, former drummer of Marillion, Phil Spalding (who among
others worked with Mike Oldfield) and, up front, singer Max Bacon (ex
Nightwing and Bronz); with all that talent together the product should be
exceptional. In theory, at least.

{{<figure caption="Steve Hackett and Steve Howe" src="https://d2dspjyoh5c79p.cloudfront.net/1539bfc9-a6ef-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

That supergroup existed, it was called GTR, and it made a lot of noise in 1985. The
name is simply Guitar without the vowels, and it comes from the
restriction imposed by Howe, who, annoyed by the dominance of
keyboards in Asia, ruled that the group would only use
guitars. Granted, they were special guitars with pickups for
Roland synthesizers, which use the vibration of the strings to create
MIDI signals that trigger and drive synthesizers. 

But they had problems from the start. Howe insisted on
investing in high-quality studio time, while Hackett
preferred a lower studio budget and spending more on
instruments and technology. Howe's idea prevailed and
turned out to be the more expensive one in the long run, leaving the group in debt. Manager
Brian Lane (Yes's former manager) took advantage of this to lock in
a final deal that guaranteed he got his investment back.

The end result was so disappointing that the critic J.D. Considine
published in Musician magazine, as his entire review of the debut album, the
following: "GTR - SHT".

![](https://d2dspjyoh5c79p.cloudfront.net/bdd18d08-a6ce-11e7-a030-2b5831f8ecb5-aa9f18b7)

GTR went on tour in 1986 through North America and Europe. It was in rehearsals
that the idea of not using keyboards proved unworkable, since
the synthesizers hooked up to the guitars didn't have the quality
required for a live concert, so the group grudgingly
had to accept adding a keyboard player on stage.
They also had to add Yes and Genesis songs to fill out
the concert setlists.

Go power trio
=============

> When the heart rules the mind\
> One look and love is blind\
> When you want the dream to last\
> Take a chance forget the past

[The Go programming language](https://golang.org/) is also the
product of a supergroup, one bankrolled by Google. Go was originally
designed by Robert Griesemer, who had worked on a
Java compiler for HotSpot and on the V8 virtual machine for
JavaScript, together with Rob Pike, formerly of Bell Labs, one of the
creators of the Plan 9 operating system and the Limbo language, and finally
the great Ken Thompson, one of the creators of the Unix operating system and
the C language.

Just as Howe was fed up with keyboards, Griesemer, Pike and Thompson
were more than dissatisfied with the complexity of C++. 

Fortunately the Google ensemble fared better than GTR, in
part because Pike and Thompson had already worked together, and because
they managed to build a community around the language in very little
time (courtesy of Google's kind sponsorship, of course).

{{<figure caption="Griesemer, Pike and Thompson" src="https://d2dspjyoh5c79p.cloudfront.net/4f0fa74b-a6fa-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Go's design favors simplicity: a simple syntax, which
allows for a very fast compiler. Go is a statically typed language
that supports building large, scalable systems.  It is a
very productive language and easy to read for anyone used to
C-derived languages. Its design is meant to give good support to
networked and multiprocess applications. 

## Objects in Go

> Watching the actor,\
> that takes the stage by storm

The features that stand out in Go are:

-   Lightweight processes through the so-called goroutines 
-   Channels to implement concurrency using part of the
    [CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes) model
-   Interfaces, to implement polymorphism
-   There is no inheritance in Go, although composition can be implemented.

One of Go's peculiarities, and one that can be confusing at
first, in my opinion, is its object programming model. 

Let me show you an example:

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

You would expect this program to print "odometer 20", but it doesn't;
what it prints is 0. This was the cause of a bug when
I first implemented my solution to challenge 4 in Go.

In reality, methods in Go are simply functions, and they receive
their arguments by value. So when we do:

```go
        c.odometer += 10
```

We are operating on the copy the function received, and the changes are
lost when the function returns. So the solution is that to
build methods that mutate an object you must use pointers:

So to fix this problem we have to do:

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

This is an argument-passing model very similar to what happens in
old languages like C, Pascal or even Algol. Rather dated,
in my opinion, and I suppose it comes from Pike and Thompson, like many other
idiosyncratic things in the language, for example the fact that it doesn't
implement generic data structures (or templates).

## Huffman in Go 

This is the fifth part of challenge 4, in our series on
["those weird new languages"](/en/blog/lnds/2016/01/09/those-strange-new-languages/).

Solving this problem in Go was relatively simple compared with the
Rust solution. Although I must say that the first time I ran the
Go program I got a null pointer access error, something that is
impossible to pull off in Rust, and that's where I spent the most time, until
I understood how methods handle their arguments in
Go.

The bug was in the BuildHuffTree method:

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

Originally Heap.Insert() did not take a pointer to the Heap struct, so
I expected Insert() to keep mutating the structure, which didn't
happen; I was used to the models of many modern
languages, which handle objects as references. 

The other feature I used in this solution was Go's
interfaces. They make it possible to build an object-oriented solution, not as
functional as the Rust one. Unlike Rust, Go does have
null values (which is why my program crashed the first time).

In our case the interface to implement was Tree:

```go
    type Tree interface {
      Freq() uint
      WriteTo(writer *BitOutputStream)
      sDumpCodes(codes []string, prefix string)
      ReadChar(reader *BitInputStream) byte
    }
```

There is no inheritance in Go, but there is polymorphism, through interfaces.
Any struct that implements the methods defined in the
interface is said to have the same type. Technically this is called
implicit subtype polymorphism, or colloquially, 
["duck typing"](https://en.wikipedia.org/wiki/Duck_typing) ("if it walks like a
duck and quacks like a duck, then it's a duck!"). This is a
typical feature of dynamic languages, but it is very pleasant
to find it in a static language like Go.

So to solve our problem we declare the model of the
Huffman tree using two types, Leaf and Node, like this:

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

And for each one we implement the methods of the interface:

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

The interesting part is that we never had to say that Leaf or Node implement
Tree. For Go this only matters when we try to pass one of
these variables off as a Tree, as in the case of the
readTree() function.


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

This function returns some object that implements Tree; both Leaf and
Node meet that condition, so the code is valid.

## Go or no Go

> Seasons will change\
> You must move on\
> Follow your dream

Go is a very powerful language, with interesting features. It is
easy to learn, moderately complex, and it is very easy to be
productive in it, but it has certain idiosyncrasies that I find
annoying.

In particular I don't like its exception handling, which forces you to fill
the code with ifs to check the result of every risky
operation. In this respect Rust is more elegant, managing
errors in monads such as Option or Result, which can be composed. 
Go is fairly primitive here. Though not as primitive as C.

Polymorphism in Go is elegant, but I suspect that in a code
base of many lines it can get cumbersome to manage. It's a
shame it doesn't support generic data structures.

Go has gained a lot of momentum; it has become a popular language among
programmers bored with Java or C++. We don't know whether it will replace them,
but I suspect it will keep gaining momentum, and that it will be more popular than Rust
in certain areas, because it is definitely much easier to
learn. 

If you are bored with Java or C++, this is definitely a language
I recommend you learn. 

I must confess I was skeptical about Go, but after
this exercise I think it is a pleasant language. I would like it
to adopt more functional aspects, and to sort out some issues with
concurrent programming (which we'll talk about in another challenge). 

But sometimes you shouldn't let the heart rule the mind. The
fact that my first experiences with Go weren't pleasant,
and that it lacks features I like, doesn't change the fact that
Go is a pretty good language. So let's give Go more
chances; I think it will pleasantly surprise me.

The source code is, as always, in my GitHub
repository: <https://github.com/lnds/9d9l/tree/master/desafio4/go>

{{<youtube ARERFbiqCfk>}}


## **Sources**:

Wikipedia page on
GTR: <https://en.wikipedia.org/wiki/GTR\_(band)>

Official Go site: <https://golang.org/>

[The book The Go Programming Language](http://amzn.to/2xTvy3b), by Alan
Donovan and Brian Kernighan.
