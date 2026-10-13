---
title: "The problems with a plebiscite"
authors: [admin]
date: 2011-10-08T08:25:11-03:00
slug: "the-problems-with-a-plebiscite"
tags: ['politics']
draft: false
---

> Never attribute to malice what can be explained by
> incompetence -- Napoleon Bonaparte

Enzo Abbagliati (\@cadaunante) is quite right in his critique,
"[the plebiscite that wasn't](http://www.cadaunadas.net/2011/10/el-plebiscito-que-no-fue.html)".
Enthusiasm is no excuse for doing things badly, least of all if you want
a citizens' movement to earn some degree of legitimacy.

Years ago I took part in one of the official vote-counting processes, during
the presidential election that Eduardo Frei won, and there I got a
firsthand feel for the technological and logistical difficulties of running a
vote, and that was with a team led by friends who
[were already experts in this kind of thing](/blog/2008/10/los-hackers-del-5-de-octubre.html).

Around that time we also explored the possibilities of electronic
voting. Personally, I believe there is no technical way to do
electronic voting right. Even less so over the internet. Some people think
otherwise, especially the ones who sell electronic voting solutions.

After reading \@cadaunante's reflection I decided to take a
cursory look at the site
[www.votociudadano.cl](http://www.votociudadano.cl), where you can
cast your vote over the internet. Several things jump out
from a computer security point of view

-   There is no digital certificate, and no secure session using SSL (the
    https protocol)

-   The site is written in php, and GentleSource Form Mail was used. Thanks
    for tipping off the hackers about the tool you used; now it's
    just a matter of seeing which vulnerabilities affect this product and launching
    the attack.

-   There are no captchas, so it's very easy for someone to program a
    bot to inflate the vote (\@cadaunante says you can only vote
    once, but gives no details of the test he ran. I don't have time
    to try it, but several things need checking: do they validate the IP? what happens
    when connections come from behind a proxy, from a shared
    wifi router at home, etc.)

-   No stress tests were done, and what's worse, nobody
    contacted the (American) data center provider to
    let them know the site might get abnormal traffic (which is what
    happened): [the provider blocked the account because it figured
    it was under a denial of service
    attack](http://www.votociudadano.cl/contenido/comunicadoVC.php).

-   Back to the tool they used. GentleSource Form Mail is
    a php script that sends form submissions to an email
    address. There is no database here, so *\*every vote in
    this plebiscite is landing in somebody's inbox. \**This is worse
    than bad, it's scandalous, because the form also asks for each
    voter's RUT, the Chilean national ID number. Forget about the anonymity a
    vote like this is supposed to guarantee; it doesn't exist.

I don't have time for a deeper analysis; some hacker
reading this post can do a more detailed examination. But I'll tell you that the
[statement from the Voto Ciudadano technical team](http://www.votociudadano.cl/contenido/comunicadoVC.php) is
insufficient. I don't think there's any need to blame a supposed attack on the
site for the failures. No need to get that paranoid; just
remember Napoleon's line: if this electronic plebiscite fails, it's
because of the incompetence of the people who implemented it. A pity, because I'm
sure there are plenty of experienced professionals who would have been
delighted to support this project.

If the subject interests you, have a look at this presentation by Javier Smaldone:
[Is electronic voting compatible with democracy](http://blog.smaldone.com.ar/files/evoto/voto_electronico.pdf)?
