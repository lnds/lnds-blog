---
title: "Pour some syntactic sugar on me"
authors: [admin]
subtitle: "9 challenges in 9 languages (4 of 9), part 1"
date: 2017-06-10T08:25:11-03:00
slug: "pour-some-syntactic-sugar-on-me"
draft: false
tags: ['challenges', 'new languages', 'languages', 'programming languages', 'programming', 'rock', 'kotlin', 'functional programming']
image:
  placement: 3
---

December 31, 1984 was a date that changed forever the life
of Rick Allen, the drummer of Def Leppard. In a car
accident, the "Thunder God", as his fans call him, lost
his left arm.

For a brilliant young drummer the amputation meant the end of
his career, but encouraged by his bandmates and with the help of Jeff Rich
(the drummer of Status Quo), Allen worked on designing an electronic kit,
and with it he made his debut in 1986 at the Monsters of Rock festival at Castle
Donington.

Rick uses four pedals for his left foot, to replace his
missing limb, with which he triggers the sound of the hi-hat, bass drum, snare
and a tom.

But it turned out that after Allen's accident the band entered its
most successful period. Hysteria, Def Leppard's fourth studio
album, hit number one on the Billboard 200 and the UK Album
Charts in 1987. The story is told very well in the movie
"Hysteria, the Def Leppard Story".

Rick Allen's decision to use technology and change the way he
played the drums, in order to keep his career going, is something worth
studying in detail. Not all of us face decisions as vital
as the one this musician faced, but in the world of technology
sudden change is a constant.

One lesson we can take from Allen's case is that technology
can be a great help in overcoming our physical limitations.

{{<figure caption="Rick Allen, drummer of Def Leppard" src="https://d2dspjyoh5c79p.cloudfront.net/a2541fe6-4e03-11e7-9ad1-05a85a8c6d5d-aa9f18b7">}}

## Kotlin

Programming languages are one of the technologies we invented
to overcome the limitation imposed by giving instructions to a Turing
Machine. What we're after is being able to express ourselves as closely as possible
to the way we think, and not in the sequential way imposed on us by the
Von Neumann model, for example.

That's why there are so many programming languages: each one is trying to overcome
some limitation.

