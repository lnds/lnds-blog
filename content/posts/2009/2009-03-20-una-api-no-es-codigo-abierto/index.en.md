---
title: "An API is not open source"
authors: [admin]
date: 2009-03-20T08:25:11-03:00
slug: "an-api-is-not-open-source"
tags: ["api", "design"]
draft: false
image:
  placement: 3
---
In a [note on Micronauta](http://blog.canal.cl/2009/03/y-dale-con-que-va-morir-el-diario.htm)
I read this claim: "the total triumph of open source, a trend in which
the release of APIs we are seeing these days is a fundamental link."
That sentence summarizes a [text in
English](http://xark.typepad.com/my_weblog/2009/03/news-futures-a-whats-next-overview.html)
that says:

> **Open Source wins**. Open Source solutions and platforms will push
> proprietary systems to the brink simply because of the rate at which
> they adapt to change and innovation. Pay attention to the Big Media
> attempt to monetize this Open Source principle through the
> proliferation of news APIs, but don't expect it to succeed unless
> these APIs give developers and end-users more freedom.

What are we talking about here?

There are several confusions in these statements.

First, APIs are ancient. There is nothing innovative about the concept,
and the fact that journalists have only recently discovered them doesn't
make them innovative.

Second, APIs were born precisely to hide the code, not to open it up!

The phrase "open source will win" is pretty, and it may even come to
pass, but that has nothing to do with the proliferation of APIs.

That, as [Les
Luthiers](http://www.youtube.com/watch?v=LWmQXz361dw) would say, is
reasoning outside the bowl.

APIs are abstraction mechanisms, in which we publish an interface that
lets us operate a system whose implementation is none of our concern.

That's why we can distribute a library, or a system, without having to
publish its source code. Publishing its public interface, an API, is
enough.

A famous case is the Windows API. Programmers used the Windows API to
build applications without needing the Windows source code.

But publishing an API is not open source, and has nothing to do with it.
