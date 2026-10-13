---
title: "Those strange new languages"
authors: [admin]
date: 2016-01-09T08:25:11-03:00
slug: "those-strange-new-languages"
draft: false
tags: ['programming', 'programming languages', 'challenges']
image:
  placement: 3
---

> If I like love songs\
> and I like those strange new hairdos,\
> I don't want to criticize anymore,\
> I just want to be a nurse.\
> -- Charly García

I always wondered what Charly meant by "I just want to
be a nurse" (a line from the song ["Esos raros peinados nuevos](//www.youtube.com/watch?v=qYo8e8AIW10)", "Those strange new hairdos"). 
It turns out there is an interesting anecdote behind it.

> The story goes that Charly once saw a guy
> snorting an outrageous amount of cocaine. He warns him to stop, that he's going to
> end up on the other side, and the guy carried on as if nothing. It was a sure thing that
> he was about to overdose. But no, he had an epileptic
> seizure, which, together with his jaw locked up from all the lines
> he had done, made it impossible to straighten it. Charly gave him a
> few good punches until he broke his jaw, straightened out his
> tongue and saved his life. That is the origin of the Nurse. Some time
> later, Charly would play a supporting role in the film "Lo Que
> Vendrá", for which the New York critics gave him the award for
> best supporting actor. His role was that of the nurse

(Source: [Raros Peinados Nuevos](//charlygarciaelautor.blogspot.cl/2008/05/raros-peinados-nuevos.html),
taken from the blog [Charly, Autor](//charlygarciaelautor.blogspot.cl/))

If there's one thing about Charly García, it's that in his day he knew very well how to
reinvent himself and take on new styles of music. In the eighties he got past
that stage when he "went off with the hippies, had a love and also a whole lot
more", with great success.

That's what you have to do, I think: keep doing something new.

> And if you're working for nothing\
> and you're doing something new, go ahead.\
> -- Charly García

But I don't want to talk to you about Charly, although it would be very interesting,
given the many anecdotes about the man. No, what I want to
talk about is those "strange new languages".

These are the best of times to be a developer, but they are also
the worst of times to be a developer. As Jano González says,
it looks like we have a new paradigm: "Hacker News Driven
Development".

Every week, or maybe every day, new frameworks,
programming languages and technologies show up on Hacker News, and the new
generations of developers, afflicted with attention deficit
disorder, run off to reimplement their latest project with whichever tool
has the most likes.

But, as Charly says:

> I don't want to criticize anymore,\
> I just want to be a nurse

So I intend to relieve a bit of the anguish of those
developers who don't know whether it's worth learning any of the
new languages that are appearing or reappearing all over the
place.

I'm going to take on the following challenge: I will solve 9 programming
challenges in 9 programming
languages.

The idea is to explore new languages, and languages that aren't so new
but have reappeared on the technology landscape.

The languages I'm going to explore are:

- Clojure
- Erlang
- F\#
- Go
- Haskell
- Kotlin
- Rust
- Scala
- Swift

I'm going to write 9 articles. In each one I will review one of the
languages and then describe the challenge, with my observations
on the experience of implementing it in each
language.

This is a long project and it may take several months, because it depends
on the time I have available, and I don't intend to solve easy
challenges.

The idea is to create challenges that bring out the strengths of some
languages and that are practical, showing situations similar to the
problems you face in the "real world".

> If what you like is shouting,\
> unplug the speaker cable.\
> Silence has action,\
> the sanest one is the most delirious.

There is a book called [7 languages in 7 weeks](//pragprog.com/book/btlang/seven-languages-in-seven-weeks), which I found unsatisfying. My idea is more ambitious in scope.

If all goes well, I may collect everything into a book (it would be great
to publish it in English, but there I need help from some kind reader).

The first challenge is already done and I'm working on the second.
So watch for the next post, because that's where this
series starts.

For the curious, this project is already on GitHub in this
repository: <https://github.com/lnds/9d9l/> where
you can look at the code.

## Closing note

Why these languages in particular? Did I consider other languages?

At first I only wanted to look at Go and Rust, two interesting
new languages that have become quite popular. That was when
I came across the book mentioned above (7 languages in 7 weeks) and decided
to widen the challenge.

I have a particular interest in JVM-based languages, since
looking into them can be useful for my work, and that led me to include
Scala, Clojure and Kotlin (I considered Ceylon, but in my opinion it has very
little acceptance among developers).

Functional programming is a paradigm that really holds my interest.
Clojure is a good functional language, but it's good to consider others,
and that's how I came to include F\#, a language developed by Microsoft
that fortunately is open source and can run on Linux and Mac using Mono.
And if we are going to study functional programming, it's important that I
show you Haskell.

I work mainly on a Mac, so I had to include Swift. That
makes 8 languages. But curiosity, the fact that being used by
WhatsApp has made it popular lately, and that it inspired
Scala's actor model and the use of channels in languages like Go and
Rust, led me to add the venerable Erlang to the list.

There are the nine: Go, Rust, Scala, Clojure, Kotlin, F\#, Haskell,
Swift and Erlang.

Other languages I considered:

- **Elixir**, built on the Erlang VM, is a language that aims to
take advantage of that VM with a simpler syntax than Erlang's.

- **D** is a language I have known for years but have never had
the chance to explore in depth, and I think Rust will end up
in a better position in the systems programming niche.

- **Ceylon**, a VM language that, like Scala and Kotlin,
aims to beat Java in terms of programming simplicity and
scalability. I suspect not many people use it outside Red Hat. We don't
see it show up in rankings like
[TIOBE](//www.tiobe.com/index.php/content/paperinfo/tpci/index.html) or
[RedMonk's](//redmonk.com/sogrady/2015/07/01/language-rankings-6-15/).
I think the popularity of
[JetBrains](//www.jetbrains.com/) tools is going to give Kotlin a bigger push
(especially among Android programmers).

- **ES6**. JavaScript is perhaps the most important language
today, along with Java. You can do everything with JavaScript, and it would be
interesting to study the new features ECMAScript 6 brings.
Another thing my list of languages lacks is support for prototypes,
which is the most interesting feature of JavaScript from the point of
view of object-oriented programming. However, I suspect that
some of the problems I intend to solve could be fairly
complicated to set up in a JavaScript-based environment (maybe
I'm wrong, so if some reader feels like following my
challenges and implementing them in ES6, that would be interesting).

- **Python (3.5)** is one of my favorite languages, but the idea is
to favor emerging or little-known languages.

- **Objective C**, I think Swift is
enough.

- **Ruby**, never.

- **PHP**, even less.

Which languages would you consider? If you like, you can join this
project by contributing solutions in other languages.
