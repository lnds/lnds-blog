---
title: "Zeros and ones"
authors: [admin]
date: 2018-09-23T08:25:11-03:00
slug: "zeros-and-ones"
draft: false
tags: ['computing', 'binary code', 'history']
image:
  placement: 3
---


Legend has it that Theseus promised his father, King Aegeus of Athens,
that if he succeeded in his feat of killing the Minotaur, his ship
would return flying white sails instead of the traditional black ones.
The son of Aegeus, lost for many years, wanted to free his city from
the infamous tribute to King Minos of Crete, which forced them to send
seven young men and seven maidens to be sacrificed to the monster with
the body of a man and the head of a bull.

We know Theseus succeeded. Using a clever stratagem, he entered the
labyrinth where the beast lived, trailing a thread supplied by Ariadne,
and after killing Asterion, the monster's real name according to
Borges[^1], he walked the path back, winding up the ball of thread.

{{<figure caption="Theseus fighting the Minotaur, by Jean-Etienne Ramey" src="https://d2dspjyoh5c79p.cloudfront.net/e8573af0-bf36-11e8-a030-2b5831f8ecb5-aa9f18b7">}}


Theseus returned in triumph, but he was careless: he forgot to give
the order to hoist the white sails. His father had climbed a cliff to
watch the arrival of his son, lost and found again. When he saw the
black sails he felt a great pain, so unbearable that he threw himself
over the edge of the precipice, striking the rocks and sinking into the
waters of that sea, which has borne his name ever since: the Aegean.

The system invented by Theseus and Aegeus to signal the success or
failure of the mission is very simple and has been used since ancient
times. Signals with flags, or smoke, were very common back then.

"One if by land, two if by sea"[^2], that was the signal agreed on by
Paul Revere and Joseph Warren to warn the colonists of Charlestown how
the English troops would move on their way into Massachusetts, at the
start of the American War of Independence. The story is famous: Warren
placed two lanterns in a church tower so that Revere could see them,
and Revere, on seeing the signal, rode all night shouting "the redcoats
are coming!" to warn the patriots to get ready for the fight.

