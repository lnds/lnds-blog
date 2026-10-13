---
title: "Numerical deceptions"
authors: [admin]
date: 2009-08-23T08:25:11-03:00
slug: "numerical-deceptions"
tags: ['innumeracy', 'mathematics', 'intuition']
draft: false
---

"Figures don't lie", "the numbers speak for themselves". How often
do we hear these expressions? The truth is that it isn't always so. Many
times we are being fooled with figures, because they are presented
in disguise, or with very poor analysis.

Seth Godin [puts it](https://sethgodin.typepad.com/seths_blog/2009/08/not-so-good-at-math.html)
in this arithmetic challenge:

> Let's say your goal is to reduce gasoline consumption. And let's say
> there are only two kinds of cars in the world. Half of them are
> Suburbans that get 10 miles to the gallon and half are
> [Priuses](https://en.wikipedia.org/wiki/Toyota_Prius) (hybrid cars)
> that get 50. If we assume that all the cars drive the same number
> of miles, which would be a better investment:
>
> -   Get new tires for all the Suburbans and increase their mileage
>     a bit to 13 miles per gallon.
> -   Replace all the Priuses and rewire them to get 100
>     miles per gallon (doubling their average!)
>
> Trick question aside, the answer is the first one. 
> (In fact, it's more than twice as good a move).\
> We're not wired for arithmetic. It confuses us, stresses us out and
> more often than not, is used to deceive.


Indeed, arithmetic can be used in misleading ways,
sometimes taking advantage of our natural inability to handle
arithmetic (or to take the analysis any further).

Look at the conditions of the problem Godin poses. Option 1
offers a 30% improvement in mileage, for half of the
cars. The second offers a 100% improvement in mileage for the
other half of the cars. No way to get that one wrong, right?

It seems strange, but in this case a 30% improvement produces an
overall efficiency gain more than twice as large. Here are the numbers:

-   If *m* is the number of miles driven by a car\...
-   *s* the gasoline consumption (in gallons) for the Suburbans, *s =
    m/10*
-   *p* the gasoline consumption for the Priuses, *p = m/50*
-   *T* the total consumption *= s + p = m/10 + m/50 = 6m/50 = 0.12 m*

In scenario 1 we have *T = m/13 + m/50 = 50m+13m/650 = 63m/650 =
0.097m*. In scenario 2 *T = m/10 + m/100 = 11m/100 = 0.11m*.

Scenario 1 reduces consumption by 0.12-0.097 = 0.023. 
Scenario 2 only by 0.01. 

**Scenario 1 is 2.3 times more efficient**!

The problem lies in the way these numbers are expressed.

There is bound to be an unsuspecting reader who says: "that's what the gringos
get for using miles per gallon, instead of kilometers per liter like
we do". Actually, that is not the problem.

Let's look at another example:

> Suppose you have two cars, and each car will be driven for a
> year for a total of 20,000 km. One car gets 14 km/l and the other 7.5
> km/l. In this case we want to replace only one of the two cars.
>
> These are the alternatives:
>
> -   Replace the 14 km/l car with a 21 km/l one (an improvement of
>     7 km/l)
> -   Replace the 7.5 km/l car with a 12 km/l one (an improvement of
>     4.5 km/l). Intuition will tell you to go for the first option
>     (7 is more than 4.5), but the truth is that the second option
>     is the better deal. Let's see:
> In the initial scenario:
>
>     Fuel Used = 20,000/14 + 20,000/7.5 = 4,095.24 liters.
>
> Scenario 1:
>
>      Fuel Used = 20,000/21 + 20,000/7.5 = 3,619.05 liters 
>      Savings = 476.19 liters
>
> Scenario 2:
>
>       Fuel Used = 20,000/14 + 20,000/12 = 3,095.24 liters
>       Savings = 1,000 liters!! 
>       (more than twice scenario 1!)
>

This kind of problem was presented in the journal
[Science](https://www.sciencemag.org/) in June 2008, under the title
["The MPG Illusion](https://www.sciencemag.org/cgi/reprint/320/5883/1593.pdf)", 
by Richard P. Larrick and Jack B. Soll
of the Fuqua School of Business at Duke University.

In the summary the authors say: "Using 'miles per gallon' as a measure of
fuel efficiency leads people to undervalue the benefits
of replacing the most inefficient automobiles."

Now, what would happen if we expressed fuel
efficiency in liters per 100 km? (as is done in Europe and other
countries).

The initial scenario would be expressed like this:

> You have two cars, one that uses 7.14 liters per 100 km, and the other 13.13
> liters per 100 km.
>
> -   Replacing car 1, consumption drops from 7.14 to 4.76, a change of
>     2.38 per 100 km.
> -   If car 2 is replaced, consumption drops from 13.13 to 8.33, that is, a
>     change of 4.8 liters per 100 km.

Put that way, it is obvious that car 2 is the one to replace.

For those interested in the subject, here are
[two](https://www.onpreinit.com/2009/08/mpg-illusion-seth-godin.html)
[write-ups](https://www.bunniestudios.com/blog/?p=257) that explain better
what is going on here.

(Here is an idea for lawmakers: promote expressing fuel
consumption in liters per 100 km instead of kilometers per liter).

Numbers can be presented in misleading ways, giving the illusion
that you are coming out ahead, when in reality the option that looks less
attractive is the better one.

Running the calculator is not enough. You have to think about what is behind
the figures you are shown, because it is very easy to be fooled with
numbers.

Sources:

\[1\] [Miles per Gallos vs. Gallos per
Mile](http://www.bunniestudios.com/blog/?p=257)

\[2\] [The MPG Illusion and Seth
Godin](http://www.onpreinit.com/2009/08/mpg-illusion-seth-godin.html)
