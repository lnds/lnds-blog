---
comments: true
date: 2006-02-22 10:27:48
layout: post
slug: a-css-hack
title: A css hack
authors: [admin]
wordpress_id: 2056
categories:
- Internet
- usability
tags:
- blogmemes
- CSS
- hack
---

This tip may be useful for designers: I just wrote up, over at métodos, a [hack](http://web.archive.org/web/20090426080931/http://metodos.lnds.net/2006/02/un_hack_simple_en_css.html) to get around an Internet Explorer bug.
It turns out IE doesn't support the **min-height** attribute, which makes a lot of divs "fall apart" in Internet Explorer.

That was the case with [Blogmemes](http://web.archive.org/web/20090426080931/http://www.blogmemes.com/), which had this problem on several pages. With this [simple hack ](http://web.archive.org/web/20090426080931/http://metodos.lnds.net/2006/02/un_hack_simple_en_css.html)it's solved, and with that we squash a little bug that had been bothering us for a while.

The change will show up soon in the [akarru cvs repository ](http://web.archive.org/web/20090426080931/http://cvs.sourceforge.net/viewcvs.py/akarru/SRC/public_html/styles/)for those who are using the system. The next release will be this weekend, for those who download the tgz file.


