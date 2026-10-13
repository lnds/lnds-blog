
---
title: "Is software development in crisis because of multicore processors?"
authors: [admin]
date: 2008-11-20T08:25:11-03:00
slug: "is-software-development-in-crisis-because-of-multicore"
draft: false
tags: ['multicore', 'cpu', 'computers', 'crisis']
image:
  placement: 3
---

Our industry loves to [invent crises for itself](/en/blog/lnds/2006/11/02/humanware/), which gets tiresome,
but I understand it, because crises are good for business.

Here's a tip: when you read an article that opens with an alarmist
claim, assume there is someone behind it who wants to create an
artificial crisis, in order to make a lot of money developing some
technology that will solve a problem we probably don't have.

That's the case with the supposed crisis in software development brought
on by the rise of [multicore processors](https://es.wikipedia.org/wiki/Multin%C3%BAcleo). Apparently
there is no capacity to develop programs that take advantage of these
new architectures. [It is said that](https://geeks.ms/blogs/jalarcon/archive/2008/10/10/procesadores-multicore-amenaza-para-la-industria.aspx):

> Apparently, developing efficiently for this is so fiendishly
> complicated that today there aren't enough qualified people to build
> an industry on these chips. CPU makers themselves, like Intel,
> acknowledging the problem, are hiring programmers en masse to try to
> contribute solutions from their side too.

Really?

In the [**November** issue](https://mags.acm.org/communications/200811/) of
Communications of the [ACM](http://www.acm.org/), Bryan Cantrill and Jeff
Bonwick question this apocalyptic view.

The authors remind us that:

> *concurrency has always been employed for one purpose: to improve the
> performance of the system.*

Obvious as this is, it seems to get forgotten, as if the proliferation
of concurrent hardware\
had awakened an anxiety for software to use every available resource.

The truth is we are not obliged to use concurrency just because the
hardware provides it.

There are 3 main reasons to want to program concurrently:

1.  To reduce latency
2.  To hide latency
3.  To increase throughput

The first case depends enormously on the kind of problem being solved;
it is very specific. These problems usually show up in scientific
computing, where the work can be divided a priori into multiple tasks,
and where the data space can also be subdivided, so memory is not shared
during processing.

For that reason, in these cases it is cheaper to run them on grids of
small machines
than to try to run them on a few highly concurrent machines (multicore
or multiprocessor).
Besides, the payoff from reducing latency has to justify the time spent
coordinating the multiple elements.

When we have to run long operations, we can use the latency time to
carry out other actions in parallel. This is the second reason to run
concurrent processes, and it is typically used when the operation can
block waiting for a response from entities outside the program, for
example a disk access, resolving a DNS address, and so on. Tempting as
it is to use concurrency in these cases, think it over carefully,
because having a process (or thread) running in parallel is quite
complicated to manage.

Besides, parallel execution is not the only way to hide the latency
induced by the system, especially since we can get the same effect using
non-blocking operations or event loops. Think of the Unix
[poll](https://www.opengroup.org/onlinepubs/007908799/xsh/poll.html) /
[select()](https://www.opengroup.org/onlinepubs/007908799/xsh/select.html)
primitives.

The third alternative aims to increase performance using concurrency. In
this case, instead of using parallel logic to make a single operation
faster, we can run multiple operations of sequential logic, to get more
work done simultaneously. Here the components that don't share state can
be left entirely sequential, letting the system run them concurrently.

To make it more concrete, think of a web service handling multiple
requests, using the MVC (Model/View/Controller) pattern. In this case
the View, programmed for example in JSP, and the Controller (implemented
as a J2EE bean) consist of purely sequential logic, and yet they achieve
a high degree of concurrency, because the Model (typically implemented
in the database) contributes a high degree of parallelism.

Even though not many people write their own database engines, and far
fewer write an operating system, you can build highly concurrent and
scalable systems (like MVC applications) without ever explicitly
creating a thread. In this case we have concurrency by architecture,
rather than by implementation.

As you can see, there is no need for an army of programmers who are
experts in concurrent programming, and the truth is these complications
are best left to those who really need them (like the programmers of
frameworks such as J2EE, operating systems, and databases).

For most of us, laying out an appropriate architecture is enough to get
the most out of our multicore processors.

I don't think there is any such crisis, or that it is that serious. What
may be going on is that someone wants to create a need for us, to create
a problem we don't really have.
