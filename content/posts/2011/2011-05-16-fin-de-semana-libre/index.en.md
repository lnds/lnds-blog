---
title: "A free weekend"
authors: [admin]
date: 2011-05-16T08:25:11-03:00
slug: "a-free-weekend"
draft: false
tags: ['linux', 'free software']
image:
  placement: 3
---

This weekend I've been trying out the latest versions of two popular Linux
distributions, Fedora 15 Beta and Ubuntu 11.04. I was handed a Fedora 15
USB stick at the RedHat Summit, so I gave it a chance this weekend.

Installing these operating systems is dead simple. A while ago I had to
restore my notebook to its factory configuration with Windows 7 and the
experience was unpleasant: four hours later it was still installing drivers
and patches, and the truth is the system still isn't running the way I once
managed to have it.

Ubuntu and Fedora, on the other hand, installed in a few minutes, and the
updates are very simple. You have to admit they have several advantages
here.

Getting all 3 systems onto my PC wasn't easy, because the whole point is
for Grub to show you the 3 boot options, and the two distros are not very
friendly about that. I finally pulled it off, and I'll take the chance to
leave you this recipe for those who want to set out on this adventure:

**How to set up a PC for triple boot: Windows 7, Fedora 15 and
Ubuntu 11.04:**

1.  Install Windows 7, and if you already have it installed, leave free
    space and partitions to install the other systems. This is easy to do:
    in the Control Panel go to Administrative Tools, then to Create and
    format hard disk partitions, and free up space.

2.  Install Fedora on one of the partitions. Grub will recognize Windows.

3.  Install Ubuntu on another of the partitions. When you do this Grub will
    stop recognizing Fedora, but don't worry, this happens because Fedora
    gets installed on an LVM volume. One solution is not to use LVM, but
    that means going into more advanced installation options.

4.  To fix the Grub problem we have to install LVM support on Ubuntu. This
    is done with the following command: **sudo
    aptitude install lvm2** (You will probably have to install
    aptitude)

5.  Reboot Ubuntu.

6.  Now that Ubuntu recognizes the lvm2 partitions, run this
    command: **sudo update-grub**

7.  With this, grub recognizes Fedora on its partition.

The clue came from this
[post](http://www.taringa.net/posts/linux/6075755/Hacer-Que-El-Grub-de-Ubuntu-Reconozca-Particion-de-Fedora.html)
by ercherramon on Taringa.

This has let me evaluate both systems. For now I'm sticking with Fedora 15
and Gnome Shell. It's a more usable interface than Unity. I couldn't stand
Unity's little application bar, and Gnome Shell seems better thought out to
me. What I like about Unity is the integration of the menu bar at the top;
it saves space.

There is one thing I don't quite like, and where I find Windows is better:
typography and use of space. For some reason, in Windows the fonts and the
space seem to be put to better use than in Unity or Gnome Shell, and I've
noticed the same in earlier versions of Linux desktops. That's something
they need to improve.

Anyway, it's been a fun weekend. I've been able to hack with Open Shift,
and other dynamic languages, and I hope to tell you something about these
adventures in code later on.
