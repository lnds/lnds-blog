---
title: "Virtues and flaws"
authors: [admin]
date: 2010-11-21T08:25:11-03:00
slug: "virtues-and-flaws"
tags: ["virtues", "flaws", "programming"]
draft: false
---

There were several answers to [Friday's question](/en/blog/lnds/2010/11/19/the-three-great-virtues-of-a-programmer/)
about the three virtues of a programmer according to Larry Wall:
laziness, impatience and hubris (or pride).

One answer came straight to my inbox:

> "Laziness? We rely on what we already know\... We say we'll knock it
> out in a couple of days when it takes us a month to program.
> Impatience? We don't go to sleep until we see a subroutine do what we
> want it to do. Function, library, class\... Nooo, let the subroutine
> do it. Pride? I wrote this program and nothing else compares to it\...
> And if something does, it has bugs, so don't compare it and don't
> belittle it. You wish you had a programmer like me."

Three of the programmer's virtues proposed by Larry Wall correspond to
2 of the deadly sins: sloth and pride. And impatience can sometimes be
considered a flaw too. So right from the start there is a certain
ambiguity in these three virtues.

The second edition of Programming Perl spells out what Wall means by
these **three virtues of a good programmer**:

1.  **Laziness**: The quality that makes you go to great effort to
    reduce overall energy expenditure. It makes you write labor-saving
    programs that other people will find useful, and document what you
    wrote so you don't have to answer so many questions about it.

2.  **Impatience**: The anger you feel when the computer is being lazy.
    This makes you write programs that don't just react to your needs,
    but actually anticipate them. Or at least pretend to.

3.  **Hubris**: Excessive pride, the sort of thing Zeus zaps you for.
    Also the quality that makes you write (and maintain) programs that
    other people won't want to say bad things about.

So that is the spirit of these three virtues.

Laziness is not about procrastinating, or doing things in a rush, or
trying to get out of work. No, you have to do whatever it takes to avoid
extra work later on. Impatience is about making programs optimal and
efficient, programs that anticipate error conditions and don't make you
waste time trying to understand why they failed, because we programmers
want a quiet life creating, not debugging. So laziness and impatience
push toward quality. Finally, hubris is about the pride of knowing we
deliver a quality product, so that we expect congratulations from our
users and colleagues for the excellence of our work.

Practicing these three virtues is not easy, and the reason,
paradoxically, is that Laziness, Impatience and Hubris, as flaws, keep
people from honoring them.

**The three flaws of a bad programmer**

1.  Laziness makes people skip the documentation and do things at the
    last minute, quickly, without caring whether the code is easy to
    maintain.

2.  Impatience pushes people to ship fast, without review, products
    that deliver the functionality but at the expense of performance.
    Or the problem gets dumped on the infrastructure: an inefficient
    function or algorithm gets written in order to deliver fast, and it
    devours the machine's resources indiscriminately.

3.  And finally, hubris, which makes programmers refuse to have their
    code reviewed, refuse to admit their programs have defects (put more
    RAM in the server!), or refuse to document.

As you can see, everything has two sides. The three virtues of the good
programmer are threatened by the three flaws of the bad programmer,
which in the end are the same thing.
