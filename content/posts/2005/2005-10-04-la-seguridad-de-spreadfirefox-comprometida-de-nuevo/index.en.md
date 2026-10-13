---
comments: true
date: 2005-10-04 17:47:33
layout: post
slug: spreadfirefox-security-compromised-again
title: SpreadFirefox security compromised again
authors: [admin]
wordpress_id: 2005
categories:
- security
tags:
- firefox
- vulnerabilities
---

The [SpreadFirefox](http://web.archive.org/web/20090426080911/http://www.spreadfirefox.com/) site has been compromised, for the second time, and will be down until October 15.
The problem is that the user database is compromised. According to the message sent to registered users, the site stores passwords in MD5. I assume that by now you already know that this is something you should not try at home; if not, read [this post](http://web.archive.org/web/20090426080911/http://www.lnds.net/archives/2005/09/me_leeran_en_re.html)!!

Part of the [message](http://web.archive.org/web/20090426080911/http://www.darksideprogramming.org/archives/2005/10/spreadfirefox_p.html) sent by SpreadFirefox:


> "We will notify you again when the site is back up with instructions on how to change your password. (Note: We do use MD5
hashing on the passwords, but MD5 cannot protect all passwords against
off-line dictionary style attacks.)"
