---
comments: true
date: 2006-09-26 20:24:38
layout: post
slug: not-so-smarty
title: Not so Smarty
authors: [admin]
wordpress_id: 2091
---

Ricardo Galli [is right](http://web.archive.org/web/20090426081006/http://mnm.uib.es/gallir/posts/2006/09/26/820/): if you use [Smarty](http://web.archive.org/web/20090426081006/http://smarty.php.net/), the performance hit is high. I've read here and there that Smarty is efficient, but you surely have to be a guru at it to get what was promised.

In the case of Blogmemes, 80% of a page's rendering time goes to Smarty, and I'm talking about server time only. This is a problem I've put off for lack of time, and because blogmemes' traffic doesn't justify it. It affects the user experience all the same, and maybe it's time to roll up our sleeves and dig in.

Internally, at the Blogmemes Network we're working on the design of a new version of [akarrú](http://web.archive.org/web/20090426081006/http://trac.blogmemes.com/trac_script), but I think we need to put out a new version soon, because the last release has gathered plenty of dust.

The main goal will be to optimize the use of templates, because besides the performance problem there are a lot of users who get tangled up in Smarty's configuration. I think akarrú also needs a better installation mechanism.

Once all of this is ready we'll let you know about the change, and I hope the users of [BlogMemes](http://web.archive.org/web/20090426081006/http://www.blogmemes.com/) notice it, and appreciate it.
