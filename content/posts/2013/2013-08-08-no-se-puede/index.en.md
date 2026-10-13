---
title: "It can't be done!"
authors: [admin]
date: 2013-08-08T08:25:11-03:00
slug: "it-cant-be-done"
tags: ["devops", "software development", "operations"]
draft: false
image:
  placement: 3
---
It can't be done! How many times have we heard that phrase? That damned
phrase!

Your development is ready, the people in sales or in process management
are happy, testing was a success, everything is on
schedule, and when you go to systems to start negotiating a date for going
to production you run into the famous "it can't be done!"...

When the rebel forces need the Jedi, all the Jedi do is raise
objections. Help me, Obi-Wan! No! comes the unexpected answer.

![](grumpy-cat-star-wars-help-me-obi-wan-no1.jpg)

Well, we developers are paying for our sins, because until a
few years ago we had the same attitude toward users. Because
we were simply wrong, used to a linear sequential
process: gather requirements, analyze, design, build, test and
deliver. Woe to the poor user who dared to change their mind!
Compiling was a sacred act that took time. Every line of
code was carefully thought out, pondered. Producing 10 lines of
code a day was the norm back then. If a user came to us
asking for a change after the design had been
closed, what face did we make? What was our answer?

![](no.png)

No! It can't be done! How could you even think of asking me that! Always no!

But we changed. We adapted. We understood that we had been fooled,
that the waterfall method was one big joke, [a reading
comprehension
mistake](/en/blog/lnds/2011/11/12/reading-comprehension/), and
we [went agile](/blog/2009/09/que-es-agilidad.html).

![](tigre_en_la_nieve.jpg)

Our way of developing is faster now, we are more flexible:
[release early - release often](http://en.wikipedia.org/wiki/Release_early,_release_often), [fail fast](http://en.wikipedia.org/wiki/Fail-fast),
[worst is better](/en/blog/lnds/2014/01/25/garbage-collection/) are
our mantras now.

Getting closer to the business, adding value: we are an essential part of today's
business, we know our role, we are proud of what we contribute as
developers, we want to do more things, better, faster, ship
applications, bring in new technologies. But we collide with the
systems people (operations). It is the fight between devs and ops.

> Developers and operations professionals are often at odds. Developers
> want to release software more frequently; operations professionals
> want to protect the stability of the infrastructure.

We have different goals and different approaches. If you look at the diagram of roles and
functions on Hoff's layers, the reason is clear.

![](hoff-roles.png)

We devs are in the layers closest to the needs of the
business. The ops are closer to the iron, the hardware.

> The last thing many application developers want to do is have a
> sit-down with the ops guys. Besides which, they don\'t understand.
> Sure, the ops guys efforts are critical to our applications because
> they have to run on something. But, developers should look to spend
> more of their time getting closer to the business, not getting closer
> to the hardware. I fully acknowledge that there is a need for quicker
> and less-rickety deployment processes.

The truth is that we don't want to worry about the details, about the
problems of infrastructure.

Some people propose as a solution something called
[DevOps](http://en.wikipedia.org/wiki/DevOps). The idea is to smooth things
over between devs and ops and get them working in harmony.

To understand these differences between two beasts as different as
devs and ops, I am going to turn to
[Jeff Atwood's conceptualization](http://www.codinghorror.com/blog/2010/08/vampires-programmers-versus-werewolves-sysadmins.html),
in which he compares devs (developers) to vampires and ops
(sysadmins) to werewolves.

> Programmers are like vampires. They're frequently up all night, paler
> than death itself, and generally afraid of being exposed to daylight.
> Oh yes, and they tend think of themselves (or at least their code) as
> immortal.
>
> System Administrators are like werewolves. They may look outwardly
> ordinary, but are incredibly strong, mostly invulnerable to stuff that
> would kill regular people – and prone to strange transformations
> during a moon "outage." \...
>
> The art of managing vampires and werewolves, I think, is to ensure
> that they spend their time not fighting amongst themselves, but
> instead, using those supernatural powers together to achieve a common
> goal they could not otherwise. In my experience, when programmers and
> system administrators fight, it's because they're bored. You haven't
> given them a sufficiently daunting task, one that requires the full
> combined use of their unique skills to achieve.

He may be right. Look at this grumpy op: maybe he is just bored,
and that is why he says "it can't be done" so much. Maybe he just wants a little
attention...

![](grumpy.jpg)

Another possibility is to isolate devs from ops completely. That is what
[people like Mike Gualteri](http://blogs.forrester.com/mike_gualtieri/11-02-07-i_dont_want_devops_i_want_noops) propose

> But, I think DevOps is a step backward. Instead I
propose NoOps. The goal of NoOps is also to improve the process of
deploying applications. But, NoOps means that application developers
will never have to speak with an operations professional again. NoOps
will achieve this nirvana, by using cloud infrastructure-as-a-service
and platform-as-a-service to get the resources they need when they need
them. Of course, this is not just about getting virtual machine
instances. It is also about release management. Ops can run this public,
private, or hybrid infrastructure and give developers the tools they
need to responsibly deploy applications faster.


Or Adrian Cockcroft, of Netflix, who lays out at length
[in this post](http://perfcap.blogspot.com/2012/03/ops-devops-and-noops-at-netflix.html)
his position on NoOps.

This is interesting. The idea is to never again have to look at the face of the grumpy
cat who always says it can't be done. The idea is to isolate him, like
Schrödinger's cat, and leave him locked in a box we call
the Cloud.

The goal of NoOps is, like DevOps, to improve the process of
deploying applications. But in NoOps the developers no longer
talk to the operations professionals. It is nirvana, because
we float on a cloud. Through infrastructure as a service, or
platform as a service, developers get the resources they
need dynamically. This is more than creating virtual machine
instances. It is managing the process of deploying and releasing
applications to production. Ops takes care of running, monitoring
and configuring this cloud infrastructure (whether public, hybrid or
private), and of giving developers the tools they
need to move applications to production faster,
responsibly, of course.

It means that ops leave in the developers' hands the decision
to put applications into production whenever they want. It means
empowering the developer. Freeing them from having to ask whether it can
or can't be done. It means delivering more value to the business, because we can
respond to change faster.

This is something we need, so, ops friends, get your act together!
Let's work to make this happen. We need your help. I am sure
you will be happy managing, monitoring, and preparing new
tools that allow applications to be deployed quickly. I know
it can be done. I know that yes, it can be done.

