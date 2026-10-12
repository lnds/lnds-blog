+++
date = '2026-03-16T09:00:00-03:00'
title = 'Building my own agent'
slug = "building-my-own-agent"
tags = ["AI", "agents", "Claude", "software development", "productivity", "podcast"]
draft = false
+++

A little over a month ago I wrote about [the power of agents](/en/blog/lnds/2026/02/04/the-power-of-agents/). In that post I described how I was experimenting with OpenClaw, an open source agent that promised to be "the AI that actually does things". I also talked about the mastery it takes to orchestrate these tools, the digital divide they create, and the security risks they carry.

Update: I stopped using OpenClaw and decided to build my own agent.

## The problem with OpenClaw

I'm not going to sugarcoat this: OpenClaw is a disaster.

First, the rebranding (ClawdBot, then Moltbot, now OpenClaw) brought confusion, phishing opportunities, and fake extensions in marketplaces. The "ClawdBot Agent" extension that showed up in VS Code wasn't from the official team. Neither were the 37 malicious skills on ClawdHub.

Then there's security. CVE-2026-25253, which I mentioned in the previous post -- CVSS 8.8, remote execution with one click -- was just the tip of the iceberg. Between the day I installed it and the day I uninstalled it, three more critical patches went out. The project's fundamental architecture has design problems that make every plugin a potential attack vector. There's no real sandboxing between skills, there's no robust input validation, and the permission system is a joke.

But what finally convinced me was something more mundane: the quality of the code. Contributions accepted without review, tests that don't cover the critical paths, outdated documentation that contradicts the actual behavior. The community is enthusiastic, yes, but enthusiasm without discipline produces fragile software. And when that software has access to your Telegram, your WhatsApp, and can run commands on your machine... no, thanks.

## If you want something done right

So I did what any engineer with too many personal projects would do: I built my own.

It wasn't an impulsive decision. I took notes on what worked and what didn't in OpenClaw.

I knew what I needed: a personal agent that could talk to me over Telegram, that had persistent memory, that could run scheduled tasks, and above all, that I could audit and control completely.

The foundation is the [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview), Anthropic's framework for building agents. It's relatively new, but solid. A single asynchronous Python process, without the unnecessary complexity of microservices or external message queues.

## The architecture

The design is simple and deliberate. A message bus connects the input channels (CLI for development, Telegram for daily use) to a main loop that feeds the orchestrator. The orchestrator wraps the Agent SDK and manages the context, the sessions and the available tools.

{{< figure src="arquitectura.jpg" caption="Architecture of the personal agent" >}}

What makes this agent different from a simple LLM wrapper is its **configurable personality**. The context is built from markdown files that define who the agent is, how it behaves, what it knows about the user, and what tools it has available. These files are editable; even the agent itself, with my authorization, can modify them during the conversation, which lets it update its memory and adapt its behavior.

The tools are implemented as MCP (*Model Context Protocol*) servers. Each tool is an independent module with its own input schema and handler. The agent has access to persistent memory indexed with full-text search, a scheduled task system, and optional modules for voice generation, images and video analysis.

The *skills* system lets you define specialized capabilities in markdown files with YAML metadata. Each skill can specify its own model and allowed tools, and is triggered by explicit commands or by keyword detection in the message.

The most important part? It's a single process. No Redis, no Kubernetes, no oversized infrastructure. A Python process that starts, loads its configuration, and listens. If it crashes, I restart it. If I want to add a tool, I write a handler and register it.

## The robots of dawn

But a personal agent is just the beginning. The real fun is in what you can build *on top of* it.

One of the tools I integrated is a podcast generator. The agent researches a topic, structures a script with two hosts (with distinct personalities, one enthusiastic and the other analytical), and generates the audio using multi-speaker voice synthesis. The result is a complete podcast, generated entirely by AI.

That's how **Los Robots del Amanecer** was born, a podcast about technology and artificial intelligence with virtual hosts. The first episode is already available and covers the week's most relevant news in AI and technology.

{{< figure src="lrda.jpeg" caption="Los Robots del Amanecer: a podcast generated entirely by AI" >}}

I created it to have a comfortable, entertaining way to keep up with this news. The agent also generates a daily summary for me of political news (national and international) and current affairs, which I'll probably share at some point too. I also cut down on social media noise and fake news, since I make sure to curate the sources.

For now you can listen to that first podcast at [lrda.ai](https://lrda.ai), or look for it on [Spotify](https://open.spotify.com/show/4IEVycPrII5zaA9N2b6njd) and [YouTube](https://www.youtube.com/channel/UCAwb2_EnsYvAjOhHrvC12nA).

Is it perfect? No. But it's a starting point, and every episode is an iteration. The interesting thing isn't the final product, it's the process: an agent that can research, write, and produce multimedia content autonomously, that reaches you and keeps you up to date, even in an entertaining way, without the noise and toxicity of social media.

## The point

Building my own agent wasn't just a technical exercise. It was a statement of principles.

In the previous post I talked about the spectrum of attitudes toward AI, from Butlerians to Cyborgs. Building your own agent means placing yourself at a specific point on that spectrum: that of someone who uses the technology without surrendering to it. Of someone who understands that tools are only as good as whoever operates them, and that the best way to understand a tool is to build it.

Not everyone needs to build their own agent. But everyone should understand how they work. Because the alternative is being a passive user of agents that others built for their own interests.

And that, as I told you last time, is scary.

---

*If this kind of content is valuable to you, consider supporting my work on [Patreon](https://www.patreon.com/lnds). Your support lets me keep writing and experimenting with these technologies to share what I learn.*
