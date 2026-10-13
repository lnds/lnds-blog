---
title: "Every company is a software company, or will be"
authors: [admin]
subtitle: "Reflections on the nature of software and entrepreneurship"
date: 2016-08-30T08:25:11-03:00
slug: "every-company-is-a-software-company"
draft: false
tags: ['entrepreneurship', 'the nature of software', 'complexity']
image:
  placement: 3
---
In a column titled ["Why Software Is Eating the
World"](//www.wsj.com/articles/SB10001424053111903480904576512250915629460),
published in the Wall Street Journal in 2011,
[Marc Andreessen](//es.wikipedia.org/wiki/Marc_Andreessen) argues that more
and more industries and businesses are run on
software.

Just to take one example, consider Amazon and Alibaba, the two
largest retail companies in the world. In 2015 Alibaba's CEO,
Jack Ma, said:

> "If you want 10,000 new customers you have to build a new warehouse
> and this and that. For me: two servers."

My friends at Continuum have written a series of three articles that
sum all of this up very well, under the name [digital
transformation.](//blog.continuum.cl/transformacion-digital/)

It all starts with an idea that is very simple, powerful and terrible at the same time:

> "Your company is already a software company. Or it will be. Or it will die."

If that's so, what does it mean to transform digitally?
[Continuum's answer is this](//blog.continuum.cl/transformacion-digital/):

> "The pace and nature of change in the digital world presents a
> complex challenge. Digital Transformation means changing deeply in order
> to face that challenge. It means learning to transform and adapt.\
> (And dropping the 'digital' label from things: everything is heading toward digital,
> and it is not a parallel dimension)"

All of these claims are interesting, and they deserve to be
analyzed in light of everything we have written on this blog over all
this time.

August is the anniversary month of La Naturaleza del Software (The Nature of Software): eleven
years of existence. This time I decided to write a special post, a longer
one, to celebrate the birthday.

This concept of digital transformation gives me a good excuse to
revisit an idea I explored a few years ago. This article argues,
in essence, that what Andreessen says is obvious, because in the end everything
is software, so what we are watching is inevitable.

But one thing at a time. Let's take a more fundamental look at all this,
a philosophical one if you like.

## 1) Complexity as an essential difficulty of building software

In the paper ["No Silver Bullet - Essence and accident in Software
Engineering](//worrydream.com/refs/Brooks-NoSilverBullet.pdf)", Fred
Brooks, following the Greek philosophical tradition, identifies
accidental and essential difficulties in building software.

The accidental difficulties, such as techniques, tools,
models and so on, can be solved over time with enough progress in
research.

{{<figure caption="Cover of the April 1987 issue of Computer magazine, where Brooks's paper No Silver Bullet was published" src="//d2dspjyoh5c79p.cloudfront.net/5db040e0-6e5b-11e6-aecf-c1145ad981b8-aa9f18b7">}}

The essential problems are unsolvable by definition. Brooks
identifies four essential difficulties in building software:
**Complexity, Conformity, Changeability** and **Invisibility**.

- **Complexity**. Software entities are more complex for their
size than any other human construct, because no two parts are
alike. If they were, we programmers would take care of
merging the two similar things into one: a subroutine, a function, an
object or a component. We are always grouping similar things together, and so,
paradoxically, software only grows in complexity.
Computers, phones and all the digital devices we have
built have an enormous number of possible states. Software
systems have orders of magnitude more states than any
computer. And the problems are not only technical; problems of
managing this complexity come up too.

- **Conformity**. Scientists face complexity as well,
as we will see further on. Physics deals with objects of great
complexity even at the level of elementary particles; just look at
the enormous efforts to understand them, embodied in enormous structures
like the Large Hadron Collider at CERN. The most
complex machine ever built. But physicists look for
simplified explanations of nature, expressed in laws that human beings can
understand (even if only a few individuals have access to them). The
software engineer cannot count on the physicist's hope,
because much of the complexity is arbitrary, forced by the regulation
that must be met or by conformity with the interfaces of external
systems, designed by other people or institutions.

- **Changeability.** There is constant pressure to
introduce changes. The same happens with physical objects, such as cars,
buildings or computers. But manufactured things are rarely
modified after they are built. They are replaced by later
models. Change in the world of material objects is less
frequent than in software. Partly because software embodies its
function, and function is the part that most feels the pressure of change.
After all, software is pure thought and therefore
infinitely malleable. Change is also a product of software's
success. When a system is useful, its users try it on new
cases, pushing it to the extreme, to the edges of the original domain. The
user wants changes to fit it to the new uses of the software.
On the other hand, software outlives the normal life of the
infrastructure that supports it. In Brooks's paper the author only
mentions physical infrastructure (computers, printers), but today
it is worse: the operating system, the databases, the middleware that
supports the software all evolve too, and the system has to survive
those changes.

- **Invisibility.** Software is invisible and unvisualizable. The
reality of software is not embedded in physical three-dimensional
space. When we draw diagrams of software structure we start
dealing with a series of graphs that may represent the flow of
control, the flow of data, the dependencies between components,
time sequences, and so on. Many of these representations are not
planar, and not even hierarchical. In the end the only faithful
representation is the code, and we know that those able to read it and
understand it are very few, and in some cases only with a lot of effort.

Finally, we can observe that complexity really only increases,
and that the other three essential difficulties are consequences of it
while also adding to the complexity.

So our discipline is about developing techniques for
dealing with complexity.

When someone says "the pace and nature of change in the digital world
presents a complex challenge", what they are doing is picking up this
essential difficulty Brooks talks about. Changes in the digital
world, the world whose foundations are in software,
will always present complex challenges.

## 2) What is complexity?

When we say something is complex we mean to suggest that it is the inevitable
result of combining its elements, and that this implies no fault or
failure, as when we say "this recipe is complex".

The term "complicated", on the other hand, we apply to whatever is
very hard to understand, solve or explain, for example "a
complicated court case".

Recall the Mandelbrot Set, shown in this image:

![](//d2dspjyoh5c79p.cloudfront.net/9a7fba51-6e5b-11e6-aecf-c1145ad981b8-aa9f18b7)

This is undoubtedly a complex image. It is a fractal,
a geometric figure with the peculiar property called
*self-similarity*, which tells us that if we zoom in on some of
the parts of the image we will get images as beautiful and complex
as this one, but those images will be similar to the original. We say
this is a complex image because it has infinite
detail.

And yet, for mathematicians, the information contained in this
set is essentially zero.

We can define the Mandelbrot set with a short mathematical
relation; we can even write a program that computes the
set in fewer than 50 lines of code (depending on the programming
language).

The original image above is 800 x 600 pixels, and each pixel holds
24 bits of information; that is, if we store the image in a
file, it will contain 11,520,000 bits. Yet the program,
written in C, that describes this image will take up barely 64,000 bits or so.

The Russian mathematician [Andrei Kolmogorov](//en.wikipedia.org/wiki/Andrey_Kolmogorov) invented the
concept of Descriptive Complexity, or Algorithmic Entropy, to try
to measure the computational resources needed to describe an
object.

For example, look at these two strings of letters:

> abababababababababababababababababababababababababababababababab
> 
> 4c1j5b2p0cv4w1x8rx2y39umgw5q85s7uraqbjfdppa0q7nieieqe9noc4cvafzf

Both have the same length, 64 characters. However, the first
string can be expressed as "ab 32 times", in just 11 characters.
For the second string, though, there seems to be no shorter way
to represent it than writing it out in full.

Kolmogorov would say the first string is less complex than the second.

Now, back to the Mandelbrot set. It turns out that the program that
computes the points of the set has a parameter, which sets
the number of iterations needed to determine the next pixel
to draw. If we choose to draw a more detailed segment of the Mandelbrot
set, in other words to zoom in, this parameter has to be
larger, which means the computer spends more time and resources
generating the detail of a deeper part of the set. Clearly,
the definition of algorithmic complexity, taken as the length
of the program, does not reflect the actual CPU usage in this problem.

The question is whether this definition of complexity is adequate. Because by
Kolmogorov's notion the Mandelbrot set is not a
complex thing, and we have already seen that in terms of computational cost
(energy spent, processing time) it does not seem simple.

On the other hand, a random object, like the string
"4c1j5b2p0cv4w1x8rx2y39umgw5q85s7uraqbjfdppa0q7nieieqe9noc4cvafzf",
has a very high (or maximal) Kolmogorov complexity, yet it is not
a very attractive thing to study.

A television showing nothing but static is not very interesting; in
the end it is just plain noise, but that random noise is complex in
information terms, if we follow Kolmogorov's idea.

## 3) The simplicity of the laws of nature

> "Without mathematics we cannot penetrate deeply into
> philosophy. Without philosophy we cannot penetrate deeply into
> mathematics. Without both we cannot penetrate deeply into anything." -
> Leibniz

[Gregory Chaitin](//en.wikipedia.org/wiki/Gregory_Chaitin), studying
the same notions of complexity as Kolmogorov, found in the
works of [Leibniz](//en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz)
one of the earliest treatments of complexity.

In the ["Discourse on Metaphysics"](//www.libroesoterico.com/biblioteca/metafisica/Leibniz%20Discurso-de-Metafisica.pdf),
Leibniz wonders about the nature of the "experimental data"
represented by some ink blots spilled on a piece of
paper.

Consider the finite set of points obtained this way, and
ask whether it obeys a natural law. Well, for Leibniz it is not
enough that there be a mathematical equation passing through all the
points, because such an equation always exists. The set of points
obeys a law only if there is a simple equation that passes through all the
points.

Another example of this philosopher's concern with complexity
shows up in 1714, when in his work
["Principles of Nature and Grace"](//profesorvargasguillen.files.wordpress.com/2011/10/leibniz-principios-de-la-naturaleza-y-la-gracia.pdf)
he asks, "why is there something rather than nothing, if nothing is
simpler than something?".

In modern terms, what the rationalist philosopher wants to know is
where the complexity we observe in the world comes from. For Leibniz the
answer is God. God has created the best possible world, and all the
richness and diversity we observe in the universe is the product of a
simple, beautiful and elegant set of ideas. God maximizes the richness of the
world while minimizing the complexity of the laws that
determine it. In modern scientific terms, the world is intelligible,
comprehensible, and science is possible, because there is a law that can
be understood.

The cosmologist Max Tegmark argues that it is simpler to consider an
ensemble of all possible laws and all possible universes than
to consider one universe in particular. In other words, the multiverse
is more fundamental than the question about the laws of our particular
universe. To illustrate the idea, the set of all positive
numbers 1,2,3,... is very simple, even though a particular positive number, like
12478329212991232, can be arbitrarily complex.

That is, it is simpler to think about the multiverse than to try to
justify the complexity of our universe. All possible universes
exist, and there is nothing special about ours if we look at it
from that perspective; it looks complex, and special, simply
because we live in it.

But back to Leibniz. In the
**[Monadology](//es.wikipedia.org/wiki/Monadolog%C3%ADa)** Leibniz
discusses how a mathematical proof is carried out. There he notes
that to prove a complicated statement you break it down into simpler
statements, until you reach propositions so simple that they are
self-evident and need no proof.

Various epistemologists have analyzed Leibniz's ideas, and have
observed that this crucial idea of complexity in Leibniz is something very
hard to pin down. How do we measure the complexity of an equation, and
therefore the complexity of natural laws?

If we propose the length of the equation as a measure, that is something that
changes over time. Besides, what are the basic elements an equation
must have? If nature is to be governed by simple laws,
as Leibniz demands, we have to know how to measure the simplicity
of those laws. Well, Chaitin has a proposal.

## 4) The universe is digital

We have just seen that Leibniz holds that nature must obey
simple, beautiful and elegant laws, that is, comprehensible laws; otherwise
science is not possible. The philosophical problem is knowing what we mean
by simple laws: the simplicity of the equations that describe them?
And what about all the prior knowledge you need in order to
understand those equations?

{{<figure caption="Electric Sheep 10679 - Generation 245 - Original art by [Scott Draves](//scottdraves.com) and [The Electric Sheep](//electricsheep.org)]" src="//d2dspjyoh5c79p.cloudfront.net/52f81cd4-6f1f-11e6-aecf-c1145ad981b8-aa9f18b7">}}

In the 1960s three mathematicians, Solomonoff, Kolmogorov and
Gregory Chaitin, proposed Algorithmic Information Theory, or
AIT (Chaitin was a teenager when he formulated these ideas).

According to some, AIT gives a precise answer to the definition of law
demanded by philosophers of science. That answer is obtained by
changing the context. Instead of considering experimental data
to be points, and laws to be equations, in AIT everything becomes
digital, everything turns into combinations of 0s and 1s. For AIT a law
of nature is a piece of software, a computer algorithm, and
instead of trying to measure the complexity of the law by the size of the
equations, we consider the size of the programs, the number of bits
in the software that implements our theory.

This is expressed in the following diagram:

> Law: Equation → Software,\
> Complexity: Size of the equations → Size of the program, Bits of
> software.

For Algorithmic Information Theory, scientific work is
modeled like this:

> Theory (01100...11) → COMPUTER → Experimental Data (110...0).

In this model, both the theory and the data are finite strings of bits.
A theory is the software that explains the data, and this means the
software produces or computes the data exactly, without errors. In
other words, in this model a scientific theory is a program whose
output is the data: self-contained software, with no
input at all.

Compared with Leibniz's observations, where there is always the
possibility of obtaining a complicated equation for any
arbitrary set of data, in this model there is always a theory with the same
number of bits as the data it explains, because the software can always
contain the data it is trying to compute as a constant, thereby
avoiding any computation. In that case there is no law; it is not a real
theory. In this model we say the data follows a law, that is, can
be understood, only if the program to compute it is smaller than the
data it is trying to explain.

In Chaitin's words: "understanding is compression, comprehension is
compression, a scientific theory unifies many seemingly
disparate phenomena and shows that they reflect a common underlying mechanism".

If the world we observe, the complexity we observe, is the product
of the laws of nature, and those are software, then everything is
understandable through software.

If that is so, then the best theory is the one with the shortest
program that produces, precisely, the observed data. This would be the
version of Occam's Razor in terms of algorithmic
information theory. With these notions we can define complexity in
mathematical terms, and start proving things about the laws
of nature.

The first thing you notice is that most finite bit strings have no
laws; they are algorithmically irreducible, they are random in the
sense we have defined, because there is no theory smaller than the
data itself. That is, the smallest program that produces the
output is the same size as the output.

The second thing you notice is that you can never be sure you have
found the best theory. To understand that, we need
to get better acquainted with one of the great achievements of logical thought.

## 5) The limits of what we can know

> "As we know,\
> There are known knowns.\
> There are things we know we know.\
> We also know\
> There are known unknowns.\
> That is to say\
> We know there are some things\
> We do not know.\
> But there are also unknown unknowns,\
> The ones we don't know\
> We don't know."\
>    - Donald Rumsfeld

Consider this image:

![](//d2dspjyoh5c79p.cloudfront.net/68161442-6e5d-11e6-aecf-c1145ad981b8-aa9f18b7)

If Pinocchio says his nose will grow, but it doesn't, he would be
lying; but when Pinocchio lies his nose grows, and if his nose
grows then he would be telling the truth. So what the hell is supposed
to happen after Pinocchio says that sentence?

This is a restatement of the old Liar Paradox. The
interesting part is that this paradox plays a fundamental role in the
solution of an important problem in mathematical logic, and along the way in
the development of modern computing.

In the late 19th and early 20th centuries, the formalist school
was a group of mathematicians who took the following statement
as fundamental:

"Mathematics is a game ---devoid of meaning--- that one
plays with meaningless symbols according to formal rules
established beforehand".

David Hilbert, a German mathematician trained in this school of
thought, was annoyed by the paradoxes that kept appearing
in the works and attempts at axiomatizing mathematics in those
days, such as Russell and Whitehead's monumental
"Principia Mathematica". This three-volume magnum opus captured the
tremendous effort of these two thinkers, years of work, which
reaches its peak when on page 379 of the first volume the proof
that 1+1 = 2 is set up, a proof that is only completed on page
86 of the second volume!

Hilbert was a strong-willed man who refused to consider
that the mind might have any kind of limitation. In 1880 the German physiologist and
psychologist Emil du Bois-Reymond argued, in a famous lecture at the
Berlin academy of sciences, that there are problems neither science nor
philosophy could ever solve. He summed this up in the Latin
phrase "Ignoramus et Ignorabimus" ("we do not know and we will not know").

For Hilbert that view was wrong. In 1930 he replied:

> "We must not believe those, who today, with philosophical bearing and
> deliberative tone, prophesy the fall of culture and accept the
> ignorabimus. For us there is no ignorabimus, and in my opinion none
> whatever in natural science. In opposition to the foolish ignorabimus
> our slogan shall be Wir müssen wissen --- wir werden wissen!
> ("We must know - we will know!").

What the famous mathematician did not know is that while he was speaking
those words a quiet Austrian colleague was tearing his whole program apart
with a brilliant theorem.

In 1920 Hilbert had proposed a research program to
resolve the paradoxes of mathematics and establish a formal system
that would give the discipline solid foundations.

Hilbert asked that mathematics have, among others, these
attributes:

> \- **Formalism**: all mathematical statements
> should be written in a precise, formal language, and manipulated
> according to well-defined rules.
>
> \- **Completeness**: a proof had to be given that all
> mathematical statements can be proved within the formalism.
>
> \- **Consistency**: Hilbert asked for a proof that no
> contradiction can be obtained within the formalism of mathematics.
>
> \- **Decidability**: there should be an algorithm for deciding the truth or
> falsity of any mathematical statement.

Kurt Gödel threw out the first three attributes Hilbert asked for:
it is not possible to fully formalize mathematics, and therefore
it cannot have the property of completeness, and on top of that it cannot be
consistent. To do this he used a variant of the liar paradox.

In essence, what Gödel did was formulate a proposition that says "This
proposition is unprovable". If the proposition is unprovable,
then it is true, and therefore the formulation of arithmetic is
incomplete (because there is an unproved proposition); on the other hand, if
the proposition can be proved, that is, it is false, then the
formulation of the theory is inconsistent. Gödel's proof involves
building a sort of logical machine, a rudimentary
computer that writes logical statements following certain rules.

The fourth attribute is known as the decision problem, or
Entscheidungproblem. What Hilbert asks for is a mechanism
that determines whether a given statement is valid within a
formal system, or whether there is a way to decide if a mathematical
statement can be proved from a set of axioms by
following the rules of logic.

The answer given first by Alonzo Church, and independently
and very shortly afterward by Alan Turing, was that it was not
possible. And with those results Hilbert's program failed.

Turing later went to study with Alonzo Church and they showed that
both proofs were equivalent. What was new about Turing's method is that
to develop his proof he built an ideal machine that simulates the
states we go through when we reason mathematically.

This machine is really the description of a computer program;
Turing found a way to build the hardware and the software into the
same idea. The hardware that serves as the substrate for the instructions
contained in the software.

The results of Gödel, Church and Turing reach far beyond number
theory and arithmetic, thanks to the precise introduction of the
concept of the computational algorithm. Today Gödel's
theorem is considered applicable to every formal axiomatic system, and by
extension the results of Turing and Church also set a limit on
our computational capabilities.

## 6) Knowledge and innovation

The famous economist, and staunch defender of classical economic
liberalism, [Friedrich Hayek](//en.wikipedia.org/wiki/Friedrich_Hayek)
claimed that Gödel's Theorem is nothing but a special case of a
more general principle, one that applies to all conscious processes and in
particular to all rational processes: the principle that
among their determinants there will always be rules that cannot be
stated, or that are even unconscious.

[Michael Polanyi](//en.wikipedia.org/wiki/Michael_Polanyi), the great
Hungarian-born thinker and naturalized British citizen, draws the limit on
our ability to articulate human knowledge based on
Gödel's discovery.

Polanyi denies the possibility of reaching the truth mechanically
by following the scientific method. All knowledge, no matter how
formalized, relies on commitments.

Polanyi argues that the assumptions underlying critical philosophy
are not only false, they undermine the commitments that motivate our
highest achievements. He argues that we should recognize that we believe more than
we can prove and know more than we can say.

A knower does not stand apart from the universe, but participates personally
in it. Our intellectual skills are driven by passionate
commitments that motivate discovery and its validation. For Polanyi,
a great scientist not only identifies patterns, but also chooses
significant questions likely to lead to a successful
resolution.

Innovators risk their reputation by committing to a
hypothesis. Polanyi gives the example of Copernicus, claiming that he arrived
at the Earth's true relation to the Sun not as a consequence of
following a method, but via "the greater intellectual
satisfaction he derived from the celestial panorama as seen from the Sun instead
of the Earth."

For Polanyi, our tacit awareness connects us, though
fallibly, with reality. Unlike his colleague and friend Alan Turing,
Polanyi rejected the idea that minds could be reduced to a
set of rules. Polanyi argues for the concept of Emergence, the idea
that there is a process through which larger entities, patterns or
regularities arise from smaller, simpler entities that do not
exhibit the same properties.

Polanyi claims there are several levels of reality and causality. This idea
rests on the assumption that boundary conditions supply degrees of
freedom which, instead of being random, are determined by
higher-level realities, whose properties depend on, but are
distinct from, the lower levels from which they emerge. An example
of a higher-level reality acting as a causal force
downward is consciousness generating meaning
(intentionality).

## 7) Entrepreneurship and incompleteness

The famous incubator [Y-Combinator](//www.ycombinator.com/), founded by
the programmer and entrepreneur [Paul Graham](//en.wikipedia.org/wiki/Paul_Graham_(computer_programmer)),
takes its name from the [Y fixed-point combinator](//en.wikipedia.org/wiki/Fixed-point_combinator#Fixed_point_combinators_in_lambda_calculus),
which is used to build recursive functions.

It so happens that the first person to create recursive functions was Gödel.
The idea of the fixed-point combinator derives directly from
Gödel's work. Why did Graham decide to give that name to a business
incubator? Because in essence Y-Combinator is a program that runs other
programs. But there is a more interesting relationship between entrepreneurship and
Gödel's theorem.

To understand it, consider this example, which we will borrow from
Max Skibinsky, a hacker and former partner of Marc Andreessen.

(Source:
[http://skibinsky.com/godel-incompleteness-for-startups/](//skibinsky.com/godel-incompleteness-for-startups/))

Picture the Ultimate Monopolist, who wants to find every way of
extracting money and value from the global market and keeping it inside his
commercial empire. He is like Bill Gates on steroids. What would
his "formal system" of economics and business be? Anything he
wants: the entire United States Library of Congress, or every
issue of The Economist since the dawn of time. Every
economics treatise ever written, from clay tablets to
online editions.

He can have all the formal and expressive systems he wants,
taking care to add them in a way that avoids contradictions.
He can load this knowledge into a googolplex of computers to
compile and analyze the data and obtain the full list of true
statements derived from this system. In effect, he would obtain every
way of making money, of creating lucrative new startups, and every
way of generating value. What's more, this gentleman has all the money
needed to set those startups up and turn them into operating
businesses.

In other words, our Ultimate Monopolist will stop at nothing to
grab any promising business idea for himself, and
will throw almost all of his unlimited resources at the opportunity. This
description is not far from reality when you think of Apple,
Alphabet (Google), Facebook and Amazon. These companies have built
impressive semi-formal systems over the years they have been
operating. Those systems are optimized for one thing: how to extract
maximum market value from technological innovation. Their systems
are immense: program source code, marketing guides,
"playbooks", hiring guides and countless documents. This is
the system their employees collectively use in their daily work, and
it is how new recruits get trained. And on top of all this
there are tens of billions of dollars in the bank, as needed
to act on any conclusion their semi-formal systems
turn up.

And still, despite all that powerful formalized knowledge, again and
again innovative startups appear out of nowhere. They always catch the
incumbents blind at some spot and make them pay billions of
dollars to acquire these new discoveries. Whether it's Alphabet or
Facebook, any of them would love to hit on these ideas first and
capture all the profit from these innovations for themselves, instead
of having to pay millions to acquire a disruptive startup. So why
can't they? What keeps these powerful
companies from reaching a market cap in the trillions and beyond is
Gödel's theorem.

What Gödel showed is that any kind of Ultimate Monopolist
is doomed to lose. There are true statements in his system, that
is, there are new startup ideas and business models, that can never
be proved within his formal system, however
broad it may be. No matter how many libraries of knowledge get
added to his system, how much computing power gets added to the
formal discovery system, he will still never, ever discover all the
true statements (that is, the profitable models) of his formal
system. The Ultimate Monopolist will always lose in the end because he cannot
cover all the statements. He will never be able to complete his money-making
Empire.

## 8) Business and software

History is a process of creating formal systems that serve a
specific purpose. From the Code of Hammurabi to the terabytes
of information that let Facebook predict your interests and
show you relevant news and ads.

This creation of formal systems has to make some trade-offs,
good-enough simplifications of an infinite variety,
while trying to capture and preserve the complexity of the domain
being modeled. The only way we have of getting through life is by
simplifying the world around us; it is the personal knowledge
Polanyi talked about.

All the rules, mental models, conventions, labels, practices
and so on have been developed for the simple purpose of trapping
infinite complexity inside a simple abstraction we can
deal with. It is our brain's way of taking shortcuts so as
to have a finite model of reality, rather than infinite reality
itself (could it be that Chaitin's ideal is impossible and in the end
reality is completely random and therefore ungraspable?).

What Gödel, Turing and others proved so decisively is that
we will never have ideal systems. All our applications, programs
and systems will never capture the full variety of infinite possibilities.

Despite all their limitations, formal systems, and by
extension software, are absolutely necessary objects for modeling the
world. Our brains can only operate with a small, limited
number of axioms and simple rules. That is how we operate.
But even so, the first step toward avoiding mistakes is recognizing the
natural limitations of formal systems, namely that they will never be able
to represent reality completely.

A company is a semi-formal system for extracting money from the market.
Startups can skip the part about turning a profit for
a few years, but in the end what separates the winners from the
losers is the ability to get enough profitability out of the business
model they have discovered or developed.

Recall the case of Microsoft. At the end of the second millennium it was, for
all practical purposes, a technology monopoly. This company's system of
organized knowledge in 1998 would span thousands of
printed pages, impossible for one person to master. At that point,
and given the size of the company, all sorts of guides were needed for the
employees of each division: How do you sell OEM licenses? How do you improve
Office so as to keep competing operating systems out
of the market? And so on. With tens of thousands of rules Microsoft was in a
unique position to extract astonishing margins from its dominant position
in operating systems and office software.

Imagine for a moment that a time traveler from the future appears
before Bill Gates in 1999 and tells him:

> "I'm from the future! You should sell keywords to match
> search queries!"

What would Bill Gates do with this information? The syntax of the
request is familiar; he knows what a web search is and
what keywords mean. There are a few search companies
out there, like Lycos and Altavista, but their market cap is less than
Microsoft's soda budget. They are struggling
companies. Why sell search keywords?

Whatever Bill looks up in his semi-formal system, or whatever he
asks his experts, will be incomplete. The probability that the
statement proving that selling search keywords pays off turns out
true is very low, despite all the information available to
Bill Gates. His system at the time covered the domains of hardware
sales, computers, OEM sales and software.

Google's model is impossible for Microsoft to analyze.

It falls to Larry Page and Sergey Brin to formalize the system of
web search and keyword sales. The founders start out
with their imagination and the dream of "organizing the world's
information". As this statement turns out to be very profitable, a cascading
process of formalizing this domain begins. New terms and axioms
get added to Google's system.

Time passes, and in 2003 our time traveler appears before Larry
Page with new prophetic words:

> "I'm from the future! You should organize social friends graph
> between all people!"

Larry examines his formal system, he can also access Microsoft's formal
system from the nineties, and even so neither of the two systems is
able to explain the meaning of the prophecy. There are a few social
networks out there, Friendster and MySpace; their market cap is less than
Google's sushi budget. Larry understands the syntax of the
suggestion, but lacks the tools to prove the profit
in this new business model.

It is Mark Zuckerberg's turn to formalize the system around building
social graphs and finding optimal ways to extract value from them.
We could go on like this, both into the future and into the past (although a trip
back to the days of Tesla and Edison has the additional problem that
you would have to explain the syntax to those innovators so they could
understand concepts like the personal computer or the internet).

## 9) Every company is a software company, or will be

> "You think you know when you can learn, are more sure when you
> can write, even more when you can teach, but certain when you
> can program." - Alan Perlis, epigram 116

We have seen how the concept of Complexity took us on a journey to
the foundations of human knowledge. We learned that there are limits to
what we can know, but paradoxical as it may seem, this very limitation is
the source of all disruptive innovation.

If we look at how today's big companies have developed, we will see that
among the largest and best-resourced in the world, that is, those with
the highest market cap, are technology companies such as Apple,
Alphabet, Amazon and Facebook.

This is a trend that will keep going for the simple reason that
these are the companies best positioned to build
semi-formal systems for discovering business opportunities.
They not only have vast resources, but also vast databases and
knowledge systems that let them explore new business
models, within the limits of Gödel's Theorem, of course.

However, we have found that it is possible to find spaces not
covered by these vast formal systems. That is the space of
innovation. The blind spots these companies cannot cover are
the ones that offer the opportunities to create value.

Since, as we have seen, the need to understand, to grasp the
complexity of the modern world, requires formal systems of
information and rule inference that make it possible to operate within the
domains of each market, the obvious conclusion is that the
ability to build these formal systems is essential to the
survival of the modern company. That ability is the ability to
build and control software.

So when our friends at Continuum claim that:

> "Your company is already a software company. Or it will be. Or it will die."

They are making explicit the conclusion of this long article. Everything is
software, and therefore every company is.

The challenge lies in knowing how to develop software; that will be one of the
core competencies of every successful company of the future. But, as
we have seen, developing software means dealing with complexity.

On the other hand, reality changes and cannot be encompassed by our
formal models of the world. We know, by Gödel's Theorem, that we will never
be ready to fully understand and model all the
business opportunities that come our way. Recognizing this
limitation is what prepares us to face the challenge of
digital transformation. Transformation and adaptation to change
consist precisely in extending or developing new formal systems
to overcome these limitations.

What I have tried to show in this article is that behind the concept
of digital transformation there are deep epistemological foundations,
and knowing them is not only interesting and enriching, it also gives a
new perspective on this vision of business development.

---

Title image credits: "Electric Sheep - Generation 245 -
Sheep 6221".  Original art by [Scott Draves](//scottdraves.com) and
the [Electric Sheep](//electricsheep.org).
