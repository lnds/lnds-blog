---
comments: true
date: 2005-09-16 14:51:24
layout: post
slug: do-they-read-me-in-redmond
title: Do they read me in Redmond? :)
authors: [admin]
wordpress_id: 140
categories:
- security
---

My thanks for the flattering mention on [Kriptópolis](http://www.kriptopolis.org/node/1126) of my previous post: [Exploiting MD5 collisions](/en/blog/lnds/2005/09/15/exploiting-md5-collisions/).

But I learn from that same site that Microsoft has decided to abandon the hash functions under attack, and even the DES cryptographic function. More details here: [http://www.kriptopolis.org/node/1126](http://www.kriptopolis.org/node/1126) and here:[http://www.eweek.com/article2/0,1759,1859751,00.asp](http://www.eweek.com/article2/0,1759,1859751,00.asp).

Could they have read me in Redmond? :)

As you know, I wrote a couple of articles on [CodeProject](http://64.233.163.132/www.codeproject.com). The first, [Good Bye MD5](http://www.codeproject.com/useritems/GoodbyeMD5.asp), has been up for less than a month and has already had close to 20,000 reads, with an interesting debate to boot.  
My second article, "Exploiting MD5 collisions", in which I show how to exploit the attack on MD5 to disrupt software distribution systems, is at close to 2,000 reads in less than 48 hours.

Not that I'm trying to pass for a genius, but the truth is this has been known for almost a year, and the basis of the attack:
    
    <code style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; ">MD5(x)==MD5(y) => MD5(x+q) == MD5(y+q)</code>

for much longer than that.

The databases, and the Rainbow tables algorithm, have been known since 2003.

What's happening is that now we have the foundations for building schemes to break security based on these algorithms.

In fact the scheme I presented is rather crude, but [Kaminsky's paper](http://www.doxpara.com/md5_someday.pdf), in which he describes the perl script [stripwire](http://www.doxpara.com/stripwire-1.1.tar.gz), leads me to think it is possible to build a self-extracting executable with a trustworthy MD5 but harmful behavior.

It's a matter of time...

Consider, for example, that RedHat .RPM **files** are distributed using MD5 checksums. What if a hacker breaks the RPM utility?  
Or if someone plants malicious code in utilities like tar or gzip, and with that leaves Apache's MD5s vulnerable, just to mention a few consequences.  
In fact the example of the 2 postscript **files** is an example of a self-executing file attacked with the MD5 collision.



