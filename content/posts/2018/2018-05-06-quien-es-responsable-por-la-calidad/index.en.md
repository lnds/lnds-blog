---
title: "Who is responsible for quality?"
authors: [admin]
date: 2018-05-06T08:25:11-03:00
slug: "who-is-responsible-for-quality"
draft: false
tags: ['quality control']
image:
  placement: 3
---

A misconception we constantly have to deal with, and one that is
unfortunately lodged in the subconscious of many developers, is the idea
that quality is the exclusive responsibility of the QA area, and not of
the programmers. 

Why is an idea as wrong as this one so widespread? It goes so far that,
when there's an error in production, every finger points at quality
control and not at the people responsible for introducing the bugs in
the first place.

Let's go over a bit of history. 

When the first computers were developed, the user and the programmer
were the same person: scientists or scientists' assistants working on
solving some complex problem that required running complicated
calculations.

Later, computers were put to work on problems of every kind. Programs
became systems. Division of labor became necessary. We started with the
user, who expressed a need to a programmer, who then handed the source
code to the computer operator, to run it and deliver the results.

Over time, the computer operator was replaced by the operating system
(automation). But another division of labor took place: the analyst
appeared, a character who took up a spot between the user and the
programmer.

The idea behind this split was shrewd: while the analyst *elicited*
the requirements of one user, the programmer wrote the code that
captured the requirements of another user. The development process
became more efficient, at least in theory.

![](https://d2dspjyoh5c79p.cloudfront.net/2ace652c-5146-11e8-a030-2b5831f8ecb5-aa9f18b7)

But the pressure started to build, and systems became more complex.
The structured programming paradigm, for example, made it possible to
build systems modularly. Each module could be handed to a different team
to build. But who tested the integration of all those modules? 

At first it was the users and the analysts themselves who took care of
testing the integrated systems. That made sense, because they were the
ones who best knew the needs the system had to meet.

But that couldn't last long, and so the need arose to create a quality
control team. In many organizations this was cobbled together by hand,
turning people from operations and systems into "quality analysts".
People who knew the business combined with people who knew the
technological limitations of the solutions.


![](https://d2dspjyoh5c79p.cloudfront.net/9c87bf91-5147-11e8-a030-2b5831f8ecb5-aa9f18b7)

Of course all of this evolved. The quality area grew and became very
important, so important that everyone started delegating absolute
responsibility for quality to it.

Both the user and the programmer took a rest from their
responsibilities and shamelessly handed them off to QA. 

All of this brings us to the current scenario, in which if the system
doesn't work the way it should, it's QA's fault. "Because they didn't
test properly", or because "they didn't run the tests they were supposed
to run".

And I say all of that is a mistake. It's not QA's fault. The whole team
is responsible for quality (that includes the user, by the way, unless
we're talking about building a product, in which case there must be a
"Product Owner", who is the voice of the system's future users).

Quality starts with defining what is wanted, why it's needed in a
certain way, and what it's needed for, along with the satisfaction
parameters against which we'll be able to check the result we get.
That is the responsibility of users and analysts. 

Then, during coding, programmers must be meticulous, avoid errors, and
run unit and regression tests, to make sure the changes made to the code
don't affect what already works.

Together with the QA team, programmers carry out integration, stress
and functional tests. The goal is to verify that the criteria defined by
the user are met. 

Finally, it's the user who must give the final sign-off, confirming
that everything does what was expected.

The QA team must see to it that this whole process is carried out
properly. The QA team validates and verifies every stage of the
development process, from the analysis and design documents to
performing code inspections. It is the backbone that holds up the life
cycle. Quality is in every stage. 

-   Are the requirements captured adequately and without ambiguity?
-   Are there established acceptance criteria? Are they written in a
    precise and measurable way?
-   Are the quality parameters the system must satisfy defined?
-   For the bugs detected, has the development team been informed? Has
    their correction been addressed? 
-   Have robustness tests been run on the system?
-   Have stress tests been run? Are the non-functional requirements
    clear, along with how compliance will be determined?
-   etc.

QA's work is very important, but its role is mainly one of control and
support. 

The QA team runs tests to try to find errors in the system, but it
cannot guarantee that the system is free of errors. There's a reason the
name is Quality Assurance, and not Quality Insurance.

Responsibility for the quality of a software product belongs to the
whole team that builds it, not just to one part of it.

