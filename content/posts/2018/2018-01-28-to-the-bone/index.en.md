---
title: "To the Bone"
authors: [admin]
subtitle: "(The Chain, part 2)"
date: 2018-01-28T08:25:11-03:00
slug: "to-the-bone"
draft: false
tags: ['blockchain', 'CAP theorem', 'consensus', 'distributed systems']
image:
  placement: 3
---

> *"Once we've made sense of our world,\
we wanna go fuck up everybody else's\
because his or her truth doesn't match mine.\
But this is the problem.\
Truth is individual calculation.\
Which means because we all have different perspectives,\
there isn\'t one singular truth, is there?"\
-- Steven Wilson in "To the bone"*

For Steven Wilson, the meaning of many of the songs on his fifth
album, "To The Bone", has to do with truth, conceived as
something that can be manipulated and filtered to mean whatever suits
us best, whether you are a politician, a terrorist or simply someone
trying to convince themselves that their relationship is fine, even though
it isn't.

We could say that if it exists, truth must be something we
all agree on, that is, nobody should question a truth,
but it's not that easy. Truth is not defined by consensus, or is it?

Even in the logical, bistable world of computers, consensus
is not an easy thing to define. And that is what we are going to talk about this
time.


## The space shuttle computers

When I was a teenager I read a piece about the space
shuttles which said that these spacecraft had a
set of four computers working redundantly, which
gave the whole system fault tolerance. If
one computer malfunctioned, the other three detected
the situation and disconnected the failed computer. The mechanism by
which these computers detected this situation was something that intrigued me
and that took me several years to learn and understand in detail.

