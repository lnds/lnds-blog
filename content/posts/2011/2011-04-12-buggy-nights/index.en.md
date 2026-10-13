---
title: "Buggy nights"
authors: [admin]
date: 2011-04-12T08:25:11-03:00
slug: "buggy-nights"
draft: false
tags: ['bugs','programming']
image:
  placement: 3
---

One small typo and you can lose a lot of time, and even money, or who
knows, lives.

It so happens that I decided to optimize a certain little program that was
taking about 10 minutes to load a file of some 50,000 records, which is a
lot for the kind of operation involved (the data just had to be inserted
into two tables). I decided to change the code to use a typical pattern for
processing files in batch mode, but since I was in a hurry I was careless
and the process ended up with a horrible running time (it was at the
one-hour mark when I killed it). And even staring at the code I couldn't
see the problem. So I left it for later and only got to review it that
night. The fix was as simple as moving an insertion into a list inside an
if, and with that the running time dropped to 26 seconds(!).

It is not the first bug of this kind a programmer has faced. In January
1990 AT&T's telephone systems in New York had a failure that caused the
entire telephone network of the United States to collapse.

The error bears a certain resemblance to the bug in my code.

```c
         do {
        switch expression {
                  ...
                    case (value):

                        if (logical) {
                           sequence of statements
                           break
                       }
                      else  {
                         another sequence of statements
                      }

                     statements after if...else statement

            }
            statements after case statement
       } while (expression)
```
The code is taken from
[here](http://www.soft.com/AppNotes/attcrash.html).

The programmer had little experience programming in C, assumed that the
break statement (which I put in red) applied to the if statement, and
expected the sequence of statements after the if..else to run, which never
happened.

In my case it's a program that for now only I am using, but in AT&T's case
the cost ran into the millions, and the damage to its image was quite
serious.

You have to take the time to read the code, and be in a state of
concentration, to avoid errors of this kind, and of course develop a good
habit of testing the code before going to production.

The AT&T error could have been avoided with automated code analysis tools.
If the subject interests you, I leave you with this video of a talk by Ira
Baxter, of Semantics Design, about tools of this kind:
