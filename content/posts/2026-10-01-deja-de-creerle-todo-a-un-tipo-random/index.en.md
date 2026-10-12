+++
date = '2026-10-01T10:00:00-03:00'
title = 'Stop believing everything a random guy on Twitter (X) says'
slug = "stop-believing-a-random-guy-on-twitter"
tags = ["AI", "agentic programming", "software engineering", "DHH", "quality", "courses"]
draft = false
+++

Gil Gerard, an eighties actor who starred in the sci-fi series Buck Rogers in the 25th Century, realized how much potential there was in exploiting a large fan base. It was already happening with Star Trek conventions, and he suggested to his colleague and co-star Erin Gray that she book him at sci-fi conventions in exchange for a 10% cut.

{{<figure src="buck-rogers.jpg" caption="Erin Gray and Gil Gerard, Buck Rogers in the 25th Century (1979).">}}

Gray started a company, "Heroes for Hire", and was very successful with it. Because geeks have money, and sometimes don't know how to spend it, and they pack conventions in costume and pay exorbitant sums for an autographed photo.

There's something about nerds: we're smart about a lot of things, but pretty limited in others.
Suspension of judgment is very common in the tech world on social media.
Otherwise I can't explain the success of characters like Uncle Bob or DHH.
The latter is like Gerard and Gray, but on steroids. He exploits his fan base to sell them his technology of dubious quality.

Recently, in the Rails World keynote, he spent his time pontificating about agent-based programming. In his talk he mentioned that in the last year he wrote more code than in all the previous years of his career. In one month he wrote 150,000 lines of code, when his average had been 50,000 lines a year.

{{<figure src="dhh-rails-world.jpg" caption="DHH in the Rails World 2026 keynote: \"We're done writing code by hand\".">}}

That claim made me raise an eyebrow. The last time I had that feeling was when I opened a book on software engineering, highly recommended on social media, a few years ago. In the preface the author proudly declared that he had written some 250,000 lines of code in his career (he's an academic). I didn't get past that paragraph. What is someone who has written so little code in his life going to teach me!

I've also written an average of 50,000 lines of code a year, but in personal projects. That's the figure I pulled from GitHub; unfortunately I no longer have access to the Uber and Cornershop repos from the last 5 years, or to all the code I wrote in my first professional years in the nineties. In 2025 I started seriously using AI to program, and that's when I made the jump to 175,000 LOC (50% of those at my current job). This year I've "generated" more than a million lines of code. Incredible, right?

## Stop believing everything a random guy on Twitter (X) says

Where I differ from DHH is that I do believe you have to look at the code you generate with AI. I don't read all of it, obviously, I couldn't, but I can assure you I could understand any random fragment of that code, because I make sure the code that gets generated is understandable, maintainable and secure.

DHH and other "celebrities" maintain that you don't need to read code anymore, that "adversarial" techniques are enough to inspect it. That the most important thing is to generate code fast, taking advantage of the speed at which AI writes.

I say that's not software engineering. It's the software equivalent of pseudoscience.

On the other hand, a lot of these characters build a very limited kind of application or system. Basecamp and 37Signals' web products are a small subset of all the possible systems we can program.

But on top of that...

Look...

Poor DHH. He launches Omarchy and people find piles of vulnerabilities in it. He talks about how at 37Signals they no longer look at the code, and Basecamp along with Hey have a serious outage and their users can't use those products for a good while, and he ends up embarrassed.

We software engineers are arrogant assholes, and these things happen to us. I'm not going to say that I haven't had incidents in my work, or that I haven't made serious mistakes. But I take care to admit that it happens, and I have enough battle scars to be cautious in my claims and more cautious with the code I push to production.

# Writing a lot of code is a problem, not an advantage

Developing software faster is not a virtue, not even an advantage. It's a problem, and a serious one. Code has to be readable, and not because you're going to read it, although it would be good if you did. The reason is that LLMs need to read it.

Until we change the AI model, we need source code written in traditional programming languages. And that code has to be readable by humans and by machines, because it has to be auditable. When there's an incident, a human has to be able to look at it and understand it, whether to fix the problem or to write the post mortem.

But how do we guarantee that the code is good quality? Well, we have tools that predate LLMs that let us ensure that quality.

[Kimun](https://github.com/lnds/kimun) is a distillation of some of those tools; [in this post](/en/blog/lnds/2026/02/25/kimun-measuring-ai-generated-code-quality/) I explain how it measures the quality of AI-generated code.

Tests are essential too, but how do you know whether those tests are any good? [Kalku](https://github.com/lnds/kalku) is my answer to that question, but I'll talk about that in the next post.

{{<figure src="kalku-mascota.png" caption="Meet Kalku, a sorcerer whose job is to tear your tests apart.">}}

And are there ways to formally verify the race conditions of a concurrent process? Yes, there are.

In the upcoming articles I'm going to explain how to do all of these things, but if you want to learn it properly I have news for you.

And this is where you should get suspicious, because I told you not to believe a random guy on the internet, and I'm one of those and I want to sell you something. Oops.

I'm teaching a course next week where I'll explain all of this.

It's six online sessions, classes over Zoom, which will be recorded and available for you to watch later.

In the first session we'll look at how to direct the agent. We'll learn about prompt styles and the methods that have been emerging to give the work structure: spec-driven development, SPDD, BMAD and others. What problem each one solves, and when the method outweighs the model.

The second session focuses on subagents and orchestration. We'll see when it pays to split the work and when a single agent gets more done. We'll go over orchestration patterns and the real cost of coordinating.

Then come two sessions on how to build a harness, the scaffolding around the agent: what context it receives, what tools it has at hand and what rules govern it. How you hook it into the work cycle, create your own commands and connect it to your services. In the end the harness stops being configuration and becomes part of the repository.

The final sessions center on verification: tests as a contract. What kind of test is good for what? And the uncomfortable question: do your tests catch anything?
And we'll learn about formal methods, quality and evolution. Where tests no longer cut it: an introduction to Lean and its close relatives. And how code written at high speed ages.

If you're interested in learning, I invite you to sign up. The link is: <https://ediaz.dev/cursos/agentes-avanzado/> (in Spanish). When you fill out the form, enter the code LNDS-250 in the "¿Algo más que deba saber?" ("Anything else I should know?") section and you'll get the promotional price (CLP 250,000 or USD 250).

And if the course doesn't interest you, I still invite you to subscribe to my newsletter, or to wait for the next series of articles, because I'll be talking about a lot of interesting things I've learned and want to share with you.

---

*If you want to follow this discussion without depending on random guys on Twitter, subscribe to the newsletter at [newsletter.lnds.net](https://newsletter.lnds.net) (in Spanish). And if what I write has been useful to you, consider supporting this blog on [Patreon](https://www.patreon.com/lnds): that's where I publish extra content, and those who join take part in choosing the topics I cover here.*
