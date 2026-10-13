---
comments: true
date: 2005-10-02 17:54:15
layout: post
slug: reverse-turing-tests-and-accessibility
title: Reverse Turing tests and accessibility
authors: [admin]
wordpress_id: 160
categories:
- usability
---

Reverse Turing tests, or CAPTCHAs, have become an unpleasant practice that I hope disappears soon.

The truth is that several CAPTCHAs have made me feel like a complete idiot, to the point where I wonder whether my problem is my [astigmatism](http://es.wikipedia.org/wiki/Astigmatismo), or whether I'm simply incapable of recognizing images.

At [Factor Humano](http://www.webstudio.cl/blog/) there is a very thorough article on CAPTCHAs from the accessibility point of view: [http://www.webstudio.cl/blog/captchas-y-accesibilidad/](http://www.webstudio.cl/blog/captchas-y-accesibilidad/).

There are other ways to fight spam. If what worries you is security, CAPTCHAs are not for that, as [I explained earlier](/en/blog/lnds/2005/08/10/dont-compromise-your-sites-security/).

In any case, if what you want is to verify that there's a human on the other end, there are 2 ways.

  * The most expensive is to use biometrics, especially [cancelable biometrics](/en/blog/lnds/2005/10/01/cancelable-biometrics/).
  * The cheapest is to use mouse movement events. For example, you can draw a grid of numbers on colored cells and ask the user to click on one of the numbers, or on a specific sequence.

One of the best CAPTCHAs I've seen is, ironically, the one used by that SPAM generator called BlogClicker. The image shows the concept:

![goodcaptcha.GIF](goodcaptcha.GIF)

It would be even better without distorting the requested number.

It is very hard for a script to simulate mouse clicks (truth is, I can't think of how to do it, but there are always clever hackers).

Either way, I think this practice should disappear. What we need to do is find better ways to secure our users' trust, by other means. The new ideas around [the laws of identity](http://www.identityblog.com/stories/2004/12/09/thelaws.html) will probably lead us to actually stop spam.
