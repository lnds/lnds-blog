---
title: "The end of agile (II)"
authors: [admin]
subtitle: "Part 2: Britpop"
date: 2019-03-18T08:25:11-03:00
slug: "the-end-of-agile-ii"
draft: false
tags: ["agile", "continuous integration", "DevOps", "entrepreneurship"]
categories: ["the end of agile"]
image:
    placement: 3
    caption: "Oasis"
---

**(to listen to this post's soundtrack, click [this
link](https://open.spotify.com/user/ediazlnds/playlist/1qmHFjyYkB8HRCLNCs93IT?si=GONlxBSWT8mFoRrP74KVBA))**

> By now you should've somehow\
> Realized what you gotta do\
> -- Noel Gallagher

1998 didn't start well. The third Oasis album had been a flop.
Sure, it's very hard to top [Definitely Maybe](https://en.wikipedia.org/wiki/Definitely_Maybe) and ["What's the Story (Morning Glory)"](https://en.wikipedia.org/wiki/(What%27s_the_Story)_Morning_Glory%3F).

That's the problem with shooting stars: they struggle to repeat one
hit after another, and they have to accept that things stop going
well.

I had been dating a cheerful, brilliant engineer who,
unfortunately, never let me take our relationship any further. In
early 1998 I was alone again, this time in a small
apartment on Miguel Claro, in Providencia, Santiago, listening to britpop and
grunge, staring at the ceiling, or chatting on IRC.

In the [first part](/en/blog/lnds/2019/03/17/the-end-of-agile/) I
told you things at the company weren't going well. Even so, we got
an invitation, and in February 1998 I was on a plane headed for Silicon
Valley with my friend Ubaldo. We went to represent
our respective companies at the worldwide conference
of [Borland](https://en.wikipedia.org/wiki/Borland),
whose development products we distributed in Chile.


![](https://d2dspjyoh5c79p.cloudfront.net/ba9f966e-49e5-11e9-8e69-21c4c306beae-aa9f18b7)


The timing mattered, because they were launching the second version of
[JBuilder](https://en.wikipedia.org/wiki/JBuilder) and
[Delphi](https://en.wikipedia.org/wiki/Delphi_(IDE)) 4, two of the
company's best products.

My particular mission was to see whether we could get better
terms for selling [InterBase](https://en.wikipedia.org/wiki/InterBase), an embedded database we used in some of the solutions Énfasis
sold.

Those were the days when a new paradigm was taking over, RAD:
[Rapid Application Development.](https://en.wikipedia.org/wiki/Rapid_application_development)
The idea was to prototype quickly, interact with the user,
bring them in close and make them part of the process. The promise was that you sat down with
your user in front of the computer and together you worked on the design of a
prototype of the system. Integrated development environments made this easier,
using direct manipulation to build screens
and systems. That, my friends, really was being agile. Of course it never worked
that way. But let's get on with the
story.

Back then our friend Claudio Briceño worked at Borland. When
we got to San Jose we headed for his house. I think Ubaldo
rented a car and we took the road to Los Gatos, where our
host lived.

Claudio had been successful in Chile selling Borland's products,
in particular [Quattro Pro](https://en.wikipedia.org/wiki/Quattro_Pro),
a spreadsheet that was the subject of a
[famous intellectual property lawsuit with Lotus 1-2-3](https://en.wikipedia.org/wiki/Lotus_Dev._Corp._v._Borland_Int%27l,_Inc.),
a sad story that ended with both products destroyed and
Excel emerging as the dominant spreadsheet
software. But our friend Claudio made his mark before all that.
He did so well that the US offered him a spot at
Borland headquarters to help run Borland's Latin
America division.
Ubaldo, my travel companion, had his own company, [EXE](http://www.exe.cl/en/).
Its offices were on the top floor of our building back then.
He still runs his company, and apparently suffers from Benjamin Button's condition,
though you'd have to ask him what his secret is. Sports, I suppose,
or having a beautiful family.

It was a Sunday afternoon when we got to Claudio's house, and the Super Bowl
was on that day. He and his girlfriend were watching the game with some
friends. We walked in and greeted everyone, the women
with a kiss on the cheek, which got their attention. We didn't know
that wasn't the custom in the US, but Claudio's girlfriend
made our excuses, because she had lived in Chile and knew our
ways. I remember that more than watching the game, what they did was
bet on the scores and the runs. I didn't understand a thing, but I
put down a few dollars anyway, and I won! I don't know how, but at some point I had
several bills in my hands. We were off to a good start.

We finally settled into our hotel and an intense week
of conference began. Since we had arrived a couple of days before
the main event started, we got the chance to see Borland's beautiful
campus in Scotts Valley.


[One of the gardens and a building on the Borland campus](https://d2dspjyoh5c79p.cloudfront.net/33b4df8f-49e9-11e9-8e69-21c4c306beae-aa9f18b7)


They introduced us to several of their executives, one of whom was one of the
founders of dBase. Unfortunately the creator of Turbo Pascal and Delphi,
the great [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg), had
left Borland in 1996 to work for Microsoft. The famous
[Philippe Kahn](https://en.wikipedia.org/wiki/Philippe_Kahn) wasn't at the company anymore either.
In 1998 Borland was like britpop: in outright decline.

Still, visiting them was interesting, because they remained one of the
most important product development companies in Silicon Valley.
Seeing their development process was an opportunity I wanted to
take.

That's where I met **continuous integration.**

> "Hay muchas cosas que quiero decir, pero no sé cómo"\
>   - Wonderwall

People said britpop was the English reaction to grunge. One of its
traits is that it salvaged a lot of British pop culture,
especially from the late sixties and early seventies. On the other
hand, Kurt Cobain once said he'd rather die than turn into a
Pete Townshend. I don't know if he said it to provoke the English, but
plenty of them didn't like it. In spite of that, Noel Gallagher said the
only contemporary songwriter he respected was Kurt Cobain, and that
he could perfectly well have written Wonderwall.

In February 1998 I ran into a wonderwall of my own.

[While touring the Borland campus we walked into a room
with a row of screens and computers showing
dashboards with indicators and red and green marks. They were the "build
machines" for Delphi, C++ Builder and other Borland
products.]{style="letter-spacing: 0.01rem;"}\

The Borland team had an automated build and
testing process. One of the people who developed that process was
[Tara Hernandez](https://en.wikipedia.org/wiki/Tara_Hernandez)[, who
later took charge of creating and running the Release Team at
Netscape.

{{<figure caption="Tara Hernandez; on the screen in the background you can see Netscape's continuous integration system" src="https://d2dspjyoh5c79p.cloudfront.net/167daaa2-49ea-11e9-8e69-21c4c306beae-aa9f18b7">}}

The image above is a frame from the documentary [Project Code Rush](https://www.youtube.com/watch?v=4Q7FTjhvZ7Y)[, which shows how
Netscape released its code in what came to be called the Mozilla
project.

What you see on that screen behind Tara Hernandez is more or less what
I saw at Borland. It was a wall of red, green or
yellow indicators showing whether the tests had passed or not.

Continuous integration and automated tests in 1998, and they had been
doing it since 1994.


{{<figure caption="Another frame from the documentary Project Code Rush, showing the status screen of Mozilla's continuous integration system." src="https://d2dspjyoh5c79p.cloudfront.net/7b9fdd43-49ea-11e9-8e69-21c4c306beae-aa9f18b7" >}}

Truth is, automated tests weren't unknown. What was
new to me were the dashboards, the indicators, visible
to everyone. We were used to writing Makefiles, or
scripts that ran a few tests against our code and dumped
results to the console. But that wonderful wall, the wonderwall, was
what impressed me. The fact that everyone could see the state of
the tests on a web page: that, I had never
seen.

At the end of the visit they handed us CD-ROMs with the latest build,
made that same day, of C++ Builder or Delphi, I don't remember which. They
told us we had until launch day to find bugs.
Every critical bug found was rewarded with several hundred
dollars. Finding a bug that blocked the launch was worth about 500
dollars, if I remember right.

That night I got as far as installing the IDE on my laptop, but honestly
I couldn't do anything with it. I was very sleepy and had a lot of information to
process. I was fascinated by the way they worked at Borland.

Claudio told us there had been a time when developers
slept at the office before every product
launch, but that had changed. By the time we visited it was
forbidden, officially.

One night, after some party at the Borland offices, we
ran into a few developers from the JBuilder team. It was an
interesting conversation. But we noticed that some of them
were carrying blankets, tucked out of sight. They looked tired, but they were young,
and you could tell they were deeply committed to everything going right. They still
had a lot of bugs to fix, and launch day was getting close.
I suppose by that point everyone was ignoring the official policy for
a while.

There are plenty of stories I could tell about that trip. They'll keep for another
time, because 1998 was a year of many changes in my life, and I'll
tell you about that later.

I went back to Santiago and tried to put everything from that
trip to use. But despite all the effort, things didn't improve.

In the second half of 1998 I was starting a new stage in
my professional career. At thirty-two, for the first time, I
put on a suit and tie to go to work. I had been invited to
take the post of Deputy Manager of Systems Development at a large and
prestigious institution, the Santiago Chamber of Commerce
(CCS).

Of course I panicked. I wasn't at all sure what I had gotten
myself into. I think I suffered from [impostor
syndrome](https://es.wikipedia.org/wiki/S%C3%ADndrome_del_impostor) during those first months.

And the Chamber's conservative atmosphere and culture didn't help
either.

On the first day I was sitting in an enormous office in an old
building in downtown Santiago. I had been warned the spot
was temporary. That office was bigger than my boss's, and it had
belonged to the previous operations manager, who was being replaced by Jorge,
the person who had hired me. I didn't know he was just landing
at the CCS, same as me.

The other thing I remember from that first day is a secretary
coming up to me with a "circular." It was an envelope containing a
memorandum I was supposed to read. Along with the envelope came a list of
recipients: all of us who had to read that document.
Once I had read it, I had to return it signed so it could move on to the
next executive on the list.

Yes, I was in 1960. ["Modern Life Is Rubbish"](https://en.wikipedia.org/wiki/Modern_Life_Is_Rubbish)

That's how my days at the CCS began, a time I'll tell you about in detail in the
next part.


{{<figure caption="Cover of Modern Life Is Rubbish, by Blur" src="https://d2dspjyoh5c79p.cloudfront.net/c567d854-49eb-11e9-8e69-21c4c306beae-aa9f18b7">}}

### Notes:

The first part of this series is
here: [https://www.lnds.net/blog/lnds/2019/03/17/el-fin-de-la-agilidad](/en/blog/lnds/2019/03/17/the-end-of-agile/)

The third part of this series is at this
link: [https://www.lnds.net/blog/lnds/2019/03/19/el-fin-de-la-agilidad](/en/blog/lnds/2019/03/19/the-end-of-agile-iii/)

Part 4: [https://www.lnds.net/blog/lnds/2019/03/23/el-fin-de-la-agilidad](/en/blog/lnds/2019/03/23/the-end-of-agile-iv/)

