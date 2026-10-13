---
title: "#SecurityChallenge"
authors: [admin]
date: 2018-08-09T08:25:11-03:00
slug: "securitychallenge"
draft: false
tags: ['security', 'guest villain']
image:
  placement: 3
---

In the following article my friend Cristián Rojas, a cybersecurity
expert, invites us to change and take responsibility for security, in
what he calls a \#SecurityChallenge. I invite you to read it, share it
and follow his advice:

**\#SecurityChallenge**
=======================

**Author: Cristián Rojas, MSc., ISO27K1 LI, CSSLP**


Once again, thanks for the invitation to write an article for
[LNDS](https://www.lnds.net/).


A few weeks ago Eduardo and I met to talk about how little interest
cybersecurity generated in the IT community and in the press. Not even
two days went by before a string of events began: the Banco de Chile
incidents and the leak of credit card numbers, which, added to other
cybersecurity events such as EQUIFAX USA and WannaCry, have generated
fear. A fear that has awakened the interest of the community and of
society in the subject.

For me these last few months have been months of reflection on how we
have handled cybersecurity. I have watched incidents, vulnerabilities,
[botched disclosures](/blog/lnds/2012/11/20/disclosure-no-es-llegar-y-hacerlo),
the recent interest of Whatsapp/Telegram/[Signal](https://signal.org/)
groups in cybersecurity (when it used to be a subject they didn't much
care about), but I have also witnessed false prophets. With the recent
interest in cybersecurity, voices have emerged that, out of a zeal that
is not necessarily malicious but is certainly misdirected, have given
the public inaccurate information with a touch of sensationalism.

![](https://d2dspjyoh5c79p.cloudfront.net/e31f08d6-9c3d-11e8-a030-2b5831f8ecb5-aa9f18b7)

An interesting case is that of Senator Felipe Harboe, who, reacting to
the recent massive leak of credit card numbers, recommends changing
your password. Which password? The one for the bank's web platform?
That change does nothing to mitigate the situation. The PinPass? That
is only for in-person purchases in Chile. Once the PAN, the CVV[^1] and
the card's expiration date have been exposed, there is nothing left to
do except request that the card be blocked,
[as Eduardo points out in his post](/en/blog/lnds/2018/07/29/credit-card-fraud/).
Whatever happened to talking to experts, or getting advice from them,
before giving out incorrect information, especially when you are an
authority?

> All the experts I have talked to have completely played this
> down (\...) for example, the site where millions of Chileans have
> entered their data over the last two months, which is the
> site [micompensacion.cl](https://micompensacion.cl),
> has been hacked several times.
>
> Patricia Politzer, Mesa Central, Canal 13, July 29, 2018.

To make matters worse, nobody talks about how to defend yourself or how
to create a security culture; they only talk about attacks, about
vulnerabilities and about how scandalous our lack of security is, as
Politzer did and [as Pedro
Huichalaf did](https://huichalaf.cl/identidad-digital-ciberseguridad-y-las-7-lucas-del-confort/),
both referring to the case of the _7 lucas del confort_ site (the
CLP 7,000 compensation paid to every Chilean over the toilet paper
price-fixing cartel).

In the case of the former Undersecretary of Telecommunications, he even
mentions 2 facts that really catch the eye. First, he says the system
does not validate against banking *spoofing*: that is, somebody coming
along and pocketing another person's 7 lucas by entering the victim's
RUT (national ID number) together with their own bank account.]

Indeed, the system doesn't do that. It is the banks that perform that
check. Anyone who has made a mistake when making a transfer through
their bank's website knows this. Second, the former undersecretary also
talks about *tampering*, meaning that the page was maliciously
modified. The truth is that the page did go down the day before its
launch, but the site had not been opened to the public (that is, it was
not accepting data yet), and measures were taken to prevent further
outages. How do I know that?

Me, who is neither a distinguished academic, nor a famous journalist,
nor one of the experts Politzer mentions? Because the company that
developed the system for SERNAC (the consumer protection agency) asked
me to advise them on hardening its security. I helped them apply
several controls: two-factor authentication, access controls, backups,
encryption of information, and it was during that consulting job that I
learned what I know.

Do I mean by this that the 7 lucas del confort site is infallible? Not
at all. In fact, 100% security is impossible, in the physical world as
much as in the virtual one. However, pointing fingers without evidence
or knowledge, or looking to cause a sensation, strikes me as
irresponsible at the very least. Make no mistake: I consider myself a
capitalist (in fact Eduardo himself sometimes teases me about being an
*Austro-libertarian*), but profit is moral as long as it works for both
parties, not when it chases sensationalism at the expense of those who
design, implement and run IT systems.

And here I want to stop for a second: I am not without sin. Many times
I have done the same thing that is being done today: cast the first
stone and shout from the rooftops "THAT SYSTEM IS INSECURE!!!", but
this year, with several cases I have come to know about, I have
received a dose of humility. I have realized that many of these systems
are run by professionals who, while they lack the knowledge, also act
without malice.

Another thing I have witnessed is that many voices call on the
government [to do something. They ask for more regulation, more
regulation and more regulation. And, on the one ]{style="letter-spacing: 0.01rem;"}[hand, they are not
wrong. We have practically antediluvian laws, such as Law 19.223 on
Computer Crime, which has barely 4 very general articles and was
created before the Internet. However, nobody thinks about what we can
do ourselves. Yes, us: people, companies, schools, universities,
NGOs, etc., to truly adopt **a security culture**: finally realizing
that the use of Information Technology does not only create benefits,
it also carries risks. So I am going to close my post, no longer by
calling on others to be better, but by being better myself. And to
that end, here are some tips to start down the road to a security
culture, or rather, [since it is so much in
fashion](http://www.ahoranoticias.cl/noticias/tendencias/232289-video-carabineros-alerta-sobre-infraccion-a-la-ley-de-transito-al-realizar-el-kiki-challenge.html),
I propose a ***Security Challenge***:

1.  IT is like the tale of Snow White: while it brings very beautiful
    things with it, there is also a [wicked witch]{.underline} behind
    it. Careful. And think about security from the start. When you do
    it halfway through the project, or once it is finished, it is no
    longer as effective.

2.  If you are working on your computer and you step away from it, even
    to go to the bathroom, grab a coffee, go to a meeting with your
    boss, go to lunch, whatever it is, lock your screen.

3.  Use two-factor authentication: if for any reason your password gets
    stolen, they will still have a barrier to get through before
    reaching your information: something you have. In this case your
    phone (with an app like Google Authenticator, FreeOTP or Authy) or
    a hardware key.

4.  And about the password, never use the same password on 2 different
    systems. Too many passwords to remember? Password managers
    (KeePass, LastPass, etc.) can help you.

5.  Encrypt your information. Your hard drive is not encrypted by
    default. Use BitLocker or FileVault.

6.  And related to the previous point, back up your information
    regularly. Don't assume that external hard drive you use is secure
    by default. Encrypt it too.

7.  If you are a developer, be very clear that the security of your
    application depends on you, not on a CISO or a security officer.
    Educate yourself. Have no doubt: your application will have
    vulnerabilities. Learn to mitigate them, the same way you learn to
    mitigate the bugs it has. Remember the words of the creator of the
    best password storage algorithm for Ruby[^2]: *"It's your
    responsibility as a web developer to make your web application
    secure -- blaming your users for not being security experts is not
    a professional response to risk."*

8.  Lock your phone. It holds a lot of very important information, both
    personal and from your company. And please, don't use the unlock
    pattern on Android. It is the same as having no security.

9.  Don't leave important documents on top of your desk. Keep them
    under lock and key. And when you send something to the corporate
    printer, go pick up your documents right away.

10. If that email gives you a bad feeling, don't click on its links.
    It's that simple.

11. [With great power comes great responsibility](https://medium.com/mejorindustriati/dos-s%C3%ADntomas-de-c%C3%B3mo-no-tomamos-en-serio-la-seguridad-af06586b8e07).
    If you design, implement or operate information systems, keep in
    mind that what you hold in your hands is people's information.
    Protect it.

12. Pause. Resist the temptation to rush that email, that tweet, that
    Facebook post. Look carefully at who will see it. And once you are
    sure, only then hit *send*.

[^1]: The PAN (Personal Account Number) is the 16-digit number on the
front of [the card. The CVV (Card Verification Value) is the security
code located ]{style="letter-spacing: 0.01rem;"}[on the back of
it.]{style="letter-spacing: 0.01rem;"}

[^2]: [https://github.com/codahale/bcrypt-ruby](https://github.com/codahale/bcrypt-ruby%3E)
