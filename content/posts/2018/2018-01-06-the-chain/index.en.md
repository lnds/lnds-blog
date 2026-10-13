---
title: "The Chain"
authors: [admin]
date: 2018-01-06T08:25:11-03:00
slug: "the-chain"
tags: ['blockchain', 'architecture', 'OOP', 'patterns', 'chaining', 'immutability']
draft: false
image:
  placement: 3
---

> "Chain, keep us together\
> Running in the shadows\
> Chain, keep us together\
> Running in the shadows

[The Chain](https://en.wikipedia.org/wiki/The_Chain) has the
distinction of being the only Fleetwood Mac song credited to all
the members active during the recording of an album, and the reason
for this is a curious one.

In 1977 the band had its best-known and most successful lineup.
It went like this: [Mick Fleetwood](https://en.wikipedia.org/wiki/Mick_Fleetwood) on drums,
[John McVie](https://en.wikipedia.org/wiki/John_McVie) on bass,
[Christine McVie](https://en.wikipedia.org/wiki/Christine_McVie) on
vocals and keyboards, the great [Stevie Nicks](https://en.wikipedia.org/wiki/Stevie_Nicks) on vocals, of
course, and [Lindsey Buckingham](https://en.wikipedia.org/wiki/Lindsey_Buckingham) on
guitars and vocals.

{{<figure caption="Fleetwood Mac in 1977" src="https://d2dspjyoh5c79p.cloudfront.net/856cf561-f2f1-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

To record its eleventh album the band headed to California, to
work at the famous [Record Plant](https://en.wikipedia.org/wiki/Record_Plant) studio, in Sausalito.

That period was one of the roughest moments inside the group. Stevie
Nicks has always said that Fleetwood Mac's best work
came out when the band was in its worst shape.

![](https://d2dspjyoh5c79p.cloudfront.net/23469aa8-f312-11e7-a030-2b5831f8ecb5-aa9f18b7)

The Chain came out of the **concatenation** of a pile of rejected
material. The final section of the song, which starts with a
bass progression, was created by Mick Fleetwood and John McVie, who
recorded it separately. Meanwhile Stevie Nicks had written the lyrics
and thought they could fit that melody, so she worked with
Christine McVie on putting together the first part of the song. To complete
the track, Buckingham recycled the intro of a piece he had
developed with Nicks as a duo in 1973. The bridge was pulled by the
sound engineers, Ken Caillat and Richard Dashut, from another discarded
recording; they removed the piano McVie had put on it and cut
the tapes with razor blades to then splice them together and give the song its
final shape.

That is why The Chain is credited to every
member of the group.[^1]


## Chains

> "Listen to the wind blow\
> Watch the sun rise\
> Run in the shadows\
> Damn your love, damn your lies"

A chain is a set of links, or rings, joined together.
It is a useful tool, for pulling, holding, or even transmitting
motion to machines. It is also a symbol, with multiple
meanings, such as oppression, unity, or even opulence.

In physics and mathematics, the catenary is the shape a chain takes when
hanging from its two ends. The precise form of the equation that describes
this geometric shape was obtained in response to a challenge
posed by Jakob Bernoulli, who summoned the best mathematicians of the
seventeenth century. The result was obtained through the ***collective
work*** of Gottfried Leibniz, Christiaan Huygens and Johann
Bernoulli.

The shape of the catenary allowed the Catalan architect Antoni Gaudí
to create structures that better distribute the stress they are
subjected to.

{{<figure caption="Catenaries in Gaudí's La Pedrera" src="https://d2dspjyoh5c79p.cloudfront.net/61f3e582-f2f6-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

In computing, chains show up in many areas and contexts, of
course, and that is what we are going to talk about a bit.

## Immutable chaining

> "And if you don't love me now\
> You will never love me again\
> I can still hear you saying\
> We would never break the chain"

"Method chaining" is a technique used in many
object-oriented programming languages.

In object-oriented programming we use method chaining
to run a series of operations on an object.

Let's look at an example in Scala: [^2]

```scala
    class Person {
      private var name: String = null 
      private var age: Int = 0 

      def setName(newName: String) = { this.name = newName; this; }
      def setAge(newAge: Int) = { this.age = newAge; this; )
      def introduce { println( s"Hello, my name is $name and I am $age years old." ) }
    }

    object App {
      def main(args: Array[String]) {
        
        // Output: Hello, my name is Peter and I am 21 years old.
        new Person().setName("Peter").setAge(21).introduce
      }
    }
```

What we have done here is create an object of type Person, to which we
apply a sequence of methods that alter its state and generate an
output. That chain of methods lets you write more compact code.
This technique is very useful for developing domain-specific
languages (DSL)[^3].

But a functional programmer would find this an abomination, because on
every call we are altering the state of the object and that is a mortal
sin in this paradigm, where the concept of **immutability** is
essential.

What does this immutability thing mean?

What we want is for data structures not to change their value throughout
the process. For example, if we have a record that holds a
person's name, the value written there must not change, ever.

But people do change their names, right?

They do, although we could ask ourselves whether the person who at
twenty-five changes his name to Jorge is the same person who was given the
name Pedro at birth.

But philosophy aside, we have to deal with change.
The answer that guarantees immutability is that we must create a new
record with the new value and forget about the previous value (or leave it
lying around, for historians to look at later).

So let's see what the code would look like with an immutable data
structure:

```scala
    case class Person(private val name: String = null, private val age: Int = 0 ) {
      def setName(newName: String) = Person( newName, this.age )
      def setAge(newAge: Int) = Person( this.name, newAge )
      def introduce { println( s"Hello, my name is $name and I am $age years old." ) }
    }

    object App {
      def main(args: Array[String]) {
        // Output: Hello, my name is Peter and I am 21 years old.
        Person().setName("Peter").setAge(21).introduce
      }
    }
```

Notice that each method generates a new Person object. In this particular
case the previous object is lost and gets freed automatically by the language's
[Garbage Collector](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)).
As programmers we don't care about it
anymore (although I suppose it would be nice to tell the systems engineer in charge of
running our software in production to allocate
enough memory and tune the virtual machine's
parameters; a little courtesy never hurts).

## Chain of responsibility

> "Thunder only happens when it's raining\
> Players only love when they are playing"\

Chain of responsibility is a software design pattern that
aims to solve two problems:\

-   Avoid coupling between the sender of a
    request and its receiver.\
-   It should be possible for more than one receiver to handle a
    request.\[4\]

{{<figure class="Diagrama de clases que describe el patrón cadena de responsabilidades" src="https://d2dspjyoh5c79p.cloudfront.net/1e7cb883-f2fc-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

What this pattern says is that a request is processed by a
series, or chain, of receivers, which are unknown a priori to the
sender.

This is very useful in user interfaces, for example. When you touch
an object on the screen, a "view" is expected to exist that is
able to process that event. This view may not know what to do with
the event, so it hands it off to a parent view, and so the event climbs
up the chain until it finds an object that knows how to process the
event.

The important thing here is that we can distribute the ***processing
responsibility*** along the chain.

## Message chain

> "Break the silence\
> Damn the dark, damn the light"

Not everything about chains is good. For example, there is a problem, something
we call a [code smell](https://en.wikipedia.org/wiki/Code_smell)[^5],
named the [Message Chain](https://sourcemaking.com/refactoring/smells/message-chains).

Martin Fowler describes it in his book ["Refactoring: Improving the
Design of Existing Code"](http://amzn.to/2AAnv92), in the following
way:

{{<figure caption="A message chain scenario" src="https://d2dspjyoh5c79p.cloudfront.net/7710c646-f30a-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Suppose that from a client object we want to get a person's
manager. To do that, the code we have to write is the
following:

```scala
manager = person.getDepartment().getManager()
```

It could be worse; there are situations where you can end up with a
long chain of messages just to get a value:

```scala
f = client.getA().getB().getC().getD().getF()
```

This is different from method chaining, because
in that case we are operating on methods of the same class.

In message chaining we are navigating a class
hierarchy to get to the method we need.

## The Law of Demeter

> "I know there's nothing to say\
> Someone has taken my place"

Message chaining is a form of coupling, and one way
to avoid this problem is to respect the Law of Demeter, or Principle of
Least Knowledge, which says the following:

Given a method ***m*** of an object ***O***, it may only invoke the
methods of the following kinds of objects:

1.  The object ***O*** itself.
2.  The parameters of ***m***.
3.  Any object created or instantiated within ***m***.
4.  The objects that are components of ***O***.
5.  A global variable, accessible by ***O***, in the scope
    of ***m***.

So what we should do to fix the previous example
is the following:

```scala
manager = person.getManager()
```

This involves a refactoring known as
["Hide Delegate"](https://refactoring.com/catalog/hideDelegate.html):

{{<figure caption="Reorganizing the Person class to allow Hide Delegate" src="https://d2dspjyoh5c79p.cloudfront.net/6c9d1df7-f30d-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

## Middle man

> "Tell me why\
> Everything turned around\
> Packing up\
> Shacking up's all you wanna do"

It turns out that if we apply the Law of Demeter indiscriminately we
can get ourselves into a mess.

Suppose we now add to the Person class the methods
getDivision(), getDirector(), getCountry(), getDivisionManager(), etc,
to access different objects within the hierarchy.

The Person class becomes an object everything else
depends on, and it in turn ends up depending on many more classes.
It becomes a middle man. Everything has to go through this
class, which is not good either.

This symptom, or code smell, is called
[MiddleMan.](https://refactoring.com/catalog/removeMiddleMan.html)

What is the solution to this problem?

The bad news is that the solution to this code smell is called Message
Chain, the famous message chain we were trying to run away from a
moment ago. :D

## Middle men vs. chains

> Don\'t stop thinking about tomorrow\
> Don\'t stop, it\'ll soon be here\
> It\'ll be here better than before\
> Yesterday\'s gone, yesterday\'s gone

This can be somewhat distressing. On one hand we are told that method
chaining is an interesting pattern to use, and so is the chain
of responsibility, but on the other hand the message chain, which
looks like method chaining, violates the Law of Demeter. And in the
effort to respect the Law of Demeter we can fall into the MiddleMan
trap, for which the only way out is to violate the Law of Demeter
by introducing the message chain. It's enough to drive you crazy!

That is software design: a series of decisions among
requirements that sometimes conflict.

But also, doesn't it seem to you that we have stumbled onto something more
fundamental here?

We have, because this dichotomy between centralizing and decentralizing, placing
the responsibility at a central point versus distributing it along a
chain, is something that shows up in different contexts, not just technological ones.

Think of another chain, very famous these days. I mean the Block
Chain. It is a technology that lets you distribute trust, or to be
more precise, consensus, across a whole network that **works
collectively**, using an **immutable chain** to do it.

Blockchain is an interesting solution that we will start studying in
the following articles. Some questions I intend to answer are:
what is blockchain good for? Is blockchain the right solution
for certain problems, or is it sometimes better to use a **MiddleMan**?

Although this article seems to be about programming, it actually isn't.
It is about solution design, about constraints and, of course, rock
and roll.

In this text I have tried to introduce some basic concepts that are
needed to understand what's coming, so I invite you to stay
tuned for the second article in this series, which I have called ***"The
Chain"***, where we will take a little detour to talk about consensus.


### Notes:

The quotes are from the songs "The Chain", "Dreams", "Second Hand
News" and "Don´t Stop", from the album "Rumours" by Fleetwood Mac, the band
that will keep us company on this adventure.

[^1]: There are more anecdotes about The Chain at [Songfacts.](http://www.songfacts.com/detail.php?id=6269)

[^2]: Examples taken and adapted from Wikipedia:
[https://en.wikipedia.org/wiki/Method\_chaining](https://en.wikipedia.org/wiki/Method_chaining)

[^3]: You can read about applying DSLs with method chaining in this article
on InfoQ [https://www.infoq.com/articles/internal-dsls-java](https://www.infoq.com/articles/internal-dsls-java)

[^4]: The Chain of Responsibility pattern was described by the [GoF](http://wiki.c2.com/?GangOfFour)
in the book [Design Patterns, Elements of Object Oriented Software.](http://wiki.c2.com/?DesignPatternsBook)

[^5]: A code smell is any symptom in the source code of a
program that indicates there is a potential problem:
[https://en.wikipedia.org/wiki/Code\_smell](https://en.wikipedia.org/wiki/Code_smell)


