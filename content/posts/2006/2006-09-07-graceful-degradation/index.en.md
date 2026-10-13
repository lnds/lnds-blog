---
comments: true
date: 2006-09-07 00:10:55
layout: post
slug: graceful-degradation
title: Graceful degradation
authors: [admin]
wordpress_id: 333
---

After [reading the excellent article](http://www.elfrancotirador.cl/2006/08/29/vivafirefox-%c2%bfpero-botando-plata/) by [Francotirador](http://www.elfrancotirador.cl/) about promoting Firefox, it seems to me that besides promoting its use we need to wake up Chile's web service providers. They need to realize that there are a lot of users on other, different browsers.

A while ago I tried to pay my electricity and water bills on a popular site that offers that service, using Firefox, and I simply couldn't. The javascript didn't work.

Although Ajax has revived the use of javascript, programmers have always had the bad habit of overloading the onsubmit event, or the buttons' onclick, instead of using the old but ever reliable submit button.

There are several ways to solve these compatibility problems, but I'm going to suggest two.

The first is to develop with the understanding that there is an ever growing number of users who don't use Internet Explorer. It's a truism, but nobody does it.

The second is to degrade the system gracefully. Let me explain: there is a principle in software construction called "Graceful Degradation":

> "It is the degradation of a system in such a way that it keeps operating, but provides a reduced level of service, rather than failing to provide it at all."

For example, if javascript is disabled, you can always program your site so that it works. In fact, everything that is checked on the client can be checked on the server, at the moment of the POST.

This is the better path, since you don't have to keep up with every new browser capability.  
You can argue that it means more work, but there are environments, and frameworks for Java, that let you stop worrying about this problem with the right configuration (the best example is ASP.NET).

If you look at sites from other countries, they work with Ajax, with different browsers, and even with javascript disabled. But in Chile, service sites (public and private) leave a lot to be desired.
