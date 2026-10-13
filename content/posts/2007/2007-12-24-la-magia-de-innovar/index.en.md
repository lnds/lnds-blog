---
comments: true
date: 2007-12-24 08:15:42
layout: post
slug: the-magic-of-innovating
title: The magic of innovating
authors: [admin]
wordpress_id: 386
categories:
- technology
---

I want to show you a couple of innovations by the researcher [Johnny Chung Lee](http://www.cs.cmu.edu/~johnny/), a PhD candidate at Carnegie Mellon University.

I discovered the first innovation through a post on   
[Botón Turbo.](http://www.botonturbo.com/quien-dijo-que-la-wii-no-es-next-gen-ps3-is-so-last-week). Unfortunately that blog didn't quite understand what is going on, so let me explain it before showing you the video.

In this case Chung Lee writes a program in C# and uses the Wii controller as an input device connected to his laptop, running Windows. At **no point has he written code that runs on the Nintendo console**. Everything happens on the laptop, and what gets used is the WiiMote. The main feature of this innovation is that it uses the Wii controller backwards: it moves the infrared sensor instead of the WiiMote.

[Watch the video](http://www.youtube.com/watch?v=Jd3-eiid-Uw)

{{<youtube Jd3-eiid-Uw>}}  


Notice the effect produced when the frame is introduced, a technique used in computer graphics. Of course it only works for one user, the one wearing the infrared sensor at eye level. As Chung Lee explains, this innovation gives the Wii new possibilities.

Chung Lee's second innovation, and the one I find more interesting, is how he uses this idea of having the WiiMote track an infrared pen. With that he sets up an interactive whiteboard, and then builds his own version of the Surface, though at a hundredth of the cost (a WiiMote costs about 50 dollars, and a Surface about 5000).

[Watch the video](http://www.youtube.com/watch?v=5s5EvhHy7eQ).

{{<youtube 5s5EvhHy7eQ>}}

With this you can set up interactive whiteboards in any school, at a fraction of the cost!!

Best of all, the full source code of these projects is published. I suggest you explore Chung Lee's [projects page](http://www.cs.cmu.edu/~johnny/projects/) and be amazed by this innovator.

These projects were developed on Windows, building on the [Managed Library for Nintendo's Wiimote](http://blogs.msdn.com/coding4fun/archive/2007/03/14/1879033.aspx) written by Brian Peek and published on the Microsoft blog [Coding4Fun](http://blogs.msdn.com/coding4fun/).
