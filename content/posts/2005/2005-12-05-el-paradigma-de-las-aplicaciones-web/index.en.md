---
comments: true
date: 2005-12-05 10:12:47
layout: post
slug: the-web-application-paradigm
title: The web application paradigm
authors: [admin]
wordpress_id: 1498
---

The idea that you should only build web applications, and that this is the modern way to solve every need a company has, is causing more problems than it solves. It's a paradigm you should try to avoid.

I've seen data-entry applications with forms of 100 fields to fill in, with two or three tabs pointing to pages with even more fields. After painfully typing in these forms, users press the submit button and their requests end up in [Limbo](/en/blog/lnds/2006/08/27/dante-was-wrong-limbo-doesnt-exist/), or wherever it is they go these days.

Why does this happen?


## SmartClients


There are certain myths that Paul Ballard has highlighted in an interesting article, [No Rob, Dumb Terminals are a Dumb Idea](http://weblogs.asp.net/paulballard/archive/2005/12/05/432323.aspx). In it Paul Ballard answers his colleague Rob Howard, [who writes against the so-called smart clients](http://weblogs.asp.net/rhoward/archive/2005/11/03/429355.aspx) and in favor of using dumb terminals (browsers) and web applications, with Ajax as the support for enriching the user experience.

[Smart clients ](http://msdn.microsoft.com/smartclient/)are a technology recently introduced by Microsoft. Essentially they're applications written on .Net that are distributed over the network. These applications can work offline and update the servers later; it's a concept similar to [tropically tolerant applications](/en/blog/lnds/2005/11/07/tropically-tolerant/), but more sophisticated, and better "marketed". :)


## Myths about web applications


But let's forget about that particular technology and think of it as comparing traditional applications, written to run on a windowing system such as Windows, KDE, Gnome, OSX or anything along those lines, against AJAX applications or pure web applications.

The problem is that there's a series of myths that Paul Ballard points out very well, and I'm going to mention the most relevant ones, especially for the reality in Chile or Latin America.


### Myth 1: Web applications are easier to build


"Easier? Compared to what?"

Consider the number of technologies you have to master; the programming language (Java, Visual Basic or C#) isn't enough. To create a halfway useful web page you need to know HTML, DOM, CSS, JavaScript, client-side controls, server-side controls, ASP.NET or JSF, postbacks, client-side validation, server-side validation, XML, XSLT, and things get worse if you have to integrate some Java applet or ActiveX control or, worse still, Flash.

Many applications don't follow the simple request-response scheme. The big problem is that web applications don't keep state, so you have to invent techniques to maintain the application's state: sessions, session variables, cookies, viewstate, application caching, etc., etc.

Another big problem is testing that it works in different browsers, even in different versions of the same one. Adjusting fonts, page sizes and a long etcetera. In the end many choose (we choose) to test on the most popular browsers and only on up-to-date versions. Which brings us to the second myth.


### It's easier to deploy web applications.


The typical example is the application that has to be deployed to 1,000 desktops. Supposedly, if the application is web based, deployment is as simple as publishing a new URL.

The problem is that first you need the 1,000 desktops preconfigured with the right browser. Following on from the previous point, if you decide your application will only work with IE, or with Firefox, you have to make sure the 1,000 desktops stay in that state. Most likely, though, you'll have to enforce your operating policies and freeze the state of the PCs. Yet updating browsers is a day-to-day necessity, because of the security vulnerabilities discovered every day. You end up in a situation where the systems team is worried about keeping the browsers up to date to stop viruses from spreading, and the development team doesn't want the browsers to change so they don't have to debug their applications on the new browser version.

Isn't it better to ask users to download the installer for the latest version of the program?

The bad thing about web applications is that publishing them is all or nothing. If you publish the application, the 1,000 workstations will be using it a second later. That looks good, but what happens if there's a bug in the application? It will hit all 1,000 users instantly. With the traditional scheme, you can do a more controlled rollout of your software, perhaps to a smaller group of users, say 10 desktops. This group can try the application in production, and once the bugs have been fixed you publish the application so the rest of the users can download and install it.

All in all, web applications force you to have an expensive central infrastructure, which has to be kept permanently up to date to handle the organization's demands.


### Not everything can be web


There are applications that, by their nature, should not be built as web applications. The best example is front-end customer service applications. Imagine web browsers being used at the checkout counters of a big department store. The line would probably be 4 or more times longer than it is today. A cash register's transactional systems are fast because the screens don't change, and the messages between server and client are short; it's very rare for them to exceed a kilobyte of information.

A simple page can mean downloads of 40 kilobytes or more. Even an application's validations and usability can suffer if the browser doesn't download the validation scripts correctly.


## Too much of a good thing


A blog, an online store and a search engine like Google have different infrastructures according to the needs of each. For example, you can have hundreds of blogs installed on one low-cost server, but not a search engine like Google, where a server farm supports the service.

If someone can't load one of the pages of this blog, it isn't critical. But when you're cashing a check, having the application fail is an enormous nuisance. No serious software architect would propose building checkout counters as web applications.

But in that middle ground among corporate applications, the decisions aren't so obvious.

I think the best criterion is the following:

- Is the application critical? Does it affect the company's operations to the point that a couple of minutes without the system causes losses (of any kind: image, money, quality of service)? Measure that probable loss, and bear in mind that a web application is more failure-prone than an application that can work offline if necessary.
Inside the organization, using web applications isn't always the best choice; perhaps for some services, such as the intranet or a knowledge base.

Of course, if your service is going to be public, then it has to be implemented as a web application, but bear in mind that you need to worry about usability, browser compatibility, response time, etc. That means having a good server infrastructure, and a good level of load testing and usability testing in a variety of environments.

If you're programming a public web application, please don't assume everyone will be using Internet Explorer 6.0+. Not only is it disrespectful, it shows how unprofessional you are at developing web applications (the same goes for anyone who develops only for Firefox).
