---
title: "Illegal activities"
authors: [admin]
date: 2010-12-04T18:25:11-03:00
slug: "illegal-activities"
draft: false
tags: ['wikileaks', 'internet', 'leaks','security']
image:
  placement: 3
---

![](Logotipo_de_Wikileaks.jpg)

Although Wikileaks has been running since 2006, the recent events
around the leak of diplomatic cables from American embassies have
brought it not only more publicity, but also more technical problems,
and a serious threat to the viability of the project.

There are three aspects of the infrastructure behind Wikileaks whose
vulnerabilities you could see coming, and I am going to look at them to
try to understand how this organization of seasoned hackers managed to
put itself in such a risky position.

First, faced with a massive denial-of-service attack (DDoS), Assange's
team moved part of its operations to Amazon's cloud servers, but in less
than 48 hours the service was revoked with no explanation whatsoever.
The move is controversial, but Amazon could have grounds for it: [section
3 of the Customer Agreement](http://aws.amazon.com/agreement/#3) lists
the reasons why Amazon can cut off its services (point 3.4.1 (vii) in
particular seems to me to apply here).

Well, this is a case for [the World Privacy Forum's
recommendations](http://www.worldprivacyforum.org/cloudprivacy.html),
which we talked about in March 2009 when I published the [tips for using
cloud computing](/en/blog/lnds/2010/12/04/tips-for-using-cloud-computing/):

-   Read the Terms of Service before placing any information in the
    cloud. If you don't understand the Terms of Service, consider using
    a different cloud provider.

-   Don't put anything in the cloud you would not want the government or
    a private litigant to see.

-   Make sure that you are not violating any law or policy, by putting
    data in the cloud, and think twice before putting any consumer data
    in the cloud.

-   Read the privacy policy before placing your information in the
    cloud. If you don't understand the policy, consider using a
    different provider.

-   Will the cloud provider give advance notice of any change of terms
    in the terms of service or privacy policy?

I would not have published Wikileaks' information on Amazon's cloud,
because the most likely outcome was that they would get some notice from
the FBI or the US government requesting that the service be suspended.

The second aspect has to do with DNS. Wikileaks.org was registered with
[EveryDNS](http://www.everydns.com/). On December 3 this service
announced it would suspend service to Wikileaks because of the attacks
on the name server, which would affect another 550,000 domains.

Attacks on name servers are another weapon in the arsenal of any hacker
who wants to hurt a site like Wikileaks. Every computer security expert
will tell you that if you want to take down a site like Wikileaks, the
first thing is to deny service to the web servers, and the second is to
attack the DNS.

All the external elements, the ones not directly controlled by
Wikileaks, are sure targets for these illegal activities. Because an
attack of this kind is an illegal act, carried out to hurt a business,
or in cases of cyberterrorism. The only other "justification" would be
an act of [cyberwarfare](http://en.wikipedia.org/wiki/Cyberwarfare), but
that only happens between countries in conflict (real conflicts or cold
wars, as in some incidents between China and the USA, in Belarus,
Korea and others).

But the third vulnerability was [revealed
today](http://thelede.blogs.nytimes.com/2010/12/04/paypal-suspends-wikileaks-account/),
and it is also on the perimeter: it has to do with cutting off
Wikileaks' funding. Paypal [states on its official
blog](https://www.thepaypalblog.com/2010/12/paypal-statement-regarding-wikileaks/):

> PayPal has permanently restricted the account used by WikiLeaks due to
> a violation of the PayPal Acceptable Use Policy, which states that our
> payment service cannot be used for any activities that encourage,
> promote, facilitate or instruct others to engage in illegal activity.

And there are the terms of service again. PayPal is an important part
of the infrastructure of the new cloud services, and you have to read
its contracts. It is no surprise that these companies, faced with this
kind of problem, will quickly suspend service. We may not like it
politically, but you can't fault them for it: the terms are clear, and
we know that if we want to build something like Wikileaks on top of this
kind of cloud computing service, we are very likely to run into serious
trouble.

These are just three aspects; I don't want to get into the more
technically hardcore vulnerabilities. What surprises me is that Assange,
being such a renowned hacker, chose to trust cloud services to keep
WikiLeaks running, unless this is another shrewd political hack meant to
expose how fragile cloud infrastructure is in situations that make the
most powerful uncomfortable (could they be that shrewd?).
