---
title: "Credit card fraud"
authors: [admin]
date: 2018-07-29T08:25:11-03:00
slug: "credit-card-fraud"
draft: false
tags: ['security']
image:
  placement: 3
---
Credit cards were born in an analog, practically disconnected era,
and that makes them far more vulnerable today.

But they have always been vulnerable.

In the old days you paid by credit card in person: you walked into
the store, the clerk examined your card, checked that it wasn't on a
list of expired cards, and placed it on a curious machine like this
one[^1]:

![](https://d2dspjyoh5c79p.cloudfront.net/20f20c4e-933a-11e8-a030-2b5831f8ecb5-aa9f18b7)

Then they wrote the amount of the sale on a special carbonless paper
form and laid it on top of the card, like this:

![](https://d2dspjyoh5c79p.cloudfront.net/3f4f071f-933a-11e8-a030-2b5831f8ecb5-aa9f18b7)

Then they ran the roller over the paper and the card, and the card
number was imprinted on the receipt. You signed the slip and the
purchase was done.

This went on for many years; the mechanism even coexisted with the
early days of the internet. I remember hearing about a case, during
the first years of the internet in Chile, in which a restaurant
manager used those paper receipts to harvest card numbers that he then
used to pay for access to porn sites on the web.

Social engineering
------------------

The easiest way to get credit card data is simply to ask. Social
engineering[^2], in the context of computer security, is the set of
techniques for manipulating people in order to obtain sensitive
information such as passwords, identification numbers and, of course,
financial data like credit cards.

Often no manipulation is needed at all, because thanks to social
media you can now get this simply because people hand over their own
data:

![](https://d2dspjyoh5c79p.cloudfront.net/3b401920-933b-11e8-a030-2b5831f8ecb5-aa9f18b7)

![](https://d2dspjyoh5c79p.cloudfront.net/44b47281-933b-11e8-a030-2b5831f8ecb5-aa9f18b7)

You can find plenty of sensitive data, card details included, on
social media.

Carding
-------

Carding is the fraud built around obtaining credit card data. It
draws on a variety of techniques, such as stealing databases,
phishing, social engineering and harvesting information from
social media[^3].

Local "hacks"
----------------------

This week there has been a lot of talk about various "hacks" of
Chilean banks in which card data was supposedly stolen. What we are
really talking about is leaked lists of cards, which is data obtained
by gangs dedicated to carding.

It matters to use the precise terms, first because the word hacker
has nothing to do with crime [^4], and because it is important to
educate the public.

Every card is exposed
----------------------------------

Today carding has reached levels of sophistication that make the poor
security measures of credit cards all the more obvious.

As a remarkable post[^5s] on the BlackPloit blog explains, there are
manuals for carding, which rank credit cards in levels according to
how hard it is to obtain the data and spend the money:

**Level 1 (*Easy carding*)**: You can spend a maximum of 50 dollars.
You need:

-   Credit card.
-   Expiration date.

**Level 2 (Intermediate carding)**: You can spend a maximum of 2,000
dollars. You need:

-   Credit card
-   Expiration date
-   CVV code,
-   Customer's name
-   Bank account number.

**Level 3 (Hard carding)**: There are no set spending limits. You
need:

-   Credit card
-   Expiration date
-   CVV code,
-   Owner's name.
-   Bank account number.
-   Amount of money in the account.
-   Phone number.
-   SSN.
-   DOB.

Card numbers can be generated, and given today's computing power that
part is really not much of a problem.

A card's security rests on the expiration date and the CVV code, a
3-digit number. Generating the necessary combinations isn't hard
either.

Card issuers know about these vulnerabilities, but they prefer to
ignore them in favor of ease of use and mass adoption, and because
there is an associated insurance business that pays for the thousands
of mini frauds that happen every day. Your bank has surely called you
to ask whether you authorized a certain payment, or to tell you they
need to replace your plastic for security reasons.

According to Blackploit [^5], each bank can generate ten billion card
numbers, a number that looks pretty big but is no challenge for a
computer. On top of that, the way numbers are assigned follows certain
patterns. Add the fact that the CVV can be generated, and that the
validity of the cards can eventually be tested with micro
transactions. This scenario is feasible, and it shows that in practice
every card is exposed.

It is time to change these security mechanisms, and the card issuers
and the banks know it. The question is: why isn't it being done?


[^1]: Photographs taken from this
article: <http://fernandodecordoba.es/asi-se-cobraba-con-tarjeta-de-credito-en-los-80/>

[^2]: <https://es.wikipedia.org/wiki/Ingenier%C3%ADa_social_(seguridad_inform%C3%A1tica)>

[^3]: Chema Alonso explains some of the techniques in this 2013
piece: <http://www.elladodelmal.com/2013/12/carding-basico-ojo-con-donde-metes-tu.html>

[^4]: The word hack in its pure sense originated at MIT: "The
word at [MIT](http://web.mit.edu/) usually refers to a clever, benign, and
[ethical](http://hacks.mit.edu/Hacks/misc/ethics.html)
prank or practical joke, which is both challenging for the perpetrators
and amusing to the MIT community (and sometimes even the rest of the
world!).

[^5]: <https://www.blackploit.com/2018/07/hackeando-un-banco-3-hackear-14000.html>
