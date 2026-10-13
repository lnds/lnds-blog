---
comments: true
date: 2009-07-12 20:19:13
layout: post
slug: brute-force
title: Brute force
authors: [admin]
wordpress_id: 252
categories:
- security
tags:
- privacy
- security
---

You have to [be pretty dense](http://www.codinghorror.com/blog/archives/000631.html) to attempt a brute force attack on SHA-256. When Leo Prieto tries to play down the scope of [this Friday's break-in at the Betazeta sites](http://leo.prie.to/2009/07/incidente-de-seguridad/), he is really just sinking his feet deeper into the mud, and [handing more arguments to those who justify this attack](http://www.antronio.com/comunidad/f7/fayerwayer-hackeado-betazeta-owen-503370/index10.html#post15579254).

Before going on, I want to say that I condemn these defacements and attacks on websites, like what happened to [BetaZeta](http://www.betazeta.com/) this weekend. /* Fayerwayer, for that matter, has [been pretty sarcastic when this happens to others](http://www.fayerwayer.com/2008/08/alerta-se-filtran-datos-personales-de-los-alumnos-de-la-usach/), but let's leave that controversy there. */

It is a given that there are criminals out there, so we have to take measures to protect ourselves and look after the security of our homes. Betazeta has grown to the point where it has many important sites exposed, but it also handles the information of many users, and that means it has to be more professional about managing its security.

Using a super hash algorithm is not enough, because only the stupid will attempt a [brute force](http://en.wikipedia.org/wiki/Brute_force_attack) attack on your passwords. The first thing a hacker will do is a dictionary attack.

When a developer says his passwords are safe because he stores them using an advanced hash, he is really solving the problem with brute force, and only idiots use brute force to solve security problems.

More important than the encryption algorithm is having a security scheme or security policy for password management:

    1. Require passwords to be changed frequently.
    2. Do not allow common words, or words found in a dictionary.
    3. Require a minimum number of characters for the password (10 or more).
    4. Require a combination of letters, numbers and symbols in passwords.
    5. Never store passwords in plain text, or with weak cryptographic algorithms.
    6. Do not store just the hash of the password; use a mechanism that adds some entropy to the stored password (salt, or something similar).

Most important of all: do not try to invent your own security scheme, because you will probably get it wrong.
