---
title: "Architecture and orchestration"
authors: [admin]
date: 2017-12-10T08:25:11-03:00
slug: "architecture-and-orchestration"
draft: false
tags: ['architecture', 'music', 'orchestration']
image:
  placement: 3
---

In his extraordinary, and very entertaining, book "How Music Works"[^1],
David Byrne asks, in one of its chapters, about the role
architecture plays in the shape music takes. Or put another
way, to what degree the architecture of the place where music is
performed influences the structure of the music itself.

{{<figure caption="The stage at CBGB, the club where Talking Heads started their career" src="https://d2dspjyoh5c79p.cloudfront.net/dae07887-de0b-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

What he writes in that chapter he also presented in a TED talk:
[https://www.ted.com/talks/david\_byrne\_how\_architecture\_helped\_music\_evolve\#t-934161](https://www.ted.com/talks/david_byrne_how_architecture_helped_music_evolve#t-934161)

This is the video:

{{<ted "david_byrne_how_architecture_helped_music_evolve">}}


All of this is very interesting, since lately I have been
working on a supporting architecture to orchestrate a process.

That's when I remembered Byrne's reflection. Writing punk songs
for CBGB is not the same as composing an aria that will be heard
at La Scala in Milan, or a choral work like Handel's Messiah that will be
heard in a great cathedral.

{{<figure caption="The architecture of La Scala in Milan suits opera; the building's own reverberation lets the voice project properly." src="https://d2dspjyoh5c79p.cloudfront.net/14d5fa28-de10-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

The same goes for software architectures: they must serve
the process or service that will be orchestrated on top of them.

But it so happens that many software architects, who are lazy,
replicate, or repeat, the same architectures that worked for them
once, in different contexts, for all their solutions. What
this produces is systems with serious maintenance or
performance problems.

Since I can't tell you yet about the architecture I'm
working on, I'll give you an example that is a classic by now:
Twitter.

Twitter was built as a standard Ruby on Rails application. The
architecture was this[^2]:

![](https://d2dspjyoh5c79p.cloudfront.net/3d900b39-de11-11e7-a030-2b5831f8ecb5-aa9f18b7)

This is the most common structure on the web; almost all the
usual frameworks implement this architecture of three or more tiers.

The fact that this architecture worked so well in the past is no
guarantee that it will keep working today. The problem is that it doesn't
scale very well. It's as if we were a punk band playing at CBGB and,
after a big hit, we were suddenly asked to play a huge stadium.
What are we going to do?

In Twitter's case, popularity in 2008 led them to this:

{{<figure caption="The famous Fail Whale, a friendly way of apologizing for infrastructure failures." src="https://d2dspjyoh5c79p.cloudfront.net/dfc72f4b-de12-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

At least Twitter used humor to contain the problem. But what
would happen to our little punk band if we were asked to go play a huge
stadium? The solution is obvious: let's bring more amps and maybe
add some keyboards. That is what Twitter did in 2008:

![](https://d2dspjyoh5c79p.cloudfront.net/60bc7d8c-de13-11e7-a030-2b5831f8ecb5-aa9f18b7)

More amps! That will get us out of the jam, but it won't sound
right, because the music was written for a noisy,
closed, small room. But maybe those synthesizers will help, right?

Twitter did what 99% of rookie architects do: scale
horizontally. The problem is that in 2008, when making these changes,
Twitter's developers didn't see this coming:

{{<figure caption="Twitter's growth" src="https://d2dspjyoh5c79p.cloudfront.net/aa43947d-de13-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

The right thing to do in this case is to recognize the new environment. There are bands, like
U2 or Coldplay, that know how to write music well suited to
stadiums. On those stages it is more of a social experience
than a musical one, and what fits is more Wagnerian music. That's why
rock works well in stadiums, and funk or rhythm and blues don't.
What stadiums call for is anthems everyone sings along to, mid-tempo
ballads, as Byrne describes them.

So, how should we orchestrate our architectures in a scenario
like the one Twitter was facing?

Let's look at some numbers:

> With 150 million active users, 400 million
> tweets came in per day, that is 4,600 tweets per second, with a peak of
> roughly 150,000 tweets per second. At the same time there were
> 300 thousand user timeline queries per second and
> some 6 thousand personalized search queries.

With this data, what should we optimize first?

Clearly, the equivalent of the new kind of ballads we have to
compose, in Twitter's case, is how to handle building the
timelines. And Twitter's architecture adjusted to this reality.

{{<figure caption="Twitter's architecture for managing timelines" src="https://d2dspjyoh5c79p.cloudfront.net/55ef91ae-de16-11e7-a030-2b5831f8ecb5-aa9f18b7">}}


So, contrary to what David Byrne identified in music,
it seems that in software it is the architecture that serves
the orchestration.

At least that's how I see it. You have to look at what we need to orchestrate,
and once our orchestration is defined, we must build an
architecture that supports it, and not the other way around. What do you think?

[^1]: David Byrne, ["How Music Works"](http://amzn.to/2BsQNvo)

[^2]: Chris Aniszczyk, "Evolution of the Twitter Stack",
https://www.slideshare.net/caniszczyk/twitter-opensourcestacklinuxcon2013

[^3]: Raffi Krikorian, "Timelines at Scale", https://www.infoq.com/presentations/Twitter-Timeline-Scalability "https://www.slideshare.net/caniszczyk/twitter-opensourcestacklinuxcon2013"}

