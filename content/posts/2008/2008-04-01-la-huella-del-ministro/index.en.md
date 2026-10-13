---
comments: true
date: 2008-04-01 21:00:43
layout: post
slug: the-ministers-fingerprint
title: The minister's fingerprint
authors: [admin]
wordpress_id: 65
---

Although I no longer work in biometrics, I would like to comment on [this political hack](http://www.theregister.co.uk/2008/03/30/german_interior_minister_fingerprint_appropriated/) that took place in Germany.

It goes more or less like this: the [Computer Chaos Club](http://www.ccc.de/), the famous German hackers' club (about whom it would be a good idea to write something one of these days), published in its [magazine](http://ds.ccc.de/) a plastic film with the fingerprint pattern of the German interior minister. With it you can build a rubber fingerprint and stand in for the minister in any biometric system that verifies his fingerprint. What's more, the complete procedure is described on [this CCC page](http://www.ccc.de/biometrie/fingerabdruck_kopieren?language=en), where they explain how to make fake fingerprints from the trace left on a glass (what is technically called a latent print).

![hacking_magazine-big.jpg](hacking-magazine-big.jpg)

The truth is that making "rubber fingerprints" is relatively easy, and quite fun actually ;). But that does not prove that biometrics is insecure, or useless, as these demonstrations try to make us believe.

Because biometrics is really a means of verifying identity that has to be applied in certain contexts and under the right conditions.

I am going to quote [Bruce Schneier](http://www.schneier.com/), who, even though he does not like biometrics, is [very clear about the reach of this technology](http://www.schneier.com/crypto-gram-9808.html#biometrics):

> The moral is that biometrics work great only if the verifier can verify two things: one, that the biometric came from the person at the time of verification, and two, that the biometric matches the master biometric on file. If the system can't do that, it can't work. **Biometrics are unique identifiers, but they are not secrets.** (Repeat that sentence until it sinks in.)

The truth is that there are well-studied models for building secure biometric applications, and they make this hack nothing more than a striking political act, with zero effectiveness in practice.

Unfortunately, there are many self-proclaimed biometrics experts who do not know this, and they fill the market with bad implementations that can be attacked with these tricks.

Biometrics is not insecure, and an expert in the field knows that fingerprints are not secret, and knows how to build a security model that takes that fact into account.
