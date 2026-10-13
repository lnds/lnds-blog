---
title: "What do you need my Twitter password for?"
authors: [admin]
date: 2009-01-07T08:25:11-03:00
slug: "what-do-you-need-my-twitter-password-for"
tags: ["twitter", "security"]
draft: false
image:
  placement: 3
---

I'd been meaning to write about this problem for a while, but reading 
[this post](http://www.manzanamecanica.org/2009/01/comportamiento_grupal_el_caso_de_twitterank.html)
today on [Manzana Mecánica](http://www.manzanamecanica.org/) made up my mind.

It's true that a sociological 
(or [ethological](http://es.wikipedia.org/wiki/Comportamiento_animal)) explanation of
user behavior is very interesting, but there are other technical and
even ethical aspects that I find missing from almost all 
[the analyses of these cases](http://scobleizer.com/2009/01/01/twitter-spam-effective-or-idiotic/).


First, this is a serious problem, because we are training users to
believe it's fine to hand over their emails, passwords and contact lists
on any site. This is taking advantage of herd behavior, as [Mig makes very clear](http://www.manzanamecanica.org/2009/01/comportamiento_grupal_el_caso_de_twitterank.html).

Second, because it is unacceptable that [Twitter](https://www.twitter.com/),
having noticed the problem [a long time ago](http://code.google.com/p/twitter-api/issues/detail?id=2), still hasn't fixed it, and what's worse, they themselves
designed the solution to this problem, and they've had it sitting on the
shelf for more than a year!

The availability of [API](http://es.wikipedia.org/wiki/API)s is one of
the hallmarks of many Web 2.0 services (like Twitter or Facebook), and
they are what gives those services their characteristic dynamism (aside
from the viral promotion benefits of creating an ecosystem of related
services).

There are many services that use these APIs.

A local example: the [Bittr](http://www.bittr.org/) service, which lets
you send updates to Twitter using text messages (SMS or MMS), needs you
to hand over your Twitter login details. In this case the developers
swear up and down that the passwords are safe (encrypted and all that),
and I believe them, but I'd still like to know how they implement it,
because it's a fairly complicated problem. But guys, take note, and
repeat it like a mantra: **you must never ask a user for their password
to a third-party site (or service)**.

We keep seeing more sites that implement this bad practice, and so there
will always be horror stories to go with it.

Because this is a serious problem, known for a long time. It's a bad
practice, or as some propose, a design antipattern: [The
Password AntiPattern](http://adactio.com/journal/1357/).

The proposal is this:

> even if it costs me a contract in the short-term, I will refuse to
> implement any kind of interface that involves asking the user for a
> password from a third-party site.


The extension of this problem is when the user is also asked to
[hand over their contact list](http://factoryjoe.com/blog/2007/12/19/public-nuisance-1-importing-your-contacts/).



You're going to tell me, "all good, Eduardo, we understand your concern,
but we still need to access the user's data".

The truth is the people at Twitter noticed this problem and started
working on a solution, and they found one, together with a bunch of
smart people from Google and other services, and a year ago they solved
this problem. It's called [OAuth](http://oauth.net/about/),
but for some mysterious reason they still haven't implemented it at
Twitter, and they're only going to start beta testing it in the coming
months!

This is no longer a technical problem, because it is already possible to
extend this kind of service without ever having to ask the user for
their personal login information to third-party services.

I don't know why Twitter [doesn't implement OAuth](http://helloform.com/blog/2009/01/on-twply-and-giving-out-your-twitter-password/),
given that this project was born out of their own concern to solve the
problem.

I'll leave you with a thought I [read somewhere](http://adactio.com/journal/1357/): "in this new reality of the
social web, rather than asking how I can stretch (or abuse) this tool or
service, the right thing is to ask to what extent what I'm about to do
has a positive effect on my world."
