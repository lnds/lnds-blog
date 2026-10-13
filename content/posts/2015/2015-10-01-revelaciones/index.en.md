---
title: "Revelations"
authors: [admin]
subtitle: "an epiphany about functional programming"
date: 2015-10-01T08:25:11-03:00
slug: "revelations"
draft: false
tags: ['revelation', 'revelations', 'functional programming', 'functions', 'monads', 'humor']
image:
  placement: 3
---
The Revelation of Kleisli, to
shew unto his servants things which they must shortly understand; and he
signified it by sending his avatar unto his servant Eduardo.

Who bare record of the word of Turing and of Church, and of
all things that he saw and learned.

Blessed is he that readeth, and they that hear the words of this revelation,
and keep those things which are written therein: for the run time is
at hand.

I Eduardo, who also am your brother in tribulation, and in the kingdom and
patience, was on the net, seeking the categorical word that would reveal
the ultimate meaning of Category Theory.

And I was in the spirit of devotion, wandering through the dark corners
of the deep internet, when I heard a voice, as of a trumpet, saying:

I am the Lambda and the Closure, the Head and the Tail. What thou seest, write
in the blog, and send this message unto the Noosphere.

For until that moment I thought I knew what a function was,
and I lived happily in my ignorance.

And it came to pass that the voice as of a trumpet said unto me: "Thou art
deeply mistaken!"

For to the mathematicians, said the voice, a function is simply
an association between an input value and an output value.

But ye programmers, in your arrogance, have perverted the
meaning of what a function is.

Sometimes your functions return a random value, and if ye
evaluate them at different times ye return different values.

And on Monday your function answereth a different value from the one it
answered on Saturday, or the one it shall answer next Wednesday.

Or your functions sometimes cause words and texts to appear upon
a screen, or print their results on paper.

And though they share with the functions of the mathematicians the possibility
of composition, they are very different beasts.

But in truth, what ye call Functions are, to the mathematicians,
Categories.

And then, weeping, I fell to my knees and implored the Avatar that
stood before me to reveal unto me this most mysterious matter.

Then with his voice of thunder he said unto me: listen, learn and take note,
poor programmer.

A Category is a collection of Objects and Arrows. In thy limited
mind thou mayest call the collections of objects sets if thou wilt. And
thou mayest imagine that the arrows are functions between the sets.

But pay attention. Every Arrow hath a Domain and a Range. Every Object
hath an "Identity" Arrow, and Arrows can be composed
when the Domains and the Ranges match.

And these things were created because the world is complex and the
functions that mathematicians commonly use are not enough.

But take heed, for these Arrows protect thee against the Four
Horsemen of the Catapocalypse.

And I looked, and beheld four beasts like unto horses, and upon them
sat four dreadful Horsemen.

The first horseman was white, and his name was **Failure**.

Listen, poor programmer, said the Avatar unto me, ye build many
things that can fail, from trying to read files that do not exist or
trying to send messages over the internet when there is no connection, to
doing computations on great quantities of data without enough
memory. It is there that ye meet the first horseman, called
Failure.

I took note, and beheld the second horseman, vermilion in color, whose name was
**Dependency**.

Then the Avatar spake. This is the second of the horsemen that afflict
thine abstractions, wretched programmer. For the functions of the
mathematicians are self-contained, but those thou writest in thy code are not.

Thy programs are full of settings. Look at thy phone: it hath
pages and pages of settings. In what language shall it display its
messages? How often is a copy of thy work saved? Must
communications over the network be encrypted?

Rare is the application that hath no menu of settings and
preferences.

For years programmers have used shared areas of memory
to store this information. And though ye could pass these settings in
every call to every function, that would be most inconvenient.

I took note and meditated upon this.

It was then that I was frightened by the thunderous noise of the third horse; upon
it sat a yellow horseman, whose name was **Uncertainty**.

That is Uncertainty, said the Avatar unto me, also known as
Nondeterminism. A normal function associateth one input with one output. A
nondeterministic function associateth one input with a number of possible
outputs. This is the most mysterious horseman of them all.

This specter appeareth when thou queriest, searchest or considerest many
possible answers. He rideth through the realm of domain specific
languages, such as SQL.

I thought of those languages ending in QL, and of that fascinating attempt
at a defense against this horseman called LINQ. For a great part of the
most complex programming structures of these ill-fated ages are
naught but weak fortresses that try to reduce the uncertainty of the
results.

