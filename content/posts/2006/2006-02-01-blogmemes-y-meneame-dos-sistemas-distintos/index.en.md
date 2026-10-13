---
title: "Blogmemes and meneame, two different systems"
authors: [admin]
date: 2006-02-01T08:25:11-03:00
slug: "blogmemes-and-meneame-two-different-systems"
tags: ["blogmemes", "meneame", "blogosphere"]
draft: false
---

A new release of [akarru](http://web.archive.org/web/20080426225126/http://sourceforge.net/projects/akarru/) went out today.\
Lots of bugs fixed.

However, anyone who
visits [blogmemes](http://web.archive.org/web/20080426225126/http://www.blogmemes.com/)
will see that we have new features that are not in this release of
akarrú. The thing is, the new features have to do with
FeedBurner, and they are tightly tied to blogmemes data. We're going to
make that support more generic and fold it in later.

# A bit of Blogmemes history {#unpocodehistoriadeblogmemes}

You can read [the history of Meneame](http://web.archive.org/web/20080426225126/http://mnm.uib.es/gallir/posts/category/meneame/page/3/)
on Ricardo Galli's blog, and it's really interesting, because he has
documented his process for us.\
It's interesting to me because I didn't know Ricardo, and I didn't know about his
project while he was coding it.

The interesting part is that blogmemes published its [first post](http://web.archive.org/web/20080426225126/http://www.blogmemes.com/comment.php?meme_id=1)
on 12/07/2005 at 09:49 EST (US Eastern time, where the
server is), and Meneame published its [first
story](http://web.archive.org/web/20080426225126/http://meneame.net/story.php?id=1)
at more or less the same time.

Some have said that we started later or [that we arrived late](http://web.archive.org/web/20080426225126/http://www.cyberlatam.com/news/2006/01/blogmemes-otro-mas-y-sumando.html),
when the truth is they could say we're twins. In fact, the first
mention of Blogmemes [on Ñblog](http://web.archive.org/web/20080426225126/http://utilidades.bitacoras.com/archivos/2006/01/08/blog-memes-otro-clon-de-digg-en-espanol)
was on January 8, a month after we launched.

## Comparing the engines

It has to be said that meneame started with its own code, and we used
DiggClone, which we left behind, but which unfortunately caused a
string of problems because we decided (wrongly, in
retrospect) to keep its data model. That has meant
a series of patches and some pretty ugly things to keep
performance reasonable. In that sense, meneame is a better engine than
akarrú, since it performs better thanks to better data
modeling.

However, I think that from the graphic design point of view, the use
of Smarty gives akarrú more flexibility, since changing the templates
is easy, and it will be even easier once we improve the configuration
mechanism. This lets you separate presentation from code, something
I don't see being as easy with meneame. In fact, when I set up the [Portuguese
version of blogmemes](http://web.archive.org/web/20080426225126/http://www.blogmemes.com/portugues) the
installation was simple, and the translation was done by [Jorge de Sá
Peliteiro](http://web.archive.org/web/20080426225126/http://www.blogger.com/profile/1497567),
a user who knows nothing about computing, and who only changed the text
in the conf files and in a few templates (some translations are still
missing, but that's been for [reasons beyond my
control](http://web.archive.org/web/20080426225126/http://www.lnds.net/2006/01/accidente.html)).

## Blogmemes and the blogosphere 

There have been [interesting mentions of blogmemes](http://web.archive.org/web/20080426225126/http://www.technorati.com/search/www.blogmemes.com)
in the blogosphere, and I've read a lot about the phenomenon of the digg
clones.

But the one who has become an expert on the subject
is [bonhamled](http://web.archive.org/web/20080426225126/http://www.blogmemes.com/profile.php?user_name=bonhamled),
who from his blog [Recuerdos del día de
mañana](http://web.archive.org/web/20080426225126/http://www.blogmemes.com/Recuerdos%20del%20d%EDa%20de%20ma%F1ana)
has followed the phenomenon and contributed interesting findings.

## Divergence

But blogmemes, which started out emulating digg, will begin to evolve in a
quite different direction.\
We'll stand on the shoulders of giants to start doing interesting
things, and one of the first results is the concept of
Circulation. Thanks to FeedBurner we can explore what happens to the
stories published on blogmemes. How they circulate through the blogosphere, and
how that translates into visits to the sites of blogmemes'
correspondents.

Blogmemes will become a tool for exploring the blogosphere. The
core of blogmemes will stay the same, but we'll innovate in other
directions thanks to the many APIs available for exploring the
blogosphere.

## Self-promotion, spam and other weeds {#autobombospamyotrasyerbas}

Philosophically I'm a lover of absolute freedom; to me it is the
highest value guiding all of human ethics. On blogmemes
we'll trust the [wisdom of the
community](http://web.archive.org/web/20080426225126/http://www.lnds.net/2006/01/una_entrevista_con_el_fundador_de_diggco.html),
even if it costs us dearly.

On blogmemes there's no restriction on publishing, and nobody votes
against a story either. You're not required to give a url to publish;
a title and the text are enough. In that sense blogmemes is like one big
community blog, with the difference that users vote for the
entries they like.

Note that voting is positive, as in a democracy: you vote for
your favorite, but you don't vote against the entries you don't like.
You don't report the posts that are
garbage, or self-promotion, or whatever other label, either (informers annoy me). That isn't necessary,
and it's a behavior that doesn't exist in democracies. You only see it
when supervised democracies, dictatorships or police states
are set up, where citizens act as snitches.

Since I don't like snitches, there's no mechanism for reporting
these supposed problems on blogmemes. Blogmemes has a democratic
model. Today many criticize democracy, and hold up as examples the
election of Evo Morales, or of Hamas. But that's what democracy is about.
Letting the people decide, even if we don't like who gets elected.

I think that if someone wants to promote himself, let him. In fact I've
set up a [category for those who want to
self-promote](http://web.archive.org/web/20080426225126/http://www.blogmemes.com/show_cat.php?cat_id=47).

Newton teaches us that every action generates a reaction of equal
intensity but in the opposite direction. If we put up barriers to self-promotion,
the crowd will find a way to game the system.\
Personally I agree with
the [criticism](http://web.archive.org/web/20080426225126/http://almadormida.blogspot.com/2006/01/consideraciones-sobre-el-uso-de.html)
of being forced to vote on meneame, mostly
because being forced to do anything is a drag.

On blogmemes there is no karma, but we have a mechanism that ranks
users by influence and popularity. Influence has to do with
how a person votes, and how they participate, with comments. Popularity
has to do with how people vote on a post, that is, how it is
judged by one's peers.

But having high popularity or influence doesn't give you more power
over everyone else. It just makes you stand out, and I want to highlight those who
make blogmemes an interesting site to read and
visit.

With the addition of circulation, we'll be able to fine-tune this
ranking further, because we'll factor in how each story is perceived outside
the site itself.

I don't think it's necessary to add mechanisms to filter stories or
people; the system should regulate itself. I think that by
adding mechanisms like a story classifier, mandatory
voting, and karma, you get the opposite effect. It would be interesting to know
what would happen if meneame removed all the restrictions. Would it reach an
equilibrium?

I think so. The system will find its equilibrium point.

Maybe I trust people too much. It must be [because I'm
stupid](http://web.archive.org/web/20080426225126/http://mnm.uib.es/gallir/posts/2006/01/28/610/)
:wink:
