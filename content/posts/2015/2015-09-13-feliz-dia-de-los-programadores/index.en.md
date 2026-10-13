---
title: "Happy Programmers' Day"
authors: [admin]
subtitle: "(and a mini challenge)" 
date: 2015-09-13T08:25:11-03:00
slug: "happy-programmers-day"
tags: ["programmers' day", "challenges"]
draft: false
---

The idea of celebrating Programmers' Day came from Valentin
Balt and Michael Cherviakov, two Russian programmers, around
2002, who got it officially recognized by the
Russian government in 2009. On September 11, 2009 the president of
Russia, Dmitry Medvedev, signed the decree that made the celebration
official.

Programmers' Day falls on day 256 of the year. The number was
chosen because it is the number of values that can be represented in an
8-bit byte, a figure every programmer recognizes, and of
course it is less than 365, the number of days in a
year.

So a special greeting to all the programmers, women and men,
who read this blog. Let's celebrate together.

I single out the women because, as everybody should know by
now, among the pioneers of this discipline
[there were many women](/en/blog/lnds/2010/08/03/the-eniac-programmers/).

![](//d2dspjyoh5c79p.cloudfront.net/16b06953-5a33-11e5-a640-83ed6ac97527-aa9f18b7)

Now, to celebrate properly, I have a programming challenge
for you. The prize is two printed copies of my book "La
Naturaleza Del Software".

The conditions of the challenge are the following:

0. There will be only one winner.
1. The prize is two printed copies of my book La Naturaleza Del
Software.
2. To take part you must write a program that runs from the command
line and takes the year as an argument. When run, it must write
to the console the date on which Programmers' Day will be celebrated that
year. The date must include the day of the week.
For example, if I run the program with the parameter 2016, the program
must write to the console: "Programmers' Day in 2016 will be
celebrated on Monday, September 12".
3. The program must calculate which date is day 256 of the year; what's more, this
must be an internal parameter of the program and should be changeable,
so that if we decide Programmers' Day is day 128 or
day 48 of the year, it can be changed easily. (This is to keep you
from computing Programmers' Day as September 12 or 13 depending on whether
it's a leap year.)
4. If the year is earlier than 2002 the program must say that Programmers' Day
was not yet celebrated at that time.
5. If the year entered is earlier than 2009 the message must be in Russian.
6. If the year entered is in the past the message must be in the
past tense (for example: "Programmers' Day in 2014 was celebrated on
Saturday, September 13").
7. If you run the program on the day itself, the program must say "Programmers'
Day is celebrated today! Congratulations!".
8. Contestants must submit their program by opening a pull request
against the following GitHub
repository: 
[https://github.com/lnds/dia-del-programador](//github.com/lnds/dia-del-programador)
9. The winner will be the shortest correct program by number of lines of
code. Comments will be ignored when counting lines of code.
The implementation language doesn't matter. If there is a tie in
lines of code, the winner will be the one with the lowest complexity
according to [Halstead's metrics](https://www.programando.org/blog/2013/01/10/desafio-enero-las-metricas-de-halstead.html).
10. You have two weeks to submit your solutions.

{{<figure caption="The prize for this challenge" src="//d2dspjyoh5c79p.cloudfront.net/f55e66e0-5a31-11e5-a640-83ed6ac97527-aa9f18b7">}}

Have a happy Programmers' Day.
