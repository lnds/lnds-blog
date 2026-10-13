+++
date = '2026-05-17T10:00:00-03:00'
title = 'The method matters more than the model'
slug = "method-matters-more-than-model"
tags = ["AI", "agentic programming", "ELP", "BMAD", "SDD", "SPDD", "methodology", "compilers"]
draft = false
+++

Satya Nadella, Microsoft's CEO, defined AGI as the stage where the use of AI has a massive impact on world GDP. For Altman, success is the arrival of the first one-person unicorn: a company run by a single individual and valued at a billion dollars.

Both views are narrow, typical of CEOs thinking about money and about pleasing investors. What about the contribution to humanity? Or to knowledge? Or to curing cancer? Nothing.

I humbly decided to run an experiment and set a different goal, one that's more useful to me at least. I was also spurred on by a conversation with Pedro Burón about how much AI amplifies you as a software developer.

The goal I set is more specific, and confined to the world of software engineering: can a single person do the work of a team of 5 to 10 engineers, a year or two's worth of it, in just one month?

To make it concrete I set out to build a compiler for a language I've been designing for years (a spiritual heir to [Ogú](https://github.com/ogu-lang)). And the compiler doesn't just have to run: it has to generate native code, be fast, and compile over 90% of the language, in one month. It's an experiment along the lines of what I described in [*Fake it till you make it*](/en/blog/lnds/2017/03/01/fake-it-till-you-make-it/), when I put together a transpiler for Ogú in 60 hours, but more ambitious this time. And the result is almost ready. The target is May 21, but you can already see it and start trying it out: the links are at [kaikai-lang.org](https://kaikai-lang.org).

But this post isn't about the language or its compiler. It's about the method that let me do this alongside my day job, while one of my sons was getting married and I was teaching at the university. To tell the whole story I have to talk about the methods for developing with AI that have been settling out over these past months. Get comfortable, this is a long one.

<!--more-->

## The problem with AI assistants at scale

Working with an assistant in a single conversational session works very well for small tasks. When the project grows, the pattern always breaks for the same reasons:

- The context fills up. The agent loses relevant details that were at the beginning.
- Changes step on each other when several tasks are interleaved.
- There's no record of what was tried and discarded.
- Every conversation starts from zero, with no access to what was learned before.

That's the ground the four methods we're about to walk through grew out of. Each one is a different answer to the same problem.

## The Plotter / Pantser spectrum

I introduced these two concepts in *[Maps or compasses](/en/blog/lnds/2025/10/31/maps-or-compasses/)* and came back to the subject in *[Agentic programming and the plotter style](/en/blog/lnds/2025/11/20/agentic-programming-plotter-style/)*. Here's the quick refresher for those who haven't read those articles (though I recommend you do).

**Plotter**: plans before executing. Requirements documents, specifications, diagrams, written architecture. It's the engineering tradition: think first, execute later.

**Pantser**: from the expression *by the seat of his pants*. Iterates in short steps, adjusts with each one. It's not improvisation, it's a lightweight process with discipline.

On this spectrum I'm going to place the four methods: SDD, SPDD, BMAD and ELP. And before them, method zero, the baseline everything else is measured against.

## Method 0: Vibe Coding

Karpathy named it in 2025. The human describes the vibe: how they expect the thing they want to be, how the result feels, and so on. The model implements, and almost nothing gets reviewed. It works for throwaway prototypes, weekend scripts, quick explorations. It fails, no nuance about it, at anything headed for production.

Steve Krouse put it plainly: *vibe code is legacy code*. What you write without a method today is next quarter's technical debt. That's the "gem" we're going to compare the following methods against.

## Method 1: SDD, Spec-Driven Development

> The specification is the source of truth. The code is derived.

That's the inversion SDD proposes. In the classic flow the specification is written first and then thrown away. The code becomes the source of truth and the specification goes stale. SDD flips it: the specification persists, versioned in the repository, and the code is a regenerable derivative. If the requirements change, you regenerate from the updated specification. Changes are systematic regenerations.

An interesting piece of GitHub's implementation, the [Spec Kit](https://github.com/github/spec-kit), is `constitution.md`: a document of the project's non-negotiable principles that the agent must always respect. A layer above the specification of each feature.

SDD works in ordered phases:

1. **Specification**. What the system does, not how. Use cases, acceptance criteria, constraints.
2. **Plan**. The technical strategy. Architecture, technologies, dependencies.
3. **Tasks**. Executable decomposition. Concrete units the agent can pick up autonomously.
4. **Implementation**. The agent generates code against the specification, with tests and documentation.

