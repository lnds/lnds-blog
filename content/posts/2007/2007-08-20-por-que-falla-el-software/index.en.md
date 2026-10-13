---
comments: true
date: 2007-08-20 20:16:35
layout: post
slug: 'why-does-software-fail'
title: Why does software fail?
authors: [admin]
wordpress_id: 1826
---

I was reading Christian's interesting note on the problems OOXML causes, and I found a comment that caught my attention:

it seems as if Microsoft had gotten users used to programs failing, a lot, and that this is normal.

The truth is that, like anything made by man, software is not free of errors.
But it seems that the quality of software, compared with other human constructions, is terrible.
Some will say that in Microsoft's case it is even worse.

Is software so complex that its error rate will always be higher?

The reality is that it isn't.

Software can be built free of failures. When we say free of failures, we mean that the error rate is as low as in other human activities, or even lower.

## Correct software and error-free software

> "Beware of bugs in the above code; I have only proved it correct, not tried it."
> -- Donald Knuth

There are formal (that is, mathematical) methods that make it possible to prove that a piece of software is correct. These methods are laborious, of course, but progress has been made in automating these problems.

Many programming languages include a set of directives that make it possible to prove that the software is correct according to its specifications.

This doesn't mean the software is free of failures, because several things can happen.

The hardware may have a fault.
The necessary resources are not available: for example, there isn't enough RAM because another process is using it, or there isn't enough disk space.
The software was sized for a certain workload, and the users have decided to increase the demands on it.
And a long etcetera.

But if you can draw up this list of possible failures a priori, what is stopping us from taking measures to avoid them?

The truth is, nothing.

## Acceptable errors

Every time we run into a failure, we are learning something new, something we didn't know about the system.

This ignorance may come from not having been rigorous in the requirements analysis, or because nobody knew the conditions that caused the failure.

Errors reveal new information about the system. Fixing the bug is answering a new question the system is asking us.

The only acceptable bug is the one that reveals something we didn't know. All the others can be prevented, either by programming defensively or by handling exceptions properly.

Every time we set out to fix a bug we must run the appropriate regression tests and add new tests, so we can be sure that in fixing one bug we don't break something that was working.

So why does software fail so much?

Users have been deceived all this time. Software is no more complex than building buildings, or cars.

What happens is that commercial software development teams suffer a series of market pressures that mean not all the exhaustive testing gets done.

There is an insistence on putting out new versions every year, which add more and more features to the software.
The bigger and more complex the software, the more points of failure it can have.

The truth is that well-made software should not have failures.
