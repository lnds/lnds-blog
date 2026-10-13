---
title: "Software plagiarism"
authors: [admin]
date: 2007-01-26T08:25:11-03:00
slug: "software-plagiarism"
tags: ["plagiarism", "software"]
draft: false
---

I read the following paragraph on a well-known blog:

> "When a programmer writes a block of code he is creating a
> recipe for achieving a specific result. There is a limited number of
> paths to the same place, some faster and more elegant
> than others. They say perfect code is code to which nothing can be
> added and from which nothing can be removed. If we consider the very nature of
> programming languages, the more perfect that code is, the more
> likely it is that another programmer with the same purpose and the
> same talent will reach the same conclusion. This is not considered
> theft, unless the length of the match is statistically
> implausible. In literature and in art, that kind of coincidence
> is practically impossible. An immortal monkey typing
> endlessly on a typewriter may end up signing a Hamlet but,
> for now, no writer is known to have that much time."[^1]

The quoted text is part of a very interesting article, about which
I have little to say, since literary plagiarism is not something I know
well or find particularly interesting. But the claims in this particular
paragraph do interest me, because their validity is worth analyzing,
and because from a professional standpoint I find it interesting to know
what plagiarism of a computer program actually is.

[^1]: [Taken from La PetiteClaudine](http://www.lapetiteclaudine.com/archives/010582.html)

## The authors of Hamlet

One of the problems with infinity is that it's a very difficult concept.
We know Shakespeare wrote Hamlet, but the claim that an
"immortal monkey typing endlessly on a typewriter may end up
signing Hamlet" is also true.

In other words, from a logical point of view, Hamlet has more than 1 author. In
fact it has infinitely many authors: just think of infinite alternate
realities. In one of them I necessarily have to be the author of
Hamlet, and in another *you* are the author of Hamlet.

Although this is logical, it isn't necessarily true, because we know
that time has a beginning, and therefore eternity as such is no such
thing. I'm not going to start philosophizing about the nature of time, but
suffice it to say that physics, as we know it so far, tells
us the monkey does not have infinite time to write the works of
Shakespeare.

However, we have to be careful with how we interpret this
claim. What we are being told is that if the monkey had
infinite time, then the probability that it ends up writing
Hamlet is 1 (or 100%). But if we actually sit a monkey down to type
at a keyboard, the probability that it writes Hamlet is very low,
but as far as I know it isn't zero, so it is something that can
happen. From a probabilistic point of view, two authors can
end up writing the same poem; it's just that from a statistical
point of view it hasn't happened.

## The functional copy

The other claim, a more interesting one, is that if a program
is like a recipe, then two programmers can arrive at
similar solutions, but in the long run, as *the program is
perfected*, the result must be unique.

That claim is false. While it may be true at the functional level, it
is not true at the implementation level. Take as an
example [Meneame](http://www.meneame.net/) and my
project [BlogMemes](http://www.blogmemes.com/). The two are similar,
but Menéame has many more features, and Blogmemes is still an
incomplete project.

Yet, if I wanted to, I could reproduce all of Menéame's
functionality without repeating its authors' code. Curiously, both
projects [were born around the same dates](/en/blog/lnds/2006/02/01/blogmemes-and-meneame-two-different-systems/).

Suppose I decided to copy Menéame's functionality. It's
entirely feasible. It may take time, and the two systems may perform
differently, but the interesting thing is that you can indeed
write code that exactly replicates the observable behavior.

However, if I copied the graphics and the style, that would be considered
plagiarism beyond any doubt (and to be honest,
[I wouldn't like to get into it with Galli again](http://mnm.uib.es/gallir/)),
but if I copied the functionality, what would happen?

There are many cases of this kind, for example the
[famous Lotus v. Borland case](http://digital-law-online.info/cases/30PQ2D1081.htm). The Supreme
Court established that what Borland had developed was a method of operation,
which cannot be protected by copyright. That is interesting, and
it's probably the reason nobody says anything about there being
so many cloners of the [digg](http://www.digg.com/) interface.

## The perfect program

The third interesting claim is:

> "They say perfect code is code to which nothing can be added
> and from which nothing can be removed. If we consider the very nature of programming
> languages, the more perfect that code is, the more likely
> it is that another programmer with the same purpose and the same talent
> will reach the same conclusion"

**What does it mean to find the perfect code?**

It really depends on the criteria we set. For some, perfect
code would be the most compact. For others, the most efficient in its
use of time and space at run time. The interesting thing is that for a
program we can measure whether it is correct, whether it is efficient, and
whether it is compact. But to paraphrase [Donald Knuth](/en/blog/lnds/2006/09/23/knuth-answers-all-questions/),
"we can prove a program is correct, but not that it is
free of bugs".

So a third criterion would be that the program is free of bugs.

The perfect program would be one that meets the functional
specifications, is efficient at run time, in time and space, and is
compact.

However, and to wrap up this post, there is a paradoxical result that
probably makes the search for the perfect program impossible,
unless, like the monkey, we have infinite time at our
disposal.

In algorithmic information theory there is a function called
[Kolmogorov complexity](http://en.wikipedia.org/wiki/Kolmogorov_complexity): K.

Suppose that the result of running the "perfect program" P,
which takes as input a bit string E, is the bit string S; that
is, P(E) = S. Then the Kolmogorov complexity of the string S,
denoted K(S), is equal to the size of the most compact program that
outputs S, that is, K(S) = \|P(E)\|, where the bars
denote the size of the program.

One of the results of algorithmic information theory is that
the function K(S) **is not computable**. In general terms, this
means there is no shortcut to finding the most compact program for
solving a problem.

There is no automatic way to compute the most compact program. In
fact, proving that a program is the most compact one can be a formidable
task, and an impractical one.

The engineer solves a problem, fixes the bugs and optimizes the
code, using "field measurements", and rarely worries about whether
he has built the perfect program, only the most effective one with
the fewest possible bugs. We don't have time for
perfection.
