---
comments: true
date: 2005-11-01 20:40:25
layout: post
slug: new-papers-on-md5-collisions
title: New papers on MD5 collisions
authors: [admin]
wordpress_id: 181
categories:
- security
---

The paper ["Collision-Resistant usage of MD5 and SHA-1 via Message Preprocessing,"](http://eprint.iacr.org/2005/248) by Szydlo and Yin, presented at the [NIST Hash Workshop](http://www.csrc.nist.gov/pki/HashWorkshop/index.html), matters for practical reasons.  
  
According to Niels Ferguson, the big problem is that [MD5](http://www.darksideprogramming.net/md5) is still used all over the place, and switching algorithms takes a long time. Steve Bellovin points out that it takes a year to get the change through the [IETF](http://www.ietf.org/) and five to seven years for it to be adopted.  
We already know that Microsoft, at least, has decided that [MD5 must not be used in its internal development](/en/blog/lnds/2005/09/16/do-they-read-me-in-redmond/).  
