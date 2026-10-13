---
title: "Is it a good idea to publish the electoral roll?"
authors: [admin]
date: 2012-08-21T12:25:11-03:00
slug: "is-publishing-the-electoral-roll-a-good-idea"
tags: ["privacy", "politics", "Chile"]
draft: false
math: false
---

It turns out the Chilean electoral roll has been published, in compliance with
article 32 of [Law 18,556](http://www.leychile.cl/Navegar?idNorma=29951&buscar=18556) (the
Constitutional Organic Law on the Electoral Registration System and the
Electoral Service).

Since the latest amendments to this law mean that every Chilean
over 18 must be automatically registered in
the electoral rolls, the roll will immediately contain the
RUT (Chile's national ID number), full name, address and sex of all of them. Article
32 says:

> "The Electoral Roll, in its audited form, and the Audited List
of Disqualified Persons\
must be published by the Electoral Service on its website
seventy days\
before the date on which an election or plebiscite is to be held."

So from now on this data is in the public domain.
Can it be used for anything? This is where I get lost. I'm not a
lawyer, so I can't answer that. All I know is [Law
19,628](http://www.leychile.cl/Navegar?idNorma=141599&buscar=19628) (on
the Protection of Personal Data), which says in article four:

> "No authorization is required for the processing of personal\
data that comes from or is collected from sources\
accessible to the public, when it is of an economic,\
financial, banking or commercial nature, is\
contained in lists relating to a category of\
persons that merely indicate details such\
as the individual's membership in that group, their\
profession or activity, their educational degrees, address\
or date of birth, or is necessary for\
direct-response commercial communications or the\
direct marketing or sale of goods or services."

My interpretation (I'm not a lawyer, I insist) is that if the electoral
roll is public, there is no problem with using this information for
other purposes, such as sending personalized mail to
voters' homes.

That can be good, or bad. Suppose a mother wants to find
the father of her children to collect child support, or a group
wants to publicly shame some politician: with this
database available, locating those people could get easier.

But on the side of misuse, we can use the electoral roll
for social engineering, or hacking as some media call it.
We have now made available the pieces needed to start putting together the crime
of identity theft. There are many scenarios you can build
from the data in this database (how many people use the last digits
of their street address as the PIN of their bank card, for example?).

A person's contact information is very valuable, and there are many
legitimate scenarios in which you need people's personal
data to deliver an important communication that
may affect them. A bank needs to know where to find its customers,
but it is not good for an identity thief to have access to that same
information, which is why banks and other institutions must
safeguard the use of their customers' personal data. These
institutions are forbidden, by law, to publish their customers' contact
details or to sell that information; they can only use it if they
obtained it from the user themselves, or from a public source, and for the
purposes of the business they have with that customer.

If you have a company that delivers advertising to
homes, for example, you can create a database, but you must get it
directly from the people, with their consent, or from some public
source, and the law requires that if the customer asks, you must
delete their personal data from your records. That is reasonable, because
it strikes a balance between running a business and protecting the
privacy of the information. But the principle is to put a certain amount of
obstacles in the way of obtaining this information, to protect
privacy.

In this context several models have been proposed for handling
personal information properly. Unfortunately, in
our country we adopted an instrument that is the nightmare of every
expert in computer privacy: the RUT.

The RUT should be something the individual uses
personally and privately; it should not be disclosed the way it is today. Why?
Because it provides a very simple link to all the
information available about the individual in different sources.

Think of the recent 
[hack of Wired journalist Mat Honan](http://www.wired.com/gadgetlab/2012/08/apple-amazon-mat-honan-hacking/):

> "In the space of one hour, my entire digital life was destroyed.
> First my Google account was taken over, then deleted. Next my Twitter
> account was compromised, and used as a platform to broadcast racist
> and homophobic messages. And worst of all, my AppleID account was
> broken into, and my hackers used it to remotely erase all of the data
> on my iPhone, iPad, and MacBook."

In Mat Honan's case the hacker was able to destroy this journalist's
entire digital life, to the point of erasing the data on his computer, iPad
and cell phone! How did he do it? By establishing the links between
 the pieces of information needed to get the passwords to all his cloud
services.

Well, in Chile doing that is much simpler, because we have the
perfect link: the RUT.

The RUT is used as a key in applications; every database
of people created in Chile uses the RUT as its primary key. It is
used to log into home banking applications and manage
our checking accounts; for every online procedure, for every
offline procedure. The RUT is the perfect way for a hacker
to link every little piece of information we leave behind in
cyberspace (a few years ago, 
[on a visit to Chile](http://www.emol.com/noticias/nacional/2003/08/26/121353/uso-de-rut-en-transacciones-bancarias-por-internet-aumenta-peligro-de-robos.html),
the famous hacker [Kevin Mitnick](http://es.wikipedia.org/wiki/Kevin_Mitnick) gave a
demonstration of this before an astonished audience).

The RUT can be used for data mining to extract our buying
behavior, our habits and of course our credit
behavior. That is why it is such a valuable item, one we should
guard carefully instead of handing it out everywhere, but in Chile
this fundamental principle of computer security is not understood.

But [let's not fool ourselves either](/en/blog/lnds/2012/06/30/lies/). The truth is
that for a long time it has been possible to get a lot of information about any
Chilean with their RUT; the publication by SERVEL, the Electoral Service, just makes things
even easier. That can be used for good things, but for many more
bad ones.

Let's recall the identity management model put forward by experts
like [Kim Cameron](http://www.identityblog.com/stories/2004/12/09/thelaws.html) or
[Pamela Dingle](http://eternallyoptimistic.com/2008/08/27/laws-of-identity-pamela-style/),
the famous 7 laws of identity, which in their simplified version
say:

> 1.  Don't share users' information behind their backs.

1.  Don't ask users for more information than necessary.

2.  Don't expose users' information unnecessarily.

3.  Don't allow the information to be logically linked by
    third parties, unless the user authorizes it.

4.  The user must be able to choose whether the data they have
    stored in one system can be connected with their data in
    another system.

5.  If the simplest way to use a tool is not the most secure one,
    then the tool is badly built.

6.  A simple, consistent and understandable user experience
    is desirable, even if different technologies and identity
    providers are used behind the scenes.

The publication of the Chilean electoral roll data violates
laws 1, 3, 4, 5 and 6. And although having it available is very useful for
those who use (we use) this kind of information, you have to admit that from
the standpoint of how identity is handled in computing, this
publication is a disaster.
