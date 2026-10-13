---
title: "Walking with dromedaries"
authors: [admin]
subtitle: "Reflections on Conway's law"
date: 2017-06-26T08:25:11-03:00
slug: "walking-with-dromedaries"
draft: false
tags: ['laws', "Conway's law", 'design', 'structure']
image:
  placement: 3
---


> "A dromedary is a horse designed by a committee" \
> -- ancient Mentat aphorism, predating the Butlerian Jihad

> "There's never enough time to do something right, but
> there's always enough time to do it over"\
> -- Anonymous, quoted by Melvin Conway

My most memorable encounter with Conway's Law, and the moment its depth
really sank in, was a couple of years ago, when an architecture decision
was shaped by the organization of the datacenter where we host our
applications. You heard that right: we had to modify the deployment
architecture of our system because of how the datacenter's services
were organized. 

> "You can't have a database on the same server as the
> application, because\... databases are administered by the DBAs,
> the application tiers by the system operators". \
> [But\... "Databases are administered by the DBAs, the application tiers
> by the system operators".

Anyway, we'll leave the discussion about "best practices" for another
day.

## Conway's Law

**Conway's Law** is an observation by the programmer, hacker, and PhD
in Computer Science [Melvin Conway](http://www.melconway.com/Home/Home.html), 
which says (quoting from his [paper](http://www.melconway.com/Home/Committees_Paper.html)):

> "Organizations which design systems (in the broad sense used
> here) are constrained to produce designs which are copies of the
> communication structures of these
> organizations".

When Melvin Conway submitted his paper ["How Do Committees
Invent?](http://www.melconway.com/Home/Committees_Paper.html)" to the
prestigious Harvard Business Review, it was rejected on the
grounds that he had not proved his thesis. After that rejection he sent it to
[Datamation](http://www.datamation.com/). The article is from 1968, and it's
a quite reasonable and well-argued observation, in my
opinion.

For Conway, designing a system is the intellectual activity that
tries to create a whole out of diverse parts. Whether it's
creating a weapon system, recommending how to meet
a social challenge, or programming a computer. For the author these
activities are essentially the same.

Normally the organization in charge of devising this system
sets out to produce a document containing a coherently structured body
of information. This is what's called the system design. The
recipient of this document is a "sponsor", who wants some
activity carried out, guided by the system design. For example, a
public official who commissions legislation to prevent the recurrence of a
recent disaster, and to that end appoints a team to explain the
catastrophe and propose preventive solutions. It could also be a
businessman who needs to market a new product and appoints a
planning team to specify how it should be introduced into
the market.

The organization that designs may or may not be involved in
building the system. This affects design decisions, because
knowing that you'll be involved in the construction leads you to make
different decisions than if you know that burden falls on someone else's
shoulders.

The activity of designing requires making decisions continuously, and
these are also decisions the designer makes about his
own future. Here the incentives present in the environment can
work against the sponsor's intentions.

One of Conway's key observations is that the mere choice
of the team implies basic design decisions about the final system. In
other words, the design of a system is a reflection of the group of people
who are going to design it.

Once the organization of the design team is chosen, we can
delegate activities to the subgroups within that organization. With
each delegation what we do is narrow the possible design
alternatives, according to the capabilities of the subgroups or people
chosen.

Along with delegation come coordination problems. The
need to coordinate lowers the productivity of the smaller
groups, but it's the only way the separate task
groups can consolidate their efforts into a unified system
design.

For Conway the life cycle of a system design goes like this:

1.  Drawing of the system's boundaries according to certain
    ground rules
2.  Choice of a preliminary system concept
3.  Organization of the design activity and delegation of tasks
    according to that concept
4.  Coordination among the delegated tasks.
5.  Consolidation of the subdesigns into a single design.

The design activity may not follow this sequence. For
example, you might reorganize after discovering a new
design concept that is obviously superior. Of course
reorganizing isn't pleasant, and it's often
expensive too. 

What is certain is that this process is always repeating itself. After
all, as Conway observes, **"there's never enough time to do
something right, but there's always enough time to do it over"**.

Any system of consequence is structured from smaller
subsystems, which are interconnected. The description of the system
starts with the description of its connections to the outside world and then
goes into each subsystem and how they are interconnected,
dropping down a level each time, reducing the scope until we reach the
simplest parts, which can be understood without further subdivision.

The same can be said of a theory, which can also be subdivided
into subtheories and explained in a similar way.

A system or theory can be represented as a
[graph](https://es.wikipedia.org/wiki/Grafo). Each node is a
subsystem that communicates with other subsystems through the branches or
edges. We call these edges interfaces.

{{<figure caption="An example of a linear graph used to represent a system, presented by Conway in his original article: \"How Do Committees Invent?\"" src="https://d2dspjyoh5c79p.cloudfront.net/6b251ba5-5a8a-11e7-8a6c-fd3bc33e2c90-aa9f18b7">}}

The interesting part, and it's what Conway sets out to demonstrate in his article, is
that in the graph you can replace the word system with the word
committee, subsystem with subcommittee and interfaces with coordinators, and
in doing so replicate the organizational structure that designed the
system.

Consider the case of interfaces. Take two nodes X and Y of a
system. They may be connected to each other by an edge. If there is an
edge, then two design groups X and Y (not necessarily distinct)
must have negotiated and reached an agreement on the
interface specification to allow communication between the
two corresponding nodes. If there is no branch between nodes X and Y,
it means there was nothing to negotiate between the two design groups. It's
that simple.

The structure of the system, then, reflects the structure of the
organization that designs it. In mathematical terms, there is a homomorphism
between the graph of a system's design and the graph of the organizational
structure that designed it.

The classic example Conway gives is this one:

> A contract research organization had eight people who were to produce
> a COBOL and an ALGOL compiler. After some initial estimates of
> difficulty and time, five people were assigned to the COBOL job
> and three to the ALGOL job. The resulting COBOL compiler ran in
> five phases, the ALGOL compiler ran in three.

In other words, if you have a three-tier system it's because you have your team
split in three: one team for the front-end, another for the business
tier and another for the data tier. An application divided this
way will be deployed in three separate pieces. 

A monolithic application is usually the product of the initial work of
a single developer, which is then "handed over" to a larger team,
which quickly starts dividing it into modules so it can deal with
its evolution.

Conway reminds us that the structure of a large system tends to
disintegrate during development, qualitatively more so than with
small systems. 

To understand this you have to understand why large systems
disintegrate, and that has to do directly with the homomorphism
we've identified.

Systems disintegrate in three steps:

-   First, the realization by the initial designers that the system
    will be large, together with certain pressures in their organization,
    makes irresistible the temptation to assign too many people to the
    design effort.
-   Second, application of the conventional wisdom of management to
    a large design organization causes its communication
    structure to disintegrate.
-   Third, the homomorphism ensures that the structure of the system
    will reflect the disintegration that has occurred in the design
    organization.

You've surely experienced this many times. Design
teams slowly disintegrate while the design still isn't
completely finished, because their members are needed for other
work. That disintegration is reflected in the structure the
system has taken on, and the ones who suffer it are those developing or
maintaining the system.

When a system is large, odds are we'll ask for a
bigger team. After all, we want to delegate the effort in order to
attack the apparent complexity of the system, which has already reached the
limits of our comprehension. We have a deadline to meet, so we want to
subdivide the work further to get it done. But the initial
designer is caught at a crossroads: wrestle with the complex design
or fragment his knowledge of it through delegation. And the
manager forces delegation, because he can't keep idle
resources.

Another example is when a difficult design task has to be subcontracted
and there are two options: a small, new contractor with an approach
that looks interesting at a cost below budget, or a
more conventional, established organization with a more
"realistic" price. 

The manager knows that if the smaller contractor fails he'll be
accused of wasting resources, but if the more
"established" contractor fails it will be evidence that the problem really is
very hard.

The problem is that accounting criteria, which guide conventional
management practice, tell us that when we talk about human effort
it must be measured by the cost of the hours put in.

The fallacy behind this calculation is that it sets up a linear property
which says that two people working for a year or a hundred people
working for a week are resources of equal value. 

We know that two people and a hundred people cannot have the same
organizational structure, and Conway's homomorphism tells us they won't
design similar systems, so the efforts aren't even
comparable. Experience tells us that if we choose well, and if
they survive the experience, two people will give us a better
system.

If it were a matter of peeling potatoes, putting up walls, or bringing in the
wheat harvest, we could use linearity and assume that bringing in more people helps
cut the time. But for designing complex systems, that isn't
true. And yet people insist on using this linear criterion in
planning and designing our systems.

Conway also warns us that once the manager's prestige and power
are tied to his budget, he will tend to expand his
organization. "Once the organization exists, of course, it will be used.
Probably the greatest single common factor behind many poorly designed
systems now in existence has been the availability of a
design organization in need of work".

The second phase of the disintegration process begins as soon as
delegation starts. We know that the number of possible communication paths in
an organization is proportional to the square of the number of people
in it. Even in small organizations it's necessary to
restrict the degree of communication between people so that we
get anywhere (something that doesn't happen much, given our tendency to hold
expanded meetings to make any decision at all).

So, to restrict these communication channels,
normal management practice leads to setting up hierarchical
structures, where communication flows from the top down and
vice versa. The graph becomes a tree, and the system starts to
take on a similar hierarchical structure (another thing that also tends
to fail when, in organizations, decisions get stuck
at the upper levels and communication doesn't make it down to the
implementers at the lower levels).

## Conclusions

Conway tells us that organizations which design systems will produce
systems that resemble their own communication structures.
This has important implications for the management of system
design.

The obvious conclusion is that flexibility of organization is
important to effective design, because we know the first
design is never the best possible, 

In 1968 Conway recommends that we reward those managers
who keep their organizations lean and flexible. That the management
of design should not be based on the idea that adding more people
adds more productivity. For him this philosophy is key to making
the design of technology a dependable undertaking. 

We're coming up on fifty years since Conway's article was published
and we're still caught in the same traps this author
identified. We keep getting dromedaries, when what we wanted were
horses.
