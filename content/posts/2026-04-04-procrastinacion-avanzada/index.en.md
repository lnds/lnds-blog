+++
date = '2026-04-04T09:00:00-03:00'
title = 'Advanced procrastination'
slug = "advanced-procrastination"
tags = ["productivity", "AI", "tools", "reflection", "vibe coding"]
draft = false
+++

There's a form of procrastination that is especially treacherous because it disguises itself as work. It's not sitting around watching Netflix. It's not scrolling Bluesky. It's spending three hours configuring the task management system that's going to help you be productive.

You've surely done it. I've practiced it for decades, and I'm afraid I've just reached its most sophisticated form.

It's what I call "advanced procrastination".

{{< figure src="clock.jpg" alt="Clock on the facade of a building" caption="Time passes either way, whether you configure or not. Photo by [John Hult](https://unsplash.com/@johnhult) on [Unsplash](https://unsplash.com/photos/GJOjFMjeVpQ)." >}}

## The GTD era

At some point in the 2000s, David Allen's Getting Things Done became the bible of a generation of overwhelmed knowledge workers. The promise was simple: if you capture everything, organize it well, and review the system regularly, your brain is free to think instead of remember.

The promise was convincing. The problem was the system itself.

I tried everything: Things, Remember The Milk, Notion, piles of notebooks, smart planners. I even bought Evernote's "smart" notebook! Then a system of plain-text folders because "simple is better". Then Obsidian with kanban plugins. Then back to something simpler. Every migration had its rational justification: this tool has better capture, that one has a better weekly review, the other one syncs better with the calendar.

How much time did I spend managing the time management system?

But at least back then the trap was obvious in hindsight. Configuring some tool for hours on a Sunday afternoon while the real tasks waited was clearly self-deception. The disguise was thin.

## The setup era

Then came the era of the perfect setup. The development environment as a work of art.

Abandoning IDEs and going back to Vim, so you never have to leave the terminal. Then Neovim, a true rabbit hole that traps you hunting for the perfect setup, and the wonderful Lua script that solves all your problems and integrates with your GTD tool, of course. Then you discover dotfiles and stow. The `~/.dotfiles` repository became a project in its own right, with its own architecture decisions, its own refactorings.

I look at the history of my dotfiles repository and I see entire work sessions: redesigning the tmux status bar with WezTerm-inspired colors, adding detection of remote sessions via Tailscale, creating keyboard shortcuts to switch between Ghostty windows and tmux panes, building a custom sessionizer. Every commit has its logic. Every feature has its eventual use.

```
feat: redesign tmux status bar with WezTerm-style layout and remote-aware colors
feat: add SSH remote sessions via Tailscale
feat: shortcut list with Cmd+Shift+P and Cmd+Space+Space
feat: replace session scripts with sesh, remove github/betterdisplay widgets
feat: show claude-code instead of version number in status-left
```

I did all of that. I did all of that with Claude Code.

There's the new trap.

## Token anxiety

ThePrimeagen recently published a video called "What is wrong with us?" that should be required viewing for anyone living through the AI agent fever.

{{<youtube ZJEnQOsMtsU>}}

He starts by describing something developers will recognize: that state of deep concentration where, even when you're not in front of the computer, your brain keeps working on the problem. The moment in the shower when you suddenly see the solution. That kind of dull hum behind your ears that stays with you even while you're having dinner with your family.

But now, says ThePrimeagen, that no longer requires a hard problem. The agents are always running. There's always something processing. The hum is permanent.

He cites an [article](https://writing.nikunjk.com/p/token-anxiety) about what they call "token anxiety" in San Francisco: a friend of the author left a party at 9:30 on a Saturday night, neither tired nor sick. He wanted to get back to his agents. Nobody asked. Half the people still at the party were thinking the same thing. The other half were probably checking on their agents' progress from their phones.

The CEO of Y Combinator announced that he quit alcohol for Claude Code. He needs his brain pristine so he can write 10,000 lines of code a day.

There are people in the Bay Area spending a thousand dollars a day on tokens. Multiple agents running in parallel. Ideas generating ideas that generate more ideas. All of it in its most mediocre version, but all of it moving forward.

> "It's almost like I'm not really accomplishing the things I want to accomplish, but I'm building more than I've ever built in my life. Yeah, 10,000 lines of code in a day, easy peasy. But that doesn't mean those 10,000 lines in a day were any good. It doesn't mean I feel satisfied afterwards. It doesn't even mean I built the right thing."

I read that and felt something uncomfortable.

## The most sophisticated disguise

What makes procrastinating with AI more dangerous than the earlier versions is that the results are real. It's not just that you're *configuring* the system. It's that the system *works*. The code gets written. The features appear. The commits pile up.

My tmux bar is genuinely well designed. The sessionizer with Tailscale integration is very useful. The script that shows the active process in the pane is something I use every day.

But while I was building all that with Claude Code, what wasn't I writing? Which posts went unfinished? Which real projects sat on pause while I optimized the environment where I was supposedly going to work on those projects?

GTD procrastination was at least inefficient. You spent time configuring and the result was just configuration. Easy to diagnose, easy to fix.

AI procrastination is efficient. You produce real things. It's just that you can produce the wrong things at impressive speed.

ThePrimeagen puts it well: **the problem was never programming. The problem was always choosing the right problem**. And now we have tools that let us not choose, because we can have four ideas running at the same time. All mediocre. All growing. None finished.

## The permanent rationalization

What the GTD era, the perfect setup era and the agent era have in common is rationalization. There's always a convincing reason to keep configuring instead of doing.

With GTD: "if the system isn't perfect, I'm going to lose important things." With dotfiles: "if the environment isn't optimized, I'll work slower on everything that comes after." With agents: "this is going to save me weeks of work down the road."

All three rationalizations are partially true. That's what makes them resilient. A reasonably good task system does help. A comfortable development environment does make a difference. Well-configured agents do speed up the work.

The problem isn't the premise. The problem is the gradient. There's a point where the marginal return of improving the system is lower than the cost of not doing the work, and it's surprisingly easy to cross that point without noticing.

## What hasn't changed

ThePrimeagen ends his video with a piece of advice for himself, retroactive to 2009, when he stayed up entire nights building his startup in NetBeans, writing PHP:

> "One extra feature in your calendar app is not worth skipping out on some good times with your friends. Hard work got me to where I am now, but it is not who I am."

Twenty years later, same trap, different tool.

What hasn't changed is the nature of the work that matters. It's still the same: understanding the right problem, thinking before executing, choosing what not to do. No agent automates that. On the contrary, agents make that skill more urgent, because the ability to execute is no longer the bottleneck.

I can have five things running in parallel. The question is whether any of the five was the one I should have been doing.

I'm writing this while my tmux has four panes open and Claude Code is running in one of them, waiting for instructions.

The disguise is excellent.

---

*If this post resonated with you, you can subscribe to the [La Naturaleza del Software newsletter](https://newsletter.lnds.net) (in Spanish). Or share it with someone who also has too many agents running.*
