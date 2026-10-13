---
title: "Secure programming"
authors: [admin]
date: 2005-09-04T08:50:11-03:00
slug: "secure-programming"
tags: ["security", "programming"]
math: false
draft: false
---

I'm reading a Microsoft ad in the [Communications of the ACM](http://www.acm.org/pubs/cacm/), August **2005** issue.

The ad goes more or less like this:

**Can you spot the security Hole**

This is the Source Code in DCOM that led the [Blaster Worm](http://en.wikipedia.org/wiki/Blaster_worm)

` HRESULT GetMachineName(WCHAR *pwszPath)  { WCHAR wszMachineName[N+1];  LPWSTR pwszServerName = wszMachineName;  while (*pwszPath != L'\\')  *pwszServerName++ = *pwszPath++; .... }`

The ad offers resources and information to academics who teach in
computer science departments, so that they bring security into their
courses.

Ironically, the original Blaster Worm contained the following message:

> billy gates why do you make this possible ? Stop making money and fix
> your software!!

I think it's good that Microsoft shows concern for security, and it
also has to be admitted that it has improved quite a bit on that
front.\
Could these ads be a reply to the message sent by the author of the
Blaster worm???

**buffer overflow**

But this kind of code isn't found only in Microsoft's code. Let's
remember that the first worm on the internet exploited a [buffer
overflow](http://en.wikipedia.org/wiki/Buffer_overflow). And that there
are still plenty of open source libraries out there with this problem.
The problem is not exclusive to Microsoft.

Unfortunately, security and quality control in construction are not
subjects that get specialized coverage at universities.

For those interested, I recommend the following book:
