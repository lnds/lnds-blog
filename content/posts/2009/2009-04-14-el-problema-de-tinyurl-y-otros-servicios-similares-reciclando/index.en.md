---
title: "The problem with tinyurl and similar services (recycled)"
authors: [admin]
date: 2010-07-31T08:25:11-03:00
slug: "the-problem-with-tinyurl-recycled"
tags: ['internet', 'urls', 'web']
draft: false
---
 
Funnily enough, not long ago on a mailing list I'm part of I asked
people to use TinyUrl, forgetting what I wrote a while back about the
problems with this service, a subject that [has resurfaced these days](http://adactio.com/journal/1566) and that could turn into a
serious security problem. Here it goes, recycled and with a few
improvements,
[my post from December 27, 2007](/en/blog/lnds/2007/12/27/the-problem-with-tinyurl-and-similar-services/):

**The problem with tinyurl and similar services**

This post was sitting in my drafts, and I've now finished it in response
to a question from [FT via twitter](http://twitter.com/Francotirador),

> If one day [TinyURL](http://www.tinyurl.com/) or
> [Dev.cl](http://www.dev.cl/) stop providing the service\... do all
> the short URLs they created die?

The short answer is Yes.

Incidentally, when I tried to shorten the url of this post, dev.cl gave
me back the url <http://dev.cl/>.

Now the fun answer:

Although short urls have several uses and advantages, they're even good
for [compressing
images](/en/blog/lnds/2007/12/27/wpeg-the-best-compression-algorithm/)
;) the truth is that there are several problems:

Jeff Atwood [sums up several of these
problems](http://www.codinghorror.com/blog/archives/000935.html):

-   If the service disappears, the urls are broken forever. Just as FT
    fears.
-   The other problem is quality of service. A service of this kind
    that works only sporadically (with \"outages\") may actually be an
    even worse situation.
-   You lose any clue about the content of the url, since they are all
    homogeneous and boiled down to a cryptic code. This is bad for the
    user experience of whoever is clicking the link (and for security),
    because the url gives you no hint about where you'll end up.
-   There are url redirection services that have been used in
    questionable ways, by spammers for example (that was the case with
    lnk.to).

Other problems that Atwood doesn't identify:

-   The redirection introduces latency.
-   A shortened url can be used for phishing.
-   It becomes a layer on top of DNS.
-   It's [a security
    hole](http://unweary.com/2009/04/the-security-implications-of-url-shortening-services.html);
    it can be used to inject an XSS, for example.
-   It's not a good idea to use this for things like ajax or web
    services.
-   If your firewall or reverse proxy blocks the service, that makes it
    unusable
-   The service may be full of junk, like urls that are no longer
    valid; having lost the clue, you don't find out until you click.
-   If a url fails, you don't know whether it was the shortening service
    that failed or the original url that has the problem.
-   Tinyurl doesn't handle some \"weird urls\" well, the ones with
    characters like the comma (\',\').

Despite all this, short urls are useful in a number of contexts, as
shown by their use on twitter, or for sending them in emails or SMS
messages.

Why doesn't Google provide this service?

That's a good question and, as Atwood says, it would probably make the
service more secure.\
Maybe they've analyzed the problem and don't see a business in it, or
they don't want to get tangled up with the spammer problem.

Although I suspect they don't want to put themselves in such an
uncomfortably hegemonic position.

One alternative would be to decentralize the service, a kind of P2P of
short urls, an idea I haven't explored but that could be interesting.

(What I have explored is the idea of eliminating DNS, but that will
have to wait for another post.)

Perhaps an interesting analysis would be to look at what happens with
these services and the principle that [cool urls don't
change](http://www.w3.org/Provider/Style/URI) (laid out by Tim Berners
Lee).

At first glance you'd think that by adding a level of indirection these
services can help preserve that principle, but if we look more closely,
they actually make the problem worse.\
Indeed, if the original url changes, you also have to propagate that
change to all the short urls on all the services of this kind.

Now, the problem of URL persistence is more complex still, and the
collapse of tinyurl-type services is just one class of the problems
associated with the [persistence of
URLs](http://www.w3.org/DesignIssues/PersistentDomains.html).

How would you implement a service like this?

Now, to wrap up, let me criticize Atwood's proposal to use hashing as
the mechanism for generating short URLs.

Although at first glance it looks good (an O(1) algorithm), it doesn't
seem like the most practical way to implement this service. The hashes
he shows produce strings much longer than the ones we see in these
services.

Better to go with an O(N log (N)) algorithm like the following:

1.  There is a table URL, indexed by ID and URL\_LARGA
2.  A url comes in and you look it up by URL\_LARGA, getting back ID or
    NULL.
3.  If you get NULL, a new row is inserted into the table and the short
    URL will be the site's root plus the ID expressed in base 64.

This lets us generate pretty short urls, and it's easy to implement.\
I don't think it's easy to find a hash function that generates shorter
strings than this algorithm does.

As an extra tip, instead of doing the redirection with PHP or Python, I
would go for writing an apache module in C, or in PERL. That would speed
up the service by at least an order of magnitude (if not more). Or maybe
by building my own web server. And finally, I would try to keep the
table in memory, or at least a cache of the most visited URLs.
:::

::: {.comments}

------------------------------------------------------------------------

Did you like it? Sponsor us on [Patreon](https://www.patreon.com/lnds)
[Become a Patron!](https://www.patreon.com/bePatron?u=6503283)
:::

::: {.comments}
### Comments

::: {#disqus_thread aria-live="polite"}
Please enable JavaScript to view the [comments powered by
Disqus.](https://disqus.com/?ref_noscript)
:::
:::
:::
:::

::: {.row}
::: {.col-sm-offset-1 .col-sm-10}
[La Naturaleza Del Software]{.small} [© Eduardo Diaz Cortes]{.small}

[Published using Prosa - release 0.3.9]{.small}
:::
:::
:::
:::