It's pure Plotter. You draw the map in full detail, then let the agent execute it. It works well when the domain is stable and the specification can capture the truth. It smells like waterfall when requirements change fast, but the upside is that the cost of reimplementing has dropped a lot.

My criticism is the same one I've held my whole life as a software engineer: it's impossible to be clear about everything you have to implement, let alone express it completely and clearly. Unless the systems are very small, this is pure magical thinking in my opinion.

## Method 2: SPDD, Structured Prompt-Driven Development

> If the prompt produces the code, the prompt is code.

[Wei Zhang and Jessie Jie Xia](https://martinfowler.com/articles/structured-prompt-driven/), from Thoughtworks' internal IT team, published this method on Martin Fowler's site. The idea is simple and powerful: if the prompt produces the code, you have to treat it as code. It gets versioned, reviewed in a pull request, reused, improved over time.

The SPDD loop is closed. The business idea is translated into an abstraction, the abstraction is executed as a prompt, the execution is validated, what's validated gets shipped. If a bug shows up later, the fix goes back into the prompt so that prompt and code don't diverge.

The central template is the **REASONS Canvas**, seven mandatory dimensions before any code is generated:

| Letter | Dimension | What it captures |
|---|---|---|
| **R** | Requirements | What to solve and for whom |
| **E** | Entities | Domain model |
| **A** | Approach | Chosen solution and discarded ones |
| **S** | Structure | Components and contracts |
| **O** | Operations | Tasks, sequence, criteria |
| **N** | Norms | Reusable conventions |
| **S** | Safeguards | Risks and mitigations |

The operating rule: if you can't fill in the canvas, the prompt isn't ready. And if it isn't ready, it doesn't run.

SPDD is the most institutional of the four. Its goal is to turn AI assistance from a personal habit into an organizational capability. Plotter, but with engineering discipline applied to the prompt as an artifact.

This looks better than SDD; it accepts the limitation I just described. It rhymes with all the spiral or incremental processes. It's better than waterfall, because it knows perfect first-try specifications don't exist, so it solves that by keeping the spec alive. It's more ceremonial, rigid, engineering-minded. I'd recommend it over SDD, but you have to be aware that it requires that ceremony and discipline, which leads to rigidity.

## Method 3: BMAD, Breakthrough Method for Agile AI-Driven Development

> Twelve or more agents with clear functional roles.

[BMAD](https://github.com/bmad-code-org/BMAD-METHOD) comes from Brian Madison (B Mad, yes). It's the most complete method in terms of roles. Each role is an agent with its own carefully crafted prompt, its own context and its own tools: product manager, architect, developer, user experience, quality assurance, analyst, test engineer. And the list keeps growing.

The human steers the conversation by activating the right role in each phase. When the product manager comes in, the agent takes on that persona. When the architect comes in, it changes. The recent novelty is *Party Mode*: invoking several personas within the same session so they collaborate with each other. It's not process parallelism, it's multi-persona collaboration inside the conversation.

BMAD moves through agile phases, each with a different lead agent:

1. **Brainstorming** (Analyst). Open exploration of the problem.
2. **Requirements document** (Product manager). Requirements and scope.
3. **Architecture** (Architect). Technical decisions.
4. **User experience**. Flows and interfaces.
5. **Stories** (Product manager + Developer). Executable decomposition.
6. **Implementation** (Developer + Quality assurance). Code and tests.

It operates inside the development environment: Claude Code, Cursor. Integration is smooth and the barrier to entry is low. The central difference from SDD is that here there isn't a single living artifact, but a collection of specialized artifacts, each with a responsible agent.

It's agile Plotter. Plotter because it follows ordered phases. Agile because it incorporates the classic agile ceremonies and artifacts.

And it falls into the same agile ruts, which in reality are agile in name only. It also strikes me as an illusion to replicate the human org structure in the process. It carries Conway's Law into the method, and that seems like nonsense to me. But this method appears to enjoy a certain acceptance and popularity for the same reasons people use SCRUM, that is, for the wrong reasons :p.

## Method 4: ELP, Empirical Lane Parallelism

And now we get to the method I've been distilling over the last few months.

*Welcome back, my friends, to the show that never ends* -- Emerson, Lake and Palmer

{{< figure src="elp-1992.jpg" alt="Emerson, Lake & Palmer in concert, 1992" caption="Emerson, Lake & Palmer live, 1992. Photo by Gorupdebesanez, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Emerson,_Lake_%26_Palmer_01.jpg), CC BY-SA 3.0." >}}

Of course the name is a tribute to that prog power trio. Regular readers of this blog know we love progressive rock around here. A powerful and pretentious genre, like this method, or at least that's how it sounds in my head :D.

ELP stands for Empirical Lane Parallelism, a method that combines three ideas:

1. **Parallel lanes**. Each unit of work runs as an isolated session: a *git worktree*, its own branch, its own `tmux` session. Several lanes run at the same time.
2. **The brief as contract**. Each lane receives a structured document that defines its scope, the decisions already made, what to do and what not to do, and what to deliver. It's the product of an explicit *briefing* among the architect, the integrator and the agent.
3. **Empirical capture of the process**. Audits before any code, mandatory retrospectives per lane, and measurements of every build, kept as a dataset that feeds the lanes that follow.

ELP doesn't necessarily replace SDD or SPDD. It can complement them with an explicit pattern for coordinating several agents without the system degrading within a few weeks. It is an alternative to BMAD, though. Here the agents don't have roles specialized by capability; there are only three roles, and one of them is filled by the human.

### The three roles

ELP defines three roles that are independent of each other.

- **Architect**. The human. Decides scope, order, priorities. Approves PRs, authorizes irreversible actions, corrects course when something goes off the rails. **Does not write code line by line.**
- **Integrator**. An AI agent in an interactive session. Maintains the shared context, reads the repository, writes the briefs, launches the lanes and watches their progress. Never touches code directly.
- **Lane**. An AI agent in an isolated session, in autonomous mode. It receives the brief at the start and executes it end to end: explore, diagnose, implement, validate, write the retro, open the PR. It only stops at the *stop-and-report* points declared in the brief.

The lane's autonomy is what makes parallel execution viable. A human can't supervise N lanes at once. The brief replaces continuous supervision. That's why its quality is the ceiling on the lane's quality. A skimpy brief produces a lost agent.

### The brief as contract

The brief is the difference between an agent that delivers a PR ready for review and one that wastes time. It has a canonical structure: objective, context, prior reading, locked decisions, scope (what's IN and what's OUT), required outputs, discipline and instrumentation.

The critical section is **Locked decisions**. AI is trained to be helpful and tends to "improve" what had already been decided. You have to spell it out: *"Don't touch `CHANGELOG.md`. Don't fix issue #219 in this lane. Change the minimum needed to make it pass."* What you DON'T do is as important as what you DO.

The brief is not the spec. It's the order to execute one iteration, a walkthrough of the strategy for tackling the execution of a spec. It defines abort criteria, alternate paths, when to report back to the integrator.

In my case the specs live in GitHub issues, but in yours they could be markdown documents in the same repo or in whatever tracking system you use, like Shortcut, Jira or Linear.

### Empirical capture: no retro, no PR

Here's the biggest difference from the other methods. SDD and BMAD produce artifacts up front. SPDD versions the prompt. ELP also **measures the process**:

- **Phase 0 audits**: purely documentary lanes that validate a milestone's premise before any code is written. In practice, some audits threw out the entire proposal with data, saving weeks of misguided work.
- **Lane retros**: each lane writes `docs/lane-experience-<lane>.md` before opening the PR. No retro, no PR. Timestamps, compile errors encountered, ambiguities, friction points.
- **TSV file of builds**: every invocation of `make` is logged with timestamp, command, result and duration. It's the dataset that lets you honestly evaluate how much each lane costs.

The retros serve four purposes: they capture information while the context is fresh, they're input for the next lane, they're material for evaluating the model's real authorship, and they document gaps that turn into new issues.

ELP is structured Pantser. It doesn't have a complete map. It has principles, a compass and a logbook.

The TSV file is actually optional; I'm using it to measure the method's speed and level of amplification. You can drop it, because that's not necessarily something you care about.

## Quick comparison

|  | SDD | SPDD | BMAD | ELP |
|---|---|---|---|---|
| **Family** | Plotter | Institutional Plotter | Agile Plotter | Structured Pantser |
| **Central artifact** | Living specification | Living prompt | Requirements document + architecture | Brief + retro |
| **Topology** | Specification → regenerated code | Prompt and code in parallel | Agile phases | Parallel lanes |
| **Process capture** | Specification | Prompt | Partial | Retros, audits, TSV file |
| **When it fits** | Stable domain | Large team, organizational scale | One human with several agents in the development environment | Long project, many PRs per day |

There is no best method. There's a method better suited to each problem. The right question isn't *"which one is the most modern"* but *"what problem do I have in front of me"*.

## The compiler case

Let's go back to the experiment from the beginning. Can a single person do a year or two's worth of work by a team of 5 to 10 engineers in one month? I applied ELP to building the compiler for [Kaikai](https://kaikai-lang.org), a self-hosting functional language with algebraic effects and final code emission through LLVM. A project from scratch, starting with a product vision and an overall design written down from day zero.

The figures as of day 27 of the experiment (April 20 to May 17, 2026) come from `git log`, from `gh pr list` and from each lane's TSV file:

| Indicator | Value |
|---|---|
| Total time | 27 calendar days |
| Commits | 1,621 |
| Pull requests merged | 359 |
| Issues closed | 252 |
| Versions released | v0.1.0 to v0.72.1 |
| Peak commits in a single day | 135 (May 2) |
| Phase 0 audits | 10 |
| Lane retros produced | 179 |
| Peak parallel lanes | 3 simultaneous |

The distribution of the commits says something more interesting than the count:

```
   features         ████████████████████   68%   feat + compiler modules
   docs             ████                   14%   audits, retros and design
   fix              ██                      7%   fixes
   release/ci       █                       5%   bump, release, continuous integration
   test             █                       3%
   refactor         █                       3%
```

**14% documentation is high for a compiler**, and that's with the percentage dropping as the codebase grew. It's exactly the empirical dataset ELP recommends: audits, retros, per-feature design documents, honesty targets. In absolute terms that's 233 documentation commits. **7% fixes is low**. The features landed clean thanks to mandatory quality gates: byte-for-byte self-compilation from day 1, local tests before pushing changes, retro before the PR.

Paying that 14% of documentation up front is what keeps fixes at 7%.

What does something like this normally cost? Public points of comparison: Roc, about 5 years of research; Koka, more than 10 academic years; Effekt, about 5 years with a team of PhDs; Crystal, about 3 years with its core team. The human equivalent to reach the same technical scope is on the order of **3 to 4 experienced compiler engineers, for 12 to 18 months, at between USD 1.0 and 1.5 million in salaries**.

One thing I said when I started this project was: "the AI has already read all the papers I need." And it's that bottled [potential intelligence](/blog/lnds/2012/04/17/sobre-la-inteligencia-del-coyote/) that I'm tapping into.

ELP got to the same point in 27 days, with one human (the architect), one integrator agent and parallel lanes. The original target is May 21 and there are still four days of margin left to close out the version that covers 90% of the language.

This is [method](/blog/lnds/2012/05/19/conoces-a-pin-pon/). Every discarded issue, every lane closed as a negative, was ruled out by empirical audit before being implemented and is documented with its retro. Every failure hands us data.

## When to apply ELP, and when not to

ELP fits when the project is going to last months, there's a written vision and design, the architectural principles are locked, there's scope for several PRs in parallel over orthogonal areas, and the architect can devote 10 to 20 minutes per brief.

ELP does **not** fit throwaway prototypes, urgent production fixes, teams without mature tests and continuous integration (ELP amplifies what already exists; without a solid pipeline it amplifies chaos), or projects without a product vision. ELP doesn't invent what to build, it orchestrates it.

If you're going to try it, read the full document describing the method. It's published at [github.com/lnds/elp](https://github.com/lnds/elp), under a CC BY 4.0 license.

## The method matters more than the model

CEOs keep selling the next model. *GPT-7, Claude 5, Gemini Ultra Pro Max.* As if the ceiling on what we can do were in the parameters. In my opinion it isn't, or at least that's not the main thing. I believe the ceiling is in the discipline with which you organize the work around the model.

I'm not selling you snake oil, but I'm telling you this from my experience over these weeks: even if the model changes, the method is what ends up making the difference between a team that delivers and a team that drowns. Between a working compiler in four weeks and a month of *vibe coding* that ends in unmaintainable legacy code.

That's why I think the interesting questions aren't *when AGI arrives* or *which model is the most powerful*, but two much more concrete ones: is AI in its current state good enough to finish your project? And if the answer is yes, what's the method that helps you get there?

With [ELP](https://github.com/lnds/elp) you can measure it and work out the answers yourself.

---

*If you want to keep following this thread, subscribe to the newsletter at [newsletter.lnds.net](https://newsletter.lnds.net) (in Spanish) and tell me which method you're using. Retros count for readers too. And if you want to support the work and talk about these topics in more depth, I invite you to join [my Patreon](https://www.patreon.com/lnds).*
