
---
title: "Correcting errors"
authors: [admin]
date: 2018-10-21T08:25:11-03:00
slug: "correcting-errors"
tags: ["computer"]
draft: false
image:
    focal_point: "Center"
    placement: 3
    preview_only: false
---

In Spain they use the word "ordenador" for computers, following the
French custom, which began using the term "ordinateur" in the 1960s.
But the use of that word is an inconsistency, as Antonio Vaquero
Sanchez argued in an article in the Spanish newspaper El Mundo in
1997[^1]:

> What does ordinateur mean? One should not rise to the bait of those
> who defend the use of the word "ordenador" because it performs
> "ordenaciones" (sorting operations). It can do more, far more, than
> sort sortable elements. Accepting that name for that reason would be
> like accepting that the whole be named after just one of its parts.
> Nor is the argument based on the sense of "orden" as "instruction"
> valid. Ordinateur is defined in French as "\... qui émite ordres".
> In short, the one who gives orders, not the one who receives them.
> Therefore the use of the word "ordenador" is a semantic error. I am
> not the one saying it. The French themselves say so. [...] The reply
> \[given by the French when faced with the inconsistency\] was "le mot
> n\'est pas bon, mais nous n\'avons pas trouvé d\'autre meilleur"
> ["The word is not good, but we have not found a better one"].

So with this linguistic correction, we kick off this brief article on
error correction.

## What do computers do?

We expect at least three things from any modern computing system:
first, that it perform calculations on the data it receives as input;
second, that it be able to store that data; and finally, that it be
able to transmit data (at the very least, deliver the results). Imagine
a computer that could neither store nor transmit data: it would be
practically useless.

But the challenge this imposes is no small one, because the data must
remain exact. Data is stored as sequences of [zeros and
ones](/en/blog/lnds/2018/09/23/zeros-and-ones/), and it only takes one of the
millions of bits in a computer's memory flipping its value from zero to
one, or vice versa, for the result of any calculation to be wrong.

Errors in data transmission are frequent, because communication is
affected by "noise". We experience this every day: in a conversation we
may mishear a word because we are talking with someone out on the
street and the background noise keeps us from hearing clearly what the
other person is saying, so we ask them to repeat it, or to speak
louder, to reduce the error.

Something similar happens when transmitting data, all the more so over
electronic media. Distance also causes energy to be lost along the way,
which is why repeater systems are used, feeding energy back in so the
signal isn't lost.

But there can also be errors when storing. When you jot down someone's
number to call them later, if you get a digit wrong, or you have bad
handwriting, as I do, you struggle to understand what you wrote at the
time, and you can make mistakes.

Errors of this kind happen in machines too. Sometimes when a 1 is
written it gets wrongly stored as a 0, and there's your error. At human
scale, making storage errors is no big deal, but computers handle far
more information than we do.

Consider a laptop with 500 gigabytes of storage, a fairly common
configuration these days. That is the equivalent of 75 million pages of
written text. If that system had a rate of one error per million pages,
then we would have 75 errors on average in the device at full capacity.
If you download a program that weighs about 100 megabytes, and the
computer misreads one byte in a million, you would have around 100
misread bytes, enough for your program not to work, or to crash at the
least expected moment.

This means that a computer with 99.9999% accuracy is not good enough to
be usable. So we need a mechanism to protect us from these errors, and
fortunately one exists, and it is one of the most ingenious things we
have developed in computing.

## The repetition trick

Suppose a computer at your bank wants to transmit your account balance
over the internet. Let's imagine your account balance is $ 521,375, but
the network is not very reliable and each digit has a 20 percent chance
of being altered. So $ 529,375 may arrive at your computer. You have no
way of knowing whether this figure is correct or not. All the digits
might be right, but one or more may be wrong and you have no way of
knowing. But by repeating the message you have a good way to infer the
true balance. Suppose we ask for the balance to be sent five times, and
we receive the following answers

> transmission 1: $ 5 2 9 , 3 7 5\
transmission 2: $ 5 2 1 , 3 7 5\
transmission 3: $ 5 2 1 , 3 1 1\
transmission 4: $ 5 4 4 , 3 7 5\
transmission 5: $ 7 2 1 , 8 7 5

Note that some transmissions have more than one wrong digit, and that
there is one transmission (number 2) with no errors at all. But we
don't know which ones are the errors, nor that transmission 2 is the
correct one. So let's take the transmission character by character and
pick the most frequent one:

