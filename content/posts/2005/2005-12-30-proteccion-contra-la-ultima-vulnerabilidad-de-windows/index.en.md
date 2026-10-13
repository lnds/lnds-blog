---
comments: true
date: 2005-12-30 10:47:19
layout: post
slug: protection-against-the-latest-windows-vulnerability
title: Protection against the latest Windows vulnerability
authors: [admin]
wordpress_id: 2034
categories:
- security
tags:
- Microsoft
- vulnerabilities
- Windows
---

Some people say the best protection against the many vulnerabilities in Windows is not to use Windows.
That's like this old joke:

Patient: Doctor, it hurts when I raise my arms.
Doctor: Then don't raise your arms.

Since a lot of people use Windows (most people, actually), I'm going to give you a recipe [against the latest Windows vulnerability](http://web.archive.org/web/20090426080921/http://www.blogmemes.com/akarru/comment.php?meme_id=302).

## The WMF file vulnerability

Files with the WMF extension are graphics files; in Office they're used a lot in the famous clip art. These files contain instructions, and it was reported that it's possible to execute code in privileged mode on machines running Windows 2003 and Windows XP. This would make it possible to install spyware, trojans, viruses, etc.

To disable the execution of WMF files until the latest Windows patch comes out, the suggestion is to do the following:

  1. Click the Start button

	
  2. Click Run...

	
  3. Enter the following command:"regsvr32 /u shimgvw.dll"

	
  4. Click OK when the confirmation window appears.


That's all.

Have a good time, in case I don't manage to write anything before the end of the year.