{{<figure caption="Launch of Discovery's STS-124 mission; during this mission a Byzantine fault occurred among its four computers" src="https://d2dspjyoh5c79p.cloudfront.net/f8920411-0425-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

At the time the space shuttles were designed, the
theory of redundant systems barely existed. It is said that NASA
made it a priority to solve the synchronization problem
among these computers. In particular, the hardest part was
determining, effectively, when one of the computers should
take control and deactivate the others in the event of a failure.

One of the keys when planning redundancy is determining how many
computers are needed to reach a certain level of safety. One
solution is to go with five computers. If one fails, operations
continue normally. When two computers fail we are in what
is called a "fail-safe" situation, since the other three prevent
the dreaded situation of dual computer systems (one is
failing, but which one?)[^1]. Despite these considerations,
NASA used four computers and not five.

The general problem is how to handle the situation in which failed
components give conflicting information to different parts of the
system. In 1981 a group of researchers from Stanford tackled this
problem in a famous paper with a curious title: "The Byzantine
Generals Problem"[^2].

{{<figure caption="Leslie Lamport, Turing Award winner, author of LaTeX and lead coauthor of the Byzantine generals paper" src="https://d2dspjyoh5c79p.cloudfront.net/42eb69b2-0427-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

## The Byzantine Generals Problem

> *"We're drilling through their stone\
Ho-oh, down through every fairy story"*


Leslie Lamport and his colleagues, the authors of that paper,
expressed the problem through a thought experiment:

> "A group of generals of the Byzantine army camped with their troops
> around an enemy city. Communicating only
> by messenger, the generals must agree
> upon a common battle plan. However, one or more of them
> may be traitors who will try to confuse the others. The
> problem is to find an algorithm to ensure that the loyal generals
> will reach agreement."

Together with Robert Shostak and Marshall Pease, Lamport showed the
conditions that must hold to solve this problem. In
particular, using simple oral messages, the problem can only be
solved if more than two-thirds of the generals are loyal.

To tidy things up a bit, we will assume there are n generals, one of
them is the commander, and the other n-1 generals are his lieutenants. That
way, one way of stating this problem is the following:

> A commanding general must send an order to his n-1 lieutenant
> generals such that:
>
> - IC1: All loyal lieutenants obey the same order.
> - IC2: If the commanding general is loyal, then every loyal lieutenant
> obeys the order he sends.

Conditions IC1 and IC2 are called the interactive consistency
conditions.

Let's see how this could work.

We know there are ***n*** generals, one commander and ***n-1*** lieutenants,
so the commander sends a message to each lieutenant, and in turn each
lieutenant shares his orders with every colleague. Given this, each general
must review n-1 messages and act based on the messages he has
received. For example, if the majority says attack, then he
attacks; if the majority says retreat, then he retreats.

Let's look at an example. In the following figure you can see the case where
there are three generals and one of them is a traitor (it can be the commander or
one of the lieutenants). In this configuration one of the lieutenants receives
two contradictory orders, and therefore cannot make a
decision. The traitor has managed to paralyze the army.

{{<figure caption="The case of three generals and one traitor, taken from the original paper" src="https://d2dspjyoh5c79p.cloudfront.net/353518ed-03bb-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

The way to solve the problem is to use infallible messages, that
is, texts that cannot be altered by the messengers. For this,
we must define three conditions that have to hold:

> A1. Every message that is sent is delivered correctly (that is, it
> cannot be altered).\
> A2. The receiver of a message knows who sent it.\
> A3. The absence of a message can be detected.

If these hold, Lamport and his colleagues show that it is possible to solve
the problem with *n = 3m+1* generals. Given this condition, the authors
show a first algorithm that guarantees a solution if there are at most *m*
traitor generals (in practical terms, there must be four or more
generals for a solution to exist).

Let's translate this to the reality of the space shuttle, where there were
four computers, and a fifth as a backup. In this context a
"betrayal" translates into a failing computer (for example,
one delivering incoherent information). What we want is to determine which
computer to shut down in this situation. The first solution proposed by
Lamport only lets us pin down the failure of one computer at most.

To improve on this, Lamport offers another alternative, an algorithm in which
the messages are signed. In this case, the three-generals case
can be solved. The algorithms proposed in the paper require
receiving messages from all the generals, or defining a default
strategy for when a message is lost. The paper refers
to the fact that when it comes to computers, it is essential that they
operate the same way, are synchronized and, as far as possible, share
information efficiently. In the case of the space shuttle,
the processors share the data bus, and over the course of
this space program modifications were made to deal with various
"Byzantine faults" that came up[^3].

## The Discovery's Byzantine fault

During the shuttle Discovery's STS-124 mission, in 2008, a
fault occurred that could have ended in disaster. During
fueling, a 3-1 disagreement arose among the
ship's computers, that is, the results from one of the
computers did not match what the other three reported. Three
seconds later there was a 2-1-1 split, that is, only two
computers agreed, and the other two showed
discrepancies. This forced the launch countdown to
be stopped.

While the situation was being reviewed it reached a 1-1-1-1 split, the
worst possible state: no computer agreed with the other
three. However, there was nothing wrong with the computers. The
failure was in other components of the system, called MDMs,
Multiplexer/DeMultiplexers. The MDMs are a kind of remote
router that channels all the ship's I/O signals to the
computers. The cause of the problem was a physical crack in a diode
inside one of the MDMs. The figure below shows the photograph of
the cracked diode (affectionately nicknamed "the Byzantine assassin").

{{<figure caption="The photograph of the Byzantine Assassin" src="https://d2dspjyoh5c79p.cloudfront.net/b5ad5315-042b-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

## Byzantine faults

> *"But behind the closed doors\
The bees were buzzing\
Inciting me to war\
You're penitent maybe\
But it's really not your fault you fail to see"*


We say fault tolerance is Byzantine when there is imperfect
information for determining whether a component is failing. This happens
mainly in distributed systems.

In a "Byzantine fault", a component (for example, a server)
can inconsistently appear as working or failed to the
failure detection systems, that is, it presents different symptoms
to different observers. In this case it is hard for the other
components of the network to declare it failed and disconnect it from the network,
because first a consensus must be reached to decide whether the
component is considered failed.

In the case of the STS-124 fault there was no failure in any
computer, but during the crisis it was impossible to establish
that.

This kind of fault doesn't only happen in distributed systems; there is an
example that comes from biology.

### Byzantine bees

When bees must choose a new home for their queens, they send out
scouts to look for a suitable place. Scientists have
found that bees reach a consensus to decide the new
location for the hive. In various experiments, it was established that
when offered two equally attractive alternatives, the bees
cannot decide, the swarm splits and all the bees die.

## Consensus

> *So pariah you\'ll begin again\
Take comfort from me\
And I will take comfort from you*

Now we are going to discuss how to avoid the fatal fate of
the bees, but first we have to recall a concept we discussed
a while ago.

> The CAP theorem

When we talk about distributed systems we would like to guarantee three
things:

1.   CONSISTENCY: we would like all nodes to have a consistent
    view of the system.
2.   AVAILABILITY: every request gets served.
3.  PARTITION TOLERANCE: the system works even if
    messages are lost.

These three guarantees are called CAP, after their initials
(Consistency, Availability, Partition Tolerance). I have talked about
this topic before in [this article](/blog/lnds/2012/05/25/dos-de-tres-el-teorema-cap).

The important thing to remember here is that there is a result telling us that
we cannot have all three guarantees at the same time in a distributed
system; at most we can guarantee two.

We can have these combinations:

-   CA: which guarantees correct answers only while the connection
    works well; this is the case in centralized systems.
-   CP: which guarantees correct answers even if there are failures in the
    connection, but the answer may not be there (weak availability).
-   AP: "the best" answer is always provided even in the presence of
    connection failures (in this case consistency is eventual).

{{<figure caption="The CAP theorem and the kinds of combinations available on which we can run our distributed systems" src="https://d2dspjyoh5c79p.cloudfront.net/869f9eb6-042c-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

## Byzantine faults and partition tolerance

When a Byzantine fault occurs, we are facing a scenario in which
a machine responds incorrectly. To correct a Byzantine
fault in which ***f*** machines are failing, we will need
***2f+1*** replicated machines.

To decide which machine to shut down in a Byzantine fault we must
find consensus. There are several possible kinds of consensus:

-   **Strong consensus:** all the machines, or nodes, must agree in
    their answers.
-   **Majority consensus:** there must be agreement among the majority.
-   **Plurality consensus:** when a plurality agrees, not
    necessarily the majority.
-   **Quorum consensus:** it is defined that **n** nodes must agree.
-   **Disabled consensus:** we don't care about consensus, we care about
    the first answer we get from any node.

When we have strong consensus the system is CP; when we have disabled
consensus we are looking at an AP system. And there is a gradient
from CP to AP as we relax the level of consensus.

## Consistency

> *"A sea we can sail\
Then sink like a stone\
Down to the truth\
Down to the bone"*

We have now defined criteria for declaring consensus. It is evident that
strong consensus cannot be reached in the face of Byzantine faults, so at
the operational level we must define a desired level of consensus (for
example, majority, or quorum) and of consistency.

If we want strong consistency (CP) we are going to sacrifice the
availability of the system and will need a higher degree of replication.
If we go for high availability we have to sacrifice
consistency and we don't need as much replication.

To reach consistency we need mechanisms for distributing
messages among the nodes. There are several alternatives; one interesting
way to do it is **gossip protocols**.

To illustrate this we are going to look at the case of Dynamo, a
distributed data system created by Amazon.

Dynamo[^4] is a distributed database where the replication factor can be
chosen for each table. To reach consensus it uses a
gossip-style protocol. It uses quorums: there are multiple
nodes for reads (R) and writes (W). On each operation at least R or W
nodes must confirm the operation. A higher R or W gives more
consistency, sacrificing availability.

A gossip protocol is a way of spreading
messages across the network the same way rumors work, or
the way epidemics spread.

The idea is very simple. Let's see how rumors spread in an
office. For example, Alicia decides to spread a rumor, so she
heads to the coffee area on her floor, finds Benito and tells him the
gossip. Both go back to their desks, and at some point Benito
runs into Carlos, or Alicia runs into Daniela, and they pass the
rumor on, and so it keeps propagating through random encounters.

A gossip protocol is one that satisfies the following conditions:

-   The core of the protocol involves periodic interactions between
    pairs.
-   The information exchanged during these interactions is of a
    fixed, bounded size.
-   When the participants, or agents, interact, the state of one
    agent changes to reflect the state of the other.
-   Reliable communication must not be assumed.
-   The frequency of the interactions is low compared to
    latencies, so that the protocol costs are negligible.
-   There is some degree of randomness in peer selection. Peers are
    selected from the set of all nodes or from a
    small set of neighbors.
-   Due to the replication there is an implicit redundancy in the delivered
    information.

Gossip protocols are very efficient, especially because the
structures of massive distributed systems can be complex and
huge, and this is a very effective way to disseminate information
quickly at a reasonable cost.

### Detecting inconsistencies

> "Hold on, down and deeper, down we're going\
Way down through the floor\
Oh, don't you wanna see what\'s at the core?"

Since data in Dynamo is distributed, it can happen that
two nodes hold data that is inconsistent with each other. Dynamo has a mechanism
to detect this inconsistency and report it, although the
reconciliation process, that is, the decision about which value should
be considered valid, is something that must be decided by the application using
Dynamo as storage.

To detect inconsistencies Dynamo uses a data structure
known as a Merkle tree.

This data structure makes it possible to detect inconsistencies quickly and
minimize the amount of data to transfer. A Merkle tree is a
tree that stores the values of a hash function applied to
individual keys. The parent nodes higher up in the tree hold
the hash value of their respective children. The main advantage of the
Merkle tree is that each branch can be verified
independently, without a node having to download the entire tree or
the whole data set. For example, if the hash values of the roots
of two trees are equal, then the values of the leaf nodes in the
tree are equal and the nodes don't need to be synchronized. If not, this
implies that the values of some replicas are different. In that case,
the nodes can exchange the hash values of the children and the
process continues until it reaches the leaves of the tree. At that point the
servers can detect the keys that are out of sync.

Dynamo uses Merkle trees as follows: each node maintains a separate
Merkle tree for each key range covered by the node. This
lets nodes compare whether their keys are up to date. In
this scheme, two nodes exchange the roots of the trees
corresponding to the keys they hold in common. And so,
successively, traversing the tree in the way just described, the nodes
determine whether there are differences and the appropriate synchronization
actions are carried out. The downside of this is that many keys
change when a node joins or leaves the system, which requires
these trees to be recalculated.

The following three figures[^5] show how all of this is used
to maintain consistency in Dynamo:

{{<figure caption="Merkle trees used in Dynamo" src="https://d2dspjyoh5c79p.cloudfront.net/1bbc5287-0433-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

{{<figure caption="Dynamo's anti-entropy protocol: the servers exchange their Merkle trees, compare the roots first and then check for inconsistencies by navigating the branches of the tree." src="https://d2dspjyoh5c79p.cloudfront.net/37fcaee8-0433-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

{{<figure caption="The gossip protocol ensures that eventually all nodes share the same view of the system, or that a failure or inconsistency is detected." src="https://d2dspjyoh5c79p.cloudfront.net/6c255829-0433-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

## Truth is individual calculation

In distributed systems there is no central source of authority. The
state of the system depends on resolving the inconsistencies that can
arise. In particular, in the presence of Byzantine faults, it becomes
necessary to define mechanisms for managing them and identifying
those situations. We have seen how a distributed system like Dynamo
tackles this problem of reaching consensus given the possibility of Byzantine
faults. As you can see, it is something fairly complex that has required
developing some rather ingenious techniques to solve.

The most important thing I want to get across in this post is the idea that in
distributed systems consensus is the fruit of the individual calculation of
each node, or as Steven Wilson says:

> Truth is individual calculation. Which means because we all have\
> different perspectives, there isn't one singular truth, is there

{{<youtube c3pxj8LnruQ>}}

### Notes:

The English epigraphs are taken from the following songs on
Steven Wilson's album "To The Bone": "To The Bone", "Pariah" and
"People who eat darkness".


[^1]: Computers in Spaceflight: The NASA Experience [https://history.nasa.gov/computers/Ch4-4.html](https://history.nasa.gov/computers/Ch4-4.html)

[^2]: The Byzantine Generals Problem, [http://bnrg.cs.berkeley.edu/\~adj/cs16x/hand-outs/Original\_Byzantine.pdf](http://bnrg.cs.berkeley.edu/~adj/cs16x/hand-outs/Original_Byzantine.pdf)

[^3]: [https://c3.nasa.gov/dashlink/projects/79/wiki/test\_stories\_split/](https://c3.nasa.gov/dashlink/projects/79/wiki/test_stories_split/)

[^4]: Dynamo: Amazon's Highly Available Key-value Store [https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)

[^5]: https://www.slideshare.net/yellow7/cassandra-backgroundandarchitecture](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)

 