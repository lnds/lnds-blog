---
title: "Big O notation"
authors: [admin]
subtitle: "How to estimate algorithmic complexity"
date: 2013-11-23T08:25:11-03:00
slug: "big-o-notation"
tags: ["algorithms", "mathematics"]
draft: false
image:
  placement: 3
---

## **A guessing game**

Imagine the following game: "one player thinks of a number
between 1 and 1,000, and the other has to try to guess it by asking the first
player questions that can only be answered with a Yes or a No."

One way to do it is to ask about each number in sequence:
"is it 1?", answer: "No". "Is it 2?", "No". "Is it 3",
"No". etc.

If the person thought of 999 or 1,000, this is not the most
efficient way to guess the number. We can ask by "skipping around,"
or at random: "Is it 523?", "No". "Is it 256?", "No"\...

That approach requires us to write down in some notebook which
numbers we have already asked about. The problem with that is that when we generate the
numbers at random we would have to keep checking the list
we have written to avoid repeating them.

An improvement would be to have a sheet of paper with the numbers from 1 to 1,000
where we cross out the ones already asked. This lets us see
directly what has been asked without having to go through our notebook.

Whether we ask the questions in sequence or
at random, the number of questions can range from 1 to 999.
We will ask just 1 question if we guess the number on the first try; if we are
unlucky we will have to ask 999 questions. Unless we are badly
distracted we will never ask more than 1,000 questions. If the game
consists of guessing a number between 1 and N, the number of questions
we ask will also be a number between 1 and N, and we will never ask more than N
questions.

But there is another way to solve this problem. We can start in the
middle and ask the following question: "Is the number you're thinking of less
than 500?" The other player might answer "Yes," which means
the number has to be between 1 and 499. With this simple question
we have cut the universe of possible values to guess in half.
We can ask again: "Is the number less than 250?" A "Yes"
in reply reduces the universe to the range 1 to 249. We ask a
third time: "is the number less than 125?", and if the answer is
"No," we know the number has to be between 125 and 249, and we can
carry on like this, always splitting the range in half.

The interesting thing is that this way we will never ask more than 10 questions
to guess the number. If we have to guess a number between 1 and one
million we will have to ask at most about 20 questions. In general, for
any number N we will ask at most a number of questions less than or
equal to the base-2 logarithm of N. That is because we always split the
search range in two. And with this we have also discovered an efficient
algorithm for guessing the number.

**Big O notation**

When we talk about algorithms, and in particular when we analyze them, we
computing people use a particular notation to describe their
efficiency. It is Big O notation, a mathematical technique used
to express approximations of functions. In some articles and in
some chapters of [my book](http://www.lnds.net/books) I have used this
notation, but I have never explained it, and of course not everyone who reads
those articles understands that part, which naturally they skip, or
simply ignore. In many cases it is not relevant to understanding the
point being made. Still, I think it doesn't hurt to know a little about it.

In the earlier example, the game of guessing a number between 1 and
N, when we use the first "algorithm," asking in
sequence, or the second algorithm, where we ask at random,
the number of questions to ask is at most N. In that case
we say the algorithm is of "order N," and we write it: O(N).

In the second case, where we narrow the search range by splitting it into
two parts, we say the algorithm is O(lg N), where lg denotes the
base-2 logarithm.

The notation O(f(N)) denotes, in general, that the number of basic
operations of the algorithm is a function of N. For example, a sorting
algorithm known as bubble sort requires N
squared operations to sort a list of N numbers, so we say
that algorithm is O(N\^2), where N\^2 is a notation for
N raised to the power of 2.\
There are other, more efficient ways to sort, such as QuickSort, which systematically
divides the problem into two groups. In this case the algorithm is
O(N lg N), that is, N multiplied by the base-2 logarithm of N.

Computing people have techniques for estimating the complexity of their
algorithms, which can be mastered with practice. These
techniques let them choose between different algorithms, or evaluate
their own. Sometimes calculating the efficiency of an algorithm turns out to be
challenging. The important thing is that this notation is very useful for
deciding which algorithm to use for a given problem.

However, the value Big O notation gives should not be
confused with the actual running time of an algorithm, which will depend
on other particular details of the machine it runs on.

Finally, the estimates given with this
notation normally assume a scenario with a single CPU executing
the task. Suppose you had to implement the guessing
game, and that you have N people asking at the same time (and
that the one answering is able to answer everyone at once).
In that case your algorithm, which with one CPU is O(N), becomes
O(1).

But the halving algorithm gets harder to manage in an
environment with many parallel processors. In fact, it is not possible to
execute the second step without having the answer to the first step, so
in that case having N "askers" does not benefit this particular
algorithm.

That is precisely the discussion I lay out in the three articles on
the problem of parallelizing, in the [third part of the
book](http://www.lnds.net/books). Which is very interesting today,
at a time when we have a great deal of computing power thanks to
multi-core processors.
