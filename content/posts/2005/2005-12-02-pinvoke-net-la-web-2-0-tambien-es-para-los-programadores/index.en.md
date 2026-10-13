---
comments: true
date: 2005-12-02 14:44:23
layout: post
slug: pinvoke-net-web-2-0-is-for-programmers-too
title: 'PInvoke.Net: Web 2.0 is for programmers too'
authors: [admin]
wordpress_id: 185
categories:
- the nature of software
- paradigms
- usability
---

What exactly is a Web 2.0 application?

There are plenty of ideas about what it is and what it isn't, but I think [PInvoke.Net](http://www.pinvoke.net/) is a great example of what a Web 2.0 application should be. In this case it's a service aimed at programmers.

## What is PInvoke.Net?

The definition of what it is can be found on its own site:

> PINVOKE.NET attempts to reduce the difficulty of calling Win32 functionality (APIs) or other kinds of unmanaged code from applications written in managed code (in languages such as C# and VB .NET). Defining a function's signatures in order to use PInvoke (also known as Declare statements in VB) is an error-prone process that can introduce extremely subtle bugs. The rules are complex, and if you make a mistake you will probably corrupt memory.

Put simply, .Net programmers have to call certain functions available in Windows, and to do so they must follow a strict protocol whose declaration is complex and error-prone.

What happens on this site is that programmers who have already worked out one of these calls publish the right code so that others can use it. The programmer community uses the wiki as a tool for sharing programming experience.

## What is Web 2.0?

The best description of this concept is Tim O'Reilly's article: What is web 2.0?.  
One way to visualize it is the Meme Map included in that article:  
![](https://www.oreillynet.com/oreilly/tim/news/2005/09/30/graphics/figure1.jpg)

## Why is PInvoke.Net a Web 2.0 application?

Based on the Web 2.0 Meme Map we can identify the following characteristics that make PInvoke.Net a Web 2.0 application.

  * PInvoke trusts its users, programmers in this case, who collaborate by writing the right code for each API.
  * It has a rich user experience; there's even a plugin that integrates the service with Visual Studio.
  * Granularity of content: each published API can be used by users according to their requirements.
  * It gets better the more people use the application. This is a natural property of wikis; in this case, as programmers add new APIs the information gets richer, but it's also the community itself that improves the quality of the information. Some users even report why it's not a good idea to use a certain API under certain conditions, which adds more value than originally intended.
  * It's hackable. The plugin is one example of this, the fact that users contribute tips and experience is another, and there's already a series of tools being developed around this service.
  * Data as the Intel Inside: all the data on PInvoke is useful and valuable to the programmers who need it; this service saves hours of research, testing and debugging.
  * The Long Tail: this is a service for a very specific niche, programmers who need to deal with unmanaged code using PInvoke in Microsoft.Net on Windows. That's a relatively small fraction of all the programmers who use Microsoft.Net.

This is a good example of how Web 2.0 applications can be built for specific niches, a subcommunity of programmers in this case.

What are you waiting for to build your own Web 2.0 services?
