---
title: "Headaches"
authors: [admin]
date: 2014-11-22T08:25:11-03:00
slug: "headaches"
tags: ["errors", "rant"]
draft: false
image:
  placement: 3
---

What I'm about to tell you is the plain truth. I haven't made anything
up and I have decided not to change the names, because nobody here is
innocent.

A few days ago I decided to buy something in the US and import it
through
[ChileBox](https://www.chilexpress.cl/chilebox/Default.aspx), the Miami
mailbox service from
[Chilexpress](https://www.chilexpress.cl/Views/ChilexpressCL/Home.aspx).
Everything was going fairly well: the item arrived in Miami and I was
notified by email that I had to enter the invoice in the system, along
with the product's FOB value, so it could be shipped as soon as
possible.

All sorted, the shipment dispatched to Santiago.

Yesterday, Friday, I was told by email that I had to pay the taxes and
the service costs. I looked closely at the amount of the excessive taxes
they charge us; they are so out of proportion that they deserve a piece
of their own. But I swallowed my libertarian ideas and got ready to pay,
because after all it's the only way to get my product. And that's where
the second headache began (the first one is the taxes, but that one is a
permanent ache).

ChileBox only lets you pay online with four banks. Over the years I have
had accounts at three of them; I closed my account at the third one a
month ago, fed up with its terrible service. Not that the bank I'm with
now is the eighth wonder of the world, but at least they make an effort
to, as the gringos say, ["suck less"](http://blog.codinghorror.com/how-to-stop-sucking-and-be-awesome-instead/).
ChileBox has no credit card payment through WebPay! (OK, here's another
topic for a deep analysis. Not everything is ChileBox's fault on this
point, and I think all of us who have worked with payment systems
suspect the reason, but let's get on with the story.)

The fourth online payment option is BancoEstado. There is a fifth
option, a bank transfer to ChileBox's account, but they warn you that in
that case the shipment is delayed. I ruled that one out because I have
already sat through that horror movie. And finally, you can always print
the invoice and pay at a ChileExpress office, but I was determined to
pay online; I didn't want to leave my house. Big mistake.

I went with the fourth online payment option. I remembered that my wife
has a CuentaRut, the basic debit account from
[Banco Estado](http://www.bancoestado.cl/), the state bank. I deposited
the money there and went back to the ChileBox site ready to pay.

Here comes the third headache. I had done all the package tracking from
my Mac using Safari. When the time came to pay, I pressed the payment
buttons and nothing happened on the page.

Well, that tends to happen, so I decided to use Chrome. I logged in to
the site and navigated to the point of pressing the BancoEstado payment
button, and suddenly a popup window appears telling me that the session
has expired!

Between the "login" and my pressing the payment button, fifteen seconds
can't have gone by. The shortest session in history!

Logout, try again, and the same little message: "session expired".

A parenthesis here. Many sites in Chile have problems with session
handling, especially with the Chrome+Mac combination. I once looked into
the cause and apparently it's a known problem, discussed in many
technical forums, but it seems nobody has taken the time to analyze it.
It's as if service companies believed that in Chile people only use
Internet Explorer 6 and Windows 95.

OK, I solved the problem with the old trick of going incognito in
Chrome. When I finally got past the session problems, I ran into
BancoEstado.

Let me take a deep breath for a moment\...

This is where the migraine starts. Pressing the BancoEstado payment
button opens a "popup" window (because in Chile all payments must be
made in a "popup"; it must be a "best practice") where I'm asked for a
RUT, the national ID number, and a user password (another "best
practice": using the RUT for everything). I'm using my wife's account,
remember. I enter her RUT and her password. The screen for "step 1"
appears, confirming the amount and that I'm about to make the payment to
ChileBox. Excellent. I press the button to continue to step 2 and a
message appears saying that the account cannot make that kind of
payment.

I close Chrome and repeat the process, but this is where the script
worthy of an early-career
[Roger Corman](http://en.wikipedia.org/wiki/Roger_Corman) movie begins.
My wife's account gets blocked. Blocked! She can no longer operate
online and has to call a phone number at the bank.

And to make things worse, I, the big dummy, decide to ask my oldest
daughter for help. She also has a CuentaRut she doesn't use, so I could
repeat the process with her help. And they blocked her account too!

I'm not making this up. Two accounts blocked for unknown reasons. But
that's not all. We're just getting started.

I decided to go get the money back through an ATM; my wife lends me her
RedBanc card. I head to a gas station, one of the few that still have
ATMs (because apparently "something" has led to their removal; it must
be that Windows XP is no longer supported by Microsoft ;).

This particular place has two ATMs, which is why I picked it. See how
clever I am! One of the ATMs is out of service, of course. The second
one works, but there's a line.

On average, Chileans take between 2.5 and 3.5 minutes to withdraw money
from an ATM. I know because I have measured it several times while
waiting. You can actually withdraw money in 30 or 45 seconds, given the
design of the interface and the latency of the transactions with the
bank (I know because I have measured that too). I have always wondered
why they take so long, but I never thought I would find the answer
minutes later that Friday.
I wait at least fifteen minutes and finally face the ATM. I insert the
card and select "Cuenta Vista", the demand account. I choose the amount
to withdraw and a message appears saying I can't withdraw that amount
because the balance is zero. Alarmed, I ask for a balance; after a while
the amount I had deposited appears, minus 300 pesos. Because BancoEstado
takes three hundred pesos from you when you check your balance.
Beautiful.

I try to withdraw the money again, this time with only half. No
problems. Then I try the other half and again the message that there is
no balance in the account. The solution: check the balance, and the
money appears (minus 300 pesos). That's how I had to withdraw a
different amount (a multiple of CLP 5,000, of course) and put together
as best I could part of the money I had deposited.

Now I have a possible explanation for why people take so long at the
ATM: they must be BancoEstado customers.

The next day (today, Saturday) I print the bill from the ChileBox site
and go to an office to pay, with cash and a little piece of paper, as if
we were in 1984.

I'm not going to tell you what happened at the branch because you would
think I'm exaggerating. I'll just add that if you want to contribute
data to the debate about the quality of education in Chile, go pay a
bill and take note of everything that happens.

So those were this weekend's headaches. I had to write them down, to
vent. In retrospect they are tragicomic, but\...

In general I don't see anyone happy with e-commerce web services in
Chile; very few of them must work properly. I'm not going to defend the
place where I work either: "let him who is without sin\..."

But some cases are extreme. It's also true that I made several mistakes.
I should have printed the bill and paid in person from the start, but I
trusted that everything could be solved online. How naive I am. That's
why I earn myself headaches.
