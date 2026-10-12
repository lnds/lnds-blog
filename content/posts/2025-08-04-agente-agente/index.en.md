+++
date = '2025-08-04T09:10:03-04:00'
draft = false
title = 'Agent Code, Claude Code'
tags = ['AI', 'Claude Code', 'agents', 'vibe coding']
slug = 'agent-code-claude-code'
+++

The word agent has become fashionable in the tech-AI underworld. But the truth is that it often gets slapped on tools that aren't really artificial intelligence agents at all.

The definition of an agent is an old one: an entity that perceives its environment, acts autonomously to meet the goals or objectives it is given, learns, and improves its performance.

Today there are AI services on offer called agents that are really just orchestrators and executors of workflows.
Building an agent that lives up to the definition is still a major challenge.

Even so, these services are already being sold, and Claude Code in particular has offered sub agents for a few weeks now.

Creating them is simple, and Anthropic's documentation is fine, but there are already piles of tutorials and videos showing how to use them.
The quality of these videos covers the whole spectrum, and it's hard to know which one is good and will teach you something useful.
In the ones I've seen, I don't feel they explain proper use cases. And I'll take the chance to criticize a lot of these AI tech influencers.
Many are parrots repeating whatever the companies say, buying all of it with no critical analysis.
Others build simplistic examples that give you nothing.

In this case, when they talk about Claude Code, I've seen some of them propose that you create an agent to act as Product Owner,
another agent to be Scrum Master,
another as Developer, a fourth agent to do quality control as tester, and a DevOps agent.
As if that were a good idea!

What a ridiculous thing, emulating Scrum roles as agents. It adds no value whatsoever.
I don't even find the developer - tester split useful.

All you're doing here is spreading waterfall into your work with "agents".
Because, of course, in the end agents are just a way to encapsulate system prompts for specific stages
of your development process.

# Programmer agents

So what do these sub agents actually give you?

I don't have the answer. But I've been running some experiments.

Over the weekend I worked on a little personal project.

My idea was to parallelize feature implementation, but by brute force, pure vibe coding. Could I boost productivity
by running more agents in parallel, the way those internet videos promise?

![](agentes.png)

I thought that by specifying two "software engineer" agents, this would work like a charm.

What I discovered is that one agent can run in parallel more than once, meaning you can have two instances of the same agent running at the same time.
You don't need two types of agents doing the same activities.

The other thing I discovered is that if you're in vibe coding mode, the agents will most likely get in each other's way.

In fact, I asked each agent to work on its own branch, and I used git worktree.

I made two attempts. In the first one I asked them to work on two features in parallel, using git worktree.
I also left them running in auto-accept mode for edits.
To my horror, I found they both ended up working on the main branch, and by sheer luck they didn't wipe each other out.
Both features got implemented, but it really was luck.

For the second attempt I was more explicit. I even required them to create a pull request for each of their proposals.
This time they worked on their respective branches, but watch out: Claude gets disoriented and tends to work in the directory you were standing in
when you started the session.

The first PR went through without problems. But the second one produced a merge conflict, and not a small one. The kind where two
functions overlap each other. What happens is that AI generates a lot of duplicated code (we're in vibe coding mode, remember).
So when Git prepared the patches to merge, it showed a huge overlap of functions.

And that led to a second experiment: I asked Claude to resolve the merge conflict. It worked hard, but it pulled it off.

But all the time I expected to save never materialized. If I had run each feature sequentially,
I would have finished them in less time.

So, the lessons so far:

- To work in parallel with Claude, it's best to have separate sessions (open separate terminals, or use a multiplexer).
- Agents can run in parallel, and each one serves to specialize tasks. Think of them as workflows with a system prompt that spells out the particular skills you want Claude to use when it's in that "mode".
- You have to split the tasks you parallelize so their functionality doesn't overlap, so you don't end up with conflicts.
- Claude is capable of resolving merge conflicts, and that's a skill that can come in handy on other occasions.

I'll keep experimenting with sub agents to see whether they can be truly useful. If you have a use case,
I'd appreciate it if you shared it in the comments.

If you like what you're reading, I invite you to add this blog to your reading list, to share it and, if you're up for it, to subscribe to my [newsletter](https://newsletter.lnds.net) (in Spanish), which for now is my way of keeping a channel open for news
about my projects. Thanks for reading.
