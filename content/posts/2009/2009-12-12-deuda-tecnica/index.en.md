---
title: "Technical debt"
authors: [admin]
date: 2009-12-12T08:25:11-03:00
slug: "technical-debt"
tags: ['technical debt']
draft: false
---
At work I'm facing a heavy workload because of the following factors:

1.  A long-running development project (almost 2 years).
2.  a mini project to rewrite a small system, under pressure to meet
    tight regulatory deadlines.
3.  changes to a core system that is the foundation of our operations.
4.  the total rewrite of a system.

Case 1 has its own team, an external one, and despite being big and very
important, it is under control. The second is an unexpected change,
imposed by an outside authority; we have to do it, no way around it.
Cases 3 and 4 are products of technical debt.

## **Technical debt**

We owe the concept of technical debt 
[to Ward Cunningham](http://martinfowler.com/bliki/TechnicalDebt.html) (\*)

> Technical Debt is a wonderful metaphor developed by Ward Cunningham to
> help us think about this problem. In this metaphor, doing things the
> quick and dirty way sets us up with a technical debt, which is similar
> to a financial debt. Like a financial debt, the technical debt incurs
> interest payments, which come in the form of the extra effort that we
> have to do in future development because of the quick and dirty design
> choice. We can choose to continue paying the interest, or we can pay
> down the principal by refactoring the quick and dirty design into the
> better design. Although it costs to pay down the principal, we gain by
> reduced interest payments in the future.
>
> The metaphor also explains why it may be sensible to do the quick and
> dirty approach. Just as a business incurs some debt to take advantage
> of a market opportunity developers may incur technical debt to hit an
> important deadline. The all too common problem is that development
> organizations let their debt get out of control and spend most of
> their future development effort paying crippling interest payments.

Pressure from customers and users to have a system running within the
time they demand is a common source of technical debt. Faced with it,
we often decide to go to market with a design that is unfinished, or
incomplete, or not fully tested. Those decisions have to be made, and
it's not that the decision is wrong, or bad (the perfect is the enemy of
the good). What matters is being aware of that debt, and conveying the
consequences to those affected. Because in the end, all debts get paid.

In this video Ward Cunningham explains the concept.

(\*) Ward Cunningham is the creator of the Wiki concept, among other
things.
