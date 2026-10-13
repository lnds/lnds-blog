---
title: "Two men and a universal machine"
authors: [admin]
subtitle: "Turing, von Neumann and the origin of computers"
date: 2011-04-17T08:25:11-03:00
slug: "two-men-and-a-universal-machine"
tags: ["computer", "Feynmann", "Turing", "Von Neumman", "history", "computing"]
draft: false
---

## **The universal machine**

{{<figure caption="Alan Turing, the father of computing" src="Alan_Turing.jpg">}}

In 1936 a young man of 24, Alan Turing, decided to reformulate certain
results of mathematical logic by expressing the statements of theorems in
terms of algorithms that could be interpreted by a theoretical machine. An
algorithm is "*a prescribed set of well-defined, ordered and finite
instructions or rules that makes it possible to carry out an activity
through successive steps that leave no doubt for whoever has to carry out
that activity.*"  What Turing wanted was to study the limits of machines
that performed automatic calculations. It was a time when the foundations
of what computers would be were being laid. The elements needed to build
these machines were already available, and Turing wanted to see how
powerful these machines were. How far these machines would be able to help
us solve complex problems. Turing described a theoretical machine that
manipulates the symbols written on a long tape according to a table of
rules. The Turing machine consists of a head that can read and/or write on
an infinite paper tape. The machine can perform only the following
operations: move the head to the right, move the head to the left, read
the contents of a cell on the tape, erase the contents of a cell, and
write on the tape.

{{<figure  caption="Artist's rendering of the Turing machine" src="Maquina-de-Turing.png">}}

