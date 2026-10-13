---
title: "P versus NP"
authors: [admin]
date: 2010-08-22T18:25:11-03:00
slug: "p-versus-np"
tags: ['p vs np', 'algorithms', 'computer science', 'mathematics']
draft: false
---

The P versus NP problem is considered the most important open problem
in computer science. In fact the Clay Institute includes it among the 7
["millennium problems"](http://www.claymath.org/millennium/), which are the most important open
mathematical problems according to that institute.

The prize for solving any one of these problems is one million
dollars. The Clay Institute's description of the P versus NP problem
goes more or less like this:

> Suppose that you are organizing housing accommodations for a group of
> four hundred university students. Space is limited and only one
> hundred of the students will receive places in the dormitory. To
> complicate matters, the Dean has provided you with a list of pairs of
> incompatible students, and requested that no pair from this list
> appear in your final choice.

This is an example of what computer scientists call an NP problem,
because it is easy to check whether a given proposed list of one hundred
students is satisfactory (that is, no pair taken from the list appears
on the list of incompatibilities handed over by the Dean). However, the
task of generating a list from scratch seems to be so hard as to be
completely impractical.

In fact, the total number of ways of choosing one hundred students from
the four hundred applicants is greater than the number of atoms in the
known universe! So no future civilization could ever hope to build a
supercomputer capable of solving the problem by brute force, that is,
by checking every possible combination of 100 students.

However, this apparent difficulty may only reflect the programmer's
lack of ingenuity. One of the outstanding problems in computer science
is determining whether problems exist whose answer can be quickly
checked, but which require an impossibly long time to solve by any
direct procedure. Problems like the one above seem to be of this kind,
but so far no one has managed to prove that any of them really are as
hard as they appear, that is, that there really is no feasible way to
generate an answer with the help of a computer. Stephen Cook and Leonid
Levin formulated the P versus NP problem independently in 1971.

The question the P versus NP problem poses, in essence, is the
following:

> Suppose the solution to a problem can be verified quickly by a
> computer. Then is it possible for the solution itself to be computed
> quickly?

You'll say: these are problems for mathematicians, or for the
_computer science types_, and if they get solved it has no practical
importance whatsoever! I suggest you reconsider, because an even more
abstract mathematical problem, posed some 110 years ago, led to the
creation of the computer, and produced all the technological advances
we enjoy today thanks to computing.

