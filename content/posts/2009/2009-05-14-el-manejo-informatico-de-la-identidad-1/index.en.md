---
comments: true
date: 2009-05-14 13:59:45
layout: post
slug: managing-identity-in-software
title: Managing identity in software
authors: [admin]
wordpress_id: 270
categories:
- digital identity
- Internet
- the nature of software
- paradigms
- security
- technology
---

Identity management on the net is a topic I've covered in this space before, but I think it is necessary and urgent to come back to it, given certain current events. That's why I'm starting a series of articles on the problem of identity management, and I'm kicking it off with this article [recycled from July 2007](/en/blog/lnds/2007/07/25/identity-metasystems/).


"The Internet was built without a way to know who and what you are connecting to."

Since the ability to identify people is not built into the Internet, everyone who offers a service on the Internet has to solve the identity management problem somehow. As the web grows, the need to identify becomes more pressing, and we keep running into different kinds of identity verification, each created and adapted for different needs. Millions of people have learned to accept that whatever a website asks of them is the "normal way" to conduct business online. They have been trained to enter their names, secret passwords and personally identifying information into any input form that shows up on screen.

![identidaddigital.jpg](identidaddigital.jpg)

As a result, the current state of digital identity on the Internet is a patchwork of ad hoc solutions that gives people a different user experience on every website. All of this makes the system as a whole fragile and keeps the promise of e-commerce from being fulfilled (see the [laws of identity](/en/blog/lnds/2007/04/04/the-laws-of-identity-2/))

## An identity metasystem

Since universal adoption of a single digital identity system or technology is unlikely, a widely used solution for the Internet requires a different approach. One that makes it possible to connect existing and future identity systems into what we'll call an **identity metasystem**. This metasystem, or system of systems, strengthens the identity systems that make it up. It enables interoperability between them, and makes it possible to create a consistent user interface for all of them. (see: [Microsoft's Vision for an Identity Metasystem)](http://www.identityblog.com/stories/2005/10/06/IdentityMetasystem.pdf).

Adopting these metasystems can make the Internet a safer place and boost e-commerce, combat phishing and solve other problems tied to identity management.

In the offline world, people carry different forms of identification in their wallets: their national ID card, driver's license, credit cards, loyalty or club membership cards, frequent flyer cards. People control which card to use and how much information to reveal in each situation.

![](ID_Theft.jpg)

In the same way, the identity metasystem makes it easier for users to stay safe and control access to their resources on the Internet. It lets users choose among their different portfolios of digital identities and use them at the Internet services of their choice where they are accepted.

The metasystem allows identities provided by one identity technology or system to be used in environments built on different technologies, as long as there is an intermediary that understands both technologies and is trusted to do the necessary translations.

## Identities depend on context

A person's identities in the offline world range from the significant, like a birth certificate, passport or driver's license, to the trivial, like business cards or a book club card. People use their different forms of identification in the different contexts where they are accepted. Identities can be used out of context, but they don't produce the expected result. For example, trying to use a book club card to cross a border is clearly out of context. On the other hand, using a bank card at an ATM, or a .Net Passport on a Hotmail account, is clearly in its proper context.

Often, however, the distinction is not so clear. For example, in Chile the RUT, a number issued by the government, is used as the identifier for logging in to banking websites.  
This brings a series of problems, above all because it opens the door to several kinds of crime.  
In that sense, using the RUT on our banking websites is a bad idea.

On the other hand, although Microsoft's Passport can be used on any site, and is even simple to use if you're on the .Net platform, its use on other sites is normally disabled, because it is considered out of context.

In fact, Microsoft researchers, studying the experience of Passport and other similar systems that burst onto the scene in the early years of the web, together with other industry experts, established a set of principles that should guide all identity management systems. These principles were compiled into the so-called Laws of Identity, laid out by [Kim Cameron](http://www.networkcomputing.com/713/713f2CAMERON.html).

## The laws of identity

The laws of identity are the foundations for identity metasystems.  
The 7 laws of identity are:

1. **User Control and Consent**. Technical identity systems must only reveal information identifying a user with the user's consent.  
2. **Minimal Disclosure for a Constrained Use**. An identity system must reveal the least information possible.  
3. **Justifiable Parties**. Digital identity systems must be designed so the disclosure of identifying information is limited to parties having a necessary and justifiable place in a given identity relationship.  
4. **Directed Identity**. A universal identity system must support both _"omni-directional" identifiers_ for use by public entities and _"unidirectional" identifiers_ for use by private entities, thus facilitating discovery while preventing unnecessary release of correlation handles.  
5. **Pluralism of Operators and Technologies**. A universal identity system must channel and enable the inter-working of multiple identity technologies run by multiple identity providers.  
6. **Human Integration**. The universal identity metasystem must define the human user to be a component of the distributed system integrated through unambiguous human-machine communication mechanisms offering protection against identity attacks.  
7. **Consistent Experience Across Contexts**. The unifying identity metasystem must guarantee its users a simple, consistent experience while enabling separation of contexts through multiple operators and technologies.

## What does all this mean?

When identity is taken into the digital world, it seems to be in more danger than in the real world. People distrust services that ask for identity information. A lot of business never happens because people are afraid of losing access to their bank accounts or credit cards.  
The rise of phishing and other fraud mechanisms makes many people distrust identification systems on the net.

In reality, many of the problems are solved by recognizing that online identity is no different from identity in the offline world. It's a matter of realizing that the same mechanisms that operate in the offline world are the ones that must be made possible on the Internet.

Just as in the real world, where you only hand over your driver's license to the authorities, and in a controlled and consented way, in the digital world you should hand over your digital identity with the right credentials in the appropriate context, but in a controlled and consented way.

That is why, when we hand our data to an institution, we don't want that data passed on without our consent, and we don't want it used in unauthorized ways either.

  
These principles have been laid out clearly by leading researchers, and there is a lot of work along these lines to make sure the laws of identity are understood not only by users, but by the implementers of systems that handle sensitive information.   
  
For those of us who build systems that must handle personal data, the work of [Kim Cameron and his team at Microsoft](http://www.identityblog.com/?page_id=352) is an excellent guide for not getting lost when it comes to protecting the identity of our users and customers.
