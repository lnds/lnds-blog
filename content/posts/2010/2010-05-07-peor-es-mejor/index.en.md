---
title: "Worse is better"
authors: [admin]
subtitle: "the importance of shipping"
date: 2010-05-07T08:25:11-03:00
slug: "worse-is-better"
tags: ["processes", "principles", "motivation", "project management", "agile"]
draft: false
---

In 1989 [Richard P. Gabriel](http://dreamsongs.com/) introduced the
concept of Worse is Better, or the New Jersey style, a philosophy of
software design in which simplicity of the interface, and above all of
the implementation, matters more than any other property (including
correctness, consistency and completeness).

The concept was introduced as a section of a talk Gabriel gave at a Lisp
conference, and you can read it here:
[The Rise of Worse is Better](http://www.jwz.org/doc/worse-is-better.html)

In the essay Richard Gabriel argues that there is a style of software
design he calls the MIT/Stanford style (that is, an academic style),
which basically has the following characteristics:

* Simplicity: the design must be simple, both in implementation and interface. It is more important for the interface to be simple than the implementation.
* Correctness: the design must be correct in all observable aspects. Incorrectness is simply not allowed.
* Consistency: the design must not be inconsistent. A design is allowed to be slightly less simple and less complete to avoid inconsistency. Consistency is as important as correctness.
* Completeness: the design must cover as many important situations as is practical. All reasonably expected cases must be covered. Simplicity is not allowed to overly reduce completeness.

As you can see, these are characteristics most people consider good and
positive.

On the other hand, the **Worse Is Better** philosophy, or New Jersey
style, after Bell Labs, the cradle of C and Unix, is only slightly
different:

* Simplicity: the design must be simple, both in implementation and interface. It is more important for the implementation to be simple than the interface. Simplicity is the most important consideration in a design.
* Correctness: the design must be correct in all observable aspects. It is slightly better to be simple than correct.
* Consistency: the design must not be overly inconsistent. Consistency can be sacrificed for simplicity in some cases, but it is better to drop those parts of the design that deal with less common circumstances than to introduce either implementational complexity or inconsistency.
* Completeness: the design must cover as many important situations as is practical. All reasonably expected cases should be covered. Completeness can be sacrificed in favor of any other quality.

In fact, completeness must be sacrificed whenever implementation
simplicity is jeopardized. Consistency can be sacrificed to achieve
completeness if simplicity is retained; especially worthless is
consistency of interface.

According to Gabriel, the "worse is better" approach produces more
successful software, because it allows it to spread virally.

If you develop on this principle, you start from a base that is
basically good, one that implements maybe 50% to 80% of the required
functionality. It doesn't have to implement everything. What matters is
releasing the product as if it were a virus, so that once this "virus"
spreads there is pressure to improve it and take the functionality to
90%, while the users have already been conditioned to accept something
that doesn't do everything expected ("the right thing").

What happens with worse-is-better software is that it "first will gain
acceptance, second will condition its users to expect less, and third
will be improved to a point that is almost *the right thing*". There is
one more benefit to the New Jersey style: since these are not complex,
monolithic pieces of software, larger systems must be designed to reuse
components, and so a tradition of integration springs up.

You can choose not to follow the "worse is better" path, but you will
run into two unpleasant and frustrating scenarios: one where you have to
define a "big complex system", which requires elaborate designs, complex
implementations, and probably special infrastructure just to run; or one
where the design takes forever, implementation progress is always small
steps in an infinite series that never ends, and where "the right thing"
is impossible to implement.

The lesson is that it is often undesirable to go for "the right thing".
It is better to get half of what is needed available first, so that it
spreads like a virus. Once people are hooked on it, take the time to
improve it to 90% of "the right thing".

I have done it. I have built services where we launched with half of the
development done (or less), but the service gained acceptance, and it
grew and evolved with use and with feedback from the users. At first
everything looks chaotic, but eventually the day comes when the sun
shines and, without noticing, you are delivering a much better service
than you imagined, fully automated and working at 90% of what it was
supposed to do, and you realize that this was what you needed all
along.

I have also gone the opposite way, where we took all the time in the
world to build something perfect, an ideal product, and achieved
nothing. Not even one sale.

In my experience this approach is better, and it works, although, like
everything in life, it should be used in moderation.
