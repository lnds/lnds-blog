---
title: "Parnas's ethics"
authors: [admin]
date: 2011-01-19T08:25:11-03:00
slug: "parnas-ethics"
draft: false
tags: ['Parnas', 'ethics']
image:
  placement: 3
---

A post related to the [story of Stanislav Petrov](/en/blog/lnds/2011/01/18/the-man-who-saved-the-world-by-not-doing-what-he-was-supposed-to/)
is this other one, which [I wrote in 2009](/blog/2009/06/preguntale-a-parnas.html) and which
I am adding to this series of recycled summer articles:

# Ask Parnas 

In 1985 Ronald Reagan proposed the Strategic Defense
Initiative, or [SDI](https://en.wikipedia.org/wiki/Strategic_Defense_Initiative),
which came to be known as Star Wars, after
George Lucas's films.

Essentially, SDI was a shield made up of a network of
satellites to detect missile launches and a series of
anti-missile weapons, with high-energy lasers, in charge of destroying
those missiles in space before they reached American
territory (all of it over our heads, of course).

![sdi\_art.jpg](sdi_art.jpg)

At the time [David Lorge
Parnas](http://en.wikipedia.org/wiki/David_Parnas), an important pioneer
of software engineering and a professor at the University of
Victoria in British Columbia, was a consultant with access to military
secrets at the Office of Naval Research in Washington. He was one
of the nine scientists called on by the SDI central office to
serve on the "panel on computing in support of battle
management".

In a letter of resignation from the panel, accompanied by 17 memoranda, Parnas
declared that it would never be possible to realistically test the vast
array of computers responsible for linking and controlling the
sensors, weapons, guidance and aiming systems, and the
battle stations.

According to Parnas this was even harder to achieve with
traditional software development methods, in which "bugs" and
errors are only found through day-to-day use of the systems. "I believe
it is our duty as scientists and engineers to reply that we have
no technological magic that will accomplish that. The President
and the public should know that," was part of what he said.

Professor Parnas wrote that he was sure other experts
would disagree with him, but that many would see this program as a
"pot of gold" for funding research projects, and others as
an interesting intellectual challenge. That, of course, is not the
ethical path, and Parnas was quite clear about it, even though the arguments he used to defend
his position were strictly technical. That is why Parnas
became one of the people I admire most in my profession.

![David\_Parnas.jpg](David_Parnas.jpg)

You can read his article "[Software Aspects of Strategic
Defense](http://klabs.org/richcontent/software_content/papers/parnas_acm_85.pdf)",
published in the December 1985 issue of CACM.

> "My conclusions are not based on political judgments. Unlike
> other academic critics of the SDI effort, I have not, in the past,
> objected to defense efforts or defense-sponsored
> research. I have been deeply involved in this kind of
> research and have consulted on extensive defense projects.
> My conclusions are based on more than 20 years of research in
> software engineering, including more than 8 years of work on
> real-time software used in military aircraft. They are
> based on my familiarity with operational military software and with
> computer science research. My conclusions are
> based on the peculiar characteristics of this particular
> effort, not on weapons development in general."

The article contains the memoranda that accompanied his resignation letter,
and is divided into 8 parts:

> 1.  The fundamental technological differences between software
>     engineering and other areas of engineering, and why software is
>     unreliable.
> 2.  The properties of the proposed SDI software that make it
>     unattainable.
> 3.  Why the techniques commonly used to build military
>     software are inadequate for this job.
> 4.  The nature of research in software engineering, and
>     why improvements in it cannot be enough to allow
>     construction of a reliable strategic defense system.
> 5.  The reasons he does not expect research in
>     artificial intelligence to help in building reliable
>     military software.
> 6.  Why he does not expect research in automatic
>     programming to bring about the substantial improvements needed.
> 7.  Why program verification (mathematical proofs of
>     correctness) cannot help produce a reliable
>     battle management system.
> 8.  Why military funding of research in software and
>     other aspects of computer science is inefficient and
>     ineffective.

The article, or series of articles, is a real lesson in
software engineering.

Parnas avoids technical jargon, so you don't need to be a
programmer to read it.

But most important of all, Parnas gave an important lesson in
ethics, because he believes that ethical people should work on
projects they think have an unethical side. That
way they will be able to help keep things ethical, and they also
have an obligation to inform themselves about the risks and
benefits of such projects[^1].

His stance made him the first person to receive the
Norbert Wiener Award for Social and Professional Responsibility, given by
[CPSR](http://cpsr.org/), Computer Professionals for Social
Responsibility.

Norbert Wiener, the father of cybernetics, wrote the following text,
quoted by Terry Winograd at the ceremony where the award was presented to
Parnas:

> "Any machine built for the purpose of making decisions,
> if it does not possess the power of learning, will be a completely literal mind.
> Woe to us if we let it decide our conduct, unless
> we have previously examined the laws of its action, and know that
> its conduct will be carried out according to principles acceptable
> to us!

On the other hand, the machine that, like the djinnee (genie), can learn and
make decisions on the basis of its learning will not be obliged to make
such decisions the way we would be obliged to, or
even to make decisions acceptable to us. For the man who
is not aware of this, to cast off the problem of his responsibility
onto the machine, whether it learns or not, is to throw his
responsibility to the wind, only to find it coming back seated
on a whirlwind."[^2]

Is software the genie in the bottle? Are we responsible
enough to control it?

I invite you to [read Parnas](http://klabs.org/richcontent/software_content/papers/parnas_acm_85.pdf).

[^1]: [Ask Parnas](http://courses.cs.vt.edu/~cs3604/lib/Ethics/parnas.html).

[^2]: Compare this text of Wiener's with what Kaczynski
([the new Luddite challenge]( 01))
has to say about letting machines make their own decisions.
