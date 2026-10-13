---
title: "Simulation and science"
authors: [admin]
date: 2010-10-06T08:25:11-03:00
slug: "simulation-and-science"
tags: ['science', 'models', 'simulation']
draft: false
---

Can someone explain to me how Tecnologías de la Información (Information Technology) can
be abbreviated TIC? Just like that, with a C at the end. Well, the academics at the DCC, where
I studied, have taken to abbreviating it that way, instead of TI (see
[here](http://dccuchile.blog.terra.cl/2010/09/23/escience-el-punto-de-encuentro-entre-las-tecnologias-de-la-informacion-y-la-ciencia/)).
But fine, that's a minor detail, of little importance (though
worrying).

I'm more worried by Claudio Gutierrez's claim: _"Those who
work in simulation know that solving a complex problem doesn't
require much theory."_ (taken from [The End of
Science](http://dccuchile.blog.terra.cl/2010/10/05/el-fin-de-la-ciencia/)).

Gutierrez's argument is basically that, given the enormous computing
capacity being developed, scientific reasoning and
modeling will be reduced to something as useless as the
metaphysical debates about the aerodynamic properties of the wings of
angels.

I don't know how much simulation Professor Gutierrez has done in his life,
but if there's one thing those of us who practice computing know very well,
it's the old principle of simulation, GIGO, Garbage In Garbage Out:
a simulation is only as good as the knowledge of the person
who wrote it. You can only simulate what you understand.

Let me quote Mark Chu-Carroll, a PhD in computer science
who works as an engineer at Google, who explains very well how this
simulation business works (the text is long, but worth it):

> So - what's the problem with simulation? It's not that we don't have
> enough computational power. The amount of computational power available to us
> is truly mind-boggling. Many things that would have been completely impossible
> just a few years ago have become absolutely routine. Sitting on my lap, I've
> got a computer with two CPUs, each running at 2.5 gigahertz. Under my desk,
> I've got a computer with 8 CPUs. And I routinely run programs that use
> several _thousand_ CPUs in a datacenter. That's not unusual
> today: people who want to run simulations can easily and cheaply
> get access to clusters of thousands of computers.

So computer power isn't a problem. Using modern computers
and software, we've easily got enough power to run incredibly complex
simulations.
 
> [...] The problem with using simulations for testing has absolutely
nothing to do with computational power. No matter how much computational
capability you have available, there's still a huge, fundamental problem with
simulations. It's not particularly hard to understand: simulations only do
*what you tell them to*.
>
> Let's start at the beginning: just what is a simulation? It's a
model of a real system, which attempts to reproduce the effects
and/or behavior of the system that it models. In the case of computer
simulations, which is really what we're talking about, we produce a
mathematical model and algorithmically describe how the model evolves over
time. In other words, we write a computer program that runs a mathematical
model of a process.
>
> And right there is the problem. We produce the model, and
we implement the model. It does exactly what we tell it to. We
programmers have a saying which applies particularly well to simulations:
garbage in, garbage out. Computers do exactly what you tell them to; if what
you tell them to do isn't right, then no amount of computer power is going
to change the fact that you didn't tell them to do the right thing.
> 
> If we really understand what we're simulating, we can do simulations that
are astonishingly accurate. For example, we can do wind tunnel simulations of
aircraft designs, and the results of those simulated experiments are perfect
to within our ability to measure them. We've got it down well enough that we
can get more precise results with a computational model than we can
with a scale model in a wind tunnel. We understand how air flow works. We
know how to model it. It takes a whole lot of computation to do a decent job
of it, but as I said before, lack of computational resources isn't generally
a problem.
> 
> But we can't simulate something if we don't know how it works. [...] And if we don't
have an accurate model, we can't build an accurate simulation.
>
> [...] There's another aspect of simulation that's important: validation. Even in
the best simulations, you can't be sure that the simulation is correct until
you test it. That testing is called validation. To validate a
simulation, what you need to do is to take some starting point in both the
real world and in the simulation, and observe both for some period of time,
and then check that the results of the simulation and the real-world match.
For example, for air-flow simulations, you put an object into a wind-tunnel and
measure everything; then you simulate putting an object into a wind-tunnel
with the program; and then you compare the results.
> 
> Without validation, you have no way of knowing if your model is correct.
>
> [...] From all of this, it might sound like computer models are boring and not
terribly useful. After all, all that they can do is what we tell them to. So
don't we always know the results before we start?
> 
> Fascinatingly, no. We have some amazingly precise models of physical
phenomena, but understanding what those models mean when they're scaled up to
life size is incredibly difficult. And in fact, sometimes, we simply don't
know how to see what a model says about how a system will evolve through time
without actually watching it progress. For example, I mentioned computational
fluid flow above. We don't know if it's possible to compute the
result of a fluid flow system without simulating it through discrete time
steps. Simulation is incredibly useful, because it lets us take dynamical
systems, and watch how they evolve over time.
> 
> So simulation absolutely has a role. And hopefully, it can reduce
[for example] the number of animals that are used in medical experimentation. But it can
never replace them. There really is no substitute for reality.

["Animal Experimentation and Simulation"](http://scienceblogs.com/goodmath/2010/03/_in_my_post_yesterday.php)

Chu-Carroll explains all this in the context of a discussion about the
possibility of replacing animal experimentation in
disease research, one of the most complex topics
science tackles today.

Professor Gutierrez argues that it's all a matter of computational
power, and that this will make reasoning unnecessary,
precisely the opposite of Chu-Carroll. And to back up his point,
Gutierrez offers the example of the [game of chess](/en/blog/lnds/2008/01/18/chess/), confusing a brute-force search algorithm with simulation, and boldly
extrapolating that this will be the end of science. There are other problems
with the arguments presented (such as the contrast with 
[Chaitin's model of the laws of nature](/en/blog/lnds/2012/05/18/everything-is-software/)), but we'll leave it here.

What I want to make clear to you is that the claim _"Those who
work in simulation know that solving a complex problem doesn't
require much theory"_ is, as shown above,
completely false.
