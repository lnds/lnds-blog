---
title: "We work the black seam together"
authors: [admin]
subtitle: "(The Chain, final part)"
date: 2018-03-17T08:25:11-03:00
slug: "we-work-the-black-seam-together"
draft: false
tags: ['blockchain', 'proof of work']
image:
  placement: 3
---

> This place has changed for good\
> Your economic theory said it would

I'm writing this with a certain reluctance. Because I have to explain
the part that, to me, is the most disappointing thing about blockchain,
or at least about the original implementation that comes with BitCoin:
the famous proof of work.

On top of that, I'm already bored with the subject, because what I see,
rather than a serious analysis of the constraints and advantages of an
interesting technology, is a fanaticism that tries to use blockchain for
everything and in the most ridiculous ways possible. So let's get this
bitter pill over with and stop talking about blockchain on this blog for
a good while.

First let's review what I've written so far. In my first post, 
[The Chain](/en/blog/lnds/2018/01/06/the-chain/), I talked
about chains, and their use in different aspects of software
development, in particular their use for architecting software
solutions, but the focus of that article was the idea of collective,
distributed work versus centralized work. It's a nice post, where I talk
more about software architecture than anything else, but where I show
the advantages and disadvantages of having a central intermediary to
guarantee the consistency of operations. All set to the music of
Fleetwood Mac, of course.

The second post, [To The Bone](/en/blog/lnds/2018/01/28/to-the-bone/), is
about distributed computing, and introduces the famous Byzantine
generals problem, something blockchain supposedly solves. The name
refers to a Steven Wilson song with a line that goes "Truth is
individual calculation", which applies in this context, where "truth",
defined as consensus, emerges from the individual calculation of the
individuals taking part in the network. 

In that article I explain what Byzantine faults are, and the protocols
that help solve this problem, like Gossip and Merkle trees, an elegant
solution used in many technologies.

It's worth stressing that these solutions predate blockchain: Merkle
trees were patented by Ralph Merkle in 1979.

Now, one of the aspects that intrigues newcomers to these technologies,
and that gets used as a marketing hook when talking about BitCoin, for
example, is the concept of mining. We're told that during mining the
nodes of the network, known as miners, "solve complicated mathematical
problems", and that when one of these miners solves this complicated
problem it gets a bitcoin as a reward.

When I read that description a while back I thought about how
astonishing that claim was. I pictured a network of distributed
computers solving complicated mathematical problems. What could these
computers be solving? I wondered. Are they trying to prove some famous
mathematical conjecture? Or trying to compute the largest prime number?
Or settle Goldbach's conjecture by brute force? Or analyzing the data
captured by the SETI program? Or are they simulating protein folding to
fight cancer? Analyzing the genomes of endangered species?

No, the answer is more prosaic and somewhat disappointing.

In very simple, rudimentary terms, the miners receive a number, have to
generate another random number, apply a function that is relatively easy
to compute (called a hash), and check whether the result ends in a run
of n zeros. If it doesn't, they try another number until they get a
figure that ends in n zeros.

Example: 

> Suppose my "hash" function consists of adding two numbers:
>
>                                 f(x, y) = x+y
>
> Then the mining process consists of receiving a number x and
> generating a number y, as many times as necessary, until f(x,y) is
> exactly divisible by 10,000 (that is, it ends in 4 zeros).
>
> Suppose I receive the number x=345,987. 
>
> Then I generate a random number; say it's y=2,452.
>
> I compute f(x,y) = 348,439. No luck. I increment y by 1 and repeat.
>
> f(x, y) = 348,440. I've got 1 zero, I need 3 more!
>
> I iterate 4,012 more times and reach the number 350,000, and I've hit
> the target: a number that ends in four zeros.

This process is known as proof of work, and it's very clever, because
it shows that the computer handing in a piece of work has had to invest
time to arrive at a result. Of course, in Bitcoin's case the function f
is much more complicated: it uses a double hash with the SHA-256
function, which guarantees that the process isn't as easy to guess as in
my example.

This proof of work (PoW) business is very interesting, and it was
created in 1993. The interesting thing about PoW is that it's an
asymmetric operation: it's very hard to generate the result, but very
easy to verify it.

One PoW algorithm is HashCash[^1], which is used to fight SPAM. For
example, when it receives an email, a mail system gets the following
header:

    X-Hashcash: 1:52:380119:calvin@comics.net:::9B760005E92F0DAE

To verify that it was sent by a recognized sender, the mail system
computes the SHA-1 function over this header (leaving out the word
'X-Hashcash:'). If you do that you get the following:

    0000000000000756af69e2ffbdb930261873cd71

A number with 13 zero digits at the start. To generate that hash, the
sender had to compute the hash 2 to the power of 52 times, using a
process very similar to the one I described above.

> "They build machines that they can't control\
> And bury the waste in a great big hole\
> Power was to become cheap and clean"

Bitcoin uses a more complex hash algorithm, and today the difficulty is
such that specialized hardware is required to do these calculations. The
miners have turned into sophisticated facilities that consume enormous
amounts of energy.

That, in my opinion, is the disappointing part of this technology,
because greed has led to things as bizarre as this datacenter in
Iceland, dedicated solely to mining bitcoins

![](https://d2dspjyoh5c79p.cloudfront.net/1a3d0d3c-29dd-11e8-a030-2b5831f8ecb5-aa9f18b7)

Or towns taken over by bitcoin miners[^2]

I think this is insane. Regardless of the fact that blockchain has
applications in a number of interesting technologies, you have to be
careful about how it's used, because the bitcoin case is a warning of
how expensive running these processes can get. 

Today there are alternatives that are more efficient in time and
resources, like the Ethereum network, which is based on a different
principle, such as Proof of Stake[^3], but there is criticism of these
algorithms, since they might not be able to reach consensus, or could be
manipulated to reach a consensus. But that's wading into even deeper
waters, and I'm not much in the mood to keep talking about blockchain.

There are people who have explained it better than I have, in any case,
and I recommend reading them. A good introduction is
[this one](https://medium.com/coders-pen/qu%C3%A9-es-el-bitcoin-y-c%C3%B3mo-funciona-8b36adf5f80b)[^4]. 

And with this I end my series on blockchain.


[^1]: Wikipedia: [<https://en.wikipedia.org/wiki/Proof-of-work_system>](https://en.wikipedia.org/wiki/Proof-of-work_system")

[^2]: <https://www.politico.eu/article/this-is-what-happens-when-bitcoin-miners-take-over-your-town/>

[^3]: <https://en.wikipedia.org/wiki/Proof-of-stake>]

[^4]: <https://medium.com/coders-pen/qu%C3%A9-es-el-bitcoin-y-c%C3%B3mo-funciona-8b36adf5f80b>
