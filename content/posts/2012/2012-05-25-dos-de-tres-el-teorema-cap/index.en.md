---
title: "Two out of three: the CAP theorem"
authors: [admin]
date: 2012-05-25T08:25:11-03:00
slug: "two-out-of-three-the-cap-theorem"
draft: false
tags: ['CAP theorem', 'consistency', 'availability', 'architecture', 'distributed systems']
image:
  placement: 3
---


My friend ISA [wants her potatoes](https://idelabar.blogspot.com/2012/04/quiero-mis-papitas-d.html).
She is talking about a problem she had trying to buy items for an online
game with her credit card. It is a common problem. What
we all expect is that if the money has been charged to our
credit card, the product we bought shows up, all the more so when
it is a virtual item (after all, it is just moving bytes from
one record to another, right?).

If there are funds in the account and the payment server has given its
authorization, we expect our goods to reach us, or the
services we paid for to be available. Or when we pay a bill
online, we expect everything to be credited and to have no trouble
later.

In [her article](https://idelabar.blogspot.com/2012/04/quiero-mis-papitas-d.html)
Isabel mentions the properties that transactional databases must
satisfy, the famous acronym ACID: Atomicity,
Consistency, Isolation and Durability.
These properties are desirable, and a transactional database
engine is expected to honor them. Isabel says that \"some
of these characteristics are provided by the database, and others are partly
the responsibility of whoever develops the transaction.\"

The problem is that implementing systems that honor these properties
in distributed systems is very hard! What's more, there is an important
result telling us that doing this in distributed systems requires
certain trade-offs. That result is known as the 
[CAP theorem](https://en.wikipedia.org/wiki/CAP_Theorem), and I suspect not many
of you know it, and if you work in systems architecture
you should.

# The CAP theorem 

On July 19, 2000, Professor [Eric Brewer](https://www.cs.berkeley.edu/~brewer/) 
put forward a conjecture
based on his work building Inktomi.

![](Inktomi.png)

Inktomi was the great promise of its day. It was thought to be the
search engine that would end up displacing AltaVista. Well, that was before
Google, and before the dot-com bubble burst. What matters is that
Brewer learned a lot building that service, and at an
ACM symposium he put forward the following conjecture:

> It is impossible for a distributed system to simultaneously guarantee
> the following three characteristics:

> -   Consistency: all nodes see the same data at the
>     same time.
>
> -   Availability: a guarantee that every
>     request will receive a response saying whether the request
>     succeeded or failed.
>
> -   Partition Tolerance: the system
>     keeps operating despite the arbitrary loss of messages or
>     the failure of part of the system.

Two years later Seth Gilbert and Nancy Lynch of MIT published
[a proof](https://lpd.epfl.ch/sgilbert/pubs/BrewersConjecture-SigAct.pdf)
of Brewer's conjecture, establishing it as a theorem,
probably one of the most important theorems in computer
science, and one of great importance to all of us who work
in software architecture.

The CAP theorem says you can guarantee two out of three of these
properties. In other words, the CAP theorem explains why Isabel had to
wait for her potatoes longer than she expected, or
may simply never have received them. It explains why sometimes, even though we try
to design our system as robustly as possible, there is something
we are going to lose.

If you are trying to design your architecture to have full
consistency, full availability and total fault tolerance,
you are wasting your time. It is impossible. At some point something
is going to break, a transaction will be lost, or a record will be left
inconsistent. You cannot have all three properties guaranteed. You must
choose two.

Since the proof of the theorem is very technical, I am going to explain it in
simple terms using 
[a nice example](https://ksat.me/a-plain-english-introduction-to-cap-theorem/)
written by Kaushik Sathupadi.

### **Chapter 1: a new venture**

One night, when your wife thanks you for remembering your wedding
anniversary, a curious idea comes to mind. Lots of
people have trouble remembering things, and yet you
have no such problem, because you are very good at remembering. So you decide
to create your own startup: Recuerdos Inc.

You write your ad for the newspaper:

> *Recuerdos Inc: Never forget, without having to remember! Ever
> felt bad about forgetting too much? Don't worry, just
> call us, dial 555-RECUERDE and tell us what you need to remember
> later. Can't remember your boss's birthday? Call
> 555-RECUERDE and we will remind you. Forget no more, you don't need to remember
> anything, we remember for you. (Cost: CLP 290, VAT included)*
>
> And you get a phone line, buy some notebooks and start
> taking calls. A conversation with your service would go more or less like this:

> -   Customer: Hello, could you store my
>     neighbor's birthday?
>
> -   You: Sure, when is it?
>
> -   Customer: May 4
>
> -   You: (you write the date on the customer's page in a notebook)
>     Got it! Call us whenever you need to know your
>     neighbor's birthday
>
> -   Customer: Thanks!
>
> -   You: You're welcome. This call costs CLP 290 per minute,
>     thanks for calling.

### **Chapter 2: you start to scale**

You get some venture capital, and you start getting hundreds of
calls a day. And with that the problems start: the calls
begin to queue up, and people hang up after waiting
so long. To top it off, one day you get sick and lose a whole day of
service. So you decide to scale. You ask your wife to help out and
join the service. You buy a switchboard, set up an extension
for your wife and double your capacity (and double your
revenue!)

### **Chapter 3: your service is bad**

It is Wednesday and you get a call from your best customer, Juan:

> -   Juan: Hello
>
> -   You: Good afternoon, sir, thank you for calling Recuerdos Inc. How
>     may we help you?
>
> -   Juan: Can you tell me when my trip to Puerto Montt is?
>
> -   You: One second, please (you look in your notebook, and there is no
>     flight written on Juan's page!) Sir, I think there is a mistake,
>     you haven't told us anything about a trip to Puerto Montt.
>
> -   Juan: What! I called you yesterday! (and he hangs up)

You talk to your wife and realize she took Juan's call yesterday,
but the flight is written in her notebook, not in yours.
*\*Your distributed system is not consistent! \**A customer can be
served by your wife, and when he calls again he can be routed to
another person, and Recuerdos Inc. will not have a consistent answer for
the customer!

### **Chapter 4: you fix the consistency problem**

You talk to your wife and tell her:

> -   Whenever we get a call from a customer, before completing
>     the call we will let the other one know.
>
> -   At that moment we will both write down the reminder.
>
> -   That way we will both have a copy of the memories and we will not have
>     to go read the other's notebook.

This means that whenever the notebook has to be updated we will not be able
to serve anyone. That is not a big problem, because most of the
time the requests are queries that involve looking something up in the
notebooks rather than writing. Besides, what matters is that we cannot give
wrong answers, so this is a cost we have to accept.

But your wife points out that you have not considered the case where one of
you does not show up for work. At that point it is not possible to handle
an update conversation, because the other one is not available
to copy it into their notebook. We are facing an
**availability** problem: if the other one is not there, the call
cannot be completed!

## **Chapter 5: a clever solution**

How do you keep the notebooks consistent and
available when one of you is absent? To solve this you
come up with a brilliant idea, and you tell your partner:


> -   When a person calls to store a memory, that is,
>     when something needs to be written in the notebooks, what we will do
>     is this: if the other person is available, we will let them know
>     right then and both will update their notes.
>
> -   If the other person is not available, we will send them an
>     email with the update.
>
> -   The next day, when the person who was absent comes back, the
>     first thing they must do is read their email and update their notebook
>     before they can start answering the phone.

Great! Now Recuerdos Inc. has a **consistent** and
**highly available** service.

### **Chapter 6: your wife is mad at you**

> But one day you argue with your wife, and you are so upset that you decide
> to go out and show up for work. What if she is so mad
> at you that she decides not to update you on anything and does not send the
> agreed emails? Your brilliant idea fails, because even though it is a
> clever idea that guarantees consistency and high availability, it is not
> **partition tolerant**. You can decide to be fault tolerant
> by choosing not to take calls until you have
> made up with your wife, but if you do that then you **sacrifice
> availability** for that whole time!
>
> 

### **Conclusion**

> So the CAP theorem tells us that when you design a system you
> cannot have all three characteristics: Consistency, Availability and
> Partition Tolerance. You can only choose two:

> -   Consistency: your customers, once they have updated
>     information, will always get the most up-to-date information when
>     they call again. No matter how quickly they call back.
>
> -   Availability: Recuerdos Inc will always be available for
>     calls as long as either of you (you or your wife)
>     shows up for work.
>
> -   Partition Tolerance: Recuerdos Inc will always operate, even if
>     communication between you and your wife has been lost

## Eventual consistency 

What would happen if you hired an assistant in charge of updating
the notebooks every time there is a change? This character can
update the notebooks in the \"background\", while they are not in use. His
job is to keep the notes consistent, with a certain
delay, of course. The database is not consistent right away, but this way
you do not sacrifice availability, in exchange for a certain degree of
temporary inconsistency.

That is how many NoSQL databases work, for example. The
important thing is that the assistant does his job quickly. If
he does it, say, every 5 minutes, you reduce the
odds of running into inconsistencies.

So we have to accept that we cannot control every
situation and that there are times when our architectures are going to fail. We can
design them to maximize these three properties, but eventually
we will have to sacrifice something. The question is what. Availability for
consistency, or consistency for availability? That is the
challenge, and finding mitigation measures is our job as
architects. But do not forget that there will be times when we will simply
have to give the money back, or apologize. That much is certain:
we have a theorem that proves it. :)
