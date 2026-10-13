---
comments: true
date: 2008-09-15 21:59:27
layout: post
slug: the-robustness-principle
title: The robustness principle
authors: [admin]
wordpress_id: 1306
categories:
- general
- internet
- the nature of software
tags:
- internet
- Postel's law
- Postel
- robustness principle
- RFC
- xml
---

In 1981 one of the most important documents of the internet was published, the famous RFC 793, which defines the TCP protocol, the main protocol of the internet and the basis of most of the protocols used on the net.

In this document Jon Postel writes what has come to be known as the Robustness Principle, or Postel's Law:

> TCP implementations will follow a general principle of robustness: be conservative in what you do, be liberal in what you accept from others.


Depending on your value system, you'll find Postel's advice to be a good thing, even advisable for other aspects of life, not just data transmission protocols.

![](300px-Jon_Postel.jpg)

This principle has been criticized, of course, because it apparently promotes a passive tolerance, or for being too liberal and eventually allowing insecure applications.

The truth is that it wasn't Postel's intention to be too permissive with protocols, or to say that validations weren't necessary. But the robustness principle has indeed been misinterpreted, and that has caused us many problems, mainly with application security.

But we shouldn't forget that the **robustness principle has its eye on the needs of end users**.

Nowadays this tends to be forgotten, and many developers, especially the most rigid ones (and especially the youngest), demand that standards be followed with no exceptions, even when that goes against the needs of users.

Consider the case of HTML. A real mess! There are hundreds of implementations of HTML, with thousands of bugs, patches and ad-hoc fixes embedded in the web and in internet browsers.

At some point the choice was made to establish XML-based standards as the definitive solution to the problem, and with that Postel's Law was broken.

XML is a strict protocol. In theory an invalid XML document must not be accepted. But there will be invalid documents; that is almost inevitable.

A classic example is what happens with the name "AT&T". According to the XML specification it must be written "AT&amp;T", but eventually someone will write "AT&T". The applications that put users' wishes first and accept XML documents written not quite so strictly (think of the various kinds of browsers available) will end up prevailing (because they are more robust applications).

XML asks us to break Postel's principle. XML demands that we be intolerant of what we receive. This can go against the needs of the user.

It's a problem that also shows up in protocols like SOAP, and in general in almost every interoperability recommendation based on rigid standards such as XML. "Postel's Law accepts no exceptions": when we go against this principle, the one who eventually pays is the user.

What do you think? Do you know of other situations where trying to break this principle hurts the user experience?
