---
title: "And the winner is ..."
authors: [admin]
date: 2015-09-27T08:25:11-03:00
slug: "and-the-winner-is"
tags: ["programmers' day", "challenges"]
draft: false
---

The two weeks I gave to solve [the Programmers'
Day challenge](//www.lnds.net/blog/lnds/2015/9/13/feliz-dia-de-los-programadores) are up.
Seven contestants entered:

\- Daniel Martinez [\@edmt](//github.com/edmt) with a [solution in
Ruby](//github.com/lnds/dia-del-programador/tree/master/edmt).

\- Pedro Guerrero [\@pedroguerrero](//github.com/pedroguerrero) with [his
solution in
Python](//github.com/lnds/dia-del-programador/tree/master/pedroguerrero).

\- Jano González [\@janogonzalez](//github.com/janogonzalez) with [another
solution in
Ruby](//github.com/lnds/dia-del-programador/tree/master/janogonzalez).

\- Mario Fuentes [\@mariofuentes](//github.com/mario-fuentes) with [a
solution in
Go](//github.com/lnds/dia-del-programador/tree/master/mario-fuentes).

\- Dardo de Leon [\@dardodeleon](//github.com/dardodeleon) with [a
solution in
PHP](//github.com/lnds/dia-del-programador/tree/master/dardo-de-leon).

\- Christian [\@christiaclx](//github.com/cristhianclx) with [another
solution in
Python](//github.com/lnds/dia-del-programador/blob/master/cristhianclx/reto-dia-programador.py).

\- Javier Novoa [\@jstitch](//github.com/jstitch) with another [solution in
Python](//github.com/lnds/dia-del-programador/tree/master/jstitch).

OK, on to the evaluation.

## **Phase 1: Execution**.

Each program is run with the following parameters:
1000, 2000, 2002, 2004, 2009, 2014, 2015, 2022.

Results:

\- \@edmt: the answers for 2002 and 2004 were incorrect in the
sense that they only reply: "Здравствуйте", which, if my Russian isn't off
(i.e. Google Translate), means "Hello". So in this phase
\@edmt does not pass.

\- \@pedroguerrero: this program's answers in Russian are also
fixed and say something
like: "Он
по-прежнему отмечается программист", which according to Google Translate means
"He still says Programmer". (?). However, this solution is
interesting because it doesn't use any library functions to calculate the
day of the week; instead it applies the famous Zeller's congruence to
calculate the day of the year. Nicely done, Pedro!

\- \@janogonzalez: has the same problem with the answers in
Russian.

\- \@mariofuentes: his program answers correctly in Russian, or at
least it seems to :). For example, when given 2002 as a parameter the
answer is: "День разработчика" 2002 "состоялось в Пятница, 13 Сентябрь", 
which according to Google Translate means
"Developer Day 2002 held on Friday, September 13".

\- \@dardodeleon: the problem with this solution is that it requires
Vagrant. I tried to run it directly but apparently I have to
configure php.ini. Even though it is well documented, the time
window I set aside to evaluate this challenge doesn't let me keep
digging on my Mac (I have Vagrant installed, but only as a side effect
of installing Docker, and I don't know Vagrant well enough
to get the program running).

\- \@cristhianclx: his program answers correctly in Russian, the
same way \@mariofuentes's program does.

 - \@javistitch: His Python 3 solution is the most ambitious because
it tries to translate the text online using Google
Translate's services. An interesting idea, but unfortunately I couldn't get it
to run on my Mac. Even though I have Python 3, I had trouble
installing GoSlate and, just as with \@dardodeleon, the
time window I set aside for the evaluation doesn't let me keep
digging.

## **Phase 2: Program length**

This is the number of lines of code in each
program:

![](//d2dspjyoh5c79p.cloudfront.net/eff2d1c9-6538-11e5-a640-83ed6ac97527-aa9f18b7)

\@christianclx's solution has 24 effective lines of code versus
\@mariofuentes's 39 lines of code.

So we have a winner, and it's \@christianclx. Congratulations!

Over the next few days I'll get in touch with you to work out how
to get you the prize.

Thanks to everyone for taking part!

