---
title: "So what happened with Facebook?"
authors: [admin]
date: 2010-12-28T08:25:11-03:00
slug: "so-what-happened-with-facebook"
tags: ["facebook"]
draft: false
---
I've been asked in several places what I think about the fact that
Facebook did not accept any Chilean students as interns.

Let's see what the news story says ([taken from El Dinámo](http://www.eldinamo.cl/noticia/el-dia-en-que-facebook-no-quiso-practicantes-chilenos)):

![](facebook_0-150x150.jpg)

> **"The social networking giant was offering 12 weeks in California
> and almost US\$ 6,000. Fifty students applied to an offer made
> especially for our country. Nobody managed to meet the requirements."**

Let's see what happened.

First, this offer was channeled through the Ministry of Economy, which
posted the notice on its website on August 23 of this year. Fifty
students responded. The call for applications is
[here](http://www.innovacion.cl/comunidad/noticia/%C2%BFte-imaginas-hacer-tu-pr%C3%A1ctica-en-facebook).

First you had to fill out a form and send it to an address at the
ministry. The form is
[here](Facebook_Application.doc).

Now, what the ministry says is that only 6 made it to the second
stage. What does that mean? That only 6 students were able to fill out
this form? Please, look at it, it couldn't be simpler, though of course
it has to be in English. The questions were:

-   What are your skills in C++ and/or Java? (2 lines)

-   What have you done using C++ and/or Java? (3 lines max)

-   What are your skills in PHP? (2 lines max)

-   What have you done using PHP? (3 lines max)

-   What are your skills in XHTML, CSS and Javascript? (2 lines max)

-   What have you done using HTML, CSS and JS? (3 lines max)

-   Want to add some other technical data that you think relevant, like
    links to your applications? (2 lines max)

-   Why would you like to go three months to Facebook? (3 lines max)

-   What contribution do you think you can do on Facebook? (3 lines max)

-   How could Chile benefit on you going to Facebook? (3 lines max)

Only 6 of the 50 could answer these questions in English?

I think so. Alfredo Barriga's statement gives the clue:

> *"For **Alfredo Barriga**, executive secretary of Digital Strategy at
> the Ministry of Economy, the problem was very concrete: **the lack of
> fluent English**. "Being able to speak it isn't enough, you have to
> handle it as well as Spanish," the government official summed up."*

Those are the facts, as far as I have been able to find out. But it
seems there was a series of earlier processes at the universities that
in a way filtered even further; at least that is what you gather from
some comments on blogs, like [these on
Fayerwayer](http://www.fayerwayer.com/2010/12/ningun-estudiante-chileno-fue-seleccionado-para-hacer-la-practica-en-facebook/#comments)
(considering the high level of noise in that forum (there is one
remarkable account: a student says they were asked to implement the
Towers of Hanoi in Scala, and were given several hours to do it ¿?)).

The other curious thing is the worried opinions of Nelson Baloian:

> ""**I thought we would be in better shape**, I believe there is
> potential and the result surprises me," the academic confessed. For
> Baloian, the students have very good technical abilities, but the
> problem lies in the lack of "**soft skills**", which he describes as
> the skills that let them "move better in business, sell an idea and
> sell themselves"."

Could that be it?

There is a comment on FW from someone who claims to be one of the 6,
saying he had no problems with the language (in fact, I suspect the 6
who made it through didn't have that problem; the ministry must have
made sure to spare itself that embarrassment), and there is the
testimony of **Ignacio Parada:**

> Ignacio has a different explanation: "we lacked preparation," he
> said. He says the process was very hard: "I did three interviews over
> two weeks, the level was extremely high and it kept going up."
> **The tests were based on data structures and algorithms, "something
> we are not particularly trained in**," he explained.

And I believe Ignacio.

Facebook was [looking for jugglers](/en/blog/lnds/2010/12/26/how-to-hire-jugglers/),
and they, unlike many Chilean recruiters, ask their applicants to show
what they can do.

How many students are able to solve a programming challenge as simple
as the one below in half an hour?

And Facebook, Google, Microsoft, Yahoo are looking for developers able
to solve tests more advanced than the one I present below.

The language thing was one reason, an important one, because it
filtered out a large number of students, and that is serious. But once
past that stage, what failed was the preparation, and that is something
the universities need to look at.

Are there young Chileans capable of passing Facebook's exams? Yes,
there are. The problem is that they already have jobs ;)

**Another simple test**

Here is another simple challenge:

"The variance of a random variable X, with mean μ (mu), is calculated
like this:

![](varianza.png)

μ (mu) is the average (the sum of the Xi divided by n).

Write a function (in C) Var (X, n), where X is an array of
floating-point values and n is the size of the array, that computes the
variance, but the computation must be done in a single pass over the
array."

Tips: assume all values are equally likely (that is, pi =
1.0/N, or simply ignore that term).

Note 1: in my experience, no applicant I have given this question to
has answered it properly.\
Note 2: I ran into this problem twice in my professional life, and I
needed to do the computation efficiently and with high numerical
precision, which is why the obvious solution won't do.
