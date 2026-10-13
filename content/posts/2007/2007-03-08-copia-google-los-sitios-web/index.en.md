---
comments: true
date: 2007-03-08 11:00:01
layout: post
slug: 'does-google-copy-websites'
title: Does Google copy websites?
authors: [admin]
wordpress_id: 1791
---

I kept thinking about the claim by [Carlos ](http://replay.web.archive.org/20071010142137/http://eldiabloenlosdetalles.net/)that Google [copies a website's content to get the relevant information that lets it create the "magic" of finding the relevant sites](http://replay.web.archive.org/20071010142137/http://eldiabloenlosdetalles.net/2007/03/07/microsoft-ataca-a-google-racias-a-google-news/).

Let's analyze whether the claim is true, because it's not clear to me that Google can do with books or videos the same thing it does with web pages. Regardless of the legal dispute, I'm going to explore this, because the consequences are interesting.


## Indexing is the business


Google is in the business of indexing content. Even though it now lets you publish and store content, for Google the core is still maintaining an index that makes it easier to search for information on the internet.

You may be wondering: what about Google's cache? It is indeed a copy, but a site's owner [can request that no copy of it be kept in the cache](http://replay.web.archive.org/20071010142137/http://www.google.com/help/features.html#cached). For example, search for the Bill and Melinda Gates Foundation, and you'll notice that that particular site is not in Google's cache.

In other words, Google respects a site owner's wish not to be "copied". There are also other mechanisms for regulating how Google's crawlers visit sites, such as robots.txt files, sitemaps, etc.








The cache exists so there is something to show in case the link is unavailable. This is a welcome service, certainly, but it isn't required for Google to work. What's more, the index can be built without having to store copies of the pages.

The crawling process generates a temporary copy of the page, but that copy could stay in volatile memory, like the RAM of one of Google's thousands of computers.


## The index table


Now I'm going to show you an interesting trick. Suppose we assign a number to each word and put it in a table. Part of that table would look more or less like this:


> de - 344
del - 345
hardware - 450
la - 510
las - 511
naturaleza - 789
software - 1568


Then the sequence (510,789,345,1568) represents the phrase "la naturaleza del software". Clearly, with tables like these it's possible to store any information compactly (in fact that's how several compression algorithms work, such as LZE, the basis of the ZIP format).

Google uses similar algorithms and formats to store and index the content of pages. With this it can not only extract information, it can go as far as reconstructing the complete content of the pages without having to copy them bit by bit.

In other words, Google is not a parasite that builds nothing, or that lives solely off copying content. Saying that is ignoring what this company actually does.

They crawl the web periodically to extract information, which is stored in their own formats, and with it they build a huge index that is the "distillate" of filtering the web pages. This "distillate", the index, is a new creation that didn't exist before, and it is a function of third-party content, but it is not a literal copy. On top of that they add value to the index by analyzing the interrelations among pages, the famous PageRank, the relevance calculation, etc.

Google's index is a new creation. The important thing is that this creation comes from processing easily accessible information.

Now Google is doing the same with more complex information, like books and videos. If it creates an index for all this information it will be a great contribution for everyone. The problem is a legal one, because while nobody can deny it access to a website, they can refuse to let it scan a book or digitize a video.

Personally I think it's stupid to deny access to information for the purpose of building an index. It's as if writers refused to let librarians catalog their books.

I'm sure no writer will refuse to have their books in the national library, so why would they refuse to be in Google's index?

Because they believe their work will be copied and distributed freely. That gives some of them an attack of anxiety, because they see their potential income shrinking.

That's why it needs to be explained well that Google doesn't copy the content and publish it on the web for everyone to download. Although it has the capability, it has no reason to do so, and if an author sees that their work may be unprotected they can ask Google not to publish the content. Which doesn't change the fact that Google has every right to build the index anyway.

As I see it, it's impossible to protect yourself from the indexing process, and it's not illegal or immoral either. On the contrary, it brings more benefits than anything else.


## Indexing is legal, but copying isn't?


As far as I know, creating an index of content is legal, yet copying copyrighted content can be illegal depending on the jurisdiction. In our country you have to ask the author's permission; in other countries copying for private use is legitimate.

The interesting part is that the index makes it possible to recreate the content.

If I had registered the phrase "la naturaleza del software", would I have rights over the sequence (510,789,345,1568)?

Suppose a third party creates the private table:


> de - 11
del - 12
hardware - 56
la - 68
las - 69
naturaleza - 79
software - 150


Do I have rights over the sequence (68,79,12,150)?

The answer is no, because the table is private, and if the third party doesn't make it public it doesn't affect me. If this third party provides services based on that table, it doesn't affect me either, and yet they can perfectly well reconstruct a phrase I hold the copyright on!

Oh my God!!

I think they're starting to convince me.....

:)
