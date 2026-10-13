---
title: "Principles and algorithms of concurrency"
authors: [admin]
date: 2015-11-15T08:25:11-03:00
slug: "principles-and-algorithms-of-concurrency"
draft: false
tags: ['books', 'reviews', 'concurrency', 'algorithms']
image:
  placement: 3
---

"Sharing is bad... At least in concurrent programming 😜" \--
[Tweet from November 13, 2015](//twitter.com/lnds/status/665126995882328064)
{{<x user="lnds" id="665126995882328064">}}

About 10 years ago I suffered through a project that involved
biometric devices and security cameras talking to each other.
"How long will this project take?" my partners asked. "About six
weeks", I answered naively. In the end it took me several months,
headaches and bad moments.

The main problems had to do with a set of libraries and
APIs that had serious issues handling concurrency.

It wasn't the first time I had dealt with these problems in my
professional life. A few years ago I told you
["some debugging stories"](/blog/lnds/2010/08/21/historias-de-depuracion),
one of which involved a
["race condition"](//es.wikipedia.org/wiki/Condici%C3%B3n_de_carrera).
Also, not long ago, I ran into a synchronization problem
in a small application I wrote for sending out
emails.

In all those cases I estimate that 50% of the problem was my lack
of adequate knowledge of concurrent programming. Even though
at university, in operating systems courses and even in
seminars, you are taught these concepts, you don't get to absorb them in
the depth you need. At least the education you get at
university works as a guide, and I'm grateful for it, but it would be good to have
practical, concrete references on the problems you face
when you deal with concurrent
programming.
Another important point is that what I learned in the eighties doesn't
necessarily apply to the reality of today's hardware and
systems.

That's why, when Ricardo Galli sent me a copy of his book
["Principios y Algoritmos de Concurrencia"](http://amzn.to/20V5Jqb) (Principles and Algorithms of Concurrency),
I decided that besides reading it I would promote it among my colleagues and readers.
That's what I'm taking the chance to do now.

A few days ago I had a brief chat on the subject with the man who taught
me a seminar on parallel computing, Jo Piquer
([\@jpiquer](//twitter.com/jpiquer)), and I ventured to recommend this
book to him. I hope he spreads the word among his academic colleagues interested
in the subject.

But the most interesting thing about this book is that it is written for the
professional programmer, who didn't necessarily get university
training in these topics, and for those who face these problems and
need to update their knowledge.

In my case I read it with great interest and learned some very interesting things.

The section I found most interesting was the one titled "The reality
of modern hardware", which was very revealing and where I got to understand
why things that should work in theory don't work the way you
expect (especially if you attempt, quixotically, to build your own
concurrent libraries and data structures).

Ricardo is someone who firmly believes in the idea that
"sharing is good", as his contribution to the
Spanish-speaking free software community shows (I hope he enjoys the
joke in my tweet quoted at the top of this post). He is also a great
writer. I don't know how he does it, but he manages to make a very technical subject
pleasant and entertaining.

The other interesting thing is that to explain the concepts Ricardo turns to
several languages within reach of any programmer, without resorting to
esoteric academic languages. The examples are in C, Java, Python and
Go, and at one point he has to use ARM assembly (on a Raspberry Pi!),
but don't let that last one scare you: if you read the book the complexity is
handled gradually, and the reason for using assembly is consistent with
the problem being solved.

It's a very practical book, even in the first part, which covers the
more theoretical foundations, absolutely necessary to understand what
comes next.

One of Ricardo's goals was to write a "readable technical
ebook", and he pulls it off quite well. When he shows code he does it with
a brevity I'm grateful for. Reading examples that take up many pages of
code on a tablet or a Kindle is torture. Here it
works quite well. Choosing Python to express short code
is the key to that achievement. On this point I have to congratulate
Ricardo: it must be the only technical programming book I have read
in full on my Kindle, without having to turn to my Mac or the iPad to
keep all the code in view. This may seem like a trifle to you,
but if you are in the habit of reading a lot of programming books in
ebook format, you will understand and appreciate it.

It might be interesting for Ricardo to expand his examples on GitHub
using other modern languages such as Rust, which has channel support
somewhat different from Go's, and Scala, to explore the actor
model. I suppose he'll take that on in a second edition (because
I hope it does so well that he's encouraged to write a second
edition).

In short, I think Ricardo has written a fundamental book for the
education of every programmer. I recommend it and I hope we can
discuss it together in the comments.

You can find the book on [Amazon](//amzn.to/20V5Jqb) and on [Google
Play](//play.google.com/store/books/details?id=cLXfCQAAQBAJ).
