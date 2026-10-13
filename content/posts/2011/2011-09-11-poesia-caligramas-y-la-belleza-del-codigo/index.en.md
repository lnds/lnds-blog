---
title: "Poetry, calligrams and the beauty of code"
authors: [admin]
date: 2011-09-11T08:25:11-03:00
slug: "poetry-calligrams-and-the-beauty-of-code"
tags: ["poetry", "art", "programming", "aesthetics"]
draft: false
image:
  placement: 3
---

Reading a paragraph of text requires a linear pass from
left to right. That is because of how our writing system is
built; if we were in the Middle East the direction would be the
opposite, right to left. Reading is linear, one-dimensional.
Unlike spoken communication, for example, which has
2 or maybe more dimensions. When we talk we don't just use speech; there is
body language, the gestures that go with what we say, the
limbic response, and so on.

How many dimensions does a program's code have?

Writing a program is not the same as writing prose. It is closer to
poetry, especially the experimental kind of poetry that uses visual
devices to add more expression, like this
[calligram](https://es.wikipedia.org/wiki/Caligrama) by
[Apollinaire](https://es.wikipedia.org/wiki/Guillaume_Apollinaire):

{{<figure caption="Calligram by Apollinaire" src="Guillaume_Apollinaire_Calligramme.jpg">}}

Our great poet [Vicente Huidobro](https://es.wikipedia.org/wiki/Vicente_Huidobro) also
ventured into calligrams. This is the first one he made,
the [harmonic triangle](https://upload.wikimedia.org/wikipedia/commons/6/6d/Triangulo_armonico.svg):

{{<figure caption="Vicente Huidobro's harmonic triangle" src="triangulo_armonico.png">}}

Besides visual poetry, Apollinaire proclaimed the virtues of
automatic writing, and if there is one thing many software engineers
aspire to it is automatic programming. But that is where the limit lies,
because what may work for poetry looks impossible in
software development.

## Style and clarity

The style of code is dictated by the programming language, but
the ability to express yourself properly lies with the programmer.

Consider this Haskell fragment:

```haskell
qsort (p:xs) = qsort [x | x<-xs, x<p] ++ [p] ++ qsort [x | x<-xs, x>=p]
```

Compared with this one:

```haskell
quicksort (p:xs) = (quicksort lesser) ++ [p] ++ (quicksort greater)
    where
        lesser  = filter (< p) xs
        greater = filter (>= p) xs
```

The same algorithm, expressed in different ways. The first form is
completely linear. The second is more in the spirit of the calligrams,
and it is certainly clearer.

Unfortunately many programmers with a huge ego, eager to
show off their deep knowledge of the intricate tricks and techniques
of their code, prefer to write things like the first fragment (this is
a sin of youth that I have also committed, and later regretted).

[Kernighan and Pike](https://cm.bell-labs.com/cm/cs/tpop/index.html) explain that the
practice of programming requires **Simplicity, Clarity and
Generality**.

Style has to do with clarity. That means our
code must express our intent as sharply as possible.
Code should not only be clear; I believe it should also have style, or,
as some say, **beauty**.

Beauty in code is analyzed in depth in the
book [Beautiful Code: Leading Programmers Explain How They Think](https://www.amazon.com/gp/product/0596510047/ref=as_li_tf_tl?ie=UTF8&tag=lanaturaledel-20&linkCode=as2&camp=217145&creative=399377&creativeASIN=0596510047)![](https://www.assoc-amazon.com/e/ir?t=lanaturaledel-20&l=as2&o=1&a=0596510047&camp=217145&creative=399377),
by Andy Oram and Greg Wilson.

I can't leave out Dijkstra:

> "Programming should be like mathematics, and that beauty is the
> business of mathematics."

The aesthetic sense is built into the circuitry of our
brain, which is why the call to write beautiful code is not an
irrational request. Quite the opposite. Many scientific discoveries
have been guided by an aesthetic sense.

There are people who disagree. One famous argument is 
[Code Isn\'t Beautiful](https://www.codinghorror.com/blog/2008/02/code-isnt-beautiful.html),
by Jeff Atwood, the blogger who created StackOverflow. Atwood criticizes
Oram and Wilson's book. The essence of his argument is this:

> *"Ideas are beautiful. Algorithms are beautiful. Well executed ideas and
> algorithms are even more beautiful. But the code itself is not
> beautiful. The beauty of code lies in the architecture,
> the ideas, the grander algorithms and strategies that code
> represents. The code samples presented are indeed clear,
> readable, and well written. But they are weak evidence of beauty; it's not
> the language that is inherently beautiful.*
>
> *Barroom doggerel expressed in French or Russian is never
automatically elevated to the level of poetry. So when the
Beautiful Code authors proffer pages of code – real live production code –
and ask us to see the beauty, the code doesn't help. It gets in the way.
It's been a long time since I found*
>
>     *dst++ = *src++
>
> *beautiful.*\
> *Focusing on the code is exactly the wrong approach.
> It's like a detailed technical description of the paints, brushes, and
> techniques used to paint the Mona Lisa, without any of the historical
> or artistic context that makes it such an important painting."*

I can't help being amused by the Mona Lisa example,
considering [what we have discussed on that subject](/en/blog/lnds/2011/07/12/circular-reasoning/).

To defend the argument that beauty matters, I invite you to
think back over everything I have written lately
about the [problems with reason](/en/blog/lnds/2011/08/22/the-problem-with-reason/) and
with rational, common-sense thinking. Atwood presents a
common-sense argument, mainly a rational and idealist one, a Platonic one:
code is not beautiful, ideas are. It is surely the result of his
technical training, and many engineers fall into this kind of
reasoning.

I am going to borrow part of the [argument by Maarten Van Emden](https://vanemden.wordpress.com/2010/10/05/in-defense-of-beautiful-code-2/),
author of [A Programmer\'s Place](https://vanemden.wordpress.com/), one of
my favorite blogs, to defend the need for beauty in
code.

Atwood compares code to the paint (the pigments) of a painting. If
you only look at the pigments of Van Gogh's Irises and not at the painting, then
you won't experience its beauty. Similarly, if you only see the code, and not
what is behind it, then you won't see its beauty.

{{<figure  caption="Van Gogh's Irises, painted in 1889, when he voluntarily committed himself to the mental hospital at Saint-Rémy" src="VanGoghIrises.jpg">}}

But there is a difference, because a lot of people have the innate ability
to appreciate the beauty of Van Gogh's Irises, but don't have the
ability to appreciate a text. Text takes work; a text
has to be worked through to a greater or lesser degree. If Van Gogh had spoken or
written about the idea of the Irises, it is very unlikely we would have
appreciated its beauty.

Beauty has to be embodied, and in the case of painting
beauty is embodied in the paint and the canvas. The paint (the pigments)
gets in the way if you look at it the wrong way. That is what happens with
the authors of Beautiful Code: if they only talked about the idea, about the
algorithm, it wouldn't be enough. You need the code, in the same way
that you need the canvas and the paint.

It is said that when asked about the meaning of his painting,
Picasso answered *"Madam, if I could tell you I would be a writer, but
as it happens I am a painter."* A painting is presented to us as something
we either appreciate or we don't. You see a painting and decide whether you like it or not, take it
or leave it.

With written text things are different. In the case of code the
author is a writer, so he has to work for his code to be
appreciated, and to achieve that appreciation clarity matters, and
therefore style. This is the phenomenon of beauty in code.

Next I am going to quote one of Van Endem's examples, which
shows this effect of the importance of beauty in code.

Consider the problem of reversing the array segment a\[p..q\].
The job is to write the function:

```c
    void rev(int a[], int p, int q);
```

We will assume the function swap exists, defined like this:

```c
    void swap(int a[], int i, int j) {
      int temp = a[i]; a[i] = a[j]; a[j] = temp;
    }
```

To reverse an array segment, you swap each element of the
left half of the segment with its mirror image in the right half,
for example like this:

```c
    void rev(int a[], int p, int q) {
      for(int i = (p+q)/2; i >= p; i--)
         swap(a, i, q-(i-p));
    }
```

Looking at this code we can't help wondering whether it is correct
to initialize the variable i with the value (p+q)/2. What happens with segments
of even length, or odd? Shouldn't I introduce another variable to save
that computation in the call to swap?

Let's compare that version with this one:

```c
    void rev(int a[], int p, int q) {
      for(; p<q; p++,q--)
         swap(a, p, q);
    }
```

Ah! The elegance of this solution is undeniable, but what do you say about
this one?:

```c
    void rev(int a[], int p, int q) {
      while(p<q)
          swap(a, p++, q--);
    }
```

Isn't it better? More than that, even: don't you appreciate the beauty of
this last version? Its elegance and clarity?

The definitions of these functions embody the same idea and the same
algorithm. If Atwood were right, none of them could be more beautiful than
another. But look: the code can make a big difference.

"Beauty Is Our Business" is the book published as a tribute (\*) to Dijsktra
when he turned 60. The title comes from a phrase of the great master:

> "\... when we **recognize the battle against chaos, mess, and
> unmastered \_complexity as one of computing sci**ence\'s major
> callings, *\_we must admit that \'Beauty Is Our Business\'"
>  \[[EWD697](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD06xx/EWD697.html)\]*

We should consider the question Dijkstra raised: should we
allow ugly programs?

I hope the examples above make you consider this
proposal. After all, one of the virtues of a programmer is 
[hubris](/en/blog/lnds/2011/03/28/hubris/), and how
can you take pride in code written in a sloppy,
inelegant way?

(\*) [Beauty Is Our Business: A Birthday Salute to Edsger W. Dijkstra
(Monographs in Computer
Science)](https://www.amazon.com/gp/product/0387972994/ref=as_li_tf_tl?ie=UTF8&tag=lanaturaledel-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0387972994)![](https://www.assoc-amazon.com/e/ir?t=lanaturaledel-20&l=as2&o=1&a=0387972994&camp=217145&creative=399373). It
is on my [wishlist](http://amzn.com/w/2U5ABR4HWQ7ZY), dear reader :wink:
