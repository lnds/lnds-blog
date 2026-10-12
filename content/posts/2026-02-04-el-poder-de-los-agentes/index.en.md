+++
date = '2026-02-04T21:30:00-03:00'
title = 'The power of agents'
slug = "the-power-of-agents"
tags = ["AI", "agents", "Claude", "software development", "productivity"]
images = ["espectro-ia.png"]
+++

As I write this, I have two Claude agents working on a personal open source project. One is reviewing vulnerabilities and architecture problems. The other is writing a couple of new features. And yes, there's a third agent helping me structure and proofread this post.

It's not science fiction. It's Wednesday.

It sounds like privilege. And it is. But stick around, because this story doesn't end where you think.

I've been using Claude Code for months, and one thing becomes obvious over time: the quality of the output depends directly on your mastery as an orchestrator. Asking the AI for things isn't enough. You have to know *what* to ask for, *how* to structure the context, and *when* to step in.

The first days with these tools can be frustrating. Not so much because it fails at writing code, but because sometimes it over-engineers and tends to repeat itself a lot. It's very junior, and you have to start putting controls on it.

And you can go a long time without making progress, until you sit down to study and learn how to use the tool properly. Learning to create agents, put together skills, iterate well in planning mode, trade experiences with colleagues who inspire you to try something new. It can actually get pretty fun.

Until you get a 500 error, because Anthropic is having trouble with its infra.

Hahaha, back to programming by hand...

Or not?

I recently discovered that you can try other models as good as Anthropic's, and they're open source. The problem is the cost (those [few tokens more](/blog/lnds/2025/07/30/por-unos-pocos-tokens-más)). But I've been experimenting with [Synthetic](https://synthetic.new/) and [OpenCode](https://opencode.ai/) as an alternative (for personal projects).

The interesting part is how you keep learning, and little by little, with [deer steps](/en/blog/lnds/2025/10/31/maps-or-compasses/), you build mastery.

A colleague shared an agent with me that reviews our pull requests. The hook is that this agent is inspired by Linus Torvalds. With his direct, unfiltered style, it tells you exactly what's wrong with your code. No beating around the bush, no "maybe you could consider", no sugarcoated feedback. It tells you your function is garbage and why.

It works like a damn charm!

{{< figure src="licutus.jpg" caption="Linus Torvalds, code review agent edition" >}}

Not because AI is magic, but because someone understood how to configure it for a specific task with a specific tone. The same model that can write you corny poetry can tear your code apart the way the creator of Linux would tear apart a badly written driver. It all depends on the prompt, the context, the orchestration.

The difference between a novice and someone experienced with these tools is knowing how to orchestrate.

## The controlled lab

There's a tool that's been making noise lately: [OpenClaw](https://openclaw.ai/). An open source AI assistant that runs locally and connects to WhatsApp, Telegram, Slack. It can control your browser, run commands, read and write files. The promise is "the AI that actually does things" - from managing your email to checking in for flights.

It sounds powerful. And it is. It's also a minefield if you don't know what you're doing.

There are piles of horror stories.

On January 30 they patched CVE-2026-25253, a CVSS 8.8 vulnerability that allowed remote code execution with a single click. The server didn't validate the origin header on WebSockets. You visited a malicious page and your entire gateway was compromised.

But that's not all. They've found 37 malicious skills on ClawdHub, the community plugin store. An extension called "ClawdBot Agent" showed up in the VS Code marketplace, even though the official team never published any such extension. The project's multiple rebrandings (ClawdBot, then Moltbot, now OpenClaw) have created opportunities for phishing and impersonation.

Does that mean you shouldn't use it? No. It means you have to use it carefully, even as a hobby or an experiment.

I decided to install it and see what's up. My setup: a mini PC running Linux, with no direct internet access, connected only to my tailnet via Tailscale. The dangerous part is that I have access to Telegram and WhatsApp configured, paired and restricted to me alone. The environment is sandboxed as the project recommends. I audit it in depth every day and update to the latest version as soon as it's out. I've had it installed since Sunday.

I implemented a system to remember the things I need to do, with reminders. A mode for playing chess, and Jaime and I even vibe coded (that's my OpenClaw agent's name, yes, it's not very original, but it's an experiment, ok?) an interpreter for algebraic chess notation, so I could pass it the moves.

{{< figure src="jaime1.jpeg" caption="13:04 - The idea: build a chess interface over chat" >}}

{{< figure src="jaime2.jpg" caption="13:19 - Fifteen minutes later, playing chess with Jaime" >}}

From the idea to the first move: fifteen minutes. That includes Jaime understanding the requirement, generating the code for the algebraic notation interpreter, testing it, and leaving it running. Vibe coding at its finest. Although, as I wrote in [Trust the process](/blog/lnds/2025/07/31/2025-07-31-confia-en-el-proceso), this works because there's someone who knows how to orchestrate.

Since I'm a programmer, I've thought about writing the plugins and tools the agent uses myself. In fact it's already using a tool I'm writing to manage my to-do lists. I'll automate other tasks slowly, as I gain confidence in the tool and the tool gains maturity. It's mostly a hobby, but a hobby I treat with production discipline.

Believe me, I'm very careful, but there are things that can go wrong. Prompt injection is the main problem and I don't see a robust solution yet. I don't think anyone is going to invent a semantic firewall anytime soon. The key is to use large models, which tend to be safer, but also more expensive. With API tokens you can easily spend over 50 dollars a day. That's why I use [Synthetic](https://synthetic.new/), which has plans with a spending cap and good models like [GLM 4.7](https://z.ai/blog/glm-4.7) and [Kimi K2.5](https://www.kimi.com/ai-models/kimi-k2-5).

My advice is always caution, but not refusing to investigate and understand these tools before trusting them with critical tasks. It should be obvious, but in the world of tech hype, caution gets mistaken for fear and controlled experimentation gets mistaken for falling behind.

AI agents are powerful tools. They're not magic and they're not the apocalypse. They're capability amplifiers that take good judgment to use well. We're barely peeking into a new world, and that excites me as much as it worries me.

But there's a problem as deep as the security of these tools: access.

I have the resources and the knowledge to use them, configure them, and pay for running them. But most people don't. They'll be left at the mercy of companies like OpenAI, which will hand them these tools in exchange for their privacy and attention.

If we had a digital divide before, now that divide gets wider. Those who understand will orchestrate agents that amplify their work. Those who don't will consume agents that distract them with animations, cheap art, simulated romances, or worse: AI-generated medical diagnoses that replace real professionals.

That last one is already happening in mental health. And it's scary.

A few months ago, thinking about this, I drew a spectrum of attitudes toward AI. At one end the Butlerians, after the Butlerian Jihad in Dune, where humanity bans thinking machines. At the other, the ones I call *cyborgs*, willing to merge with AI. Sarah Connor represents armed resistance; Cypher from The Matrix, voluntary submission.

{{< figure src="espectro-ia.png" caption="The AI spectrum: from Butlerians to Cyborgs. Published in my newsletter." >}}

AI is going to polarize us. It already is. This will be a new intellectual and cultural battlefield. But I wonder whether the problem is really AI, or whether our attitude toward it is just a symptom of something bigger.

AI agents are powerful, and they'll only get more so. They'll improve, but who will have access to them? Who will understand them instead of deifying them? How many will be used to deceive people, or to exploit and squeeze them, stealing their information and attention? Yes, they're powerful, but will we use that power wisely as a society?

I prefer to imagine a different future. One where AI doesn't replace us, but collaborates. Like in Star Trek, when Dax asks the computer:

> DAX: Computer, create a database for all historical references to the Orbs, including all reports of any unexplained phenomena in Bajoran space.
>
> COMPUTER: Time parameters?
>
> DAX: Ten millennia.
>
> COMPUTER: Initializing database. Requested function will require two hours to complete.

{{< figure src="dax.jpeg" caption="Jadzia Dax in Star Trek: Deep Space Nine. The Roddenberrian vision of human-machine collaboration." >}}

It's utopian, I know. Roddenberrian to the bone. But it's the world I'd welcome: agents that amplify what we do, not ones that replace us or exploit us. Tools in the service of humanity, not the other way around.

---

*If this kind of content is valuable to you, consider supporting my work on [Patreon](https://www.patreon.com/lnds). Your support lets me keep writing and experimenting with these technologies to share what I learn.*
