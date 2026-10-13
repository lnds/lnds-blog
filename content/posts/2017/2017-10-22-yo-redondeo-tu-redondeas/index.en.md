---
title: "I round, you round"
authors: [admin]
date: 2017-10-22T08:25:11-03:00
slug: "i-round-you-round"
draft: false
tags: ['rounding', 'programming']
image:
  placement: 3
---

> You say either and I say either,\
> You say neither and I say neither\
> Either, either Neither, neither\
> Let's call the whole thing off.\
> You like potato and I like potahto\
> You like tomato and I like tomahto\
> Potato, potahto, Tomato, tomahto.\
> Let's call the whole thing off

## The problem

In October 2017 the Central Bank of Chile announced that the 1 and
5 peso coins will go out of circulation. The reason is that the cost of
producing them exceeds their value.\
\
Given this, the suggestion is that cash transactions
be rounded, so that when an amount to pay ends in 5, 4,
3, 2 or 1 the final digit becomes 0. Otherwise, that is,
when it ends in 6, 7, 8 or 9, the amount goes to the next ten.

Examples:

-   If the amount is 10,522 it becomes 10,520
-   If the amount is 10,525 it becomes 10,520
-   If the amount is 10,527 it becomes 10,530.

For some reason, this measure has riled up some people in the
local IT industry, because they consider it an aberration to round
that way.

That's not how you round, some say.

They would expect rounding to be done the "traditional way", so
that whatever ends in 5 goes up to the next ten. According to this position
this is what should happen:

-   If the amount is 10,522 it becomes 10,520
-   If the amount is 10,525 it becomes 10,530
-   If the amount is 10,527 it becomes 10,530.

# Potato, potahto, tomato, tomahto

The truth is you can round in different ways; there is no
"correct" or standard way to round a number.

Actually, there are some standards. For example, the IEEE-754
floating point specification, which defines how floating point
numbers operate, a standard adopted by almost every maker of
floating point units, says the way to round is the
algorithm known as banker's rounding, but I'm getting ahead of myself.

The truth is I partly agree with the criticism, since
on many occasions the Chilean government has set strange
standards without measuring the impact on the IT industry, for example in
the handling of time zones, which I have written about
before 
("[time as a parameter [2011]"](/blog/lnds/2011/03/30/la-hora-como-un-parametro)).

One of the criticisms of this rounding measure comes from Alejandro Barros,
with whom I have complained about the authorities' arbitrary decisions on
technical standards. You can read Alejandro's position here:
<http://www.alejandrobarros.com/estandares-chilensis-si-el-estandar-no-gusta-usamos-otro/>

But this time I don't agree with Alejandro, for the following
reasons:

1.  There is no universally accepted standard for rounding numbers.
2.  **The measure only affects cash payments**.
3.  The measure benefits consumers.
4.  It is a technical measure in the economic sphere, where the priority must be
    to reduce effects such as inflation, which outweigh the
    IT costs of implementing this change.
5.  It is not the first time this has been done.

## **Why does it benefit consumers?**

If we look at it from the consumer's point of view, this measure
benefits them 5 times out of 9; in the other case, with traditional
rounding, it benefits them only 4 times out of 9.

For those who aren't convinced, I ran some simulations, which I mention further
down, that show this effect.

## Does anyone remember centavos?

I mentioned above that this is not the first time this has been done.

