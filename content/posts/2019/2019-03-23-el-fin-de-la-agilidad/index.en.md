---
title: "The end of agile (IV)"
authors: [admin]
subtitle: "Part 4: AOR"
date: 2019-03-23T08:25:11-03:00
slug: "the-end-of-agile-iv"
tags: ["agile", "work", "family", "software engineering"]
categories: ["the end of agile"]
draft: false
image:
    placement: 3
    caption: "Toto"
---

(To listen to this post's soundtrack, click [this
link](https://open.spotify.com/user/ediazlnds/playlist/2gXGpqFGB3koMhwdCAaBEw?si=s_zCUh6yTc2IYbp1FQtDCw))

> "Hold the line, love isn't always on time" -- Toto

Love doesn't always show up when you want it to. Sometimes you try
so hard to find it that you end up pushing it away, or you let it go by without
noticing. I remember that in early 1998 a friend, a psychologist, with
whom I learned to read Tarot, told me I had to stop being so
anxious about being single, to stop looking so desperately
for company, that it would come when I stopped
looking.

It turned out that one of Kika's favorite songs is ["Hold The Line"](https://www.youtube.com/watch?v=htgr3pvBr-I),
by [Toto](http://totoofficial.com/), which is about something close to my
friend's advice. As I told you in [part three of this series](/en/blog/lnds/2019/03/19/the-end-of-agile-iii/),
we found each other in late 1998 and never parted again.


So I started 1999 in the best possible way.

## Y2K

> "Carry on my wayward son\
> For there'll be peace when you are done"\
> --- Kansas

I remember those years as very intense and productive. Even
though along the way we ran into the famous Y2K, or [millennium
bug](https://es.wikipedia.org/wiki/Problema_del_a%C3%B1o_2000).


The programmers of legacy systems, built many years earlier,
had decided, for economic reasons, that dates only needed
two digits to store the year. This put the whole world on alert.


Plenty of consultancies and companies made a lot of money off this
problem. I was skeptical about it; I said nothing would happen.
Others, though, many experts, held that we had to prepare
for a true Apocalypse: power plants
would fail, you wouldn't be able to withdraw money from your bank, the world would collapse
on January 1, 2000.

Even though I didn't believe it would amount to much, I still had to
take on the challenge of reviewing every system at the CCS. Eventually
we came across a service written in
[RM-Cobol](https://www.microfocus.com/products/rm-cobol/) that was
distributed to some finance companies. We tracked down the developer, but he was no
longer in software. Like so many others he had gotten fed up with
projects, and he had a thriving swimming pool installation business.
We managed to talk him into reviewing the software; he came in for a few days and
made the necessary adjustments. Apart from that and patching hundreds of
Windows computers, the famous Y2K wasn't much of a headache
for us.

A week before New Year's, on a trip to the supermarket,
Kika and I were talking about the millennium bug. She told me that
some of her classmates in computer engineering had
presented degree theses on the problem; one of
them even talked about pacemakers that would fail and power plants
collapsing.

I remember making fun of all that and telling her nothing would happen. But
we walked down an aisle where they sold candles, and I grabbed a pack and put it
in the cart. "And this?" she asked. I winked and told her
better safe than sorry. She laughed, and of course she never forgot
the episode.

## Software engineering

> "Working hard to get my fill\
Everybody wants a thrill\
Payin\' anything to roll the dice\
Just one more time" --- Journey


With my team at the CCS, whose core was made up of 6 to 8
people, we kept a similar number of projects running each
year. One of the remarkable things about it was that everyone developed;
everyone programmed to one degree or another.


I remember that when I joined the CCS, one of them, Julio Arróspide,
held a project management role, but his previous boss had only
given him the mission of being a messenger to the external vendors.
He was stuck in the awful dynamic of thousands of project managers:
being a message taker. That changed radically within a year.
Julio had become an effective project manager, and on top of that he
did research into new technologies. The whole team had already mastered
DHTML, but I remember it was Julio who first showed me what
could be done with XMLHttpRequest, a technology introduced by
Microsoft in Internet Explorer and later copied by Netscape, which
became what came to be known as Ajax.

My team was innovative and self-motivated, because they were all
born developers, and that, in my opinion, is key to the success of
projects.


Dijkstra said software engineering is a doomed discipline.
The quote is this:


> [\... doomed because it cannot even approach its goal since its goal is
> self-contradictory. Software engineering, of course, presents itself as
> another worthy cause, but that is eyewash: if you carefully read its
> literature and analyse what its devotees actually do, you will discover
> that software engineering has accepted as its charter "How to program
> if you cannot."


There is, in my opinion, a mistaken notion of what it means to develop
software, and the reason this blog exists is to try to make
that fact plain.


In many software engineering books you'll find a diagram like
this one:

![](https://d2dspjyoh5c79p.cloudfront.net/86e47ea0-4d73-11e9-8e69-21c4c306beae-aa9f18b7)

The vertical axis is effort. The horizontal axis is time. The claim is
that the software life cycle has two major phases,
Construction (C in the diagram) and maintenance (M in the diagram).

Of course the maintenance phase takes up more time than
construction over the full life of the software. This diagram is
the product of the linear view people hold of the software development
process.

That view leads to seeing the "construction" of
software as something that must follow a linear sequence, which looks
like this:

![](https://d2dspjyoh5c79p.cloudfront.net/ab76a602-4d76-11e9-8e69-21c4c306beae-aa9f18b7)

This is the famous "waterfall development," also known as *"the
most inefficient way to organize the software development
process"*.

I don't know which comes first, whether the process shapes the structure
of the team or the team shapes the form of the process, but
this way of seeing things forces a separation of
duties.

There are the analysts, the architects who design, the programmers who
build and the testers who test. They all enter the process at
certain stages. The big problem is that once they've finished
their part they're left idle, so we ask ourselves: if the
analysis phase is complete, what are the analysts going to
do?

Other methodologies, like incremental development or RUP, deal with
this, but they're still caught in the trap of linearity. Their proposed
solution is this:

![](https://d2dspjyoh5c79p.cloudfront.net/327647a3-4d77-11e9-8e69-21c4c306beae-aa9f18b7)

This at least makes more efficient use of the "resources" (the
word software engineering uses for people).
This way everyone is busy. Even so, I maintain that it doesn't
work.


## Adult Oriented Rock

> It's more than a feeling (more than a feeling)\
> When I hear that old song they used to play (more than a feeling)\
> --- Boston


My personal life was changing in those days too. I started
getting to know Matías and Javiera, Kika's two young children. With
little Javiera it was easier: she was sweet to me, loved playing
with my hair and welcomed me from the start. Matías, the older one, was more
jealous. When he turned 21 he wrote our story on this very
blog; you can read it here: [A boy and technology](/en/blog/lnds/2010/09/04/a-kid-and-technology/).


I remember telling them mythology stories at night, before
they went to sleep. They loved them. The stories were such a hit
that I started running out of tales, so I bought
Robert Graves's ["The Greek Myths"](https://es.wikipedia.org/wiki/Los_mitos_griegos)
to have plenty more to tell them.

![](https://d2dspjyoh5c79p.cloudfront.net/fa630144-4d77-11e9-8e69-21c4c306beae-aa9f18b7)

In those days you could see me in the mornings walking along Monjitas or
José Miguel de la Barra with a mythology book under my arm.

Love had arrived in my life in full, and without suspecting it I was
starting a family. I was now a young, responsible adult.

So the right thing to listen to was adult-oriented rock (AOR).
Bands like Toto, Boston, Styx or Kansas were the soundtrack of those
times.

The good part is that Kika and I both liked that music, so
a new stereo showed up at my place, replacing the old
CD player, and it let us listen to my large collection of
records and cassettes, curled up on a comfortable sofa that appeared for
some mysterious reason I can't explain to this day. Some
comfortable armchairs appeared too, a refrigerator, a bigger bed,
and my weekend diet stopped being tuna with tomato. The fear of
catching scurvy was behind me.

## Transactions

> You can't concern yourself with bigger things\
> You catch the pearl and ride the dragon's wings\
>   --- Asia

Software development is like life: it unfolds through small
changes that gradually transform the surroundings. Just as my partner and I were
making changes to my apartment, in the same gradual but
steady way our team was taking on more and more
projects.

In those years major reforms came to the commercial information
bulletin. And the CCS decided to adopt a new strategy
for how it provided some of its information services. It
copied the energy distribution model. In the electricity industry
there are generators and distributors. The Chamber would take on the role of
"generator," as the official source of information on delinquencies and
debts. Other companies, such as DataBusiness, Equifax (DICOM), Sinacofi and
others, would play the role of
distributors.

To fit the technology to this business strategy we built
a high-performance transactional system based on
[Tuxedo](https://es.wikipedia.org/wiki/Tuxedo_(software)). It had to
handle some four million transactions a month.

I designed an architecture to meet that challenge. The key was
a technique similar to the one we used at Impuestos Internos, the Chilean tax service, in the
project I told you about in the first part.

The system we were building would be queried for every
credit application made in retail or in the country's
financial sector. These institutions would check whether the person
in front of them had delinquencies or defaulted debts in the system.

At the time, we at the CCS knew that 80% of consumers had
no delinquencies or defaulted debts. So I used that fact
to establish an architectural principle, which I'll put more
or less like this: "the database should only be accessed if the RUT (the Chilean national ID number) is
among the 20% of people who show some degree of
delinquency."

This let us keep a table in memory that allowed us to
quickly separate the delinquent cases from the rest.

We put the solution out to tender and required that this principle be met.
That was crucial, because the system ended up with as much as 50% more
demand than we had originally budgeted for (over six million
transactions). Since 80% could be resolved without touching the
database, response times were extraordinary.

But there were some things we didn't put out to tender and built in-house,
such as integrating this transactional system with the
Visual Basic client-server application (SIAC) used in the
Boletín Comercial offices across the country.

That's when I rolled up my sleeves and programmed two pieces of
software. One was a client, embedded in a [DLL](https://es.wikipedia.org/wiki/Biblioteca_de_enlace_din%C3%A1mico),
written in Delphi of course, that talked over sockets to a
server.

The server was a Unix process written in C that connected to the
Tuxedo server. It was essentially a gateway. The gateway was
built for simplicity and for cost. Every Tuxedo client carried an
additional cost, and integrating it from a Visual Basic application was
no small task, and an invasive one.

As an aside, in 2011 the CCS called me to help them
migrate the gateway to a 64-bit version of Linux. My application
had been running for 10 years without failing, and I suspect it's still in
use, but that's another interesting story I'll tell you
later.

## Iterations

> "It's the eye of the tiger, it's the dream of the fight\
> Risin' up to the challenge of our rival" --- Survivor

The key to developing software, in my opinion, is recognizing its
iterative, circular, repetitive nature. And there's nothing better
than turning to Mapuche cosmology to tackle the problem.

Every software process rests on four stages, which I'll express with
this drawing modeled on a [Mapuche cultrún](https://pueblosoriginarios.com/sur/patagonia/mapuche/kultrun.html), the ceremonial drum

![](https://d2dspjyoh5c79p.cloudfront.net/e5051de5-4d79-11e9-8e69-21c4c306beae-aa9f18b7)

Every software development process is made up of the four Ds of the
cultrún: Design, Development, Debugging and Deployment.

Notice that the waterfall diagram doesn't mention deployment or
delivery, something that tends to be neglected, which has led to a lot of
improvisation around an aspect that is
crucial.

The beauty of our cultrún is that it lets us optimize time and
release software very fast, even in parallel. The development
team does everything; it's a cohesive unit focused on delivering a
product at the end of each cycle. [So thanks to this magic cultrún
we can do this:]{style="letter-spacing: 0.01rem;"}

![](https://d2dspjyoh5c79p.cloudfront.net/18cdf3e6-4d7a-11e9-8e69-21c4c306beae-aa9f18b7)


Each cultrún in this diagram is a short cycle in which
we develop new functionality that can be released for
our users to use.


Each line in this diagram can be a project, a microservice, a
module, a service, anything that can be taken on by the
cultrún team that repeats the cycle of the four Ds in every
iteration.

In other words, in this particular drawing we have 4 cultrún teams that have
completed 24 iterations (6 each). If each iteration is 1 month,
in 6 months they've made 24 deliveries.


And that, kids, is ***the end of agile***.

But we're just getting started. Stay with me for our next
episode.

### Notes:

Part 1 is
[here](/en/blog/lnds/2019/03/17/the-end-of-agile/)

You can read part 2 at [this link](/en/blog/lnds/2019/03/18/the-end-of-agile-ii/)

Part 3 is [here](/en/blog/lnds/2019/03/19/the-end-of-agile-iii/)

Part 5 is [here](/en/blog/lnds/2019/03/31/the-end-of-agile-v/)
