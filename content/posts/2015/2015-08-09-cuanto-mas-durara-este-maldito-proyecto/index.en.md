---
title: "How much longer will this damn project last?"
authors: [admin]
date: 2015-08-09T08:25:11-03:00
slug: "how-much-longer-will-this-damn-project-last"
tags: ["projects", "estimates"]
draft: false
---
You have surely faced a project that seems like it will never
end, eternal, one that is already wearing you down beyond what's possible.
How much longer will it last? you ask yourself. You are not going to like the answer,
but it may shed some light on how to deal with what's left of it.

## **The mediocrity principle**

In 1969 the mathematician and astrophysicist
[John Richard Gott](//es.wikipedia.org/wiki/John_Richard_Gott)
was standing in front of the
Berlin Wall. Like so many of his contemporaries, he wondered
how much longer this division between the two Germanys would last.

He worked out and formulated a line of reasoning, later known
as the Mediocrity Principle, to estimate the life of the wall
using a single variable: the amount of time it had been
standing.

The [Mediocrity Principle](//es.wikipedia.org/wiki/Principio_de_mediocridad) is an
epistemological notion which holds that there are no privileged
observers for a given phenomenon.

Gott knew the wall had been standing for 8 years at that point, and
he figured that throughout the Wall's whole life a multitude of people
had asked themselves the same thing he had, and therefore there was no
reason to assume he was asking it at a
significant moment in history.

With that he calculated that the wall had between 2.4 and 24 more years
to live. The wall fell in 1989, 20 years later.

Gott applied the following formula:

![](//d2dspjyoh5c79p.cloudfront.net/5adaea52-3e9a-11e5-a640-83ed6ac97527-aa9f18b7)

In this inequality the remaining time is calculated from two
parameters: ***T\_actual***, which is how long the observed phenomenon has
been going on (eight years in the case of the wall), and *f*, which is a
confidence factor, a value between 0 and
1.

For his calculation Gott used a value of 0.5 for *f*, that
is, he considered there was a 50% probability that the wall
would last less than 24 more years.

Faced with criticism, in 1993 Gott applied the principle again: "**Specifically,
Gott drew up a list of the 44 shows playing
on Broadway on a given day, May 17, 1993, and
predicted that the ones that had been running the longest would be
the ones that stayed open the longest, and vice versa. His prediction
proved correct in 95% of the
cases.**"[^1]

In essence, Gott's formula gives us an approximate range for the
remaining time, but it has a problem: the higher our
confidence (f close to 1), the wider the range gets. With lower
confidence the range gets narrower. It's a bit like Heisenberg's Uncertainty
Principle. If we want more confidence we have to
sacrifice prediction error, and if we want a tighter range
we have to sacrifice confidence. With 100% confidence the solution
range becomes infinite, as you can see in this
chart[^2].

{{<figure caption="Chart of how the range between Tmin and Tmax varies in Gott's inequality, taken from [^2]" src="//d2dspjyoh5c79p.cloudfront.net/690e4b07-3e9d-11e5-a640-83ed6ac97527-aa9f18b7">}}

## **The Lindy effect**

In 1964, in The New Republic magazine, the author [Albert Goldman](//en.wikipedia.org/wiki/Albert_Goldman) wrote about what he
called Lindy's Law: "the future career expectancy of a television
comedian is proportional to the total amount of his
past exposure on the medium".
[Lindy's](//en.wikipedia.org/wiki/Lindy%27s) is a restaurant on
Broadway, New York, where comedians got together after
performing in their shows.

{{<figure caption="Lindy's restaurant, which gave this effect its name" src="//d2dspjyoh5c79p.cloudfront.net/c810ff28-3e9e-11e5-a640-83ed6ac97527-aa9f18b7">}}

The famous mathematician [Benoit Mandelbrot](//en.wikipedia.org/wiki/Benoit_Mandelbrot) coined the term Lindy effect in his book [The Fractal Geometry of Nature](//amzn.to/1IBHSQL). Later [Nassim Nicholas Taleb](//es.wikipedia.org/wiki/Nassim_Taleb) developed it in greater depth in several of his works.

Taleb's reformulation in his book [Antifragile](//amzn.to/1DFfLDi) is
the following:

> "For the perishable, every additional day in its life translates into a
> shorter additional life expectancy. For the nonperishable, every additional
> day may imply a longer life expectancy."

Or in simpler terms: given that we have been listening to Beethoven for more
than 200 years, to the Beatles for 50 years and to Taylor Swift for 10, we will
probably keep listening to them for another 200, 50 and 10 years
respectively.

But, according to Mandelbrot, if they fall out of favor, they will do so in half the
expected time. That is, in Taylor Swift's case, her
relevance may last 10 more years, but if she fades, it will happen within 5 years.

Taleb puts it the following way when talking about the life of a project:

> Let's say a project is expected to finish in 79 days\[..\] On
> day 79, if the project has not finished, it will be expected to take another 25
> days to complete. But on day 90, if the project still has not been
> completed, it should have 58 more days to go. On day 100,
> it should have 89 more days. On day 119, another 149 days
> should be expected. On day 600, if the project is not
> done, you will be expected to need an extra 1,590 days. As
> you see, the longer you wait, the longer you will be expected to wait.

Which isn't very encouraging, by the way.

The life of projects tends to grow exponentially, so it's
better to split them up, following a strategy of small,
continuous deliveries, with errors kept local.

Things that have stood the test of time tend to endure. And in
the case of projects, the longer they drag on the more likely they are to
keep dragging on. "What doesn't kill you makes you stronger", says Nietzsche,
and it seems projects are very tough beasts.

The trick is to turn a project into something perishable. As
[Zed Shaw advises](/en/blog/lnds/2012/10/26/kill-it-early/),
it's better to kill a project early. If you don't, you will face
the Lindy effect.

[^1]: Taken from the article [¿Cuánto tiempo dura algo? De la inecuación
de Gott al efecto Lindy](//jmonzo.blogspot.cl/2013/10/cuanto-tiempo-dura-algo-de-la.html) (How long does something last? From Gott's inequality to the Lindy effect) on
the blog [Pensamiento Sistémico](//jmonzo.blogspot.cl/).

[^2]: In the article from note [^1] the author shares an Excel
spreadsheet, which is where the chart shown comes from.