{{<figure caption="The midnight ride of Paul Revere" src="https://d2dspjyoh5c79p.cloudfront.net/4ee0c5c2-bf37-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

## Binary codes

What the legends of Theseus and Paul Revere have in common is that in
both a binary code was used to deliver information.

What does binary code mean?

What we mean is that in both cases there are two parties involved,
Theseus and Aegeus, Revere and Warren, who agree on a code that has
only two options. For Theseus and Aegeus the code has two values: white
sails, which mean success, or black sails, which mean failure. For
Revere and Warren the code has the values: "two lamps" means the
English will come in by sea, "one lamp", that they will come in by
land.

For a code to work, all the parties using it must be clear about its
meaning. Of course there can be errors, and carelessness in its use (as
was the case with Theseus), so care must be taken to make sure the
message is not altered when a code is used. In general, when a code is
this simple, we neglect these details.

## Counting with binary numbers

If with two values we can have a simple code, with three or four we
can enrich the vocabulary of what we want to say, right?

True, but things start to get complicated. We would have to create
tables of meanings: one means this, two means something else, three
something else again, and so on.

Many years ago I worked on a system in which we could encode millions
of millions of messages using only sixty-four letters. How is that
possible? For you to understand what I did, I first have to tell you
how to count in binary.

### Starting from zero

When we are taught to count at school, we start from one: 1, 2, 3...
If there is a line of people we start counting them from 1. That is why
mathematicians have the set of natural numbers, which starts at 1: N =
{1, 2, 3, 4.....}. But in computing things start from zero.

According to [Wikipedia](http://es.wikipedia.org/wiki/Cero): "The
word «cero» comes from the translation of its Sanskrit name shunya
(empty) into the Arabic sifr (صفر), by way of Italian. The Spanish word
«cifra» also has its origin in sifr."[^3]

Zero, the null value, the absence of something, the origin, the first
of the binary numbers: that will be our first digit. The second digit
will be 1.

And we need nothing more. 0 and 1 are enough.

The great mathematician Leibniz [explained it like this](http://www.leibniz-translations.com/binary.htm) in 1703:

> The ordinary reckoning of arithmetic is done according to the
> progression of tens. Ten characters are used, which are 0, 1, 2, 3,
> 4, 5, 6, 7, 8, 9, which signify zero, one, and the successive numbers
> up to nine inclusively. And then, when reaching ten, one starts
> again, writing ten by "10", ten times ten, or a hundred, by "100",
> ten times a hundred, or a thousand, by "1000", ten times a thousand
> by "10000", and so on.

> But instead of the progression of tens, I have for many years used
> the simplest progression of all, which proceeds by twos, having found
> that it is useful for the perfection of the science of numbers. Thus
> I use no other characters in it bar 0 and 1, and when reaching two, I
> start again. This is why two is here expressed by "10", and two times
> two, or four, by "100", two times four, or eight, by "1000", two
> times eight, or sixteen, by "10000", and so on.

> Here is the Table of Numbers of this way, which may be extended as
> far as is desired.

![](https://d2dspjyoh5c79p.cloudfront.net/8bb9955e-bf34-11e8-a030-2b5831f8ecb5-aa9f18b7)

Here, one glance makes evident the reason for a celebrated property of
the geometric progression by twos in whole numbers, which holds that if
one has only one of these numbers for each degree, one can compose from
them all the other whole numbers below the double of the highest
degree. For here, it is as if one said, for example, that 111, or 7, is
the sum of four, two, and one, and that 1101, or 13, is the sum of
eight, four, and one. This property enables assayers to weigh all sorts
of masses with few weights and could serve in coinage to give several
values with few coins.

> Establishing this expression of numbers enables us to very easily
> make all sorts of operations.


Establishing these expressions of numbers lets us carry out all sorts
of operations in a very simple way. And these fascinating arithmetic
properties have the advantage that they can be implemented very well
in an electronic device, with 0 and 1 being the states of a switch
(zero is off, and one is on). We call these binary digits (zero and
one) BITs, which comes from BInary digiT.

In 1937 Claude Shannon wrote his doctoral thesis, in which he
implemented Boolean algebra using relays and switches for the first
time in history. That thesis is the foundation of the digital circuits
used by every computer today.

This same principle that Leibniz explains is the one I used to encode
millions of millions of messages using only sixty-four letters.

The story goes like this. I was hired by a company that had ships
sailing the fjords of southern Chile. Each ship carried a GPS system.
This particular device had the property that every time it connected
to the satellite it could "download" up to 64 bytes of information and
send back the same amount. A byte is eight bits, so I could encode
literally 2 to the power of 64 possible values; for the curious, that
number is: 18,446,744,073,709,551,616.

So what I did was write a program that managed a table of possible
values:

0 - Head to base\
1 - Take shelter in the nearest port\
2 - Pick up cargo at port XX\
3 - Pick up cargo at port YY

\.... Etc.

The table was loaded whenever the ships called at the central base, and
after that they received instructions using this simple system.

Of course we didn't use all the possible values; a few dozen were
enough. The first 4 bytes were used for the message tables and the
other 60 could carry anything at all. Communications were slow, to be
sure, they took several minutes, but they worked in areas where the
only signal was the satellite's. And it worked pretty well.

So you see, with only two digits, zero and one, we have enough to
write anything we can imagine.

[^1]: "The House of Asterion", by Jorge Luis Borges.

[^2]: Actually the two lights indicated that the English would take the
"water" route, crossing the Charles River.
Source: <https://en.wikipedia.org/wiki/Paul\_Revere\#%22Midnight\_Ride%22>

[^3]: Zero on
Wikipedia <https://es.wikipedia.org/wiki/Cero>

