---
title: "Version control systems"
authors: [admin]
date: 2010-07-05T08:25:11-03:00
slug: "version-control-systems"
tags: ['version control', 'software development', 'software']
draft: false
---

[![Subversion project visualization
image.](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Subversion_project_visualization.svg/300px-Subversion_project_visualization.svg.png)](http://commons.wikipedia.org/wiki/File:Subversion_project_visualization.svg)

Image via [Wikipedia](https://commons.wikipedia.org/wiki/File:Subversion_project_visualization.svg)

Did you ever use
[SCCS](http://en.wikipedia.org/wiki/Source_Code_Control_System)? No?
How about [RCS](http://en.wikipedia.org/wiki/Revision_Control_System)?
Not that either? Bah, you are all very young. But you do use a
[version control system](http://es.wikipedia.org/wiki/Control_de_versiones), right?

These days it is rare for a developer not to use a version control
system like [CVS](http://www.nongnu.org/cvs) or
[Subversion](http://en.wikipedia.org/wiki/Subversion_%28software%29)
(also known as SVN).

What I can't figure out is why everybody doesn't use one!

You see, lots of people write a Word file,
*"boring*report*for*the*auditor.doc"*, and start working on it.
If they are smart, and experienced, before making a change
they make a copy and start working on
*"boring*report*for*the*auditor-version-2.doc"*, and then on
"*boring*report*for*the*auditor-version-3.doc"* and on it goes, and
the folder fills up with files like *"auditor*report*4.doc",
auditor-report-final.doc",
"report-for-the-auditor-reviewed-by-my-boss.doc",
"report-oops-i-got-the-deadlines-wrong.doc"* and so on. The working
folder is a disaster, if they use a folder at all, and don't have it all
scattered across the desktop (LNDS readers don't do that, of
course).

We programmers have this problem, but multiplied by a thousand,
because users are full of creative ideas and the software keeps
changing all the time, and sometimes you have to go back. Or you have
code you deploy for a customer, and then a branch gets created
with ad hoc modifications for one customer. The scenarios are many.

That is why we have had source code version management systems since
1972. The first ones were those I mentioned at the start of this
article. Those early systems were geared toward the individual work of
each programmer.

The problem came when a team of programmers worked on the same
project. That gave rise to centralized systems, like CVS, SourceSafe
(from Microsoft), Perforce, and the most famous of all, Subversion.

I am not going to explain here what a [version control
system](http://es.wikipedia.org/wiki/Control_de_versiones) is. I will
only suggest, if you are not a programmer, that you look into these
things and use them in your work. It is a good strategy (for
web designers this is a very useful tool).

What I do want to get into is distributed version control systems,
which are, in my opinion ([and I am not alone in
this](http://joelonsoftware.com/items/2010/03/17.html)), a great advance
in our field. But we will leave that for the next post.
