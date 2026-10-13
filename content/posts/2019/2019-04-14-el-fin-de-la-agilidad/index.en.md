---
title: "The end of agile (VII)"
authors: [admin]
subtitle: "Part 7 - Jam bands"
date: 2019-04-14T08:25:11-03:00
slug: "the-end-of-agile-vii"
tags: ["agile", "software architecture", "principles"]
categories: ["the end of agile"]
draft: false
image:
    caption: "Dave Mathews Band"
    placement: 3
---


**(To listen to this post's soundtrack [click
here](https://open.spotify.com/user/ediazlnds/playlist/4PgdLIEo3STIIeB9zbgJDa?si=5CBB2t7vT_yi6FdCK-XDZg))**

> When all the little ants are marching\
> Red and black antennae waving\
> They all do it the same\
> They all do it the same way\
> --- Dave Mathews Band

The first song by the [Dave Mathews Band](https://www.davematthewsband.com/) that
I remember hearing is a live
version of ["Ants Marching"](https://www.youtube.com/watch?v=GhswH1bLMy8). I liked it so much
that I used it in the soundtrack of a family video I made of our
summer vacation in 2004.

That year we went to La Serena, and I bought the video camera right
there. It has beautiful, funny moments of my older kids playing with
Francisca, who had just turned two.

I don't remember exactly whether it was in late 2003 or early 2004 that
my friend Marco got in touch with an idea. Those meetings were joined
by Gustavo, an Argentine colleague who worked with Marco. When I had
the crisis [I told you about in part 6](/en/blog/lnds/2019/04/06/the-end-of-agile-vi/),
I worked on an electronic invoicing project for the company where they
worked. I respected Gus because it was clear to me that he was a
brilliant and very meticulous programmer.

Marco told me he had been approached by a successful businessman, whom
I knew as well, since we had explored some business together when we
worked at Énfasis. His company represented the Handkey brand, which
sold a device like this one:

{{<figure caption="Handkey II" src="https://d2dspjyoh5c79p.cloudfront.net/b0beba81-5f07-11e9-8e69-21c4c306beae-aa9f18b7">}}

This gadget measures the geometry of the hand, which is very useful for
identifying people within a limited population. That's why the device
started being used in some sports clubs and gyms in the capital. This
businessman's problem was that he couldn't scale the business for lack
of suitable software.


But Marco had a broader idea: why not develop platform software that
would make it possible to implement identity services for people using
biometrics? [That's how we worked up a business plan that we presented
to this gentleman, with the aim of creating a venture focused on
solutions that used biometrics.


Our value proposition was more or less this: "whenever you need to
identify someone, anywhere in your business processes, we give you the
technology to answer three questions: **Who, Where and When**".


That's how Biokey Technologies was born. We deliberately chose an
English name because we pictured it as a startup that could go abroad.
We got a little *pretentious* and took titles in English: Gus was the
Chief Technology Officer, Marco the Chief Marketing Officer and I was
the Chief Operating Officer. [We set up in the offices of our main
investor's company, and started operating out of a showroom. When they
needed that room we cleared out and set up in the kitchen or went to
work at some nearby café.

The first months were intense design. Lots of whiteboard, arguments,
and Marco filling ashtrays with his cigarette butts. We studied and
made important architectural decisions.


When you work on software architecture you first have to consider the
context in which your solutions will operate. You also have to define
certain goals the architecture must satisfy. To meet those objectives
you define the business principles and then the technical principles
that will guide your architecture decisions. [I'll sum this up in
this diagram:]{style="letter-spacing: 0.01rem;"}

{{<figure src="https://d2dspjyoh5c79p.cloudfront.net/261bfa22-5f0a-11e9-8e69-21c4c306beae-aa9f18b7" caption="The process for making decisions in a software architecture">}}

This diagram is very important because it is the working guide of the
good software architect. If you want more detail I suggest reading the
work of Rozanski and Woods [1].

Well, as I said before, our business proposition was to offer a way to
help our customers answer those three simple questions: Who? Where? and
When?


So we decided we would build a network of distributed biometric
devices, of every kind and flavor. Biometrics would help us answer the
question of ***who***. The network structure would let us answer the
***where***. The ***when*** was trivial: you just had to record the
timestamp of each transaction.


Since all three of us had prior experience in cryptography, and in
electronic documents and signature media, we could guarantee the
integrity and reliability of the answers to these three questions.


Those were the principles that guided our architecture.


But once you have these principles there are practical matters to
decide. In particular, the specific technology you should use. This is
where we surprised everyone who knew us. We decided to use Microsoft's
.Net platform.

When we started presenting our solutions to potential customers, people
who knew our technology background were puzzled that we were using .Net
and not Java, all the more since we, or at least I, were known as Java
fans.


One of the reasons for this decision was entirely practical: most
biometric devices ran on Windows, and besides, we would have to deploy
them on Windows computers. There was another, strategic reason: we
wanted to form an alliance with Microsoft, which we did achieve, by the
way. The third, the most important, was that both Gus and I felt like
learning C\#. "If it's not fun, why do it?"

![If it's not fun, why do
it?](https://d2dspjyoh5c79p.cloudfront.net/86468c74-5f0b-11e9-8e69-21c4c306beae-aa9f18b7)

## Jam Bands

> Yeah\
> One, two, princes kneel before you\
> That\'s what I said, now\
> Princes, Princes who adore you\
> Just go ahead, now \
> --- Spin Doctors

The term [jam bands](https://en.wikipedia.org/wiki/Jam_band) applies to
those groups whose live shows generate a strong fan culture. It's a
phenomenon that started with the Grateful Dead in the 60s, and its
exponents include excellent bands like Phish, The Allman Brothers Band,
Blues Traveler, Ozric Tentacles, Spin Doctors and of course, my
favorite, Dave Mathews Band.

It's a very broad term that covers a range of musical styles, but what
they have in common is that it brings together bands with great
musicians in their ranks, capable of putting on a great live show, not
so much through virtuosity as through the feeling they put into every
performance.

Well, in those years, working at Biokey, I felt like I was playing in
the rhythm section of a jam band. Gus and I split the work. He took
care mainly of the frontend and I took the backend.

In the first months we wrote a lot of code. The goal was to show a
first version of our technology at an important mining trade show.

Memories blur over the years, but I believe it was right when we were
incorporating the company that I had an accident at home and fell
getting out of the shower, fracturing the neck of my left humerus
(that's the shoulder, kids). That kept me out of action for at least
three months. I felt frustrated, but even so I helped the guys organize
the first tasks and worked on the design.


Despite the rough start, we kept moving forward. We built proofs of
concept. Once I had recovered we started the real jam session. We wrote
code and assembled our platform while Marco looked for alliances and
prospected for business.


However, I think we fell into one of the mistakes that Roberto Camhi,
[in this recent article](http://robertocamhi.com/4-pecados-capitales-del-emprendedor/),
calls deadly sins. Our failure was in the timing. Our concepts were
somewhat ahead of the maturity of the Chilean market in the use of
biometrics in 2004.


It may sound arrogant, but I believe no significant company working in
biometrics in Chile has a proposal as clearly structured, conceptually
and architecturally, as the one we developed. But this, unfortunately,
confirms that technical excellence isn't everything when it comes to
succeeding in business.

In hindsight I think one of our main advantages was that we invested a
lot of time in research. Maybe our investor didn't like that, but we
were convinced it was one of the things that set our proposal apart.


I'll give you an example of what we did at BioKey Technologies.
Our platform offered a security model based on the work
of Ratha, Connell and Bolle, which is detailed in
[this paper](https://www.researchgate.net/profile/Jonathan_Connell/publication/220353130_Enhancing_Security_and_Privacy_in_Biometrics-Based_Authentication_Systems/links/555a010508ae6fd2d8281b10/Enhancing-Security-and-Privacy-in-Biometrics-Based-Authentication-Systems.pdf)
\[2\]. In that article these researchers explain that there are eight
points of attack on a biometric system. Well, our proposal explained
these eight vulnerabilities and proposed solutions and mitigations for
each one. That was the technical rigor we applied at Biokey, and as I
said, I don't see much of it today in the Chilean industry that works
in this field.

{{<figure caption="The model of Ratha, Connell and Bolle." src="https://d2dspjyoh5c79p.cloudfront.net/2ab95335-5f0e-11e9-8e69-21c4c306beae-aa9f18b7">}}


# What Would You Say

> Knock knock on the door. Who\'s it for?\
> There\'s nobody in here\
> Look in the mirror, my friend\
> I don\'t understand at best\
> And cannot speak for all the rest\
> --- Dave Mathews Band

Since in the first months we weren't getting sales of our products, we
took on some projects that brought in the income we needed. Since much
of the technology was already built, we could divert part of our
attention to solving some of the industry's problems, and that way
these customers might also buy our solutions later on.

It so happened that Microsoft saw us as .Net experts, so they
recommended us to an important company based in Valparaiso to improve
the performance of its new web operations platform. We did the same for
a cable company. The number of architectural aberrations we had to look
at in those days would be enough to write another series. The
transition from client-server applications to web applications was
something Chilean engineers were struggling with. Microsoft didn't help
much with Visual Studio and its first versions of the .Net Framework.
Many programmers thought it was right to apply Visual Basic's
event-response paradigm, and the two-tier model, which Microsoft's
tools more or less imposed. That changed with time, when Microsoft
finally implemented MVC, but it was perhaps a bit late. In my opinion
the damage was already done. We used C\#, but in a different way from
what Microsoft promoted. Since we came from Java, we structured our
architecture very differently from the way the Visual Studio IDE forced
on you.


## Accident

> Driving along this highway\
> All these cars and upon the sidewalk\
> People in every direction\
> --- Dave Mathews Band

In the second half of 2005 anxiety was eating me alive. I was starting
to feel disappointed with the venture. The idea had never been to end
up, once again, in a company doing project work. I had signed up to
build products and a platform. On top of that, I had to resolve some
old conflicts with my mother and my siblings, which led to tense
situations. Remember, too, that I was dragging along a financial mess
from the previous years.

We had set ourselves an initial salary level in line with the original
plan. It was a good income, but it was below what all of us partners
had been used to. We accepted it because it was a way of motivating
ourselves: if the business was good, if we managed to sell our
products, then success would mean better salaries.


But that wasn't happening, and I'll explain later what mistake we made.
What happened to me at that time was that anxiety was pushing me into
depression. I remember my friend Marco took me to the hospital a couple
of times, because I thought I was having a heart attack. They were
actually panic attacks. I had to start seeing a psychiatrist and begin
treatment. I was diagnosed with depression.


To make things worse, in January 2006 I had a serious car accident. The
Grim Reaper's scythe went by close enough to graze my hair. I went
almost a year without driving after that. The only way forward I found
was writing. In August 2005 I started writing this blog, and at first
it was a form of escape. Then writing started to help me, little by
little. I think the main thing I learned from that time was that I had
to stop keeping so much to myself. In Ants Marching Dave Mathews
writes:

> But we never say a thing\
> And these crimes between us grow deeper


I learned that there were things I was keeping to myself too, in all my
relationships, with my family, my friends, and at the company. So I had
to learn to say them.


## A pocket full of kryptonite

> Come on downtown and stay with me tonight\
> I got a pocket full of kryptonite \
>  --- Spin Doctors

But even so we kept researching and developing technology. We developed
our own implementation of the WSQ format, which we certified with the
FBI. We won an innovation award for this work from the
[AIE](http://aie.cl/). We also signed an agreement with Chilean
universities in 2007 to
[develop algorithms that would make it easier to use biometric solutions in Chile](http://e-ciencia.reuna.cl/T2007/Ten_02/doc/WG_CSc_e-science-CEMCC.pdf).

We carried out several projects in that period. But anxiety started
eating at us too. One of the mistakes we made has also been identified
by Roberto Camhi. It's what he calls ["product focus"](http://robertocamhi.com/que-el-foco-producto-no-termine-matando-tu-producto/).
We had such a robust solution that we kept insisting that was what we
should focus on. But selling a solution, rather than solving the
customer's problem, is the reason many startups fail.

We started to pivot, to develop much simpler attendance tracking or
identity control solutions. And also to take on specific projects.
That's when the arguments among the partners started. At one point I
felt we had four different visions of how to run the company, and that
would eventually end up splitting it. Finally, in July 2007, I had a
heated argument with my partners.

I had published a comment on this very blog about a public policy that
involved a strategic business partner. It seemed wrong to me and I said
so openly. That was reckless of me, it's true. But it meant an ethical
conflict for me. I had to decide between continuing to support that
business alliance, or defending my freedom to think and express my
opinions. The hardest part of that moment was the arguments with my
friend Marco. Several months had to pass before Marco and I reconciled
and cleared up our motivations at the time, both legitimate, by the
way. But that is a story that will continue in the next part.

In mid-2007 I was unemployed again. But I made use of my network of
contacts and told them openly that I was looking for work. I got
several calls, and had some very interesting conversations. I was back
on the market, and the market seemed interested in my services. That's
how I got the call from Ubaldo, but I'll tell that in part eight.

### Notes

\[1\] Software Systems Architecture,  Nick Rozanski, Eóin
Woods [[https://amzn.to/2Xc8F4i](https://amzn.to/2Xc8F4i)

\[2\] "Enhancing security and privacy in biometrics based authentication", [N.
K. Ratha, J. H. Connell, R. M. Bolle]<https://www.researchgate.net/profile/Jonathan_Connell/publication/220353130_Enhancing_Security_and_Privacy_in_Biometrics-Based_Authentication_Systems/links/555a010508ae6fd2d8281b10/Enhancing-Security-and-Privacy-in-Biometrics-Based-Authentication-Systems.pdf>

The first part of this series is
here: [https://www.lnds.net/blog/lnds/2019/03/17/el-fin-de-la-agilidad](/en/blog/lnds/2019/03/17/the-end-of-agile/)

The eighth part of this series is
here: [https://www.lnds.net/blog/lnds/2019/04/21/el-fin-de-la-agilidad](/en/blog/lnds/2019/04/21/the-end-of-agile-viii/)


