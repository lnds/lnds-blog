---
title: "Occam's razor"
authors: [admin]
subtitle: "9 challenges in 9 languages (4 of 9) part 3"
date: 2017-08-29T08:25:11-03:00
slug: "occams-razor"
draft: false
tags: ['challenges', 'new languages', 'languages', 'programming languages', 'programming', 'rock', 'clojure', 'functional programming']
image:
  placement: 3
---

## Porcupine Tree and Steven Wilson

The story of Porcupine Tree is a curious one. It was born in 1987 as a
kind of elaborate joke (a hoax band) created by Steven Wilson and Malcolm Stock.

{{<figure caption="Steven Wilson, creator of Porcupine Tree" src="https://d2dspjyoh5c79p.cloudfront.net/c142f0bb-8c19-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

The two friends made up a detailed backstory for a supposed
psychedelic band from the seventies, which they called Porcupine Tree.


The account included colorful anecdotes about events,
appearances at rock festivals and, of course, stints in
prison. Once Wilson had his own studio gear he recorded several
hours of music, in order to supply "evidence" of the
band's existence.

Although Stocks contributed some vocal passages and a bit of
experimental guitar, his role in the project was mainly
to supply ideas; most of the material was written, recorded
and performed by Steven Wilson.

Wilson's idea with this project was to emulate what
[XTC](https://es.wikipedia.org/wiki/XTC) did with 
[The Dukes of Stratosphear](https://en.wikipedia.org/wiki/The_Dukes_of_Stratosphear),
a band modeled on the psychedelic pop groups of the sixties.
Only in 1989 did he start considering the idea of forming a band, but
first he released an eighty-minute cassette titled
"[Tarquin's Seaweed Farm](https://en.wikipedia.org/wiki/Tarquin%27s_Seaweed_Farm)", which
included an eight-page booklet with more fake stories about the
band, still keeping the spirit of the joke alive. The recording circulated
among a few of Wilson's acquaintances, but that was enough to generate
some interest in this mysterious group.

And that is how, between 1991 and 1997, Porcupine Tree took shape and consolidated
as a real band, led by Wilson, who also served as
lead singer and lead guitarist, with Richard Barbieri on keyboards, Colin Edwin
on bass and Chris Maitland on drums. This lineup lasted until
2002, when Maitland left the group and the great drummer
Gavin Harrison joined. It is in the period from 2002 to 2010 that
Porcupine Tree's style settles and their most successful albums come out:
In Absentia, Deadwing, the acclaimed Fear of a Blank Planet and The
Incident.

![](https://d2dspjyoh5c79p.cloudfront.net/f076ae3c-8c19-11e7-a030-2b5831f8ecb5-aa9f18b7)

But this post is not about Porcupine Tree, so let's move on.

## Occam's Razor

Occam's Razor is the first track on 
[The Incident](https://en.wikipedia.org/wiki/The_Incident_(album)), an
instrumental piece under two minutes long that leads into the song The
Blind House. About this title Steven Wilson said the
following:

> "The whole thing about Occam's Razor for me is that it's a sort of
> prelude to The Blind House, a song about a religious
> cult. I've written a few songs over the years about my
> feelings on organized religion. \[\...\]  the
> interesting thing about Occam's Razor is that if you apply its principles
> to religion, Occam's Razor basically says that whichever
> is the most obvious, acceptable and logical of the explanations is the
> one you should accept as correct. There are many theories to explain
> something; you have to discard all those for which there isn't enough
> evidence or that seem implausible and accept the one that carries the most
> scientific weight. If you apply this principle to the creation of the universe
> and why human beings are here, God and religion come in at around
> number 50,000 on a list of plausible explanations\[\...\]"

The term [Occam's Razor](https://es.wikipedia.org/wiki/Navaja_de_Ockham) is about
discarding convoluted explanations, about discarding
complexity. 

In its purest form, Occam's Razor says the following:

> "When faced with competing hypotheses, select the one that makes
> the fewest assumptions. Do not multiply entities beyond necessity."


This concept, coined by the medieval philosopher 
[William of Ockham](https://es.wikipedia.org/wiki/Guillermo_de_Ockham), brings us to the
second protagonist of this post: Rich Hickey, the author of Clojure.


## Simple made easy

Rich Hickey is the creator of Clojure, the language we will use to
solve our challenge number four.

{{<figure caption="Rich Hickey, creator of Clojure" src="https://d2dspjyoh5c79p.cloudfront.net/a599f25a-8c19-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

In the [first part](/en/blog/lnds/2017/06/10/pour-some-syntactic-sugar-on-me/)
of this series I introduced the problem and presented the solution in Kotlin. In
the [second part](/en/blog/lnds/2017/07/17/close-to-the-edge-down-by-the-river/)
I showed the solution in Scala.

Now it's time to solve Huffman coding using Clojure, the
third of our languages based on the JVM (Java Virtual Machine).

One of the things I like about [Clojure](https://clojure.org/) is its
simplicity. Rich Hickey tells us in his talk 
["Simple Made Easy"](https://www.infoq.com/presentations/Simple-Made-Easy) that
we must pursue simplicity, because it is a prerequisite for
reliability.

Simple is often mistaken for "easy". But
easy means what is closest at hand, something that is accessible.
"Simple", on the other hand, is the opposite of "complex", and complex
is something that is tangled up (messy, confusing, knotted or
intricate). So simple is not the same as easy.


For Hickey, what matters in software is:

-   does it do what it is supposed to do?
-   is it of high quality?
-   is it reliable?
-   can problems be fixed along the way?
-   can requirements change over time?

The answer to these questions is what matters when we write
software, not the "look and feel" of the experience of writing the
code or its cultural implications.

The benefits of simplicity are:

-   ease of understanding
-   ease of change
-   ease of debugging
-   flexibility


To build simple systems we have to throw out the complex
constructs, such as state, objects, methods, syntax,
inheritance, variables, imperative loops, actors, ORM,
conditionals.


For Hickey the simple constructs are: values, functions, namespaces,
data, polymorphism, managed references, set
functions, queues, declarative data manipulation, rules and
consistency.

Simple systems are built through abstraction; you have to
design by answering the classic questions: what, who, when, where,
why and how. Then you choose constructs that produce simple
artifacts.


Just as William of Ockham, with his famous principle, invites us
to discard the more convoluted hypotheses and not to complicate
our reasoning by invoking more entities than necessary,
Rich Hickey invites us to do something similar with software.

That is why Clojure is such an interesting language, and what makes
it worth learning.

# Challenge 4 in Clojure

Let's see how all this applies in the context of the problem we are
solving.

Remember that what we want is to implement a way of compressing
text files using Huffman coding.

Compression is very succinct in Clojure, and to me at least it comes out very
clear:

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

Let's break this down piece by piece:

```clojure
        (let [bytes (read-bytes input)
```

This simply reads all the bytes of the file into an array. It is
a function of my own built on top of the java.nio library, and you can
find it in the huffman.io namespace.


Once we have the characters of the file we compute their frequency:

```clojure
              freq (sort-by val <  (frequencies bytes))
```

The frequencies function takes an array of bytes and returns an array
of pairs holding each unique element and its frequency.[^1]


We sort this frequency table from highest to lowest; for that we use
sort-by, with val and \< as arguments. val is the function that gets the
frequency value from the list of pairs returned by frequencies, and \< is
the function used to compare two values.

Then we turn these frequencies into the leaves of our tree:

```clojure
            leaves (map (partial apply leaf) freq)
```

Here we use the leaf function, which is defined like this:


```clojure
(defn leaf \[symbol freq\] (list :leaf freq symbol))
```

That is, a leaf is a list containing a :leaf tag,
then the frequency and, in third position, the symbol.


By doing (map (partial apply leaf) freq) we use the map function to
create a new array of leaves from an array of frequencies.


With the leaves we build the tree:

```clojure
    tree (make-tree leaves)
```

The make-tree function is defined like this:

```clojure
    (defn make-tree [leaves]
      (loop [trees leaves]
          (if (= 1 (count trees))
            (first trees)
            (recur (sort-tree (cons (node (first trees) (second trees)) (drop 2 trees)))))))
```

This applies the loop of the algorithm for building a Huffman
coding tree. While the length of the array is greater than one,
we take the first two nodes and build a new node that has them
as children; that is what the node function does:

```clojure
    (defn weight [node] (second node))(defn node [left right] (list :node (+ (weight left) (weight right))  left right))
```

A node, then, is a list with a :node tag followed by the
sum of the frequencies of its left node and its right node, then
the left node and the right node. (The weight function returns the
frequency of a node or a leaf, which is always the second
element of the list.)


Now we have to build the code table. That is done with the
make-codes function, which takes the tree:

```clojure
    codes (make-codes tree)]
```
The make-codes function looks like this:

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

This is a function that can be invoked in two ways: an external one
where it only takes the tree, in which case it calls the internal version that
takes the tree plus the code.

In the internal function we have two cases. If the tree is a
leaf, the result is a pair with the symbol and the code,
but as a hash-ref tuple, which lets us build a dictionary that
maps symbols to their binary representations.


If the tree is a node, then the result is a dictionary with the
codes from the left side of the tree (which start with 0) together with the
codes from the right side of the tree (which start with 1).

Now comes the final part:

```clojure
    (write-encoded output (flatten [(tree-as-bits tree)
                                    (encode-bits codes bytes)] ))
```

The write-encoded function takes an array of bits (0s and 1s) and
writes it to the output file.

The array of 0s and 1s is built from two parts:

```clojure
    (tree-as-bits tree)
```

This is a function that turns the tree into a sequence of 0s and 1s, and
then:

```clojure
    (encode-bits codes bytes)
```

which turns each byte into its binary representation in the Huffman
code.  Since each representation is an array, this produces an array
of arrays of 0s and 1s; to get a flat array of zeros and ones
we use flatten[^2].

The encode-bits function is the following:

```clojure
    (defn encode-bits [codes bytes]
      (flatten (map codes bytes)))
```

That is the description of compression; I leave you the code so you can
work through decompression yourselves.

The code is here: https://github.com/lnds/9d9l/tree/master/desafio4/clojure

## Way out of here 

Both Rich Hickey and Steven Wilson are men of strong convictions
in their respective professional fields, one as a software
developer, the other as an artist.

Wilson's view of the artist comes through when he
compares it with the entertainer:

"I make a clear distinction between the two. If you want to be an entertainer and
please your fans, you end up giving them the same stuff all the time. If
you're an artist, you do it because of some deeper need inside you
that's more conducive to experimentation and innovation."

I believe there is a difference between the programmer (who is an artist
in my view) and the coder. The programmer goes beyond pleasing the
user; he doesn't give users what they ask for, but what they need 
([I've talked about this before](/en/blog/lnds/2013/03/23/expectations/)). In that
sense the coder is like the entertainer Wilson talks about. The
artist and the programmer, on the other hand, are innovators and surprise the
people on the receiving end of their work.

Rich Hickey, for his part, shows us in his talks another way of
approaching the art of programming. I recommend watching them on
sites like InfoQ: <https://www.infoq.com/profile/Rich-Hickey>.

One of my favorite Hickey quotes is this one:

> "Simplicity is hard work. But, there's a huge payoff. The person who
> has a genuinely simpler system - a system made out of genuinely simple
> parts, is going to be able to affect the greatest change with the
> least work. He's going to kick your ass. He's gonna spend more time
> simplifying things up front and in the long haul he's gonna wipe the
> plate with you because he'll have that ability to change things when
> you're struggling to push elephants around."
>
> -- ***"Simplicity is hard work."***

And that is the ultimate message of this post. I leave you with Porcupine Tree
to close:

> The shutters are down and the curtains are close>\
> And I've covered my tracks\
> Disposed of the car

{{<youtube SlwT7VTM_Hc>}}


[^1]: Although I didn't say so before, we assume the files are
simply sequences of bytes; we ignore their encoding.

[^2]: To understand this a bit, (map codes bytes) could produce
output along these lines:\
    [[0 1 0 1 0 0] [1 0 1 0 1] [1 1 0 11] ...]\
After flatten we get:\
    [0 1 0 1 0 0 1 0 1 0 1 1 1 0 11 ...]

