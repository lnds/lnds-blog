---
comments: true
date: 2008-11-02 19:58:48
layout: post
slug: web-2-0-and-cloud-computing
title: Web 2.0 and cloud computing
authors: [admin]
subtitle: The debate over the cloud computing business (III)
wordpress_id: 358
categories:
- the nature of software
- paradigms
- technology
tags:
- cloud computing
- the cloud
- web 2.0
---

## 


We can consider [Tim O'Reilly](http://radar.oreilly.com/tim/) an authority on cloud computing. His analysis [of open source and cloud computing](http://radar.oreilly.com/2008/07/open-source-and-cloud-computing.html) is very interesting because, in a way, it anticipates a counterargument to Macleod's fears:

> Despite all the possibilities for lock-in that we see with Web 2.0 and cloud computing, I believe that the benefits of openness and interoperability will eventually prevail, and we'll see a system made up of cooperating programs that aren't all owned by the same company, an internet platform, that, like Linux on the commodity PC architecture, is assembled from the work of thousands.

But in his article Web 2.0 and Cloud Computing, O'Reilly examines the validity of [what Macleod proposed](/en/blog/lnds/2008/10/31/the-power-law-of-cloud-computing/), and concludes that the cloud computing business will be high volume, but low margin.

O'Reilly says the problem with Macleod's analysis is that it doesn't take into account what causes power laws in online activity.

On the network, applications win if they get better the more people use them. That is one of the characteristics of what O'Reilly christened Web 2.0.

  
![question-cloud.jpg](question-cloud.jpg)

Cloud computing in the sense Macleod uses it, that is, as a synonym for the infrastructure layer of the cloud, exemplified by services like Amazon's S3 and EC2, doesn't have this [network effect](/en/blog/lnds/2008/01/15/network-effect/) dynamic.

  
It's true that the big players will have economies of scale in equipment and power consumption that won't be available to smaller players.

But having economies of scale is not the same as benefiting from network effects, which produce marginal returns for every user added to the network.

Cloud computing looks more like a commodity market:


> If cloud computing is a commodity business, then the outsize profits that Hugh envisioned are not going to be there. This is a business that will be huge, but it may be more similar to the web hosting and ISP markets, which are also huge, but not hugely profitable.

O'Reilly looks at [three types of services](http://radar.oreilly.com/2008/10/web-20-and-cloud-computing.html#definitions):

1. "Utility computing", where you pay for infrastructure as you use it: CPU, memory, storage and operating system virtualization. This is what Amazon does with EC2, for example, and what Microsoft would be proposing. In this scenario Microsoft could take the opportunity to lock developers in by setting up a closed infrastructure, very much in the style of the Windows API. Amazon, on the other hand, is building on a more open infrastructure, which sets up this Linux-like platform in the cloud and minimizes the chances of a super monopoly taking hold.

2. Platform as a service. Like what Google AppEngine or force.com offer, where machine instances are hidden behind a high-level API. The problem is that migrating from one of these platforms to another is costly, because they aren't compatible with each other. Here you have to ask what advantage developers get from having more developers on the same platform. That is, whether the more people develop on these platforms, the better. O'Reilly doesn't see this network effect happening with Google's AppEngine. In fact, the applications on that platform look fairly trivial compared with those deployed on Amazon's infrastructure. It may be, and I agree, that Google's platform doesn't give you enough control (and power, I should add) to build more serious applications.

3. Cloud-based end-user applications. Although applications like Facebook and Twitter are cloud-based applications, this point is about the applications that used to live on the PC, like spreadsheets, word processors, databases and even email. But here the problem is that when people's data is hosted in the cloud, the disappearance of these services becomes a serious concern.

The prospect of my data disappearing or being unavailable is more alarming than the disappearance of a service that merely aggregates data available from everywhere (like Yahoo, or Microsoft's Live Maps). This effect makes it hard for these applications to become relevant and move beyond commodity status.  


As we have seen, for O'Reilly the effects of the power law matter little, and he doesn't see cloud computing benefiting from network effects.

We'll keep analyzing this topic, see what Nicholas Carr has to say, and of course analyze the impact of the Windows Azure launch.


By the way, I am of the opinion that the SCD (Chile's music copyright collecting society) must disappear. ;)

Image taken from [here](http://blogs.sun.com/staso/entry/using_sun_for_cloud_computing).



