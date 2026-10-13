---
title: "On security"
authors: [admin]
date: 2012-02-21T08:25:11-03:00
slug: "on-security"
tags: ["security", "hacking", "Jaron Lanier"]
draft: false
image:
  placement: 3
---
 ![](securityk.jpg)
 
A few weeks ago I was having lunch with my boss, and we talked about IT
security. When they came over with the machine to pay by debit card, I
asked him whether he was sure the machine they handed him belonged to
the banking network. How did he know it wasn't a fake machine, capturing
and cloning his card? I think I ruined his life :smile:, now he can't
use his debit card without that doubt.

There are security consultants who do exactly that, ruin the life of an
entire organization with their observations, which, valid as they are,
have to be taken with caution.

As [Steve Yegge says](https://plus.google.com/112678702228711889851/posts/eVeouesvaVX),
accessibility is the most important thing in the computing world:

> "Like anything else big and important in life, Accessibility has an
> evil twin who, jilted by the unbalanced affection displayed by their
> parents in their youth, has grown into an equally powerful
> Arch-Nemesis (yes, there's more than one nemesis to accessibility)
> named Security. And boy howdy are the two ever at odds.
>
> "But I'll argue that Accessibility is actually more important than
Security because dialing Accessibility to zero means you have no product
at all, whereas dialing Security to zero can still get you a reasonably
successful product such as the Playstation Network."

And this is where the "security experts" jump up, rending their
garments and tearing their hair out: "how can I spread such an
irresponsible message!". And sure, I can get labeled an anti-security
blogger.

No, I'm not saying that, and neither is Steve Yegge. I'm saying there
are things more important than security, that absolute security is a
goal we should not pursue if we want to live sanely and let things work.
Security can become a dangerous mirage, as Bruce Schneier reminds us in
[this video](/en/blog/lnds/2011/10/22/the-security-mirage/).

Nor should we accept the blackmail of the "haxors" who make a business
of publishing vulnerabilities unethically, and on top of that demand
they be fixed within whatever deadlines they see fit. Business decisions
aren't made that way; development and maintenance teams have to
subordinate their work plans to the needs and priorities of the
business, not to the pace of hysterical script kiddies who have found an
XSS on the site.

That doesn't relieve developers of responsibility: they have to improve
their practices and adopt methodologies that ensure the quality and
security of their products. There is a tension in organizations between
Accessibility and Security, but it must always be resolved in favor of
the former. Security is a support area. It has to deal with risks, and
manage them.

A good developer has to care about security, and has to know how to
approach it. There are processes that let you build in secure
development from the start; adopting them isn't easy, but it can be
done. On the other hand, there are times when we know about a risk and
decide to live with it, because we figure the probability of it being
exploited is lower than the cost of fixing it, or because there simply
is no budget to correct it. The important thing is to warn, to put it on
record, although of course later, when disaster strikes, nobody
remembers the warning, but that's the world we have to live in. We would
love to have the resources and the money to build a totally robust
system free of vulnerabilities, but it's not always possible, and often
"you plow with the oxen you have".

These are things that certain characters don't understand, people who
have never had to deal with the complex politics of an organization,
people with a lot of free time who squander their talents "haxoring"
and publishing their "discoveries" with the sole purpose of sowing
FUD[^4] and inflating their little egos, pure vanity. If someone were
publishing the list of houses without alarms in my gated community, he
would surely be reported and prosecuted for committing a crime, but if
someone does the same thing by exposing the security of the customers of
a bank's website, or of a public service's website, social media
glorifies him. That is not ethical; it is almost as dangerous as
committing the crime itself. It's what Jaron Lanier calls an ideology of
violation, and that is the text I leave you with below, for us to
reflect on:

## **An ideology of violation**

by Jaron Lanier (\*)

> Those who disagree with the ideology of violation are said to
> subscribe to a fallacious idea known as "security through obscurity."
> \[...\] obscurity is the only fundamental form of security that
> exists \[...\]

In the full passage Lanier goes through several cases: the voluntary code of conduct proposed after the [harassment of Kathy Sierra](http://www.simdalom.com/blog/2007/04/04/blogs-codigo-de-conducta-caso-kathy-sierra/)[^1], the researchers who spent two years finding a way to use mobile phone technology to hack pacemakers and switch them off remotely[^2], and the team that picked one of the hardest locks ever made and compared their triumph to Turing breaking the Enigma machine[^3].

[^1]: The Kathy Sierra case still stirs controversy and dispute in the [Wikipedia entry](http://en.wikipedia.org/wiki/Talk:Kathy_Sierra#NPOV-tag) about it.

[^2]: Yes, there are academics who devote themselves to thinking up ingenious ways of killing people with mobile phones, and many people in the security community think doing this is fine: <http://www.schneier.com/blog/archives/2008/03/hacking_medical_1.html>

[^3]: The Enigma machine was used by the Nazis to transmit encrypted messages during the Second World War. Alan Turing and a team at Bletchley Park managed to break the code this device generated, probably shortening the war.

[^4]: FUD stands for Fear, Uncertainty and Doubt.

(\*) Taken from his book [You Are Not A Gadget: A Manifesto](http://amzn.to/y0R19L)

**SPRAYING TROLL REPELLENT: PSST, PSSST\...**
