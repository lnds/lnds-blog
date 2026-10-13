---
title: "Snow goose"
authors: [admin]
subtitle: "9 challenges in 9 languages (4 of 9) part 7"
date: 2017-10-15T08:25:11-03:00
slug: "snow-goose"
draft: false
tags: ['challenges', 'new languages', 'languages', 'programming languages', 'programming', 'rock', 'fsharp',  'functional programming']
image:
  placement: 3
---

## Camel

[Camel](http://www.camelproductions.com/) is a great English progressive
rock band, founded in 1971 by [Andrew
Latimer](https://en.wikipedia.org/wiki/Andrew_Latimer). Its original
lineup, besides Latimer on guitar, had [Andy
Ward](https://en.wikipedia.org/wiki/Andy_Ward_(musician)) on
drums, Doug Ferguson on bass and [Peter
Bardens](https://en.wikipedia.org/wiki/Peter_Bardens) on keyboards. It was
in 1974, with their second album,
[Mirage](https://en.wikipedia.org/wiki/Mirage_(Camel_album)), that they won
critical recognition, and a moderate success that even took them on
tour through the western United States. It is a group that
blends elements of jazz, classical and baroque music, along with
electronic touches.

{{<figure caption="Cover of Camel's album Mirage" src="https://d2dspjyoh5c79p.cloudfront.net/d6892676-b1c7-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Perhaps one of their most important works is 
["The Snow Goose"](https://en.wikipedia.org/wiki/The_Snow_Goose_(album)), a concept
album inspired by the novella of the same name by 
[Paul Gallico](https://en.wikipedia.org/wiki/Paul_Gallico) (who also
wrote "The Poseidon Adventure", later made into a
film). It is a beautiful instrumental piece about
friendship against the backdrop of war, during the terrible
[Dunkirk evacuation](https://es.wikipedia.org/wiki/Operaci%C3%B3n_Dinamo) in
World War II.

From there Camel's fame kept growing, reaching its commercial peak with 
"I Can See Your House from Here", from 1979, an album that stirred controversy over
its cover, which shows a crucified astronaut floating above the
Earth.

{{<figure caption="Cover of \"I Can See Your House From Here\"" src="https://d2dspjyoh5c79p.cloudfront.net/0b09b3b7-b1c8-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

But the eighties were not kind to Camel. After recording
[Nude](https://en.wikipedia.org/wiki/Nude_(Camel_album)), another concept
album, inspired by the story of the Japanese soldier [Hiroo
Onoda](https://en.wikipedia.org/wiki/Hiroo_Onoda) (who was found,
many years after the end of World War II, still
hiding on an island because he had never learned it was
over), the band was in crisis. 

Drummer Andy Ward decided to leave the band to get clean from
alcohol and drugs (years later Ward joined Marillion).
Bardens and Ferguson had left the band between 1977 and 1978 and had
been replaced by other musicians (who came mainly from
[Caravan](https://en.wikipedia.org/wiki/Caravan_(band)), another famous
band from the [Canterbury
scene](https://en.wikipedia.org/wiki/Canterbury_scene)).

![Nude](https://d2dspjyoh5c79p.cloudfront.net/36865ca8-b1c8-11e7-a030-2b5831f8ecb5-aa9f18b7)

And so in 1982 Latimer found himself the only founding
member left in the group. But his record label demanded he honor
the contract, and that meant delivering at least one "hit". The history of
rock is full of these situations, where artists are forced to
record something. By then Latimer had already worked with
his wife, Susan Hoover, on the lyrics. 

Under obligation, Latimer headed to Abbey Road Studios and hired
several session musicians, among them bassist [David
Paton](https://en.wikipedia.org/wiki/David_Paton) and singer [Chris
Rainbow](https://en.wikipedia.org/wiki/Chris_Rainbow), who had already
worked with the [Alan Parsons
Project](https://en.wikipedia.org/wiki/The_Alan_Parsons_Project). The
result of this contractual obligation is a farewell album from
Camel, titled ["The Single
Factor"](https://en.wikipedia.org/wiki/The_Single_Factor), a
mediocre album after everything the band had achieved. A piece leaning heavily
toward pop, with some songs designed to please a mass audience, and
with quite a bit of Alan Parsons Project influence.

{{<figure caption="The Single Factor" src="https://d2dspjyoh5c79p.cloudfront.net/49f97519-b1c8-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

That was the start of Camel's long hiatus, until Latimer revived the band
in 1991, with a new incarnation and recording in the USA, where he moved
after selling his house in England. The album is called "Dust and
Dreams", and it is inspired by Steinbeck's novel "The Grapes of
Wrath". Since then Latimer has stayed active and is still
revered within progressive rock.

It is perhaps one of the great bands you have never heard of, and it had
a big influence on what became [neo-progressive rock](https://en.wikipedia.org/wiki/Neo-progressive_rock) and has been cited as an inspiration by Opeth, Steven Wilson and Dream Theater, among others.

**OCaml**

Caml is a programming language created in France by
[INRIA](https://www.inria.fr/en/) (*Institut national de recherche en
informatique et en automatique*[). It is a multi-paradigm
language, a descendant of ML. Caml comes from Categorical Abstract
Machine Language.

In 1991 INRIA itself extended the language, adding an object-oriented
layer and creating [OCaml](http://ocaml.org/), Objective
Caml.

OCaml is a very important milestone in the development of programming
languages, being the inspiration for both Scala and F\# and
a strong influence on Rust.


{{<figure caption="OCaml logo" src="https://d2dspjyoh5c79p.cloudfront.net/910b464b-b1c8-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

OCaml has a static type system, with type inference,
parametric polymorphism, automatic memory management, tail
recursion, pattern matching, functors, and several of the features
we see in the most modern languages.

Let's look at an example of OCaml

```ocaml
     let rec qsort = function
       | [] -> []
       | pivot :: rest ->
           let is_less x = x < pivot in
           let left, right = List.partition is_less rest in
           qsort left @ [pivot] @ qsort right
```

This is the classic qsort algorithm in OCaml. In F\# it would be written like this:

```fsharp
     let rec qsort list =
       match list with 
       | [] -> []
       | pivot :: rest ->
           let is_less x = x < pivot in
           let left, right = List.partition is_less rest in
           qsort left @ [pivot] @ qsort right
```

As you can see, they are quite similar. In my opinion OCaml is
much better than F\#. In my ignorance I thought OCaml was an
extinct language (the same way I thought Camel was a band that was no
longer active). 

F\# is a very interesting language, created by Microsoft Research Labs
in Cambridge, England. Perhaps the most interesting innovations in F\#
are units of measure, metaprogramming (which lets us create
domain-specific languages) and the concept of information rich
programming.

Let's look at an example, first with units of measure:

```fsharp
    [<Measure>] type kg
    [<Measure>] type s
    [<Measure>] type m
```

With this we have defined the
[MKS](https://es.wikipedia.org/wiki/Sistema_MKS_de_unidades) system of units.

So we can write things like the following:

```fsharp
    let gravedadTerrestre = 9.8<m/s^2>
    let alturaDeMiOficina = 32.5<m>
    let velocidadDeImpacto = sqrt (2.0 * gravedadTerrestre * alturaDeMiOficina)
```

With this, velocidadDeImpacto is expressed as ```float<m/s>```

If I make the mistake of writing this:

    let velocidadDeImpacto = sqrt (2.0 * gravedadTerrestre + alturaDeMiOficina)

I will get an error saying that the unit of measure m does not match
m/s\^2.

The interesting part is that we can derive units, for example the newton:


```fsharp
    [<Measure>] type N = kg m/s^2
```

and we can do:

```fsharp
    let masa = 70.0<kg>
    let fuerza:float<N> = masa*gravedadTerrestre
```

## Huffman in F\#

The F\# solution to our fourth challenge, in this series on those
"weird new languages", is one of the shortest, beaten only by the
Clojure solution.

Let's look at the most relevant parts of the solution.

To model the Huffman tree we use an algebraic type:

```fsharp
    type Tree =
        | Leaf of byte * int
        | Node of Tree * Tree  * int

        member this.Freq() =
            match this with
            | Leaf(_, f) -> f
            | Node(_,_,f) -> f
            
        member this.WriteTo(writer:BitOutputStream) =
            match this with
            | Leaf(s, _) ->
                writer.WriteBit(true)
                writer.WriteByte(s)
            | Node(l, r, _) ->
                writer.WriteBit(false)
                l.WriteTo(writer)
                r.WriteTo(writer)
                
        member this.ReadChar(reader:BitInputStream) =
            match this with
            | Leaf(s, _) -> s
            | Node(left, right, _) ->
                if reader.ReadBit() then
                    right.ReadChar(reader)
                else
                    left.ReadChar(reader)
               
        member this.Parse(reader:BitInputStream) (writer:Stream) =
            while not reader.Eof do
                let ch = this.ReadChar(reader)
                writer.WriteByte(ch)
```

With this we say that a Tree can be a Leaf, which
is a tuple of a byte and an integer. A Node, on the other hand,
has two trees and an integer.

The member statement lets us define "methods" for this type, which
we use later to persist the tree to disk, or to
decompress (in the Parser method).

Compression is handled by this function:

```fsharp
    let compress (input:string) (output:string) = 
        let bs = File.ReadAllBytes input
        let tree =  List.ofArray bs |> calcFreqs |> buildTree
        let codes = makeCodes tree
        use writer = new BitOutputStream(output)
        tree.WriteTo(writer)
        for b in bs do
            writer.WriteBits(codes.[b])
```

Notice this statement:

```fsharp
    let tree =  List.ofArray bs |> calcFreqs |> buildTree
```

This is a pipeline, which lets us compose a series of functions.

The buildTree function is recursive and is similar to the one we used in
[our Scala
solution](/en/blog/lnds/2017/07/17/close-to-the-edge-down-by-the-river/)

```fsharp
    let buildTree (freqs: (byte*int) list) =
        let sort (tree: Tree list) =
            tree |> List.sortBy(fun i -> i.Freq())
        let rec loop (tree: Tree list) =
            match sort tree with
            | left::right::[] -> Node(left, right, left.Freq() + right.Freq())
            | left::right::tail -> 
                let node = Node(left,  right, left.Freq() + right.Freq())
                loop (node :: tail)
            | [node] -> node
            | [] -> failwith "empty tree list!"
        freqs |> Seq.map Leaf |> List.ofSeq |> loop 
```

Finally, to decompress we do:

```fsharp
    let decompress (input:string) (output:string) =
        use reader = new BitInputStream(input)
        let tree = readTree(reader)
        let writer = File.OpenWrite(output)
        tree.Parse reader writer
```

The readTree function is interesting, because in F\# functions must be
fully defined before they are used, but readTree uses two
mutually recursive functions, so we use the **let and** notation

```fsharp
    let rec readTree (reader:BitInputStream) =
        let b = reader.ReadBit()
        if b then 
            readLeaf(reader)
        else
            readNode(reader)and readLeaf(reader:BitInputStream) =
           let sym = reader.ReadByte()
           Leaf(sym, -1)
                       
    and readNode(reader:BitInputStream) = 
                let left = readTree(reader)
                let right = readTree(reader)
                Node(left, right, -1)
```

You can see the rest of the code in my repository on
Github: <https://github.com/lnds/9d9l/tree/master/desafio4/fsharp>

And to finish, I leave you with Camel live, two videos. One from 1975,
where the original lineup performs excerpts from Snow Goose
accompanied by a chamber orchestra:

{{<youtube nrjvkcEQ8vw>}}

And the second video is from 1997, Coming of Age:

{{<youtube uSYV8mVllQo>}}
