---
title: "Stop the clock, squash the bug"
authors: [admin]
date: 2010-05-27T08:25:11-03:00
slug: "stop-the-clock-squash-the-bug"
tags: ['bugs', 'programming']
draft: false
---
 
![fast-clock.gif](fast-clock.gif)

If this blog were what I once meant it to be, I would want it to look
like [Word Aligned](http://wordaligned.org/), and to give you an idea of
what I'm talking about, I translated an article from that extraordinary
blog into Spanish. I hope you enjoy it (even the less technical among
you). (\*)

**Stop the clock, squash the bug[^1]**

**By Thomas Guest (Word Aligned)**

Which clock is the best?

![stopped-clock.gif](stopped-clock.gif)
![slow-clock.gif](slow-clock.gif)
![fast-clock.gif](fast-clock.gif)

> We can easily rule the one which has stopped … Or can we? In "The
> Rectory Umbrella" Lewis Carroll argues otherwise.[^2]
>
> None of these clocks is much good. The first has stopped, the second
> loses a second every minute, the third gains a second every minute. At
> least it's easy to see the problem with the first: we won't be tempted
> to patch it.

[Original article in English](http://wordaligned.org/articles/stop-the-clock-squash-the-bug)

**Translator's notes**

**(\*) This article was originally published in July 2008, but you know
what happened; this version has a few corrections.**

[^1]: In the Spanish version, "bicho" stands for bug, a programming defect.

[^2]: Word Aligned refers to The Rectory Umbrella, but Carroll's text, which I copied in Spanish from "Matemática Demente", appears there under the name "Los Dos Relojes" (The Two Clocks). Text copied from the book: "Matemática Demente". Lewis Carroll - Translation by Leopoldo María Panero, Tusquets Editores, Barcelona 1999

As [the author points out](http://wordaligned.org/articles/stop-the-clock-squash-the-bug#fn1link), it is not correct that trying to request 4294967295 bytes causes an error: malloc returns NULL in the event of a failure, and the standard C++ operator new is defined to throw the `bad_alloc` exception.

Images taken from Word Aligned, from the original article.
