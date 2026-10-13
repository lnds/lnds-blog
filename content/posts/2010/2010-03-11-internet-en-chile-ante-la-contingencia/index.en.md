---
title: "The internet in Chile in the face of the emergency"
authors: [admin]
date: 2010-03-11T08:25:11-03:00
slug: "internet-in-chile-in-the-emergency"
tags: ['internet', 'Chile', 'contingencies']
draft: false
---
 
The design principles of the internet protocols assume that the
network infrastructure is inherently unreliable, and dynamic in
terms of availability and nodes. To reduce the complexity of
the network, the intelligence is left at the edges ([the network is a world of
ends](/en/blog/lnds/2008/06/30/a-world-of-ends/)).

The IP protocol doesn't guarantee a quality of service; it offers its "best
effort" to deliver the information. And it works quite well,
thanks to the concept of packet switching, the idea of Leonard Kleinrock
([the little 6-year-old boy who wanted to buy a variable
capacitor](/en/blog/lnds/2008/01/18/all-for-a-variable-capacitor/)).

Does it work? Does it hold up in a catastrophe, like the earthquake
we had the other day? Does it pass the test? In theory yes, but in Chile? That
is [the question Jo Piquer
asks](http://dccuchile.blog.terra.cl/2010/03/10/terremoto-2010-%C2%BFinternet-resistio-bien-la-prueba/).

Jo says:

> **There is no structural or underlying reason for the Internet
> to fail across the whole country for lack of power**: all the
> datacenters where Internet providers operate have their own
> generation systems, which should be able to run
> autonomously for many hours (ideally it would be several days).
> Most of these centers worked well and withstood the event; in
> fact, very few important servers were affected.
>
> In the end, the first news of my family, and the first form of
> communication that worked for me, was text messages between
> cell phones. Shame on the Internet!
>
> I don't know what really happened. **We have not obtained
> official information and nobody wants to accept the obvious:
> the Internet did not respond as we expected, and the vast majority of
> Internet providers failed to give us a reliable
> service.** Most of the servers were running,
> most of the links from those servers to their providers were
> up and operating, but there was practically zero traffic for almost
> 6 hours. Friends abroad could not reach any site in
> Chile. Most of us Chileans had no access to anything. There is
> no excuse for this: telephony can be expected not to work, but
> the Internet should have been the first to respond.

The truth is I don't share many of his opinions. First because I
find them somewhat contradictory, or unclear. But they also don't seem
true to me, even somewhat exaggerated. From an academic
point of view these opinions may be reasonable, but from a practical,
engineering point of view they aren't.

In disaster recovery strategies there is an important parameter
to define: the [RTO (Recovery Time
Objective)](http://en.bcmpedia.org/wiki/Recovery_Time_Objective_(RTO)),
which is the maximum acceptable time that can go by before the
lack of a business function severely impacts an organization.
It is the time span and service level within which a business process
must be recovered after a disaster. It is measured from the moment of the
disaster, and includes the time needed to carry out the tasks
required to fix the problem before starting the recovery,
the recovery time itself, and the time needed to
communicate it to users.

What is the expected RTO for our communications platform at the
national level?

With a magnitude 8.8 earthquake we're going to have traffic congestion, and
communications are going to fail, but having a nationwide
infrastructure operating, to a large extent, after a few hours has to
be our priority.

I don't know if a National RTO exists, but I think we achieved a
pretty acceptable RTO.

That's why I don't agree with my old professor. On the contrary,
I think the internet did pass the test. Unlike Jo, I think
the internet did pass the test, within a reasonable RTO.

But then there's also the problem of power,
which in theory, according to Jo, has no justification whatsoever, except that he
doesn't take the logistical problems into account.

Allow me to quote [Pablo
Bello](http://blogs.elmercurio.com/cienciaytecnologia/2010/03/11/los-servicios-de-emergencia-no.asp),
the outgoing government's undersecretary of telecommunications:

> "We have studied disasters of the magnitude of this earthquake around
> the world and the same problems arose in all of them, even more
> serious ones than those seen in Chile. The telecommunications
> infrastructure remained standing, but it was the power issue
> that caused the most difficulties".


> "The initial problem," he explains, "was network congestion. That
> made the backup batteries of the base stations run down
> faster. Once the backup batteries run out, the generator sets
> kick in, but only 30% of the base stations
> have one. If we consider that each company has between 1,500 and 2,000
> base stations, it isn't viable for all of them to have one, because of the logistics
> involved," the undersecretary says.

In the days after the earthquake I heard stories of engineers
working in the field who set out for the south before dawn to
work and keep the network up, with little gas, without money,
doing what we engineers do: keeping society running.
People who had to be brought money, food, radio equipment, and
all the support they needed to be able to work in those
conditions.

Even so, the communications network held up pretty well. We know that
many people couldn't communicate, but the infrastructure was brought
back up, and it has held up pretty well under the demands
of this catastrophic situation.

The same may have happened with some datacenters; it's very likely
that coordinating the refueling of the generator sets was very hard.
We know that some datacenters failed, and even that some were left
unusable or destroyed. But the main reason for failure (when there
was one, and that needs to be verified) was the lack of power.

On Saturday I was able to reach the datacenters that host my
work's servers using the internet from my mother's house,
because there was no electricity at mine. Not one server had rebooted for
lack of power, all of them up and visible from the internet. Everything
worked fine.

I'd like to hear the experience of other systems engineers with
their datacenters, but I think that, within the parameters of a disaster
recovery plan, the infrastructure did pretty well.
