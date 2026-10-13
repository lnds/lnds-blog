---
title: "Debugging stories"
authors: [admin]
slug: "debugging-stories"
date: 2010-08-21T08:25:11-03:00
tags: ['debugging', 'anecdotes', 'work']
draft: false    
---

The best debugger for a program is the mind. Although the ear helps
too.

![](/images/2010/08/debugger.jpg)

Once a programmer friend of mine had a problem with two stored
procedures. They were almost identical; the only difference was the
source they pulled their information from, the algorithm was the same.
The first returned its answer extremely fast, and the other took
forever. The programmer brought a copy of the database to his PC and
started debugging. When I sat down to help him I noticed something:
when he ran the troubled procedure the computer got noisy. "Why is your
computer making noise?" "Because the fan kicks in." "Yes, but there's
something else." Sure enough, the disk was making noise too, because it
started spinning more than normal. With the faster stored procedure
there was no noise at all and the disk barely moved.
That noise put us on the right track: the problem was in the main table
used by the second procedure, which was the main change between one and
the other. At first we thought it had more data, but no, what was
happening was that it was missing an index. That was the first time I
debugged by ear.

The other story I have for you is more epic ;)

Years ago, we had a contract to implement a "hot backup" system. It
was an unusual and challenging job; this module was an auxiliary piece
of a larger [SCADA](https://es.wikipedia.org/wiki/SCADA) system.

The main contractor, and developer of the SCADA system, had placed the
product as the control system for an automated cement plant in
Talcahuano. Our hot backup component was included as part of the
service, and it was what guaranteed fault tolerance.

This *"hot backup"* module was a nice technical challenge. The system
was deployed in an active/passive setup, that is, it was installed as
two instances on separate servers. The hot backup module monitored the
active server, took care of keeping the database synchronized in real
time between the two servers, and when the main server failed, it was
in charge of activating the second server and leaving it running in the
same state the main one had been in before failing.

I was in charge of development. It was several months of programming
in C++, and quite a bit of research. Everything I learned about
distributed systems in school I applied on that project, and along the
way I learned several things more.

The problem was that from Talcahuano they were reporting that the SCADA
system "went down" under high demand, activating the secondary system,
for no reason that would justify it. Suspicion fell on my hot backup
module. We set up a lab and I came to the conclusion that there was
nothing wrong with my code. Since they didn't believe us, we went to a
meeting with the general manager of the contracting company and
insisted that it wasn't our fault, and that the problem was in the
SCADA. We reached an agreement: I would go with one of the contractor's
engineers to Talcahuano, and we would investigate the causes on site.
If the problem was ours, we would fix it at no cost; if the problem was
the SCADA's, the contractor would pay us for all the hours spent at
double the rate. It was literally double or nothing. My manager,
partner and friend told me he was putting all his trust in me, but he
was worried. It could mean losing a lot of money.

They gave us two weeks to find the cause and solve the problem.
We traveled to Talcahuano and set up shop at the plant. We decided to
add assorted logs in different parts of our code to detect the
problem. Almost every day we made some change. We took the opportunity
to debug and fix other minor details. And yet the days went by, the
system didn't fail, and we couldn't reproduce the situation (we couldn't
simulate anything; we had to wait for the thing to happen).

Before I go on, let me tell you how the plant worked. This was a fully
automated plant that prepared sacks of cement *"just in time"*, that
is, according to demand. The cement was in silos. The SCADA system let
an operator choose the source silos and the number of sacks to
produce. He pressed a button and the machines came to life; the cement
started moving along conveyor belts from the silos until it reached a
bagging robot. It really was a technological marvel, and we liked
watching the system control those machines, software written by a group
of young engineers I worked with for several months. The module that
picked the optimal route for moving the cement was written by one of my
partners, so it was a point of pride for me too.

![](planta.jpg)

There were two days left before the deadline, and we were frustrated.
That day we stayed later, and we noticed that several trucks were
starting to arrive at the plant, which meant the system would be used
more intensively. The night shift operator arrived, a big man, with
huge hands that didn't look suited to handling a mouse. In fact, days
earlier we had taught him how to use the mouse properly, because he had
serious trouble with fine motor skills. He was one of the laborers
retrained to operate the plant. A good person, intelligent, eager to
learn and full of initiative. We stayed to help him, because it looked
like it was going to be a very busy night. Sure enough, this caravan of
trucks arrived every two weeks, and the problem had been reported as
happening with that frequency, so it was also our hope of seeing the
bug.

Suddenly we noticed that the operator was starting to schedule a large
number of loads. One click after another, in rapid sequence. And there,
right before our eyes, the main server goes down, and my hot backup
module kicks in, taking control and activating the secondary.
"There it is, see? That's how it goes down." The seconds passed and the
second server took control, but some of the scheduled tasks weren't
there; they had been lost.

We dove headfirst into the logs. We started going through them, and I
began to feel relieved, and my colleague worried. The problem was not in
my code. A [race
condition](http://es.wikipedia.org/wiki/Condici%C3%B3n_de_carrera) in the
SCADA code was triggered when this operator started pushing the system
too hard. And the records that were getting lost? That wasn't the hot
backup's problem either: a badly programmed queue was being used as a
buffer before loading the real-time database, so the module couldn't
copy that data to the second server if it didn't have access to it yet.

We went back to Santiago. Me, happy, and my colleague with his tail
between his legs. We met with the contractor's manager, me with my
report, and my partner with the invoice. He was delighted.

