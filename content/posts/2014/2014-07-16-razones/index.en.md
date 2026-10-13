---
title: "Reasons"
authors: [admin]
subtitle: "The origin of Prosa"
date: 2014-07-16T08:25:11-03:00
slug: "reasons-for-prosa"
draft: false
tags: ['wordpress', 'blog', 'prosa']
image:
  placement: 3
---

After programming, writing is one of the things I like doing most. For
eight years I've been publishing the blog
"[La Naturaleza Del Software](https://www.lnds.net/)". 
Lately the writing frequency on that blog had been dropping, which may
seem quite natural, since writing blogs isn't a very popular activity
these days. There are great "bloggers" whose blogs are practically
abandoned.

But the truth is that my case wasn't only about lack of motivation, or
shortage of time. The problem had to do with the tool for publishing
posts.

In its beginnings La Naturaleza Del Software was published using
[Movable Type](https://movabletype.org/) (MT), a fairly popular tool in
2005. The bad thing about that tool is that as the number of articles
grew, publishing became tedious, because of the way MT works: it
generates the html pages over and over to leave them as static files. 

The solution was to look for something more dynamic, and at the time
[WordPress](https://wordpress.org/) seemed to me the best tool available.
The truth is that I still recommend WordPress to anyone who wants to
manage content, from someone setting up an intranet for their company to
someone who wants to launch a new media outlet.
[WordPress](https://wordpress.org/) is a formidable content editor,
scalable, and quite extensible. That's what makes it the most popular.

But what I didn't like about WordPress was the administrative effort and
the many security bugs that kept showing up. In fact I had a fairly
serious security incident that affected one of my blogs. 

In 2013 I decided to switch to something more radical; the choice was
[Octopress](http://octopress.org/). If you're a programmer, you're going
to like [Octopress](http://octopress.org/), because it's designed around
the classic programming cycle: write code - test - fix - publish. It's
interesting, but when you value your time, as I do, you'll see that all
this becomes very cumbersome. After all, what I want is to write, not to
program! While they are similar activities, when I write I just want to
concentrate on typing the words. With
[Octopress](http://octopress.org/) I had to concentrate on a special
syntax, [MarkDown](http://es.wikipedia.org/wiki/Markdown), on
"compiling" my text to be able to review it, and then on performing the
act of "deploying" my site again. And while that's something I'm used to
as a programmer, as a writer I found it a nuisance.

Consider that I also maintain three blogs. And if I was writing little on
LNDS, on the others the dust piled up on the posts is already several
centimeters thick.

So I decided to try [Ghost](https://ghost.org/), and in March 2014 I
installed that platform to publish my blog. Ghost is the new kid, the
promise of simplifying blog publishing. I expected to find something like
Medium (which I'll talk about in a moment). Ghost is a great tool, with
an interesting story, but the promise of simplifying my publishing
workflow vanished fast.

The problem with [Ghost](https://ghost.org/), one it shares with
[Octopress](http://octopress.org/), is a very serious bug:
[MarkDown](http://es.wikipedia.org/wiki/Markdown). 

The hipsters are surely going to be annoyed with me, but after using
[MarkDown](http://es.wikipedia.org/wiki/Markdown), and even publishing a
book using this syntax, I consider it a waste of time. I understand the
ideas and the concept of
[MarkDown](http://es.wikipedia.org/wiki/Markdown) in other contexts, the
same way I understand the value of
[LaTeX](http://es.wikipedia.org/wiki/LaTeX), but I don't find that they
add anything for me as a blog author.

In 2013 I discovered [Medium](https://medium.com/), and [experimented
with what it offers](https://medium.com/@lnds). I wrote some articles,
even adapted some old posts to that platform, and I liked it quite a bit.
What I liked most was the simplicity. On [Medium](http://medium.com/) you
concentrate on the writing, the text; the interface is so minimalist that
it doesn't interrupt you, it's only there when you need it.

Seeing what they managed to do at [Medium](http://medium.com/), I thought
that was the kind of tool I'd like to write my posts with. I thought I
could get there with [Ghost](https://ghost.org/), but no, and seeing the
speed at which that team is developing the tool I decided I couldn't
wait.

![](https://d2dspjyoh5c79p.cloudfront.net/6729b6e5-0d4c-11e4-8f0b-43e69d919221-437b93b0)
 (Image by Betsy Weber, used under Creative Commons Attribution,
[source](https://www.flickr.com/photos/betsyweber/5056456666/in/photolist-8GPEpm-8GLvBk-8gfJBa-7RFbWk-7nMLFu-8GxUXm-9dyrJ6-bUmNEK-6MUipe-bxbLZS-ayE1cj-4MjX4G-8SMn4v-8Fwebc-8GPEvd-9aZXdT-ebgdiP-ct8567-bqAPYG-csTPvG-dbsb2f-5LAAqg-a83CsR-5GdXJK-69PYkV-8nFKzL-7EbFiv-6QWc7V-ayFuVa-3q5rBx-mBXu8-66omXz-cqp1eN-6ngZdy-cteFCC-ndU8Rp-h9kWAH-8FDxBW-7YPYLk-6qTsQD-ct96rC-iRgqCn-cyfWCj-6HifPs-8HdX3B-DGgAN-7EbFjt-gnU9uD-bn4Efe-6aTp8s))
    

What I did was write my own "Blog Server". 

The project started in May of this year. Soon I'll write about the
technical details of this tool. What I want to tell you now is that while
I was writing the code for this first release I got the ambition to do
something like Medium not just at the platform level. My idea is to
create a community of people who write in Spanish using this "Blog
Server", and that is the idea behind Prosa. 

Prosa will be the platform I publish my three blogs with from now on, but
it will also be a space to invite my friends to share their ideas. Prosa
is an idea at an embryonic stage. An idea I'll explore little by little.

How will Prosa operate? I'm not very clear on that yet. At least in the
short term I'll invite some friends to try it out. At some other point
I'll publish the source code. Whether it evolves beyond that remains to
be seen.

That's all I have to say for today; soon I'll publish more about the
project. I hope you enjoy it, as I have enjoyed building it.


(Header image: Cherry Blossoms at Night by Yuzuke Omesawa, CC
Attribution, [source](https://www.flickr.com/photos/umezy12/13581960595/in/photolist-mGc6Gp-3SP4K-4fWPPB-98nmD3-bq4Umt-jfnpAv-6ZRR3E-aZaA3c-gVMf1-h9jHUy-9828ct-4fWNtK-eLYruF-b2Dqma-bvEa1j-b2DqyK-b2Dqge-b2Dq8B-b2Dr2k-b2DqAz-b2DqoV-b2DrnB-b2Dqvr-b2Dr6e-b2Dqat-8GLw3R-fENGPA-4VNXsS-b2Drei-b2Dqqr-b2DqjF-b2Dri4-b2Dr9p-cF2oYu-cBDaD9-8HdYrc-6ZMZpB-vb8SN-aQbqCc-ddzXWy-b13VJB-8sdQFe-ctfHRj-ctfDcY-ctfyAC-ctfLx7-ctfKS1-ctfLmd-ctfC5C-ctfL17))

