---
title: "Flame and MD5"
authors: [admin]
date: 2012-06-29T08:25:11-03:00
slug: "flame-and-md5"
tags: ["computing", "basic", "programming languages", "history"]
draft: false
math: false
---
 
In 2005 I wrote a [proof of
concept](http://www.codeproject.com/Articles/11643/Exploiting-MD5-collisions-in-C)
where I used a well-known MD5 vulnerability discovered by Xiaoyun
Wang in 2004[^1] to fool any system that validates a file's digital
signature using MD5. Later Peter Selinger
developed an improvement on my scheme that automates the process
even further.

My proof of concept lets two different programs (a "good" one
and an "evil" one) have the same MD5 signature. For my scheme to work
a third program, an extractor, is required. Selinger, however,
improved my scheme by eliminating that third program. In essence, what
Selinger does is create a "schizophrenic program" that contains
both personalities of the program (the good one and the evil one).

In 2009 Didier Stevens used Selinger's program to create two
programs with the same Authenticode digital signature, a scheme used by
Microsoft to digitally sign files.

The same concepts were used by Marc Stevens, Arjen K. Lenstra and
Benne de Weger to create programs that have the same digital signature;
in this case the researchers determined a set of bytes that
must be appended to the end of each file to achieve the effect.

The interesting part of all this is that these schemes have been used to
build the fearsome virus known as
[Flame](http://blogs.elpais.com/cronica-negra/2012/06/virus-flame-la-primera-bomba-atomica-de-la-ciberguerra.html).

[Flame](http://es.wikipedia.org/wiki/Flame_(malware)) is apparently
a cyberweapon, like
[Stuxnet](http://es.wikipedia.org/wiki/Stuxnet), whose purpose is to attack
foreign powers, Iran and its nuclear program in particular.

Marc Stevens [investigated Flame's code](http://www.cwi.nl/news/2012/cwi-cryptanalist-discovers-new-cryptographic-attack-variant-in-flame-spy-malware)
and discovered that it uses a scheme similar to the ones described above to pass
its code off as a valid Windows update:

> The first cryptographic collision attack against the cryptographic
> hash function MD5 was invented by Xiaoyun Wang et al. in 2004 , which
> however did not pose a serious immediate threat due to technical
> limitations. Subsequently, we have devised a more flexible collision
> attack against MD5 in 2007, a so-called chosen-prefix collision attack
> . This posed a greater threat due to the removal of the most important
> technical limitation. Finally, we refined our attack in 2008 and used
> it to construct a rogue Certification Authority, thereby demonstrating
> a serious vulnerability in internet security. Our demonstration
> convinced Microsoft and various governments to raise the security
> standards for Certification Authorities, by disallowing the use of
> MD5-based signatures effective 15 January 2009.

> It is clear that Microsoft, at that time, should have also disallowed
MD5-based signatures in their Terminal Server Licensing Service (TSLS).
As apparently the Flame collision attack was executed in February 2010,
it now turns out they did not; this has been an important oversight. The
result of this collision attack on a Microsoft TSLS Certification
Authority was a code-signing certificate appearing to be from Microsoft
that may be used to sign Windows Updates.  This attack avenue was
essentially open to any knowledgeable attackers since June 2009, when,
under the belief that MD5-based signatures had indeed been disallowed,
we made the program sources for a chosen-prefix collision attack
publicly available. Furthermore, it should be noted that, even without a
collision attack, Microsoft has unsuspectingly been providing its TSLS
customers with unwarranted code-signing abilities.

> We have developed a forensic tool for collision attacks \[7\] that can
efficiently detect a wide range of known and unknown collision attacks
against MD5 as well as MD5\'s successor SHA-1. Moreover, this tool may
also be used to online detect fraudulent certificates constructed using
a collision attack.

Using our forensic tool, we have indeed verified that a chosen-prefix
collision attack against MD5 has been used for Flame. More
interestingly, the results have shown that not our published
chosen-prefix collision attack was used, but an entirely new and unknown
variant. Therefore it is not unreasonable to assume that the particular
chosen-prefix collision attack variant underlying Flame had already been
in development before June 2009. This has led to our conclusion that the
design of Flame is partly based on world-class cryptanalysis. Further
research will be conducted to reconstruct the entire chosen-prefix
collision attack devised for Flame.

Which shows, once again, that no matter how much research is done
in cryptography, the results are not adopted by the industry
until a disaster happens\...



[^1]: "How to break MD5 and other hash functions", Xiaoyun Wang and
Hongbu Yu, EUROCRYPT 2005, Lecture Notes in Computer Science, vol. 3494,
Springer, 2005, pp. 19--35.
