---
title: "My biggest contribution to computer security"
authors: [admin]
date: 2007-10-30T08:25:11-03:00
slug: "my-biggest-contribution-to-computer-security"
tags: ["security", "md5", "cryptography", "vulnerabilities"]
draft: false
math: false
---

I write this article with pride and with worry. Pride at the impact
my work had, and worry because, well, you'll see
why.

In 2005 I wrote an [article on
codeproject](http://www.codeproject.com/dotnet/HackingMd5.asp) where
I showed a practical scheme that exploited one of the vulnerabilities
found at the time in the MD5 algorithm. The article gained
notoriety when it was featured
on [Slashdot](http://it.slashdot.org/article.pl?sid=05%2F09%2F23%2F0618252&tid=172&tid=93&tid=218)
and on [Kriptópolis](http://www.kriptopolis.org/explotando-las-colisiones-de-md5).

My original article is in English and there is a (very
brief) [summary](/en/blog/lnds/2005/09/15/exploiting-md5-collisions/)
on this very blog.

The truth is I didn't give the subject much more thought, and I wasn't aware
of where this proof of concept had gone. But while doing some
research recently I found the [work of Peter
Selinger](http://www.mathstat.dal.ca/~selinger/md5collision/), professor
and researcher at [Dalhousie University](http://www.dal.ca/) in
Canada, who extended my scheme using the result of [Patrick
Stach](http://www.stachliu.com/md5coll.c), which makes it possible to take advantage of the
later discoveries about the flaws in this algorithm.

Another surprise is that this work has been cited as
an [anti-forensics
tool](http://ws.hackaholic.org/slides/AntiForensics-CodeBreakers2006-Translation-To-English.pdf)
in ethical hacking circles.

### What is all this about, and what are the implications?

Let me give you an example.

When you go to a site hosting the Ubuntu disk
images you will find a file called MD5SUMS, which in the case of
Ubuntu 7.10 contains the following:

> ebf7ad055bc39634065daa10de980d7e \*ubuntu-7.10-alternate-amd64.iso
> 9a4ae3cfd68911a861d094ec834c9b48 \*ubuntu-7.10-alternate-i386.iso\
> 61c87943a92bc7bf519da4e2555d6e86 \*ubuntu-7.10-desktop-amd64.iso\
> d2334dbba7313e9abc8c7c072d2af09c \*ubuntu-7.10-desktop-i386.iso\
> 43ff753b260729b12c7d21d3a6db8c73 \*ubuntu-7.10-server-amd64.iso\
> 7d88cd87df509a740d9f47b9bbf1375e \*ubuntu-7.10-server-i386.iso\
> 5308a79f5e652edba5be84644ee14b09 \*ubuntu-7.10-server-sparc.iso

The string of numbers and letters to the left of each name is the
value you get by applying the MD5 algorithm to the file on the right.

In this case, for the CD image ubuntu-7.10-desktop-i386.iso the
MD5 value is d2334dbba7313e9abc8c7c072d2af09c.

To validate that our image is the right one, the safest thing is
to compute the MD5 hash of the downloaded file and check that
it matches what the official Ubuntu site reports. If the
values match, we know the disk has not been sabotaged or altered
by anyone.

This keeps a malicious hacker from infecting Ubuntu with a virus or
a trojan, since the hacker would have to create a similar iso image,
replace it on the server and make sure that the MD5 value of his
file matches the one reported by Ubuntu.

Until now that seemed impossible, but as I showed in 2005 it is very
simple to write an extractor program that defeats this
verification mechanism, taking advantage of the flaws in the MD5 algorithm (discovered at
that time by Xiaoyun Wang and Hongbo Yu of Shandong University
in China).

The problem with my scheme is that it requires distributing the
extractor program, but Selinger's proof of concept removes that obstacle.

Selinger is able to create a "self-extracting" program, which
renders the "MD5 signature" useless as a means of validating the
integrity of **files**.

If we think about the ISO **files** used to distribute the live
images of Ubuntu and other operating systems, these **files** are
"self-executing", and therefore the scheme proposed by
Selinger applies.

The door is open to distributing trojans by infecting any
linux distribution that uses MD5 as its **only validation
mechanism**[^1].

It's not hard to imagine an extension of Selinger's program that generates
malicious ISO images of the many operating systems distributed
this way.

Of course this proof of concept also rules out using
MD5 as the basis for building MACs (Message Authentication Codes) for
records, transactions or digital documents.

In that case it is even easier to break the control mechanism, because
MACs are always computed by external programs, and for that
a scheme like the one I described in my original article is enough.

It's been 2 years since we learned these things and I still run into
implementations that use MD5 as a mechanism to authenticate
transactions.[^2]

But worst of all, I still come across systems that boast of their high
level of security because their users' passwords are stored
as MD5, something that was not recommended even before 2005, and is still being done.

Do you see now why, besides pride, I feel worried?

[^1]: I insist on the "only verification mechanism" part, because in many
cases other additional or complementary authentication codes are used,
such as PGP signatures or two hash values, one MD5 and
one SHA-1 for example.

[^2]: Unfortunately many users don't know how, or don't bother, to
verify the integrity of the images in the **files** they download,
so hackers often don't need anything this complicated to
compromise software distribution.