Finally I beheld the last horseman, black in color, whom they called
**Destruction**.

Behold Destruction, cried the Avatar with a booming voice, he is the
product of thy functions. For thy computations have effects upon the
world, every time thou displayest some information, or waitest for an answer
from other computers, or from people. Sometimes your programs literally make
things explode!

Thy programs have a destructive nature, for they produce effects
that oftentimes cannot be undone. This causeth thy programs
to have more errors. It maketh dividing up the work harder, for if thou runnest
the parts in the wrong order thou mayest get the wrong
answers.

But thou canst not live without Destruction, for what good is a program
without observable effects?

Then I wept in anguish, and asked the Avatar if there was a way
to defeat these horsemen.

Fear not, he answered me, for thou canst use the power of Mathematics
to make these horsemen work for thee. Write down my words, poor
programmer, and spread them as revealed truth.

For every function that thou programmest can become a
mathematical function if thou changest the Range of each one of them.

This is what thou shalt do with Failure, he said.

Every pseudo function that can fail is simply a function whose
result includeth two things: Successes, which are the possible expected
results, and Failures, which describe why the attempt failed.

Thus if thou hast a set A, we shall define a set Err(A), which
is A plus the possible reasons why something could have failed. Then
when thou hast a function that can fail, going from the set A
to the set B, thou canst redefine it as a function from A to Err(B).

And in that moment I saw these symbols drawn upon the wall:

> If F: A -\> B can fail then define F\': A -\> Err(B).

Now hear what thou must do with Dependency, said the Avatar unto me.

Take all thy pseudo functions that depend on information they
obtain from the world around them. For these define the set
Pref(A), which is the set of functions with applications of the settings,
or configurations, of the set A. Now look closely: a function in
context from A to B is an ordinary function from A to Pref(B).

Then I understood that what he meant to tell me was that for a value of the
set A, the function returneth another function that mappeth the settings of
the application to the set B.

This is called Currying, the Avatar warned me.

In this way, by changing the range of the pseudo function, an additional
parameter is added that receiveth the settings of the application.

And upon the wall these symbols appeared

> If F : A -\> Pref(B) has dependencies =\> define F\' : A -\> Pref(A)
> -\> Pref(B).

My mind exploded trying to understand this last part when the Avatar
cried out.

Pay attention, stupid programmer, for this is what thou shalt do with
Uncertainty!

Simply, if thou hast a set A, thou must define the power set
of A, as the set of all the possible sets with values of A.
This thou shalt call P(A).

If thou hast a nondeterministic pseudo function from A to B, turn it into
a function from A to P(B).

And a third row of symbols was engraved upon the wall:

> If F : A -\> B is nondeterministic =\> define F\': A -\> P(B).

Lastly, said the Avatar, hear how thou shalt handle Destruction.

Thou shalt define a new range, which thou shalt call IO(A). An element of the set
IO(A) is a list of instructions for obtaining a member of A. It is not
a member of A, only a way of obtaining one, and this procedure
may have any number of observable effects.

So if thou hast a destructive pseudo function from A to B, turn it into
a mathematical function from A to IO(B).

And I understood that if I give the function a value of A it will not execute
the steps to obtain B, but it will surely tell me what those
steps are.

It was then that the fourth row of symbols appeared upon the wall.

> If F : A -\> B is destructive =\> define F\' : A -\> IO(A).

Then I trembled with dread, for I felt that a great truth was
being revealed unto me, yet I was unable to understand it. It was then that I heard the
last words of the Avatar, who warned me.

Hearken well, poor programmer, for I see that thou art weary. I must
leave thee for now, but I want thee to know that my name is
[Kleisli](//en.wikipedia.org/wiki/Kleisli_category) and that what I have just
revealed unto thee is fundamental.

Behold, I come quickly! Blessed is he that keepeth the words of the
revelation of this blog.

And I Eduardo saw these things, and heard them. And when I had heard
and seen, I fell down to worship before the feet of the Avatar which shewed me
these things.

And he said unto me: Seal not the words of the revelation of this blog, for
the time is at hand.

I come quickly, and my reward is with me, to give every man
the meaning of what Monads are.

Thus the vision faded and I woke up wondering what the hell I had eaten
or drunk that night...
