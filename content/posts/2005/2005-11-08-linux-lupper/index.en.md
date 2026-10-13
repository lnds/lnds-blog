---
comments: true
date: 2005-11-08 20:56:55
layout: post
slug: linux-lupper
title: Linux/lupper
authors: [admin]
wordpress_id: 175
categories:
- security
---

Well, the new Linux worm is exploiting the [XML-RPC ](http://www.securityfocus.com/bid/14088/)vulnerabilities that have been known for quite a while.

It affects sites running Drupal, WordPress, Xoops and, in general, almost anything with PHP and an unpatched XML-RPC.

The best way to check whether you're infected is to look for the file /tmp/lupii, as well as a listening UDP port 7222, where the worm opens a back door...

[Via Kriptópolis.](http://www.kriptopolis.org/node/1355)

A historical note: the first known internet worm was created by Robert Morris in 1988 and affected Unix systems.

A worm on Linux is critical given the huge number of installed servers; in fact Linux+Apache dominates server configurations. LAMP setups (Linux Apache MySQL PHP, or Linux Apache MySQL Perl) are the most popular for websites.

If you don't control your own server, demand that your internet provider keep the service up to date.

Unfortunately there are many administrators who don't bother to keep their sites secured. It's also true that in many cases applying a new patch can cause side effects.

As you can see, bugs are in every kind of software, whether free, open or closed. Quality is the subject we software developers still haven't passed.
