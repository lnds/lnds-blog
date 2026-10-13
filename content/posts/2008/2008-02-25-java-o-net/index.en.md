---
comments: true
date: 2008-02-25 21:03:15
layout: post
slug: java-or-dotnet
title: Java or .NET?
authors: [admin]
wordpress_id: 48
categories:
- software development
- programming
---

Almost a year ago I had to revisit something I built back in 2002, for a company I worked at about 4 years ago. It was an interesting side gig ($$$) but I had little time to do it, so I had to make some decisions, which I summed up in a reply on a private mailing list.

I decided to share that reply with you, freshen it up a bit, and use this post to get going again after vacation, and also to answer [a question](http://www.antiteoricos.cl/2008/02/17/%c2%bfjava-o-net/) raised at [antiteóricos](http://www.antiteoricos.cl/).

Last year, when I was offered this job (the side gig), I had already spent 3 years working almost entirely in .NET, and they were asking me to touch up a project abandoned in early 2003, written entirely in Java.

The application in question is a platform for SMS games and applications (text messages on cell phones), built on [Java J2EE](http://java.sun.com/javaee/), with several XML configuration **files** (a number of Hibernate mappings), about 3,000 lines just in the user interface, which I did in Java with [Hibernate](http://www.hibernate.org/), and another 3,000 lines of Java code for the beans holding the business logic. All of it running on [RESIN](http://www.caucho.com/), the application server used to support this application. (It seemed like a good idea at the time, and the platform has run on this server for 5 years without problems.)

Since I had to go in and modify a lot of things to add what they were asking for, and I had very little time to do it, I decided that everything new would be built in [Python](http://www.python.org/) using [DJANGO](http://www.django-project.com/) as the framework. That decision meant writing a small servlet to hook what was already there to the new user interface.

It was quicker to write new code in Python plus a small gateway servlet than to write the equivalent in Java, partly because I would have had to remember a lot of things and dive into some undocumented parts of the code (documentation? nobody ever asked me for documentation), and I didn't feel like writing Java (a language I don't much like, to be honest).

The whole job took me the equivalent of 3 weekends. I replaced several parts of what was in Java, and when I was done the platform ended up with 30% of its code in Python.

The truth is I was left wanting to throw out everything that was in Java and migrate it to Python, something I'll probably take on when there is time and my client decides to pay for it.

But let's list some observations from this experience.

  * Performance: although Java is faster, with Django + Python I get far more than this application needs. Measuring, I found that if with Java and Resin I could serve 120 requests per second (rps), with Python + Django I got 80 rps, but the truth is I need to cover no more than 40 rps (which is what we have committed to with the mobile carriers).
  * The bottleneck is in the database (as always).
  * There is considerably less code in Python. Partly because I didn't have to build CRUD screens to manage several of the new entities I defined. I simply used the standard admin included in Django.
  * I can do things at runtime far more simply than with Java. For example, to implement a certain feature they asked for I would have had to use reflection, or something like it (something that in my opinion is easier to do in .NET), but with Python it came out naturally.
  * With Python I was able to put "business logic" inside a TEXT field in the DB, a trick I used to be able to make live changes on the production server. For example, the operator can change the flow of a game to fit the user's requirements. Before, that meant modifying or creating a specific servlet.
  * doctest is an extraordinary tool. I'm on Java 1.4, so I couldn't use the new JUnit features (annotations), but Python's doctest is far superior.
  * Django's ORM is superior to Hibernate from a programming point of view.
  * The acid test came with a TV contest. At one point the platform received about 9,000 messages in 15 minutes: 6,000 were processed entirely in Python, and 3,000 went through a Java servlet that passed them on to a Python backend. Zero problems.

There are now more resources available for rapid development in Java, and SEAM, for example, is an excellent framework for putting together something like what I describe, but I had no time to learn SEAM, much less to reconfigure the production environment to use Java 1.5, switch to JBoss, and so on.

That is why, when people ask me which is better for developing a new project, Java or .NET, having programmed on both platforms, with similar systems, my answer is: if you are starting from scratch, try doing it all in Python.

It works very well for real applications, like the one described in this post.

## Conclusions

In the end, what matters are the architecture decisions, and the programming language is not that important.

If they ask you for 40 rps and you can deliver 80 rps, why chase 120 rps?   
Sometimes optimizing too much is unnecessary.

You have to balance the constraints of your project: budget, time, quality and/or lack of documentation.

In my case the time available was the main factor. My client couldn't care less what platform everything runs on; what matters is the quality of the service. That gave me freedom, but I also had that freedom because I trusted the tools I chose. This could have been the chance to use Ruby on Rails, for example, or PHP, but I didn't know the first, and I don't trust the second that much.
