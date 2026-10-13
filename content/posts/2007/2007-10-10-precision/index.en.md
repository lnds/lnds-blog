---
comments: true
date: 2007-10-10 18:43:11
layout: post
slug: precision
title: Precision
authors: [admin]
wordpress_id: 1110
categories:
- programming
tags:
- calculation
- numerical computing
- mathematics
- precision
- floating point
---

This note was "prompted" by some [comments](/en/blog/lnds/2007/09/27/rounding-errors/#comments) on my previous post about the [Excel **2007** bug](/en/blog/lnds/2007/09/27/rounding-errors/). The first is a [link to a discussion on Kriptópolis](http://www.kriptopolis.org/explorer-aprueba-matematicas) about the numeric precision of javascript. The second asks whether I knew that Visual Basic rounds down.

The truth is I don't know how Visual Basic rounds, because fortunately I've never had to program in that language ;).

But what surprises me is reading [other comments](http://www.kriptopolis.org/explorer-aprueba-matematicas#comment-24031) that show an ignorance about the precision of computers that is astonishing in IT professionals.

Every programmer should know that the precision of mathematical operations is determined by the way numbers are represented.

Today the most widely accepted way to store numbers is the IEEE standard floating point representation, or [IEE754](http://es.wikipedia.org/wiki/IEEE_754).

This representation, despite being quite good and precise, can't represent every possible real number, since there are infinitely many of them.

Since we can't have infinite digits to represent a number, we have to adopt some convention, and for that we use a fixed number of bits to store numbers.

The typical representation uses 64 bits to store a real number. Excel and many programs that require high precision use the so-called "double extended representation", in which each number is stored in 80 bits.

This representation has some curious properties. For example, there are 1,000 times more numbers between 0 and 0.5 than between 0.5 and 1.0. That is, precision is greater the closer we get to 0.

There are consequences that come with the decision to use this representation. One of the most striking is that numbers stop being associative.

If you remember from school, associativity is the property that lets us say we can group 3 or more numbers in different ways and the results will be the same.

For example, if we have the numbers 0.1, 0.56 and 0.78, to add them we can group them in the following ways: (0.1+0.56)+0.78 or 0.1+(0.56+0.78). In general, it doesn't matter how we order them, the result will be the same.

However, that is not what happens in computers.

For example, this javascript code demonstrates what I'm saying:


```javascript
var n = new Array(1001);
var i;
for (i = 1; i <= 1000; i++) {
    n[i] = i * 1.19;
}
s0 = 0;
for (i = 1; i <= 1000; i++)
{
    s0 = s0 + n[i];
}

s1 = 0;
for (i = 1000; i >= 1; i--) {
    s1 = s1 + n[i]
}
delta = s1 - s0;

alert('s0 = ' + s0 + ' s1 = ' + s1 + ' s1-s0 = ' + delta);
```

You can try this code on [this page](http://www.tlarson.com/script)

What this code does is create an array of 1000 numbers, from 1 to 1000, where each number is in turn multiplied by 1.19 (which is like applying IVA, Chile's 19% VAT, to each number).

Then it adds the numbers in ascending order (s0) and then in descending order (s1).

At the end it shows the result of both sums, and the difference between them (delta).

The interesting thing is that delta, that is, s1-s0, should be 0, but since addition is not associative the result is not what you'd expect.

This difference may seem insignificant, but the truth is I've run into many practical applications where it shows.

When you start out as a programmer you run into problems like: "add up the amounts of 1,000 invoices, applying VAT to each."

Traditionally, to add an array of N figures we use the following algorithm:


```
def Suma(A[1..N])
    suma := 0
    for i := 1 to N do
        suma := suma + A[i]
    return suma
```

However, this is not the most precise way to do this calculation.

A better way to add is to use Kahan's formula:


```
def SumaKahan(A[], 1 a N)
    S := A[1]
    C := 0;
    for j := 2 to N do
    Y = A[j] - C;
    T = S + Y;
    C = (T - S) - Y;
    S = T;
    return S
```

This formula has extremely high precision [1].

For those interested in experimenting, the continuation of this article has a C program that demonstrates the precision of this algorithm.

This is just one example of the things [every programmer should know about floating point](http://docs.sun.com/source/806-3568/ncg_goldberg.html).

[1] The details can be found [here](http://docs.sun.com/source/806-3568/ncg_goldberg.html#1262). The perturbation in this algorithm is 2*epsilon, while in the traditional algorithm it is proportional to N*epsilon, where epsilon is the approximation error given by the numeric representation.