With such a simple device Turing succeeded in his effort. He not only laid
the theoretical foundations for building these machines, he also
formalized the concept of the algorithm, which would lead to the
development of programming languages, discovered the way to determine the
complexity of the problems that a machine of this kind can tackle, and
even proposed a kind of test to check operationally whether a machine is
intelligent, the famous
[Turing Test](http://es.wikipedia.org/wiki/Test_de_Turing).

It is from Turing's work that we have the concept of a universal machine,
capable of solving any problem. A machine that is able to emulate many of
our mental processes. Turing thought that one day it would be possible to
discover the algorithms that govern the way we are and think, and that
this could be transferred to a machine.

Controversial as it is, this idea has been the engine behind much of the
development of artificial intelligence. Personally I think Turing was
wrong about it, and probably, as
[Jaron Lanier argues](http://www.edge.org/3rd_culture/lanier/lanier_index.html),  the
traumas and troubles of
[Turing's personal life](/en/blog/lnds/2011/03/01/galeano-on-alan-turing/)
were what drove this obsession of the great English logician.

This concept of the **universal machine** became real, and today we have
computers everywhere: in the refrigerator, in our televisions, in the car
and in our mobile phones. They all have a computer, a universal Turing
machine that governs their actions, that decides algorithmically how to
react to each new stimulus they pick up from the outside.

## **Enigma and the war that changed everything**

{{<figure caption="The Enigma machine" src="Enigma.jpg">}}

During the Second World War Turing became involved in a secret,
high-impact project, considered so important that a large part of the
outcome of the war, and the final defeat of the Nazis, is said to be owed
to the work of this select team of scientists. During that time Turing and
the team at
[Bletchley Park](http://www.bletchleypark.org.uk/) worked on deciphering the
secret messages of the German army. In those days the German forces had
very powerful encryption machines, such as
[Enigma](http://en.wikipedia.org/wiki/Enigma_machine) and the
[Lorenz](http://en.wikipedia.org/wiki/Lorenz_SZ_40/42) machine. The Enigma
machine was used mainly by the navy and the famous German U-boats. The
Hut 8 group was in charge of decoding these messages, and Alan Turing was
in charge of it.

During that time the Bletchley Park team built a series of machines to
help with the automatic deciphering of the messages picked up by the
intelligence services.

Among the machines the English built was the Colossus Mark 2, probably the
first semi-programmable digital computer.

{{<figure caption="Colossus Mark II" src="Colossus.jpg">}}

Much of the work of these machines was kept secret for years, and for that
reason they were ignored for a long time.

In those days the English developed a series of computers, and Turing
himself worked on the development of some of them.

All the computers of that time were programmed by wiring. The
revolutionary concept came from the other side of the Atlantic and laid
the foundations for the structure of modern computers.

Remember that at the time the Americans were developing the famous
Manhattan Project, which would lead to the creation of the first atomic
bomb.

## **Feynman's human computer**

Richard Feynman tells how they needed to do complicated mathematical
calculations, and while they had no computer they decided to do them with
the help of human staff:

> "We worked out the program, but we didn't have any machine to test it
> on. So we set up this room with girls in it. Each one had a Marchant \[a
> calculator\]. But
> *she* was the multiplier, and *she* was the adder, and this one cubed,
> and we had index cards, and all she did was cube this number and send it
> to the next one. This one played the multiplier, the next one played the
> adder; we went through the cycle, we got all the bugs out. Well, that's
> how we did it. And it turned out we could do it at great speed. Nobody
> had ever done mass-production calculating before; everyone who had ever
> done calculations before had done all the steps himself. But Ford[^*] had
> a good idea, the damn thing worked a lot faster than the other way, and
> we got speed with this system that was the predicted speed for the IBM
> machine: exactly the same."

[^*]: He is referring to Henry Ford and his idea of mass production.

{{<figure caption="John von Neumann at Los Alamos" src="JohnvonNeumann-LosAlamos.gif">}}

Among the men who were at Los Alamos at the time was a brilliant
mathematician of Hungarian origin: John von Neumann. Considered a hawk,
for his political views and his involvement in the development of atomic
weapons (such as the hydrogen bomb), John von Neumann established the
first effective architecture for building computers that could be
programmed effectively, that is, without so much *wiring*.

The main idea von Neumann proposed was that data and programs should both
be stored in the computer's main memory.

The von Neumann architecture is described in the paper
"[The first draft report on the EDVAC](https://qss.stanford.edu/~godfrey/vonNeumann/vnedvac.pdf)" and
it is, essentially, the architecture used by most of the computers we use
today:

{{<figure src="420px-Von_Neumann_architecture.png">}}

Von Neumann established that memory is a single unit containing the
program and the data the computer will act on. There is a module he called
the control unit (CU) that reads the instructions from memory and executes
them one by one. Another unit, called the arithmetic logic unit (ALU),
takes care of the calculations. The ALU reads the data for a calculation
and writes the results to memory. Together the control unit (CU) and the
arithmetic logic unit (ALU) make up the Central Processing Unit
(**CPU**). To communicate with the outside world the CPU is connected to
input devices (INPUT), such as keyboards, sensors, mice, disk drives,
etc., and to output devices (OUTPUT) such as screens, printers, speakers,
etc.

**The different fates of two remarkable men.**

Although the contributions of Turing and von Neumann were fundamental to
the development of computers, you could not imagine two more different
characters.

Von Neumann mainly developed computers to improve the calculations needed
to develop the atomic bomb. Although he made remarkable contributions to
mathematics and computer science. He helped develop the Monte Carlo method
and several simulation techniques with pseudorandom numbers (the random
number algorithm we use in our game comes from this mathematician's work).
He is probably the scientist who most influenced the establishment of the
concept of
[mutual assured destruction](https://es.wikipedia.org/wiki/Estrategia_de_las_armas_nucleares),
which set the nuclear balance between the superpowers during the Cold War.
He favored the idea of a preventive nuclear strike on the Soviet Union to
keep that power from acquiring the atomic bomb. Von Neumann died of
cancer. His biographers have written:  "when von Neumann realised he was
incurably ill, his logic forced him to realise that he would cease to
exist, and hence cease to have thoughts...*His friend Edward Teller said,
'I think that von Neumann suffered more when his mind would no longer
function, than I have ever seen any human being suffer'. Von Neumann's
sense of invulnerability, or simply the desire to live, was struggling
with unalterable facts. He seemed to have a great fear of death until the
last... No achievements and no amount of influence could save him now, as
they always had in the past. Johnny von Neumann, who knew how to live so
fully, did not know how to die."

Alan Turing went on doing research on various subjects. In 1952 he wrote
[a chess program](/blog/lnds/2008/01/18/ajedrez),
but it was impossible to run it on any computer of that era, and he acted
as the human CPU. He devoted his last years to mathematical biology,
trying to understand why sequences of Fibonacci numbers appear in plant
structures. Alan Turing was homosexual, a condition that was condemned in
the England of the 1950s. During the investigation of a complaint he
himself had filed over a burglary, he had to confess his homosexuality,
and the accuser became the accused, charged with "gross indecency and
sexual perversion". The choice was to go to prison or undergo hormone
treatment, which included estrogen injections that caused him to grow
breasts, along with impotence and other ailments. In 1954 he died of
cyanide poisoning after eating an apple. The act is officially considered
a suicide, but his mother insisted for many years that it was an accident.

## **Recommended reading**

-   [The Annotated Turing: A Guided Tour Through Alan Turing's Historic Paper on Computability and the Turing Machine](http://www.amazon.com/gp/product/0470229055/ref=as_li_tf_tl?ie=UTF8&tag=lanaturaledel-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0470229055) by Charles Petzold, for understanding Alan Turing's original paper.

-   A history of the Enigma machine can be found on this site: [Kriptópolis, the Enigma machine](https://www.kriptopolis.org/la-maquina-enigma)

-   [This video](/en/blog/lnds/2010/06/12/the-turing-machine-explained-by-turing-himself/)
    is a clip from the film [Breaking The Code](http://www.imdb.com/title/tt0115749/), where Turing explains the concept behind the Turing machine.

-   A biography of von Neumann can be found [on this site](http://www.astroseti.org/articulo/4101/biografia-de-john-von-neumann), from which we took some quotes.

-   "El Placer de Descubrir" (The Pleasure of Finding Things Out) by Richard Feynman, Editorial Crítica,
    Barcelona, 2000.
