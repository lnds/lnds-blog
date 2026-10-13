---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Developers, developers, developers..."
slug: "developers-developers-developers"
authors: [admin]
subtitle: ""
summary: ""
tags: ['software development', 'software engineering', software, developers, code, 'software entropy']
categories: []
date: 2022-01-05T19:30:44-03:00
lastmod: 2022-01-05T19:30:44-03:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---


Even though it became a meme, and we all laughed at him, it looks like Ballmer was right. We need more and more developers. More and more, and that need doesn't look like it will drop for many years, despite the heroic claims of the Low Code and No Code fans, and the [recent developments in automatic programming using AI](https://copilot.github.com).

Let's do an exercise. Suppose a developer writes, on average, between 20 and 100 useful lines of code a day, depending on the programming language, of course. The truth is they read and edit (add and delete) probably more lines than that. But let's set an average value, say 60 lines of useful code, and then penalize that average down to 40, because not every day is that “productive”.

Suppose we get that poor developer to concentrate and work on the code for about 4 hours (a high number, because it's hard to [get in the zone](/en/blog/lnds/2010/08/09/flow-state/), and on top of that to avoid being interrupted). That would give us about 10 lines per hour.

Over a year that comes to about 9,800 lines (the math is 4x5=20 hours a week editing code, 20x49=980 hours => 9,800 lines).

Now, according to my own observations and personal experience, the codebase of a mid-sized company or startup can reach between 2 and 4 million lines of code. Larger companies run into the tens of millions of lines of code. Let's take the lower figure: 2 million lines of code corresponds to about two hundred developer-years.

I came up with a rule to estimate the need for developers: take the number of lines of code in your codebase and divide it by ten thousand. The resulting number is an estimate of the **minimum** number of developers you need to maintain it and add new features.

In other words, for every million lines of code already written, you need a hundred developers, minimum, to maintain and improve your code.

Another way to look at it: if you don't have that many developers, then your code is already obsolete, useless, and your business is in danger.

I'm going to let that idea sink in for a while.

Think about it, because it's important. And if you don't believe me that it's important to consider the value of developers, maybe you'll believe others: <https://plata.news/blog/el-computin-que-tiene-el-2/>

Well, that's a rule I've arrived at by observing and analyzing various codebases over some 5 years, since I started researching these topics. Can I conclusively prove this rule? No, not yet. But I've slipped some of the groundwork into earlier articles on this blog. And I hope to keep writing about it down the road.

But if you're creating new technology, and you also want to grow your business, it's clear you need more developers. If you're building P-type or E-type systems (see [^1]), that codebase will grow fast, driven by the demands of your business, and the application itself will generate additional needs, that is, more hands to maintain it and add more code.

Unless you start applying copy/paste on a grand scale.

You can survive with fewer developers. You can get by with a few dozen, for several years, but only by dint of copy/paste, a growing pile of duplicated code, and a decline in its quality and maintainability.

I've seen that, and it's not pretty. It's like sitting on a time bomb, or building right on top of a geological fault.

What's more, I've watched organizations invest more in hiring testers than developers. What's happening there is that foul-smelling gases are seeping out through the cracks of those geological faults in the code, but instead of taking the right measures, that is, hiring more developers and reducing [the cruft](https://martinfowler.com/bliki/TechnicalDebt.html) in the code, they're waiting for the whole thing to blow up.

At [Cornershop](/en/blog/lnds/2021/07/11/when-all-this-was-fields/) we are several hundred developers, at Uber a few thousand, and at Amazon or Google it's tens of thousands of developers maintaining the applications. With amazing processes and tools for managing code, which allow those developers to make thousands of changes to the software every day. You can read about this, because it's public information.

I recommend reading how Google manages its gigantic monorepo in this paper: [Why Google Stores Billions of Lines of Code in a Single Repository](https://dl.acm.org/doi/pdf/10.1145/2854146)

Or this paper from Uber: [Keeping master green at scale](https://eng.uber.com/research/keeping-master-green-at-scale/) (there's also a video here: <https://vimeo.com/358691692>)

Software [keeps eating the world](/en/blog/lnds/2016/08/30/every-company-is-a-software-company/), and it has surely already eaten your business.

Now tell me, how many developers keep your business running, and why so few?

[^1]: [Let's talk about software entropy](/en/blog/lnds/2021/05/08/lets-talk-about-software-entropy/)

