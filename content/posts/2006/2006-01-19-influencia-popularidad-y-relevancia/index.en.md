---
comments: true
date: 2006-01-19 15:10:19
layout: post
slug: influence-popularity-and-relevance
title: Influence, popularity and relevance
authors: [admin]
wordpress_id: 2040
categories:
- entrepreneurship
- Internet
- programming
tags:
- blogmemes
- influence
- meneame
- popularity
- relevance
---

I've been wrapped up in 2 problems:

	
  * The first is the problem of promoting posts on [blogmemes ](http://web.archive.org/web/20090426080926/http://www.blogmemes.com/)to the top of the queue.

	
  * The other problem is how to encourage user participation.


The first problem has to do with **relevance**, and the second has to do with **influence **and **popularity**.

Let me explain. A story published on blogmemes has to be interesting to be on the front page. But it's not enough for it to be interesting in itself. Blogmemes is a democratic system, so what matters is the degree of active and passive user participation with the story. So an article's popularity is not enough. The right concept for ordering the stories on the front page has to do with relevance.


## Relevance


The [RAE ](http://web.archive.org/web/20090426080926/http://www.lnds.net/2006/01/www.rae.es)dictionary (the Royal Spanish Academy's) defines relevance as:


> 1. f. Quality or condition of being relevant, importance, significance.


and relevant is defined as:


> (From Lat. relĕvans, -antis, active part. of relevāre, to lift, to raise). 1. adj. Outstanding, prominent.
2. adj. Important, significant.


How can we measure how significant a story is?

In a Digg-style system, like Meneame or Blogmemes, we have these measurable variables:



	
  1. The number of votes an article or story has received

	
  2. The number of comments it has received

	
  3. The number of times users have followed the link to the original story

	
  4. The age of the story


Finally, I've considered another factor, which is the moment at which a meme was last touched by a vote, a comment or a click on the link.

That's why the blogmemes promotion model is the following:

	
  * A meme moves to the front page if the number of votes received exceeds a threshold. Currently that threshold is 7 votes, but it may change in the future.

	
  * Once promoted, a meme is ordered by its degree of relevance.


The degree of relevance, R, is a function proportional to the sum of votes+comments+clicks, but one that "decays" as a function of the age of the story.

Currently R is measured with this formula:


> R = (1000+log(votes+comments+clicks+hours_promoted)* 1/(1+log(hours_published) * 10/(1+log(hours_promoted)) * log(Votes);


The reason for using the logarithm is that it's an increasing function but with a decreasing slope (the derivative of log is 1/x). This tends to flatten the weight of votes+comments+clicks+hours_promoted.
By dividing by the logarithm of the hours published and hours promoted, we make the story decay over time.
Why multiply by log(Votes)? Because that factor solves the problem of memes published at almost the same time, where we want the more popular one to show up before the less popular one.

Is this a good model for relevance?

I don't know. It's very experimental, and somewhat arbitrary, but so far it seems to work the way I need it to.
I submit the model for your consideration.


## Popularity and influence


Again, the dictionary defines popularity as:


> popularity. (From Lat. popularĭtas, -ātis).
1. f. Acceptance and applause that someone enjoys among the people.


and influence as:


> influence. (From Lat. inflŭens, -entis, active part. of influĕre).
1. f. Action and effect of influencing.
2. f. Power, standing, authority of someone over another person or persons, or to intervene in a matter.
3. f. Person with power or authority through whose intervention an advantage, favor or benefit can be obtained. Used mostly in pl.
4. f. obsolete. Grace and inspiration that God sends inwardly to souls.


Well, I've decided to promote these two attributes among the users of akarrú, or blogmemes.

An influential user is one who gets stories to become relevant.
A popular user is one who receives the votes of the other users.

In these cases the calculations are simpler. Influence is proportional to the number of memes published multiplied by the logarithm of the votes and comments cast by the influencer.
Popularity is the logarithm of the number of votes received minus the number of stories published (I assume every author votes for himself), multiplied by the number of stories published.

Influence is more neutral in this case because it depends on the total number of memes in the database. Popularity, on the other hand, depends on the number of memes published. That is, a user who publishes a lot tends to be more popular.

If we assume that real democracies are not perfect, and that there are indeed groups (parties) or individuals (leaders, strongmen) who move the population, then it seemed to me that blogmemes should reflect that.
On the other hand, popularity matters in a democracy, which is defined by the vote of the majority.

What consequences will these parameters have on [blogmemes](http://web.archive.org/web/20090426080926/http://www.blogmemes.com/)?

I see the following consequences:


  1. Groups of users will form who vote for each other.

	
  2. These groups will push stories onto the front page

	
  3. Majorities are respected, and they are what make someone popular

	
  4. We'll have to see whether the incentive of being influential or popular generates more user participation.


In any case, I want to avoid the problems [Ricardo Galli](http://web.archive.org/web/20090426080926/http://mnm.uib.es/gallir/) has had with meneame. He made design decisions that have caused annoyance. Personally I don't like being forced to vote in order to publish a story, and I partly agree with [some of the criticism](http://web.archive.org/web/20090426080926/http://almadormida.blogspot.com/2006/01/consideraciones-sobre-el-uso-de.html), but I'd rather not pick a fight, since the meneame team is sovereign over the decisions of its own project.

For now, blogmemes is an anarchy in search of self-organization. If this turns into something positive, fine; if it turns into a paradise for spammers, we'll have to invoke our divine powers and declare a state of emergency. But until that happens, blogmemes [is open to self-promotion and self-moderation](http://web.archive.org/web/20090426080926/http://milugar.net/actualidad/meneame-barrapunto-y-libertonia-2.html), gulp.

