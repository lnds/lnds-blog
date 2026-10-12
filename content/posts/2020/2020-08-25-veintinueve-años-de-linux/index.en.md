---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Twenty-nine years of Linux"
slug: "twenty-nine-years-of-linux"
authors: [admin]
subtitle: ""
summary: ""
tags: [linux, 'open source']
categories: []
date: 2020-08-25T09:17:18-04:00
lastmod: 2020-08-25T09:17:18-04:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "Tux, the Linux mascot"
  focal_point: ""
  preview_only: false
  placement: 3

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

Linux turns twenty-nine today.

Strictly speaking there are two Linux celebrations. The one on August 25 marks Linus Torvalds's original announcement on the comp.os.minix newsgroup:

    Hello everybody out there using minix –
    I’m doing a (free) operating system (just a hobby, won’t be big and professional like gnu) for 386(486) AT clones. This has been brewing since april, and is starting to get ready. I’d like any feedback on things people like/dislike in minix, as my OS resembles it somewhat (same physical layout of the file-system (due to practical reasons) among other things).
    I’ve currently ported bash(1.08) and gcc(1.40), and things seem to work. This implies that I’ll get something practical within a few months, and I’d like to know what features most people would want. Any suggestions are welcome, but I won’t promise I’ll implement them 🙂
    Linus
    PS. Yes – it’s free of any minix code, and it has a multi-threaded fs. It is NOT portable (uses 386 task switching etc), and it probably never will support anything other than AT-harddisks, as that’s all I have :-(.

The second celebration is October 5, when he made the first public release of the code.

Either way, how time flies!

I remember [those were my first years on the job](https://lnds.net/blog/lnds/2019/03/17/el-fin-de-la-agilidad/), but I was still attending my last years of university, and still in touch with several friends at the DCC, the Computer Science Department of the Universidad de Chile. It was someone there (probably Willy) who handed me a box (or several?) of floppy disks so I could install a Linux distribution. It was Slackware, and probably late 1993 or early 1994.

{{<figure caption="Tux with a pipe, the original Slackware mascot" src="Slackware-mascot.jpg">}}

I installed it on a PC at home, and I don't quite remember whether I managed to run X-Windows at the time, but I was happy, because I had [Unix](/en/blog/lnds/2020/03/29/selective-enthusiasm/) on my computer[^1].

Today Linux is almost everywhere. If you use Android, or even if you're just reading this post: the server hosting this blog's content management system runs on Linux. Your TV most likely has some version of Linux.

Since you started reading this post, surely more than a hundred Linux devices have been switched on.

Linux is not a complete operating system; it's the kernel of an operating system, the core that holds it up. That's why you have operating systems like Android, where the rest of the components were built by Google. In the desktop world there are various distributions, or distros, that include Linux as the kernel but also include another set of tools and software developed by GNU: those are the GNU/Linux distros.

But where Linux sees the most use, after mobile devices, is on servers, and these days in containers in particular.

[Alpine Linux](https://www.alpinelinux.org) is one of the most popular distros today in the container world. The original idea was to develop a distribution that took up very little space and very few resources. It all started from a project called LEAF (Linux Embedded Appliance Framework Project), with the idea of having a Linux distribution that fit on a single floppy (something that would have been very useful in 1994).
But that trait makes it very practical for use in containers, where we want to take up as little space as possible.

Linux will always be impressive. It is the fruit of collaboration. Starting from the idea of a young Finn, it has become one of the essential pieces holding up today's technological world.

Happy birthday, Linux!

I'll leave you with a video that shows how Linux is built. It's from 2012, so you can extrapolate how some of the numbers mentioned must have changed:

 {{<youtube "yVpbFMhOAwE" >}}

[^1]: Technically it's not Unix, but it's a fairly close operating system.