![](https://d2dspjyoh5c79p.cloudfront.net/fa163cb0-b72a-11e7-a030-2b5831f8ecb5-aa9f18b7)

Yes, Chile had centavos, but they were eliminated in 1984. At this
link: <http://mickychile1976.blogspot.cl/2012/06/historia-monedas-y-billetes-chilenos.html>
you can find the history of our bills and coins.

In 1984 a regulation was issued that took this denomination out of
circulation.

The Wikipedia page on the Chilean peso is quite illustrative on
this: <https://es.wikipedia.org/wiki/Peso_(moneda_de_Chile)>

Since 1984 we have had to round every operation to the unit.

So we have been rounding for a long time already. 

This is very relevant because our economy uses several alternative
units, such as the UF or the UTM (inflation-indexed units of account), which introduce fractions, and in
those cases you have to round.

## How to round?

There is no correct way to round, as I already mentioned. 

The reason is that our decimal system introduces an asymmetry
when we do this operation.

For example, what do we do with 10.5?

We can do the "traditional" rounding, known as **HALF-UP**, which
rounds it to the next unit, giving 11.

But that introduces an accumulated error in our rounding, upward,
5 times out of 9.

The opposite option for rounding 10.5, known as **HALF-DOWN**,
rounds to the previous unit, giving 10, and in this case
our accumulated error goes downward, 5 times out of 9.

There are other ways of rounding that try to compensate for this error, for
example **banker's rounding,** which rounds up if the
integer part is odd, or down if the integer part is even.

In this case 10.5 would become 10, but 9.5 would become 10.

Let me note again that banker's rounding is the standard way of
rounding defined by the IEEE in the IEEE-754 floating point
specification, so this is the function most used in many
code libraries across various languages.

There are other ways of rounding that try to minimize the error. Some
propose doing it at random, that is, every time we see a .5 in the
decimal part we flip a coin, and if it comes up heads we round down
and if it comes up tails we round up.

## **Algorithms for rounding to the nearest ten**

As a complement to this article I have created a repository on Github that
you can visit here: <https://github.com/lnds/redondeo>

The repository contains implementations of the rounding
required by this central bank rule; I show several algorithms
and also measure their efficiency.

I also include some simulations of each algorithm's impact on the
economy. This is more of a game, but it sheds some light on the
impact of applying one algorithm or another.

My intention is that if anyone has to round amounts they follow the
recommendations described here, because it is very likely they will get it wrong.

## **Bad ways of rounding to the nearest ten**

A terrible algorithm for rounding would be one using strings, but it is something
I have seen so many times that I have to discuss it. If you see this in your
code base, ask for it to be fixed immediately.

The algorithm in this case would be something like this:

    let num be the number to round.
    let snum be the number expressed as a string.
    let last = snum[length(snum)-1] // I assume strings are indexed from zero.
    assign snum[length(snum)-1] = '0'
    if last > '5' then
        let p = snum[length(snum)-2]
        assign snum[length(snum)-2] = char(int(i)+1)

Another way, less bad, is the one that would occur to 99% of
programmers:

    fun redondear_pesos(monto) {
      return round ( monto / 10.0 ) * 10.0
    }

This depends on how round is implemented.

In Java you have the option of using HALF_DOWN, so the
rounding would go more or less like this:

```java
    public static double redondearPesos(double d) {
      return new BigDecimal(d/10.0).setScale(0, RoundingMode.HALF_DOWN) 
                 .doubleValue() * 10.0;
    }
```

This is horrible, for many reasons, but it works. 

However, there are better ways of doing this.

## Better ways of rounding to the nearest ten

What we want is to round down if it ends in 5, 4, 3, 2 or 1.
So it is quite simple if we use integers (Chilean
pesos don't take decimals, so we can safely assume the amounts
will be integers; this is not true if you work with UF or
UTM, so you must convert your values first).

The algorithm would be:

    func redondear_peso(monto) {
      let resto = monto mod 10;
      if resto < 6 {
        return monto - resto;
      } 
      else {
        return monto + 10 - resto;
      }
    }

This way is efficient; it requires no conversions,
multiplications or divisions, which are expensive operations. It doesn't lose
precision, and it is easy to understand and test.

## Simulations

To gauge the impact of the measure I wrote the program simulaciones,
which contains two scenarios. In scenario 1 I add up all the numbers
between 0 and UINT\_MAX (4,294,967,295) and compute the differences when applying
three kinds of rounding. The results are these:

    simulacion 1
    (0) suma sin redondeo         : 9223372030412324865
    (1) suma con redondeo chileno : 9223372028264841210
    (2) suma con redondeo clasico : 9223372032559808500
    (3) suma sin redondeo banquero: 9223372030412324850
    diferencia (1) - (0)          =         -2147483655
    diferencia (2) - (0)          =          2147483635
    diferencia (3) - (0)          =                 -15

A negative value in the difference means a difference in the consumer's
favor. Note that banker's rounding greatly reduces the accumulated
error.

Banker's rounding is the one the Central Bank should have
applied, because it is implemented in a computing
standard and because it is fairer. 

So my criticism, once the impact is measured, is this: why didn't the
Central Bank use banker's rounding?

Scenario 2 runs a simulation generating 1,000,000,000 (one
billion) random numbers.

The result is this:

    simulacion 2
    iteraciones: 1000000000
    (0) suma sin redondeo         : 1073749761791234172
    (1) suma con redondeo chileno : 1073749761291172250
    (2) suma con redondeo clasico : 1073749762291234490
    (3) suma sin redondeo banquero: 1073749761791157850
    diferencia (1) - (0)          =          -500061922
    diferencia (2) - (0)          =           500000318
    diferencia (3) - (0)          =              -76322

As you can see, using the rounding proposed by the central bank tends to
benefit consumers (over large numbers, of course).

But nothing stops sellers from adjusting their prices upward,
so the benefit is doubtful and it may have some effect on the CPI
(how large or small remains to be seen; it might be a good
simulation exercise, but you would need more information).

Note again that banker's rounding is still the one with the least
impact.

## Notes

All the algorithms mentioned and the simulations were implemented
in C and are in this GitHub repository:

<https://github.com/lnds/redondeo>

The version of "Let\'s Call The Whole Thing Off" by Ella Fitzgerald and
Louis Armstrong is much better:

{{<youtube J2oEmPP5dTM>}}

## References

On rounding, this great Wikipedia article
<https://en.wikipedia.org/wiki/Rounding>

Central Bank site explaining the rounding:
<https://www.redondea.cl/>

