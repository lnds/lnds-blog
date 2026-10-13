---
title: "Limitations"
authors: [admin]
date: 2017-08-13T08:25:11-03:00
slug: "limitations"
draft: false
tags: ['rock', 'agile', 'devops', 'innovation']
image:
  placement: 3
---

A reference to
[an opinion column](http://impresa.lasegunda.com/2017/08/12/A/8337C5C1/C637C5FV)
by Carlos Franz in the Chilean newspaper [La Segunda](http://impresa.lasegunda.com/2017/08/12/A) shows up in my Facebook timeline.

The title is "eñe" (the letter ñ) and it starts like this:

> A year (*año*) is not the same as an anus (*ano*). Although some years do turn
> out to be like the anus, it's better not to confuse that indispensable part
> of the body with a cycle of the Earth around the sun. Good
> spelling serves, among other things, to avoid silly or
> dangerous mix-ups like that one. It also serves to help us understand each other better in writing
> and to maintain the history, identity and unity of our
> language.
>
> Yet it seems those noble goals don't matter much to the
> State of Chile (in its current state). For example, our Servicio
> de Impuestos Internos (SII), the tax agency, serves long-suffering taxpayers
> through a computer program that, in many cases, does not accept
> the orthographic marks proper to the official language of our republic.
> On its Internet platform the SII prevents us from using the accent mark
> on written accents. And as if that weren't enough, the SII forbids us to use
> one of the letters of our alphabet: the eñe.
>
> A gentleman named Patiño, who lives in Ñuñoa and wants to issue an
> electronic fee receipt for services transporting
> children (*niños*), will find himself turned into "senor Patino domiciliado en Nunoa" and
> his receipt will say he is in the business of "movilizacion de ninos".
>

Given Franz's puzzlement, and surely that of plenty of non-computer people, about why
these things happen, I feel obliged to explain the main
reason behind it.

In a word, the only reason you can't enter an ñ
in a form on any given website is this:

<center>
<b>INCOMPETENCE</b>
</center>

At this point in the century handling "special" characters should no longer
be a problem. It's not easy, in fact it's fairly complicated, but
it's not rocket science either.

And surely another question will come up here for my muggle friends who
haven't mastered the complexities of the dark arts of computing:
why do we call them "special"
characters?

The reason is historical. The first computers were created in
England and the United States. In English there are no accents and the letters of the
alphabet number only twenty-six.

There's no ñ in English, and no accents either, or diaeresis (those two
little dots that sometimes go over the u so we can say pingüino
and not confuse güiña with guiña).

When computers began handling letters in addition to numbers, it became
necessary to establish a standard way of encoding these symbols.
So people turned to things that already existed. In 1928 IBM introduced a
punched card machine, used to tabulate data, and along
with the machine came an encoding based on 6 bits (that is,
good for encoding 64 characters; remember that if we have n bits
for a code, we can encode 2 to the n symbols).

These first codes were
called [BCD](https://es.wikipedia.org/wiki/Decimal_codificado_en_binario),
or Binary Coded Decimal. With these
codes you could only represent the digits 0 through 9 plus the
uppercase letters from A to Z and a few other symbols, like \$, \#,
@, etc.

The problem is that there was no standard. Each manufacturer encoded in 6
bits however it saw fit; IBM itself had different
representations across its various models.

In 1963 two standards were established in parallel, one from IBM itself
known as [EBCDIC](https://es.wikipedia.org/wiki/EBCDIC),
and another
called [ASCII](https://es.wikipedia.org/wiki/ASCII) designed
by the American standards association, which at the time was
known as ASA (American Standard Association) and which is the predecessor
of
today's [ANSI](https://www.ansi.org/) (American
National Standards Institute).

The novelty of EBCDIC and [ASCII](https://es.wikipedia.org/wiki/ASCII) is
that they included lowercase letters and therefore required more bits:
7 in the case of ASCII and 8 in the case of EBCDIC.

The curious thing is that IBM was one of the main drivers of ASCII,
yet its products took several years to adopt
ASCII.

All of this caused the first character translation problems.
EBCDIC places uppercase before lowercase in its table,
and puts all the letters before the numbers, exactly the
reverse of ASCII. On top of that, the letters are split into segments in EBCDIC.
Given this, translation would involve a lot of fairly
complex transformations.

But IBM and other vendors ran into the reality of the many
additional characters that European languages bring in. EBCDIC
solved this by creating code pages. For example, code page 284
(known as EBCDIC 284) is an encoding that can be used in
Latin America, but it's different from the encoding for France (EBCDIC
297).

In EBCDIC-284 the ñ has code 106, while in EBCDIC-297 that
same ñ has code 73. Code 106 in EBCDIC 297 is ù. So
if you encoded a text in Chile in EBCDIC 284 and send it to France,
the word niño will be received as niùo.

In ASCII the situation is no better. ASCII only takes care of the
7-bit encoding. By the '70s and '80s it was already settled that
a byte was a set of 8 bits (a byte was not always 8 bits).
This means 8 bits can be used to encode additional
characters.

So various vendors used those 128 extra slots to
encode other symbols for different needs.

In the days of the first PCs, Apple introduced its extensions to
ASCII, like [Mac OS Roman](https://en.wikipedia.org/wiki/Mac_OS_Roman).

IBM itself created several extensions on its PC to be
used by DOS, the operating system it acquired from Microsoft.

Here the picture improved a little. For example, Code page 850 of DOS
ASCII, also known as DOS Latin 1, lets us solve the problem
above. In this encoding, in both Chile and France the
ñ is code 164.

The bad news is that you couldn't share information with Greece, which
besides supporting our characters has to use additional ones. In
Greece the standard to use is Code Page 737, where the ñ is
replaced by the Greek lowercase letter mu.

These things were a real problem in the '80s, because PCs had to be
configured properly to use the Code Page relevant
to the country you were operating in, but when you interacted
with [mainframes](https://en.wikipedia.org/wiki/Mainframe_computer) (the big
servers of that era) the trouble
started. Add to this that printers had their own
encoding too. I remember that back then you could spend a long time
configuring the printer so the ñ's would come out right on
paper.

For programmers in the US these things weren't much of a problem, but
when they started exporting their applications they became aware of these
difficulties. For programmers in Europe or Latin America it
wasn't easy from the start.

The simplest solution was to force users to use ASCII. After
all, programmers were used to these limitations.

For example, I normally have my keyboard set to English
when I program and switch it to Spanish only to write text, like
this, because it's more efficient for me to work that way. But it's
unfair for us programmers to impose limitations that make no
sense on our users.

Things got even more complicated with the arrival of the internet. Now
text flowed across the network without limits.

To solve this once and for all, Joe Becker, Lee Collins and Mark Davis,
who worked at Apple and Xerox, decided to launch the
[Unicode](http://unicode.org/) project.

Twenty-nine years ago, in August 1988, they published the first draft
of what is known today as Unicode88. In 1989 other companies
such as Microsoft and Sun Microsystems joined the effort. In February
1991 the Unicode Consortium was formed and in October of that year the
first version of the standard was published.

Unicode was developed with the following goals:

- **Universality:** A repertoire large enough to hold
    all the characters likely to be used in multilingual text
    interchange.
- **Efficiency:** The sequences generated must be easy to
    process.
- **Unambiguity:** A given code always represents the same
    character.

So in Unicode we solve the ñ problem once and for all:
the lowercase ñ has code 241 and the uppercase Ñ has code
209, here in Chile, in France or in Greece.

Mr. Carlos Franz can now demand that the problem be solved. It
would be enough to use Unicode in all the state's applications,
right?

In principle the answer is yes, but it's not that simple.

Because the problem with Unicode is that, encoded directly (UTF-32), it requires all symbols
to be represented in 32 bits, that is, they take up 4 times the current
size. That would mean multiplying by 4 the size of the
databases that currently store everything in some variant of the
ANSI encoding (extended ASCII).

That's why three encoding forms were created for Unicode:
UTF-8, UTF-16 and UTF-32, named for the number of bits used to
represent the symbols of the language. The UTF-8 encoding is the most
popular, and each symbol can be represented by 1 or more bytes. It's
what's technically called a variable-length encoding.

The problem with UTF-8 is that our beloved ñ is represented with 2
bytes!

In Unicode the ñ is code 241, which in binary is represented like this:

**0000 0000 1111 0001**

The UTF-8 encoding rules say that since it's a number
greater than 127 it must be encoded using a series of transformations,
which result in our ñ being encoded as
follows:

**1100 0011 1011 0001**

Now, suppose we carelessly send our ñ over the internet
from Chile to France without stating that we're using UTF-8, and the
programmer receiving these texts in France, since 16 bits come in,
wrongly interprets this as UTF-16. In that case his
interpretation would yield this strange
symbol: 쎱

So the lesson here is that the encoding alone isn't enough;
you have to include meta information. Everything is solved if both sides
know they're working with the same
encoding.

And that is what happens with many systems, websites and applications in
Chile.

Handling encoding correctly takes effort. It's complicated,
but it's not impossible. You just need to know everything necessary about
character sets, encoding, transformations, and of course manage your
configurations well and properly control your inputs and
outputs.

That takes, I repeat, effort and having the right skills.

So why do these things still happen, if we've had the solution for
almost thirty years?

Somebody out there said that [we don't need more computer people, what we need is better computer people](https://twitter.com/leosoto/status/893472819505491969).

Computer people who don't pass their own limitations on to
end users.

### **References:**

- Wikipedia: [Unicode](https://es.wikipedia.org/wiki/Unicode),
[ASCII](https://es.wikipedia.org/wiki/ASCII),
[EBCDIC](https://es.wikipedia.org/wiki/EBCDIC)

- Joel on Software, [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
