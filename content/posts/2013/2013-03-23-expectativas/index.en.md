---
title: "Expectations"
authors: [admin]
subtile: "what the user wants vs. what the user needs"
date: 2013-03-23T08:25:11-03:00
slug: "expectations"
draft: false
tags: ['analysis', 'software development', 'use cases']
image:
  placement: 3
---


> "You've got to start with the customer experience and work back
> toward the technology - not the other way around."

## Use cases

Let me tell you what a friend of mine thought about use cases. She's
Argentine, and it shows the moment she opens her mouth. She once told me
about a typical exchange with one of her programmers: "Che! So I ask him
how on earth an invoice could have a due date earlier than its issue
date, and you know what the idiot answers? That the situation wasn't
covered in the use case! You know what you can do with your use cases?!
I told him..."

![](https://d2dspjyoh5c79p.cloudfront.net/026209e4-36fe-11e4-8e2f-8bfe00af0f84-aa9f18b7)

:smile:  It happens, quite often actually. Even I have used that
argument on occasion: if it's not in the use case, then there's no
reason for it to be implemented,
right?

Well, no, and that is the big problem with requirements gathering. We
always start by asking the user what they want, what they wish us to
"build" for them. When what we should really be doing is trying to
understand what they **expect** from the system.

How's that? Aren't requirements what the user expects from the system?
And isn't that reflected in the use cases?

## **What do users want?**

> You can\'t just
> ask customers what they want and then try to give that to them. By the
> time you get it built, they\'ll want something new. [^1]
> -- Steve Jobs

Steve Jobs had a point when he said that if you ask your customers what
they want and try to give it to them, by the time you've built it they
already want something new. It's an endless wheel that developers and
users get caught up in. Expectations never seem to line up with results.
So what is failing? How do we fix it?

![](https ://d2dspjyoh5c79p.cloudfront.net/4dc5f725-36fe-11e4-8e2f-8bfe00af0f84-aa9f18b7)

> Bruce: There were so many. I just gave them what they wanted.\
> God: Yes. But since when does anyone have any idea what they really want?\
>
> -- Jim Carrey and Morgan Freeman in "Bruce Almighty"

The traditional approach, waterfall development, collects the
requirements and tries to carry them through a chain of meticulously
detailed and documented activities: Requirements Gathering - Functional
Analysis - Non-Functional Analysis - High-Level Design - Detailed
Design - Architecture Design - Programming - Test Design - Unit Testing -
Integration Testing - User Acceptance Testing - Fixes - Release to
Production.

By the time we finally make it to production nobody wants the system
anymore, and sometimes it ends up being discarded. In time a new project
gets called, or we enter an eternal cycle of "maintenance".

## **The agile answer**

Faced with this situation, the agile movement's answer is to favor
interactions between individuals over processes and tools.

The agile proposal is technology-agnostic. Technology isn't relevant,
what matters is satisfying the requirement. The idea is this: the user
isn't clear about what they want, neither are we, so let's find out by
doing. Let's build a feature, and iterate. The waterfall disappears and
a water wheel takes its place: collect features, prioritize them and
iterate, successive improvements until together we discover what is
needed.

What matters in the agile manifesto is the doing: "Working Software".
But that's where the problems start. This solution favors "Working
Software", but it says nothing about "Usable Software".

Agile is essentially reactive. It proposes collaboration with the
customer, "responding to change over following a plan". We build
software, the user tries it, it's not what they expected, we iterate
again....

![](https://d2dspjyoh5c79p.cloudfront.net/82655706-36fe-11e4-8e2f-8bfe00af0f84-aa9f18b7)

It's not that I'm against the agile movement, but after years of trying
to stick to its principles, and looking at the results obtained, I think
something is missing. I've been reflecting on this for a while and I
think I've seen some of the shortcomings of this approach, and part of
that is what I'm trying to explore in this
text.

## **Requirements vs. expectations**

If you look closely, every methodology is about how to turn the
customer's requirements into a product. In simple terms, it all comes
down to drawing up a list of what we have to do and then doing it. What
varies is the order, the way we approach it: whether we execute the
tasks sequentially one after another, in an iterative and incremental
way, or reactively, as the most extreme forms of agile propose.

What I'm saying is that the problem is not so much in the form as in the
substance. The problem is that all these methodologies are about
managing requirements, when they should really be concerned with
managing expectations.

How's that?

An expectation is not a casual wish. It is something tacit that goes
beyond conscious assumptions, something that resides partly in the
user's unconscious.

> "Many users can express what they want, some can justify their
> needs, and when they use your product all of them can tell you
> whether it does what they expected" [^2]

In many projects, lists of potential features get drawn up, chosen and
driven by the business view of what the customer is willing to pay for
(that is, what the customer wants). This description by itself doesn't
tell us much about how these features will be used, or why.

One lesson the authors of the book [Lean
Architecture](https://amzn.to/11uAEJX) learned was this:

> "We learned a lesson about user expectations from a client of ours.
> The client builds noise analysis systems for all kinds of devices,
> from cars to vacuum cleaners. One thing we learned is that their
> vacuum-cleaner-making customers insisted that a good vacuum cleaner
> makes a substantial amount of noise when it's working at full power.
> For the German market this noise has to be a low roar, for other
> markets a high-pitched whine. The goal is not to minimize the noise,
> even though it is possible to build fairly quiet vacuum cleaners
> without reducing their effectiveness."

## **Anticipation**

One of the problems with requirements gathering is that it is not
possible to anticipate every scenario a user can conceive of. So we must
dig deeper into the user's perception of the form of the system. This is
known as the **end user's cognitive model**.

"Use cases capture the interactions with the system that end users can
anticipate. If end users can anticipate every interaction for every
possible input value, then the specification is complete. That makes
building the program unnecessary, because we have laid out every
possible response to every possible input, and it would be enough to
look up the response in the specification instead of running the
program. Of course, this is absurd. Good software systems have value
because they can, to some degree, handle the unanticipated."[^2]

Suppose we are asked to build a word processor. One requirement would be
to be able to move a table within the document. Let's look at possible
scenarios or use cases: moving the table from one page to another;
moving the table right between two existing paragraphs; or moving the
table inside another table. The possibilities are endless. How do we
tackle that with the traditional use case approach?

Instead, it is better to aim our efforts at defining something more
important: the end user's cognitive model. Users have models in their
heads of the internal details of the program they use. They trust that
the program "knows" what a table is, a paragraph, a figure, etc. The
user trusts that the programmers have paid attention to the need for
white space between the table and the adjacent paragraphs. These
elements of the end user's mental model, even though they are static,
are useful for reasoning about the possible scenarios we model in the
use cases.

In the case I told you about at the beginning, my friend and her
invoicing system, the failure is that the requirement did not properly
capture the user's mental model: "on an invoice the due date cannot be
earlier than the issue date". This is obvious, but for that very reason
it is very unlikely to come up in requirements gathering. It's something
we assume the developer knows, or has at least looked into.

This cognitive model must be captured in the architecture of the
solution. If we capture it well, we can guarantee that we'll be able to
satisfy what the user wants and needs, and along the way we'll make our
solution more resilient when we're asked to implement a reasonable but
unanticipated scenario.

## **Problems and solutions**

Jerry Weinberg defines a problem as "the difference between the current
state and a desired state". So when we are about to face a programming
challenge (be it a simple routine or a complete system), we must start
by clarifying the notion of what we want to solve. With that notion
clear we will know what it means for something to be done.

> "Without a problem definition, it is hard to know when you are done.
> Sure, you can point to a list of tasks you have completed, tasks that
> were originally designed to close the gap between the current state
> and the desired state, but that doesn't mean you are done. Emergent
> requirements cause the landscape to shift during development, and
> even then the best-planned paths don't lead you to the
> best-conceived destinations."[^2]

We call this *vision*. Vision is the compass that guides us. Why are we
doing what we are doing? That is the essential question a good engineer
must ask.

Vision also helps to better understand the user's expectations.

I recently read this tweet:

{{<x user="ideasagiles" id="313618318844121088">}}
> Spending a lot of time thinking about how to support a heavy load of users
> without even having launched the product is a waste of time.

What does this mean in light of what we're discussing? Without being
clear about the vision, it can make more or less sense. Agile's do-and-react
outlook clearly weighs in here. Which is fine, after all the important
thing is to get the product out. But what if the customer expected the
system to support a heavy load of users from the start?

The traditional agile model (Scrum, for example) favors "do and react".
There is another way to approach it (Lean), which favors thinking and
then doing.

That is the better model, in my opinion. But without going to the
extreme of thinking too much and doing nothing. Spending 3 months
designing a system leads nowhere.

That is something we must recover, and which seems to have been lost in
agile. Think, then do, over do and react. Usable software rather than
working software.

## **Lost practices**

Many people who take up agile methodologies think it's about throwing
out everything "unpleasant": things like architecture, documentation,
functional analysis must be left out. As if it were a matter of bringing
in a Scrum Master or something similar to beat the drum, and putting
users and developers to iterate together until something minimally
acceptable comes out. After all, it's about "individuals and
interactions over processes and tools".

Agile has the virtue of being probably the first movement in software
development to introduce a mature set of disciplines. Unfortunately,
along the way a lot of hard-won experience that wasn't in this set of
disciplines got lost, or we came to consider it irrelevant, and it
isn't.

We have to recover those lost practices. Which practices? you'll ask.
Well, that's what we're going to talk about in the next posts ;-)

**Notes**

[^1]: <https://www.inc.com/magazine/19890401/5602.html>

[^2]: [Lean Architecture, for Agile Software Development](https://amzn.to/11uAEJX), James Coplien & Gertrud Bjornvig.
