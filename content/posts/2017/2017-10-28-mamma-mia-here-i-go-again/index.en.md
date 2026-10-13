---
title: "Mamma Mia, here I go again"
authors: [admin]
subtitle: "9 challenges in 9 languages (4 of 9), part 8"
date: 2017-10-28T08:25:11-03:00
slug: "mamma-mia-here-i-go-again"
draft: false
tags: ['rock', 'programming languages', 'challenges', 'erlang']
image:
  placement: 3
---
Sweden, the land of Volvo, Electrolux, H&M, Ericsson, Bluetooth and, of
course, ABBA.

In the seventies, ABBA was the best-selling band on the planet. Legend
has it that ABBA accounted for a sizable chunk of Sweden's GDP, which is
highly unlikely, because Sweden was already a very prosperous country
back then.

Agnetha, Björn, Benny and Anni-Frid shot to world fame in 1974, after
winning the Eurovision Song Contest with the smash hit Waterloo. In this
video you can watch their Eurovision performance, in a very glam style,
which was all the rage at the time:

{{<youtube 3FsVeMz1F5c>}}
ABBA at Eurovision 1974

The beauty of Agnetha and Frida is what I remember most about this group
from my childhood, because my father was an ABBA fan, so we listened to
their songs almost all the time. As a teenager I tried to get away from
that kind of music, but it was too late. Despite my resistance, the ABBA
virus invaded my musical DNA and left its mark forever.

Until 2008, when my family and I watched the movie
"[Mamma Mia!](https://en.wikipedia.org/wiki/Mamma_Mia!_(film))", those melodies
had been kept out of our house. But they came back and caught us,
like a guilty pleasure. I must confess I have become my father, and
every now and then I enjoy listening to the old ABBA songs.

But this post is not here to tell the story of the quartet, which is
well known. No, this is the story of another Swedish product, and
mainly of an Englishman who helped create it. A man born the
same year as Agnetha Fältskog, who at seventeen, while the
beautiful singer was entering her country's music charts, decided
to learn to program, and along the way picked up a passion for this
craft that he never gave up. And although it took him a while to get the
recognition he deserved, his story must be told on this blog, since he
is one of my personal heroes.

## **Waterloo**

> At Waterloo Napoleon did surrender\
> Oh yeah, and I have met my destiny in quite a similar way

Joe Armstrong was born in England, in 1950. While Agnetha Fältskog
was hitting the charts in her country, with a hit after just
one year in the business, our hero was wrestling with punched cards and
FORTRAN to learn how to program his school's
computer.

When he got to university, however, he decided to study physics and
pursue a PhD in that subject, and not in computer science, curiously.

Armstrong tells that at university he took several courses that
required programming, but that he developed a special knack for
debugging programs, so he helped other people fix the
bugs in their code. The fee was quoted in beers: there were
two-beer problems, three-beer problems, or more. Often his job
consisted of simplifying his "clients'" code. One of the things
that struck him most was that people coded in the
most complicated way possible, and that was the cause of many of their
bugs.

His thesis supervisor had told him on several occasions: "you shouldn't
be doing a PhD in physics, you love computers," but
Armstrong refused. "I have to finish what I'm doing,"
he insisted. In the long run it turned out his professor was absolutely right.

But in the middle of his studies Armstrong suffered the first of the many
setbacks of his career. He had to drop out of his PhD
for financial reasons. His dreams of studying high-energy physics
were left behind.
He needed money, to make a living and maybe save something to resume his
career later.

## **Super Trouper**

> I was sick and tired of everything\
> When I called you last night from Glasgow

