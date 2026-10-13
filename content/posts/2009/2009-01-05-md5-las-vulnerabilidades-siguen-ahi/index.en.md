---
title: "MD5: the vulnerabilities are still there"
authors: [admin]
date: 2009-01-05T08:25:11-03:00
slug: "md5-the-vulnerabilities-are-still-there"
tags: ["security", "md5", "cryptography", "vulnerabilities"]
draft: false
math: false
---

In 2005 I wrote a [proof of concept](http://www.codeproject.com/KB/security/HackingMd5.aspx) exploiting
the vulnerability
in MD5 ([Busindre](http://www.busindre.com/) has 
[explained my proof of concept much better
than I did](http://www.busindre.com/evilize-creando-distintos-ejecutables-con-identico-md5-colisiones/),
in Spanish). In fact the proof of concept took the ideas laid out by Dan
Kaminsky in his now fairly famous
paper [MD5 To Be Considered Harmful Someday](http://www.doxpara.com/md5_someday.pdf).

A few days ago a group of European researchers published another, equally
interesting proof of concept, in a paper ironically
titled: [MD5 considered harmful today](http://www.win.tue.nl/hashclash/rogue-ca/).

Apparently (I haven't read the paper in detail) the proof exploits the
same vulnerability as my example. The fact is that once you have a way
to generate a collision, it isn't hard to modify the contents of any
file signed with MD5, and this could be extended to modify a digital
certificate, turning it into a root certificate.

We don't know how many Certificate Authorities (CAs) still use MD5 to
sign their certificates. I don't think it's a common practice, but a
single certificate signed with this algorithm is enough to leave every
certificate issued by that certificate authority vulnerable.

The most effective way to fight this vulnerability is to stop using the
MD5 algorithm when certifying a certificate. This is something that will
surely start being implemented in browsers, and in every library that
implements SSL.

[Ben Laurie](http://en.wikipedia.org/wiki/Ben_Laurie), one of the
founders of the Apache Software Foundation and a member of the OpenSSL
core team, [has had the same thought](http://www.links.org/?p=480), and has
at least been analyzing the feasibility of removing MD5 from the OpenSSL
source code, or at least renaming the functions that implement this
algorithm, and proposes at least scheduling the complete removal of MD5.
Apparently, removing the algorithm right now would cause a series of
problems for a number of existing certificates.

I hope this is the coup de grâce for the use of MD5 as a mechanism for
validating electronic signatures. I'd like it to be so. Unfortunately
this algorithm is still used to certify ISO files, and all kinds of
digital documents. In Chile, for example, there are several public
institutions that use this algorithm as a mandatory signature in various
official regulations and procedures that transfer quite sensitive
information. Those uses have no effectiveness whatsoever, as [I showed in 2005](/en/blog/lnds/2007/10/30/my-biggest-contribution-to-computer-security/).
I hope they read this article someday and switch to something better.

I went through some important websites in Chile that use digital
certificates, to verify that they weren't using MD5, and fortunately I
found nothing. But take note: it is urgent to keep MD5 from being used
as the signature algorithm in any certificate, so until that happens, I
really don't know how much we can trust the PKI infrastructure.

But I didn't come away very reassured either, because almost all the
digital certificates I could look at use SHA1 as the signature
algorithm, and we know SHA1 is going to be broken sooner rather than
later (once you have a mechanism for generating collisions, an
impersonation scheme similar to the one used with MD5 becomes possible).

In terms of computer security, we've started off an entertaining year
:wink:

Update: [MetaSploit has
added](http://blog.metasploit.com/2009/01/scanning-for-md5-signed-ssl.html) to
the main tree of its code the detection of certificates issued and
signed with MD5. The bad news is that the problem isn't in the
certificates already signed (those can be revoked); the vulnerability is
that we can create new certificates signed with MD5. I insist, what
needs to be done is to invalidate MD5 verification whenever SSL is used.