>    transmission 1: $ 5 2 9 , 3 7 5\
transmission 2:        $ 5 2 1 , 3 7 5\
transmission 3:        $ 5 2 1 , 3 1 1\
transmission 4:        $ 5 4 4 , 3 7 5\
transmission 5:        $ 7 2 1 , 8 7 5\
most common digit:       $ 5 2 1 , 3 7 5

Doing this we can see that we arrive at the most likely value:
\$ 521,375, which in this case matches the correct value.

The problem with this is that the noisier the channel, the more times
we must repeat the message to increase the probability of guessing
what the correct message was. The other problem is that there is no
guarantee this mechanism will let us find the right answer.

# The talking drums technique

James Gleick, in his book [The Information: A History, a Theory, a
Flood](http://www.amazon.com/gp/product/0375423729/ref=as_li_qf_sp_asin_tl?ie=UTF8&tag=lanaturaledel-20&linkCode=as2&camp=217145&creative=399349&creativeASIN=0375423729),
tells the story of how the rest of the world came to understand the
mystery of the African talking drums. Although many explorers and
travelers had heard the sub-Saharan drums, nobody knew that they
carried information, that they in fact talked.

In the mid-19th century, on an expedition to the Niger River organized
by the "Society for the Extinction of Slavery", Captain William Allen
made an important discovery by paying attention to his Cameroonian
pilot, whom he called Glasgow. They were in the ship's cabin when the
captain noticed that his pilot was absorbed, listening to the drums.
"Don't you hear my son speak?", Glasgow asked him. Since they had heard
no voices, they asked him how he knew his son was speaking to him. "The
drum speaks to me, it tells me to come up on deck." The astonishment
only grew, and the captain wrote down for the first time the incredible
communication capabilities of these drums, which could transmit
messages over great distances. A technology not yet developed in
Europe: the ability to send messages faster than with messengers on
horseback.

Explorers and missionaries began to record and transcribe these
messages.

> The announcement of a birth in Bolenge, a village in the Belgian
> Congo, went like this: *Batoko fala fala, tokema bolo bolo, boseka
> woliana imaki tonkilingonda, ale nda bobila wa fole fole, asokoka
> l'isika koke koke.\
> *The mats are rolled up, we feel strong, a woman came from the
> forest, she is in the open village, that is enough for this time.\
> A missionary, Roger T. Clarke, transcribed this call to a fisherman's
> funeral:\
> *La nkesa laa mpombolo, tofolange benteke biesala, tolanga bonteke
> bolokolo bole nda elinga l'enjale baenga, basaki l'okala bopele pele.
> Bojende bosalaki lifeta Bolenge wa kala kala, tekendake tokilingonda,
> tekendake beningo la nkaka elinga l'enjale. Tolanga bonteke bolokolo
> bole nda elinga l'enjale, la nkesa la mpombolo.\
> *In the morning at dawn, we do not want to gather for work, we want a
> meeting of play on the river. Men who live in Bolenge, do not go to
> the forest, do not go fishing. We want a meeting of play on the
> river, in the morning at dawn."

John F. Carrington, an English missionary born in 1914, traveled to
Africa in 1938 and settled on that continent for life. He discovered
that the drums did not use a system of signals; there was no code, to
put it in modern terms, in these transmissions. The drums transmitted
poetry, prayers, even jokes. The drums were literally used to talk.

Carrington learned to play the drums; in particular he mastered Kele, a
language of the
[Bantu](http://en.wikipedia.org/wiki/Bantu_languages) family, from
eastern Zaire. The natives said he was not really European, despite
his color; Carrington was one of them. That when he died the gods had
mistakenly sent his soul to England, into the body of a baby. But since
he was African he could not help coming back. Generously, the villagers
said that if his drum messages sometimes sounded odd, it was because of
the poor education the whites had given him.

Carrington became a linguistic authority on the structure of the
African language families. He published his discoveries in a book
titled "The Talking Drums of Africa" in 1949.

![](https://d2dspjyoh5c79p.cloudfront.net/5fc01856-d54e-11e8-a030-2b5831f8ecb5-aa9f18b7)

To understand the mystery of the talking drums you have to know the
structure of African languages. These are tonal languages, where
meaning is determined by the rise or fall of the pitch when pronouncing
vowels or consonants. Our language has no such changes of tone, except
when we ask a question or exclaim. We pronounce "you're happy?"
differently from "you're happy"; in the question there is a slight
rise in pitch at the end of the sentence. That is what African
languages apply to all their vowels and consonants.

For example, the word *lisaka,* pronounced with all three syllables low
means *puddle*; when it is pronounced raising the tone on the last
syllable, without necessarily stressing or accenting it, it means
*promise*; and pronounced yet another way it can mean *poison*.

Carrington noted how comical the confusion can be:

> alambaka boili \[-*--* \_ \_\] = he watched the riverbank\
> alambaka boili \[---- \_ - \_ \] = he boiled his mother-in-law

The drum transmits the tone, but not the pitch, which is why in the
language of the drums the consonants are transmitted by the various
tones of the different drums. The problem is that this produces
ambiguities: for example, two high drum tones in Kele can be *sango*,
which means father, or *songe*, which means moon. To avoid this
ambiguity, additional words are introduced, creating a phrase that
makes it possible to identify the word. For example, to say the moon
the phrase "*songe li tange la manga*" ("the moon looks down at the
earth") is used. **The extra beats provide context.**

What these extra sounds do is introduce additional bits of information
to correct and disambiguate the message.
**Redundancy, though inefficient,
prevents the message from being confused**.

## The redundancy trick

The repetition trick just sends the same message over and over. But, as
we saw with the story of the talking drums, what we should do is add
something extra to improve communication. That extra is what, in
technical terms, we call **redundancy**.

Instead of sending the digits \$ 521,375 we could send the following
message:

>     five two one comma three seven five

Let's assume the same error rate, 20%, so some characters would be
swapped for others, leaving the message like this:

>     fivq two onp commf thcee sexen fipe

Although it is somewhat hard to read, you will agree that anyone who
can read, and who knows we are talking about numbers, will be able to
interpret the message as saying the balance is \$ 521,375.

If I tell you that "sexen" represents a digit in English and that only
one letter has been altered, you will almost certainly tell me the
number is "seven", because there is no other word that gives us a
number by altering one letter.

What we have done here is create a code:

>     1 -> one
>     2 -> two
>     3 -> three
>     4 -> four
>     5 -> five

And to decode, the following happens:

>      five -> 5 (exact match)
>      fipe -> 5 (approximate match)
>      onp -> 1 (approximate match)

And that is what computers do all the time: use these encoding tables
and redundancy.

In 1947 Richard Hamming developed one of these codes, known today as
the Hamming Code, while working at Bell Labs.

Since everything in a computer is stored as zeros and ones, what the
Hamming code does is add redundancy in a way similar to what we did
with the words:

>     0000 -> 0000000
>     0001 -> 0001011
>     0010 -> 0010111
>     0011 -> 0011100
>     0100 -> 0100110

Then when decoding we have:

>     001011 -> 0010 (exact match)
>     0010110 -> 0010 (close match)
>     1011100 -> 0011 (close match)

This example corresponds to what is known as the Hamming (7,4) code. I
have shown only 5 of the 16 possible combinations of 4 bits. I won't go
into the technical details of how this is implemented in computers, but
it is essentially the same as what I described with the example of
numbers expressed as words. If you want to know more about the Hamming
code you can visit this Wikipedia
page: [<https://es.wikipedia.org/wiki/C%C3%B3digo_Hamming>](https://es.wikipedia.org/wiki/C%C3%B3digo_Hamming)

{{<figure caption="Richard Hamming" src="https://d2dspjyoh5c79p.cloudfront.net/942e5618-d54e-11e8-a030-2b5831f8ecb5-aa9f18b7">}}

There are more techniques for detecting and correcting errors, such as
the [checksum](https://es.wikipedia.org/wiki/Suma_de_verificaci%C3%B3n)
and [parity bits](https://es.wikipedia.org/wiki/Bit_de_paridad). To
this day people keep working on and improving these error correction
techniques (as with [low-density
parity-check](https://en.wikipedia.org/wiki/Low-density_parity-check_code)
codes, or [Fountain Codes](https://en.wikipedia.org/wiki/Fountain_code)).

These techniques were discovered and developed by Hamming and Claude
Shannon between 1947 and 1950. Shannon's paper, "The Mathematical
Theory of Communication", became the foundation for all these
techniques that are used today to give us reliable computers and
networks. About this seminal work, Irving Reed, who also developed an
error-correcting code, said: "Few works of this century have had a
greater impact on science and engineering. This paper has profoundly
altered every aspect of communication theory and practice".[^2]


[^1]: "El uso de la palabra
Ordenador" <https://www.elmundo.es/su-ordenador/SORnumeros/97/SOR066/SOR066tribuna.html>


[^2]: Taken from "Nine Algorithms That Changed The Future", by John
MacCormick.

