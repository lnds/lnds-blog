---
title: "Close to the edge, down by the river"
authors: [admin]
subtitle: "9 challenges in 9 languages (4 of 9), part 2"
date: 2017-07-17T08:25:11-03:00
slug: "close-to-the-edge-down-by-the-river"
draft: false
tags: ['challenges', 'new languages', 'languages', 'programming languages', 'programming', 'rock', 'scala', 'functional programming']
image:
  placement: 3
---

The history of rock is full of anecdotes about clashing
egos between artists, like when Jimi Hendrix stole the guitar-burning
act from Pete Townshend at the 1967 Monterey Festival. There's
another one involving Yes and Deep Purple.

The story takes place at the tenth edition of the National Jazz & Blues
Festival in Plumpton, England, in August 1970. The
organizers had decided Deep Purple would close the show,
which annoyed Yes, who wanted to close the event themselves. So the
band led by Jon Anderson decided to arrive late, forcing
the organizers to ask Deep Purple to play their set
earlier.

But Ritchie Blackmore plotted a remarkable revenge. After
playing almost all of their album ["In Rock"](https://en.wikipedia.org/wiki/Deep_Purple_in_Rock),
they chose to close their show with the Rolling Stones classic
[Paint It Black](https://www.youtube.com/watch?v=O4irXQhgMqg).
During the song Blackmore ordered his
"roadies" to pour fuel over the gear, then lit
a match and threw it on the floor, and kept playing his guitar while
a fire took hold on stage.

Yes did get to play last, but the audience was so impressed
that everyone was talking about Deep Purple's spectacular
stage show. So Ritchie Blackmore had his sweet revenge, and made sure
Deep Purple was all anyone who was there that day talked about,
relegating Yes to the background.

![](https://d2dspjyoh5c79p.cloudfront.net/65f51b37-6a96-11e7-976c-0d1ee2977bbe-aa9f18b7)

Yes is a band with a complex history, with various lineups,
groupings, regroupings. At one point there were even two versions of Yes
operating in parallel.

This shows in their music too, which reached its peak of
performance complexity when keyboardist Rick
Wakeman joined. Yes has brought together great musicians, and served as inspiration for
many progressive rock bands.

# The fourth challenge

This article isn't about Yes or progressive rock. This post is part of
[the series on nine languages in nine programming challenges](/en/blog/lnds/2016/01/09/those-strange-new-languages/),
and specifically it tackles the fourth challenge in the series: compression
using Huffman coding.

When I decided to write up this fourth challenge I figured I'd write one
article for each of the solutions in each of the languages.
But I also decided to pair a rock or pop band or artist with each
language.

This time it's Scala's turn. 

Yes is a complex band, just as Scala is a complex
language.

![](https://d2dspjyoh5c79p.cloudfront.net/86ff34a8-6a96-11e7-976c-0d1ee2977bbe-aa9f18b7)

In [the first post of this series](/en/blog/lnds/2017/06/10/pour-some-syntactic-sugar-on-me/)
I paired Def Leppard with Kotlin, by accident really. This time
I asked my friend [Ubaldo Taladriz](https://twitter.com/utaladriz),
who has more flight hours than I do with Scala. I asked for his opinion
on which band seemed the best fit to represent this language. And
we came to the conclusion that it had to be something that reflected the
complexity, but was also a group of great quality, with good
songs.  

Yes's compositions have that quality, especially on albums
like Fragile, or Close to the Edge. [But Yes has also gone down
more popular roads, as on the albums 90125, or Big
Generator.

Yes's range runs from classics like Close to the Edge, Starship
Trooper, Roundabout, to hits like Owner of a Lonely Heart.

In Scala we can write code that's very simple and close to Java. But
unlike in Java, it's harder to escape the object-oriented
paradigm in Scala.

## The Huffman challenge

Recall that in this challenge I'm implementing file
compression using Huffman coding. You can read the explanation
of this challenge in [my previous article](/en/blog/lnds/2017/06/10/pour-some-syntactic-sugar-on-me/).

My first solution in Scala is a straight translation of the
Kotlin version [described earlier](/blog/lnds/2017/6/10/pour-some-syntactic-sugar-on-me).

Of course, doing that is a bit of a letdown. For example,
consider this code fragment:

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

Scala has no **break** primitive, the one Kotlin has for
interrupting a loop. 

In Scala, this is simulated in the scala.util.control.Breaks package, which
defines a DSL for it. 

Scala's designers decided that this kind of construct
introduces more problems, and they're right in my opinion. Sometimes
breaking out of a loop like this makes it harder to reason about the behavior of a
function.

The code above is part of the implementation of a Heap, as a
data structure.

The first solution, that is, the translation of the Kotlin code, is
available on Github in the following repository:
 <https://github.com/lnds/9d9l/tree/master/desafio4/scala1>

It's not very interesting, in the sense that it doesn't show off many of
Scala's features.

So I wrote a second solution, in which I used a more
functional style for a crucial part of the code.

Instead of implementing a Heap, I did a more direct interpretation of the
algorithm:

1.  For each tuple (character, frequency) we build a leaf node and
    put them in a list sorted by the frequency value in ascending
    order.
2.  We take the first two elements of the list and combine them into an
    internal node, where the node's frequency is the sum of the
    frequencies of the two leaves it contains. We insert this node into
    the list, keeping it sorted.
3.  We repeat until only one tree is left in the list.

For this, our data model is the following:

```scala
    abstract class HuffTree(val frequency: Int) 

    case class HuffLeaf(override val frequency: Int,  symbol: Char) 
       extends HuffTree(frequency = frequency) 

    case class HuffNode(left:HuffTree, right: HuffTree) 
       extends HuffTree(left.frequency+right.frequency) 
```

We create an abstract class and two case classes, one for Leaf and one for
Node.

*"Case classes"* are ideal for working with immutable data
structures, like lists. So the first part of the
algorithm looks like this:

```scala
     val leaves = freqs
          .map { case (sym, freq) => HuffLeaf(freq, sym) }
          .sortWith((l1: HuffLeaf, l2: HuffLeaf) => l1.frequency < l2.frequency)
```

freqs is a list of (character, frequency) pairs, built while
reading the file. Since it's a list I can *map* each pair,
putting it into a leaf node. Then the list is sorted with the
sortWith method.

This lets us do away with the need to create a data structure
like the Heap from the initial solution.

Now then, how do we implement steps 2 and 3 repeatedly?

The functional solution to this is very elegant. 

The first thing we'll do is this: [we'll create a function that tells
us whether the list, which contains all the nodes (or trees), contains
just one element:]{style="letter-spacing: 0.01rem;"}

```scala
    def singleton(trees: List[HuffTree]) : Boolean = trees.length == 1
```

This function takes a list of trees and returns true only if the
list contains a single element. Remember that we start with a list
of leaves obtained earlier.

The other thing we'll write is a *combine* function, which implements,
in essence, step 2 of our algorithm:

```scala
     def combine(trees: List[HuffTree]) : List[HuffTree] =
        trees match {
          case left :: right :: tail => 
           (HuffNode(left, right) :: tail).sortWith((l1,l2) => l1.frequency < l2.frequency)
          case _ => trees
        }
```

The combine function takes a list. If the list has at least two
elements, we take the first two elements to create an internal
node:

```scala
    case left :: right :: tail =>  (HuffNode(left, right) :: tail)
```

This code fragment is a *"pattern match",* and in this case the
pattern is **left :: right :: tail.
**This pattern corresponds to the first two elements of the list, and
tail represents the rest of the elements. 

What comes after =\> is a transformation. In this case
we turn the pattern left::right::tail into HuffNode(left, right)::tail,
that is, we replace the first two elements with an internal node
that holds those elements as children. And to this node we append
the rest of the list (tail).

Of course, that's not enough. The resulting list has to be kept
sorted, and we get that by adding the call to sortWith.

So what the combine function does is execute step two of
our algorithm: take the first two elements of a list of nodes
(sorted in ascending order of frequency) and generate a new sorted
list, in which the first two nodes have been replaced by an
internal node that contains them.

Now we're missing the repetition, and for that we use the until function:

```scala
    @tailrec
    def until[A](singleton: A => Boolean, combine: A => A)(data: A) : A =
        if (singleton(data)) data else until(singleton, combine)(combine(data))
```

This is a recursive, generic function. It takes a tuple consisting
of the conditional function that lets us establish the terminating
condition of the recursion, in this case singleton. It also takes a
combining function. All of this gets applied to data, which is the
structure we'll traverse (in this case a list, but it can be
any data structure that supports the singleton and
combine operations.

The \@tailrec annotation tells Scala it can optimize the code for
this recursion using the [tail call](https://en.wikipedia.org/wiki/Tail_call) technique.

So creating the final tree from the list of leaves is as simple
as this:

```scala
    until(singleton, combine)(leaves).head
```

And so the function that builds the Huffman tree is the
following:

```scala
     def build(freqs: List[(Char, Int)]): HuffTree = {
        val leaves = freqs
          .map { case (sym, freq) => HuffLeaf(freq, sym) }
          .sortWith((l1: HuffLeaf, l2: HuffLeaf) => l1.frequency < l2.frequency)
        
        until(singleton, combine)(leaves).head
      }
```

Of course this implementation is slower than solution 1. In
this case the elegance of the solution has a performance cost,
but it's not as steep as it might seem. At the end of this series
we'll evaluate the performance of the different solutions.

There are other ways to solve this using Scala in an even more
functional way, using other data structures native to Scala, but
I'll leave that to you as an exercise.

## Close to the edge

Scala is one of those languages that lets you get near the extremes,
"close to the edge", toward a more functional style, which lets you
write code with a certain elegance, concision, and even greater
mathematical formality, which makes it simpler to reason
about the flow of information during execution. 

With this construct

```scala
    @tailrec
    def until[A](singleton: A => Boolean, combine: A => A)(data: A) : A =
        if (singleton(data)) data else until(singleton, combine)(combine(data))
```

we've created a domain-specific language for processing data.
Scala lets us create new constructs to operate on a great
many data structures. We have the power to extend the
limits of the language.

## Down by the river

Using immutable structures is what helps. Functional programming
can be seen as the flow of data through various filters, a
stream of information, where each function is a filter, a pipe,
that transforms the data at each step.

The best example is the code above:

```scala
     freqs
          .map { case (sym, freq) => HuffLeaf(freq, sym) }
          .sortWith((l1: HuffLeaf, l2: HuffLeaf) => l1.frequency < l2.frequency)
```

A flow of data that starts from an array of bytes and ends up as a list
of nodes.

And when we do:

```scala
    until(singleton, combine)(leaves).head
```

we're also working with a controlled flow of data, a river of
information.

So picking Yes to talk about Scala turned out to be a very good fit.

The code is available in [my GitHub repository](https://github.com/lnds/9d9l)
 and you can send me any questions you
see fit. I also take pull requests with improvements and contributions.

References:

For the first part of this series read: [Pour some syntactic sugar on me](/en/blog/lnds/2017/06/10/pour-some-syntactic-sugar-on-me/)

To understand the series: [Those strange new languages](/en/blog/lnds/2016/01/09/those-strange-new-languages/)

GitHub repository: https://github.com/lnds/9d9l/ 
