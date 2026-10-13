---
comments: true
date: 2006-01-13 08:54:24
layout: post
slug: the-new-standard-icon
title: The new standard icon
authors: [admin]
wordpress_id: 2048
categories:
- Internet
- uncategorized
- technology
tags:
- rss
---

![](logo.jpg)

Working with the Feedburner APIs: [http://www.feedburner.com/fb/a/developers](http://web.archive.org/web/20090426080926/http://www.feedburner.com/fb/a/developers) I discovered that the icon firefox uses has become [a standard](http://web.archive.org/web/20090426080926/http://feedicons.com/).

This is good, because now we'll all know where the feeds are.
While I'm at it, here's a gift: if you want this cool icon to show up in the firefox bar, you need to add
this code:


```
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="{#url_feeds#}" />
```

where you must replace {#url_feed#} with the address your feed comes from.

