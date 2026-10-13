---
comments: true
date: 2007-12-22 13:03:07
layout: post
slug: how-do-i-explain-this
title: Let's see... how do I explain this?
authors: [admin]
wordpress_id: 385
---

No, if [you use a 32-bit operating system you can't use more than 4 GiB of RAM](http://www.kriptopolis.org/mas-ram-no-gracias).

Period.

With 32 bits you can only reach 2 to the 32nd possible addresses. There are mechanisms proposed for accessing addresses above 4 GiB, but they have their problems. (When the world was young and we used the 286, there was a little trick for using memory by segments, but that really was a headache, something similar to what [PAE](http://www.microsoft.com/whdc/system/platform/server/PAE/pae_os.mspx) does).  
In any case, this is "virtual access" to more than 4GiB, achieved [with 4 additional bits of indirection](http://multingles.net/docs/jmt/4gbmem.htm); at any given moment, the CPU only accesses 4GiB.

Either way, PAE mode creates plenty of inconveniences, so it's not a real solution to the problem.

Other systems support PAE, but I insist, you are always reaching the extra memory indirectly. It's better to go with a 64-bit system, because it will give you fewer headaches and won't degrade performance.

And this is not a [Windows limitation](http://blogs.msdn.com/dcook/archive/2007/03/25/who-ate-my-memory.aspx). You won't be able to do it with (32-bit) Linux either, no matter what the Taliban tell you.

If you want to use more than 4GiB of RAM you need a 64-bit processor and a 64-bit operating system.

I recommend reading this [Kriptópolis article](http://www.kriptopolis.org/comprar-mas-ram) on the subject (oh! and Bill Gates [never said that 640 Kb of RAM was enough](http://www.kriptopolis.org/comprar-mas-ram))
