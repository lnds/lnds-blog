---
title: "Judgment and taste"
subtitle: "What AI can't replace"
date: 2026-01-07T12:00:00-03:00
slug: "judgment-and-taste"
tags: ["programming", "AI", "software development", "design"]
categories: ["programming", "the nature of software"]
---

> "Those 10,000 hours you spent becoming a great programmer aren't useless at all. They're what give you the two things that actually matter now: **judgment and taste**."
> — Obie Fernandez

I'm sure that, like me, you've shipped code to production that you didn't fully understand.

If you're a programmer in 2026 and you say this has never happened to you, either you're lying or you're not using the tools available. The question isn't whether we use AI to generate code. The question is whether we understand what we're deploying.

## The infinite crisis

Jake Nations, an engineer at Netflix, recently published a [talk](https://www.youtube.com/watch?v=eIoohUmYpGI) that resonated with conversations I've had with my colleagues.

I recommend watching the video; I've embedded it at the end of this article. Nations's central argument is that the speed of code generation now exceeds our capacity for comprehension, and that's dangerous.

Nations works with a Netflix codebase of around a million lines of Java. According to him, that's equivalent to some five million tokens. And he describes something many of us will recognize: the temptation to let the AI generate, check that it works, and move on without really understanding what was written.

> "I shipped code I didn't quite understand. Generated it, tested it, deployed it, couldn't explain how it worked."

The problem is that production systems always fail in unexpected ways. And when they fail, you'd better be able to understand the code you're debugging at 3 in the morning.

This isn't a new argument. In 1986, Fred Brooks wrote the classic ["No Silver Bullet"](https://worrydream.com/refs/Brooks-NoSilverBullet.pdf), where he identified the **essential** difficulties of building software: complexity, conformity, changeability and invisibility. The **accidental** difficulties, like tools, languages and frameworks, can be solved over time. The essential ones can't. I've already written about this in ["Every company is a software company (or will be)"](/en/blog/lnds/2016/08/30/every-company-is-a-software-company/).

{{<figure src="Fred_Brooks.jpg" caption="Fred Brooks" >}}

Brooks argued that no single innovation would deliver an order-of-magnitude improvement in software productivity. Why? Because the hard part was never the mechanics of coding. It was understanding the real problem and designing the solution.

Forty years later, generative AI seems to give us exactly that: an order-of-magnitude improvement in the mechanics. And precisely because of that, Brooks was right. The essential complexity remains intact.

## Simple is not the same as easy

Rich Hickey, the creator of Clojure, drew a distinction that becomes more relevant every day. In his talk ["Simple Made Easy"](https://www.infoq.com/presentations/Simple-Made-Easy) he explained:

- **Simple** (from the Latin *simplex*, one fold): one thing, no interleaving. Each piece does one thing and doesn't get tangled up with others.
- **Easy** (from the Latin *adjacens*, adjacent): what's within reach, what you can do without effort.

Simple requires thought and design. Easy just means putting something closer.

AI is the ultimate "easy" button. Why think about architecture when the code appears instantly? Why consider alternatives when the first answer "works"?

The problem is that every time we choose easy, we're choosing speed now and complexity later. And AI doesn't distinguish between your essential business logic and the accidental technical debt of past decisions. It replicates everything with the same confidence.

Nations puts it like this: conversational AI interfaces lead to complex context management and conflicts between architectural patterns. The generated code treats all patterns equally, preserving technical debt as if it were a legitimate pattern to follow. When things are complex, everything touches everything else. You can't change one thing without affecting ten others.

We can tell the difference. Or at least we can when we stop long enough to think.

As I wrote in ["Occam's Razor"](/en/blog/lnds/2017/08/29/occams-razor/), quoting Hickey: simplicity is hard work. But whoever has a genuinely simple system is going to be able to make the biggest change with the least effort. They'll spend more time simplifying the problem instead of writing complex code, but when they have to debug their code, there will be less to debug.

## The compulsive programmer

In 1976, Joseph Weizenbaum wrote ["Computer Power and Human Reason"](https://amzn.to/ZcmD2i), a book that was decades ahead of its time. In it he identified a pathology he called "the compulsive programmer":

> "The computer programmer, however, is a creator of universes for which he alone is the lawgiver. So, of course, is the designer of any game. But universes of virtually unlimited complexity can be created in the form of computer programs."

Weizenbaum described programmers who lost themselves in the act of programming, disconnected from the real world, working on code for the pleasure of the activity itself, not to solve real problems. Programmers who couldn't stop.

But he also described the professional programmer, and the difference is crucial:

> "The professional regards programming as a means toward an end, not as an end in itself. **His satisfaction comes from having solved a substantive problem, not from having bent a computer to his will.**"

I've quoted Weizenbaum in earlier posts, in ["Creators of universes"](/blog/lnds/2011/10/11/creadores-de-universos) as well as in ["We are not cooks"](/blog/lnds/2013/03/08/no-somos-cocineros). I think his warning is more urgent today. Because with generative AI, the risk of compulsion multiplies.

When Weizenbaum was writing, interaction with the computer had natural friction: slow compilers, long feedback cycles, forced time to reflect. Today that friction is gone. The code appears instantly. The temptation to keep generating, to add one more thing, to "improve" something that already works, is constant.

The *vibe coder* who generates code without understanding it is not the craftsman the *software craftsmanship* movement described. Nor is he the professional Weizenbaum valued. He's something new: a line worker in the new software factory, trapped in a loop of compulsive generation where the satisfaction comes from watching code appear, not from solving real problems.

## The end of artisanal software (again)

Is programming going to disappear?

My answer is no. I believe we've already left the [artisanal phase of software development](/en/blog/lnds/2025/08/27/the-end-of-artisanal-software/). Now we really can talk about *software factories*, not as billable consulting hours, but as actual production.

I'm lucky to work with very sharp people, like Leo Soto, who put it this way:

> "The initiative over what to build, how to build it and how to verify that we built it right is still on our side. And that is still programming."

This is exactly something we already discussed in 2012 in ["What is programming?"](/blog/lnds/2012/05/09/que-es-programar): **programming is design**. The source code is the final design, not a separate construction artifact.
If you're one of those old-timers who still sees the programmer as a *code monkey*, a code grinder who has to be told the steps in a flowchart, let me tell you that you're very wrong.

AI doesn't change this. It accentuates it.

The definition of programming changes. What remains is the need for **judgment** to know what to build, and **taste** to know how to build it well.

## The S-curve

We're at a moment where AI seems to be advancing at an accelerating pace.

Things look exponential when you're in the middle of the curve. But they may actually be following a logistic curve, the famous S-curve, and we may be about to reach a plateau.

When? I don't know. Maybe soon, maybe not for a while. What I do know is that I've seen this movie before. In the eighties it was Japan's Fifth Generation: the same talk as today, but with nothing to show. Now there's plenty to show, but the S-curve still applies.

The tricky thing about S-curves, as Leo says, is that "a little while longer in the middle part of the S changes the final result enormously". That point before the plateau has a lot of impact.

Jake Nations puts it in historical context: every decade brought a "solution" to the software crisis. The seventies brought things like the C language. The eighties, personal computers. The nineties, object orientation (which brought its own problems with inheritance hierarchies). The 2000s, Agile (which replaced waterfall with sprints and scrum masters). The 2010s, cloud, mobile and DevOps. The 2020s, generative AI.

None was the silver bullet. All of them moved the needle. And after each one, complexity found new ways to grow.

Dijkstra had already observed it: when we had a few weak computers, programming was a minor problem. Now that we have gigantic computers, programming has become a gigantic problem. The power of hardware grew by a factor of a thousand, and society's demands on software grew proportionally.

## What stays on our side

Nations proposes a three-phase approach that, curiously, is already formalized in tools like Claude Code:

1. **Research** the existing system
2. **Plan** the implementation in detail
3. **Execute** with clear specifications

"Plan" mode versus "build" mode. AI accelerates the execution, but the plan is still ours.

The process Nations describes is the following:

1. **Context compression**: turning millions of tokens into thousands of words of clear specification. In his case, 5 million tokens became 2,000 words of specification that a human can review (about the length of this article).

2. **Active validation**: testing the AI's analysis with specific questions about caching, error handling, edge cases. Correcting it when it's wrong. Adding missing context.

3. **Detailed specifications**: writing plans so detailed that a junior engineer can follow them easily. This lets you review the generated code by checking conformance with the plan, instead of trying to understand inventions.

4. **Manual migrations first**: doing the first migration by hand to discover hidden constraints that code analysis can't reveal. Then feeding that knowledge into the automated process.

What can't be delegated:

- **Judgment**: knowing when what the AI produced is correct, robust and appropriate versus when it's subtly wrong.
- **Taste**: recognizing the difference between code that passes tests and code that survives in production.
- **Pattern recognition**: spotting a dangerous architecture because you're the one who's been awake at 3 in the morning dealing with the consequences.

These skills come from experience. From those famous 10,000 hours. From having made mistakes and learned from them. Pattern recognition atrophies when developers lose direct experience with the system's failures.

As Nations says: "Every time we skip thinking to keep up with generation speed, [...] we're losing our ability to recognize problems."

## Beauty, goodness and truth

In ["We are not cooks"](/blog/lnds/2013/03/08/no-somos-cocineros) I wrote that if there's no beauty, goodness and truth in the professional's work, and only the compulsive desire to please, then the profession is no longer worth pursuing.

As Dijkstra would say: "Beauty is our business."

AI can generate code that works. But the beauty of software, the elegance of an API, the clarity of an architecture, the economy of a solution, still requires a human who recognizes it, values it and demands it.

Weizenbaum understood this fifty years ago: the professional programmer's satisfaction comes from having solved a substantive problem, not from having bent the computer to his will. And certainly not from having generated more lines of code that nobody understands.

![](/blog/lnds/2013/03/08/no-somos-cocineros/weizenbaum.jpg)

The beauty of software is appreciated on multiple levels. For users it's the interface, the fluidity, the design. For technical people, the architecture, the elegance of the APIs, the style of the code, the efficiency, the economy of resources

The *vibe coder* who generates code without understanding it is not a craftsman. Barely a line worker in the new software factory. He has his place, but he's not the future of the profession.

The future belongs to those who understand their systems. Not to those who generate more code.

## Synthesis and judgment

Near the end of his talk, Nations offers a reflection worth repeating:

> "We're not using AI to think for us. We're using it to accelerate the mechanical parts [...] The thinking, the synthesis, and the judgment, though, that remains with us."

Artificial intelligence has made significant progress. But, to quote Knuth, there's still an enormous gap between what computers can do and what ordinary people can do. The mysterious insights people have when speaking, listening, creating, and even when they're programming, remain beyond the reach of AI. Much of what we do is still an art.

The question isn't whether we'll use AI. We will. The question is whether we'll understand our systems.

We must keep human comprehension and architectural thinking, while using AI to accelerate the mechanical.

Or as Jake Nations put it:

> "The hard part was never typing the code. It was knowing what to type in the first place."

That hasn't changed. And it's not going to change.

Here's Jake Nations's talk:

 {{<youtube eIoohUmYpGI >}}

---

*If you liked this post, subscribe to my [newsletter](https://lnds.substack.com) (in Spanish) to get more reflections on software development.*

---

**References:**

- [Jake Nations (Netflix) talk on AI Code Generation](https://www.youtube.com/watch?v=eIoohUmYpGI)
- [No Silver Bullet - Fred Brooks (PDF)](https://worrydream.com/refs/Brooks-NoSilverBullet.pdf)
- [Simple Made Easy - Rich Hickey](https://www.infoq.com/presentations/Simple-Made-Easy)
- [Computer Power and Human Reason - Joseph Weizenbaum](https://amzn.to/ZcmD2i)
- [Obie Fernandez's tweet on judgment and taste](https://x.com/obie/status/2008182056358924443)

**Related posts on this blog:**

- [Creators of universes](/blog/lnds/2011/10/11/creadores-de-universos) (2011)
- [What is programming?](/blog/lnds/2012/05/09/que-es-programar) (2012)
- [We are not cooks](/blog/lnds/2013/03/08/no-somos-cocineros) (2013)
- [Every company is a software company (or will be)](/en/blog/lnds/2016/08/30/every-company-is-a-software-company/) (2016)
- [Occam's Razor](/en/blog/lnds/2017/08/29/occams-razor/) (2017)
- [The end of artisanal software](/en/blog/lnds/2025/08/27/the-end-of-artisanal-software/) (2025)
