---
title: "Security and opportunity"
authors: [admin]
date: 2012-02-24T08:25:11-03:00
slug: "security-and-opportunity"
tags: ["security", "md5", "cryptography"]
draft: false
math: false
---

In 2005 I [published](http://it.slashdot.org/story/05/09/23/0618252/practical-exploits-of-broken-md5-algorithm)
a [proof of concept](http://www.codeproject.com/Articles/11643/Exploiting-MD5-collisions-in-C)
showing how vulnerable MD5 is when used as a "digital signature"; in
2007 [Peter Selinger](http://www.mathstat.dal.ca/~selinger/md5collision/), building
on my work, created a mechanism to automate the process of generating
fake signatures. In [2009 I noted](/blog/2009/01/md5-las-vulnerabilidades-siguen-ahi.html)
that the vulnerability was still there. And here we are in 2012, and MD5
is still available and still being used to generate keys and as an
electronic signature mechanism. It is even still recommended by
government institutions as a way to verify file integrity. In fact there
are many more uses of this algorithm in different protocols running in
various production environments in our country.

We have known for years that an MD5 signature can be duplicated,
technically this is called a collision, so that we can replace the
original file with a different file and the signature stays intact.

Why is this hash algorithm still in use, when it has been proven over
and over that it's vulnerable?

There are many reasons. For example, changing a regulation is very hard.
Implementing that change can often carry an extremely high total cost
for the industry, and it's probably simpler to implement alternative
mechanisms, or other layers of security that mitigate the risk. (The bad
part is that in the Chilean case, many of those regulations were written
around 2008, 3 years after these vulnerabilities were exposed! For that,
the only thing to blame is the lack of technical rigor of the people who
wrote those rules.)

Will the use of MD5 ever go away? Hard to say, but I suspect that as
long as those functions are sitting there available, it will keep being
used.

In [my 2009 post](/blog/2009/01/md5-las-vulnerabilidades-siguen-ahi.html)
I mentioned how Ben Laurie, Apache founder and OpenSSL core member, was
considering removing these functions from that project, but that it was
very hard to do without breaking SSL and TLS. Another alternative was to
rename the functions, so that their use would drop off. Well, more than
3 years have gone by and nothing has been done. Even the openssl
repository still uses MD5 as the signature for its files (though they
do include sha-1 as well).

In 2005 I was busy with, and interested in, this kind of problem; after
all, my business at the time had to do with identity verification
systems. That was when I looked into this matter and helped spread the
word about the problem. Today I work on other things, and I have very
little time to research cryptography (fascinating as the subject is).
I'm writing this post because I want to say that I understand the
frustration of many people who care about computer security, who watch
their discoveries get ignored by developers, or by institutions.

What needs to be understood, in my opinion, is that developers are not
indifferent. The Ben Laurie example is telling. Developers may be well
aware of the problem, but very often it is very hard, and sometimes
simply not practical, to carry out a change. I'll probably write about
this again 3 years from now and MD5 will still be alive and kicking, in
spite of [the attempts that have been made to kill
it](http://www.eweek.com/c/a/Security/Microsoft-Scraps-Old-Encryption-in-New-Code/).

There are a thousand factors that explain the apparent apathy about
these issues, but if you were to look at it from the inside, if you knew
the internal structure, or the internal politics, of these
organizations, you would understand that it's often hard to move
resources, or that many priorities come first. That's why "shocks"
sometimes succeed: it's not that the people in those organizations don't
want to fix the problems, but when a serious incident happens, one that
publicly exposes the vulnerability, organizations scramble to fix it.
The bad part is that this shock doctrine stresses the organization and
pushes back other projects. That's why I don't like that way of exposing
risks; in the long run it's destructive.

On the other hand, organizations need to invest in educating their
technical staff to build security into development from the start. Here
you have to explain to the company's management the importance, and the
value, of this kind of solution. But we should remember that in the end
"money talks": if the cost of the risk multiplied by the probability of
it happening is low, then companies will often choose some other
mechanism, so as to spend the resources on other things that bring more
value to the business. What a developer, and a security consultant, need
to understand are the basic concepts of microeconomics: there is always
**opportunity cost**.

If you want to sell security, learn the business; your message will be
better received.

For my part, I really hope this is the last post about MD5 on this blog,
but I suspect it won't be.
