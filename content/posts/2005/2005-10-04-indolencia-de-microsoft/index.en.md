---
comments: true
date: 2005-10-04 20:27:37
layout: post
slug: microsofts-indifference
title: Microsoft's indifference
authors: [admin]
wordpress_id: 2002
categories:
- security
tags:
- Microsoft
- vulnerabilities
---

That seems to be the way Microsoft deals with its security problems.

Since June there has been a known vulnerability, discovered by Secunia, that allows spoofing and phishing using JavaScript.
This outline sums up the vulnerability.

1. The user visits a malicious site
2. The user follows a trusted link
3. Meanwhile, a malicious website opens a popup window in front of the browser, posing as a window from the trusted site.

[![](https://www.lnds.net/blog/wp-content/uploads/2011/07/dialog_origin.jpg)](https://www.lnds.net/blog/wp-content/uploads/2011/07/dialog_origin.jpg)

This can be used for [phishing](https://es.wikipedia.org/wiki/Phishing).

(See the [proof of concept at Secunia.com](https://web.archive.org/web/20090426080911/http://secunia.com/multiple_browsers_dialog_origin_vulnerability_test/))

While Firefox fixed the problem 1 month later in version 1.0.5, Microsoft recommends that its users simply not browse sites they don't trust! [https://www.microsoft.com/technet/security/advisory/902333.mspx](https://www.microsoft.com/technet/security/advisory/902333.mspx)

That's Microsoft's way of solving its problems???
The bad part is that for Secunia this counts as a fix.
