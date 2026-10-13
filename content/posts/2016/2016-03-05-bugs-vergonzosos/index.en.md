---
title: "Embarrassing bugs"
authors: [admin]
date: 2016-03-05T08:25:11-03:00
slug: "embarrassing-bugs"
draft: false
tags: ['errors', 'quality', 'bugs']
image:
  placement: 3
---

The word bug, literally an insect, used to denote a computer
error, has its origin in the discovery of a moth by
the operators of the Mark II, an event reported by the famous
[Grace Hopper](//es.wikipedia.org/wiki/Grace_Murray_Hopper).

The photograph below is a page from the operations
logbook of the Harvard Mark II. Hopper's note mentions the
"first actual case of bug being found", which shows that the term bug
is much older; Thomas Alva Edison himself used the word bug to
talk about mechanical failures in his
inventions.

{{<figure caption="The first bug" src="//d2dspjyoh5c79p.cloudfront.net/8c9220fc-e2d0-11e5-a13c-3371c0364c63-aa9f18b7">}}

In programming we run into bugs all the time. There are all kinds
of bugs: bugs that happen because we hit a condition we didn't
foresee, bugs from
an error in the implementation of the algorithm, bugs that come from a
bad definition, or from assuming conditions that don't hold,
etc.

Embarrassing bugs are the ones caused by bad programming.

In 2014, at the 11th USENIX Symposium on Operating Systems Design and
Implementation, a group of researchers from the University of
Toronto presented
[the results of their research](//www.eecg.toronto.edu/~yuan/papers/failure_analysis_osdi14.pdf)
on distributed systems in the real world.

The paper for this study is called "Simple Testing Can Prevent Most
Critical Failures" and you can find it
[here](//www.eecg.toronto.edu/~yuan/papers/failure_analysis_osdi14.pdf),
in case you want to dig deeper into the subject.

The researchers chose the following systems:

> \- **Cassandra**, the NoSQL database originally developed
> by Facebook, maintained by the Apache Foundation, and used by,
> among others, Apple (with more than 100,000 nodes) and Netflix.
>
> \- **HBase**, another important NoSQL database, used by Spotify and
> Facebook.
>
> \- **Hadoop**, in particular the **MapReduce** and **HDFS** components.
>
> \-**Redis**, the famous "data structure server", used in
> a multitude of services, such as GitHub, Twitter, Pinterest or
> StackOverflow.
>

Of the five systems analyzed, four are written in Java and one in
C. We are talking about a study of the software that is part of the
critical infrastructure of important, massive internet
services.

These systems are "fault tolerant", that is, they are designed
to be resilient to errors in the environment, work overload,
etc. During their work, the researchers went through a total
of 17,216 failure reports for these systems and analyzed 198 in detail,
of which 48 were catastrophic, that is,
they left the system inoperable. (In one case the recovery
involved opening manual SSH sessions to more than 4,000 nodes to
stop the processes).

The interesting thing about the study is that they found that many of the
catastrophic errors looked like this:

    try {
        ....
    } catch (Throwable t) {
       System.exit(-1);
    }

Or worse:

    try {
        ....
    } catch (Throwable t) {
       // TODO
       LOG("se produjo un error...");
    }

92% of the errors come down to incorrect error handling,
of errors the programmers knew about, since they were explicitly
flagged in the code.

35% are trivial mistakes: 25% caused by ignoring the error, 8% by
aborting during the exception, and 2% simply have a TODO comment
(as in *to do*, or *pending*) in the code.

57% of the errors are system specific: 23% are
easily detectable and 34% are complex. The figure
below, taken from the paper, summarizes the breakdown of the
catastrophic errors:

{{<figure caption="Breakdown of errors" src="//d2dspjyoh5c79p.cloudfront.net/d6e105af-e2d9-11e5-a13c-3371c0364c63-aa9f18b7">}}

I want us to think about this: we are talking about trivial
errors that are handled carelessly.

We are also talking about open source projects, and with this we have
yet another refutation of that fallacy, turned into a mantra by some
fanatics, called Linus's Law:

> "Given enough eyeballs, all bugs are
> shallow."

(The law was not formulated by Linus Torvalds, but by Eric Raymond
in his essay "The Cathedral and the Bazaar").

Surely at your job and in your own code you have seen things like
this. Our programs are full of similar things. I won't cast the
first stone, because I plead guilty: many times I have left
"this for later" and it has always blown up in my face. Try to
avoid it.

But what is unforgivable, with no excuses at this stage of the game,
is the Bug, or rather, the "Leap Year Shame".

On February 29 of this year, more than 1,200 suitcases never made it to their
planes because of a leap year error in the control system of the
baggage conveyor at Düsseldorf Airport.

There is a list of this year's errors at this
address: [http://codeofmatt.com/2016/02/29/list-of-2016-leap-day-bugs/](//codeofmatt.com/2016/02/29/list-of-2016-leap-day-bugs/)

There are several documented "horrors" associated with this bug:

\- in 2012 Microsoft's Azure cloud computing service [had
problems for 12 hours because of an error validating the expiration of a
certificate on February 29 of that
year](//azure.microsoft.com/en-us/blog/summary-of-windows-azure-service-disruption-on-feb-29th-2012/).

\- in 2010 [Sony's PlayStation Network
failed](//www.nbcnews.com/id/35646131/ns/technology_and_science-games/t/leap-year-glitch-fixed-sony-playstation)
because the system incorrectly identified 2010 as a leap year
(!).

\- in December 2008 [Microsoft's Zune
devices](//www.theguardian.com/technology/blog/2009/jan/01/zune-firmware-mistake) (which
were meant to compete with the iPod) froze.

The leap year bug shows up in 2 forms. The best known one happens
in February, but there are also problems on December 31. Many
programs assume that the last day of the year is day 365, which
is not the case in a leap year, which has 366 days.

[The Zune error has to do with this other aspect. This is the
infamous code that froze these
devices:]{style="letter-spacing: 0.01rem; line-height: 1.5;"}

    01 year = ORIGINYEAR; /* = 1980 */
    02 while (days > 365) {
    03  if (IsLeapYear(year)) {
    04    if (days > 366){
    05      days -= 366;
    06      year += 1;
    07    }
    08  }
    09  else {
    10    days -= 365;
    11    year += 1;
    12   }
    13 }

On December 31, 2008 the variable days had the value 366, and since
2008 is a leap year, the program went into the if condition on
line 03, but in there nothing ever changes the value of days,
which stays at 366 forever, turning all this code
into an infinite loop.

But this problem happens in our country too; this year I have heard
of 3 cases. You surely know of several, and it would be interesting to hear about
some in the comments.

Why does this happen?

The Bible says:

> "Teach us to number our days, that we may
> attain a wise heart." -- Psalms 90:12

Although I don't share old King Solomon's faith, I do agree
that programs need to learn to count the days properly.

This psalm is quoted as the epigraph of one of the most
important articles I have read, one I think anyone who
wants to call themselves a programmer should read.
It is "CalendricalCalculations", a paper published in
Software Practice and Experience in September 1990.

It is a beautiful paper, with code written in Lisp, which gives it even
more style 😜. The authors later expanded the article into
a book ([on Amazon](//amzn.to/1VYgCUc)). This article
has everything you need to know about handling dates.

In Calendrical Calculations we find this piece of code, for determining
the last day of a month:

    (defun last-day-of-gegorian-month (month year)
       (if (and (= month 2)
                    (= (month year 4) 0)
                    (not (member (mod year 400) (list 100 200 300))))
       29
       (nth (1- month) (list 31 28 31 30 31 30 31 31 30 31 30 31))))

Since I don't want to give you hives, I'll show you the code in C:

    int last_day_of_gregorian_month(int year, int month) {
         int leap = (year%4 == 0 && year%100 != 0) || year%400 == 0;
         int days[] = {31,28+leap,31,30,31,30,31,31,30,31,30,31};
         return days[month-1];
    }

A year is a leap year if it is divisible by 4, but the
century years (divisible by 100) must be excluded, except for the century years divisible
by 400. That is why the year 1900 was not a leap year, but 2000 was.

The language you use surely has functions to calculate this,
for example in Python:

    import calendar
    calendar.monthrange(year, month)[1]

The important thing is to check that the language's libraries have
this implemented correctly.

So let's hope we don't have to come back to this subject four
years from now, because that would mean we are incapable of learning anything.

Just think of the lost time, the stress and the money it cost the
programmers and systems engineers in each of the cases I
mentioned above.