Around that time, visiting his university's library, he came across some
huge volumes titled "Machine Intelligence", which came from the
department of the same name at the University of Edinburgh, edited
by [Donald Michie](https://chessprogramming.wikispaces.com/Donald+Michie)
and [Jean Hayes Michie](https://chessprogramming.wikispaces.com/Jean+Hayes+Michie).

Armstrong wrote a letter to [Michie](https://en.wikipedia.org/wiki/Donald_Michie),
who was one of the pioneers of Artificial Intelligence in the United
Kingdom, explaining his programming experience and asking about the
possibility of applying for a job as a programmer in his
department.

{{<figure caption="Donald Michie, AI pioneer in England" src="https://d2dspjyoh5c79p.cloudfront.net/fed0752a-bc27-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

The letter must have been very convincing, because Michie called him:
"I'll be in London next Tuesday, can we meet? I'm taking a
train to Edinburgh, can you come to the station?"[^2].

Armstrong went to the station and met Michie, who said
"Hmmm! Well, we can't do the interview here, so let's find a
pub!" And in a pub near the train station they had their
job interview. A few days later a letter from Michie arrived:
"there's a job as a research assistant, here in Edinburgh, why
don't you apply?"[^2].

There is something interesting at this point in the story: Donald Michie was
a personal friend of [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing)
and they worked together at [Bletchley Park](https://en.wikipedia.org/wiki/Bletchley_Park)
during World War II, so Armstrong had the rare opportunity
to use one of Turing's desks and to be surrounded by several of his original
papers. In 1975 Michie was the
chairman of the Turing Trust, an archive of Turing's work, and
he later founded the Turing
Institute, an artificial intelligence lab, in
Glasgow.

However, funding for the
AI group in Edinburgh began to dry up, and Armstrong had to look
for work again. That is how he found a job as a physicist
programmer at [EISCAT](https://www.eiscat.se/), an international
scientific organization founded in 1975 and headquartered in
Sweden.

{{<figure caption="EISCAT headquarters in Kiruna, Sweden" src="https://d2dspjyoh5c79p.cloudfront.net/c5a9d6e6-bc10-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Eventually, Armstrong joined the Swedish Space Corporation, as a
developer of the operating system for the first Swedish satellite,
[Viking](https://en.wikipedia.org/wiki/Viking_(satellite)).

Around 1984, he moved to Ericsson's research lab.

# **Take a chance on me**

> Take a chance on me\
> If you need me, let me know, gonna be around

At first Armstrong worked on creating a small language based on
Prolog. The lab's job was to build software that
Ericsson's engineers could eventually use. Together with
[Robert Virding](https://github.com/rvirding) he teamed up with a group of
Ericsson employees who wanted a new language for programming
telephony applications. It was a knowledge exchange: Virding and
Armstrong would teach them about programming and in return would learn
about telephony.

The product of those months of exchange turned into a
two-year project, whose fruit would be the Erlang programming language and OTP
(Open Telecom Platform).

While Armstrong wrote the compiler in Prolog, Virding designed and
programmed the libraries and framework. When the time came to
write the virtual machine for the language, Armstrong faced
the C language for the first time. Reviewing his work, Mike Williams, another
colleague at the lab, told him it was the worst C he had seen in
his life, so he decided to take over the virtual machine
personally. Armstrong was freed up to finish the design
of the language and its compiler. That is how they began the
bootstrap process, in which the compiler could be written entirely in Erlang,
freeing itself from its past in
Prolog.[^2]

The name Erlang refers to the Danish mathematician Agner Krarup
Erlang, author of queueing theory and of much of the original
theory of telephone networks (such as the Erlang traffic formula).
Erlang also works as an acronym for Ericsson Language, although the
open source community that supports it today tries not to tie it to
Ericsson.

![](https://d2dspjyoh5c79p.cloudfront.net/3fce17a7-bc17-11e7-a030-2b5831f8ecb5-aa9f18b7)

Erlang's greatest achievement is the AXD301 system. In 1995 the successor to
the packet switching system for telephone networks, called AXE-N, had
collapsed completely under the new demands and was replaced by the
AXD series, developed entirely in Erlang[^6].

The AXD301, with more than two million lines of code, is a system
that achieved 99.9999999% reliability.

You read that right, 99.9999999% (that is nine nines), which means
that this system has 0.03 seconds of downtime in
the whole year. This figure was measured at British Telecom over a period
of eight months. What the figure expresses is the uptime of the service as a
whole, not of its parts.

How did they pull this off? Thanks to two essential features: not
sharing state and having a sophisticated error recovery
model.

Erlang is a functional language that lets you build highly
distributed systems, and that incorporates the actor model to
implement concurrency and distribution. It comes with OTP, Open Telecom
Platform, a complete framework that includes libraries, modules and
standards, and is the foundation of most of the systems built with
this language. Erlang is practically inseparable from this framework.

## **The Winner Takes It All**

> I don't want to talk\
> About the things we've gone through\
> I've played all my cards\
> And that's what you've done too\
> Nothing more to say\
> No more ace to play

Despite Erlang's proven success, Ericsson's executives made
a strange decision and in 1998 decided to impose a restriction and
ban the use of Erlang for developing internal products. The
argument given was that they preferred not to develop in proprietary
languages. The ban made Armstrong and other engineers leave
Ericsson. The implementation was released as open source at the end of that same
year.

Eventually, in 2003, the ban was lifted and Armstrong was
rehired by Ericsson[^1]. Even though Ericsson has not established
any official policy regarding the language, this is the reason
the program's open source community prefers to ignore the reference to
Ericsson in the language's name.

Before returning to Ericsson, Armstrong documented his work on the
development of Erlang in a doctoral thesis he submitted to the Royal
Institute of Technology in Stockholm.

His thesis, titled "Making reliable distributed systems in the presence
of software errors"[^6], is available
online <http://erlang.org/download/armstrong\_thesis\_2003.pdf>.

So, at fifty-three, Joe Armstrong finally got his
PhD, not in physics as he had hoped as a young man, but in information
technology, where he made a great contribution.

This is a great inspiration, at least to me. Maybe
unconsciously I decided to emulate him when I went back to university at
fifty.

As Armstrong's life shows us, nothing is final in
life, and not everything follows the path we expect. Sometimes the road to
recognition has strange twists and turns.

## Dancing Queens

> Looking out for a place to go\
> Where they play the right music\
> Getting in the swing\
> You come to look for a king\
> Anybody could be that guy

The tech world heard about Erlang again in February
2014, after Facebook's acquisition of
WhatsApp. Founded in 2009 by Brian
Acton and Jan Koum, the app revolutionized the world of instant
messaging.

![](https://d2dspjyoh5c79p.cloudfront.net/20f0e09b-bc28-11e7-a030-2b5831f8ecb5-aa9f18b7)

WhatsApp became the epitome of the
[unicorn startup](https://en.wikipedia.org/wiki/Unicorn_(finance)). It was the
queen of the messaging app world in December 2013.
With more than 400 million users, it was obvious the tech giants
were after the company. The sale to Facebook for more than nineteen
billion dollars left everyone stunned. A
company with barely 50 employees was getting one of the highest
valuations in the history of
technology.

When they looked into the technology behind this product,
[the press](https://www.fastcompany.com/3026758/inside-erlang-the-rare-programming-language-behind-whatsapps-success)
and many tech enthusiasts found out that
Erlang existed. For an application like
this one, a system with high scalability, concurrency and distribution,
Erlang's design characteristics are more than
adequate[^3].

## **Voulez Vous**

> And here we go again, we know the start, we know the end
>
> Masters of the scene

To me, Joe Armstrong is one of those people whose life I find
inspiring. Among the things I most identify with is what
he says in [the interview with Seibel](http://amzn.to/2zXzfne) in his book
Coders At Work[^2].

> "The really good programmers spend a lot of time programming.
> I haven't seen very good programmers who don't spend a lot of
> time programming. If I don't program for two or three days, I need
> to do it. And you get better at it—you get quicker at it. The side effect of
> writing all this other stuff is that when you get to doing ordinary
> problems, you can do them very quickly."\
> "I have learned new programming languages, but not with the goal
> of becoming a better programmer. With the goal of becoming a better language
> designer, maybe."\
> "I like figuring out how things work. And a good test of
> that is to implement them yourself. To me programming isn't about
> typing code into a machine. **Programming is about understanding.**"

{{<figure caption="Joe Armstrong, programmer and creator of Erlang" src="https://d2dspjyoh5c79p.cloudfront.net/2916bdc8-bc24-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

## Huffman coding in Erlang

Erlang lets you write very concise code, and for this exercise, which
is part of
[my series on those strange new languages](/en/blog/lnds/2016/01/09/those-strange-new-languages/),
Huffman compression, I needed barely 70 effective lines of
code, which shows how expressive this language is.

This is the essence of the program:

```erlang
    -module (huffman).
    -compile({no_auto_import,[size/1]}).
    -export ([main/0, main/1]).
    -import(filename, [absname/1]).
    -define(USAGE, "uso: huffman [c|d] archivo_entrada archivo_salida\n").



        main() -> io:format(?USAGE).
    main([Opt,Entrada,Salida]) when Opt =:= 'c' -> comprimir(Entrada, Salida);
    main([Opt,Entrada,Salida]) when Opt =:= 'd' -> descomprimir(Entrada, Salida);
    main([_]) -> io:format(?USAGE).

    comprimir(Entrada, Salida) -> 
       {ok, Binary} = file:read_file(Entrada),
     Bytes = binary_to_list(Binary),
     {Dump, Tree} = encode(Bytes),
       DTree = tree_as_bits(Tree),
     PS = (8 - ((bit_size(DTree) + bit_size(Dump)) rem 8)) rem 8,
        PDump = <<DTree:(bit_size(DTree))/bitstring, Dump:(bit_size(Dump))/bitstring, 0:PS>>,
       ok = file:write_file(Salida, PDump).

    descomprimir(Entrada, Salida) -> 
        {ok, Binary} = file:read_file(Entrada),
     {Tree, Code} = read_tree(Binary),
       Dump = decode(Code, Tree),
      ok = file:write_file(Salida, Dump).
```

Being a language created to solve telecommunications problems,
its support for building protocols is superior to many languages. In
particular, binary data manipulation is one of Erlang's
interesting features, and one I leaned on heavily to solve this
problem.

Erlang has a data structure that corresponds to a string of
bits. This makes it possible to generate the bit stream needed for
Huffman compression. Let's see how.

First, once we have the Huffman code tree, we must
store it as a sequence of bits. To build that sequence
we use this code:

```erlang
    tree_as_bits({L,R}) -> 
       BL = tree_as_bits(L),
       BR = tree_as_bits(R),
       <<0:1, BL/bitstring, BR/bitstring>>;
    tree_as_bits(Symbol) -> 
     <<1:1, Symbol>>.
```

Remember that our tree can have internal nodes (which have two
children) or leaves, which only hold the symbol.

Given that, the pattern {L,R} represents a node, in which case L is the
left branch and R the right branch. What this does is recursively
create the binary representation for L and R, leaving them in BL and BR,
respectively, and then return the bitstring \<\<0:1, BL/bitstring,
BR/bitstring\>\>. With this we say that a sequence of bits is
returned, where the first bit is 0 (the :1 indicates it is a string 1 bit
wide), followed by the bitstrings BL and BR.

In the second case, Symbol is the leaf that holds only the symbol
we want to store (one byte), so we return \<\<1:1, Symbol\>\>,
that is, a bit set to 1, followed by the 8 bits that represent the symbol.

The reverse is also solved recursively, like this:

```erlang
    read_tree(<<1:1, Rest/bitstring>>) -> read_leaf(Rest);
    read_tree(<<0:1, Rest/bitstring>>) -> read_node(Rest).

    read_leaf(<<Sym:8, Rest/bitstring>>) -> {{Sym,-1}, Rest}.

    read_node(Bits) -> 
      {L, Rest1} = read_tree(Bits),
      {R, Rest2} = read_tree(Rest1),
      {{L,R}, Rest2}.
```

In this case we are reading a sequence of bits. If we find a 1
then we read a leaf (read\_leaf) from the rest of the bits (Rest). If
we find a 0, we read a node from the rest of the bits (Rest).

The read\_leaf function reads the symbol from the first 8 bits of the
bitstring and returns the symbol as a node with a frequency value of
-1 {Sym, -1} along with the rest of the bits. Remember that for
decompression we don't care about the frequency of the symbols, but
we need to keep this shape so that our decoding code
recognizes when it is reading the symbol.

The read\_node function is recursive: it reads the left node first and
then the right one and returns a compound node plus the rest of the bits.

One last, very relevant aspect that I ran into was the following.
In the compressed file we store the tree as a sequence of bits,
and then a sequence of bits that represents the compressed information.

So the decoding function must read this sequence of bits,
walking it guided by the tree. That is, if there is a 1 it walks the
right tree until it reaches a leaf, if there is a zero it walks the left
tree until it reaches the leaf. Once you reach the leaf, the symbol
it holds is the decoded symbol. Now, my first version
used bitstring to do this, but that turned out to be extremely
slow. This is because bitstrings are a fairly complex data
structure and the recursive nature of the algorithm requires a
lighter data structure to work with.

That is why the final version of the decoder ended up like this:

```erlang
    % decode a binary using Tree
    decode(Code, Tree) -> 
     L = [X || <<X:1>> <= Code],
      decode(L, Tree, Tree, []).

    decode([], _, _, Result) -> 
     lists:reverse(Result);
    decode([1|Rest], {_, R={_,_}}, Tree, Result) ->
        decode(Rest, R, Tree, Result);
    decode([0|Rest], {L={_,_}, _}, Tree, Result) ->
        decode(Rest, L, Tree, Result);
    decode(L, {Sym, -1},  Tree, Result) -> 
        decode(L, Tree, Tree, [Sym|Result]).
```

The decode/2 function (which takes the bits and the tree) transforms the
bitstring into a list of 0 or 1 values. This list is what gets passed to
the decode/4 function (which takes a list of 0s and 1s, the node to visit,
the whole tree and a list that holds the decoded symbols).

The full code is, as always, in my GitHub repository,
at this
address: <https://github.com/lnds/9d9l/tree/master/desafio4/erlang>

So let's end this post with one of ABBA's greatest hits and
maybe one of the best pop songs of all time,
Dancing Queen:

{{<youtube xFrGuyw1V8s>}}

Notes
-----

[^1]: [Question about Erlang's future.](http://erlang.org/pipermail/erlang-questions/2006-July/021335.html)

[^2]: [Coders at work: Reflections on the Craft of Programming](http://amzn.to/2zXzfne). By Peter Seibel.

[^3]: [Inside Erlang, the Rare Programming Language behind WhatsApp's success](https://www.fastcompany.com/3026758/inside-erlang-the-rare-programming-language-behind-whatsapps-success)

[^4]: GitHub repository https://github.com/lnds/9d9l/

[^5]: Joe Armstrong's blog: [[https://joearms.github.io/]

[^6]: Armstrong's 2003 thesis, "Making reliable distributed
systems in the presence of software
errors": <http://erlang.org/download/armstrong_thesis_2003.pdf>
