---
comments: true
date: 2008-07-22 22:08:43
layout: post
slug: 'is-your-banks-web-address-really-your-banks-website'
title: Do you know whether your bank's web address is the address of your bank's website?
authors: [admin]
wordpress_id: 695
categories:
- security
tags:
- privacy
- security
- vulnerabilities
---

A novice user probably won't know how to answer this question, but if you're a more advanced user you'll tell me that you checked your browser's address bar, that you made sure not to follow a link you got by email, or that you took the precaution of typing the address your bank gave you, character by character, very carefully.

What's more! They gave you a little gadget, which they told you is synchronized with a supercalifragilistic mechanism that only one of your bank's servers can reach, and which guarantees that, should anyone manage to guess your password, the magic little number this device gives you keeps anyone else from getting into the bank's website pretending to be you.

You feel calm and sure that everything works, because on top of that your internet provider has promised it looks after your security, protecting you so viruses don't get in, blocking ports you won't need, and keeping out unsolicited emails that might try to fool you.

But I have to tell you that all of that is a false sense of security.

Because trying to clone a website like your bank's is something a computer thief will attempt.

You'll tell me they can't clone the bank's web address, because there are institutions that make sure the whole domain name system works, so that nobody takes over someone else's address.

Indeed, there is an enormous infrastructure built on a service called [DNS](http://es.wikipedia.org/wiki/DNS) that lets you reach the server associated with the address you typed into your browser, and those institutions do make sure addresses are handed to their rightful owners.

It's a complex service that works very well, at astonishing speed, and that lets the whole web be what it is.

But that machinery, so complex and wonderful, had (has) [a flaw in its original design](http://www.kriptopolis.org/fallo-critico-dns-obliga-parchear-internet), a bug so big that it has been handled in secret, and in a coordinated way, by major firms and internet providers all over the world, so that it gets fixed before some criminal makes use of this vulnerability.

Because this vulnerability would make it possible to fool your computer, your browser, and any other program that uses name-based addresses, masking a fraudulent server and redirecting traffic where it doesn't belong.

The consequences would be very serious, which is why this worldwide coordination took place.

But unfortunately, [at least in Chile](http://twitter.com/ryrys/statuses/863773077), and apparently in [Spain too](http://www.kriptopolis.org/fallo-dns-todo-sigue-igual), our internet providers still haven't fixed the problem, even though they've had the solution for weeks.

Something this urgent still hasn't been carried out as promptly as we would expect. We don't know the causes, but I think the reason for the delay doesn't matter: ISPs have an obligation to provide a secure service that protects us from potential problems like the ones described. Or at least, if what they themselves say is true, [that they take measures that violate net neutrality in order to protect us](http://blog.maz.cl/2008/06/el-silln-de-don-otto-y-la-neutralidad.html), then all the more reason to prove it by patching their vulnerable DNS servers.

Want to know whether your internet provider has bothered to fix its DNS servers? Visit this [address](http://www.doxpara.com/) and press the button that says Check My DNS. Let's hope our access providers get their act together soon, because we have [reasons to suspect that this vulnerability will soon start being abused](http://www.kriptopolis.org/filtrados-detalles-ataque-kaminsky-dns).
