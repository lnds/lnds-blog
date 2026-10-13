---
title: "The problem with tinyurl and similar services"
authors: [admin]
date: 2007-12-27T08:25:11-03:00
slug: "the-problem-with-tinyurl-and-similar-services"
tags: ['internet', 'urls', 'web']
draft: false
---
This post was sitting in my drafts, and I've now finished it as an answer to a
question from [FT via twitter](http://twitter.com/Francotirador),

> If someday [TinyURL](http://www.tinyurl.com/) or
> [Dev.cl](http://www.dev.cl/) stop providing their service\... do
> all the short URLs ever created die?

The short answer is Yes.

Incidentally, when I tried to shorten the url of this post, dev.cl
gave me back the url <http://dev.cl/>.

Now the fun answer:

Although short urls have several uses and advantages, and even
work for [compressing images](/en/blog/lnds/2007/12/27/wpeg-the-best-compression-algorithm/)
:wink: the truth is there are several problems:

Jeff Atwood [sums up several of these problems](http://www.codinghorror.com/blog/archives/000935.html):

-   If the service disappears, the urls are broken forever. Just
    as FT fears.
-   The other problem is quality of service. A
    service of this kind that works only sporadically (with
    "blackouts") can actually be an even worse situation.
-   You lose any hint about the content of the url, since they are
    all homogeneous and boiled down to a cryptic code. This
    is bad for the user experience of whoever is clicking on
    the link.
-   There are url redirection services that have been used in
    questionable ways, by spammers for example (that was the case with lnk.to).

Other problems that Atwood doesn't identify are:

-   Redirection introduces latency.
-   It's not a good idea to use this for things like ajax or web services.
-   If your firewall or reverse proxy blocks the service, it becomes
    unusable.
-   The service can be full of junk, such as urls that are no longer
    valid; having lost the hint, you don't find out until you click.
-   If a url fails you don't know whether it was the shortening service that
    failed or the original url that has problems.
-   Tinyurl doesn't handle some "strange urls" well, those with characters like
    the comma (',').

Despite all this, short urls are useful in a number of contexts, as
shown by their use on twitter, or for sending them in emails or in
SMS messages.

Why doesn't Google provide this service?

That's a good question, and as Atwood says, it would probably
make the service more dependable.\
Maybe they have analyzed the problem and don't see a business in this
service, or don't want the hassle of dealing with spammers.

Though I suspect they don't want to put themselves in such an
uncomfortably hegemonic position.

An alternative would be to decentralize the service, a kind of P2P of
short urls, an idea I haven't explored but which could be interesting.

(What I have explored is the idea of eliminating DNS, but that will have to wait
for another post.)

Perhaps an interesting analysis would be to see how these services square with
the principle that [cool urls don't
change](http://www.w3.org/Provider/Style/URI).

At first glance you'd think that by adding a level of indirection
these services can help preserve that principle, but if we
look more closely, they actually make the problem worse.\
Indeed, if the initial url changes, you also have to propagate that
change to all the short urls in all the services of this kind.

Now, the problem of URL persistence is more complex
still, and the collapse of tinyurl-style services is just one class of the
problems associated with the [persistence of
URLs](http://www.w3.org/DesignIssues/PersistentDomains.html).

## **How would you implement a service like this?**

Now, to finish, let me criticize Atwood's proposal of using a
hash as the mechanism for generating short URLs.

Although at first sight it looks good (an O(1) algorithm), it doesn't seem like the
most practical way to implement this service. The hashes he shows
produce strings much longer than the ones we see in these
services.

Better to go with an O(N log (N)) algorithm like the following:

1.  There is a URL table, indexed by ID and URL_LARGA
2.  A url comes in and is looked up by URL_LARGA, yielding ID or NULL.
3.  If NULL comes back, a new row is inserted in the table and the short
    URL will be the site root plus the ID expressed in base 64.

This lets us generate fairly short urls, and it's easy to
implement.\
I don't think it's easy to find a hash function that generates shorter
strings than the ones this algorithm produces.

As an extra tip, instead of doing the redirection in PHP or
Python, I would write an apache module in C, or in PERL. That
would speed up the service by at least an order of magnitude (if not
more). Or perhaps I'd write my own web server. And finally, I would try to
keep the table in memory, or at least a cache of the most
visited URLs.
