---
title: "How to beat Santa Claus"
authors: [admin]
subtitle: "or how Netflix pulls off its magic" 
date: 2017-12-25T08:25:11-03:00
slug: "how-to-beat-santa-claus"
draft: false
tags: ['christmas', 'technology', 'microservices', 'architecture', 'Netflix']
image:
  placement: 3
---


Nobody beats Santa Claus at logistics, also known
as Papá Noel, or Viejito Pascuero in Chile. I mean, who else could
deliver presents to every child in the world in one night? Sure,
he has twenty-four hours to do it, but even so, to
cover each time zone he has barely sixty minutes to
land on every house, drop off the presents and take off again.

The trick is that Santa Claus uses magic, so there is little we can
do about it. Until we reach that level of
technological development we won't be able to beat him.

[Clarke's](https://es.wikipedia.org/wiki/Leyes_de_Clarke) third law says:

> "Any **sufficiently advanced technology** is
> **indistinguishable** from **magic**".

So the question is whether we have technology in this world that looks like
magic.

Of course we have several. Think of Google. When you search for something on
that service, how can it possibly find, so fast, what
we need in such a vast amount of
information?

It is the magic of a technology known as
[Information Retrieval](https://en.wikipedia.org/wiki/Information_retrieval), without
which we could not have that miracle of modern society, the
search engine[^1].

![](https://d2dspjyoh5c79p.cloudfront.net/fbcb5c35-e97a-11e7-a030-2b5831f8ecb5-aa9f18b7)

In IT we have developed several kinds of magic, sorry,
technologies that are astonishing. Technologies that, just like the Viejito
Pascuero, are capable of bringing joy, or at least emotions (of all
kinds).

Have you ever thought about how Netflix works?

Maybe Netflix is an example of how close we are to reaching
Santa Claus's magic.

![](https://d2dspjyoh5c79p.cloudfront.net/55320496-e97b-11e7-a030-2b5831f8ecb5-aa9f18b7)

Think about this: every minute hundreds of thousands of people
press play on some device to watch a movie or
TV series, the one they want to watch, the one that best fits their
tastes, and on top of that they enjoy it in great quality and without technical
interruptions.

How is it possible that I can watch the same movie on my phone,
computer, TV or tablet without the image quality seeming
to degrade?

The answer to that and other questions raised by the way
Netflix works comes from a brilliant and innovative software
architecture.

## Microservices

Suppose you develop a website. It will have several
features: user registration; if it is a commercial site then
it needs a payment module and a billing one; it will probably
have notifications; and the site's own functionality: if it is a
sales site, you'll have the catalog, the shopping cart, etc.

But what happens if you have to modify the payment module? Most likely,
to deploy the change you'll have to interrupt the whole
service. Can you imagine Netflix doing that?

Doesn't it bother you when your bank tells you it will be *"under
maintenance"* all weekend? What happens is that traditional
applications, like the one I just described, or your bank's
website, are "**monolithic applications**".

A change in one part of the system impacts all the rest, even if
some modules don't have much to do with each other. To make a
change you have to stop the whole machine and be very careful not to
break anything in the process, and that takes a lot of
time.

So, how do you ensure continuous change, with no interruptions to your
web service?

The key is a software development model called
[Microservices Architecture](https://en.wikipedia.org/wiki/Microservices).
Amazon and Netflix have been pioneers in developing this architectural
paradigm.

Netflix is not actually a monolithic site. Even though we get the
impression that it is just one big application, in reality
Netflix is made up of the aggregation of more than seven hundred
microservices, each one handling a specific piece of the system's
functionality.

There is a microservice in charge of billing, another one that charges
your credit card, another shows a list of recently
added movies, another shows the list of movies personalized to your taste,
a list that was computed by several other microservices that
analyze data on your behavior and try to predict your tastes.
There are microservices in charge of figuring out which device you are
using and picking the right format for your screen at that moment.

But there are services all along the production chain. When
Netflix acquires or produces a movie, or series, it receives the original in
digital format and stores it in its storage centers in the
cloud. There are microservices in charge of *"transcoding"* that
digital content into different versions. Netflix supports thousands of
different devices, with different resolutions and playback
speeds, and each movie is transformed so that it can be
viewed correctly on each device. Of course, each copy
is processed with a DRM (Digital Rights Management) algorithm
to make sure the content isn't pirated.

{{<figure caption="How Netflix content is processed so it reaches your device" src="https://d2dspjyoh5c79p.cloudfront.net/8cdc2c17-e97e-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

On top of that, you have to guarantee that the content reaches each viewer at
the right speed. To achieve this, these files are distributed across
what is known as a Content Delivery Network (CDN). A
network of servers that store these pre-encoded copies of the
videos, located in different geographic places as close
as possible to the internet providers[^2].

{{<figure caption="Diagram of a CDN: the content is distributed to each node of the network to make sure it sits at the distance with the lowest possible latency from the client." src="https://d2dspjyoh5c79p.cloudfront.net/f30bfe28-e97e-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Originally Netflix used CDN services from companies like Akamai,
but over time it had to develop its own content network,
called [Open Connect](https://openconnect.netflix.com/en/). It is as if
Netflix handed out hard drives around the world to every internet
provider, with copies of the movies it expects to stream in those
places.

Sometimes when we start watching a movie on Netflix it looks
a bit blurry for the first few seconds. At that moment the Netflix
client is trying to figure out which is the closest CDN node
that holds the movie we are watching. Once that is
settled it can guarantee a constant transfer rate.

Besides, every device contains a piece of software that knows how to adapt
the content to the resolution and speed of the machine we are
using to watch. Many versions of this software have to be
maintained, for every Smart TV, smartphone, computer or browser
on the market.

This whole choreography of microservices, networks, applications and
infrastructure is the closest thing I can think of to Santa's
magic. So I'm sure that some day we'll be able to match him.

All I'd wish for this Christmas, dear Santa Claus, is that so many other
services would learn from these architectures and implement them on their
websites. We would all be so happy!

It has been an intense, interesting year, in which I have tried to bring you
more content that is relevant and interesting to all of you. I hope
you are enjoying the holidays with your loved ones.
I promise that in 2018 you'll get a lot more of La Naturaleza del Software

**Merry Christmas!**

![](https://d2dspjyoh5c79p.cloudfront.net/b31a7249-e980-11e7-a030-2b5831f8ecb5-aa9f18b7)


[^1]: One of the people who has contributed the most to the development of
Information Retrieval is Chilean. His name is [Ricardo Baeza](https://en.wikipedia.org/wiki/Ricardo_Baeza-Yates) and I was lucky enough to have him as one of my professors. I promise to write something about
him in the future.

[^2]: An excellent and more detailed explanation of how Netflix works can be found in this Medium article:  [How Netflix works: the (hugely simplified) complex stuff that happens every time you hit Play](https://medium.com/refraction-tech-everything/how-netflix-works-the-hugely-simplified-complex-stuff-that-happens-every-time-you-hit-play-3a40c9be254b).
The architecture images were taken from there.
