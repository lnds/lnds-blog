---
comments: true
date: 2006-07-11 07:21:31
layout: post
slug: watching-the-net-for-terrorists
title: Watching the net for terrorists
authors: [admin]
wordpress_id: 1748
categories:
- credibility
- security
tags:
- security
- Bayes' theorem
---

Bruce Schneier [posts on his blog](http://replay.web.archive.org/20071017001140/http://www.schneier.com/blog/archives/2006/07/terrorists_data.html) the proof of why the mass data analysis used by the NSA (the US National Security Agency) is useless for detecting terrorists.

> Floyd Rudmin, a professor at a Norwegian university, applies the mathematics of conditional probability, known as Bayes' Theorem, to demonstrate that the NSA's surveillance cannot successfully detect terrorists unless both the percentage of terrorists in the population and the accuracy rate of their identification are far higher than they are. The surveillance is, however, useful for monitoring political opposition and stymieing the activities of those who do not believe the government's propaganda.


It goes more or less like this:

What is the probability that people are terrorists, given the NSA's surveillance system? If the probability is 0.0, then there are no terrorists, and the NSA is just wasting money and bothering American citizens. If the probability is 1.0, then the system is clearly useful. But if the probability is fifty-fifty (p=0.50), it's the same as flipping a coin. So this probability has to be close to 1.00 for the surveillance to make sense.

Bayes' theorem, which lets you understand conditional probability, is taught in introductory statistics courses. Search Google and you'll find more than a million references to Bayes' theorem.

For internet surveillance to work, the theorem requires you to know:

  1. The base rate for terrorists, that is, what percentage of the population is terrorist.

  2. The accuracy rate, that is, the probability that real terrorists will be identified by the NSA.

  3. The misidentification rate, that is, the probability that innocent people will be wrongly identified as terrorists.


No matter how sophisticated the NSA's methods are, the accuracy rate will never be 100%, and the misidentification rate will never be 0% either.

Let's look at some of the numbers Professor Rudmin proposes:

The US census says there are about 300 million people in that country. Suppose there are 1,000 terrorists, that is, 1 for every 300,000 inhabitants, a percentage of .00033%. Suppose the NSA's effectiveness rate is 40%, a pretty high value considering that terrorists work hard at not being detected. And suppose the NSA has a 0.1% misidentification rate (that's 1 in every 30,000 citizens).

With these assumptions, Bayes' theorem gives a probability of p=0.0132, nearly zero, far even from a probability of 0.5, so this surveillance method is totally useless for finding terrorists. They'd do better flipping a coin!

Even with an effectiveness rate of 90% and a misidentification rate of 1 in 3,000, the probability according to Bayes' theorem is 0.2308.

As you can see, the Bush administration is spending its money looking for terrorists, or maybe it's looking for something else.

The only thing this eavesdropping on communications can be good for is trend analysis or gauging public opinion.
