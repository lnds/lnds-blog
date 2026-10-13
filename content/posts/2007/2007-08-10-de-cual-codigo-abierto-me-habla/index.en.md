---
comments: true
date: 2007-08-10 15:15:47
layout: post
slug: 'which-open-source-are-you-talking-about'
title: Which open source are you talking about?
authors: [admin]
wordpress_id: 1813
---

It turns out there are companies that treat free software as just one more marketing term, and have little interest in actually distributing their source code.

But the cases of BitTorrent and MySQL are surprising, given how representative these projects are.

It turns out BitTorrent has not published the source code of the protocol since it acquired uTorrent. In fact, when version 6 of BitTorrent was released, in July 2007, a note surprised developers:
"Sorry, source code for BitTorrent 6.0, like the source code for uTorrent, will not be released. However, versions 5 and earlier were of course released under open source licenses, and remain available for you to modify and redistribute subject to the terms of their respective licenses."

This is cause for concern, because one of the consequences is that other protocols diverging from the original BitTorrent may emerge. In fact, the definition of the BitTorrent standard is only available to developers who buy the SDK.

The reason given to justify closing BitTorrent's source code is that it makes the product more secure, because before, with the code available to anyone, closed clients were being built with spyware or trojans. Now, thanks to the kindness and selflessness of uTorrent, we are free of malware.

The other case is a bit different. MySQL has split its Enterprise version from the Community version since late 2006. The Enterprise version costs money, and the code is restricted to users who have paid for maintenance licenses.
This isn't bad; in fact it doesn't violate the GPL either, because these are "different products." But it is confusing at the very least, and it leaves a feeling of distrust. How good is the community version, when the company itself says the community version is experimental and therefore not recommended for production?

But things get more suspicious with the recent decision to withdraw public access to the source tarballs of all versions of MySQL Enterprise. If you want to recompile an Enterprise version of MySQL, you have to pay for the license.
This, of course, has not gone down well in the MySQL user community, and it is seen as one more step by MySQL AB away from open source.

So when we talk about companies that sell free software or open source products, we have to ask ourselves: which open source are they talking about?
Is the available code the same as that of the final or paid products? How deep are the differences? Is there a cost to migrating to the paid version or, worse, is there a cost if I want to stop using the paid version?

Those who believe this free software and open source business is pure altruism and selflessness had better wake up. Companies protect their interests, and many of them, when they are preparing to go public or are interested in attracting investors, drop the model easily.
Which is no surprise, if you consider that the cost of software is proportional to the developers' salaries, and that money has to come from somewhere, and unless there are large groups of corporations willing to donate the developers' salaries, there are few successful business models for FLOSS.
