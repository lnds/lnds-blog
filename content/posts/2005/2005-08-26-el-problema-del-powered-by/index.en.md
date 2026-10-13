---
title: "The \"powered by\" problem"
authors: [admin]
date: 2005-08-26T08:25:11-03:00
slug: "the-powered-by-problem"
tags: ["security"]
draft: false
---

It's a tradition among those of us who use open source products, for
example, to leave the typical logo with the phrase "powered by".

That's fine as an acknowledgment to the product's developers, but it's
also information a bad hacker can use to attack us.

The reason is obvious. If, say, my site reads powered by drupal, then
as a bad hacker all I have to do is look up Drupal's vulnerabilities.

On sites like a personal blog this may not matter, but if we're using
these tools for sites that provide services, and we want to secure
them, the advice is to remove the powered by.

If you care about the security of your site, you should give out as
little information as possible. If you decide to leave that information
there, then you need to make sure you stay up to date on the possible
security vulnerabilities of the product you use.
