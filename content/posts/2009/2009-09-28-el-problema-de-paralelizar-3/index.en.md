---
title: "The problem with parallelizing 3"
authors: [admin]
date: 2009-09-28T08:25:11-03:00
slug: "the-problem-with-parallelizing-3"
draft: false
tags: ['parallel algorithms', 'parallelism', 'laws', "Gustafson's law", "Amdahl's law", 'FUD']
image:
  placement: 3
---

Although many people throw around the acronym
[FUD](https://www.catb.org/~esr/jargon/html/F/FUD.html), not many know
that it was [Gene Amdahl](/en/blog/lnds/2009/09/13/the-problem-with-parallelizing/)
who coined this famous acronym:

> "FUD is the fear, uncertainty, and doubt that IBM sales people
> instill in the minds of potential customers who might be considering
> Amdahl products."

In 1975 Gene Amdahl coined the acronym to describe the practices IBM
used to try to block the success of Amdahl Corporation, the company he
founded, whose product was IBM-compatible computers. A coercive
maneuver to keep customers from fleeing to the competition.

Today the term FUD is used for any tactic that uses disinformation as
a competitive weapon.

These are the side stories I like to find when I research a topic.

Curiously, there is a little disinformation and uncertainty attached to
Amdahl's law (in a different sense, of course).

First, Amdahl never formulated a law. In fact he didn't know people
called it that, and found out quite a while after his paper.

Second, in his paper he does not write the formula we gave earlier;
that was introduced by later commentators on his work.

Third, looking at his data Amdahl observes that the statistical curve
that fits is that performance is proportional to the square root of the
cost, and he cites Grosch's law of 1965:

> "The performance of a computer increases with the square of the cost.
> If computer A costs twice as much as computer B, you should expect
> computer A to be four times as fast as computer B."

Today Grosch's law is regarded as historical evidence of the mistaken
perceptions computer science has held (curiously, Moore's law was
formulated that same year).

Finally, Amdahl wrote his paper as part of a dispute he was having with
Daniel Slotnick, a professor at the University of Illinois and
architect of the controversial supercomputer [ILLIAC IV](https://en.wikipedia.org/wiki/ILLIAC_IV) (a story that deserves to be told another time)

![ILLIAC\_4.jpg](ILLIAC_4.jpg)

## **The controversy**

In the early 1960s computer design was running into the limit of
diminishing returns. Back then the idea was to give CPUs as many
instructions as possible, to make programs as small and as
memory-efficient as possible. This, of course, produced very complex
computers, especially in an era when CPUs were built by soldering
individual transistors by hand.

One solution to the problem that began to be explored at the time was
overlapping, which led to what we now know as
[instruction pipelining](https://en.wikipedia.org/wiki/Instruction_pipeline), which
lets a CPU work on small parts of several instructions at the same
time.

The other solution to the problem was parallel computing: building a
computer out of a number of general-purpose CPUs. The idea is for the
computer to keep all the CPUs busy, asking each one to work on a small
part of the problem and then gathering the results into the final
answer.

This was the context in which Amdahl wrote his article, after an
argument with Slotnick about the future of computer architectures.

That is why Amdahl's law should not be seen as a pessimistic view, or
as an attempt to put the brakes on massive processing.

In 1996 [Yuan Shi showed](https://www.cis.temple.edu/~shi/docs/amdahl/amdahl.html) 
that
Amdahl's law and Gustafson's law are the same, and that the confusion
comes from a problem of formulation. In fact there is a very important
prerequisite for applying Amdahl's (or Gustafson's) law: the serial and
parallel programs must take the same number of calculation steps for
the same input.

There are three possible relationships between the speedup and the
number of processors P:

-   ***Speedup \< P***, or sublinear speedup;
-   ***Speedup = P***, or linear speedup;
-   ***Speedup \> P***, or superlinear speedup.

Since any practical parallel program has to consolidate the final
answer in a serial step, the serial percentage in Amdahl's law is never
zero in practice. So, in theory, it is not possible to reach linear or
superlinear speedups.

But Yuan Shi discovered that it is possible to sidestep some of the
preconditions of Amdahl's law, and that linear or superlinear speedups
can be reached if an algorithm is put together cleverly.

In fact he proposes a class of algorithms that can be altered to
achieve superlinear speeds. One interesting result is that an O(n2)
sorting algorithm can be parallelized so that it gets a superlinear
speedup (breaking Amdahl's law), while this cannot be done with an
O(n lg n) sorting algorithm.

What happens is that when we parallelize certain algorithms we can
alter their structure, so that for certain input data their performance
will be better than the serial version's. I won't go into details; you
can [read it in the paper](http://www.cis.temple.edu/~shi/docs/amdahl/amdahl.html).

The important thing to note is that Amdahl's law cannot be used as an
argument against massive parallelization because, although there is a
limit and performance is generally sublinear, there are many problems
in which the serial part is very small and the improvement is
considerable. Gustafson's experiments are proof of this.

I started my research on this subject inspired by a piece in the
**September** issue of [CACM](http://cacm.acm.org/). The piece quotes
an Intel researcher, Tim Mattson, urging us to program in parallel: "We
have come to parallel programming not because of the success of our
software, but because of the failure of our hardware." In the same
piece James Larus, a Microsoft researcher, asks for caution when we
tackle this subject: "the consequence of having to move to multicore is
that we have to figure out how to use parallelism in places where we
need better performance\... Not everything needs to be parallelized;
is that going to make Word run faster?"

And it is Larus who reminds us of Amdahl's law, because there will be a
lot of pressure to parallelize applications and many of those efforts
may be misdirected.

On the server side (and in cloud computing), parallelization works
quite well, because the kinds of problems you solve on that side can be
parallelized almost naturally. But if we want to improve performance on
our multicore computers on the client side, or on our desktop, we face
an interesting challenge.

In many cases it is probably better to spend the effort improving a
sequential algorithm than trying to parallelize it.

That is the lesson Amdahl's law gives us. Will and urgency to solve
problems in one particular way (in this case, parallelizing) are not
enough. You have to analyze the complexity of the problem, and Amdahl,
with a few simple arguments, noticed that there is a limit inherent to
the problem of parallelizing. Other researchers such as Gustafson and
Yuan Shi improved the analysis and formulated the real conditions under
which this law applies.

Amdahl's law can be "broken" when problems are "embarrassingly
parallel", or when we run into the classes of algorithms identified by
Yuan Shi, but in that last case the conditions are not always easy to
find.

This problem of parallelism is full of open problems, very interesting
ones, and it is an area of a lot of cutting-edge research right now,
especially with plenty of funding from the big makers of multicore
chips.

To wrap up, and for those who are interested, I leave you this video, in which 
[Mark Hill](http://pages.cs.wisc.edu/~markhill) presents the impact of Amdahl's
law on the design of current and future multicore processors:

    
