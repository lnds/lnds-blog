---
comments: true
date: 2008-02-14 16:42:12
layout: post
slug: i-thought-linux-was-secure
title: I thought Linux was secure
authors: [admin]
wordpress_id: 49
categories:
- security
---

I don't know whether the comment [_I thought Linux was secure](http://www.theregister.co.uk/2008/02/14/claranet_linux_security_hole/comments/#c_155656_), taken on its own, is innocent or provocative.  
But there must be users who will be surprised to find out that Linux can indeed be seriously attacked, and its security compromised.

What happened is that [a group of British crackers](http://www.theregister.co.uk/2008/02/14/claranet_linux_security_hole/) used the [vmsplice](/en/blog/lnds/2008/02/11/vmsplice-linux-root-exploit/) exploit to gain access to the root account on several Claranet servers in Great Britain.

It's actually quite simple: lots of people surely have access to a shared server (shared hosting), and from their accounts they run the code and gain root privileges.

This is one scheme, out of the many possible, for using this exploit.

The same thing must be happening in plenty of places, and we are going to see several similar stories in the coming weeks.

The problem is that although the patch is trivial and easy to install, the procedures and the resources aren't always there to respond in time, and that gap is what the vandals use.

Of course, we'll see silly wars between the Linux crowd and Windows users over which system is more secure.

In any case, Linux has an almost instantaneous response and fix time for this kind of flaw. If this happened on Windows or Mac OS, first we'd have a month of the problem being denied, another month of silence, and several more months to get a response.

But for all that tremendous response time of the Linux community in fixing a serious problem, it runs up against the capacity to respond, which has inertia, and that inertia is what those who want to do harm take advantage of.

Anyway, even once the patch has been applied, can you be sure the computer wasn't attacked beforehand, and that there isn't already some malware or some strange account created? So applying the patch isn't enough. You have to audit the system, and that means overtime for operators and system administrators: money, money, money....

Security isn't just about installing patches and cranking the firewalls up to the max...
