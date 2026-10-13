---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Usability, security and paranoia"
slug: "usability-security-and-paranoia"
subtitle: ""
summary: "Zoom and risk management in times of pandemic"
authors: [admin]
tags: [zoom, security, cybersecurity, "risk management", usability]
categories: [security, usability, business]
date: 2020-04-05T08:38:01-04:00
lastmod: 2020-04-05T08:38:01-04:00
featured: false
draft: false
math: true
# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "Paranoimia, The Art of Noise"
  focal_point: ""
  preview_only: false
  placement: 3


# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

> Relax\
You're quite safe here\
-- Paranoimia, The Art of Noise

Some eight or nine years ago we were about to migrate from [SVN](https://subversion.apache.org/) to [GIT](https://git-scm.com/) at my job.

We did some estimates and figured that in a couple of weeks we could migrate all our repositories to this new [distributed version control system](/en/blog/lnds/2010/07/11/distributed-version-control/).

Given that, I asked for GIT to be installed on the computers of the development team. The surprise was that the internal IT team refused, saying they couldn't install software "with serious security vulnerabilities" on our machines.

I found the answer unbelievable. I had to step in, but the damage was already done, and I had to explain and explain again at several levels, taking responsibility if anything happened because of using GIT.

The truth is they had a point: if you check CVE[^5] you'll see that GIT has had serious security vulnerabilities in the past: <https://www.cvedetails.com/vulnerability-list/vendor_id-4008/GIT.html>.

So, should we have given up on this powerful tool for those reasons?

I've heard anecdotes about companies that blocked access to every site ending in HUB to keep people off porn sites, which of course meant nobody could get to [GitHub](https://www.github.com/), the definitive source for the main open source projects in the world.

When you want to innovate or add a new piece of software to your toolset, you find that the standard answer from almost every sysadmin and IT department is a giant NO. And the excuse is that "audit, or information security, won't allow it."

![](no.jpeg)

That's not how it really is. If you talk to your auditors or risk managers, they'll tell you that what you actually have to do is manage the risk. If you declare the risks and define mitigating measures, you can use any tool you damn well please. It's the classic equation: more freedom, more responsibility.

In my experience, the people who know the least about risk management are the most paranoid about information security. And that paranoia does harm, because in the end it affects business continuity.

There is an inverse relationship between usability and security. And usability is vital to the success of your business.

If we had to express it as an equation it would be something like this:

$$Usabilidad = \frac{k}{Seguridad}$$

The more security, the less usability.

And guess what, there's another important equation:

$$Producto = F(Usabilidad)$$

Or, as [Steve Yegge](https://en.wikipedia.org/wiki/Steve_Yegge) puts it[^1]:

> [...] I'll argue that _Usability_ is actually more important than Security because dialing Usability to zero means you have no product at all, whereas dialing Security to zero can still get you a reasonably successful product such as the Playstation Network.

Yegge is referring to the 2011 security fiasco at the Playstation Network[^2], which exposed the personal data of some 77 million users.

There are people who say this is unacceptable. They're the ones who take security to infinity, and therefore usability to zero.

These are the people I call the information security paranoids, and this is their effect:

$$\lim_{paranoia\to\infty} Usabilidad = 0$$

We have to fight that paranoia, because if we keep going down that road we'll end up with no internet.

Relax a little.

## Zoom and risk management

> How do I get\
How do I get to sleep\
Please let me sleep\
Po-po-poetry, that'll work\
-- Paranoimia, The Art of Noise

[Zoom](https://zoom.us/), the teleconferencing platform, has become immensely popular these days because it has turned out to be an excellent tool for video conferences. Right now it's being used by companies, schools, universities, and groups of friends to stay in touch during these days of preventive quarantine and social isolation brought on by the coronavirus pandemic.

The service grew its number of active users by 67% in mid-March. On the stock market its share price rose 263%[^3].  All this success comes paired with paranoia about security and privacy. Some incidents from the past resurfaced, all of which attracts lawyers who specialize in class actions, bloggers hooked on clickbait and, of course, crackers, hackers and juaquers[^4].  

This is also starting to worry non-governmental organizations concerned with privacy, and cyber activists. Those concerns are legitimate and entirely appropriate; it's always good to take a critical view of the services we're going to use. But we can't be like those people who greet any innovation with a big a priori NO. What we have to do is a risk analysis, evaluate, and make decisions based on up-to-date information.

Let's do a bit of risk analysis for Zoom, and let's start with a comparative look at vulnerabilities, to begin sizing up the problem.

Do you know how many security vulnerabilities are reported in [CVE](https://www.cvedetails.com/) [^5] for Google Chrome?

The answer is 1,858 since 2008: <https://www.cvedetails.com/product/15031/Google-Chrome.html?vendor_id=1224>

In 2019, 177 vulnerabilities were published for this web browser: <https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-15031/year-2019/Google-Chrome.html>

Let's see what happens with Zoom. Since 2004, 5 have been published: <https://www.cvedetails.com/vendor/2159/Zoom.html>

In 2019, 2 were published: <https://www.cvedetails.com/vulnerability-list/vendor_id-2159/year-2019/Zoom.html>

Fine, it looks like Zoom isn't doing so badly on this dimension, but this needs to keep being monitored. The key here is: if you're going to use Zoom, keep the client on your PC, or the app on your phone, permanently updated, so that you stay clear of the flaws that cyber criminals can exploit.

There has been a string of reports of security flaws, which I won't analyze in this post. I'll leave you this [article](https://blog.rapid7.com/2020/04/02/dispelling-zoom-bugbears-what-you-need-to-know-about-the-latest-zoom-vulnerabilities/amp/)[^6] that explains how several of them were resolved, and how others are exaggerations or plain bad faith, which of course feeds the paranoia: <https://blog.rapid7.com/2020/04/02/dispelling-zoom-bugbears-what-you-need-to-know-about-the-latest-zoom-vulnerabilities/amp/>.

Again, the advice here is to keep Zoom's native applications up to date, or to use the client in the browser (if you're paranoid, don't use Chrome :wink:).

Then there's a relevant point that has to do with end-to-end encryption (E2E).
Here it's true that Zoom doesn't yet guarantee a level of encryption that allows for confidential communications. The advice for now is: don't talk about confidential or sensitive matters over Zoom. Use it for activities you would normally do in public or semi-public. In any case, Zoom offers on-premise versions of its servers for enterprise customers, where this can be reinforced (on LAN or WAN networks, or with VPNs)[^6]. In fact, Zoom's main focus was providing teleconferencing services to companies, where the security levels that can be implemented are stricter.

The last aspect is privacy. Here there have been paranoid complaints, such as that Zoom sends data to the Chinese government, or shares it with the NSA or the FBI, which are exaggerations or distorted interpretations of certain facts. It's true that the founder is of Chinese origin, and that Zoom has employees of that nationality, and it has servers in China, but also in the US and surely in other parts of the world, and it's required to comply with the regulations and laws of those nations. In this it's no different from other companies, such as Microsoft, Google or Amazon. There isn't much it can do, or we can do, about that, other than work through democratic means to get the laws changed so they protect our private lives.

The article in [^6] addresses several of these points, so I won't dwell much on this aspect. But privacy is important, and you should always review the terms of service before using one. If they don't satisfy you, or you feel the company providing the service doesn't inspire trust, well, the decision is yours. Do a risk analysis and weigh your needs against what the tool you're going to use offers you and restricts you from. But if you're going to start with an a priori NO, without analyzing, you may be missing out on opportunities because of a paranoid outlook.

## Final thoughts

> How do I, how am I\
Gonna get to sleep\
Trust me, trust me....\
-- Paranoimia, The Art of Noise

To wrap up I want to make a few comments about the overreaction to Zoom's security.

What strikes me is how fast the paranoia about Zoom escalated. For example, the Spanish Wikipedia page on Zoom opens by listing the information Zoom collects, losing the objectivity that's supposed to characterize it. There's clearly some biased editing going on there.

A number of influencers have proposed very bad solutions. I've seen tweets promoting alternatives picked at random, with no comparative analysis of risks and usability.

Do we know whether Zoom is more secure than Microsoft Teams, or Slack, or Google Meet? Are there comparisons? Do we do comparisons before choosing a tool?

One open source tool has been put forward: Jitsi Meet. But it's a solution that still has usability and security problems. For example, anyone with the URL of a Jitsi conference can join it, which allows for bombing, or simply spying on the conversation. Another example is an issue about an XSS that this platform may or may not have fixed; it isn't clear: <https://community.jitsi.org/t/xss-injection-on-jitsi-meet/15336/11>. You can set up your own Jitsi servers, but I tried it and it takes quite a bit of configuration, and the out-of-the-box options aren't secure enough yet.

I think what's missing in Zoom's case is more analysis of risk scenarios and more management. There's a lot of criticism, a lot of paranoia, but little analysis.

Zoom has been successful in a very short time, and it's a target worth many millions of dollars, so it will be the mark for attacks from juaquers, cyber criminals, lawyers chasing class-action money, and bloggers hooked on clickbait. NGOs and governments will demand changes to its security policies, and cybersecurity experts will be watching to see that the flaws get fixed and the protocols get better. I think that if Zoom keeps up the attitude it has shown so far, it will come out stronger.

I remember the case of Microsoft: they established a strict cybersecurity policy and got better at hardening their products. Zoom has responded quickly, has put quick mitigations in place, and has established a 90-day development freeze to fix security flaws[^7]. That's something you should also factor into your risk analysis.

Personally I think you can use Zoom with peace of mind, but if you're sharing very confidential things it's probably not the right platform.

But I'll tell you something: I don't know, nor do I have any way of knowing, whether there's an alternative that's more secure than Zoom. And serious security experts can't guarantee anything on that front either.

So you have to manage risks, accept them, take mitigating measures, and keep measuring, observing and staying on top of what's happening.

For now, relax about Zoom. They're taking care of it. There are more important things that should be keeping us up at night.

{{<youtube 6epzmRZk6UU>}}

[^1]: [Stevey's Google Platforms Rant](https://gist.github.com/chitchcock/1281611). In this post Yegge uses the word Accessibility, but since that term has another, more specific use, I've decided to replace it with Usability in this context.

[^2]: [2011 PlayStation Network outage](https://en.wikipedia.org/wiki/2011_PlayStation_Network_outage). This incident cost Sony money and forced it to change its privacy policies, answer to several governments and implement a range of security measures to ensure the continuity of its service. As of December 2019 it was estimated to have some 103 million active users; source: <https://www.sie.com/en/corporate/release/2020/200107.html>.

[^3]: Source: <https://markets.businessinsider.com/news/stocks/zoom-stock-price-surged-coronavirus-pandemic-video-work-from-home-2020-3-1029023594>

[^4]: To me a hacker is not a cyber criminal. On the contrary, a hacker can be seen as someone enthusiastic about programming and technology who reaches a certain level of skill in the field and has an ethic tied to the openness of information and software. A cracker, on the other hand, is in my opinion the real cyber criminal, who uses vulnerabilities in services or software to commit crimes such as information theft, financial fraud, cyber extortion, theft of money, or identity theft. Finally, juaquer ("hacker" spelled the way it sounds in Spanish) is a term I use dismissively for certain characters who are neither hackers nor crackers but pretend to be, without having the skills or the basic knowledge.

[^5]: CVE is an acronym for Common Vulnerabilities and Exposures. It's a list of recorded information about known security vulnerabilities in various software and services. You can read more about this list and its origin here: <https://es.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures>

[^6]: <https://blog.zoom.us/wordpress/2020/04/01/facts-around-zoom-encryption-for-meetings-webinars/>

[^7]: [A message to our users](https://blog.zoom.us/wordpress/2020/04/01/a-message-to-our-users/), a post by Zoom's CEO, Eric S. Yuan.
