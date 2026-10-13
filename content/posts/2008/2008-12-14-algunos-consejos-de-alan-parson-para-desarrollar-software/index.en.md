---
comments: true
date: 2008-12-14 19:03:16
layout: post
slug: alan-parsons-tips-for-developing-software
title: Some tips from Alan Parsons for developing software
authors: [admin]
wordpress_id: 348
categories:
- software development
- the nature of software
- people
---

It's not that [Alan Parsons](/en/blog/lnds/2007/11/11/time-alan-parsons/) has decided to change trades. What happened is that, by one of those odd detours, starting from a [post on El Francotirador](http://www.elfrancotirador.cl/2008/12/14/el-derecho-de-autor-como-arma-corporativa/) I ended up at [this article](http://audionews.wordpress.com/2008/09/10/las-10-cosas-que-todos-los-que-graban-musica-deberian-saber-segun-alan-parsons/) containing 10 recommendations from this famous sound engineer and music producer.

  
Reading them, I realized that some of them have a parallel in software development, and they fit quite well.

So here are Alan Parsons's tips, in bold, with my comments and adaptations below.

>  * Keep cables short, especially low-impedance ones, like those for guitars or microphones. Length affects the sound. Having said that, I don't believe expensive cables offer significant improvements.

Translation: two things. Keep your modules or programs short, and make sure you have a low degree of coupling (which in our field is the equivalent of high impedance).

>   * Even the best instruments and equipment can sound like garbage in the wrong hands. The reverse can also be true.

This is a maxim of universal application, for any profession.
   
> * Go for a good performance, not perfection.
>

Good advice, especially for the youngest engineers.

>  * Take notes on everything that happens in the recording so that anyone can pick up where you left off. In particular, make a note of the tracks that should not be used - better yet, get rid of them.

You have to [take care to document](/en/blog/lnds/2008/01/22/the-mystery-of-the-pyramids/), and to make the code understandable to others.


Something very important is deleting code that is no longer used. Many programmers leave old pieces of code locked up inside comments, and this becomes agonizing when you have to review that code several months or years later.

There is a principle in agile development: YAGNI, You Ain't Gonna Need It. If you're not going to need it, get rid of that code. Very healthy advice.


>  * Even when your ideas are the ones making the difference, make the other person believe they are his.

Good advice to use with those difficult users (or creative managers).


>  * The check is NOT in the mail.

One piece of advice: find a partner who takes care of collecting on the invoices.

