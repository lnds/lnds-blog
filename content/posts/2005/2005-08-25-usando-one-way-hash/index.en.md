---
title: "Using one-way hashes"
authors: [admin]
date: 2005-08-25T22:25:11-03:00
slug: "using-one-way-hashes"
tags: ["security", "cryptography"]
draft: false
---

I wrote about this subject on [codeproject](http://www.codeproject.com/useritems/GoodbyeMD5.asp),
and I'm going to start writing about the same thing on this blog, but
in plain Spanish (in "Christian", as my grandma used to say).

The reason is that there are many bad implementations and applications
of cryptography, and since a lot of the documentation is in English,
many programmers don't have easy access to these subjects (learn
English, kids).

The crisis in hash functions

You can read about the crisis of popular hash functions all over the
internet, because of the recent discoveries in the field of cryptology.
For example, on the site of 
[guru Bruce Schneier](http://www.schneier.com/blog/archives/2005/08/new_cryptanalyt.html)
there has been an interesting discussion about the results that make it
possible to "break" algorithms like MD5 and SHA-1.

Earlier, I suggested that passwords must not be stored in a database in
plain text, and I wrote that:

[Don't store the password in the clear on your site. No matter how hard
you try, there is no such thing as a perfect security system. The best
thing is to hash the
password.](/en/blog/lnds/2005/08/10/dont-compromise-your-sites-security/)

One-way hash functions

The following definitions come from Bruce Schneier's book
["Applied Cryptography Second Edition":](http://64.233.163.132/search?q=cache:PAxf6qcSFiUJ:www.lnds.net/2005/08/+Archivos+Agosto+2005+site:www.lnds.net&cd=1&hl=en&ct=clnk#libro)

> A one-way hash function, H(M), operates on an arbitrary-length
> pre-image message, M. It returns a fixed-length hash value, h.
>
> h = H(M)
>
> where h is of length m.
>
> Many functions can take an arbitrary-length input and return an
> output of fixed length, but one-way hash functions have additional
> characteristics that make them one-way:
>
> Given M, it is easy to compute h. Given h, it is hard to compute M
> such that H(M) = h.\
> Given M, it is hard to find another message, M\', such that H(M) = H(M\').\
> \....
>
> In some applications, one-wayness is insufficient; we need an
> additional requirement called collision-resistance.
>
> It is hard to find two **random messages**, M and M\', such that
> H(M) = H(M\').

Hash functions used to store passwords

The definitions above lead us to a scheme for storing passwords
securely.

This use is described by the following algorithm:

1.  To store a password, ask the user to enter a password in plain text
    (plain*password), then apply a one-way hash function H to
    plain*password and store it.\
    In code:\
    stored*message = H(plain*password)

2.  To verify passwords, ask the user for a password, apply H to this
    trial password (probe*password), and compare it with the stored
    value, that is:\
    check ::= H(probe*password) == stored\_password

This scheme is only as good as the strength of the function H.

The problem is how to choose a suitable hash function. One of the most
widely used is the **MD5** function, which is under massive attack. For
example, on the site <http://passcracking.com/> you enter an MD5 hash
and then search its database for values that collide with the given
value.

Later on we'll see how to improve hashes by adding salt :)
