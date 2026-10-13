---
comments: true
date: 2006-12-11 08:01:29
layout: post
slug: ways-to-cut-a-computers-boot-time
title: Ways to cut a computer's boot time
authors: [admin]
wordpress_id: 1387
---

> "Computers take too long to boot up, and it doesn't make sense to me. Mine takes around 30 seconds; it is double or triple that for some of my friends' computers that I have used. Why can't a computer turn on and off in an instant just like a TV? 99% of boots, my computer is doing the exact same thing. Then I get to Windows XP with maybe 50 to 75 megs of stuff in memory. My computer should be smart enough to just load that junk into memory and go with it. You could put this data right at the very start of the hard drive. Whenever you do something with the computer that actually changes what happens during boot, it could go through the real booting process and save the results. Doing this would also give you instant restarts. You just hit your restart button, the computer reloads the memory image, and you can be working again. Or am I wrong? Why haven't companies made it a priority to have 'instant on' desktops and laptops?"


Source: [Slashdot](http://replay.waybackmachine.org/20071029153224/http://ask.slashdot.org/askslashdot/06/12/11/0142212.shtml)


## Hibernation

The Slashdot reader doesn't know about hibernation (hibernating). The thing is, this feature isn't enabled by default in operating systems. But it has been around for a long time, and it works pretty well. Sure, sometimes the shutdown sequence takes a while, and that depends on how much RAM you have to preserve.

My notebook has 1 gigabyte of memory, which means I have to set aside one gigabyte of hard disk to store my machine's hibernation state. Considering that I also have another gigabyte reserved for swap, that's 2 gigabytes in use. Since my notebook is an "oldie", those 2 gigabytes are 5% of the available space (actually more, because gigabytes of RAM are not the same as gigabytes of disk).

One solution would be flash memory to store the memory state, but it would probably be expensive, and it would require redesigning personal computers.

The truth is that bootstrapping was never meant to be run every little while; the recommendation is not to shut computers down too often. In fact, I normally keep my notebook on for several days, and I take advantage of another feature called stand by.

Stand by keeps the computer in a low-power mode: the hard disks stop, and memory is kept in the same state. Of course, this requires power, unlike hibernation. If you have a desktop, or a laptop with a good battery, it's a reasonable mechanism.
