---
title: "The power of automation"
authors: [admin]
date: 2018-04-08T08:25:11-03:00
slug: "the-power-of-automation"
draft: false
tags: ['automation', 'quality control', 'metrics']
image:
  placement: 3
---

I'm going to share with you a small infographic put together by my
quality team:

![](https://d2dspjyoh5c79p.cloudfront.net/c5b77af0-3b3d-11e8-a030-2b5831f8ecb5-aa9f18b7)

What this chart shows is that without automation a tester can run 80
test cases a day, according to our team's measurements. On one project
in particular we have 6,840 test cases, which means it would take that
person 4 months to complete the process. At the time this infographic
was made, 2,650 test cases had been automated, and those can be run by
one tester in a day and a half.

The goal is to get to 6,480 automated cases, which cuts testing down to
4 days. Or, in equivalent terms, gives one of our testers the capacity
of twenty! 

In other words, we're building a 20X quality team! That's a big step
forward.

But how do they pull this off? That's the question I get every time I
tell this story. Do you use Selenium?

The answer is, "it depends". It's not about automating everything with
this or that tool. Selenium is one of them, but things go better when we
use our ingenuity. My team has automated using Excel, Python, AWK,
writing ad hoc code in Java or Ruby, or using tools like JMeter and
SOPAUI. 

When you face a problem you have to fall in love with the problem, not
the solution, and that means not taking sides for one tool over another,
something I admit was hard for me to accept. Not everything has to be
solved with code or with tools like Selenium when we talk about QA
automation.

The most important thing is that we follow a pattern, a continuous
improvement model applied to automation:

![](https://d2dspjyoh5c79p.cloudfront.net/24c886f1-3b3f-11e8-a030-2b5831f8ecb5-aa9f18b7)

1.  We automate a task.
2.  That reduces incidents caused by human error.
3.  That frees up people's time.
4.  With that free time we pay back technical debt.
5.  Quality improves.

Another example:

![](https://d2dspjyoh5c79p.cloudfront.net/e1b6c4c2-3b3f-11e8-a030-2b5831f8ecb5-aa9f18b7)

Here we have a chart of the number of historical errors detected in
SonarQube. We cut those historical errors by 48%.

How did we do it?

When you automate tasks you free up time, and that time goes into
paying off technical debt. The team now spends part of its time
reviewing the code, fixing it and refactoring it, which reduces bugs,
which translates into better code in production.

Which brings me to this last chart:

![](https://d2dspjyoh5c79p.cloudfront.net/2d28a9d4-3b42-11e8-a030-2b5831f8ecb5-aa9f18b7)

This is a metric we call delivered value (DV). [In this case we measure
the proportion of the work invested by the development team. That is,
how much of what we deliver month after month is new functionality
versus bug fixing. Note that since July of last year we made major
changes to our development process, and they show up in these
indicators. It used to be common to have months in which most of the
work was fixing bugs; today that has been reversed.]{style="letter-spacing: 0.01rem;"}

[These results depend on several factors, but in my opinion the
continuous improvement cycle described above, in which we focus on
automating one task, has been key to achieving these
numbers.]{style="letter-spacing: 0.01rem;"}

And you, do you keep performance metrics, for yourself and for your
team? Which ones? Are you automating tasks? Tell me about your
experience.
