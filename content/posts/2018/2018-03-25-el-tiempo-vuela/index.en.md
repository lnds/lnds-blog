---
title: "Time flies"
authors: [admin]
subtitle: "Services and tools for measuring how you spend your time"
date: 2018-03-25T08:25:11-03:00
slug: "time-flies"
draft: false
tags: ['time', 'management', 'tools']
image:
  placement: 3
---

> But after a while\
> You realize time flies\
> -- Porcupine Tree

My youngest daughter, who is an excellent illustrator, has a pretty
healthy habit that I don't have. When she sits down to draw she sets a
timer on her phone, so an alarm goes off once the time she has set
herself as a limit for the activity is up. That way, when she stops, she
rests, taking care of her eyes and her hands.

The thing is, when you're doing what you love, time flies, especially
when you get into the
[zone](/blog/lnds/2010/08/09/estado-de-flujo).

![](https://d2dspjyoh5c79p.cloudfront.net/3356928e-303d-11e8-a030-2b5831f8ecb5-aa9f18b7)

On the other hand, there are practical reasons to keep track of how
long an activity takes you. Even more so if you develop software for a
living: measuring your performance is essential. And to measure
performance you have to start with time.

There are several tools for measuring the time you spend coding. Aside
from the obvious ones, like using a stopwatch, the best tools are the
ones that work in tune with your working environment.

I've tried three tools lately, and I want to share a few impressions
with you.

## Timing 1.0

This is an app that tracks all your activity on your Mac. You run it in
the background and it keeps a record of the time you spend on different
tasks.

![](https://d2dspjyoh5c79p.cloudfront.net/0a8c2671-303f-11e8-a030-2b5831f8ecb5-aa9f18b7)

In the image above you can see a slice of my activity on my computer
between July and September of last year. It's quite detailed; at first
it's even pretty scary to use. Version 2.0 promises improvements on that
front, we'll see if I get around to installing it.

You can turn tracking off, indefinitely or for set periods. You can
also create your own activity types.

How does Timing work? You have to give it access to the Accessibility
API; with that it reads the titles of the active windows and that's how
it logs your activity.

It's a good tool for any freelancer in any line of work, not just for
software developers. It's simple, needs almost no configuration, and
runs locally: nothing gets sent to any central server. Ideal for the
paranoid. It costs 29 dollars for the basic license for use on 1 Mac.

## WakaTime

This tool is aimed at software developers. In this case the tracking is
done from an editor or IDE compatible with the service.

[WakaTime](https://wakatime.com/) is a service, not an application like
Timing 1.0. The free version lets you record your time for one week; to
keep longer histories you have to use the paid version (which costs 9
dollars a month, or 12 dollars for the team version).

![](https://d2dspjyoh5c79p.cloudfront.net/8d101912-3041-11e8-a030-2b5831f8ecb5-aa9f18b7)

In the image above you can see my coding time over the last week. And
below you can see the breakdown by development tools and languages:

![](https://d2dspjyoh5c79p.cloudfront.net/b84f6ae4-3041-11e8-a030-2b5831f8ecb5-aa9f18b7)

It's been years since I developed full time. I normally write code for
some personal project, or maintain a few small projects at work. As you
can see, this past week I worked in Python, and I had to go over a small
Scala project I wrote for my job. The IDEs I used are IntellijIdea and
PyCharm.

WakaTime integrates with more than 43 editors, and all the plugins are
open source, available on
GitHub: <https://github.com/wakatime>.

That way you can see exactly what they do in each editor and find out
how they determine the time you spend writing code.

In its free version WakaTime keeps a board where you can compare
yourself with other programmers around the world (there are people who
spend way too much time coding; there are two explanations: either they
don't sleep, or they've managed to hack the tracking system). The
\"social\" side of the tool isn't its best feature, because I think it
breeds a kind of competition that adds nothing of value. I don't see
much room for the team version either, but surely there are groups of
programmers who want to measure their egos on a dashboard and see who
codes the longest.

What's valuable about WakaTime, at least for me, is that it lets me see
the information by project, and that lets me measure and pace my
efforts. I can also use it as a motivational tool; for example, I've set
myself the goal of coding one hour a day, which is very hard, but let's
see how it goes.

## CodeAlike

This service is the most Orwellian of them all. CodeAlike aims to keep
a record of almost everything you do as a developer: coding, building,
debugging and interaction with the system. If you install a Chrome
plugin it analyzes whether you're visiting sites like StackOverflow and
shows you an estimate of the time you spend troubleshooting, which is
very cool on the one hand, and a bit sinister on the other.

This is one of those services where you need to read the terms and
conditions carefully, because its plugins hand over a lot of information
that goes to CodeAlike's servers.

Perhaps the only feature of CodeAlike I found interesting is this
chart:

![](https://d2dspjyoh5c79p.cloudfront.net/7bf8eaa5-3044-11e8-a030-2b5831f8ecb5-aa9f18b7)

It measures the level of focus or attention you pay while interacting
with the code; the horizontal line is the CodeAlike community average.
This is taken from the last two weeks, and it shows I'm a late-day
creature: my peak falls between 4 p.m. and 11 p.m. 

Personally I find it a tool that goes overboard on metrics, but I
suppose there are people who can get obsessed with measuring every
aspect of their work. 

The price of this service is \$12.

## Why measure your time?

If you're a *freelancer* and you bill by the hour, for example, knowing
how many hours you put into developing a solution for your client is
essential. But it's also useful for making more accurate estimates on
future jobs.

Having metrics on your performance also helps you improve, and
understand your personal software development process. You can also use
these metrics the same way my daughter uses her timer, to realize you've
spent too long working and need a break.

If you cross this information with your work, for example with the
information Git gives you, you can find out how much it costs you to
write a line of code. You can learn whether you spend a lot of time
debugging, and so become aware of what you need to improve to raise your
performance.

Like any tool, these can be used for good or for evil; that's up to
you. What matters is finding the one that best fits your workflow. 

Do you use tools like these to measure the time you spend working? 

I'd like to hear about your experience.