Java is one of the most popular languages right now, one of
those with the greatest penetration and presence in the software
development market, according to various indexes, such as the 
[RedMonk ranking](//redmonk.com/sogrady/2017/06/08/language-rankings-6-17/) ,
or the [TIOBE](//www.tiobe.com/tiobe-index/) index.

But all of us who have programmed in Java know it's not a
comfortable language. It has some design decisions that still cause
major headaches (as we'll see in an example later in this
article).

The Java Virtual Machine was created to support the Java language. Gosling's
idea was to port this machine to different environments,
mainly devices with limited resources. But Java is
almost everywhere, and massively distributed across millions of
Android devices.

When Microsoft invented .Net it decided to take, in a way, the opposite
path from Sun's: its CLR is a virtual machine designed to work
with several languages, and when it hit the market it included Visual Basic and
C\#.

Over time, people using Java decided to build other languages
that would take advantage of the JVM, while trying to overcome Java's
limitations.

Kotlin is one of those attempts. A language that has been in development
for six years now, and is at version 1.1.

I'm not going to write an ode to Kotlin; Steve Yegge already did that 
[elsewhere](https://steve-yegge.blogspot.cl/2017/05/why-kotlin-is-better-than-whatever-dumb.html). 

It's an interesting language, one to keep an eye on. I think it's going to gain
traction after the push Google gave it by officially
recognizing it as an official language for Android. 

This article is an introduction to the fourth challenge in my series on
these "strange new languages", so let's get to that, and then
we'll come back to Kotlin.

## Syntactic sugar

> Pour your sugar on me\
> I can\'t get enough\
>        -- Def Leppard

> Syntactic Sugar causes cancer of semicolons\
> -- Alan Perlis

In programming languages we talk about syntactic sugar to
refer to syntax designed to make things easier to read,
or to understand.

The idea of challenge four is to explore that syntactic sugar, along with
other design decisions, that give each of the languages some
advantage, and that explain why there's such a variety of them.
It also lets us understand what their authors were thinking when
they created them.

This time, I'll solve the problem one language at a time and document the
solution for each language in its own post. So this fourth
challenge will have nine parts (or maybe 10 or 11). 

## The fourth challenge

This time we'll build a program that compresses information.
For this we'll use a classic algorithm called Huffman Coding.

At least in theory, Huffman Coding is the compression that guarantees
each symbol is represented with the optimal number of bits,
according to Shannon's information theory 
([which we've talked about before](/en/blog/lnds/2011/04/23/talking-drums/)).

In Huffman Encoding what we do is count the frequency of the
symbols in the text we want to compress, and based on that we build
a representation table that minimizes the number of bits for each
one. That way the most frequent symbols require fewer bits than the
symbols that show up fewer times in the text.

There's a more detailed description of Huffman coding on Wikipedia;
I'll leave it here for you to study if you're interested: 
[Huffman Coding](//es.wikipedia.org/wiki/Codificaci%C3%B3n_Huffman). What
matters now is how we implement this in different languages. So
we'll be looking at that throughout these articles.

## Back to Kotlin

To build a solution to this challenge we need to build some
very interesting data structures, like a Priority Queue and a
Trie. The latter lets us see where a language like Kotlin has
advantages over Java and helps us make fewer mistakes, and write
less code.

To explain it I'm going to take a detour and propose another
exercise. Suppose we have a binary tree. In each node of this
tree we store a number, and we want to compute the sum of these
numbers and the maximum and minimum values of the tree.

So our goal is to build a structure that satisfies the
following:

> - Tree is a binary tree structure.
>
> - A node always has two children, and a numeric value.
>
> - A leaf only has a numeric value.
>
> - Tree.sum(): returns the sum of the values in the nodes and the
> leaves.
>
> - Tree.max(): returns the maximum value among the nodes and the leaves.
>
> - Tree.min(): returns the minimum value among the nodes and the leaves.
>

{{<figure caption="A binary tree with numbers in its nodes and leaves" src="https://d2dspjyoh5c79p.cloudfront.net/105aab79-4e05-11e7-9ad1-05a85a8c6d5d-aa9f18b7">}}

A solution in Java looks like this:

```java
    public class Tree {
        int value;
        Tree left;
        Tree right;
        public Tree(int value) { this(value, null, null); }

        public Tree(int value, Tree left, Tree right) {
             this.value = value;
             this.left = left;
             this.right = right;
        }

        public int sum() {
            return this.value + this.left.sum() + this.right.sum();
        }

        public int max() {
            return Math.max(this.value, Math.max(this.left.max(), this.right.max()));
        }

        public int min() {
            return Math.min(this.value, Math.min(this.left.min(), this.right.max()));
        }
    }
```
And we can create the tree in the figure like this:

```java
     Tree arbol = new Tree(30, new Tree(70), new Tree(15, new Tree(42, new Tree(54), 
                  new Tree(66)), new Tree(25, new Tree(89), new Tree(72))));
     System.out.println(arbol.sum()); // 463
     System.out.println(arbol.max()); // 89
     System.out.println(arbol.min()); // 15
```

There are several problems with this implementation. For example, what happens with
this code?

```java
     Tree arbol = new Tree(30, new Tree(70), null);
```

Oops, an NPE! So we have to patch our code like this:

```java
    public int sum() {
        if (this.left == null && this.right == null) {
            return this.value;
        }
        else if (this.left == null) {
       return this.value + this.right.sum();
        }
        else {
        return this.value + this.left.sum() + this.right.sum();
        }
    }
```

And the same for max and min. But are we sure that code is
right?

Consider this solution in Kotlin:

```kotlin
    interface Tree {
         fun sum() : Int
         fun min() : Int
         fun max() : Int
     }    
       
    class Node(val value:Int, val left:Tree, val right:Tree) : Tree {
           override fun sum() : Int = value + left.sum() + right.sum()
         override fun max() : Int = Math.max(value, Math.max(left.max(), right.max()))
           override fun min() : Int = Math.min(value, Math.min(left.min(), right.min()))
    }
      
    class Leaf(val value:Int) : Tree {
          override fun sum() : Int = value
            override fun min() : Int = value
            override fun max() : Int = value
    }
```

With this we can create and use our tree like so:

```kotlin
    val arbol = Node(30, Leaf(70), 
                Node(15, Node(42, Leaf(54), Leaf(66)), Node(25, Leaf(89), Leaf(72))))
    println (arbol.sum())
    println (arbol.max())
    println (arbol.min())
```

Not only is the code more compact, but in Kotlin it's impossible for
us to slip a null into a tree.

In Kotlin, uninitialized variables are forbidden by default.

But sometimes you do need to put *nulls* in your structures, and
in that case Kotlin introduces syntactic salt, that is, syntax that
makes it harder to write dangerous things, or bad practices.

If we wanted our nodes to accept nulls, we'd have to
declare them like this:

```kotlin
    class Node(val value:Int, val left:Tree?, val right:Tree?) : Tree 
```

And we'd have to handle all the edge cases, ugh!

So Kotlin has that advantage built in and you should make the most of it.

Tony Hoare regrets having invented null to the point of calling it 
[his "billion-dollar mistake"](//www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare).
It's one of the biggest sources of errors in our Java code.
Kotlin in its normal mode prevents that. If you want to use nulls you have to be
very clear about what you're doing, and the language's syntax reminds you
at every turn.

### A subtle bug

But there's a design decision in Kotlin that shows up as a subtle
bug, one that gave me trouble when I implemented the first solution to the
challenge.

The bug becomes obvious in this code:

```kotlin
    fun main(args:Array<String>) {
        var list = ArrayList<Int>()
        list.add(0)
        list.add(0)
        list.remove(list.size-1) o remove(int index)
        list.forEachIndexed { i, v ->
        println("list(" + i +") = "+v)  
        }
    }
```

You'd expect it to print just one element, but it prints two!

Why does this happen?

Because in Kotlin Int translates to Java's Integer type, but Java
treats that as a class distinct from the native type int.

Unfortunately, the ArrayList class has the remove method overloaded,
like this:

```kotlin
    void remove(int index);
    void remove(Object o);
```

When you pass an Int in Kotlin the compiler uses the version that
takes an object.

So the call list.remove(list.size-1) gets translated as list.remove(new
Integer(1)), and since the number 1 isn't in the list, nothing gets
removed from it, which is not what the programmer intended.

The solution is to use the removeAt() method, but in other situations this
bug can happen without us noticing. The Kotlin compiler
should do better here, with some kind of warning.

Unlike Scala, Kotlin builds its collections by extending the ones
available in Java. In Scala the collections are different, and the
way to interoperate with Java is somewhat more complicated, so this subtle
error doesn't come up.

## Huffman Coding in Kotlin

Kotlin's advantage in this exercise shows in the implementation
of the encoding algorithm.

In essence, the algorithm for building the Huffman coding tree
is this:

> 1. Create a leaf node for each symbol, assigning a weight based on its
> frequency of occurrence, and insert it into the list sorted in
> ascending order.
>
> 2. While there is more than one node in the list:
>
> 2.1. Remove the two nodes with the lowest probability from the list.
>
> 2.2. Create a new internal node that links to those two nodes,
> assigning it as weight the sum of the weights of the child nodes.
>
> 2.3. Insert the new node into the list (in the place where it
> belongs according to its weight).
>
> 3. The node that remains is the root node of the tree.

To implement this in Kotlin, the tree is represented like this:

```kotlin
    abstract class HuffTree(val frequency : Int) 
     
    class HuffLeaf(frequency: Int, val symbol: Char) : HuffTree(frequency) {
        fun symbolIndex() : Int = ...
    }

    class HuffNode(val left: HuffTree, val right: HuffTree)  
            : HuffTree(left.frequency+right.frequency)
```

And building the tree looks like this:

```kotlin
    fun buildTree(freqs : IntArray) : HuffTree {
        // we implement the sorted list as a Heap
        val heap = HuffHeap()
           
        // Create a leaf for each symbol with its frequency
        freqs.forEachIndexed { sym, freq ->
              if (freq > 0) {
                  heap.insert(HuffLeaf(freq, sym.toChar()))
               }
        }
        // while there is more than one node in the list
        while (heap.size() > 1) {
            val a = heap.extract()
      val b = heap.extract()
      heap.insert(HuffNode(a, b))
        }
        return heap.extract()
    }
```

While this comes out very elegant, the Heap implementation requires
us to use an array that may contain nulls, and this is where the
syntactic salt we mentioned earlier shows up:

```kotlin
    class HuffHeap {
         var heap = arrayOfNulls<HuffTree>(maxSymbols+1)
           var last = 0
            fun insert(tree:HuffTree) {
             if (full()) {
                   throw ArrayIndexOutOfBoundsException()
              }
               last++
              heap[last] = tree
               var j = last
                while (j > 1){
                   if (heap[j]!!.frequency < heap[j/2]!!.frequency) {
                       val tmp = heap[j]!!
                     heap[j] = heap[j / 2]!!
                     heap[j / 2] = tmp
                   }
                   j /= 2
              }
           }
           ....
```

By declaring heap as arrayOfNulls, we get an array of type
Array<HuffTree?>.

This means each element of the array can hold a
reference to a HuffTree, and that reference can be null.

Which is why we have to write ```heap[j\]!!.frequency``` to get at the
frequency of an element in the Heap.

By construction, and if the Heap ADT is implemented correctly, there's no way
for ```heap[j]``` to be null, so the !! syntax tells us it's safe
to use that value and that it isn't null.

Another advantage of Kotlin, and this one really is syntactic sugar, is that after
checking for a type we can get rid of Java's cumbersome type
casts. You can see this in the buildCodes() function

```kotlin
    fun buildCodes(tree : HuffTree, codes: Array<String>, prefix : StringBuffer) {
            when (tree) {
               is HuffLeaf -> codes[tree.symbolIndex()] = prefix.toString()
             is HuffNode -> { ... }
            }
        }
```

Here we use the when control structure, which is a kind of switch,
only more powerful. In this case we check the type of tree. Notice that if
we know tree is a HuffLeaf we can call the symbolIndex() method,
which only exists in that class.

This happens in Swift too, but the truth is Swift seems to have taken
this feature from Kotlin.

The complete code is in [my GitHub repository.](//github.com/lnds/9d9l/tree/master/desafio4) 
I did two implementations, one more object-oriented than the other.

The difference in approach is expressed in these two code
fragments that implement the same function:

```kotlin
    // decompress function, version 1
       fun  decompress(inputFile: String, outputFile: String) {
            val input = BitInputStream(BufferedInputStream(FileInputStream(inputFile)))
         val output = BitOutputStream(BufferedOutputStream(FileOutputStream(outputFile)))
            val huffTree = readTree(input)
          val length = input.readInt()
            for (i in 0..length-1) {
                var node = huffTree
             while (node is HuffNode) {
                  val bit = input.readBoolean()
                   node = if (bit) node.right else node.left
               }
               if (node is HuffLeaf)
                   output.write(node.symbol)
           }
           output.close()
      }

    // decompress function, version 2
     private fun  decompress(inputFile: String, outputFile: String) {
            val input = BitInputStream(BufferedInputStream(FileInputStream(inputFile)))
         val output = BitOutputStream(BufferedOutputStream(FileOutputStream(outputFile)))
            val huffTree = readTree(input)
          val length = input.readInt()
            (0..length-1).forEach { output.write(huffTree.readChar(input)) }
            output.close()
      }
```

In version 2 the HuffTree class behaves the way the object-oriented
paradigm dictates, and each class that implements it knows how to behave
according to the context it operates in. This is what's known as
polymorphism.

The big difference is that HuffTree is declared like this:

```kotlin
    abstract class HuffTree(val frequency : Int) {
            abstract fun writeTo(output: BitOutputStream)
           abstract fun dumpCodes(codes: Array<String>, prefix : StringBuffer)
           abstract fun readChar(input: BitInputStream) : Char
     }
```

And to understand decompress you have to keep in mind that in HuffNode the
readChar function is implemented like this

```kotlin
      // implementation in HuffNode
       override fun readChar(input: BitInputStream) : Char {
            val bit = input.readBoolean()
            return if (bit) right.readChar(input) else left.readChar(input)
        }
```

Whereas in HuffLeaf\...

```kotlin
        override fun readChar(input: BitInputStream) : Char {
            return this.symbol
        }
```

All of this to show you that while Kotlin has the is operator, and when,
and gets rid of casts, there are better ways to build this, or
else your code turns into one enormous sequence of ifs or
whens doing implicit type casts.

## Conclusion

Kotlin is a very practical language. It lets you write fairly
compact, expressive code. Many of its constructs also let you
write safer code. Scala has similar things, but they require
more verbosity (I'm thinking of Options to avoid nulls),
but that's something we'll discuss in the second article of this
series.

It has constructs that save you type casts and let you run
statements according to the type of data you receive, but this can lead
to bad programming habits. Whenever possible, use the
object-oriented paradigm properly, and that means using
polymorphism.

Kotlin is a modern language, fun, easy to learn. With the
right dose of syntactic salt and sugar you can build almost
anything. But just as with the salt and sugar in our
food, abuse can cause serious health problems, so
use it in moderation.

All the code that goes with this article is on
Github: <https://github.com/lnds/9d9l/tree/master/desafio4>
