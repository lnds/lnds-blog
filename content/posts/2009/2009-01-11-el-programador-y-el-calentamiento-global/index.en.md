---
comments: true
date: 2009-01-11 15:21:41
layout: post
slug: the-programmer-and-global-warming
title: The programmer and global warming
authors: [admin]
wordpress_id: 313
categories:
- the nature of software
- programming
- technology
---

Via [a note by Luis Ramirez](http://luisramirez.cl/blog/?p=2049) I landed on this [article](http://technology.timesonline.co.uk/tol/news/tech_and_web/article5489134.ece), which shows the impact on energy use, and therefore on global warming, of Google and other IT companies.

It's estimated that a Google search consumes half of what it takes to boil a kettle of water. Or that keeping an avatar in Second Life, according to Nicholas Carr's calculation, costs 1,752 kilowatt hours of electricity a year, that is, the average consumption of a Brazilian.

These numbers come from the energy spent by datacenters.  
But one thing that goes unmentioned is the enormous amount of energy that we users burn.

When I started working, in the late 80s, there were very few computers. Back then minicomputers and mainframes still ruled, with a few terminals. The arrival of the PC changed everything, and with it the energy spent on computing went up.  
Now almost every employee in every company has a PC on their desk, even though 80% of its use is sending and receiving email, and reading LUN (a Chilean tabloid) or Facebook.

Our schools are installing computers that burn a lot of energy, with no thought given to a bigger electricity budget, let alone the impact on global warming, and yet one of the "greenest" computers in existence right now is the XO, from OLPC ([which draws barely 3 watts](/en/blog/lnds/2007/05/02/xo-energy-environment-and-the-myth-of-moores-law/)).

It's relatively easy to measure what Google and the IT industry spend at the datacenter level, but what happens at the other end? That's what I wonder.

**The programmer and their responsibility for global warming**

The other day I reviewed the source code of some JavaScript routines belonging to a site that generates hundreds of thousands of transactions a day in our country.

Those JavaScript functions contained some of the worst validation algorithms I've seen in my life. I think I'll write something about that later on.

What matters is that this badly written code, distributed across hundreds of thousands of machines, all running at the same time at peak hours, adds up to many grams of carbon, the equivalent of boiling a great many kettles of water.

Programmers used to have to worry about using efficiently the few resources our systems had (less than 1 megabyte of RAM, slow disks of 20 megabytes or less, CPUs with 10 Hertz cycles, and so on). That forced us to write efficient code that made the most of those scarce resources.

Now that knowledge is needed again, but for other reasons: we have to write code that consumes less energy.

Over the last few years, the schools that teach programming have unfortunately dropped these techniques from the curriculum.

Nobody worries about using less RAM anymore; after all, we have gigabytes to spare in our computers. The problem is that accessing main memory is tens of times more expensive, in energy terms, than comparing the values of a couple of registers inside the CPU.

On top of that, the code we write today ends up running on thousands of CPUs, distributed in different parts of the world, or in the [cloud](/tag/cloud-computing/). When you write a loop, you can no longer think it's running only on your PC. Picture that code replicated millions of times. When you realize that, you start remembering your old systems programming classes (or machine-oriented languages), if you were lucky enough to have had them.
